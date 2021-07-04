/*

Copyright 2019 Tomas Prerovsky <tomas.prerovsky@ceps.technology>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/


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
#include <chrono>
#include <fstream>

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
#include "rollout_serialization.h"
#include "rollaut_rollout_db_importer.h"
#include "registry_utils.h"
#include "sm_compute_core_manager.h"
#include "websocket_utils.h"

namespace rollaut{
 class Rollout_executer: public monitoring::Observer{
    rapidjson::Document config;
    std::mutex mtx;
    short ws_api_port_base = 30000;
    short ws_api_range = 10000;
    short next_ws_api_port = ws_api_port_base;
    bool pump_fake_data = false;
    short get_ws_api_port (){
        std::lock_guard<std::mutex> lk{mtx};
        auto t = next_ws_api_port;
        next_ws_api_port = ws_api_port_base+((next_ws_api_port-ws_api_port_base + 1) % ws_api_range);
        return t;
    }

 public:
     class config_failed : public std::runtime_error { public: config_failed(std::string w):std::runtime_error{w}{} };
     class launch_failed : public std::runtime_error { public: launch_failed(std::string w):std::runtime_error{w}{} };
     Rollout_executer(monitoring::Registry* reg,
                      bool fake_data):monitoring::Observer{reg,false},pump_fake_data{fake_data}
     {
         std::stringstream config_data;
         {
             std::ifstream is{"rollaut.json"};
             for(;is;){
                 int ch;
                 if( (ch = is.get()) < 0) break;
                 config_data << (char)ch;
             }
         }
         if (config_data.str().size() && config.Parse(config_data.str().data()).HasParseError())
             throw config_failed{"Invalid configuration file: rollaut.json illformed."};

         std::thread th{&Rollout_executer::do_observe,this};
         th.detach();
     }
     void do_observe() override;
     void do_execute(monitoring::Node* rollout);
 };
 class Rollout_observe_scheduled_time_and_flip_processing_status:
         public monitoring::Observer{
 public:
     Rollout_observe_scheduled_time_and_flip_processing_status(monitoring::Registry* reg,
                         bool start_thread = true)
                           :monitoring::Observer{reg,start_thread}
     {
     }
     void do_observe() override;
 };
}

static void print_reg (monitoring::Registry& reg){
    walk_reg(reg,[](monitoring::Node* n,int depth){
        for(int i = 0; i != depth;++i) std::cout << "  ";
        std::cout << n->name <<" (" << n->node_type<< ", rev:"<< n->revision_id <<")";
        if (reg_utils::removed(n)) std::cout << " removed";
        else if (n->node_type & monitoring::NODE_TYPE_ATTRIBUTE){
            if (n->to_string().length()>128)
             std::cout << "=" << "...";
            else
             std::cout << "=" << n->to_string();
        }
        std::cout << std::endl;
    });
}

void rollaut::Rollout_observe_scheduled_time_and_flip_processing_status::do_observe(){
    using namespace std;
    using namespace reg_utils;
    for(;;){
        std::vector<monitoring::Message> mv;
        q->try_pop(mv);
        if (!mv.size()){
            std::this_thread::sleep_for(chrono::milliseconds{1000});
        }

        {
            long sensible_time_interval_in_secs = 10;

            auto al = reg->acquire_loc("rollouts/scheduled/");
            //std::cerr << "FLIPPER" << std::endl;
            auto rollouts = al.first;
            if (!rollouts) continue;
            time_t t = time(nullptr);
            //std::cerr << "t:" << t << std::endl;
            for(auto child:rollouts->children){
                if (removed(child)) continue;
                auto entity_attribute = child->get_attr("entity");
                if (entity_attribute == nullptr) continue;
                if (entity_attribute->to_string() != "rollout") continue;
                auto rollout_entry = child;

                auto processingstatus_attribute = rollout_entry->get_attr("processing_status");
                if (processingstatus_attribute != nullptr && !reg_utils::removed(processingstatus_attribute)) continue;
                auto scheduled_start_attr = rollout_entry->get_attr("scheduled_time_unix_time");
                if (scheduled_start_attr == nullptr || reg_utils::removed(scheduled_start_attr) )
                    continue;
                auto scheduled_start =
                        ((monitoring::Attribute_node<time_t>*)scheduled_start_attr)->value;

                //std::cerr << scheduled_start << std::endl;
                //std::cerr << "diff:"<< t - scheduled_start << std::endl;

                if (scheduled_start - sensible_time_interval_in_secs  > t) continue;
                if (scheduled_start + sensible_time_interval_in_secs < t) continue;
                //std::cerr << "LIFT OFF" << std::endl;

                /*auto dont_execute = rollout_entry->get_attr("dont_execute");

                if (dont_execute != nullptr)
                    if (((monitoring::Attribute_node<bool>*)dont_execute)->value)
                        continue;*/

                a("processing_status",std::string{"queued"},rollout_entry);
                reg->trigger_observers(rollouts);
            }
        }

     }
}
void rollaut::Rollout_executer::do_observe(){
    using namespace std;
    using namespace reg_utils;

    std::map<monitoring::Node*,monitoring::revision_id_t> last_seen_revisions;
    std::map<monitoring::Node*,
            std::set<std::pair<int,rollaut::Websocket_interface*> > > subscribed_sockets;

    auto rollouts = reg->register_observer("rollouts/scheduled",q);
    last_seen_revisions[rollouts] = monitoring::revision_id_t{};
    for(;;){
        monitoring::Message m;
        q->wait_and_pop(m);
        auto watched_node = is_update_info(m);
        if (watched_node.first){
            auto last_seen_revision = last_seen_revisions[watched_node.second];
            auto lck = reg->lock(watched_node.second);
            auto new_rev = (watched_node.second)->revision_id;
            last_seen_revisions[watched_node.second] = new_rev;
            auto d = reg->compute_diff(last_seen_revision, watched_node.second);
            for(auto entry : d.elems){
                if (removed(entry.node)) continue;
                auto entity_attribute = entry.node->get_attr("entity");
                if (entity_attribute == nullptr) continue;
                if (entity_attribute->to_string() != "rollout") continue;
                auto rollout = entry.node;
                for(int i = entry.children_start; i < entry.children_end;++i ){
                    auto attr = d.elems[i].node;
                    if (!(attr->node_type & monitoring::NODE_TYPE_ATTRIBUTE)) continue;
                    if (attr->name != "processing_status") continue;
                    if ( ((monitoring::Attribute_node<std::string>*)attr)->value == "queued" ){
                        std::thread run_ceps_core(
                          &Rollout_executer::do_execute,this,rollout);
                        run_ceps_core.detach();
                    }
                }
            }
            lck.unlock();
        }
     }
}








