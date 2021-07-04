#ifndef WEBSOCKET_UTILS_H
#define WEBSOCKET_UTILS_H

#include <sys/types.h>
#include <dirent.h>
#include <sys/stat.h>
#include <unistd.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <sys/epoll.h>
#include <fcntl.h>
#include <netdb.h>
#include <tuple>
#include <string>
#include <vector>

namespace ws_utils{

    std::pair<bool,std::string> get_http_attribute_content(
        std::string attr,
        std::vector<std::pair<std::string,std::string>> const & http_header);

    bool field_with_content(
        std::string attr,
        std::string value,
        std::vector<std::pair<std::string,std::string>> const & http_header);

    std::tuple<bool,std::string,std::vector<std::pair<std::string,std::string>>> read_http_request(
        int sck,
        std::string& unconsumed_data);

    struct websocket_frame{
     std::vector<unsigned char> payload;
     bool fin = false;
     bool rsv1 = false;
     bool rsv2 = false;
     bool rsv3 = false;
     std::uint8_t opcode = 0;
    };

    std::pair<bool,websocket_frame> read_websocket_frame(int sck);
}


#endif // WEBSOCKET_UTILS_H

