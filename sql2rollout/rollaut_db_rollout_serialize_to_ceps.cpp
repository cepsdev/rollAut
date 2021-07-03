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


#include "rollout_serialization.h"
#include <climits>

static void build_query_fetch_step_types(std::ostream & os){
    os << "SELECT * from rollout_step_type;";
}

std::string rollaut::db::rollout::ceps::ceps_str(std::string s, bool ignore_new_lines){
    std::stringstream ss;
    ss << "\"";
    for(std::size_t i = 0 ; i != s.length();++i)
    {
        if (s[i] == '"') ss << "\\";
        if (s[i] == '\n') {if (!ignore_new_lines) ss << "\\n";continue;}
        if (s[i] == '\r') {if (!ignore_new_lines) ss << "\\r";continue;}
        if (s[i] == '\t') {ss << "\\t";continue;}
        char buffer[2] = {0};
        buffer[0] = s[i];
        ss << buffer;
    }
    ss << "\"";
    return ss.str();
}

static void build_query_fetch_active_rollouts(std::ostream & os,std::string timestamp){
    os << "select id,name,start,UNIX_TIMESTAMP(start) from rollout where start >= '"+timestamp+"';";
}

static void build_query_fetch_active_rollout_stores(std::ostream & os,std::string timestamp){
    os << "select rollout_store.id,rollout_store.rollout,rollout_store.name,rollout_store.sap_code from rollout_store,rollout where rollout_store.rollout = rollout.id and rollout.start >= '"+timestamp+"';";
}

static void build_query_fetch_active_rollout_steps(std::ostream & os,std::string timestamp){
    os << "select rollout_step.id,rollout_step.rollout,rollout_step.step_type,rollout_step.sequence,rollout_step.warn,rollout_step.error,rollout_step.fork from rollout_step,rollout where rollout_step.rollout = rollout.id and rollout.start >= '"+timestamp+"';";
}


static bool ignore_ws_or_semicolon(std::string s, size_t& i){
    for(;i<s.length();++i) if (!std::isspace(s[i]) && s[i] != ';') break;
    return i < s.length();
}

static bool match_id(std::string s, size_t& i, std::string& id){
    id = "";
    for(;i<s.length();++i)
        if (std::isspace(s[i]) || s[i] == ';' || s[i] == '=') break;
        else {
            char buffer[2] = {}; buffer[0] = s[i];id.append(buffer);
        }
    return id.length();
}

static bool match_val(std::string s, size_t& i, std::string& val){
    val = "";
    if (s[i] == '"'){
        ++i;
        for(;i<s.length();++i){
            if (s[i] == '"') break;
            else {
                if (s[i] == '\\'){
                    if (i+1>=s.length()) return false;
                    ++i;
                    if (s[i]=='"') val.append("\"");
                    else if (s[i]=='n') val.append("\n");
                } else {
                    char buffer[2] = {}; buffer[0] = s[i];val.append(buffer);
                }
            }
        }
    } else {
        for(;i<s.length();++i)
            if (s[i] == ';') break;
            else {
                char buffer[2] = {}; buffer[0] = s[i];val.append(buffer);
            }
    }
    return val.length();
}

static bool match_eq(std::string s, size_t& i){
    if (!ignore_ws_or_semicolon(s,i)) return false;
    if (s[i] == '='){++i;return s.length() > i;}
    return false;
}

