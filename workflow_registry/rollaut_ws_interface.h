#ifndef ROLLAUT_WS_INTERFACE_H
#define ROLLAUT_WS_INTERFACE_H

#include <vector>
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
#include <queue>
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
#include "rollaut_wsserver_stream.h"

namespace rollaut{
    class Websocket_interface{
    public:
        struct msg{
         enum {CONNECTION,WRITE_STRING} what;
         int sck;
         std::string payload_str;
        };
        using q_t = threadsafe_queue<msg,std::queue<msg>>;
        std::map<int,int> sck2epollidx;
        std::mutex mtx;
        void handle_incoming_connections();
        void handle_client_communication(int epfd,
                                         epoll_event* evlist,
                                         int sig_pipe_in,
                                         std::shared_ptr<q_t>,
                                         int stream_id);
        std::vector<std::shared_ptr<q_t>> qs;
        std::vector< int > epoll_v;
        std::vector<epoll_event*> evlist;
        std::unique_ptr<int> io_thread_signal_pipes;
        std::string port = "3333";
        int max_client_threads = 1;
        void set_port(std::string p) {port=p;}
        void set_max_client_threads(int v) {max_client_threads=v;}
        void set_max_client_threads(int&v){if ( v <= 1) return; max_client_threads=v;}
        int get_max_client_threads(){return max_client_threads;}
        void start(bool spawn_thread = false);
        void message_write(std::string const & msg,int sck);
        virtual bool message_read(
                                 int ws_frame_opcode,
                                 char* data,
                                 std::size_t len,
                                 rollaut::Websocketserver_stream*,
                                 int stream_id) = 0;

    };
}
#endif // ROLLAUT_WS_INTERFACE_H
