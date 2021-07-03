
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
insert INTO rollout_store (id,rollout,name,sap_code) values(12,100,"workflow C","002");
insert INTO rollout_store (id,rollout,name,sap_code) values(13,100,"workflow D","003");
insert INTO rollout_store (id,rollout,name,sap_code) values(14,100,"workflow E","004");
insert INTO rollout_store (id,rollout,name,sap_code) values(15,100,"workflow F","005");
insert INTO rollout_store (id,rollout,name,sap_code) values(16,100,"workflow G","006");
insert INTO rollout_store (id,rollout,name,sap_code) values(17,100,"workflow H","007");
insert INTO rollout_store (id,rollout,name,sap_code) values(18,100,"workflow I","008");
insert INTO rollout_store (id,rollout,name,sap_code) values(19,100,"workflow J","009");
insert INTO rollout_store (id,rollout,name,sap_code) values(20,100,"workflow K","010");
insert INTO rollout_store (id,rollout,name,sap_code) values(21,100,"workflow L","011");
insert INTO rollout_store (id,rollout,name,sap_code) values(22,100,"workflow M","012");
insert INTO rollout_store (id,rollout,name,sap_code) values(23,100,"workflow N","013");
insert INTO rollout_store (id,rollout,name,sap_code) values(24,100,"workflow O","014");
insert INTO rollout_store (id,rollout,name,sap_code) values(25,100,"workflow P","015");
insert INTO rollout_store (id,rollout,name,sap_code) values(26,100,"workflow Q","016");
insert INTO rollout_store (id,rollout,name,sap_code) values(27,100,"workflow R","017");
insert INTO rollout_store (id,rollout,name,sap_code) values(28,100,"workflow S","018");
insert INTO rollout_store (id,rollout,name,sap_code) values(29,100,"workflow T","019");
insert INTO rollout_store (id,rollout,name,sap_code) values(30,100,"workflow U","020");
insert INTO rollout_store (id,rollout,name,sap_code) values(31,100,"workflow V","021");
insert INTO rollout_store (id,rollout,name,sap_code) values(32,100,"workflow W","022");
insert INTO rollout_store (id,rollout,name,sap_code) values(33,100,"workflow X","023");

