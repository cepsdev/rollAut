
use rollAut;

insert INTO rollout (id,name,start) values(1000,"Charge 10 busses from depot 1.",DATE_ADD(NOW(),INTERVAL 60 MINUTE));


insert INTO rollout_store (id,rollout,name,sap_code) values(100,1000,"EVSE #1","A");
insert INTO rollout_store (id,rollout,name,sap_code) values(101,1000,"EVSE #2","B");
insert INTO rollout_store (id,rollout,name,sap_code) values(102,1000,"EVSE #3","C");
insert INTO rollout_store (id,rollout,name,sap_code) values(103,1000,"EVSE #4","D");
insert INTO rollout_store (id,rollout,name,sap_code) values(104,1000,"EVSE #5","E");
insert INTO rollout_store (id,rollout,name,sap_code) values(105,1000,"EVSE #6","F");
insert INTO rollout_store (id,rollout,name,sap_code) values(106,1000,"EVSE #7","G");
insert INTO rollout_store (id,rollout,name,sap_code) values(107,1000,"EVSE #8","H");
insert INTO rollout_store (id,rollout,name,sap_code) values(108,1000,"EVSE #9","I");
insert INTO rollout_store (id,rollout,name,sap_code) values(109,1000,"EVSE #10","J");


commit;
