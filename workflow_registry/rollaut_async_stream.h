#ifndef ROLLAUT_ASYNC_STREAM_H
#define ROLLAUT_ASYNC_STREAM_H

#include <vector>
#include <optional>
#include <string>
#include <unistd.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <sys/epoll.h>
#include <fcntl.h>
#include <netdb.h>

namespace rollaut{
    class Async_stream{
        std::vector<char> in_buffer;
        size_t in_buf_start = 0;
        size_t in_buf_end = 0;
    public:
        int epfd;
        std::vector<char> out_buffer;
        int sck=-1;
        ssize_t out_pos = -1;
        Async_stream() = default;
        Async_stream(int e,int s):epfd{e},sck{s}{

        }
        virtual void write_finished() = 0;
        virtual bool read_finished() = 0;
        virtual void connected(bool) = 0;
        virtual bool reading_mode() = 0;
        bool bytes_in_in_buffer() const;
        size_t num_of_bytes_in_in_buffer() const;
        char* in_buffer_data();
        char& in_buffer_char_at(std::size_t);
        void consume_in_buffer(std::size_t size);
        void append_to_in_buffer(char*,std::size_t);
        bool write_pending() const;
        void write_data(std::string const & s);
        void write_data(char const * data,std::size_t len);
        bool read_data();
        std::pair<bool,http::read_http_request_result_t>
         check_for_http(std::size_t& data_consumed);
    };
}
#endif // ROLLAUT_ASYNC_STREAM_H
