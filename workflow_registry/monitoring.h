#ifndef MONITORING_H
#define MONITORING_H

#include <iostream>
#include <vector>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <memory>
#include <functional>
#include <optional>
#include <map>
#include <sstream>
#include <queue>
#include "ringbuffer.h"
#include "threadsafe_queue.h"
#include <tuple>


namespace rollaut {
class Websocket_interface;
}

namespace monitoring{
    using node_type_t = std::uint32_t;
    using revision_id_t = std::uint64_t;
    using id_t = std::uint64_t;

    constexpr node_type_t NODE_TYPE_FOLDER    = 1;
    constexpr node_type_t NODE_TYPE_ATTRIBUTE = 2;
    constexpr node_type_t NODE_TYPE_ENTRY     = 4;

    struct attr_info{
        std::string type_id;
    };

    class Node{
    public:
        std::string name;
        node_type_t node_type = 0;
        revision_id_t revision_id = 1;
        id_t id = 0;
        id_t children_next_valid_id = 0;
        bool deleted = false;
        mutable std::unique_ptr<std::mutex> mtx = nullptr;
        Node* parent;
        std::vector<Node*> children;
        Node(std::string name = std::string{}):name{name}{}
        std::unique_ptr<std::mutex> set_mtx(std::unique_ptr<std::mutex> new_mtx){
            auto old_mtx = std::move(mtx);
            mtx = std::move(new_mtx);
            return old_mtx;
        }
        Node* get_attr(std::string n){
            for(auto e:children)
                if (e->name == n) return e;
            return nullptr;
        }
        Node* get_node(std::string n){
            for(auto e:children)
                if (e->name == n) return e;
            return nullptr;
        }
        bool has_mutex() const {return mtx != nullptr; }
        virtual void print_json(std::ostream& os,int indent=0,bool linebreaks = false);
        virtual std::string get_json_class();
        virtual std::string to_string(){return "";}
        virtual std::pair<bool,attr_info> attribute_info() { return {{},{}};}
        virtual ~Node(){}
        friend class Registry;
    };

    struct aval {
        virtual void print_json(std::ostream& os, int indent=0,bool linebreaks=false) = 0;
        virtual ~aval(){}
    };

    struct aval_obj: public aval{
        std::map<std::string,aval*> elems;
        aval_obj() = default;
        aval_obj* add(std::string,aval*);
        void print_json(std::ostream& os, int indent=0,bool linebreaks=false) override;
    };

    struct aval_list: public aval{
        std::vector<aval*> elems;
        aval_list() = default;
        aval_list(std::vector<aval*> v):elems{v}{}
        aval_list& add(aval*);
        void print_json(std::ostream& os, int indent=0,bool linebreaks=false) override;
    };

    template<typename T> struct aval_entry: public aval{
        T value;
        aval_entry(T const & v):value{v}{}
        void print_json(std::ostream& os, int indent=0,bool linebreaks=false) override{
            os << value;
        }
    };

    template<> void aval_entry<std::string>::
     print_json(std::ostream& os, int indent,bool linebreaks);

    template<typename T> class Attribute_node:public Node{
        public:
           T value;

           Attribute_node(T && v,
                          std::string name = std::string{}):Node{name},value{std::move(v)}{}
           Attribute_node(T const & v,
                          std::string name = std::string{}):Node{name},value{v}{}
           std::string to_string() override{
               std::stringstream ss;
               ss << value;
               return ss.str();
           }           
           void print_json(std::ostream& os, int indent=0,bool linebreaks=false) override;
           std::pair<bool,attr_info> attribute_info() override;
    };

   template<>
    std::string Attribute_node<std::unique_ptr<monitoring::aval>>::to_string();

   template<>
    void Attribute_node<std::string>::print_json(std::ostream& os,
                                                 int indent,
                                                 bool linebreaks);
   template<>
     void Attribute_node<std::unique_ptr<monitoring::aval>>::print_json(std::ostream& os,
                                                  int indent,
                                                  bool linebreaks);

   template<>
      std::pair<bool,attr_info> Attribute_node<bool>::attribute_info();
   template<>
      std::pair<bool,attr_info> Attribute_node<double>::attribute_info();
   template<>
      std::pair<bool,attr_info> Attribute_node<long>::attribute_info();
   template<>
      std::pair<bool,attr_info> Attribute_node<unsigned long>::attribute_info();
   template<>
      std::pair<bool,attr_info>
           Attribute_node<std::unique_ptr<monitoring::aval>>::attribute_info();
   template<>
      std::pair<bool,attr_info> Attribute_node<std::string>::attribute_info();
   /*{
        Node::print_json(os,indent,linebreaks);
        os << ",";
        if (linebreaks) {
            os << "\n";
            for(int i = 0; i != indent;++i) os << " ";
        }
        os << "\"value\":\""<<value<<"\"";
    }*/


