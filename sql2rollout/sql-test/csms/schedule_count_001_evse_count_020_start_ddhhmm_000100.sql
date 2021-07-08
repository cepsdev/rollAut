
use rollAut;

insert INTO rollout (id,name,start) values(1002,"Charge 20 busses from depot 3.",DATE_ADD(NOW(),INTERVAL 60 MINUTE));



insert INTO rollout_store (id,rollout,name,sap_code) values(2100,1002,"EVSE #1","A");
insert INTO rollout_store (id,rollout,name,sap_code) values(2101,1002,"EVSE #2","B");
insert INTO rollout_store (id,rollout,name,sap_code) values(2102,1002,"EVSE #3","C");
insert INTO rollout_store (id,rollout,name,sap_code) values(2103,1002,"EVSE #4","D");
insert INTO rollout_store (id,rollout,name,sap_code) values(2104,1002,"EVSE #5","E");
insert INTO rollout_store (id,rollout,name,sap_code) values(2105,1002,"EVSE #6","F");
insert INTO rollout_store (id,rollout,name,sap_code) values(2106,1002,"EVSE #7","G");
insert INTO rollout_store (id,rollout,name,sap_code) values(2107,1002,"EVSE #8","H");
insert INTO rollout_store (id,rollout,name,sap_code) values(2108,1002,"EVSE #9","I");
insert INTO rollout_store (id,rollout,name,sap_code) values(2109,1002,"EVSE #10","J");


insert INTO rollout_store (id,rollout,name,sap_code) values(2110,1002,"EVSE #11","A");
insert INTO rollout_store (id,rollout,name,sap_code) values(2111,1002,"EVSE #12","B");
insert INTO rollout_store (id,rollout,name,sap_code) values(2112,1002,"EVSE #13","C");
insert INTO rollout_store (id,rollout,name,sap_code) values(2113,1002,"EVSE #14","D");
insert INTO rollout_store (id,rollout,name,sap_code) values(2114,1002,"EVSE #15","E");
insert INTO rollout_store (id,rollout,name,sap_code) values(2115,1002,"EVSE #16","F");
insert INTO rollout_store (id,rollout,name,sap_code) values(2116,1002,"EVSE #17","G");
insert INTO rollout_store (id,rollout,name,sap_code) values(2117,1002,"EVSE #18","H");
insert INTO rollout_store (id,rollout,name,sap_code) values(2118,1002,"EVSE #19","I");
insert INTO rollout_store (id,rollout,name,sap_code) values(2119,1002,"EVSE #20","J");


insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(210001,0,1002,0,"timeout=4000;","timeout=12000;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(210002,1,1002,1,"timeout=4000;","timeout=12000;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(210003,2,1002,2,"timeout=4000;","timeout=12000;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(210004,3,1002,3,"timeout=4000;","timeout=12000;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(210005,4,1002,4,"timeout=4000;","timeout=12000;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(210006,5,1002,5,"timeout=4000;","timeout=12000;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(210007,6,1002,6,"timeout=4000;","timeout=12000;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(210008,7,1002,7,"timeout=4000;","timeout=12000;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(210009,8,1002,8,"timeout=4000;","timeout=12000;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(210010,9,1002,9,"timeout=4000;","timeout=12000;");



commit;
