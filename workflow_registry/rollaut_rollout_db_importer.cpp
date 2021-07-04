#include "rollaut_rollout_db_importer.h"
#include "registry_utils.h"

void rollaut::Rollout_db_importer::do_observe(){
    using namespace std;
    using namespace reg_utils;
    std::map<std::uint64_t,std::uint64_t> last_seen_revision_id;
    std::set<std::uint64_t> ignore_list;

    auto print_reg = [](monitoring::Registry& reg){
        walk_reg(reg,[](monitoring::Node* n,int depth){
            for(int i = 0; i != depth;++i) std::cout << "  ";
            std::cout << n->name <<" ( id:" << n->id<< ", rev:"<< n->revision_id <<")";
            if (reg_utils::removed(n)) std::cout << " removed";
            else if (n->node_type & monitoring::NODE_TYPE_ATTRIBUTE){
                if (n->to_string().length()>128)
                 std::cout << "=" << "...";
                else
                 std::cout << "=" << n->to_string();
            }
            std::cout << std::endl;
        });
    };

    auto report_error = [](sql::SQLException &e){
        cerr << "***Fatal: "      << e.what()        << " (MySQL error code: "
             << e.getErrorCode()  << ", SQLState: "  << e.getSQLState()
             << " )" << endl;
    };

    sql::Driver* driver;
    try{
     driver = get_driver_instance();
    } catch (sql::SQLException &e){
     report_error(e);
     return;
    }
    for(;;){
        std::shared_ptr<sql::Connection> con;
        try{
            con = std::shared_ptr<sql::Connection>{driver->connect("tcp://"+hostname,
                                                                   user,
                                                                   passwd)};
            con->setSchema(database);
        } catch (sql::SQLException &e){
            report_error(e);
            this_thread::sleep_for(std::chrono::milliseconds{100});
            continue;
        }
        for(;;){
            timestamp = rollaut::db::mysql_timestamp(
                        std::chrono::system_clock::now() - std::chrono::minutes{60*168}
            );

            std::vector<std::tuple<std::uint64_t,std::string,std::string,time_t>> active_rollouts;
            std::stringstream step_types;
            rollaut::db::rollout::ceps::stores_t stores;
            rollaut::db::rollout::ceps::steps_t steps;
            std::map<int,rollaut::db::rollout::ceps::step_type_t>
                    step_type_details;

            try {
              rollaut::db::rollout::ceps::dump_step_types(step_types,step_type_details,con);
              rollaut::db::rollout::ceps::dump_active_rollouts(con,timestamp,active_rollouts);
              rollaut::db::rollout::ceps::dump_active_rollout_stores(stores,con,timestamp);
              rollaut::db::rollout::ceps::dump_active_rollout_steps(steps,con,timestamp);


            } catch (sql::SQLException &e) {
              report_error(e);
              break;
            }

            {//update registry
                std::map<std::uint64_t,bool> all_db_ids_in_reg;
                std::map<std::uint64_t,std::stringstream> ceps_representation;
                auto r = reg->acquire_loc("rollouts/scheduled/");
                //print_reg(*reg);
                auto current_rev = r.first->revision_id;
                auto rollouts_folder = r.first;

                auto root = r.first;
                for(auto rollout:active_rollouts){
                    ceps_representation[std::get<0>(rollout)] << step_types.str();
                    for(auto const & t: stores[std::get<0>(rollout)]){
                       ceps_representation[std::get<0>(rollout)] << std::get<0>(t);
                    }
                    for(auto const & t: steps[std::get<0>(rollout)]){
                       ceps_representation[std::get<0>(rollout)] << std::get<0>(t);
                    }
                    ceps_representation[std::get<0>(rollout)] << std::get<2>(rollout);
                }

                for(auto child:root->children){
                  if (removed(child)) continue;
                  auto rev_id = child->revision_id;
                  auto entity_id = child->id;
                  auto entity_attribute = child->get_attr("entity");
                  if (entity_attribute == nullptr) continue;
                  if (entity_attribute->to_string() != "rollout") continue;
                  auto origin_attribute = child->get_attr("origin");
                  if (origin_attribute==nullptr) continue;
                  if (origin_attribute->to_string() != "db_import_"+hostname+"__"+database) continue;
                  auto db_id_attribute = child->get_attr("db_id");
                  auto db_id = ((monitoring::Attribute_node<std::uint64_t>*)db_id_attribute)->value;
                  all_db_ids_in_reg[db_id] = false;

                  for(auto rollout:active_rollouts){
                      if (std::get<0>(rollout) == db_id)
                      {
                          all_db_ids_in_reg[db_id] = true;
                          break;
                      }
                  }

                  if (ignore_list.find(entity_id) != ignore_list.end()) continue;
                  {
                      auto it = last_seen_revision_id.find(entity_id);
                      if (it != last_seen_revision_id.end()){
                          if (it->second != rev_id ) {
                              ignore_list.insert(entity_id);
                              //std::cerr << "IGNORE " << entity_id << std::endl;
                              continue; //Someone else changed this entity
                          }
                      }
                  }

                  for(auto rollout:active_rollouts){
                    if (std::get<0>(rollout) == db_id){ //Modification of an existing entry
                      auto rollout_entry = child;
                      all_db_ids_in_reg[db_id] = true;
                      bool name_changed =
                              rollout_entry->name != std::get<1>(rollout); //check title first
                      bool changed = name_changed;
                      bool scheduled_start_changed = false;
                      auto scheduled_start_attr = rollout_entry->get_attr("scheduled_time_unix_time");
                      if (scheduled_start_attr == nullptr) changed |= scheduled_start_changed = true;
                      bool ceps_rep_changed = false;
                      auto ceps_rep = rollout_entry->get_node("ceps");
                      if (ceps_rep != nullptr){
                        ceps_rep = ceps_rep->get_attr("ceps");
                        if (ceps_rep!=nullptr){
                          changed |=
                           ceps_rep_changed = ceps_representation[std::get<0>(rollout)].str()
                                          != ((monitoring::Attribute_node<std::string>*)ceps_rep)->value;
                        } else changed = true;
                      } else changed = true;

                      auto new_scheduled_start = std::get<3>(rollout);
                      auto old_scheduled_start = ((monitoring::Attribute_node<std::uint64_t>*)scheduled_start_attr)->value;
                      scheduled_start_changed |= new_scheduled_start != old_scheduled_start;
                      changed |= scheduled_start_changed;
                      if(changed){
                       if (name_changed) {
                         rollout_entry->name = std::get<1>(rollout);
                         touch(rollout_entry);
                       }
                       if (scheduled_start_changed) {
                         if(!scheduled_start_attr)
                           a("scheduled_time_unix_time",std::get<3>(rollout),rollout_entry);
                         else{
                           ((monitoring::Attribute_node<std::uint64_t>*)scheduled_start_attr)->value = std::get<3>(rollout);
                           touch(scheduled_start_attr);
                         }
                       }
                       if (ceps_rep_changed){
                        ((monitoring::Attribute_node<std::string>*)ceps_rep)->value =
                          ceps_representation[std::get<0>(rollout)].str();
                       }
                      }
                      break;
                    }
                  }
                }
                time_t unix_time_now = time(nullptr);

                for(auto rollout:active_rollouts){
                    if (all_db_ids_in_reg[std::get<0>(rollout)])
                        continue;
                    all_db_ids_in_reg[std::get<0>(rollout)] = true;
                    auto rollout_entry = e(std::get<1>(rollout), root);
                    a("entity",std::string{"rollout"},rollout_entry);
                    a("origin",std::string{"db_import_"+hostname+"__"+database},rollout_entry);
                    a("db_id",std::get<0>(rollout),rollout_entry);
                    a("scheduled_time_unix_time",std::get<3>(rollout),rollout_entry);

                    if (unix_time_now > std::get<3>(rollout)){
                        //a("dont_execute",true,rollout_entry);
                    }

                    auto ceps_info = e("ceps", rollout_entry);
                    a("entity",std::string{"ceps"},ceps_info);
                    a("ceps",ceps_representation[std::get<0>(rollout)].str(),ceps_info);

                    //Insert Stores
                    std::vector<monitoring::aval*> aval_stores;
                    int id_counter = 0;
                    for(auto const & st : stores[std::get<0>(rollout)]){
                        auto name = std::get<1>(st);
                        auto sap_code = std::get<2>(st);
                        aval_stores.push_back(
                            (new monitoring::aval_obj {})->
                                    add("name",new monitoring::aval_entry<std::string>{name} )->
                                    add("sap_code",new monitoring::aval_entry<std::string>{sap_code})->
                                    add("coverage",new monitoring::aval_entry<double>{0.0})->
                                    add("health",new monitoring::aval_entry<std::string>{""})->
                                    add("id",new monitoring::aval_entry<std::string>{std::to_string(id_counter++)})->
                                    add("current_state",new monitoring::aval_entry<int>{0})->
                                    add("entering_times",new monitoring::aval_list{})->
                                    add("exiting_times",new monitoring::aval_list{})

                        );
                    }

                    a("stores",
                      std::unique_ptr<monitoring::aval>{
                          new monitoring::aval_list{
                              aval_stores
                          }
                      },rollout_entry
                    );

                    //Insert Steps
                    std::vector<monitoring::aval*> aval_steps;
                    std::sort(steps[std::get<0>(rollout)].begin(),
                              steps[std::get<0>(rollout)].end(),
                              []( std::tuple<std::string,int,int,int > const & lhs,
                                  std::tuple<std::string,int,int,int > const & rhs){
                                return  std::get<3>(lhs) < std::get<3>(rhs);
                               }
                    );

                    for(auto const & st : steps[std::get<0>(rollout)]){
                        auto sdetails = step_type_details[std::get<2>(st)];

                        auto pcheck = new monitoring::aval_obj {};
                        for(auto const & e : sdetails.params_check){
                          pcheck->add(e.first,new monitoring::aval_entry<std::string>{e.second});
                        }
                        auto prun = new monitoring::aval_obj {};
                        for(auto const & e : sdetails.params_run){
                          prun->add(e.first,new monitoring::aval_entry<std::string>{e.second});
                        }
                        auto pcheck_warn = new monitoring::aval_obj {};
                        for(auto const & e : sdetails.params_check_warn){
                          pcheck_warn->add(e.first,new monitoring::aval_entry<std::string>{e.second});
                        }
                        auto prun_warn = new monitoring::aval_obj {};
                        for(auto const & e : sdetails.params_run_warn){
                          prun_warn->add(e.first,new monitoring::aval_entry<std::string>{e.second});
                        }
                        auto prun_error = new monitoring::aval_obj {};
                        for(auto const & e : sdetails.params_run_error){
                          prun_error->add(e.first,new monitoring::aval_entry<std::string>{e.second});
                        }


                        aval_steps.push_back(
                            (new monitoring::aval_obj {})->
                               add("description",
                                   new monitoring::aval_entry<std::string>{
                                       sdetails.description
                                   } )->
                               add("job_check",
                                   new monitoring::aval_entry<std::string>{sdetails.job_check} )->
                               add("job_run",
                                   new monitoring::aval_entry<std::string>{sdetails.job_run} )->
                               add("job_check_warn",
                                   new monitoring::aval_entry<std::string>{sdetails.job_check_warn} )->
                               add("job_run_warn",
                                   new monitoring::aval_entry<std::string>{sdetails.job_run_warn} )->
                               add("job_run_error",
                                   new monitoring::aval_entry<std::string>{sdetails.job_run_error} )->
                               add("parameters_check",
                                   pcheck)->
                               add("parameters_run",
                                   prun)->
                               add("parameters_check_warn",
                                   pcheck_warn)->
                               add("parameters_run_warn",
                                   prun_warn)->
                               add("parameters_run_error",
                                   prun_error)
                             );
                    }

                    aval_steps.push_back(
                        (new monitoring::aval_obj {})->
                           add("description",
                               new monitoring::aval_entry<std::string>{
                                   "Done"
                               } )->
                           add("job_check",
                               new monitoring::aval_entry<std::string>{""} )->
                           add("job_run",
                               new monitoring::aval_entry<std::string>{""} )->
                           add("job_check_warn",
                               new monitoring::aval_entry<std::string>{""} )->
                           add("job_run_warn",
                               new monitoring::aval_entry<std::string>{""} )->
                           add("job_run_error",
                               new monitoring::aval_entry<std::string>{""} )->
                           add("parameters_check",
                               new monitoring::aval_obj {})->
                           add("parameters_run",
                               new monitoring::aval_obj {})->
                           add("parameters_check_warn",
                               new monitoring::aval_obj {})->
                           add("parameters_run_warn",
                               new monitoring::aval_obj {})->
                           add("parameters_run_error",
                               new monitoring::aval_obj {})
                         );

                    a("steps",
                      std::unique_ptr<monitoring::aval>{
                          new monitoring::aval_list{
                              aval_steps
                          }
                      },rollout_entry
                    );
                }
                for(auto child:root->children){
                    if (removed(child)) continue;
                    auto entity_attribute = child->get_attr("entity");
                    if (entity_attribute == nullptr) continue;
                    if (entity_attribute->to_string() != "rollout") continue;
                    auto origin_attribute = child->get_attr("origin");
                    if (origin_attribute==nullptr) continue;
                    if (origin_attribute->to_string() != "db_import_"+hostname+"__"+database) continue;
                    auto db_id_attribute = child->get_attr("db_id");
                    auto db_id = ((monitoring::Attribute_node<std::uint64_t>*)db_id_attribute)->value;
                    if(all_db_ids_in_reg[db_id])continue;
                    remove(child);
                }
                auto new_rev = r.first->revision_id;
                //update last_seen map
                for(auto child:root->children){
                  if (removed(child)) continue;
                  auto rev_id = child->revision_id;
                  auto entity_id = child->id;
                  if (ignore_list.find(entity_id)!=ignore_list.end()) continue;
                  last_seen_revision_id[entity_id] = rev_id;
                }
                if (new_rev != current_rev)
                    reg->trigger_observers(rollouts_folder);
                r.second.unlock();
            }
            this_thread::sleep_for(std::chrono::milliseconds{5000});
        }
    }
}