    template<typename T> void Attribute_node<T>::print_json(std::ostream& os, int indent,bool linebreaks){
        Node::print_json(os,indent,linebreaks);
        os << ",";
        if (linebreaks) {
            os << "\n";
            for(int i = 0; i != indent;++i) os << " ";
        }
        os << "\"value\":"<<value;
    }


    struct Message{
        enum {
            MSG_REV_NOOP = 0,
            MSG_REV_UPDATE = 1,
            MSG_USER_DEFINED = 1000
        } what;
        int ext;
        Node* node;
        std::string ext_s;
        void* payload;
        int sck;
        rollaut::Websocket_interface* ws_int;
        int ext2;
        std::string ext_s2;
        std::string ext_s3;
    };

    class Observable: public Node{
        std::vector<std::shared_ptr<threadsafe_queue<Message,Ringbuffer<Message>>>> queues;
    public:
        using queue_t = std::shared_ptr<threadsafe_queue<Message,Ringbuffer<Message>>>;
        Observable(std::string name = std::string{}):Node{name}{}
        friend class Registry;
    };

    class Folder: public Observable {
    public:
        Folder(std::string name = std::string{}):Observable{name}{}

    };

    std::unique_ptr<Node> make_root_folder();
    Node* make_folder(Node* parent, std::string name);
    Node* make_node(Node* parent, std::string name,node_type_t node_type = NODE_TYPE_FOLDER );

    struct diff{
        struct elem{
            Node* node;
            int children_start, children_end;
        };
        std::vector<elem> elems;
    };

    class Registry{
        std::unique_ptr<Node> root;
        template <typename step_up_callback> Node* get_parent(std::string loc,Node* start_node,step_up_callback f,std::string::size_type& cur_pos){
            auto cur_node = start_node;
            cur_pos= ((loc.length()!=0&&loc[0]=='/')?1:0);
            for(;;){
                auto p = loc.find_first_of('/',cur_pos);
                if (p!=std::string::npos){
                 std::string folder_name = loc.substr(cur_pos,p-cur_pos);
                 Node* new_parent = nullptr;
                 for(auto const & child:cur_node->children){
                     if (child->name == folder_name){
                         new_parent = child;break;
                     }
                 }
                 if(new_parent == nullptr) throw invalid_loc{""};
                 cur_node = new_parent;
                 cur_pos = p+1;
                 f(cur_node);
                } else break;
            }
            return cur_node;
        }
        public:
        void trigger_observers(Node* n);
        static bool is_observable(Node* n) {
            if (n == nullptr) return false;
            return (n->node_type & NODE_TYPE_FOLDER);
        }
        class invalid_loc : public std::runtime_error {public: invalid_loc(std::string w):std::runtime_error{w}{}};
        class lock_failed : public std::runtime_error {public: lock_failed(std::string w):std::runtime_error{w}{}};

        Registry():root{make_root_folder()}{}
        Node* get_root() const {return root.get();}
        Node* register_observer(std::string loc,Observable::queue_t q);
        Node* add_node(std::string loc,node_type_t node_type = NODE_TYPE_FOLDER);
        std::unique_lock<std::mutex> lock(Node* n){
            for(;n;n = n->parent){
                if(!n->has_mutex()) continue;
                return std::unique_lock<std::mutex>{*n->mtx};
            }
            throw lock_failed{""};
        }
        diff compute_diff(revision_id_t base, Node* node);
        std::pair<monitoring::Node*,std::unique_lock<std::mutex>>
         acquire_loc(std::string loc);
        std::pair<monitoring::Node*,std::unique_lock<std::mutex>>
         acquire_loc(monitoring::Node*);
    };
    namespace utils{
     void print(diff::elem e,std::ostream & os,int depth);
     void print_diff_impl(diff::elem e,
                          std::vector<diff::elem> const & v,
                          std::ostream & os,
                          int depth,
                          bool linebreak);
     void print_diff(diff const & d, std::ostream & os,std::string header = "");
    }

    template<typename F> void walk_tree_impl(monitoring::Node* n,int depth,F f ){
        f(n,depth);
        for(auto ch: n->children){
         walk_tree_impl(ch,depth+1,f);
        }
    }

    template<typename F> void walk_reg(monitoring::Registry const & mt, F f){
        walk_tree_impl(mt.get_root(),0,f);
    }
}

#endif // MONITORING_H
