
use rollout;
delete from rollout_step_type;
delete from rollout_step;
delete from rollout;
delete from rollout_store;



INSERT INTO rollout.rollout
(id, name, `start`)
VALUES(1, 'DemoPackage (Camelride)  for sap=m%', STR_TO_DATE('2019-03-21  22:48:00','%Y-%m-%d %H:%i:%s'));

INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(1, 1, 1, 1, 'tries=1;', 'tries=1;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(2, 2, 1, 2, 'tries=2;', 'tries=50;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(3, 3, 1, 3, 'tries=2;', 'tries=50;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(4, 4, 1, 4, 'tries=2;', 'tries=50;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(5, 5, 1, 5, 'tries=2;', 'tries=50;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(6, 6, 1, 6, 'tries=2;', 'tries=50;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(7, 7, 1, 7, 'tries=2;', 'tries=50;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(8, 8, 1, 8, 'tries=2;', 'tries=50;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(9, 9, 1, 9, 'tries=2;', 'tries=50;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(10, 10, 1, 10, 'tries=2;', 'tries=50;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(11, 11, 1, 11, 'tries=2;', 'tries=50;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(12, 12, 1, 12, 'tries=2;', 'tries=50;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(13, 13, 1, 13, 'tries=2;', 'tries=50;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(14, 14, 1, 14, 'tries=2;', 'tries=50;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(15, 15, 1, 15, 'tries=2;', 'tries=50;', NULL);
INSERT INTO rollout.rollout_step
(id, step_type, rollout, `sequence`, warn, error, fork)
VALUES(16, 16, 1, 16, 'tries=2;', 'tries=50;', NULL);

INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(1, 'legt eine leere Protokolldatei auf Jenkins an', 'pos/rollout/automated/002_auto_prepare_and_start_rollout_protocol', '', '', '', '', 'ROLLOUTNAME="HF-Update (XCH10.2-HF)";', '', '', '', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(2, 'Test-Schritt nur für Demo, bestehend aus Pärchen: 10% Zufallstreffer und: warten', 'dev/Stefan/test_multi_parameter', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', 'P1="A";P2="B";P3="C";P4="D"; P5="E";P6="F";P7="G";P8="H";', 'WAIT=3;', 'P1="a";P2="b";P3="c";P4="d"; P5="e";P6="f";P7="g";P8="h";', 'WAIT=3;', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(3, 'nur für Showcase verwenden!', 'pos/rollout/automated/980_test_random_45good', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', '', 'WAIT=3;', '', 'WAIT=3;', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(4, 'nur für Showcase verwenden!', 'pos/rollout/automated/980_test_random_45good', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', '', 'WAIT=3;', '', 'WAIT=3;', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(5, 'nur für Showcase verwenden!', 'pos/rollout/automated/980_test_random_45good', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', '', 'WAIT=3;', '', 'WAIT=3;', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(6, 'nur für Showcase verwenden!', 'pos/rollout/automated/980_test_random_45good', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', '', 'WAIT=3;', '', 'WAIT=3;', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(7, 'nur für Showcase verwenden!', 'pos/rollout/automated/980_test_random_45good', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', '', 'WAIT=3;', '', 'WAIT=3;', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(8, 'nur für Showcase verwenden!', 'pos/rollout/automated/980_test_random_45good', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', '', 'WAIT=3;', '', 'WAIT=3;', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(9, 'nur für Showcase verwenden!', 'pos/rollout/automated/980_test_random_45good', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', '', 'WAIT=3;', '', 'WAIT=3;', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(10, 'nur für Showcase verwenden!', 'pos/rollout/automated/980_test_random_45good', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', '', 'WAIT=3;', '', 'WAIT=3;', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(11, 'nur für Showcase verwenden!', 'pos/rollout/automated/980_test_random_45good', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', '', 'WAIT=3;', '', 'WAIT=3;', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(12, 'nur für Showcase verwenden!', 'pos/rollout/automated/980_test_random_45good', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', '', 'WAIT=3;', '', 'WAIT=3;', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(13, 'nur für Showcase verwenden!', 'pos/rollout/automated/980_test_random_45good', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', '', 'WAIT=3;', '', 'WAIT=3;', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(14, 'nur für Showcase verwenden!', 'pos/rollout/automated/980_test_random_45good', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', '', 'WAIT=3;', '', 'WAIT=3;', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(15, 'nur für Showcase verwenden!', 'pos/rollout/automated/980_test_random_45good', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', '', 'WAIT=3;', '', 'WAIT=3;', '', 0, 0, 0, 0, 0);
INSERT INTO rollout.rollout_step_type
(id, description, job_check, job_run, job_check_warn, job_run_warn, job_run_error, params_check, params_run, params_check_warn, params_run_warn, params_run_error, job_check_ctrl, job_run_ctrl, job_check_warn_ctrl, job_run_warn_ctrl, job_run_error_ctrl)
VALUES(16, 'nur für Showcase verwenden!', 'pos/rollout/automated/980_test_random_45good', 'pos/rollout/automated/010_auto_x_wait_a_while', '', '', '', '', 'WAIT=3;', '', 'WAIT=3;', '', 0, 0, 0, 0, 0);

INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(269, 3, 'm001', 'm001');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(270, 3, 'm003', 'm003');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(271, 3, 'm007', 'm007');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(272, 3, 'm009', 'm009');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(273, 3, 'm010', 'm010');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(274, 3, 'm011', 'm011');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(275, 3, 'm012', 'm012');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(276, 3, 'm013', 'm013');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(277, 3, 'm014', 'm014');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(278, 3, 'm015', 'm015');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(279, 3, 'm016', 'm016');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(280, 3, 'm017', 'm017');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(281, 3, 'm018', 'm018');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(282, 3, 'm020', 'm020');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(283, 3, 'm021', 'm021');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(284, 3, 'm023', 'm023');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(285, 3, 'm024', 'm024');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(286, 3, 'm025', 'm025');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(287, 3, 'm027', 'm027');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(288, 3, 'm028', 'm028');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(289, 3, 'm029', 'm029');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(290, 3, 'm030', 'm030');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(291, 3, 'm031', 'm031');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(292, 3, 'm034', 'm034');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(293, 3, 'm035', 'm035');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(294, 3, 'm036', 'm036');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(295, 3, 'm037', 'm037');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(296, 3, 'm038', 'm038');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(297, 3, 'm039', 'm039');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(298, 3, 'm040', 'm040');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(299, 3, 'm041', 'm041');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(300, 3, 'm042', 'm042');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(301, 3, 'm043', 'm043');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(302, 3, 'm044', 'm044');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(303, 3, 'm045', 'm045');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(304, 3, 'm046', 'm046');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(305, 3, 'm047', 'm047');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(306, 3, 'm048', 'm048');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(307, 3, 'm049', 'm049');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(308, 3, 'm050', 'm050');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(309, 3, 'm051', 'm051');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(310, 3, 'm052', 'm052');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(311, 3, 'm053', 'm053');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(312, 3, 'm054', 'm054');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(313, 3, 'm055', 'm055');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(314, 3, 'm056', 'm056');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(315, 3, 'm057', 'm057');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(316, 3, 'm058', 'm058');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(317, 3, 'm059', 'm059');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(318, 3, 'm060', 'm060');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(319, 3, 'm061', 'm061');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(320, 3, 'm062', 'm062');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(321, 3, 'm063', 'm063');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(322, 3, 'm064', 'm064');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(323, 3, 'm065', 'm065');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(324, 3, 'm066', 'm066');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(325, 3, 'm067', 'm067');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(326, 3, 'm068', 'm068');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(327, 3, 'm069', 'm069');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(328, 3, 'm070', 'm070');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(329, 3, 'm071', 'm071');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(330, 3, 'm072', 'm072');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(331, 3, 'm073', 'm073');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(332, 3, 'm074', 'm074');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(333, 3, 'm075', 'm075');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(334, 3, 'm076', 'm076');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(335, 3, 'm077', 'm077');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(336, 3, 'm078', 'm078');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(337, 3, 'm079', 'm079');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(338, 3, 'm080', 'm080');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(339, 3, 'm081', 'm081');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(340, 3, 'm082', 'm082');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(341, 3, 'm083', 'm083');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(342, 3, 'm084', 'm084');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(343, 3, 'm085', 'm085');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(344, 3, 'm086', 'm086');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(345, 3, 'm087', 'm087');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(346, 3, 'm088', 'm088');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(347, 3, 'm089', 'm089');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(348, 3, 'm090', 'm090');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(349, 3, 'm091', 'm091');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(350, 3, 'm092', 'm092');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(351, 3, 'm093', 'm093');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(352, 3, 'm094', 'm094');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(353, 3, 'm095', 'm095');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(354, 3, 'm098', 'm098');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(355, 3, 'm099', 'm099');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(356, 3, 'm100', 'm100');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(357, 3, 'm101', 'm101');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(358, 3, 'm102', 'm102');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(359, 3, 'm103', 'm103');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(360, 3, 'm104', 'm104');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(361, 3, 'm106', 'm106');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(362, 3, 'm107', 'm107');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(363, 3, 'm109', 'm109');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(364, 3, 'm110', 'm110');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(365, 3, 'm111', 'm111');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(366, 3, 'm112', 'm112');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(367, 3, 'm113', 'm113');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(368, 3, 'm114', 'm114');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(369, 3, 'm115', 'm115');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(370, 3, 'm116', 'm116');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(371, 3, 'm117', 'm117');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(372, 3, 'm118', 'm118');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(373, 3, 'm119', 'm119');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(374, 3, 'm120', 'm120');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(375, 3, 'm123', 'm123');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(376, 3, 'm124', 'm124');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(377, 3, 'm125', 'm125');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(378, 3, 'm126', 'm126');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(379, 3, 'm127', 'm127');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(380, 3, 'm128', 'm128');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(381, 3, 'm129', 'm129');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(382, 3, 'm130', 'm130');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(383, 3, 'm131', 'm131');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(384, 3, 'm132', 'm132');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(385, 3, 'm133', 'm133');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(386, 3, 'm134', 'm134');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(387, 3, 'm135', 'm135');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(388, 3, 'm137', 'm137');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(389, 3, 'm138', 'm138');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(390, 3, 'm139', 'm139');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(391, 3, 'm140', 'm140');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(392, 3, 'm141', 'm141');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(393, 3, 'm142', 'm142');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(394, 3, 'm143', 'm143');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(395, 3, 'm144', 'm144');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(396, 3, 'm145', 'm145');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(397, 3, 'm146', 'm146');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(398, 3, 'm147', 'm147');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(399, 3, 'm148', 'm148');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(400, 3, 'm149', 'm149');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(401, 3, 'm150', 'm150');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(402, 3, 'm151', 'm151');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(403, 3, 'm152', 'm152');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(404, 3, 'm153', 'm153');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(405, 3, 'm154', 'm154');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(406, 3, 'm155', 'm155');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(407, 3, 'm156', 'm156');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(408, 3, 'm157', 'm157');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(409, 3, 'm158', 'm158');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(410, 3, 'm159', 'm159');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(411, 3, 'm160', 'm160');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(412, 3, 'm161', 'm161');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(413, 3, 'm162', 'm162');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(414, 3, 'm163', 'm163');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(415, 3, 'm164', 'm164');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(416, 3, 'm165', 'm165');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(417, 3, 'm166', 'm166');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(418, 3, 'm167', 'm167');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(419, 3, 'm168', 'm168');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(420, 3, 'm169', 'm169');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(421, 3, 'm170', 'm170');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(422, 3, 'm171', 'm171');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(423, 3, 'm172', 'm172');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(424, 3, 'm173', 'm173');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(425, 3, 'm174', 'm174');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(426, 3, 'm175', 'm175');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(427, 3, 'm176', 'm176');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(428, 3, 'm177', 'm177');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(429, 3, 'm178', 'm178');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(430, 3, 'm179', 'm179');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(431, 3, 'm180', 'm180');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(432, 3, 'm181', 'm181');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(433, 3, 'm182', 'm182');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(434, 3, 'm183', 'm183');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(435, 3, 'm184', 'm184');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(436, 3, 'm185', 'm185');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(437, 3, 'm186', 'm186');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(438, 3, 'm187', 'm187');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(439, 3, 'm188', 'm188');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(440, 3, 'm189', 'm189');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(441, 3, 'm190', 'm190');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(442, 3, 'm191', 'm191');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(443, 3, 'm192', 'm192');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(444, 3, 'm196', 'm196');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(445, 3, 'm197', 'm197');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(446, 3, 'm198', 'm198');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(447, 3, 'm199', 'm199');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(448, 3, 'm200', 'm200');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(449, 3, 'm201', 'm201');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(450, 3, 'm202', 'm202');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(451, 3, 'm203', 'm203');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(452, 3, 'm204', 'm204');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(453, 3, 'm205', 'm205');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(454, 3, 'm206', 'm206');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(455, 3, 'm207', 'm207');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(456, 3, 'm208', 'm208');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(457, 3, 'm209', 'm209');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(458, 3, 'm210', 'm210');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(459, 3, 'm211', 'm211');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(460, 3, 'm212', 'm212');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(461, 3, 'm213', 'm213');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(462, 3, 'm214', 'm214');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(463, 3, 'm215', 'm215');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(464, 3, 'm216', 'm216');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(465, 3, 'm217', 'm217');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(466, 3, 'm218', 'm218');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(467, 3, 'm219', 'm219');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(468, 3, 'm220', 'm220');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(469, 3, 'm221', 'm221');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(470, 3, 'm222', 'm222');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(471, 3, 'm223', 'm223');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(472, 3, 'm224', 'm224');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(473, 3, 'm225', 'm225');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(474, 3, 'm226', 'm226');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(475, 3, 'm227', 'm227');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(476, 3, 'm228', 'm228');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(477, 3, 'm229', 'm229');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(478, 3, 'm230', 'm230');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(479, 3, 'm231', 'm231');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(480, 3, 'm232', 'm232');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(481, 3, 'm233', 'm233');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(482, 3, 'm234', 'm234');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(483, 3, 'm235', 'm235');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(484, 3, 'm236', 'm236');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(485, 3, 'm237', 'm237');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(486, 3, 'm238', 'm238');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(487, 3, 'm239', 'm239');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(488, 3, 'm240', 'm240');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(489, 3, 'm241', 'm241');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(490, 3, 'm242', 'm242');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(491, 3, 'm243', 'm243');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(492, 3, 'm245', 'm245');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(493, 3, 'm246', 'm246');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(494, 3, 'm247', 'm247');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(495, 3, 'm248', 'm248');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(496, 3, 'm249', 'm249');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(497, 3, 'm250', 'm250');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(498, 3, 'm251', 'm251');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(499, 3, 'm252', 'm252');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(500, 3, 'm253', 'm253');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(501, 3, 'm254', 'm254');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(502, 3, 'm255', 'm255');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(503, 3, 'm256', 'm256');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(504, 3, 'm257', 'm257');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(505, 3, 'm259', 'm259');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(506, 3, 'm260', 'm260');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(507, 3, 'm261', 'm261');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(508, 3, 'm262', 'm262');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(509, 3, 'm263', 'm263');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(510, 3, 'm264', 'm264');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(511, 3, 'm265', 'm265');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(512, 3, 'm266', 'm266');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(513, 3, 'm267', 'm267');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(514, 3, 'm278', 'm278');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(515, 3, 'm279', 'm279');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(516, 3, 'm280', 'm280');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(517, 3, 'm281', 'm281');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(518, 3, 'm282', 'm282');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(519, 3, 'm291', 'm291');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(520, 3, 'm292', 'm292');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(521, 3, 'm293', 'm293');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(522, 3, 'm294', 'm294');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(523, 3, 'm295', 'm295');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(524, 3, 'm296', 'm296');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(525, 3, 'm297', 'm297');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(526, 3, 'm298', 'm298');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(527, 3, 'm299', 'm299');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(528, 3, 'm300', 'm300');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(529, 3, 'm301', 'm301');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(530, 3, 'm302', 'm302');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(531, 3, 'm303', 'm303');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(532, 3, 'm304', 'm304');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(533, 3, 'm305', 'm305');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(534, 3, 'm306', 'm306');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(535, 3, 'm307', 'm307');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(536, 3, 'm308', 'm308');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(537, 3, 'm309', 'm309');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(538, 3, 'm310', 'm310');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(539, 3, 'm311', 'm311');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(540, 3, 'm312', 'm312');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(541, 3, 'm313', 'm313');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(542, 3, 'm314', 'm314');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(543, 3, 'm315', 'm315');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(544, 3, 'm400', 'm400');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(545, 3, 'm401', 'm401');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(546, 3, 'm402', 'm402');
INSERT INTO rollout.rollout_store
(id, rollout, name, sap_code)
VALUES(547, 3, 'm860', 'm860');





commit;
