#include "rollaut_wsserver_stream.h"
#include "../cryptopp/sha.h"
#include "../cryptopp/filters.h"
#include "../cryptopp/hex.h"
#include <sstream>
#include <string>
#include <unistd.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <sys/epoll.h>
#include <fcntl.h>
#include <netdb.h>
#include <iostream>

bool rollaut::Websocketserver_stream::handle_upgrade_request(){
      std::size_t data_consumed;
      auto rhr = check_for_http(data_consumed);
      consume_in_buffer(data_consumed);

      if (!std::get<0>(rhr.second))return false;

      auto const & attrs = std::get<2>(rhr.second);
      //std::cerr << "A1" << std::endl;
      if (  !(http::field_with_content("upgrade","websocket",attrs) ||
            http::field_with_content("Upgrade","websocket",attrs) ||
            http::field_with_content("Upgrade","Websocket",attrs) ||
            http::field_with_content("upgrade","Websocket",attrs)))
      return false;
      //std::cerr << "A2" << std::endl;
      auto r = http::get_http_attribute_content("Sec-WebSocket-Key",attrs);
      if (!r.first) {
          r = http::get_http_attribute_content("sec-websocket-key",attrs);
      }
      if (!r.first)return false;
      //std::cerr << "B" << std::endl;
      auto phrase = r.second+"258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
      unsigned char digest[CryptoPP::SHA::DIGESTSIZE];
      CryptoPP::SHA().CalculateDigest(digest, (unsigned char *)phrase.c_str(),phrase.length());
      auto hash = http::encode_base64(digest,CryptoPP::SHA::DIGESTSIZE);
      std::stringstream response;
      response
       << "HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\n"
       << "Connection: Upgrade\r\nSec-WebSocket-Accept: "
       << hash <<"\r\n\r\n";
      state = STATE_IN_HANDSHAKE_CONFIRMING_UPGRADE_REQUEST;
      write_data(response.str());
      //std::cerr << "CONNECTED!" << std::endl;
      return true;
}

void rollaut::Websocketserver_stream::ev_ws_established(){
    for(auto handler:on_ws_established){
        handler.first(this,handler.second);
    }
    if (on_read_ws_msg_handlers.size())
    {
        state |= STATE_WEBSOCKET_WAITFOR_MSG;
        ws_state = 0;
        ws_buffer_consumed=0;
        cur_ws_payload.clear();
        epoll_event ev;
        ev.events = EPOLLIN;
        ev.data.fd = sck;
        if(epoll_ctl(epfd,EPOLL_CTL_MOD,sck,&ev) == -1);
    }
}

void rollaut::Websocketserver_stream::reg_on_connect(bool(*f)(Websocketserver_stream*,void*ctxt),void* tag){
    on_ws_established.insert(std::make_pair(f,tag));
}
void rollaut::Websocketserver_stream::reg_on_read_msg(
        bool(*f)(int,char*,std::size_t,Websocketserver_stream*,void*,int),void* tag)
{
    on_read_ws_msg_handlers.insert(std::make_pair(f,tag));
    state |= STATE_WEBSOCKET_WAITFOR_MSG;
}

