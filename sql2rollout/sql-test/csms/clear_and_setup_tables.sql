use rollAut;

delete from rollout_step_type;
delete from rollout_store;
delete from rollout_step;
delete from rollout;

commit;



insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(0,"Protocol Negotiation","job_check_0","job_run_0","job_check_warn_0","job_run_warn_0","job_run_error_0");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(1,"Session Setup","job_check_1","job_run_1","job_check_warn_1","job_run_warn_1","job_run_error_1");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(2,"Service Discovery","job_check_2","job_run_2","job_check_warn_2","job_run_warn_2","job_run_error_2");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(3,"Payment Details","job_check_3","job_run_3","job_check_warn_3","job_run_warn_3","job_run_error_3");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(4,"Authorization","job_check_4","job_run_4","job_check_warn_4","job_run_warn_4","job_run_error_4");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(5,"Charge Parameter Discovery","job_check_5","job_run_5","job_check_warn_5","job_run_warn_5","job_run_error_5");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(6,"Cable Check","job_check_6","job_run_6","job_check_warn_6","job_run_warn_6","job_run_error_6");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(7,"Pre Charge","job_check_7","job_run_7","job_check_warn_7","job_run_warn_7","job_run_error_7");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(8,"Power Delivery","job_check_7","job_run_7","job_check_warn_7","job_run_warn_7","job_run_error_7");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(9,"Receipt","job_check_8","job_run_8","job_check_warn_8","job_run_warn_8","job_run_error_8");
insert INTO rollout_step_type (id,description,job_check,job_run,job_check_warn,job_run_warn,job_run_error) values(10,"Session Stop","job_check_9","job_run_9","job_check_warn_9","job_run_warn_9","job_run_error_9");

commit;