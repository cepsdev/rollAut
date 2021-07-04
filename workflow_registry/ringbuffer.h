#ifndef RINGBUFFER_H
#define RINGBUFFER_H
#include <vector>

template <typename T, size_t buffer_size = 128, typename elems_t = std::vector<T>> class Ringbuffer{
    elems_t elems_;
    std::size_t start_,end_;
    bool full() const{
        return (end_ + 1) % buffer_size == start_;
    }
public:
    Ringbuffer() : start_(0), end_(0) {
        elems_.resize(buffer_size);
    }
    elems_t & elems(){return elems_;}
    auto capacity() const {return buffer_size-1;}
    bool empty() const {return start_ == end_;}
    void push_back (T const & v){
        if (!full()){
            elems_[end_] = v;
            end_ = (end_ + 1) % buffer_size;
            return;
        }
        elems_[end_] = v;
        end_ = (end_ + 1) % buffer_size;
        start_ = (start_ + 1) % buffer_size;
    }
    void push (T const & v){push_back(v);}
    void pop() {
        if (empty()) return;
        start_ = (start_ + 1 ) % buffer_size;
    }
    std::size_t size() const {
        if (start_ <= end_) return end_ - start_;
        return buffer_size - start_ + end_;
    }
    void clear() {
        start_ = end_;
    }
    T& front() {
        return elems_[start_];
    }
    T& back() {
        if (end_ > 0) return elems_[end_ - 1];
        return elems_[buffer_size - 1];
    }
    T& operator [](std::size_t i){
        auto j = (start_+i) % buffer_size; return elems_[j];
    }
    T const & operator [](std::size_t i) const {
        auto j = (start_+i) % buffer_size; return elems_[j];
    }
};


#endif // RINGBUFFER_H