insert INTO rollout_store (id,rollout,name,sap_code) values(10,101,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(11,101,"workflow B","001");
insert INTO rollout_store (id,rollout,name,sap_code) values(12,101,"workflow C","002");
insert INTO rollout_store (id,rollout,name,sap_code) values(13,101,"workflow D","003");
insert INTO rollout_store (id,rollout,name,sap_code) values(14,101,"workflow E","004");
insert INTO rollout_store (id,rollout,name,sap_code) values(15,101,"workflow F","005");
insert INTO rollout_store (id,rollout,name,sap_code) values(16,101,"workflow G","006");
insert INTO rollout_store (id,rollout,name,sap_code) values(17,101,"workflow H","007");
insert INTO rollout_store (id,rollout,name,sap_code) values(18,101,"workflow I","008");
insert INTO rollout_store (id,rollout,name,sap_code) values(19,101,"workflow J","009");
insert INTO rollout_store (id,rollout,name,sap_code) values(20,101,"workflow K","010");
insert INTO rollout_store (id,rollout,name,sap_code) values(21,101,"workflow L","011");
insert INTO rollout_store (id,rollout,name,sap_code) values(22,101,"workflow M","012");
insert INTO rollout_store (id,rollout,name,sap_code) values(23,101,"workflow N","013");
insert INTO rollout_store (id,rollout,name,sap_code) values(24,101,"workflow O","014");
insert INTO rollout_store (id,rollout,name,sap_code) values(25,101,"workflow P","015");
insert INTO rollout_store (id,rollout,name,sap_code) values(26,101,"workflow Q","016");
insert INTO rollout_store (id,rollout,name,sap_code) values(27,101,"workflow R","017");
insert INTO rollout_store (id,rollout,name,sap_code) values(28,101,"workflow S","018");
insert INTO rollout_store (id,rollout,name,sap_code) values(29,101,"workflow T","019");
insert INTO rollout_store (id,rollout,name,sap_code) values(30,101,"workflow U","020");
insert INTO rollout_store (id,rollout,name,sap_code) values(31,101,"workflow V","021");
insert INTO rollout_store (id,rollout,name,sap_code) values(32,101,"workflow W","022");
insert INTO rollout_store (id,rollout,name,sap_code) values(33,101,"workflow X","023");

insert INTO rollout_store (id,rollout,name,sap_code) values(22,102,"workflow M","012");
insert INTO rollout_store (id,rollout,name,sap_code) values(23,123,"workflow N","013");
insert INTO rollout_store (id,rollout,name,sap_code) values(24,102,"workflow O","014");
insert INTO rollout_store (id,rollout,name,sap_code) values(25,102,"workflow P","015");
insert INTO rollout_store (id,rollout,name,sap_code) values(26,102,"workflow Q","016");
insert INTO rollout_store (id,rollout,name,sap_code) values(27,102,"workflow R","017");
insert INTO rollout_store (id,rollout,name,sap_code) values(28,102,"workflow S","018");
insert INTO rollout_store (id,rollout,name,sap_code) values(29,102,"workflow T","019");
insert INTO rollout_store (id,rollout,name,sap_code) values(30,102,"workflow U","020");
insert INTO rollout_store (id,rollout,name,sap_code) values(31,102,"workflow V","021");
insert INTO rollout_store (id,rollout,name,sap_code) values(32,102,"workflow W","022");
insert INTO rollout_store (id,rollout,name,sap_code) values(33,102,"workflow X","023");

insert INTO rollout_store (id,rollout,name,sap_code) values(10,103,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(11,103,"workflow B","001");
insert INTO rollout_store (id,rollout,name,sap_code) values(12,103,"workflow C","002");
insert INTO rollout_store (id,rollout,name,sap_code) values(13,103,"workflow D","003");
insert INTO rollout_store (id,rollout,name,sap_code) values(14,103,"workflow E","004");
insert INTO rollout_store (id,rollout,name,sap_code) values(15,103,"workflow F","005");
insert INTO rollout_store (id,rollout,name,sap_code) values(16,103,"workflow G","006");
insert INTO rollout_store (id,rollout,name,sap_code) values(17,103,"workflow H","007");
insert INTO rollout_store (id,rollout,name,sap_code) values(18,103,"workflow I","008");
insert INTO rollout_store (id,rollout,name,sap_code) values(19,103,"workflow J","009");
insert INTO rollout_store (id,rollout,name,sap_code) values(20,103,"workflow K","010");
insert INTO rollout_store (id,rollout,name,sap_code) values(21,103,"workflow L","011");



insert INTO rollout_store (id,rollout,name,sap_code) values(12,104,"workflow C","002");
insert INTO rollout_store (id,rollout,name,sap_code) values(13,104,"workflow D","003");
insert INTO rollout_store (id,rollout,name,sap_code) values(14,104,"workflow E","004");
insert INTO rollout_store (id,rollout,name,sap_code) values(15,104,"workflow F","005");
insert INTO rollout_store (id,rollout,name,sap_code) values(16,104,"workflow G","006");
insert INTO rollout_store (id,rollout,name,sap_code) values(17,104,"workflow H","007");
insert INTO rollout_store (id,rollout,name,sap_code) values(18,104,"workflow I","008");


insert INTO rollout_store (id,rollout,name,sap_code) values(26,105,"workflow Q","016");
insert INTO rollout_store (id,rollout,name,sap_code) values(27,105,"workflow R","017");
insert INTO rollout_store (id,rollout,name,sap_code) values(28,105,"workflow S","018");
insert INTO rollout_store (id,rollout,name,sap_code) values(29,105,"workflow T","019");
insert INTO rollout_store (id,rollout,name,sap_code) values(30,105,"workflow U","020");

delete from rollout_step;

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1100,0,100,0,"tries=2;","tries=6;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2100,1,100,1,"","");


insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1101,0,101,10,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2101,1,101,9,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(3101,2,101,8,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(4101,3,101,7,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(5101,4,101,6,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(6101,5,101,5,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(7101,6,101,4,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(8101,7,101,3,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(9101,8,101,2,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(10101,9,101,1,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(11101,10,101,0,"","");


insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1103,0,103,0,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2103,1,103,1,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(3103,2,103,2,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(4103,3,103,3,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(5103,4,103,4,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(6103,5,103,5,"","");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1104,0,104,0,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(2104,10,104,1,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(3104,1,104,2,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(4104,9,104,3,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(5104,2,104,4,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(6104,8,104,5,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(7104,3,104,6,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(8104,7,104,7,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(9104,4,104,8,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(10104,5,104,9,"","");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(11104,6,104,10,"","");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(1105,6,105,0,"","");


delete from rollout;
insert INTO rollout (id,name,start) values(100,"Rollout-0",DATE_ADD(NOW(),INTERVAL 1 MINUTE));
insert INTO rollout (id,name,start) values(101,"rollout-1",DATE_ADD(NOW(),INTERVAL 2 HOUR));
insert INTO rollout (id,name,start) values(102,"rollout-2",DATE_ADD(NOW(),INTERVAL 3 HOUR));
insert INTO rollout (id,name,start) values(103,"rollout-3",DATE_ADD(NOW(),INTERVAL 1 HOUR));
insert INTO rollout (id,name,start) values(104,"rollout-4",DATE_ADD(NOW(),INTERVAL 5 HOUR));
insert INTO rollout (id,name,start) values(105,"rollout-5",DATE_ADD(NOW(),INTERVAL 6 HOUR));

commit;
