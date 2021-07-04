#include "monitoring.h"

std::unique_ptr<monitoring::Node> monitoring::make_root_folder(){
   auto n = std::unique_ptr<monitoring::Node>{make_folder(nullptr,"")};
   n->set_mtx(std::unique_ptr<std::mutex>{new std::mutex{}});
   return n;
}

monitoring::Node* monitoring::make_folder(monitoring::Node* parent, std::string name){
    return make_node(parent, name,monitoring::NODE_TYPE_FOLDER);
}

monitoring::Node* monitoring::make_node(monitoring::Node* parent,
                                        std::string name,
                                        monitoring::node_type_t node_type)
{
    if (node_type &  monitoring::NODE_TYPE_FOLDER){
        auto n = new monitoring::Folder{};
        n->name = name;
        n->node_type = node_type;
        n->parent = parent;
        return n;
    }
    auto n = new monitoring::Node{name};
    n->name = name;
    n->node_type = node_type;
    n->parent = parent;
    return n;
}

monitoring::aval_obj* monitoring::aval_obj::add(std::string n,aval* e){
    elems[n] = e;
    return this;
}
