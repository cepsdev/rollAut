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
#include "rollout_serialization.h"

static void print_usage(std::ostream& os,char * argv[]){
    using namespace std;
    os << "Usage: " << argv[0] << " [-h HOSTNAME] [-u USER] [-p PASSWD] [-t TIMESTAMP] [-c] -s SAPCODE -j JOB_NAME" << endl;
    os << endl;
    os << "Checks MySQL Table 'rollouts' for entries younger than TIMESTAMP optionally returning the value of result_cd." << endl;
    os <<"-h name of host running MySQL server, default is 'localhost'." << endl;
    os <<"-u user name used for login to MySQL server, default is 'root'." << endl;
    os <<"-p passphraseused for login to MySQL server, default is the empty string." << endl;
    os <<"-t Timestamp used for filtering of relevant job entries, entries with result_ts older are ignored." << endl;
    os <<"-c name of host running MySQL server, default is 'localhost'." << endl;

    os << "For any obligatory parameter without a value a reasonable default will be chosen." << endl;

}

#include <climits>
int main(int argc,char* argv[])
{
    using namespace std;

    std::string hostname = "localhost";
    std::string user = "root";
    std::string passwd = "";
    std::string timestamp = "";
    std::string sapcode;
    std::string database{"rollout"};
    std::string job_name{};

    bool check_for_empty_resultset_only = true;

    int opt;

    for(; (opt = getopt(argc,argv,":h:u:p:t:d:j:s:c")) != -1 ;){
        if (opt == '?' || opt == ':')
        {
            print_usage(cerr,argv);
            return - EXIT_FAILURE;
        }
        switch(opt){
            case 'h' : hostname = optarg; break;
            case 'p' : passwd = optarg; break;
            case 'u' : user = optarg; break;
            case 't' : timestamp = optarg; break;
            case 'd' : database = optarg; break;
            case 'j' : job_name = optarg; break;
            case 's' : sapcode = optarg; break;
            case 'c' : check_for_empty_resultset_only=false; break;
        }
    }

    if (timestamp.length() == 0)
        timestamp = rollaut::db::mysql_timestamp(chrono::system_clock::now());


    try {
      auto driver = get_driver_instance();
      std::shared_ptr<sql::Connection> con { driver->connect("tcp://"+hostname, user, passwd) };
      con->setSchema(database);
      rollaut::db::rollout::ceps::dump_step_types(cout,con);
      rollaut::db::rollout::ceps::dump_active_rollouts(cout,con,timestamp);
      rollaut::db::rollout::ceps::dump_active_rollout_stores(cout,con,timestamp);
      rollaut::db::rollout::ceps::dump_active_rollout_steps(cout,con,timestamp);
    } catch (sql::SQLException &e) {
      cerr << "***Fatal: " << e.what()<< " (MySQL error code: " << e.getErrorCode() << ", SQLState: " << e.getSQLState() << " )" << endl;
      return - EXIT_FAILURE;
    }
    return EXIT_SUCCESS;
}
