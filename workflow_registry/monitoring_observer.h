#ifndef MONITORING_OBSERVER_H
#define MONITORING_OBSERVER_H
#include "monitoring.h"
namespace rollaut{
 class Websocket_interface;
}

namespace monitoring{
    class Observer{
    public:
        static constexpr int MSG_WATCH = 1;
        static constexpr int MSG_WRITE_ATTRIBUTE = 2;
        static constexpr int MSG_APPEND_ATTRIBUTE = 3;
    protected:
        Observable::queue_t q;
        monitoring::Registry* reg;
        std::pair<bool,std::string> is_watch_cmd(monitoring::Message msg){
            if (msg.what == monitoring::Message::MSG_USER_DEFINED && msg.ext == MSG_WATCH)
                return {true,msg.ext_s};
            return {false,{}};
        }
        std::pair<bool,monitoring::Node*> is_update_info(monitoring::Message msg){
            if (msg.what == monitoring::Message::MSG_REV_UPDATE)
                return {true,msg.node};
            return {false,nullptr};
        }
    public:
        Observer(monitoring::Registry* reg,bool start_thread = true):
            q{new threadsafe_queue<monitoring::Message,Ringbuffer<monitoring::Message>>{}},
            reg{reg}
        {
         if (start_thread) {
              std::thread t{&Observer::do_observe,this};
              t.detach();
         }
        }
        monitoring::Observable::queue_t get_queue() const {
         return q;
        }
        void watch(std::string loc,int sck=-1,rollaut::Websocket_interface* ws_int=nullptr ){
         q->push({monitoring::Message::MSG_USER_DEFINED,
                  MSG_WATCH,
                  nullptr,
                  loc,
                  nullptr,
                  sck,
                  ws_int,
                  0,
                  {},
                  {}
                 });
        }
        void write_attribute(
                  int entity_id,
                  std::string attr_name,
                  aval* val,
                  std::string loc,
                  int sck=-1,
                  rollaut::Websocket_interface* ws_int=nullptr
                  ) {
          monitoring::Message m={};
          m.what = monitoring::Message::MSG_USER_DEFINED;
          m.ext  = MSG_WRITE_ATTRIBUTE;
          m.node = nullptr;
          m.ext_s = loc;
          m.payload = val;
          m.sck = sck;
          m.ws_int = ws_int;
          m.ext2 = entity_id;
          m.ext_s2 = attr_name;
          q->push(m);
        }

        void append_attribute(
         std::string entity_name,
         std::string attr_name,
         Node* attribute_node,
         std::string loc,
         int sck=-1,
         rollaut::Websocket_interface* ws_int=nullptr)
        {
          monitoring::Message m={};
          m.what = monitoring::Message::MSG_USER_DEFINED;
          m.ext  = MSG_APPEND_ATTRIBUTE;
          m.node = nullptr;
          m.ext_s = loc;
          m.payload = attribute_node;
          m.sck = sck;
          m.ws_int = ws_int;
          m.ext_s2 = attr_name;
          m.ext_s3 = entity_name;
          q->push(m);
        }


        virtual void do_observe();
    };
}

#endif // MONITORING_OBSERVER_H
