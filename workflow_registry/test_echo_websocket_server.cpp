#include "tests.h"

bool tests::WebSocketEchoServer::message_read(
        int ws_frame_opcode,
        char* data,
        std::size_t len,
        rollaut::Websocketserver_stream* ws_strm,
        int stream_id)
{
    if (ws_frame_opcode == 1){
        std::string s;
        s.resize(len+1);
        strncpy((char*)s.data(),data,len);
        //std::cerr <<stream_id<< " '"<<s<<"'"<<std::endl;
        message_write(s,ws_strm->sck);
    } else if (ws_frame_opcode == 2){
        for(auto i = 0; i < len;++i)
            std::cerr << (unsigned int)(unsigned char)data[i] << ",";
        std::cerr << std::endl;
    }
    return true;
}


void tests::test_echo_webserver(){
    WebSocketEchoServer ws_interface;
    ws_interface.start();
}
