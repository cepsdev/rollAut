
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
 values(3,
 "legt eine leere Protokolldatei auf Jenkins an",
 "pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","",
 "pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","","",
 "","","","","");

insert INTO rollout_step_type
(id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error,
 params_check,params_run,params_check_warn,params_run_warn,params_run_error)
 values(4,
       "prüft , ob eine Instanz in Jenkins zu dem Markt aufbaubar ist",
       "pos_rollout_automated_020_auto_check_store_connect","","","","",
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

insert INTO rollout_store (id,rollout,name,sap_code) values(16,103,"workflow C","002");
insert INTO rollout_store (id,rollout,name,sap_code) values(17,103,"workflow D","003");
insert INTO rollout_store (id,rollout,name,sap_code) values(18,103,"workflow E","004");
insert INTO rollout_store (id,rollout,name,sap_code) values(19,103,"workflow F","005");
insert INTO rollout_store (id,rollout,name,sap_code) values(20,103,"workflow G","006");
insert INTO rollout_store (id,rollout,name,sap_code) values(21,103,"workflow H","007");
insert INTO rollout_store (id,rollout,name,sap_code) values(22,103,"workflow I","008");
insert INTO rollout_store (id,rollout,name,sap_code) values(23,103,"workflow J","009");
insert INTO rollout_store (id,rollout,name,sap_code) values(24,103,"workflow K","010");
insert INTO rollout_store (id,rollout,name,sap_code) values(25,103,"workflow L","011");
insert INTO rollout_store (id,rollout,name,sap_code) values(26,103,"workflow M","012");
insert INTO rollout_store (id,rollout,name,sap_code) values(27,103,"workflow N","013");
insert INTO rollout_store (id,rollout,name,sap_code) values(28,103,"workflow O","014");
insert INTO rollout_store (id,rollout,name,sap_code) values(29,103,"workflow P","015");
insert INTO rollout_store (id,rollout,name,sap_code) values(30,103,"workflow Q","016");
insert INTO rollout_store (id,rollout,name,sap_code) values(31,103,"workflow R","017");
insert INTO rollout_store (id,rollout,name,sap_code) values(32,103,"workflow S","018");
insert INTO rollout_store (id,rollout,name,sap_code) values(33,103,"workflow T","019");
insert INTO rollout_store (id,rollout,name,sap_code) values(34,103,"workflow U","020");
insert INTO rollout_store (id,rollout,name,sap_code) values(35,103,"workflow V","021");
insert INTO rollout_store (id,rollout,name,sap_code) values(36,103,"workflow W","022");
insert INTO rollout_store (id,rollout,name,sap_code) values(37,103,"workflow X","023");
insert INTO rollout_store (id,rollout,name,sap_code) values(38,103,"workflow Y","024");
insert INTO rollout_store (id,rollout,name,sap_code) values(39,103,"workflow Z","025");



insert INTO rollout_store (id,rollout,name,sap_code) values(40,103,"workflow Z00002","026");
insert INTO rollout_store (id,rollout,name,sap_code) values(41,103,"workflow R00002","027");
insert INTO rollout_store (id,rollout,name,sap_code) values(42,103,"workflow S00002","028");
insert INTO rollout_store (id,rollout,name,sap_code) values(43,103,"workflow T00002","029");
insert INTO rollout_store (id,rollout,name,sap_code) values(44,103,"workflow U00002","030");
insert INTO rollout_store (id,rollout,name,sap_code) values(45,103,"workflow V00002","031");
insert INTO rollout_store (id,rollout,name,sap_code) values(46,103,"workflow W00002","032");
insert INTO rollout_store (id,rollout,name,sap_code) values(47,103,"workflow X00002","033");
insert INTO rollout_store (id,rollout,name,sap_code) values(48,103,"workflow Y00002","034");
insert INTO rollout_store (id,rollout,name,sap_code) values(49,103,"workflow Z00003","035");


delete from rollout_step;

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1100,1,100,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2100,2,100,1,"timeout=40;","timeout=120;");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1200,3,101,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2200,4,101,1,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1201,3,101,2,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2201,4,101,3,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1202,3,101,4,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2202,4,101,5,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1203,3,101,6,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2204,4,101,7,"timeout=40;","timeout=120;");


insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(3200,3,103,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(4200,4,103,1,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(5201,3,103,2,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(6201,4,103,3,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(7202,3,103,4,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(8202,4,103,5,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(9203,3,103,6,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(10204,4,103,7,"timeout=40;","timeout=120;");


insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1300,5,102,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2300,6,102,1,"timeout=40;","timeout=120;");

delete from rollout;
insert INTO rollout (id,name,start) values(100,"rollout-2-steps-critical-in60s (A) this is a moderately long title which blabla gaga and so on",DATE_ADD(NOW(),INTERVAL 480 MINUTE));
insert INTO rollout (id,name,start) values(101,"rollout-2-steps-critical-in60s (B)",DATE_ADD(NOW(),INTERVAL 360 SECOND));
insert INTO rollout (id,name,start) values(103,"rollout-2-steps-critical-in60s (C)",DATE_ADD(NOW(),INTERVAL 30 SECOND));
insert INTO rollout (id,name,start) values(102,"rollout-2-steps-critical-in60s (D)",DATE_ADD(NOW(),INTERVAL 482 MINUTE));

commit;
