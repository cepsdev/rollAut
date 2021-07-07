use rollAut;




insert INTO rollout (id,name,start) values(1001,"Charge 50 busses from depot 2.",DATE_ADD(NOW(),INTERVAL 60 MINUTE));

insert INTO rollout_store (id,rollout,name,sap_code) values(110,1001,"EVSE #1","A");
insert INTO rollout_store (id,rollout,name,sap_code) values(111,1001,"EVSE #2","B");
insert INTO rollout_store (id,rollout,name,sap_code) values(112,1001,"EVSE #3","C");
insert INTO rollout_store (id,rollout,name,sap_code) values(113,1001,"EVSE #4","D");
insert INTO rollout_store (id,rollout,name,sap_code) values(114,1001,"EVSE #5","E");
insert INTO rollout_store (id,rollout,name,sap_code) values(115,1001,"EVSE #6","F");
insert INTO rollout_store (id,rollout,name,sap_code) values(116,1001,"EVSE #7","G");
insert INTO rollout_store (id,rollout,name,sap_code) values(117,1001,"EVSE #8","H");
insert INTO rollout_store (id,rollout,name,sap_code) values(118,1001,"EVSE #9","I");
insert INTO rollout_store (id,rollout,name,sap_code) values(119,1001,"EVSE #10","J");
insert INTO rollout_store (id,rollout,name,sap_code) values(120,1001,"EVSE #11","K");
insert INTO rollout_store (id,rollout,name,sap_code) values(121,1001,"EVSE #12","L");
insert INTO rollout_store (id,rollout,name,sap_code) values(122,1001,"EVSE #13","M");
insert INTO rollout_store (id,rollout,name,sap_code) values(123,1001,"EVSE #14","N");
insert INTO rollout_store (id,rollout,name,sap_code) values(124,1001,"EVSE #15","O");
insert INTO rollout_store (id,rollout,name,sap_code) values(125,1001,"EVSE #16","P");
insert INTO rollout_store (id,rollout,name,sap_code) values(126,1001,"EVSE #17","Q");
insert INTO rollout_store (id,rollout,name,sap_code) values(127,1001,"EVSE #18","R");
insert INTO rollout_store (id,rollout,name,sap_code) values(128,1001,"EVSE #19","S");
insert INTO rollout_store (id,rollout,name,sap_code) values(129,1001,"EVSE #20","T");
insert INTO rollout_store (id,rollout,name,sap_code) values(130,1001,"EVSE #21","U");
insert INTO rollout_store (id,rollout,name,sap_code) values(131,1001,"EVSE #22","V");
insert INTO rollout_store (id,rollout,name,sap_code) values(132,1001,"EVSE #23","W");
insert INTO rollout_store (id,rollout,name,sap_code) values(133,1001,"EVSE #24","X");
insert INTO rollout_store (id,rollout,name,sap_code) values(134,1001,"EVSE #25","Y");
insert INTO rollout_store (id,rollout,name,sap_code) values(135,1001,"EVSE #26","Z");
insert INTO rollout_store (id,rollout,name,sap_code) values(136,1001,"EVSE #27","AA");
insert INTO rollout_store (id,rollout,name,sap_code) values(137,1001,"EVSE #28","AB");
insert INTO rollout_store (id,rollout,name,sap_code) values(138,1001,"EVSE #29","AC");
insert INTO rollout_store (id,rollout,name,sap_code) values(139,1001,"EVSE #30","AD");
insert INTO rollout_store (id,rollout,name,sap_code) values(140,1001,"EVSE #31","AE");
insert INTO rollout_store (id,rollout,name,sap_code) values(141,1001,"EVSE #32","AF");
insert INTO rollout_store (id,rollout,name,sap_code) values(142,1001,"EVSE #33","AG");
insert INTO rollout_store (id,rollout,name,sap_code) values(143,1001,"EVSE #34","AH");
insert INTO rollout_store (id,rollout,name,sap_code) values(144,1001,"EVSE #35","AI");
insert INTO rollout_store (id,rollout,name,sap_code) values(145,1001,"EVSE #36","AJ");
insert INTO rollout_store (id,rollout,name,sap_code) values(146,1001,"EVSE #37","AK");
insert INTO rollout_store (id,rollout,name,sap_code) values(147,1001,"EVSE #38","AL");
insert INTO rollout_store (id,rollout,name,sap_code) values(148,1001,"EVSE #39","AM");
insert INTO rollout_store (id,rollout,name,sap_code) values(149,1001,"EVSE #40","AN");
insert INTO rollout_store (id,rollout,name,sap_code) values(150,1001,"EVSE #41","AO");
insert INTO rollout_store (id,rollout,name,sap_code) values(151,1001,"EVSE #42","AP");
insert INTO rollout_store (id,rollout,name,sap_code) values(152,1001,"EVSE #43","AQ");
insert INTO rollout_store (id,rollout,name,sap_code) values(153,1001,"EVSE #44","AR");
insert INTO rollout_store (id,rollout,name,sap_code) values(154,1001,"EVSE #45","AS");
insert INTO rollout_store (id,rollout,name,sap_code) values(155,1001,"EVSE #46","AT");
insert INTO rollout_store (id,rollout,name,sap_code) values(156,1001,"EVSE #47","AU");
insert INTO rollout_store (id,rollout,name,sap_code) values(157,1001,"EVSE #48","AV");
insert INTO rollout_store (id,rollout,name,sap_code) values(158,1001,"EVSE #49","AW");
insert INTO rollout_store (id,rollout,name,sap_code) values(159,1001,"EVSE #50","AX");

insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(10101,0,1001,0,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(10102,1,1001,1,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(10103,2,1001,2,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(10104,3,1001,3,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(10105,4,1001,4,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(10106,5,1001,5,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(10107,6,1001,6,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(10108,7,1001,7,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(10109,8,1001,8,"timeout=40;","timeout=120;");
insert into rollout_step (id,step_type,rollout,sequence,warn,error) values(10110,9,1001,9,"timeout=40;","timeout=120;");


commit;
