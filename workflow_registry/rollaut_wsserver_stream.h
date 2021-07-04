#ifndef ROLLAUT_WSSERVER_STREAM_H
#define ROLLAUT_WSSERVER_STREAM_H
#include "http_utils.h"
#include "rollaut_async_stream.h"
#include <set>
#include <tuple>
#include <stdexcept>

namespace rollaut{
    class Websocketserver_stream: public rollaut::Async_stream {
    public:
        static constexpr int STATE_CONNECTION_ESTABLISHED = 1;
        static constexpr int STATE_NO_CONNECTION = 0;
        static constexpr int STATE_IN_HANDSHAKE_WAITING_FOR_UPGRADE_REQUEST = 2;
        static constexpr int STATE_IN_HANDSHAKE_CONFIRMING_UPGRADE_REQUEST = 4;
        static constexpr int STATE_WEBSOCKET_CONNECTION_ESTABLISHED = 8;
        static constexpr int STATE_WEBSOCKET_WAITFOR_MSG = 16;
        static constexpr int STATE_WEBSOCKET_SENDING_MSG = 32;

        struct websocket_frame{
         std::vector<unsigned char> payload;
         bool fin = false;
         bool rsv1 = false;
         bool rsv2 = false;
         bool rsv3 = false;
         std::uint8_t opcode = 0;
        };

        struct not_connected: public std::runtime_error{
            not_connected(std::string w):std::runtime_error{w}{}
        };

    private:
        static constexpr int WS_HEADER_READ = 1;
        static constexpr int WS_PAYLOAD_LEN_READ = 2;
        static constexpr int WS_READING_PAYLOAD = 3;
        int ws_state = 0;
        int stream_id = 0;

        std::uint16_t cur_ws_header;
        std::uint16_t cur_ws_opcode;
        std::uint16_t cur_ws_fin;
        std::uint16_t cur_ws_rsv1;
        std::uint16_t cur_ws_rsv2;
        std::uint16_t cur_ws_rsv3;
        std::uint16_t cur_ws_payload_len_1;
        std::size_t ws_payload_len;
        bool ws_masked;
        std::size_t ws_buffer_consumed;
        std::size_t cur_ws_payload_start;
        std::size_t ws_payload_consumed;
        std::uint32_t ws_mask_key;

        std::vector<char> cur_ws_payload;

        std::set< std::pair<bool(*)(Websocketserver_stream*,void*ctxt),void*> >
         on_ws_established;
        std::set< std::pair<bool(*)(int,char*,std::size_t len,Websocketserver_stream*,void*ctxt,int),void*> >
         on_read_ws_msg_handlers;

        bool(*on_read_ws_msg)(int,char*,std::size_t len,Websocketserver_stream*,void*ctxt) = nullptr;

        int state = STATE_NO_CONNECTION;
        bool handle_upgrade_request();
        void ev_ws_established();
    public:
        Websocketserver_stream() = default;
        Websocketserver_stream(int e,int s,int sid):Async_stream{e,s},stream_id{sid}{

        }
        void reg_on_connect(bool(*f)(Websocketserver_stream*,void*ctxt),void* tag);
        void reg_on_read_msg(bool(*f)(int,char*,std::size_t,Websocketserver_stream*,void*,int),void* tag);
        bool read_finished() override ;
        void write_finished() override;
        void connected(bool b) override;
        bool reading_mode();
        void handle_epoll(decltype(state) new_state);
        void read_message(  bool(*fn)(int,char*,std::size_t,Websocketserver_stream*,void*)  );
        void write_message(std::string const & msg);
    };
}

#endif // ROLLAUT_WSSERVER_STREAM_H
