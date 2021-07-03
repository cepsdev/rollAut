
use rollAut;

delete from rollout_step_type;
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(0,"step 0","job_check_0","job_run_0","job_check_warn_0","job_run_warn_0","job_run_error_0");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(1,"step 1","job_check_1","job_run_1","job_check_warn_1","job_run_warn_1","job_run_error_1");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(2,"step 2","job_check_2","job_run_2","job_check_warn_2","job_run_warn_2","job_run_error_2");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(3,"step 3","job_check_3","job_run_3","job_check_warn_3","job_run_warn_3","job_run_error_3");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(4,"step 4","job_check_4","job_run_4","job_check_warn_4","job_run_warn_4","job_run_error_4");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(5,"step 5","job_check_5","job_run_5","job_check_warn_5","job_run_warn_5","job_run_error_5");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(6,"step 6","job_check_6","job_run_6","job_check_warn_6","job_run_warn_6","job_run_error_6");
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

insert INTO rollout_store (id,rollout,name,sap_code) values(16,103,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(17,103,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(18,104,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(19,104,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(20,105,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(21,105,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(22,106,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(23,106,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(24,107,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(25,107,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(26,108,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(27,108,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(28,109,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(29,109,"workflow B","001");


delete from rollout_step;

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1100,1,100,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2100,2,100,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1200,3,101,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2200,4,101,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1300,5,102,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2300,6,102,1,"timeout=40;","timeout=120;");


insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1400,7,103,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2400,8,103,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1500,9,104,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2500,10,104,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1600,1,105,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2600,2,105,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1700,3,106,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2700,4,106,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1800,5,107,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2800,6,107,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1900,7,108,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2900,8,108,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2000,9,109,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(3000,10,109,1,"timeout=40;","timeout=120;");


delete from rollout;
insert INTO rollout (id,name,start) values(100,"rollout-2-steps-critical-in60s gdsjh jdgjgsdjadasdd ddad ddas (A)",DATE_ADD(NOW(),INTERVAL 480 MINUTE));
insert INTO rollout (id,name,start) values(101,"rollout-2-steps-critical-in60s  sdhjksadh  sadhkj hdhdhjj hhdd (B)",DATE_ADD(NOW(),INTERVAL 120 SECOND));
insert INTO rollout (id,name,start) values(102,"rollout-2-steps-critical-in60s GGGhh hhjhgasdjgz ztdsuz dgjgdjaa. hdkhkdsajhk (C)",DATE_ADD(NOW(),INTERVAL 482 MINUTE));

insert INTO rollout (id,name,start) values(103,"rollout-2-steps-critical-in60s hdjsdhjd hsdjhasj hhhh d   (D)",DATE_ADD(NOW(),INTERVAL 480 MINUTE));
insert INTO rollout (id,name,start) values(104,"rollout-2-steps-critical-in60s (E)",DATE_ADD(NOW(),INTERVAL 120 SECOND));
insert INTO rollout (id,name,start) values(105,"rollout-2-steps-critical-in60s (F)",DATE_ADD(NOW(),INTERVAL 482 MINUTE));
insert INTO rollout (id,name,start) values(106,"rollout-2-steps-critical-in60s (G)",DATE_ADD(NOW(),INTERVAL 480 MINUTE));
insert INTO rollout (id,name,start) values(107,"rollout-2-steps-critical-in60s (H)",DATE_ADD(NOW(),INTERVAL 120 SECOND));
insert INTO rollout (id,name,start) values(108,"rollout-2-steps-critical-in60s sdhakjsdh addkjashdkajs, ahsdkjhakjds. (I)",DATE_ADD(NOW(),INTERVAL 482 MINUTE));
insert INTO rollout (id,name,start) values(109,"rollout-2-steps-critical-in60s (J)",DATE_ADD(NOW(),INTERVAL 480 MINUTE));

commit;
