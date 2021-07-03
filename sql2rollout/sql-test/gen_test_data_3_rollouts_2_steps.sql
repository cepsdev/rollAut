
use rollAut;

delete from rollout_step_type;
insert INTO rollout_step_type
 (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error,
  params_check,params_run,params_check_warn,params_run_warn,params_run_error)
 values(1,"step 1","job_check_1","job_run_1","job_check_warn_1","job_run_warn_1","job_run_error_1",
  "pc1=1;pc2=gaga","pr1=abc;pr2=def;pr3=ghijkl","pcw1=123;","prw1=456;","pre1=things aren't going well;");

insert INTO rollout_step_type
(id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error,
 params_check,params_run,params_check_warn,params_run_warn,params_run_error)
 values(2,"step 2","job_check_2","job_run_2","job_check_warn_2","job_run_warn_2","job_run_error_2",
 "","","","","");

insert INTO rollout_step_type
(id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error,
 params_check,params_run,params_check_warn,params_run_warn,params_run_error)
 values(3,"step 3","job_check_3","job_run_3","job_check_warn_3","job_run_warn_3","job_run_error_3",
 "","","","","");

insert INTO rollout_step_type
(id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error,
 params_check,params_run,params_check_warn,params_run_warn,params_run_error)
 values(4,"step 4","job_check_4","job_run_4","job_check_warn_4","job_run_warn_4","job_run_error_4",
 "","","","","");

insert INTO rollout_step_type
(id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error,
 params_check,params_run,params_check_warn,params_run_warn,params_run_error)
 values(5,"step 5","job_check_5","job_run_5","job_check_warn_5","job_run_warn_5","job_run_error_5",
 "","","","","");

insert INTO rollout_step_type
(id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error,
 params_check,params_run,params_check_warn,params_run_warn,params_run_error)
 values(6,"step 6","job_check_6","job_run_6","job_check_warn_6","job_run_warn_6","job_run_error_6",
 "","","","","");

insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(7,"step 7","job_check_7","job_run_7","job_check_warn_7","job_run_warn_7","job_run_error_7");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(8,"step 8","job_check_8","job_run_8","job_check_warn_8","job_run_warn_8","job_run_error_8");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(9,"step 9","job_check_9","job_run_9","job_check_warn_9","job_run_warn_9","job_run_error_9");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(10,"step 10","job_check_10","job_run_10","job_check_warn_10","job_run_warn_10","job_run_error_10");

delete from rollout_store;
insert INTO rollout_store (id,rollout,name,sap_code) values(10,100,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(11,100,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(12,101,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(13,101,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(14,102,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(15,102,"workflow B","001");

delete from rollout_step;

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1100,1,100,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2100,2,100,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1200,3,101,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2200,4,101,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1300,5,102,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2300,6,102,1,"timeout=40;","timeout=120;");

delete from rollout;
insert INTO rollout (id,name,start) values(100,"rollout-2-steps-critical-in60s (A) this is a moderately long title which blabla gaga and so on",DATE_ADD(NOW(),INTERVAL 480 MINUTE));
insert INTO rollout (id,name,start) values(101,"rollout-2-steps-critical-in60s (B)",DATE_ADD(NOW(),INTERVAL 120 SECOND));
insert INTO rollout (id,name,start) values(102,"rollout-2-steps-critical-in60s (C)",DATE_ADD(NOW(),INTERVAL 482 MINUTE));

commit;
