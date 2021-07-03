
use rollout;

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


insert INTO rollout_store (id,rollout,name,sap_code) values(30,110,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(31,110,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(32,111,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(33,111,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(34,112,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(35,112,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(36,113,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(37,113,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(38,114,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(39,114,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(40,115,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(41,115,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(42,116,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(43,116,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(44,117,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(45,117,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(46,118,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(47,118,"workflow B","001");

insert INTO rollout_store (id,rollout,name,sap_code) values(48,119,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(49,119,"workflow B","001");

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




insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(3100,7,110,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(3200,8,110,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(3300,7,111,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(3400,8,111,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(3500,7,112,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(3600,8,112,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(3700,7,113,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(3800,8,113,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(3900,7,114,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(4100,8,114,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(4200,7,115,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(4300,8,115,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(4400,7,116,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(4500,8,116,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(4600,7,117,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(4700,8,117,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(4800,7,118,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(4900,8,118,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(5000,7,119,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(5100,8,119,1,"timeout=40;","timeout=120;");


delete from rollout;

insert INTO rollout (id,name,start) values(100,"AAA rollout-2-steps-critical-in60s JGJg jgjagsjg gdjhadj  sdgjas (A)",
 DATE_ADD(DATE_ADD(NOW(),INTERVAL 1 HOUR),INTERVAL 1 DAY));
insert INTO rollout (id,name,start) values(101,"BBB rollout-2-steps-critical-in60s sdsad jskdhkajs klöuzwier qwv(B)",
 DATE_ADD(DATE_ADD(NOW(),INTERVAL 2 HOUR),INTERVAL 1 DAY));
insert INTO rollout (id,name,start) values(102,"CCC rollout-2-steps-critical-in60s dfila mm,s, khd kll ll  hel jnkjhjkhuijhkhkerjejej  jkk(C)",
 DATE_ADD(DATE_ADD(NOW(),INTERVAL 3 HOUR),INTERVAL 1 DAY));

insert INTO rollout (id,name,start) values(103,"DDD rollout-2-steps-critical-in60s  kewgrjf jkgfqjkfgkwqjef fkjhwgfjwkf gjkwfh(D)",
 DATE_ADD(DATE_ADD(NOW(),INTERVAL 4 HOUR),INTERVAL 1 DAY));
insert INTO rollout (id,name,start) values(104,"EEE rollout-2-steps-critical-in60s (E)",
 DATE_ADD(DATE_ADD(NOW(),INTERVAL 5 HOUR),INTERVAL 1 DAY));
insert INTO rollout (id,name,start) values(105,"FFF rollout-2-steps-critical-in60s (F)",
 DATE_ADD(DATE_ADD(NOW(),INTERVAL 5 HOUR),INTERVAL 1 DAY));
insert INTO rollout (id,name,start) values(106,"GGG rollout-2-steps-critical-in60s (G)",
 DATE_ADD(DATE_ADD(NOW(),INTERVAL 6 HOUR),INTERVAL 1 DAY));
insert INTO rollout (id,name,start) values(107,"HHH rollout-2-steps-critical-in60s  fewkjfgh jwefgjwefg jkwefgjwefg wjkfeh(H)",
 DATE_ADD(DATE_ADD(NOW(),INTERVAL 7 HOUR),INTERVAL 1 DAY));
insert INTO rollout (id,name,start) values(108,"III rollout-2-steps-critical-in60s (I)",
 DATE_ADD(DATE_ADD(NOW(),INTERVAL 8 HOUR),INTERVAL 1 DAY));
insert INTO rollout (id,name,start) values(109,"JJJ rollout-2-steps-critical-in60s (J)",
 DATE_ADD(DATE_ADD(NOW(),INTERVAL 9 HOUR),INTERVAL 1 DAY));


insert INTO rollout (id,name,start) values(110,"KKK rollout-2-steps-critical-in60s (K)",
 DATE_ADD(NOW(),INTERVAL 480 MINUTE));
insert INTO rollout (id,name,start) values(111,"LLL rollout-2-steps-critical-in60s (L)",
 DATE_ADD(NOW(),INTERVAL 3 HOUR));
insert INTO rollout (id,name,start) values(112,"MMM rollout-2-steps-critical-in60s (M)", 
 DATE_ADD(NOW(),INTERVAL 4 HOUR));

insert INTO rollout (id,name,start) values(113,"NNN rollout-2-steps-critical-in60s (N)",
 DATE_ADD(NOW(),INTERVAL 5 HOUR));
insert INTO rollout (id,name,start) values(114,"OOO rollout-2-steps-critical-in60s hkjewhrk lkhrekher khr erkwerhkwerjh (O)",
 DATE_ADD(DATE_ADD(NOW(),INTERVAL 9 HOUR),INTERVAL 2 DAY));
insert INTO rollout (id,name,start) values(115,"PPP rollout-2-steps-critical-in60s (P)",
 DATE_ADD(DATE_ADD(NOW(),INTERVAL 9 HOUR),INTERVAL 3 DAY));
insert INTO rollout (id,name,start) values(116,"QQQ rollout-2-steps-critical-in60s (Q)",
 DATE_ADD(NOW(),INTERVAL -1 DAY));
insert INTO rollout (id,name,start) values(117,"RRR rollout-2-steps-critical-in60s (R)",
 DATE_ADD(NOW(),INTERVAL -1 DAY));
insert INTO rollout (id,name,start) values(118,"SSS rollout-2-steps-critical-in60s (S)",
 DATE_ADD(NOW(),INTERVAL -1 DAY));
insert INTO rollout (id,name,start) values(119,"TTT rollout-2-steps-critical-in60s (T)",
 DATE_ADD(NOW(),INTERVAL -2 DAY));




























commit;
