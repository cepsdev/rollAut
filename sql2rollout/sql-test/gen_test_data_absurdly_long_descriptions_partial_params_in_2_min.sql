
use rollout;
delete from rollout_step_type;
delete from rollout_store;
delete from rollout_step;
delete from rollout;
commit;

insert INTO rollout (name,start) values("Big Rollout",DATE_ADD(NOW(),INTERVAL 45 MINUTE));

insert INTO rollout_step_type 
 (description,
 job_check,
 job_run,
 job_check_warn,
 job_run_warn,
 job_run_error,
 params_check, 
 params_run, 
 params_check_warn, 
 params_run_warn, 
 params_run_error) 
 values(
     '		}		else if (cmd.substr(0,3) == "run"){mc->processs_content(result_cmd_line);else if (cmd.substr(0,4) == "step"){smc->set_step_handler(state_machine_sim_core_default_stepping);smc->processs_content(result_cmd_line);else if (cmd.substr(0,8) ',
     "job_check_0",
     "job_run_0",
     "job_check_warn_0",
     "job_run_warn_0",
     "job_run_error_0",
     'soft_timeout=20;',
     '',
     '',
     '',
     '');

insert INTO rollout_step_type 
 (description,
 job_check,
 job_run,
 job_check_warn,
 job_run_warn,
 job_run_error,
 params_check,
 params_run,
 params_check_warn,
 params_run_warn,
 params_run_error) 
 values(
    "step 1",
    "job_check_1",
    "job_run_1",
    "job_check_warn_1",
    "job_run_warn_1",
    "job_run_error_1",
     '',
     '',
     '',
     '',
     '');



insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout) ,"workflow A","000");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow B","001");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow C","002");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow D","003");

insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout) ,"workflow E","000");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow F","001");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow G","002");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow H","003");

insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout) ,"workflow I","000");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow J","001");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow K","002");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow L","003");

insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout) ,"workflow M","000");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow N","001");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow O","002");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow P","003");

insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout) ,"workflow Q","000");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow R","001");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow S","002");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow T","003");

insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),0,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),1,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),2,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),3,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),4,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),5,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),6,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),7,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),8,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),9,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),10,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),11,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),12,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),13,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),14,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),15,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),16,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),17,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),18,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),19,"timeout=40;","timeout=120;");

commit;

insert INTO rollout (name,start) values("Massenrollout Y",DATE_ADD(NOW(),INTERVAL 2 MINUTE));

insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout) ,"workflow A","000");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow B","001");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow C","002");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow D","003");

insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout) ,"workflow E","000");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow F","001");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow G","002");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow H","003");

insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout) ,"workflow I","000");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow J","001");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow K","002");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow L","003");

insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout) ,"workflow M","000");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow N","001");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow O","002");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow P","003");

insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout) ,"workflow Q","000");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow R","001");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow S","002");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow T","003");

insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),0,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),1,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),2,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),3,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),4,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),5,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),6,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),7,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),8,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),9,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),10,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),11,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),12,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),13,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),14,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),15,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),16,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),17,"timeout=40;","timeout=120;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),18,"timeout=240;","timeout=480;");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),19,"timeout=40;","timeout=120;");

commit;
