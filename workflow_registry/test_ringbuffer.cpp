#include "tests.h"
#include "ringbuffer.h"
#include <iostream>
#include <cassert>
#include <vector>


void tests::test_ringbuffer(){
    Ringbuffer<int,8> rb;
    assert(rb.size() == 0);
    assert(rb.empty());
    std::cout << rb.elems().size() << "\n";
    std::cout << rb.elems().empty() << "\n";
    rb.push_back(10);rb.push_back(11);rb.push_back(12);
    assert(rb.size() == 3);
    assert(!rb.empty());
    std::cout << rb.size() << "\n";
    std::cout << rb.front() << "\n";
    std::cout << rb.back() << "\n";
    rb.clear();
    assert(rb.size() == 0);
    assert(rb.empty());
    std::cout << rb.size() << "\n";
    rb.push_back(13);rb.push_back(14);rb.push_back(15);
    assert(rb.size() == 3);
    assert(!rb.empty());
    assert(rb.front()==13);
    assert(rb.back() ==15);
    assert(rb[0] ==13);
    assert(rb[1] ==14);
    assert(rb[2] ==15);

    std::cout << rb.size() << "\n";
    std::cout << rb.front() << "\n";
    std::cout << rb.back() << "\n";
    std::cout << rb[1] << "\n";
    rb.push_back(16);rb.push_back(17);rb.push_back(18);
    for(std::size_t i = 0; i != rb.size();++i)
        std::cout << rb[i] << "\n";
    std::cout << "----\n";
    assert(rb.size() == 6);
    assert(!rb.empty());
    assert(rb.front()==13);
    assert(rb.back() ==18);
    assert(rb[0] ==13);
    assert(rb[1] ==14);
    assert(rb[2] ==15);
    assert(rb[3] ==16);
    assert(rb[4] ==17);
    assert(rb[5] ==18);

    rb.clear();
    assert(rb.size() == 0);
    assert(rb.empty());
    for(int i = 1; i != 128;++i)
        rb.push_back(i);
    std::cerr << rb.capacity() << std::endl;
    std::cerr << rb.size() << std::endl;
    assert(rb.size() == rb.capacity());
    assert(!rb.empty());
    assert(rb.front()==121);
    assert(rb.back() ==127);
    assert(rb[0] ==121);
    assert(rb[1] ==122);
    assert(rb[2] ==123);
    assert(rb[3] ==124);
    assert(rb[4] ==125);
    assert(rb[5] ==126);
    assert(rb[6] ==127);
    for(std::size_t i = 0; i != rb.size();++i)
        std::cout << rb[i] << "\n";
}
