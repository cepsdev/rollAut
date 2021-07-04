#ifndef REGISTRY_UTILS_H
#define REGISTRY_UTILS_H

#include "monitoring.h"

namespace reg_utils{
 monitoring::Node* e(std::string n,
                     monitoring::Node* root,
                     std::vector<monitoring::Node*> const & v = {});

 template<typename T>
  monitoring::Attribute_node<T>* a(std::string n,
                                  T const & val,
                                  monitoring::Node* root,
                                  std::vector<monitoring::Node*> const & v = {}){

     auto entry = new monitoring::Attribute_node<T>{val,n};
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

  template <typename T> monitoring::Attribute_node<std::unique_ptr<T>>* a(std::string n,
                                   std::unique_ptr<T> && val,
                                   monitoring::Node* root,
                                   std::vector<monitoring::Node*> const & v = {}){

      auto entry =
              new monitoring::Attribute_node<std::unique_ptr<T>>{std::move(val),n};
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

  monitoring::Node* a(std::string n,
                      monitoring::Node* entry,
                      monitoring::Node* root,
                      std::vector<monitoring::Node*> const & v = {});

 monitoring::revision_id_t touch(monitoring::Node* node);
 void remove(monitoring::Node* node);
 bool removed(monitoring::Node* node);

}

#endif // REGISTRY_UTILS_H