std::vector<std::pair<std::string,std::string>>
 rollaut::db::rollout::ceps::get_val_defs(std::string s, bool check_for_special_lvalues){
    using namespace std;
    vector<pair<string,string>> r;
    size_t i = 0;
    for(;;){
        if(!ignore_ws_or_semicolon(s,i))break;
        std::string id;
        if(!match_id(s,i,id))break;
        if(!ignore_ws_or_semicolon(s,i))break;
        if(!match_eq(s,i))break;
        if(!ignore_ws_or_semicolon(s,i))break;

        if ( check_for_special_lvalues && (id == "timeout" || id == "tries" || id == "check-result") )
        {
            std::string val;
            if(!match_val(s,i,val))break;
            r.push_back({id,val});
        } else {
            std::string val;
            if(!match_val(s,i,val))break;
            if (val.length() >= 3 && val[0] == '$' && val[1] == '{' && val.back() == '}')
             r.push_back({id,val.substr(2,val.length()-3)});
            else
             r.push_back({id,ceps_str(val)});
        }
    }
    return r;
}

void rollaut::db::rollout::ceps::dump_active_rollout_steps(steps_t& steps,std::shared_ptr<sql::Connection> con,std::string timestamp){
    using std::vector;
    using std::string;
    using std::pair;
    std::stringstream query;
    build_query_fetch_active_rollout_steps(query,timestamp);
    std::unique_ptr<sql::Statement> stmt { con->createStatement() };
    std::unique_ptr<sql::ResultSet> res { stmt->executeQuery(query.str()) };
    for(;res->next();){
        std::stringstream os;

        os << "rollout_step_db{"<<"\n"
             << " id{" << res->getInt("id") << ";};\n"
             << " step_type{" << res->getInt("step_type") << ";};\n"
             << " rollout{" << res->getInt("rollout") << ";};\n"
             << " sequence{" << res->getInt("sequence") << ";};\n";
        if(res->getString("warn").length() || res->getString("error").length()){
          os <<" criticality_def{\n";

          auto f = [&](vector<pair<string,string>> const & v){
              bool timeout_set = false;
              int timeout_min = INT_MAX ;
              for(auto const & e: v) if (e.first == "timeout"){
                  auto t = std::stoi(e.second);
                  if (t < 1) continue;
                  timeout_set = true;
                  timeout_min = std::min(timeout_min,t);
              } else if (e.first == "due"){
                  auto t_now = std::time(0);
                  tm t1 = *localtime(&t_now);
                  tm t2 = t1;

                  if (strptime(e.second.c_str()+1,"%Y-%m-%d %H:%M:%S",&t1) != nullptr) {
                  }
                  else if (strptime(e.second.c_str()+1,"%H:%M:%S",&t2) != nullptr){
                      t1 = t2;
                  } else continue;
                  auto t_diff = difftime(mktime(&t1),t_now);
                  timeout_min = std::min<long long>(timeout_min,t_diff);
                  timeout_set = true;
              }

              for(auto const & e: v){
                  if (e.first == "timeout") continue;
                  if (e.first == "due") continue;

                  os    << "  " << e.first << "{"
                          << e.second << ";"
                          << "};\n";
              }
              if (timeout_set){
                  os << " timeout{"<< timeout_min <<";};\n";
              }
          };

          vector<pair<string,string>> v_warn = get_val_defs(res->getString("warn"));
          if (v_warn.size()) { os << " warn {"; f(v_warn); os << "};\n"; }
          vector<pair<string,string>> v_err = get_val_defs(res->getString("error"));
          if (v_err.size()) { os << " error {"; f(v_err); os << "};\n"; }

          os <<" };\n";
        }
        os<< "};\n";
        steps[res->getInt("rollout") ].push_back(
         {os.str(),
          res->getInt("id"),
          res->getInt("step_type"),
          res->getInt("sequence")});
    }
}


void rollaut::db::rollout::ceps::dump_active_rollout_stores(stores_t & stores,
                                                            std::shared_ptr<sql::Connection> con,
                                                            std::string timestamp){
    using std::vector;
    using std::string;
    using std::pair;
    using std::tuple;
    std::stringstream query;
    build_query_fetch_active_rollout_stores(query,timestamp);
    std::unique_ptr<sql::Statement> stmt { con->createStatement() };
    std::unique_ptr<sql::ResultSet> res { stmt->executeQuery(query.str()) };
    for(;res->next();){
        std::stringstream os;
        os << "rollout_store_db{"<<"\n"
             << " id{" << res->getInt("id") << ";};\n"
             << " rollout{" << res->getInt("rollout") << ";};\n"
             << " name{" << ceps_str(res->getString("name")) << ";};\n"
             << " sap_code{" << ceps_str(res->getString("sap_code")) << ";};\n";
        os << "};\n";


        stores[res->getInt("rollout")].push_back(
            {os.str(),res->getString("name"),res->getString("sap_code")});
    }
}