bool rollaut::Websocketserver_stream::read_finished() {
    if (state & STATE_IN_HANDSHAKE_WAITING_FOR_UPGRADE_REQUEST){
        return handle_upgrade_request();
    }
    for (;(state & STATE_WEBSOCKET_WAITFOR_MSG) && bytes_in_in_buffer();){
        if (ws_state == 0){
           if (num_of_bytes_in_in_buffer() < sizeof(cur_ws_header)) return true;
           cur_ws_header = *((std::uint16_t*)in_buffer_data());
           cur_ws_opcode = cur_ws_header & 0xF;
           cur_ws_fin = (cur_ws_header & 0x80)>>7;
           cur_ws_rsv1 = cur_ws_header & 0x40;
           cur_ws_rsv2 = cur_ws_header & 0x20;
           cur_ws_rsv3 = cur_ws_header & 0x10;
           ws_masked = cur_ws_header >> 15;
           ws_mask_key = 0;
           cur_ws_payload_len_1 = (cur_ws_header >> 8) & 0x7F;
           ws_state = WS_HEADER_READ;
           ws_buffer_consumed += sizeof(cur_ws_header);
        }
        if (ws_state == WS_HEADER_READ){
            if (cur_ws_payload_len_1 == 126){
                if (num_of_bytes_in_in_buffer() < ws_buffer_consumed + sizeof(std::uint16_t))
                    return true;
                ws_payload_len = ntohs( *((std::uint16_t*)(in_buffer_data()+ws_buffer_consumed)) );
                ws_buffer_consumed += sizeof(std::uint16_t);
            }
            else if (cur_ws_payload_len_1 == 127){
                if (num_of_bytes_in_in_buffer() < ws_buffer_consumed + sizeof(std::uint64_t))
                    return true;
                ws_payload_len = be64toh( *((std::uint64_t*)(in_buffer_data()+ws_buffer_consumed)) );
                ws_buffer_consumed += sizeof(std::uint64_t);
            } else ws_payload_len = cur_ws_payload_len_1;
           ws_state = WS_PAYLOAD_LEN_READ;
        }

        if (ws_state == WS_PAYLOAD_LEN_READ){
            if(ws_masked){
                if (num_of_bytes_in_in_buffer() < ws_buffer_consumed + sizeof(std::uint32_t))
                    return true;
                ws_mask_key = *((std::uint32_t*)(in_buffer_data()+ws_buffer_consumed));
                ws_buffer_consumed+=sizeof(std::uint32_t);
            }
            ws_state = WS_READING_PAYLOAD;
            ws_payload_consumed = 0;
            cur_ws_payload_start = ws_buffer_consumed;
        }
        if (ws_state == WS_READING_PAYLOAD){
            for(;ws_buffer_consumed<num_of_bytes_in_in_buffer() &&
                ws_payload_consumed < ws_payload_len;++ws_buffer_consumed,++ws_payload_consumed){
                in_buffer_char_at(ws_buffer_consumed) = in_buffer_char_at(ws_buffer_consumed)
                          ^ ((unsigned char *)&ws_mask_key)[ (ws_payload_consumed) % 4];
            }
        }

        if ( ws_state == WS_READING_PAYLOAD && ws_payload_consumed == ws_payload_len){
            cur_ws_payload.insert(cur_ws_payload.end(),
                                  in_buffer_data()+cur_ws_payload_start,
                                  in_buffer_data()+cur_ws_payload_start+ws_payload_consumed);

            consume_in_buffer(ws_buffer_consumed);
            cur_ws_payload_start = ws_buffer_consumed = 0;
            ws_state = 0;
        } else return true;

        if(cur_ws_fin){
            if (on_read_ws_msg_handlers.size() == 0)
                state = state & ~STATE_WEBSOCKET_WAITFOR_MSG;
            ws_state = 0;
            if (on_read_ws_msg)
                on_read_ws_msg(cur_ws_opcode,
                               cur_ws_payload.data(),
                               cur_ws_payload.size(),this,nullptr);
            on_read_ws_msg = nullptr;
            for(auto h:on_read_ws_msg_handlers){
                h.first(cur_ws_opcode,
                               cur_ws_payload.data(),
                               cur_ws_payload.size(),this,h.second,stream_id);
            }
            cur_ws_payload.clear();
        }
    }
    return true;
}
void rollaut::Websocketserver_stream::write_finished() {
    if (state & STATE_IN_HANDSHAKE_CONFIRMING_UPGRADE_REQUEST){
        state = STATE_WEBSOCKET_CONNECTION_ESTABLISHED;
        ev_ws_established();
        return;
    }
    out_buffer.clear();
    handle_epoll(state & ~STATE_WEBSOCKET_SENDING_MSG);
    state &= ~STATE_WEBSOCKET_SENDING_MSG;
}
void rollaut::Websocketserver_stream::connected(bool b) {
    if (b && state == STATE_NO_CONNECTION)
        state = STATE_CONNECTION_ESTABLISHED | STATE_IN_HANDSHAKE_WAITING_FOR_UPGRADE_REQUEST;
    else if (!b) state = STATE_NO_CONNECTION;
}
bool rollaut::Websocketserver_stream::reading_mode(){
    if (state & STATE_WEBSOCKET_CONNECTION_ESTABLISHED){
        return STATE_WEBSOCKET_WAITFOR_MSG & state;
    }
    return state & STATE_IN_HANDSHAKE_WAITING_FOR_UPGRADE_REQUEST;
}

void rollaut::Websocketserver_stream::handle_epoll(decltype(state) new_state){
    epoll_event ev;
    ev.events = EPOLLIN;
    ev.data.fd = sck;
    if ( !(state & STATE_WEBSOCKET_SENDING_MSG) && (new_state & STATE_WEBSOCKET_SENDING_MSG))
    {
        ev.events |= EPOLLOUT;
        if(epoll_ctl(epfd,EPOLL_CTL_MOD,sck,&ev) == -1);
    }
    else if (
             !(state & STATE_WEBSOCKET_WAITFOR_MSG) ||
             ((state & STATE_WEBSOCKET_SENDING_MSG) && !(new_state & STATE_WEBSOCKET_SENDING_MSG)))
    {
        if(epoll_ctl(epfd,EPOLL_CTL_MOD,sck,&ev) == -1);
    }

}

void rollaut::Websocketserver_stream::read_message(  bool(*fn)(int,char*,std::size_t,Websocketserver_stream*,void*)  ){
    if (!(state & STATE_WEBSOCKET_CONNECTION_ESTABLISHED)) return;
    handle_epoll(state | STATE_WEBSOCKET_WAITFOR_MSG );
    state = (state & STATE_WEBSOCKET_CONNECTION_ESTABLISHED) | STATE_WEBSOCKET_WAITFOR_MSG;
    ws_state = 0;
    ws_buffer_consumed=0;
    cur_ws_payload.clear();
    on_read_ws_msg = fn;
}

void rollaut::Websocketserver_stream::write_message(std::string const & msg){
    if (!(state & STATE_WEBSOCKET_CONNECTION_ESTABLISHED))
        throw not_connected{"STATE_WEBSOCKET_CONNECTION_ESTABLISHED not set"};
    handle_epoll(state | STATE_WEBSOCKET_SENDING_MSG);
    state |= STATE_WEBSOCKET_SENDING_MSG;

    auto len = msg.length();
    bool fin = true;
    bool ext1_len = len >= 126 && len <= 65535;
    bool ext2_len = len > 65535;

    std::uint16_t header = 0;
    if (fin) header |= 0x80;
    if(!ext1_len && !ext2_len) header |= len << 8;
    else if (ext1_len) header |= 126 << 8;
    else header |= 127 << 8;
    header |= 1;
    write_data((char*)&header,sizeof header);
    if (ext1_len)
    {
      std::uint16_t v = len;v = htons(v);
      write_data((char*)&v,sizeof v);
    }
    if (ext2_len)
    {
      std::uint64_t v = len;v = htobe64(v);
      write_data((char*)&v,sizeof v);
    }
    write_data(msg.data(),len);
}

