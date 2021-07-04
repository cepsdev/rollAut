#include <malloc.h>
#include <stdio.h>
#include <string.h>
#include <iostream>
#include "http_utils.h"
#include "rollaut_async_stream.h"

bool rollaut::Async_stream::bytes_in_in_buffer() const {
    return in_buf_end - in_buf_start > 0;
    //return in_buffer.size() > 0;
}
size_t rollaut::Async_stream::num_of_bytes_in_in_buffer() const{
    return in_buf_end - in_buf_start;
    //return in_buffer.size();
}
char* rollaut::Async_stream::in_buffer_data(){
    return in_buffer.data() + in_buf_start;
    //return in_buffer.data();
}
char& rollaut::Async_stream::in_buffer_char_at(std::size_t idx){
    return in_buffer[in_buf_start+idx];
    //return in_buffer[idx];
}
void rollaut::Async_stream::consume_in_buffer(std::size_t size){
    //std::cerr << in_buf_start << " " << in_buf_end << std::endl;

    in_buf_start+=size;
    if (in_buf_start >= in_buf_end)
        in_buf_start = in_buf_end = 0;
   /* if (in_buffer.size() <= size) {
        in_buffer.clear();return;
    }
    std::vector<char> t{in_buffer.begin()+size,in_buffer.end()};
    in_buffer = std::move(t);*/
}

bool rollaut::Async_stream::write_pending() const {
    return out_buffer.size() > 0 && out_pos < out_buffer.size();
}
void rollaut::Async_stream::write_data(std::string const & s){
    if(out_buffer.size() == 0) out_pos = 0;
    out_buffer.insert(out_buffer.end(),s.begin(),s.end());
}
void rollaut::Async_stream::write_data(char const * data,std::size_t len){
    if(out_buffer.size() == 0) out_pos = 0;
    out_buffer.insert(out_buffer.end(),data,data+len);
}

void rollaut::Async_stream::append_to_in_buffer(char* mem,std::size_t len){
    if (len == 0 || mem == nullptr) return;
    if (in_buf_end+len < in_buffer.size()){
        memcpy(in_buffer.data()+in_buf_end,mem,len);
        in_buf_end+=len;
    } else {
        auto ls = in_buffer.size() - in_buf_end;
        if(ls>0)memcpy(in_buffer.data()+in_buf_end,mem,ls);
        in_buffer.insert(in_buffer.end(),mem+ls,mem+len);
        in_buf_end+=len;
    }
}

bool rollaut::Async_stream::read_data(){
    char buf[33];
    ssize_t read_tot = 0;
    ssize_t readbytes;
    bool done = false;
    bool failure = false;
    for(;!done;){
        memset(buf,0,33);
        readbytes=recv(sck,buf,32,MSG_DONTWAIT);
        auto err = errno;
        if (readbytes < 0) {
            if (err == EINTR) continue;
            done = true;
            if (err != EAGAIN && err != EWOULDBLOCK)
                failure = true;
        } else if (readbytes > 0) {
            append_to_in_buffer(buf,readbytes);
            read_tot += readbytes;
        } else done = true;
    }
    return !failure && read_tot > 0;
}
std::pair<bool,http::read_http_request_result_t>
 rollaut::Async_stream::check_for_http(std::size_t& data_consumed){
    if (num_of_bytes_in_in_buffer() < 4) return {false,{}};
    auto msg_boundary = -1;
    for(auto i = 0; i+3 < num_of_bytes_in_in_buffer(); ++i){
        if (in_buffer_char_at(i)!='\r' || in_buffer_char_at(i+1)!='\n' ||
            in_buffer_char_at(i+2)!='\r' || in_buffer_char_at(i+3)!='\n') continue;
        msg_boundary = i; break;
    }
    if (msg_boundary < 0) return {false,{}};
    std::string msg;
    msg.resize(msg_boundary+4);
    memcpy((char*)msg.data(),in_buffer_data(),msg_boundary+4);
    //std::cerr << msg << std::endl;
    auto rhr = http::read_http_request(msg);
    data_consumed = msg_boundary+4;
    return {true,rhr};
}
