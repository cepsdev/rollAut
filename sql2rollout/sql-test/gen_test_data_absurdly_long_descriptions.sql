
use rollout;

delete from rollout_step_type;
insert INTO rollout_step_type 
 (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error,params_check, params_run, params_check_warn, params_run_warn, params_run_error) 
 values(0,'		}		else if (cmd.substr(0,3) == "run"){mc->processs_content(result_cmd_line);else if (cmd.substr(0,4) == "step"){smc->set_step_handler(state_machine_sim_core_default_stepping);smc->processs_content(result_cmd_line);else if (cmd.substr(0,8) ',"job_check_0","job_run_0","job_check_warn_0","job_run_warn_0","job_run_error_0",
     'param1_check=s1_p1c;param2_check="s1_p2c";',
     'param1_run=s1_p1r;param2_run="s1_p2r";',
     'param1_check_warn=s1_p1cw;param2_check_warn="s1_p2cw";',
     'param1_run_warn=s1_p1rw;param2_run_warn="s1_p2rw";',
     'param1_run_error=s1_p1re;param2_run_warn="s1_p2re";');

insert INTO rollout_step_type 
 (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error,params_check, params_run, params_check_warn, params_run_warn, params_run_error) 
 values(1,"step 1","job_check_1","job_run_1","job_check_warn_1","job_run_warn_1","job_run_error_1",
     'param1_check=s2_p1c;param2_check="s2_p2c";',
     'param1_run=s2_p1r;param2_run="s2_p2r";',
     'param1_check_warn=s2_p1cw;param2_check_warn="s2_p2cw";',
     'param1_run_warn=s2_p1rw;param2_run_warn="s2_p2rw";',
     'param1_run_error=s2_p1re;param2_run_warn="s2_p2re";');

delete from rollout_store;
insert INTO rollout_store (id,rollout,name,sap_code) values(10,100,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(11,100,"workflow B","001");

delete from rollout_step;

insert into rollout_step (id,step_type,rollout,sequence,warn,error) 
     values(1100,0,100,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2100,1,100,1,"timeout=40;","timeout=120;");
delete from rollout;
insert INTO rollout (id,name,start) values(100,"Test",DATE_ADD(NOW(),INTERVAL 30 MINUTE));

commit;
