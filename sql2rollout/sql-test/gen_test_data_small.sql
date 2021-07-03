
use rollout;

delete from rollout_step_type;
insert INTO rollout_step_type (id,description,job_check,job_run) values(0,"step 0","job_check_0","job_run_0");
insert INTO rollout_step_type (id,description,job_check,job_run) values(1,"step 1","job_check_1","job_run_1");
insert INTO rollout_step_type (id,description,job_check,job_run) values(2,"step 2","job_check_2","job_run_2");
insert INTO rollout_step_type (id,description,job_check,job_run) values(3,"step 3","job_check_3","job_run_3");
insert INTO rollout_step_type (id,description,job_check,job_run) values(4,"step 4","job_check_4","job_run_4");
insert INTO rollout_step_type (id,description,job_check,job_run) values(5,"step 5","job_check_5","job_run_5");
insert INTO rollout_step_type (id,description,job_check,job_run) values(6,"step 6","job_check_6","job_run_6");
insert INTO rollout_step_type (id,description,job_check,job_run) values(7,"step 7","job_check_7","job_run_7");
insert INTO rollout_step_type (id,description,job_check,job_run) values(8,"step 8","job_check_8","job_run_8");
insert INTO rollout_step_type (id,description,job_check,job_run) values(9,"step 9","job_check_9","job_run_9");
insert INTO rollout_step_type (id,description,job_check,job_run) values(10,"step 10","job_check_10","job_run_10");

delete from rollout_store;
insert INTO rollout_store (id,rollout,name,sap_code) values(10,100,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(11,100,"workflow B","001");
insert INTO rollout_store (id,rollout,name,sap_code) values(12,100,"workflow C","002");

delete from rollout_step;

insert into rollout_step (id,step_type,rollout,sequence,error,warn) values(1100,0,100,0,"timeout=20;","timeout=10;");
insert into rollout_step (id,step_type,rollout,sequence,error,warn) values(2100,1,100,1,"timeout=20;","timeout=10;");

delete from rollout;

insert INTO rollout (id,name,start) values(100,"rollout-0",DATE_ADD(NOW(),INTERVAL 10 MINUTE));

commit;
