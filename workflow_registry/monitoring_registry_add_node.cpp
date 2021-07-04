#include "monitoring.h"

monitoring::Node* monitoring::Registry::add_node(std::string loc,
                                                 monitoring::node_type_t node_type){
    std::unique_lock<std::mutex> lk{*root->mtx};
    std::string::size_type leaf_pos;
    auto cur_node = get_parent(loc,root.get(),[&lk](Node* n){
            if (n->has_mutex()){
                lk = std::move(std::unique_lock<std::mutex>{*n->mtx});
            }
    }, leaf_pos);
    auto node_name = loc.substr(leaf_pos);
    for(auto const & child:cur_node->children){
        if (child->name == node_name) throw invalid_loc{""};
    }
    auto new_node = make_node(cur_node,node_name,node_type);
    new_node->id = cur_node->children_next_valid_id++;
    new_node->revision_id = ++cur_node->revision_id;
    cur_node->children.push_back(new_node);
    if (is_observable(cur_node)){
        auto & observable = reinterpret_cast<Observable&>(*cur_node);
        for (auto q : observable.queues){
            q->push({Message::MSG_REV_UPDATE,0,cur_node,"",nullptr});
        }
    }
    return new_node;
}

void monitoring::Registry::trigger_observers(Node* cur_node){
    if (is_observable(cur_node)){
        auto & observable = reinterpret_cast<Observable&>(*cur_node);
        for (auto q : observable.queues){
            q->push({Message::MSG_REV_UPDATE,0,cur_node,"",nullptr});
        }
    }
}

std::pair<monitoring::Node*,std::unique_lock<std::mutex>> monitoring::Registry::acquire_loc(
            monitoring::Node* node
            )
{
    auto cur_node = node;
    for(;cur_node!=nullptr;cur_node=cur_node->parent){
     if (cur_node->has_mutex()) break;
    }
    if (cur_node == nullptr) return {nullptr,std::unique_lock<std::mutex>{}};
    return {cur_node,std::unique_lock<std::mutex>(*cur_node->mtx)};
}

std::pair<monitoring::Node*,std::unique_lock<std::mutex>> monitoring::Registry::acquire_loc(
            std::string loc
            )
{
    std::unique_lock<std::mutex> lk{*root->mtx};
    std::string::size_type leaf_pos;
    auto cur_node = get_parent(loc,root.get(),[&lk](Node* n){
            if (n->has_mutex()){
                lk = std::move(std::unique_lock<std::mutex>{*n->mtx});
            }
    }, leaf_pos);
    return {cur_node,std::move(lk)};
}
