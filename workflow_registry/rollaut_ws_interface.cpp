#include <iostream>
#include <vector>
#include <set>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <memory>
#include <functional>
#include <optional>
#include <map>
#include <cassert>
#include <malloc.h>
#include <stdio.h>
#include <string.h>
#include <sstream>
#include <string>
#include <unistd.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <sys/epoll.h>
#include <fcntl.h>
#include <netdb.h>
#include "ringbuffer.h"
#include "threadsafe_queue.h"
#include "monitoring.h"
#include "monitoring_observer.h"
#include "http_utils.h"
#include "rollaut_async_stream.h"
#include "rollaut_wsserver_stream.h"
#include "../cryptopp/sha.h"
#include "../cryptopp/filters.h"
#include "../cryptopp/hex.h"
#include "rollaut_ws_interface.h"

static void fatal(std::string reason){
    auto e = errno;
    std::cerr << "***Fatal:"<<reason<<". "<<strerror(e)<< std::endl;
    exit(1);
}

static bool ws_int_on_read_callback(int oc,
                               char*buffer,
                               std::size_t len,
                               rollaut::Websocketserver_stream* ws,
                               void*ctxt,
                               int stream_id){
  auto & ws_int = *((rollaut::Websocket_interface*)(ctxt));
  return ws_int.message_read(oc,buffer,len,ws,stream_id);
}

void rollaut::Websocket_interface::handle_client_communication(
        int epfd,
        epoll_event* evlist,
        int sig_pipe_in,
        std::shared_ptr<rollaut::Websocket_interface::q_t> q,
        int stream_id)
{
    constexpr auto WSHANDSHAKE_STEP_1 = 1;
    std::map<int,std::pair<int,rollaut::Websocketserver_stream>> socket2state;
    auto handle_unknown_socket = [this,&socket2state,epfd,stream_id,WSHANDSHAKE_STEP_1](int sck) ->
            std::pair<int,rollaut::Websocketserver_stream>&
    {
        if (socket2state.find(sck) == socket2state.end() ){
            socket2state[sck] = std::make_pair(
                        WSHANDSHAKE_STEP_1,
                        rollaut::Websocketserver_stream{epfd,sck,stream_id});
            socket2state[sck].second.connected(true);
            socket2state[sck].second.reg_on_read_msg(
                        ws_int_on_read_callback,this);
        }
        return socket2state[sck];
    };
    auto remove_socket_from_watchlist = [&](int sck){
        epoll_event ev;
        ev.events = 0;
        ev.data.fd = sck;
        if(epoll_ctl(epfd,EPOLL_CTL_DEL,sck,&ev) == -1)
           fatal("epol_ctl");
        close(sck);
        socket2state.erase(sck);
    };

    for(;;){
        auto ready = epoll_wait(epfd,evlist,512,-1);
        if (ready == -1){
            if(errno == EINTR) continue; else fatal("epoll_wait");}

        if(ready <= 0) continue;
        //first check for a signaled ctrl pipe
        bool done = false;
        for(ssize_t cur_ev = 0;cur_ev != ready;++cur_ev){
                if (sig_pipe_in != evlist[cur_ev].data.fd)continue;
                done = true;
                if(!(evlist[cur_ev].events & EPOLLIN)) break;
                char cmd;
                read(sig_pipe_in,&cmd,1);

                /*if (cmd == 'Z'){
                    msg m;
                    q->wait_and_pop(m);
                    if (m.what == msg::WRITE_STRING){
                        auto it = socket2state.find(m.sck);
                        if (it==socket2state.end()) break;
                        it->second.second.write_message(m.payload_str);
                    }
                }*/
                break;
        }
        {
         std::vector<msg> v;
         if(q->try_pop(v)){
             for(auto const & m : v){
              if (m.what == msg::WRITE_STRING){
                auto it = socket2state.find(m.sck);
                if (it==socket2state.end()) continue;
                it->second.second.write_message(m.payload_str);
              }
             }
         }
        }

        for(ssize_t cur_ev = 0;cur_ev != ready;++cur_ev){
                int sck = evlist[cur_ev].data.fd;
                if(sck <= 0) continue;
                if (sig_pipe_in == sck) continue;

                handle_unknown_socket(sck);
                auto& ios = socket2state[sck].second;

                if (evlist[cur_ev].events & EPOLLERR || evlist[cur_ev].events & EPOLLHUP ){
                    remove_socket_from_watchlist(sck);
                    continue;
                }

                if (ios.reading_mode() && evlist[cur_ev].events & EPOLLIN)
                {
                    auto success = ios.read_data();
                    if (!success)
                        remove_socket_from_watchlist(sck);
                    else {
                        if(!ios.read_finished())remove_socket_from_watchlist(sck);
                        else {
                            if (ios.write_pending()){
                                epoll_event ev;
                                ev.events = EPOLLOUT;
                                ev.data.fd = sck;
                                if(epoll_ctl(epfd,EPOLL_CTL_MOD,sck,&ev) == -1)
                                    remove_socket_from_watchlist(sck);
                            }
                        }
                    }
                    ++cur_ev;
                    break;
                }
                if (ios.write_pending() && evlist[cur_ev].events & EPOLLOUT){
                    if (ios.out_buffer.empty() || ios.out_buffer.size() <= (size_t)ios.out_pos){
                        epoll_event ev;
                        ev.events = EPOLLOUT;
                        ev.data.fd = sck;
                        //if(epoll_ctl(epfd,EPOLL_CTL_MOD,sck,&ev) == -1);
                        continue;
                    }
                    size_t bytes_to_send = ios.out_buffer.size() - ios.out_pos;
                    for(;bytes_to_send;){
                        auto r = send(sck, ios.out_buffer.data()+ios.out_pos, bytes_to_send,MSG_DONTWAIT);
                        auto e = errno;
                        if (r > 0) {
                            bytes_to_send -= r;
                            ios.out_pos += r;
                            continue;
                        }
                        if (e == EINTR) continue;
                        if (e == EAGAIN || e == EAGAIN){
                            if (bytes_to_send == 1) break;
                            bytes_to_send /= 2;
                            if (bytes_to_send == 0 ) bytes_to_send = 1;
                        }
                    }
                    if ((size_t)ios.out_pos >= ios.out_buffer.size()){
                        ios.write_finished();
                    }

                }
            }
    }
}

