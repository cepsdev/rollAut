#ifndef ROLLAUT_REG_MANAGER_H
#define ROLLAUT_REG_MANAGER_H
#include "rollaut_ws_interface.h"
#include "rapidjson/rapidjson.h"
#include "rapidjson/reader.h"
#include "rapidjson/document.h"

namespace rollaut{
    class Registry_manager : public Websocket_interface{
        monitoring::Registry& reg;
        int concurrency = 1;
        std::vector<std::shared_ptr<monitoring::Observer>> observers;
    public:
        Registry_manager(monitoring::Registry& r):reg{r}{}
        monitoring::Registry& get_reg(){return reg;}

        bool message_read(int ws_frame_opcode,
                          char* data,
                          std::size_t len,
                          rollaut::Websocketserver_stream*,
                          int stream_id) override;
        void run();
    };
}



#endif // ROLLAUT_REG_MANAGER_H
