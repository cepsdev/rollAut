#include "monitoring.h"
#include "monitoring_observer.h"
#include <sstream>
#include <set>
#include <tuple>
#include "rollaut_ws_interface.h"
#include "registry_utils.h"


void monitoring::Observer::do_observe(){

    auto print_reg = [](monitoring::Registry& reg){
        walk_reg(reg,[](monitoring::Node* n,int depth){
            for(int i = 0; i != depth;++i) std::cerr << "  ";
            std::cerr << n->name <<" (" << n->id<< ", rev:"<< n->revision_id <<")";
            if (reg_utils::removed(n)) std::cerr << " removed";
            else if (n->node_type & monitoring::NODE_TYPE_ATTRIBUTE){
                if (n->to_string().length()>128)
                 std::cerr << "=" << "...";
                else
                 std::cerr << "=" << n->to_string();
            }
            std::cerr << std::endl;
        });};

    std::map<monitoring::Node*,monitoring::revision_id_t> last_seen_revisions;
    std::map<monitoring::Node*,
            std::set<std::pair<int,rollaut::Websocket_interface*> > > subscribed_sockets;

    std::map< monitoring::Node* ,std::string> header_info;

    for(;;){
        monitoring::Message m;
        q->wait_and_pop(m);
        auto loc = is_watch_cmd(m);
        auto watched_node = is_update_info(m);

        //print_reg(*reg);

        if (loc.first){
            auto n = reg->register_observer(loc.second,q);
            last_seen_revisions[n] = monitoring::revision_id_t{};
            if (m.sck != -1 && m.ws_int != nullptr){
                subscribed_sockets[n].insert(std::make_pair(m.sck,m.ws_int));
                header_info[n] = "\"watched_location\":\""+loc.second+"\"";

                auto r = reg->acquire_loc(n);

                if(r.first){
                    auto d = reg->compute_diff(monitoring::revision_id_t{}, n);
                    std::stringstream sstr;
                    monitoring::utils::print_diff(d,sstr,header_info[n]);
                    last_seen_revisions[n] = n->revision_id;
                    r.second.unlock();
                    m.ws_int->message_write(sstr.str(),m.sck);
                }
            }
        } else if (watched_node.first){
            auto last_seen_revision = last_seen_revisions[watched_node.second];
            auto lck = reg->lock(watched_node.second);
            auto new_rev = (watched_node.second)->revision_id;
            last_seen_revisions[watched_node.second] = new_rev;
            auto d = reg->compute_diff(last_seen_revision, watched_node.second);
            std::stringstream sstr;
            monitoring::utils::print_diff(d,sstr,header_info[watched_node.second]);
            lck.unlock();
            auto subscribers = subscribed_sockets[watched_node.second];
            for(auto comm:subscribers){
                comm.second->message_write(sstr.str(),comm.first);
            }
        } else {
           if (m.what == monitoring::Message::MSG_USER_DEFINED
               && m.ext == monitoring::Observer::MSG_WRITE_ATTRIBUTE) {
               if(m.payload == nullptr) continue;
               monitoring::aval* v = (monitoring::aval*) m.payload;
               auto lck = reg->acquire_loc(m.ext_s);
               //print_reg(*reg);
               auto entity_id = m.ext2;
               if(lck.first){
                   auto root = lck.first;
                   for(auto e: root->children){
                       if (e->id != entity_id) continue;
                       //Entity found
                       auto attr = e->get_attr(m.ext_s2);
                       if (attr == nullptr) continue;
                       auto attr_info = attr->attribute_info();
                       if (!attr_info.first) continue;
                       if (attr_info.second.type_id == "long"){
                           std::stringstream ss;
                           v->print_json(ss);
                           ((monitoring::Attribute_node<long>*)attr)->value
                                   = std::atol(ss.str().c_str());
                           reg_utils::touch(attr);
                       }
                       break;
                   }
                   //print_reg(*reg);
                   lck.second.unlock();
                   reg->trigger_observers(root);
               }
           } else if (m.what == monitoring::Message::MSG_USER_DEFINED
                      && m.ext == monitoring::Observer::MSG_APPEND_ATTRIBUTE) {
                      if(m.payload == nullptr) continue;
                      monitoring::aval* v = (monitoring::aval*) m.payload;
                      auto lck = reg->acquire_loc(m.ext_s);
                      std::string entity_name = m.ext_s3;
                      std::string attr_name = m.ext_s2;
                      monitoring::Node* attr =(monitoring::Node*) m.payload;
                      if(lck.first){
                          auto root = lck.first;
                          for(auto e: root->children){
                              if (e->name != entity_name) continue;
                              reg_utils::a(attr_name,attr,e);
                              break;
                          }
                          lck.second.unlock();
                          reg->trigger_observers(root);
                      }
            }
        }
    }
}

monitoring::Node* monitoring::Registry::register_observer(
        std::string loc,
        Observable::queue_t q) {

    std::unique_lock<std::mutex> lk{*root->mtx};
    std::string::size_type leaf_pos;
    auto cur_node = get_parent(loc,root.get(),[&lk](Node* n){
            if (n->has_mutex()){
                lk = std::move(std::unique_lock<std::mutex>{*n->mtx});
            }
    }, leaf_pos);
    auto node_name = loc.substr(leaf_pos);
    for(auto const & child:cur_node->children){
        if (child->name == node_name && is_observable(child)){
             auto & observable = reinterpret_cast<Observable&>(*child);
             observable.queues.push_back(q);
             return child;
        }
    }
    throw invalid_loc{""};
}