void rollaut::Rollout_executer::do_execute(monitoring::Node* rollout){
    std::vector<std::string> plugins;
    std::string root_dir;
    std::string runs_dir;
    std::string rollout_dir;
    std::string rollout_db_full = "db_rollout_dump.ceps";
    bool smcores_entry_written = false;

    auto fatal = [&](std::string m){
        std::cerr << m << std::endl;
        exit(1);
    };

    auto const &l = config["core_plugins"];
    root_dir = config["root_folder"].GetString();
    if (root_dir.size() && root_dir[root_dir.size()-1]!='/') root_dir += "/";
    runs_dir = root_dir+"runs";
    rollout_dir = runs_dir + "/" + std::to_string(rollout->id)+"_"+std::to_string(rollout->revision_id);
    {
        auto dir_stream = opendir(runs_dir.c_str());
        if (dir_stream == nullptr){
            auto r = mkdir(runs_dir.c_str(), S_IRWXU | S_IRWXG | S_IROTH | S_IXOTH);
            if (r == -1) throw launch_failed{"Couldn't create '"+runs_dir+"'"};
        } else closedir(dir_stream);

        dir_stream = opendir(rollout_dir.c_str());
        if (dir_stream == nullptr){
            auto r = mkdir(rollout_dir.c_str(), S_IRWXU | S_IRWXG | S_IROTH | S_IXOTH);
            if (r == -1) throw launch_failed{"Couldn't create '"+rollout_dir+"'"};
            dir_stream = opendir(rollout_dir.c_str());
            if (dir_stream == nullptr) throw launch_failed{"Couldn't create '"+rollout_dir+"'"};
        } else closedir(dir_stream);

    }


    for(auto it = l.Begin();it!=l.End();++it){
        plugins.push_back(it->GetString());
    }

    {
        std::ofstream os{rollout_dir+"/extract_rollout.ceps"};
        os <<
           R"(
            // ${t.toUTCString()}
            // Generated by RollAut
            // DO NOT CHANGE

            static_for(e:root.rollout_){
             rollout{
              e.name;
              e.steps;
              markets{
               static_for(f:e.markets.market_details){
                market{f.content();};
               }
              };
             };
            }
            )";
        std::ofstream os_ceps{rollout_dir+"/"+rollout_db_full};
        auto ceps_attr = rollout->get_node("ceps");
        if (ceps_attr == nullptr) fatal("No ceps");
        ceps_attr = ceps_attr->get_attr("ceps");
        if (ceps_attr == nullptr) fatal("No ceps");
        os_ceps << ((monitoring::Attribute_node<std::string>*)ceps_attr)->value;
    }

    std::string plugins_opt;
    for(auto p:plugins){
        plugins_opt+= "--plugin"+root_dir+"lib/"+p+" ";
    }
    auto ws_api_port = std::to_string(get_ws_api_port());
    std::string remote = "localhost";

    std::string cmd = root_dir + "ceps "+plugins_opt;
    cmd +=     rollout_dir+"/"+rollout_db_full+" "+
               root_dir+"db_descr/gen.ceps "+
               rollout_dir+"/extract_rollout.ceps "+
               root_dir+"transformations/rollout2worker.ceps "+
               root_dir+"transformations/rollout2sm.ceps "+
               root_dir+"transformations/driver4rollout_start_immediately.ceps "
               + "--ws_api "+ws_api_port+" "
               + "--quiet"
            ;

    std::cerr << cmd << std::endl;


    std::thread ceps_proc{
        [=](){
            std::cerr << system(cmd.c_str()) << std::endl;
        }
    };
    ceps_proc.detach();
    //Try to connect to cepS core
    auto max_tries = 10;
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
          fatal("getaddrinfo failed");
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
        fatal("Websocket_interface::dispatcher(): Could not bind socket to any address.port="+ws_api_port);


    {
        auto acquire_result = reg->acquire_loc(rollout);
        if (acquire_result.first){
           auto attr_processing_status = rollout->get_attr("processing_status");
           if (attr_processing_status != nullptr){
                ((monitoring::Attribute_node<std::string>*)attr_processing_status)->value = "running";
               reg_utils::touch(attr_processing_status);
           }
           auto attr_start_time = rollout->get_attr("start_time_unix_time");
           if (attr_start_time != nullptr){
                ((monitoring::Attribute_node<std::uint64_t>*)attr_start_time)->value = time(nullptr);
               reg_utils::touch(attr_start_time);
           } else reg_utils::a("start_time_unix_time",std::uint64_t{(std::uint64_t)time(nullptr)},rollout);

           auto attr_health = rollout->get_attr("health");
           if (attr_health != nullptr){
                ((monitoring::Attribute_node<std::string>*)attr_health)->value = "ok";
               reg_utils::touch(attr_health);
           } else reg_utils::a("health",std::string{"ok"},rollout);

           auto attr_coverage = rollout->get_attr("coverage");
           if (attr_coverage != nullptr){
                ((monitoring::Attribute_node<double>*)attr_coverage)->value = 0.0;
               reg_utils::touch(attr_coverage);
           } else reg_utils::a("coverage",double{0.0},rollout);

            reg->trigger_observers(rollout->parent);
            acquire_result.second.unlock();
        } else{

        }
    }
    //Establish websocket connection
    std::string sec_phrase = "gI+FyV802hGAtf5WnhEufA==";
    std::string http_upgrade_request =
            "GET / HTTP/1.1\r\nSec-WebSocket-Version: 13\r\nSec-WebSocket-Key: "+sec_phrase+"\r\n"+
            "Connection: Upgrade\r\nUpgrade: websocket\r\nHost: localhost:"+ws_api_port+"\r\n\r\n";
    send(cfd,http_upgrade_request.c_str(),http_upgrade_request.length(),0);
    std::string unconsumed_data;
    auto upgrade_reply = ws_utils::read_http_request(cfd,unconsumed_data);
    if (!std::get<0>(upgrade_reply)) {
        std::cerr << "FAILED" << std::endl;
        return;
    }
    auto const & attrs = std::get<2>(upgrade_reply);
    if (!ws_utils::field_with_content("Upgrade","websocket",attrs)) return;

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
    send_ws_message(cfd,"SUBSCRIBE COVERAGE");

    bool computation_done = false;
    std::map<std::string,int> store2smsid;
    std::map<int,double> sms2coverage;
    std::vector<int> sms;
    std::map<std::string, unsigned long long> cat2number;
    std::map<std::string,std::string> cat2health = {
        {"DoneState","complete"},{"FailState","fatal"},{"WarnState","critical"}
    };
    std::vector<std::string> cat_rank = {"fatal","critical","complete"};
    std::vector<unsigned long long> cat_rank_id;


    std::map<unsigned long long,std::string> catnumber2health;
    std::map<int,unsigned long long> sms2catnumber;
    std::map<int,int> active_categories;
    std::map<int,int> smsidx2stepidx;
    std::map<int,int> child_sms2root;
    std::map<int,int> smsidx2current_step;
    std::map<int,std::vector<int>> smsidx2exiting_times;
    std::map<int,std::vector<int>> smsidx2entering_times;

    int steps_per_store = 0;

    auto compute_coverage = [&](rapidjson::Document & msg){
        if (sms2coverage.size() == 0) return 0.0;

        auto tpl_transition_cov = msg["toplevel_sms_transition_coverage"].GetArray();
        auto tpl_sms = msg["toplevel_sms"].GetArray();

        for(std::size_t i = 0;i != tpl_transition_cov.Size();++i){
            if (i >= tpl_sms.Size()) break;
            sms2coverage[tpl_sms[i].GetInt()] = tpl_transition_cov[i].GetDouble();
        }

        double sum = 0.0;
        double factor = 1.0/((double)sms2coverage.size());

        for(auto e: sms2coverage){
          sum += e.second;
        }
        return sum * factor;
    };

    //Read state changes and report them
    for(;;){
     auto frm = ws_utils::read_websocket_frame(cfd);
     if (!frm.first) {
         std::cerr << "***CONNECTION LOST!" << std::endl;
         break;
     }
     std::vector<unsigned char> payload = std::move(frm.second.payload);
     while (!frm.second.fin){
      frm = ws_utils::read_websocket_frame(cfd);
      if (!frm.first) break;
      payload.reserve(payload.size()+frm.second.payload.size());
      payload.insert(payload.end(),frm.second.payload.begin(),frm.second.payload.end());
     }
     if (!frm.first) break;
     if(frm.second.opcode == 1) {
      std::string s; s.resize(payload.size());
      for(size_t j = 0; j < payload.size();++j) s[j] = payload[j];
      //std::cerr << std::endl<< std::endl<< std::endl;
      //std::cerr << s << std::endl<< std::endl<< std::endl;

      rapidjson::Document msg;
      if (msg.Parse(s.data()).HasParseError()) continue;
      bool trigger_observers = false;
      bool reset_health = false;

      if (msg.HasMember("what") && std::string{msg["what"].GetString()} == "init"){
          if (!smcores_entry_written){
              auto acquire_result = reg->acquire_loc("smcores/rollouts/scheduled/");
              using namespace reg_utils;
              if (acquire_result.first){
                  auto smcores = acquire_result.first;
                  std::string entry_name = std::to_string(rollout->id);
                  monitoring::Node* entry = nullptr;
                  for(auto child: smcores->children){
                      if (child->name == entry_name) {entry=child;break;}
                  }
                  if (entry != nullptr) {
                      for(auto ch:entry->children){
                          delete ch;
                      }
                      entry->children.clear();
                  }

                  if (entry == nullptr)
                      entry = reg_utils::e(entry_name,smcores);
                  reg_utils::a("ref_id",rollout->id,entry);
                  reg_utils::a("ref_name",rollout->name,entry);
                  reg_utils::a("remote",remote,entry);
                  reg_utils::a("ws_api",ws_api_port,entry);
                  reg->trigger_observers(smcores);
                  smcores_entry_written = true;
                  acquire_result.second.unlock();
              }
          }
          active_categories.clear();
          reset_health = true;
          auto tpl_sms = msg["toplevel_sms"].GetArray();
          active_categories[0] = tpl_sms.Size();
          auto tpl_labels = msg["toplevel_sms_labels"].GetArray();
          auto cat_mapping = msg["category_mapping"].GetArray();
          auto labeled_states = msg["labeled_states"].GetArray();
          auto root2childstates = msg["root2childstates"].GetArray();

          auto n = std::min(tpl_sms.Size(),tpl_labels.Size());
          sms.clear();sms2coverage.clear();store2smsid.clear();
          for(decltype(n) i = 0; i != n;++i){
              store2smsid[tpl_labels[i].GetString()] = tpl_sms[i].GetInt();
              smsidx2current_step[tpl_sms[i].GetInt()] = 0;
          }
          for(auto it = tpl_sms.Begin();it!=tpl_sms.End();++it){
              sms.push_back(it->GetInt());
          }
          for (std::size_t i = 0; i < cat_mapping.Size();++i,++i){
              auto cat_str = cat_mapping[i].GetString();
              auto cat_id = 1 << cat_mapping[i+1].GetInt();
              cat2number[cat_str] = cat_id;
              catnumber2health[cat_id] = cat2health[cat_str];
          }
          catnumber2health[0] = "ok";
          //Compute categories's rank
          cat_rank_id.clear();
          cat_rank_id.resize(cat_rank.size(),0);
          for(std::size_t i = 0; i != cat_rank.size();++i){
           for(auto e : catnumber2health)
               if (e.second == cat_rank[i]){cat_rank_id[i]=e.first;break;}
          }
          //Compute Mapping of sms index to step
          int max_step = -1;
          std::vector<int> done_states;
          for(std::size_t i = 0; i < labeled_states.Size(); ++i){
              std::string label = labeled_states[i].GetString();++i;
              std::vector<int> v;
              for(; i != labeled_states.Size(); ++i){
                  if (labeled_states[i].IsString()){
                      --i; break;
                  }
                  v.push_back(labeled_states[i].GetInt());
              }
              int step_idx = -1;
              for(ssize_t i = label.length(); i!=0;--i){
                  if (label[i]=='$' && (i-1 >= 0) && label[i-1]=='$'){
                      std::size_t idx_pos = i+1;
                      if (idx_pos + 5 /*length of 'step_'*/ >= label.length()) break;
                      step_idx = std::atoi(label.c_str()+idx_pos + 5);
                      if (step_idx == 0) step_idx = -1;
                  }
              }
              if (step_idx > max_step) max_step = step_idx;
              if (step_idx == -1) {
                  done_states = v;
                  continue;
              }
              for(auto e:v) smsidx2stepidx[e] = step_idx - 1;

              //std::cerr << step_idx << ":";
              //for(auto e : v){ std::cerr << e << " ";}
              //std::cerr << std::endl;
          }
          steps_per_store = max_step + 1;
          for(auto e:done_states) smsidx2stepidx[e] = max_step;
          //Compute child_sms2root
          for(std::size_t i = 0; i < root2childstates.Size();++i){
              auto rootsms = root2childstates[i].GetInt();++i;
              for(;i < root2childstates.Size()&&root2childstates[i].GetInt()!=0;++i)
                  child_sms2root[root2childstates[i].GetInt()]=rootsms;
          }
          //for(auto e:child_sms2root ) std::cerr << "** " << e.first << " -> " << e.second << std::endl;
          for(auto e:store2smsid){
              smsidx2exiting_times[e.second] = std::vector<int>{};
              smsidx2exiting_times[e.second].resize(steps_per_store,-1);
              smsidx2entering_times[e.second] = std::vector<int>{};
              smsidx2entering_times[e.second].resize(steps_per_store,-1);
          }
      }

      if (msg.HasMember("category_changes")){
          auto cat_changes = msg["category_changes"].GetArray();
          for(std::size_t i = 0; i != cat_changes.Size();++i){
              auto smsidx = cat_changes[i++].GetInt();
              auto cat =  cat_changes[i].GetInt();
              sms2catnumber[smsidx] = 0;
              for(auto e : cat_rank_id){
                  if (e & cat){
                      --active_categories[sms2catnumber[smsidx]];
                      sms2catnumber[smsidx] = e;
                      ++active_categories[e];
                      break;
                  }
              }
          }
      }

      if (msg.HasMember("covered_states") && msg["covered_states"].IsArray()){
          std::map<int,int> smsidx2max_step_idx_seen_covered;
          auto newly_covered = msg["covered_states"].GetArray();
          for(std::size_t i = 0; i != newly_covered.Size();++i){
              auto it = child_sms2root.find(newly_covered[i].GetInt());
              if (it == child_sms2root.end()) continue;
              int root = it->second;
              auto step_idx_it = smsidx2stepidx.find(newly_covered[i].GetInt());
              if (step_idx_it == smsidx2stepidx.end()) continue;
              auto step_idx = step_idx_it->second;
              if (smsidx2max_step_idx_seen_covered[root] < step_idx)
                  smsidx2max_step_idx_seen_covered[root] = step_idx;
          }
          for(auto e:smsidx2max_step_idx_seen_covered){
              smsidx2current_step[e.first] = e.second;
          }
      }
      //covered_states
      //Computation of overall health
      auto overall_health = 0;
      for(auto e : cat_rank_id){
          if (active_categories[e] > 0){
              overall_health = e;
              break;
          }
      }
      if (catnumber2health[overall_health] == "complete"){
          if (active_categories[0] > 0) overall_health = 0;
      }

      //Entering-/Exitingtimes

      if (msg.HasMember("entering_times") && msg["entering_times"].IsArray()){
          trigger_observers = true;
          auto v = msg["entering_times"].GetArray();
          //std::cerr << "entering_times" << std::endl;
          for(std::size_t i = 0; i < v.Size();++i){
              auto sms_idx = v[i].GetInt();
              auto sec = v[i+1].GetInt();
              //auto msec = v[i+2].GetInt();
              //auto nsec = v[i+3].GetInt();
              i += 3;
              auto it_root = child_sms2root.find(sms_idx);
              if (it_root == child_sms2root.end()) continue;
              auto it_step = smsidx2stepidx.find(sms_idx);
              if (it_step == smsidx2stepidx.end()) continue;
             // std::cerr << it_root->second << " " << it_step->second <<" "<< sec<<std::endl;
              smsidx2entering_times[it_root->second][it_step->second] = sec;
          }
      }

      if (msg.HasMember("exiting_times") && msg["exiting_times"].IsArray()){
          trigger_observers = true;
          auto v = msg["exiting_times"].GetArray();
          for(std::size_t i = 0; i < v.Size();++i){
              auto sms_idx = v[i].GetInt();
              auto sec = v[i+1].GetInt();
              //auto msec = v[i+2].GetInt();
              //auto nsec = v[i+3].GetInt();
              i += 3;
              auto it_root = child_sms2root.find(sms_idx);
              if (it_root == child_sms2root.end()) continue;
              auto it_step = smsidx2stepidx.find(sms_idx);
              if (it_step == smsidx2stepidx.end()) continue;
              smsidx2exiting_times[it_root->second][it_step->second] = sec;
          }
      }


      auto acquire_result = reg->acquire_loc(rollout);

      auto attr_health = rollout->get_attr("health");
      if (attr_health != nullptr){
           ((monitoring::Attribute_node<std::string>*)attr_health)->value
                  = catnumber2health[overall_health];
          reg_utils::touch(attr_health);
      } else reg_utils::a("health",catnumber2health[overall_health],rollout);

      {
          auto attr_stores =
                  (monitoring::Attribute_node<std::unique_ptr<monitoring::aval>>*)
                   rollout->get_attr("stores");
          reg_utils::touch(attr_stores);
          auto store_list = (monitoring::aval_list*) attr_stores->value.get();
          for(auto & e_ : store_list->elems){
              auto& e = *((monitoring::aval_obj*)e_);
              auto& label = *((monitoring::aval_entry<std::string>*)e.elems["name"]);
              auto& health = *((monitoring::aval_entry<std::string>*)e.elems["health"]);
              auto& current_state = *((monitoring::aval_entry<int>*)e.elems["current_state"]);
              auto smsidx = store2smsid[label.value];
              health.value = catnumber2health[sms2catnumber[smsidx]];
              current_state = smsidx2current_step[smsidx];
              auto& entering_times = *((monitoring::aval_list*)e.elems["entering_times"]);
              auto& exiting_times = *((monitoring::aval_list*)e.elems["exiting_times"]);

              if (entering_times.elems.size() != 0)
                  for(auto e: entering_times.elems) delete e;
              entering_times.elems.clear();
              for(auto e : smsidx2entering_times[store2smsid[label.value]]){
                  //std::cerr << e << std::endl;
                  if (e == -1) break;
                  entering_times.elems.push_back(new monitoring::aval_entry<int>{e});
              }

              if (exiting_times.elems.size() != 0)
                  for(auto e: exiting_times.elems) delete e;
              exiting_times.elems.clear();
              for(auto e : smsidx2exiting_times[store2smsid[label.value]]){
                  if (e == -1) break;
                  exiting_times.elems.push_back(new monitoring::aval_entry<int>{e});
              }

          }
      }


      if (msg.HasMember("toplevel_sms_transition_coverage")){
          auto cov = compute_coverage(msg);
          {
              if (acquire_result.first){
                 auto attr_coverage = rollout->get_attr("coverage");
                 if (attr_coverage != nullptr){
                      ((monitoring::Attribute_node<double>*)attr_coverage)->value = cov;
                     reg_utils::touch(attr_coverage);
                 } else reg_utils::a("coverage",double{cov},rollout);
                 if (cov >= 1.0 && !computation_done){
                     computation_done = true;
                     auto attr_end_time = rollout->get_attr("end_time_unix_time");
                     if (attr_end_time != nullptr){
                          ((monitoring::Attribute_node<std::uint64_t>*)attr_end_time)->value = time(nullptr);
                         reg_utils::touch(attr_end_time);
                     } else reg_utils::a("end_time_unix_time",std::uint64_t{time(nullptr)},rollout);

                     auto attr_processing_status = rollout->get_attr("processing_status");
                     if (attr_processing_status != nullptr){
                          ((monitoring::Attribute_node<std::string>*)attr_processing_status)->value = "complete";
                         reg_utils::touch(attr_processing_status);
                     }
                 }
                 auto attr_stores =
                         (monitoring::Attribute_node<std::unique_ptr<monitoring::aval>>*)
                          rollout->get_attr("stores");
                 reg_utils::touch(attr_stores);
                 auto store_list = (monitoring::aval_list*) attr_stores->value.get();
                 for(auto & e_ : store_list->elems){
                     auto& e = *((monitoring::aval_obj*)e_);
                     auto& coverage = *((monitoring::aval_entry<double>*)e.elems["coverage"]);
                     auto& label = *((monitoring::aval_entry<std::string>*)e.elems["name"]);
                     coverage.value = sms2coverage[store2smsid[label.value]];
                 }
                 trigger_observers = true;
              } else{

              }
          }
      }

      if (trigger_observers) reg->trigger_observers(rollout->parent);
      acquire_result.second.unlock();

     }
    }//for
}


