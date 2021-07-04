#include "monitoring.h"
#include "monitoring_observer.h"
#include "tests.h"

void tests::test_basic_observer(){
    monitoring::Registry reg;
    auto print_reg = [&reg](){     walk_reg(reg,[](monitoring::Node* n,int depth){
            for(int i = 0; i != depth;++i) std::cout << "  ";
            std::cout << n->name <<" (" << n->node_type<< ", rev:"<< n->revision_id <<")" << std::endl;
        });};

    reg.add_node("lady gaga");
    reg.add_node("lady gaga/songs");
    monitoring::Observer observer1{&reg};
    observer1.watch("lady gaga/songs");

    std::this_thread::sleep_for(std::chrono::milliseconds(500));
    reg.add_node("lady gaga/songs/shallow",monitoring::NODE_TYPE_ENTRY);
    std::this_thread::sleep_for(std::chrono::milliseconds(500));

    std::this_thread::sleep_for(std::chrono::milliseconds(500));
    reg.add_node("lady gaga/songs/poker face",monitoring::NODE_TYPE_ENTRY);
    std::this_thread::sleep_for(std::chrono::milliseconds(500));
    reg.add_node("lady gaga/songs/bad romance",monitoring::NODE_TYPE_ENTRY);
    std::this_thread::sleep_for(std::chrono::milliseconds(500));
    reg.add_node("lady gaga/songs/alejandro",monitoring::NODE_TYPE_ENTRY);
    std::this_thread::sleep_for(std::chrono::milliseconds(500));
    reg.add_node("lady gaga/songs/A-Yo",monitoring::NODE_TYPE_ENTRY);
    std::this_thread::sleep_for(std::chrono::milliseconds(500));
}
