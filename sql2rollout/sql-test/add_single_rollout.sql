
use rollAut;



insert INTO rollout_store (id,rollout,name,sap_code) values(501,120,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(502,120,"workflow B","001");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(50000,7,120,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(5001,8,120,1,"timeout=40;","timeout=120;");

insert INTO rollout (id,name,start) values(120,"A very new Rollout",
 DATE_ADD(NOW(),INTERVAL 1 HOUR));
commit;