void rollaut::db::rollout::ceps::dump_active_rollouts(
        std::shared_ptr<sql::Connection> con,
        std::string timestamp,
        std::vector<std::tuple<std::uint64_t,std::string,std::string,time_t>>&result){

    using std::vector;
    using std::string;
    using std::pair;
    std::stringstream query;
    build_query_fetch_active_rollouts(query,timestamp);
    std::unique_ptr<sql::Statement> stmt { con->createStatement() };
    std::unique_ptr<sql::ResultSet> res { stmt->executeQuery(query.str()) };

    for(;res->next();){
        std::stringstream os;
        os << "rollout_db{"<<"\n"
             << " id{" << res->getInt("id") << ";};\n";

        std::string rollout_name = res->getString("name");

        os << " name{" << ceps_str(rollout_name) << ";};\n"
             << " when{" << ceps_str(res->getString("start")) << ";};\n"
             << "};\n"
             ;

        result.push_back({res->getInt64("id"),rollout_name,os.str(),res->getInt64(4)});

    }
}

void rollaut::db::rollout::ceps::dump_step_types(
        std::ostream& os,
        std::map<int,step_type_t>& step_details,
        std::shared_ptr<sql::Connection> con){
    using std::vector;
    using std::string;
    using std::pair;
    std::stringstream query;
    build_query_fetch_step_types(query);
    std::unique_ptr<sql::Statement> stmt { con->createStatement() };
    std::unique_ptr<sql::ResultSet> res { stmt->executeQuery(query.str()) };
    for(;res->next();){
        step_type_t sdetails;
        int sid = res->getInt("id");


        std::string job_check, job_run;
        os << "rollout_step_type_db{"<<"\n"
           << " id{"
                 << res->getInt("id") << ";};\n"
           << " description{"
                 << ceps_str(sdetails.description = res->getString("description")) << ";};\n"
           << " job_check{"
                 << (job_check = ceps_str(sdetails.job_check = res->getString("job_check"))) << ";};\n"
           << " job_run{"
                 << (job_run = ceps_str(sdetails.job_run = res->getString("job_run")))<< ";};\n"
           << " job_check_warn{";
        {
               auto t = sdetails.job_check_warn = res->getString("job_check_warn");
               if (t.length()) os <<  ceps_str(t);
               else os << job_check;
               os << ";};\n";
        }
        os << " job_run_warn{";
        {
              auto t = sdetails.job_run_warn = res->getString("job_run_warn");
              if (t.length()) os <<  ceps_str(t);
              else os << job_run;
              os << ";};\n";
        }
        os << " job_run_error{" << ceps_str(sdetails.job_run_error = res->getString("job_run_error")) << ";};\n";

        vector<pair<string,string>> params_check = get_val_defs(res->getString("params_check"),false);
        vector<pair<string,string>> params_run = get_val_defs(res->getString("params_run"),false);
        vector<pair<string,string>> params_check_warn = get_val_defs(res->getString("params_check_warn"),false);
        vector<pair<string,string>> params_run_warn = get_val_defs(res->getString("params_run_warn"),false);
        vector<pair<string,string>> params_run_error = get_val_defs(res->getString("params_run_error"),false);
        std::set<std::string> special_params = {"soft_timeout"};
        auto dump_params = [&](std::map<std::string,std::string>& m,
                               vector<pair<string,string>> const & v){
              for(auto const & e : v){
                 if (special_params.find(e.first) == special_params.end() ){
                     os << "   param{name{"<<ceps_str(e.first) <<";};value{"<< e.second << ";};};";
                     m[e.first] = e.second;
                 }
              }
        };
        auto dump_special_params = [&](vector<pair<string,string>> const & v){
              for(auto const & e : v){
                 if (special_params.find(e.first) != special_params.end() )
                     os << "   param{name{"<<ceps_str(e.first) <<";};value{"<< e.second << ";};};";
              }
        };
        os << " params_ext{\n"
           << "  check{\n";
        dump_params(sdetails.params_check,params_check);
        os << "  };\n"
           << "  run{\n";
        dump_params(sdetails.params_run,params_run);
        os << "  };\n"
           << "  check_warn{\n";
        dump_params(sdetails.params_check_warn,params_check_warn);
        os << "  };\n"
           << "  run_warn{\n";
        dump_params(sdetails.params_run_warn,params_run_warn);
        os << "  };\n"
           << "  run_error{\n";
        dump_params(sdetails.params_run_error,params_run_error);
        os << "  };\n"
           <<" };\n";

        int job_ctrl_check = 0;
        int job_ctrl_run = 0;
        int job_ctrl_check_warn = 0;
        int job_ctrl_run_warn = 0;
        int job_ctrl_run_error = 0;

        if (res->findColumn("job_check_ctrl"))
            job_ctrl_check = res->getInt("job_check_ctrl");
        if (res->findColumn("job_run_ctrl"))
            job_ctrl_run =  res->getInt("job_run_ctrl");
        if (res->findColumn("job_check_warn_ctrl"))
            job_ctrl_check_warn =  res->getInt("job_check_warn_ctrl");
        if (res->findColumn("job_run_warn_ctrl"))
            job_ctrl_run_warn =  res->getInt("job_run_warn_ctrl");
        if (res->findColumn("job_run_error_ctrl"))
            job_ctrl_run_error =  res->getInt("job_run_error_ctrl");

        auto dump_job_ctrl = [&](int what){
            os << "   param{name{"<< "JOB_CTRL" <<";};value{"<< what << ";};};";
            /*if (what && 1) os << "   param{name{"<< "JOB_CTRL_FOLLOW" <<";};value{"<< 1 << ";};};";
            if (what && 2) os << "   param{name{"<< "JOB_CTRL_FIRE_AND_FORGET" <<";};value{"<< 1 << ";};};";
            if (what && 4) os << "   param{name{"<< "JOB_CTRL_TIME_DRIFT" <<";};value{"<< 1 << ";};};";
            if (what && 8) os << "   param{name{"<< "JOB_CTRL_CONSOLE" <<";};value{"<< 1 << ";};};";
            if (what && 16) os << "   param{name{"<< "JOB_CTRL_JOBIDENT" <<";};value{"<< 1 << ";};};";*/
        };

        os << " settings{\n"
           << "  check{\n";
        dump_special_params(params_check);
        dump_job_ctrl(job_ctrl_check);
        os << "\n  };\n"
           << "  run{\n";
        dump_special_params(params_run);
        dump_job_ctrl(job_ctrl_run);
        os << "\n  };\n"
           << "  check_warn{\n";
        dump_special_params(params_check_warn);
        dump_job_ctrl(job_ctrl_check_warn);
        os   << "\n  };\n"
             << "  run_warn{\n";
        dump_special_params(params_run_warn);
        dump_job_ctrl(job_ctrl_run_warn);
        os << "\n  };\n"
           << "  run_error{\n";
        dump_special_params(params_run_error);
        dump_job_ctrl(job_ctrl_run_error);
        os << "\n  };\n"
           <<" };\n";
        os << "};\n"
             ;
        step_details[sid] = sdetails;
        //std::cerr << "'" << sid << "' "<< sdetails.description << std::endl;
    }
}

