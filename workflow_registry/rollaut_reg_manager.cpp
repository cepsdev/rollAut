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
#include "tests.h"
#include "rollaut_reg_manager.h"



void rollaut::Registry_manager::run() {
    using namespace monitoring;
    observers.clear();
    if (concurrency < 1) return;

    for(auto i = 0; i < concurrency;++i)
        observers.push_back(std::shared_ptr<Observer>{new Observer{&reg}});
    start();
}

bool rollaut::Registry_manager::message_read(
        int ws_frame_opcode,
        char* data,
        std::size_t len,
        rollaut::Websocketserver_stream* ws_strm,
        int stream_id)
{
    if (ws_frame_opcode == 1) {
        std::string json;
        json.resize(len+1);
        strncpy((char*)json.data(),data,len);
        //std::cerr << json << std::endl;
        rapidjson::Document msg;
        if (msg.Parse(json.data(),json.length()).HasParseError()) return true;

        if (msg["what"] == "command"){
            if (msg["name"] == "subscribe"){
               auto const & params = msg["params"];
               for(auto it = params.Begin(); it != params.End();++it){
                   std::string loc = it->GetString();
                   observers[stream_id % concurrency]->watch(loc,
                                                             ws_strm->sck,
                                                             this);
               }
            } else if (msg["name"] == "write_attribute_value"){
                auto const & params = msg["params"];
                if (!params.IsArray()) return true;
                if (params.GetArray().Size() == 0) return true;
                auto& msg = params.GetArray()[0];
                if (msg.HasMember("loc")
                    && msg.HasMember("entity_id")
                    && msg.HasMember("attribute")){

                    monitoring::aval* val;
                    if (msg["value"].IsInt()){
                        val = new monitoring::aval_entry<std::int64_t>{msg["value"].GetInt()};
                    } else if (msg["value"].IsString()){
                        val = new monitoring::aval_entry<std::string>{msg["value"].GetString()};
                    } else return true;

                    observers[stream_id % concurrency]->write_attribute(
                                std::atoi(msg["entity_id"].GetString()),
                                std::string{msg["attribute"].GetString()},
                                val,
                                std::string{msg["loc"].GetString()},
                                ws_strm->sck,
                                this
                    );
                }
            } else if (msg["name"] == "append_attribute"){
                    auto const & params = msg["params"];
                    if (!params.IsArray()) return true;
                    if (params.GetArray().Size() == 0) return true;
                    auto& msg = params.GetArray()[0];
                    if (msg.HasMember("loc")
                        && msg.HasMember("entity_name")
                        && msg.HasMember("attribute")
                        && msg.HasMember("value") ){

                     monitoring::Node* val;
                     if (msg["value"].IsInt()){
                        val = new monitoring::Attribute_node<std::int64_t>{msg["value"].GetInt()};
                     } else if (msg["value"].IsString()){
                        val = new monitoring::Attribute_node<std::string>{msg["value"].GetString()};
                     } else return true;

                     observers[stream_id % concurrency]->append_attribute(
                        msg["entity_name"].GetString(),
                        std::string{msg["attribute"].GetString()},
                        val,
                        std::string{msg["loc"].GetString()},
                        ws_strm->sck,
                        this
            );
        }
    }
        }
        //message_write(s,ws_strm->sck);
    } else if (ws_frame_opcode == 2){
        for(auto i = 0; i < len;++i)
            std::cerr << (unsigned int)(unsigned char)data[i] << ",";
        std::cerr << std::endl;
    }
    return true;
}
