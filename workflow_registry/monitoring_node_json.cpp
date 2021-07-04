#include <string>
#include <iostream>
#include "monitoring.h"

std::string monitoring::Node::get_json_class(){
    if (node_type & NODE_TYPE_FOLDER) return "folder";
    if (node_type & NODE_TYPE_ATTRIBUTE) return "attribute";
    if (node_type & NODE_TYPE_ENTRY) return "entry";
    return "node";
}

void monitoring::Node::print_json(std::ostream& os,int indent,bool linebreaks){
     for(int i = 0; i != indent;++i) os << " ";
     os << "\"class\":\""<<get_json_class()<<"\","<< (linebreaks?"\n":"");
     for(int i = 0; i != indent;++i) os << " ";
     os << "\"name\":\""<<name<<"\","<<(linebreaks?"\n":"");
     for(int i = 0; i != indent;++i) os << " ";
     os << "\"id\":\""<<id<<"\","<<(linebreaks?"\n":"");
     for(int i = 0; i != indent;++i) os << " ";
     os << "\"deleted\":\""<<(deleted?"true":"false")<<"\"";
}

static
std::string json_str(std::string s, bool ignore_new_lines=false){
    std::stringstream ss;
    ss << "\"";
    for(std::size_t i = 0 ; i != s.length();++i)
    {
        if (s[i] == '"') ss << "\\";
        if (s[i] == '\n') {if (!ignore_new_lines) ss << "\\n";continue;}
        if (s[i] == '\r') {if (!ignore_new_lines) ss << "\\r";continue;}
        if (s[i] == '\t') {ss << "\\t";continue;}
        char buffer[2] = {0};
        buffer[0] = s[i];
        ss << buffer;
    }
    ss << "\"";
    return ss.str();
}

template<>
 void monitoring::Attribute_node<std::string>::print_json(std::ostream& os,
                                              int indent,
                                              bool linebreaks){

     Node::print_json(os,indent,linebreaks);
     os << ",";
     if (linebreaks) {
         os << "\n";
         for(int i = 0; i != indent;++i) os << " ";
     }
     os << "\"value\":"<<json_str(value);
 }


template<>
 void monitoring::Attribute_node<std::unique_ptr<monitoring::aval>>::print_json(
                                                std::ostream& os,
                                                int indent,
                                                bool linebreaks){
     Node::print_json(os,indent,linebreaks);
     os << ",";
     if (linebreaks) {
         os << "\n";
         for(int i = 0; i != indent;++i) os << " ";
     }
     os << "\"value\":";
     value->print_json(os,indent,linebreaks);
}


void monitoring::aval_list::print_json(std::ostream& os,
                                        int indent,
                                        bool linebreaks){
     os << "[";
     std::size_t counter = 0;
     for(auto const & e : elems){
         e->print_json(os,indent,linebreaks);
         ++counter;
         if (counter != elems.size()) os << ",";
     }
     os << "]";
 }

void monitoring::aval_obj::print_json(std::ostream& os,
                                        int indent,
                                        bool linebreaks){
     os << "{";
     std::size_t counter = 0;
     for(auto const & e : elems){
         os << "\"" << e.first << "\":";
         e.second->print_json(os,indent,linebreaks);
         ++counter;
         if (counter != elems.size()) os << ",";
     }
     os << "}";
}
template<>
 void monitoring::aval_entry<std::string>::print_json(
        std::ostream& os, int indent,bool linebreaks){
  os << json_str(value);
}


template<>
 std::string monitoring::Attribute_node<std::unique_ptr<monitoring::aval>>::to_string(){
     return "N/A";
}


 template<>
 std::pair<bool,monitoring::attr_info> monitoring::Attribute_node<bool>::attribute_info(){
  return {true,monitoring::attr_info{"bool"}};
 }
 template<>
    std::pair<bool,monitoring::attr_info> monitoring::Attribute_node<double>::attribute_info(){
     return {true,monitoring::attr_info{"double"}};
 }
 template<>
    std::pair<bool,monitoring::attr_info> monitoring::Attribute_node<long>::attribute_info(){
     return {true,monitoring::attr_info{"long"}};
 }
 template<>
    std::pair<bool,monitoring::attr_info> monitoring::Attribute_node<unsigned long>::attribute_info(){
     return {true,monitoring::attr_info{"unsigned long"}};
 }
 template<>
    std::pair<bool,monitoring::attr_info>
         monitoring::Attribute_node<std::unique_ptr<monitoring::aval>>::attribute_info(){
   return {true,monitoring::attr_info{"aval"}};
 }
 template<>
    std::pair<bool,monitoring::attr_info> monitoring::Attribute_node<std::string>::attribute_info(){
   return {true,monitoring::attr_info{"string"}};
 }














































