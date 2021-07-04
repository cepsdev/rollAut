#ifndef THREADSAFE_QUEUE_H
#define THREADSAFE_QUEUE_H

#include <thread>
#include <mutex>
#include <condition_variable>

template<typename T,typename C>
class threadsafe_queue;

template<typename T,typename C>
class threadsafe_queue{
private:
    mutable std::mutex mut;
    C data_queue;
    std::condition_variable data_cond;
public:
    threadsafe_queue() = default;
    threadsafe_queue(threadsafe_queue const & rhs){
        std::lock_guard<std::mutex> lk{rhs.mut};
        data_queue = rhs.data_queue;
    }
    void push(T new_value)
    {
        std::lock_guard<std::mutex> lk{mut};
        data_queue.push(new_value);
        data_cond.notify_one();
    }
    void wait_and_pop(T& value){
        std::unique_lock<std::mutex> lk{mut};
        data_cond.wait(lk,[this]{return !data_queue.empty();});
        value = data_queue.front();
        data_queue.pop();
    }
    std::shared_ptr<T> wait_and_pop(){
        std::unique_lock<std::mutex> lk{mut};
        data_cond.wait(lk,[this]{return !data_queue.empty();});
        std::shared_ptr<T> res(std::make_shared<T>(data_queue.front()));
        data_queue.pop();
        return res;
    }
    bool try_pop(T& value){
        std::lock_guard<std::mutex> lk{mut};
        if(data_queue.empty()) return false;
        value=data_queue.front();
        data_queue.pop();
        return true;
    }
    std::shared_ptr<T> try_pop(){
        std::lock_guard<std::mutex> lk {mut};
        if (data_queue.empty()) return {};
        std::shared_ptr<T> res{std::make_shared<T>(data_queue.front())};
        return res;
    }
    bool try_pop(std::vector<T>&v){
            std::lock_guard<std::mutex> lk {mut};
            if (data_queue.empty()) return false;
            for(;!data_queue.empty();)
            {
                v.push_back(data_queue.front());data_queue.pop();
            }
            return true;
    }
    bool empty() const {
        std::lock_guard<std::mutex> lk{mut};
        return data_queue.empty();
    }
    std::mutex& mtx(){return mut;}
};

#endif // THREADSAFE_QUEUE_H
