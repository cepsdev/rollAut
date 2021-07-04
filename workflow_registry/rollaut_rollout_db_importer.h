#ifndef ROLLAUT_ROLLOUT_DB_IMPORTER_H
#define ROLLAUT_ROLLOUT_DB_IMPORTER_H

#include <string>
#include <thread>

#include "rollout_serialization.h"
#include "monitoring.h"
#include "monitoring_observer.h"

namespace rollaut{
    class Rollout_db_importer: public monitoring::Observer{
    public:
        std::string hostname;// = "localhost";
        std::string user;// = "rollout_user";
        std::string passwd;// = "1234";
        std::string timestamp = "";
        std::string database;// = "rollout";
        Rollout_db_importer(monitoring::Registry* reg,
                            std::string h,
                            std::string u,
                            std::string p,
                            std::string t,
                            std::string d,
                            bool start_thread = true)
                              :monitoring::Observer{reg,false},
                                hostname{h},
                                user{u},
                                passwd{p},
                                timestamp{t},
                                database{d}
        {
           if (timestamp.length() == 0)
               timestamp = rollaut::db::mysql_timestamp(
                           std::chrono::system_clock::now() - std::chrono::minutes{60*48}
                           );
           if(start_thread){
               std::thread th{&Rollout_db_importer::do_observe,this};
               th.detach();
           }
        }
        void do_observe() override;
    };
}

#endif // ROLLAUT_ROLLOUT_DB_IMPORTER_H
