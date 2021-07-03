
use rollout;



insert INTO rollout_store (id,rollout,name,sap_code) values(503,121,"workflow A","000");
insert INTO rollout_store (id,rollout,name,sap_code) values(504,121,"workflow B","001");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(50002,7,121,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(5003,8,121,1,"timeout=40;","timeout=120;");

insert INTO rollout (id,name,start) values(121,"A very new Rollout",
 DATE_ADD(NOW(),INTERVAL 1 HOUR));
commit;
