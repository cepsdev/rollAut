#include "monitoring.h"


void monitoring::utils::print(monitoring::diff::elem e,std::ostream & os,int depth){
    if (e.node == nullptr) return;
    e.node->print_json(os,depth*2,true);
}
void monitoring::utils::print_diff_impl(monitoring::diff::elem e,
                                        std::vector<monitoring::diff::elem> const & v,
                                        std::ostream & os,
                                        int depth,
                                        bool linebreak){
    for(int i = 0; i != depth;++i)os<<"  ";
    os << "{\n";
    print(e,os,depth+1);
    if(e.children_start!=e.children_end){
        os << ",\n";
        for(int i = 0; i != depth+1;++i)os<<"  ";
        os<<"\"children\":[\n";
        for(auto i = e.children_start;i != e.children_end;++i){
           print_diff_impl(v[i],v,os,depth+2,false);
           if (i+1 != e.children_end)
           {
               //for(int i = 0; i != depth+2;++i)os<<"  ";
               os << ",\n";
           }
        }
        for(int i = 0; i != depth+1;++i)os<<"  ";
        os<<"]\n";
    } else {os << "\n";}
    for(int i = 0; i != depth;++i)os<<"  ";
    os << "}";
    if (linebreak)os << "\n";
}
void monitoring::utils::print_diff(monitoring::diff const & d,
                                   std::ostream & os,
                                   std::string header){

  os << "{\n\"class\":\"diff\",\n";
  if (header.length()) os << header << ",\n";
  os << "\"children\":\n";
  os << "  [\n";
  if (d.elems.size()) print_diff_impl(d.elems[0],d.elems,os,2,true);
  os << "  ]\n}\n";
}

monitoring::diff monitoring::Registry::compute_diff(revision_id_t base, Node* node){
    diff d;
    if (base >= node->revision_id) return d;
    d.elems.push_back({node,-1,-1});
    std::queue<int> q;
    q.push(0);
    for(;!q.empty();){
        auto & cur_node = d.elems[q.front()];
        auto cur_node_idx = q.front();
        q.pop();
        auto start_v = d.elems.size();
        for(auto p  : cur_node.node->children ){
            if (p->revision_id <= base) continue;
            if (p->parent != node && !(p->node_type & monitoring::NODE_TYPE_ATTRIBUTE)) continue;
            q.push(d.elems.size());
            d.elems.push_back({p,-1,-1});
        }
        if(d.elems.size()>start_v){
            d.elems[cur_node_idx].children_start=start_v;
            d.elems[cur_node_idx].children_end=d.elems.size();
        }
    }
    return d;
}
