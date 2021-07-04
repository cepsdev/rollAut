#ifndef HTTP_UTILS_H
#define HTTP_UTILS_H

#include <tuple>
#include <string>
#include <vector>

namespace http{

 using read_http_request_result_t =
  std::tuple<bool,
             std::string,
             std::vector<std::pair<std::string,std::string>>
            >;
  read_http_request_result_t read_http_request(std::string const & buffer);
  std::pair<bool,std::string>
          get_http_attribute_content(std::string attr, std::vector<std::pair<std::string,std::string>> const & http_header);
  std::string encode_base64(void * mem, size_t len);
  std::string encode_base64(std::string s);
  bool field_with_content(std::string attr, std::string value,std::vector<std::pair<std::string,std::string>> const & http_header);

}

#endif // HTTP_UTILS_H
