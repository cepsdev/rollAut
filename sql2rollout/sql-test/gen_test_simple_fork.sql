use rollAut;
delete from rollout_step_type;
delete from rollout_store;
delete from rollout_step;
delete from rollout;
delete from rollout_fork_params;
commit;

insert INTO rollout (name,start) values("Rollout Forks",DATE_ADD(NOW(),INTERVAL 30 MINUTE));

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
     "step 0",
     "job_check_0",
     "job_run_0",
     "job_check_warn_0",
     "job_run_warn_0",
     "job_run_error_0",
     '',
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
    "step 2",
    "job_check_2",
    "job_run_2",
    "job_check_warn_2",
    "job_run_warn_2",
    "job_run_error_2",
     '',
     '',
     '',
     '',
     '');

insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow A","000");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow B","001");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow C","002");
insert INTO rollout_store (rollout,name,sap_code) values( (select MAX(id) from rollout),"workflow D","003");

insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-3 from rollout_step_type),(select MAX(id) from rollout),0,"","");
insert into rollout_step (step_type,rollout,sequence,warn,error,fork) values((select MAX(id)-2 from rollout_step_type),(select MAX(id) from rollout),1,"","",1);
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id)-1 from rollout_step_type),(select MAX(id) from rollout),2,"","");
insert into rollout_step (step_type,rollout,sequence,warn,error) values((select MAX(id) from rollout_step_type),(select MAX(id) from rollout),3,"","");


insert into rollout_fork_params(id,sap_code,parameters) values(1,"000","ip=1.2.3.4;");
insert into rollout_fork_params(id,sap_code,parameters) values(1,"000","ip=1.2.3.5;");
insert into rollout_fork_params(id,sap_code,parameters) values(1,"000","ip=1.2.3.6;");
insert into rollout_fork_params(id,sap_code,parameters) values(1,"000","ip=1.2.3.7;");

insert into rollout_fork_params(id,sap_code,parameters) values(1,"001","ip=8.9.10.11;");
insert into rollout_fork_params(id,sap_code,parameters) values(1,"001","ip=8.9.10.12;");

insert into rollout_fork_params(id,sap_code,parameters) values(1,"002","ip=13.14.15.16;");

insert into rollout_fork_params(id,sap_code,parameters) values(1,"003","ip=17.18.19.20;");
insert into rollout_fork_params(id,sap_code,parameters) values(1,"003","ip=17.18.19.21;");
insert into rollout_fork_params(id,sap_code,parameters) values(1,"003","ip=17.18.19.22;");


commit;