#ifndef TESTS_H
#define TESTS_H
#include "rollaut_ws_interface.h"

namespace tests{

 class WebSocketEchoServer: public rollaut::Websocket_interface{
  public:
    bool message_read(int ws_frame_opcode,
                      char* data,
                      std::size_t len,
                      rollaut::Websocketserver_stream*,
                      int stream_id) override;
 };


 void test_ringbuffer();
 void test_thread_safe_queue_with_ringbuffer();
 void test_add_node_and_locks();
 void test_basic_observer();
 void test_echo_webserver();
 void test_state_stream_service();

}

#endif // TESTS_H
