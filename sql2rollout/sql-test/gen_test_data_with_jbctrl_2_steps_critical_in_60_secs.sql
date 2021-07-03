
use rollAut;

delete from rollout_step_type;
delete from rollout_store;
delete from rollout_step;
delete from rollout;


insert INTO rollout_step_type (description,job_check,job_run,job_check_warn,job_run_warn,job_run_error,
 params_check, 
 params_run,
 params_check_warn,
 params_run_warn,
 params_run_error,
 job_check_ctrl,job_run_ctrl) 
 values("step 0","job_check_0","job_run_0","job_check_warn_0","job_run_warn_0","job_run_error_0","duration=${60+1};","","","","",5,5);
insert INTO rollout_step_type (description,job_check,job_run,job_check_warn,job_run_warn,job_run_error,params_check, 
 params_run,
 params_check_warn,
 params_run_warn,
 params_run_error,
 job_check_ctrl,job_run_ctrl) 
 values("step 1","job_check_1","job_run_1","job_check_warn_1","job_run_warn_1","job_run_error_1","","","","","",5,5);

insert INTO rollout_step_type (description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values("step 2","job_check_2","job_run_2","job_check_warn_2","job_run_warn_2","job_run_error_2");
insert INTO rollout_step_type (description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values("step 3","job_check_3","job_run_3","job_check_warn_3","job_run_warn_3","job_run_error_3");
insert INTO rollout_step_type (description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values("step 4","job_check_4","job_run_4","job_check_warn_4","job_run_warn_4","job_run_error_4");
insert INTO rollout_step_type (description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values("step 5","job_check_5","job_run_5","job_check_warn_5","job_run_warn_5","job_run_error_5");
insert INTO rollout_step_type (description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values("step 6","job_check_6","job_run_6","job_check_warn_6","job_run_warn_6","job_run_error_6");
insert INTO rollout_step_type (description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values("step 7","job_check_7","job_run_7","job_check_warn_7","job_run_warn_7","job_run_error_7");
insert INTO rollout_step_type (description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values("step 8","job_check_8","job_run_8","job_check_warn_8","job_run_warn_8","job_run_error_8");
insert INTO rollout_step_type (description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values("step 9","job_check_9","job_run_9","job_check_warn_9","job_run_warn_9","job_run_error_9");
insert INTO rollout_step_type (description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values("step 10","job_check_10","job_run_10","job_check_warn_10","job_run_warn_10","job_run_error_10");

insert INTO rollout_store (id,rollout,name,sap_code) values(10,100,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(11,100,"workflow B","001");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1100,(select min(id) from rollout_step_type),100,0,"xtimeout=40;","xtimeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2100,(select min(id)+1 from rollout_step_type),100,1,"xtimeout=40;","xtimeout=120;");

insert INTO rollout (id,name,start) values(100,"rollout-2-steps-critical-in60s",DATE_ADD(NOW(),INTERVAL 1 MINUTE));

commit;
