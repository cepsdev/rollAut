/*
MIT License

Copyright (c) 2021 Tomas Prerovsky

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


#ifndef ROLLOUT_SERIALIZATRON_H
#define ROLLOUT_SERIALIZATRON_H
#include <stdlib.h>
#include <iostream>
#include <ctype.h>
#include <chrono>
#include <sstream>
#include <vector>
#include <set>
#include "mysql_connection.h"
#include <cppconn/driver.h>
#include <cppconn/exception.h>
#include <cppconn/resultset.h>
#include <cppconn/statement.h>

// "2018-07-07 00:00:00"


namespace rollaut{
 namespace db{
 template <typename T> static std::string mysql_timestamp(std::chrono::time_point<T> tmp){
     using namespace std;
     auto time_now = chrono::system_clock::to_time_t(tmp);
     auto t = std::localtime(&time_now);
     std::stringstream s;
     s << t->tm_year + 1900;
     s << "-"; if (t->tm_mon+1 < 10) s << "0";s << t->tm_mon+1;
     s << "-"; if (t->tm_mday < 10) s << "0";s << t->tm_mday;
     s << " ";
     if (t->tm_hour < 10)s << "0";
     s << t->tm_hour <<":";
     if (t->tm_min < 10) s << "0";
     s << t->tm_min <<":";
     if (t->tm_sec < 10) s << "0";
     s << t->tm_sec;
     return s.str();
 }

  namespace rollout{
   namespace ceps{
      using stores_t = std::map<int,std::vector<
                                        std::tuple</*ceps*/ std::string,
                                                   /*name*/ std::string,
                                                   /*sap*/ std::string >>> ;
      using steps_t = std::map<int,std::vector<
                                     std::tuple</*ceps*/ std::string,
                                                /*id*/ int,
                                                /*type*/ int,
                                                /*order*/ int >>> ;
      struct step_type_t{
          std::string description;
          std::string job_check;
          std::string job_run;
          std::string job_check_warn;
          std::string job_run_warn;
          std::string job_run_error;
          std::map<std::string,std::string> params_check;
          std::map<std::string,std::string> params_run;
          std::map<std::string,std::string> params_check_warn;
          std::map<std::string,std::string> params_run_warn;
          std::map<std::string,std::string> params_run_error;
      };

      std::string ceps_str(std::string s, bool ignore_new_lines = true);
      std::vector<std::pair<std::string,std::string>>
       get_val_defs(std::string s, bool check_for_special_lvalues = true);

      void dump_active_rollout_steps(steps_t&,
                                     std::shared_ptr<sql::Connection> con,
                                     std::string timestamp);
      void dump_active_rollout_stores(stores_t &,
                                      std::shared_ptr<sql::Connection> con,
                                      std::string timestamp);
      void dump_active_rollouts(std::shared_ptr<sql::Connection> con,
                                std::string timestamp,
                                std::vector<std::tuple<std::uint64_t,std::string,std::string,time_t>>&res);
      void dump_step_types(std::ostream& os,
                           std::map<int,step_type_t>&,
                           std::shared_ptr<sql::Connection> con);
   }
  }
 }
}
#endif // ROLLOUT_SERIALIZATRON_H
