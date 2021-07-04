#include "registry_utils.h"

monitoring::Node* reg_utils::e(std::string n,
                               monitoring::Node* root,
                               std::vector<monitoring::Node*> const & v){
   auto entry = monitoring::make_node(root,
                                       n,
                                       monitoring::NODE_TYPE_ENTRY);
   if (root){
    entry->id = root->children_next_valid_id++;
    entry->revision_id = ++root->revision_id;
    root->children.push_back(entry);
   }
   if(v.size() && root){
     root->children.insert(root->children.end(),v.begin(),v.end());
     for(auto& e:v) e->parent = root;
   }
   return entry;
}

monitoring::revision_id_t reg_utils::touch(monitoring::Node* node){
    if (node == nullptr) return {};
    auto t = node->revision_id;
    if (node->node_type & monitoring::NODE_TYPE_ATTRIBUTE){
        auto root = node->parent;
        auto root_root = root->parent;
        if (root && !root_root){
            root->revision_id = node->revision_id = ++root->revision_id;
        } else if (root && root_root){
            root->revision_id = node->revision_id = ++root_root->revision_id;
        }
    } else {
        auto root = node->parent;
        root->revision_id = node->revision_id = ++root->revision_id;
    }
    return t;
}
void reg_utils::remove(monitoring::Node* node){
    if (node == nullptr) return;
    node->deleted = true;
    touch(node);
}
bool reg_utils::removed(monitoring::Node* node){
    if (node == nullptr) return false;
    return node->deleted;
}


monitoring::Node* reg_utils::a(std::string n,
                    monitoring::Node* entry,
                    monitoring::Node* root,
                    std::vector<monitoring::Node*> const & v){

    entry->name = n;
    entry->node_type = monitoring::NODE_TYPE_ATTRIBUTE;
    entry->parent = root;

    if (root && root->parent){
     entry->id = root->children_next_valid_id++;
     root->revision_id = entry->revision_id = ++root->parent->revision_id;
     root->children.push_back(entry);
    }
    if(v.size() && root){
      root->children.insert(root->children.end(),v.begin(),v.end());
      for(auto& e:v) e->parent = root;
    }
    return entry;
}