void rollaut::Websocket_interface::handle_incoming_connections(){
 socklen_t addrlen = sizeof(struct sockaddr_storage);
 struct sockaddr_storage claddr = {};
 int cfd = -1;
 struct addrinfo hints = {};
 struct addrinfo* result, * rp;
 int lfd = -1;

 hints.ai_canonname = nullptr;
 hints.ai_addr = nullptr;
 hints.ai_next = nullptr;
 hints.ai_socktype = SOCK_STREAM;
 hints.ai_family = AF_INET;
 hints.ai_flags = AI_PASSIVE;// | AI_NUMERICSERV;

 if (getaddrinfo(nullptr,port.c_str(),&hints,&result) != 0)
   fatal("getaddrinfo failed");
 int optval=1;
 for(rp=result;rp;rp=rp->ai_next)
 {
  lfd = socket(rp->ai_family,rp->ai_socktype,rp->ai_protocol);
  if(lfd == -1) continue;
  if (setsockopt(lfd,SOL_SOCKET,SO_REUSEADDR,(char*)&optval,sizeof(optval))) fatal("setsockopt");
  if (bind(lfd,rp->ai_addr,rp->ai_addrlen) == 0) break;
  close(lfd);
 }
 if (!rp) fatal("Websocket_interface::dispatcher(): Could not bind socket to any address.port="+port);
 if (listen(lfd,128)==-1)fatal("listen");
 freeaddrinfo(result);
 int lastly_used_queue = -1;

 for(;;)
 {
  cfd = accept4(lfd, (struct sockaddr*) &claddr, &addrlen,SOCK_NONBLOCK);
  if (cfd == -1)  continue;
  {
      using namespace std;
      bool threads_not_running = false;
      if (epoll_v.empty()){
          std::lock_guard<std::mutex> lk{mtx};
          threads_not_running = true;
          for(auto i = 0; i != max_client_threads; ++i){
              auto fd = epoll_create(512);
              if (fd == -1)
                  fatal("epoll");
              epoll_v.push_back(fd);
              evlist.push_back(new epoll_event[512]);
          }
          io_thread_signal_pipes = std::unique_ptr<int>{new int[2*epoll_v.size()]};
          for(size_t i = 0; i != epoll_v.size(); ++i ) {
              if(pipe2(io_thread_signal_pipes.get()+i*2,O_NONBLOCK) == -1)
                  fatal("pipe");
              auto fd = epoll_v[i];
              auto pfd_in = io_thread_signal_pipes.get()[i*2];
              epoll_event ev;ev.events = EPOLLIN;
              ev.data.fd = pfd_in;
              if(epoll_ctl(fd,EPOLL_CTL_ADD,pfd_in,&ev) == -1)
               fatal("epol_ctl");
              qs.push_back(std::make_shared<q_t>());
          }
      }
      auto thread_idx = (lastly_used_queue + 1) % epoll_v.size();
      {
          std::lock_guard<std::mutex> lk{mtx};
          sck2epollidx[cfd] = thread_idx;
      }
      auto fd = epoll_v[thread_idx];
      epoll_event ev;ev.events = EPOLLIN;ev.data.fd = cfd;
      if(epoll_ctl(fd,EPOLL_CTL_ADD,cfd,&ev) == -1)
       fatal("epol_ctl");
      lastly_used_queue = thread_idx;
      if (threads_not_running){
          for(size_t i = 0; i != epoll_v.size(); ++i ) {
              std::thread th{&Websocket_interface::handle_client_communication,this,
                             epoll_v[i],
                             evlist[i],
                             io_thread_signal_pipes.get()[i*2],
                             qs[i],
                             i
           };
              th.detach();
          }
      }
  }
 }
}

void rollaut::Websocket_interface::message_write(std::string const & str,
                                                 int sck)
{
    int thidx=-1;
    int pfd_out;
    q_t* q;
    {
        std::lock_guard<std::mutex> lk{mtx};
        auto it = sck2epollidx.find(sck);
        if (it == sck2epollidx.end()) return;
        thidx = it->second;
        pfd_out = io_thread_signal_pipes.get()[thidx*2+1];
        q = qs[thidx].get();
    }
    msg m;
    m.what = msg::WRITE_STRING;
    m.payload_str = str;
    m.sck = sck;
    q->push(m);
    char c = 'Z';
    write(pfd_out,&c,1);
}

void rollaut::Websocket_interface::start(bool spawn_thread){
    if (spawn_thread){
        std::thread th{&Websocket_interface::handle_incoming_connections,this};
        th.detach();
    } else {
        handle_incoming_connections();
    }
}
