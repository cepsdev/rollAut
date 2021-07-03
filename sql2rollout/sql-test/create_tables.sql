use rollAut;
drop table if exists rollout_store;
drop table if exists rollout;
drop table if exists rollout_step_type;
drop table if exists rollout_step;
drop table if exists rollout_fork_params;
drop table if exists rollout_fork_job_recognition_suffix;

create table rollout (
 id int NOT NULL AUTO_INCREMENT,
 name VARCHAR(255),
 start DATETIME,
 PRIMARY KEY (id)
);
                       
create table rollout_store (
 id int NOT NULL AUTO_INCREMENT,
 rollout INTEGER,
 name VARCHAR(255),
 sap_code VARCHAR(255),
 PRIMARY KEY (id)
);
                            
create table rollout_step_type (
 id int NOT NULL AUTO_INCREMENT,
 description VARCHAR(255),
 job_check VARCHAR(511),
 job_run VARCHAR(511),
 job_check_warn VARCHAR(511),
 job_run_warn VARCHAR(511),
 job_run_error VARCHAR(511), 
 params_check VARCHAR(511), 
 params_run VARCHAR(511),
 params_check_warn VARCHAR(511),
 params_run_warn VARCHAR(511),
 params_run_error VARCHAR(511),
 job_check_ctrl TINYINT DEFAULT 0,
 job_run_ctrl TINYINT DEFAULT 0,
 job_check_warn_ctrl TINYINT DEFAULT 0,
 job_run_warn_ctrl TINYINT DEFAULT 0,
 job_run_error_ctrl TINYINT DEFAULT 0, 

 PRIMARY KEY (id)
);
 
create table rollout_step (
 id int NOT NULL AUTO_INCREMENT,
 step_type INTEGER,
 rollout INTEGER,
 sequence INTEGER,
 warn VARCHAR(2048),
 error VARCHAR(2048),
 fork int default 0,
 PRIMARY KEY (id)
);

create table rollout_fork_params(
 id int,
 sap_code VARCHAR(255),
 parameters VARCHAR(511)
);

create table rollout_fork_job_recognition_suffix(
 id int,
 sap_code VARCHAR(255),
 suffix VARCHAR(255)
);


commit;
