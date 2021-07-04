#include <sstream>
#include <set>
#include <tuple>
#include <iostream>
#include <set>
#include <map>
#include <vector>

#include "sm_compute_core_manager.h"
#include "registry_utils.h"
#include "rollaut_ws_interface.h"
#include "websocket_utils.h"

void monitoring::Statemachine_execution_core_manager::do_observe(){
    std::map<monitoring::Node*,monitoring::revision_id_t> last_seen_revisions;
    std::map< monitoring::Node* ,std::string> header_info;
    auto sendmsgs2cepscore = [](std::vector<std::string> msgs,
                                std::string ws_api_port,
                                int max_tries = 3){
        struct addrinfo* result, * rp;
        auto tries = 0;
        int cfd = -1;

        for(auto & i = tries;i!=max_tries;++i){
            struct addrinfo hints = {};

            hints.ai_canonname = nullptr;
            hints.ai_addr = nullptr;
            hints.ai_next = nullptr;
            hints.ai_socktype = SOCK_STREAM;
            hints.ai_family = AF_INET;
            hints.ai_flags = AI_NUMERICSERV;

            if (getaddrinfo(nullptr,ws_api_port.c_str(),&hints,&result) != 0)
              return;
            for(rp=result;rp;rp=rp->ai_next)
            {
              cfd = socket(rp->ai_family,rp->ai_socktype,rp->ai_protocol);
              if(cfd == -1) continue;
              if (connect(cfd,rp->ai_addr,rp->ai_addrlen) != -1) break;
              close(cfd);
            }
            freeaddrinfo(result);
            if (!rp) {
                std::this_thread::sleep_for(std::chrono::milliseconds{1000});
                continue;
            }
            break;
        }

        if (tries == max_tries)
            return;
        auto send_ws_message = [](int sck,std::string const & reply) -> bool   {
            auto len = reply.length();
            bool fin = true;
            bool ext1_len = len >= 126 && len <= 65535;
            bool ext2_len = len > 65535;

            std::uint16_t header = 0;
            if (fin) header |= 0x80;
            if(!ext1_len && !ext2_len) header |= len << 8;
            else if (ext1_len) header |= 126 << 8;
            else header |= 127 << 8;
            header |= 1;
            auto wr = write(sck, &header,sizeof header );
            if(wr != sizeof header) return false;
            if (ext1_len)
            {
              std::uint16_t v = len;v = htons(v);
              if( (wr = write(sck, &v,sizeof v )) != sizeof v) return false;
            }
            if (ext2_len)
            {
              std::uint64_t v = len;v = htobe64(v);
              if( (wr = write(sck, &v,sizeof v )) != sizeof v) return false;
            }
            if ( (wr = write(sck, reply.c_str(),len )) != (int)len) return false;
            return true;
        };

        std::string sec_phrase = "gI+FyV802hGAtf5WnhEufA==";
        std::string http_upgrade_request =
                "GET / HTTP/1.1\r\nSec-WebSocket-Version: 13\r\nSec-WebSocket-Key: "+sec_phrase+"\r\n"+
                "Connection: Upgrade\r\nUpgrade: websocket\r\nHost: localhost:"+ws_api_port+"\r\n\r\n";
        send(cfd,http_upgrade_request.c_str(),http_upgrade_request.length(),0);
        std::string unconsumed_data;
        auto upgrade_reply = ws_utils::read_http_request(cfd,unconsumed_data);
        if (!std::get<0>(upgrade_reply)) return;

        auto const & attrs = std::get<2>(upgrade_reply);
        if (!ws_utils::field_with_content("Upgrade","websocket",attrs)) return;

        for(auto m:msgs){
            std::cerr << m << std::endl;
            if(!send_ws_message(cfd,m))break;
            std::this_thread::sleep_for(std::chrono::milliseconds{1000});
        }
    };

    for(;;){
        std::map<std::pair<std::string,std::string>,std::vector< std::string >> cmds;
        monitoring::Message m;
        q->wait_and_pop(m);
        auto loc = is_watch_cmd(m);
        auto watched_node = is_update_info(m);
        if (loc.first){
            auto n = reg->register_observer(loc.second,q);
            last_seen_revisions[n] = monitoring::revision_id_t{};
        } else if (watched_node.first){
            auto last_seen_revision = last_seen_revisions[watched_node.second];
            auto lck = reg->lock(watched_node.second);
            auto new_rev = (watched_node.second)->revision_id;
            last_seen_revisions[watched_node.second] = new_rev;
            auto d = reg->compute_diff(last_seen_revision, watched_node.second);
            std::stringstream sstr;
            monitoring::utils::print_diff(d,sstr,header_info[watched_node.second]);
            //Loop for kills first
            for(auto e : d.elems){
                if ( (e.node->node_type & monitoring::NODE_TYPE_ATTRIBUTE) == 0) continue;
                if (e.node->name != std::string{"kill"} && e.node->name != std::string{"restart"}) continue;
                if (e.node->deleted) continue;
                e.node->deleted = true;
                auto ar = e.node->parent->get_attr("remote");
                auto aa = e.node->parent->get_attr("ws_api");
                auto sm = ((monitoring::Attribute_node<std::string>*)e.node)->value;
                if (aa == nullptr || ar == nullptr) continue;
                std::string remote = ((monitoring::Attribute_node<std::string>*)ar)->value;
                std::string ws_api = ((monitoring::Attribute_node<std::string>*)aa)->value;
                if (sm.length() == 0 || ws_api.length() == 0) continue;
                if (remote.length() == 0) remote = "localhost";
                std::string cmd = "RESTART_STATEMACHINES\n\n";
                cmd.append(sm+"\n");
                cmd.append("watch_dog_"+sm+"\n");
                cmd.append(sm+"_worker"+"\n");
                cmds[std::make_pair(remote,ws_api)].push_back(cmd);
                if (e.node->name == std::string{"restart"}){
                    cmd = "EVENTL\n\nstart_rollout_"+sm+"\n";
                    cmds[std::make_pair(remote,ws_api)].push_back(cmd);
                } else {
                    cmd = "EVENTL\n\ndump_rollout_"+sm+"\n";
                    cmds[std::make_pair(remote,ws_api)].push_back(cmd);
                }
            }
            lck.unlock();
            for(auto e: cmds){
                std::thread thrd{
                    [=](){
                        sendmsgs2cepscore(e.second,e.first.second);
                    }
                };
                thrd.detach();
            }
        }
    }
}