std::map<std::string, bool*> options;
int main(int argc, char *argv[])
{
    bool ceps_executer_pump_test_data = false;
    options["--ceps-executer-pump-test-data"] = &ceps_executer_pump_test_data;

    monitoring::Registry reg;
    rollaut::Registry_manager regm {reg};
    regm.get_reg().add_node("rollouts");
    regm.get_reg().add_node("rollouts/scheduled");
    regm.get_reg().add_node("smcores");
    regm.get_reg().add_node("smcores/rollouts");
    regm.get_reg().add_node("smcores/rollouts/scheduled");

    monitoring::Statemachine_execution_core_manager smcore_observer{&reg,""};
    monitoring::Observer observer{&reg};
    observer.watch("rollouts/scheduled");
    smcore_observer.watch("smcores/rollouts/scheduled");

    std::string hostname; if (getenv("ROLLAUT_DB_HOST") != nullptr) hostname = getenv("ROLLAUT_DB_HOST");
    std::string user;  if (getenv("ROLLAUT_DB_USER") != nullptr) user = getenv("ROLLAUT_DB_USER");
    std::string passwd; if (getenv("ROLLAUT_DB_PASSWD") != nullptr) passwd = getenv("ROLLAUT_DB_PASSWD");
    std::string timestamp;
    std::string database; if (getenv("ROLLAUT_DB_DB") != nullptr) database = getenv("ROLLAUT_DB_DB");

    rollaut::Rollout_db_importer import_rollouts_from_db{
        &reg,
        hostname,
        user,
        passwd,
        timestamp,
        database};

    rollaut::Rollout_observe_scheduled_time_and_flip_processing_status flipper{&reg};
    if (argc > 1){
        for (std::size_t i = 1; i != argc; ++i){
            auto it = options.find(argv[i]);
            if (it == options.end()) continue;
            *it->second = true;
        }
    }

    rollaut::Rollout_executer execute_rollouts{&reg,ceps_executer_pump_test_data};

    regm.run();

#ifdef RUN_STATE_AND_STREAM_SERVICE_TESTS
    tests::test_state_stream_service();
#endif
#ifdef RUN_RINGBUFFER_TESTS
    tests::test_ringbuffer();
#endif
#ifdef RUN_THREAD_SAFE_QUEUE_TESTS
    tests::test_thread_safe_queue_with_ringbuffer();
#endif
#ifdef RUN_BASIC_REGISTRY_TESTS
    tests::test_add_node_and_locks();
#endif
#ifdef RUN_BASIC_OBSERVER_TESTS
    tests::test_basic_observer();
#endif
#ifdef RUN_BASIC_WEBSOCKET_TESTS
    tests::test_echo_webserver();
#endif

    exit(0);
}

