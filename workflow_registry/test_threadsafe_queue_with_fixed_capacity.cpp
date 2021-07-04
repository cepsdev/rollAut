#include "tests.h"
#include "ringbuffer.h"
#include "threadsafe_queue.h"
#include <iostream>
#include <cassert>
#include <vector>

void tests::test_thread_safe_queue_with_ringbuffer(){
    threadsafe_queue<int,Ringbuffer<int>> q;
    int v;
    q.push(1);
    q.push(2);
    q.wait_and_pop(v);
    std::cout << v << std::endl;
    auto vv = q.wait_and_pop();
    std::cout << *vv << std::endl;
    vv = q.try_pop();
    q.try_pop(v);
}
