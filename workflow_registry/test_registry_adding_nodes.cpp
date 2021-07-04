#include <iostream>
#include <cassert>
#include <vector>

#include "ringbuffer.h"
#include "threadsafe_queue.h"
#include "monitoring.h"
#include "tests.h"

void tests::test_add_node_and_locks(){
    monitoring::Registry reg;
    auto print_reg = [&reg](){     walk_reg(reg,[](monitoring::Node* n,int depth){
            for(int i = 0; i != depth;++i) std::cout << "  ";
            std::cout << n->name <<" (" << n->node_type <<")" << std::endl;
        });};

    auto q = std::make_shared<threadsafe_queue<monitoring::Message,Ringbuffer<monitoring::Message>>>(threadsafe_queue<monitoring::Message,Ringbuffer<monitoring::Message>>{});


    reg.add_node("lady gaga");
    reg.add_node("lady gaga/songs");
    reg.register_observer("lady gaga/songs",q);

    reg.add_node("lady gaga/songs/shallow",monitoring::NODE_TYPE_ENTRY);
    reg.add_node("lady gaga/songs/poker face",monitoring::NODE_TYPE_ENTRY);
    reg.add_node("lady gaga/songs/bad romance",monitoring::NODE_TYPE_ENTRY);
    reg.add_node("lady gaga/songs/alejandro",monitoring::NODE_TYPE_ENTRY);
    reg.add_node("lady gaga/songs/A-Yo",monitoring::NODE_TYPE_ENTRY);

    for(;;){
        auto m = q->wait_and_pop();
        auto lk = reg.lock(m->node);
        std::cerr << m->what << " " << m->node->name << " " << m->node->revision_id <<  std::endl;
    }
    print_reg();
}
