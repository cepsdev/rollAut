#include "websocket_utils.h"

namespace ws_utils {

std::pair<bool,std::string> get_http_attribute_content(std::string attr, std::vector<std::pair<std::string,std::string>> const & http_header){
 for(auto const & v : http_header){
     if (v.first == attr)
         return {true,v.second};
 }
 return {false,{}};
}

bool field_with_content(std::string attr, std::string value,std::vector<std::pair<std::string,std::string>> const & http_header){
 auto r = get_http_attribute_content(attr,http_header);
 if (!r.first) return false;
 return r.second == value;
}

std::tuple<bool,std::string,std::vector<std::pair<std::string,std::string>>> read_http_request(int sck,std::string& unconsumed_data){
 using header_t = std::vector<std::pair<std::string,std::string>>;
 std::tuple<bool,std::string,header_t> r;

 constexpr auto buf_size = 4096;
 char buf[buf_size];
 std::string buffer = unconsumed_data;
 std::string eom = "\r\n\r\n";
 std::size_t eom_pos = 0;

 unconsumed_data.clear();
 bool http_req_complete = false;
 ssize_t readbytes = 0;
 ssize_t buf_pos = 0;

 for(; (readbytes=recv(sck,buf,buf_size-1,0)) > 0;){
  buf[readbytes] = 0;
  for(buf_pos = 0; buf_pos < readbytes; ++buf_pos){
   if (buf[buf_pos] == eom[eom_pos])++eom_pos;else eom_pos = 0;
   if (eom_pos == eom.length()){
    http_req_complete = true;
    if (buf_pos+1 < readbytes) unconsumed_data = buf+buf_pos+1;
    buf[buf_pos+1] = 0;
    break;
   }
  }
  buffer.append(buf);
  if(http_req_complete) break;
 }

 if (http_req_complete) {
  header_t header;
  std::string first_line;
  size_t line_start = 0;
  for(size_t i = 0; i < buffer.length();++i){
    if (i+1 < buffer.length() && buffer[i] == '\r' && buffer[i+1] == '\n' ){
        if (line_start == 0) first_line = buffer.substr(line_start,i);
        else if (line_start != i){
         std::string attribute;
         std::string content;
         std::size_t j = line_start;
         for(;j < i && buffer[j]==' ';++j);
         auto attr_start = j;
         for(;j < i && buffer[j]!=':';++j);
         attribute = buffer.substr(attr_start,j-attr_start);
         ++j;
         for(;j < i && buffer[j]==' ' ;++j);
         auto cont_start = j;
         auto cont_end = i - 1;
         for(;buffer[cont_end] == ' ';--cont_end);
         content = buffer.substr(cont_start, cont_end - cont_start + 1);
         header.push_back(std::make_pair(attribute,content));
        }
        line_start = i + 2;++i;
    }
  }
  return std::make_tuple(true,first_line,header);
 }

 return std::make_tuple(false,std::string{},header_t{});
}

std::pair<bool,websocket_frame> read_websocket_frame(int sck){
    websocket_frame r;
    std::uint16_t header;

    auto bytesread = recv(sck,&header,sizeof header,0);
    if (bytesread != sizeof header) return {false,{}};

    r.opcode = header & 0xF;
    r.fin  = header & 0x80;
    r.rsv1 = header & 0x40;
    r.rsv2 = header & 0x20;
    r.rsv3 = header & 0x10;
    bool mask = header >> 15;
    std::uint8_t payload_len_1 = (header >> 8) & 0x7F;

    size_t payload_len = payload_len_1;

    if (payload_len_1 == 126){
     std::uint16_t v;
     bytesread = recv(sck,&v,sizeof v,0);
     if (bytesread != sizeof v) return {false,{}};
     payload_len = ntohs(v);
    } else if (payload_len_1 == 127){
     std::uint64_t v;
     bytesread = recv(sck,&v,sizeof v,0);
     if (bytesread != sizeof v) return {false,{}};
     payload_len = be64toh(v);
    }

    std::uint32_t mask_key = 0;
    if (mask){
     bytesread = recv(sck,&mask_key,sizeof mask_key,0);
     if (bytesread != sizeof mask_key) return {false,{}};
    }

    constexpr size_t bufsize = 4;unsigned char buf[bufsize];
    size_t payload_bytes_read = 0;
    r.payload.resize(payload_len);

    for(;payload_bytes_read < payload_len;){
        ssize_t toread = std::min(payload_len - payload_bytes_read,bufsize);
        bytesread = recv(sck,(char*)buf,toread,0);
        if (bytesread == -1){
            auto e = errno;
            if (e == EAGAIN || e == EINTR) continue;
            return {false,{}};
        }
        for(size_t i = 0; (ssize_t)i < bytesread; ++i) r.payload[payload_bytes_read+i] = buf[i] ^ ((unsigned char *)&mask_key)[ (payload_bytes_read+i) % 4];
        payload_bytes_read += bytesread;
    }

    return {true,r};
}
}

