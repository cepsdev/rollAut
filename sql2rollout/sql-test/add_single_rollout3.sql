
use rollout;



insert INTO rollout_store (id,rollout,name,sap_code) values(505,122,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(506,122,"workflow B","001");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(50004,7,122,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(50005,8,122,1,"timeout=40;","timeout=120;");

insert INTO rollout (id,name,start) values(122,"A very new Rollout",
 DATE_ADD(NOW(),INTERVAL 1 HOUR));
commit;
