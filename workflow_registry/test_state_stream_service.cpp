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

void tests::test_state_stream_service(){

    monitoring::Registry reg;
    auto print_reg = [&reg](){     walk_reg(reg,[](monitoring::Node* n,int depth){
            for(int i = 0; i != depth;++i) std::cout << "  ";
            std::cout << n->name <<" (" << n->node_type<< ", rev:"<< n->revision_id <<")" << std::endl;
        });};

    rollaut::Registry_manager regm{reg};
    regm.get_reg().add_node("rollouts");
    regm.get_reg().add_node("rollouts/scheduled");
    regm.get_reg().add_node("rollouts/history");
    reg.add_node("rollouts/scheduled/Restart Kassa",monitoring::NODE_TYPE_ENTRY);
    std::thread th{
        [&reg](){
            std::this_thread::sleep_for(std::chrono::milliseconds(5000));
            reg.add_node("rollouts/scheduled/Restart Kassa 1",monitoring::NODE_TYPE_ENTRY);
            std::this_thread::sleep_for(std::chrono::milliseconds(1000));
            reg.add_node("rollouts/scheduled/Restart Kassa 2",monitoring::NODE_TYPE_ENTRY);
            for(int i = 3;;++i){
                reg.add_node("rollouts/scheduled/Restart Kassa "+std::to_string(i),monitoring::NODE_TYPE_ENTRY);
                std::this_thread::sleep_for(std::chrono::milliseconds(1000));
            }
        }
    };
    th.detach();
    regm.run();
}
