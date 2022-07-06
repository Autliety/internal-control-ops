/*
Navicat MariaDB Data Transfer

Source Server         : MariaDB
Source Server Version : 100511
Source Host           : localhost:3306
Source Database       : icdev

Target Server Type    : MariaDB
Target Server Version : 100511
File Encoding         : 65001

Date: 2022-07-06 08:29:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for approval
-- ----------------------------
DROP TABLE IF EXISTS `approval`;
CREATE TABLE `approval` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_time` datetime(6) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `approve_user_id` bigint(20) DEFAULT NULL,
  `copy_user_id` bigint(20) DEFAULT NULL,
  `matter_id` bigint(20) DEFAULT NULL,
  `meeting_id` bigint(20) DEFAULT NULL,
  `meeting_topic_id` bigint(20) DEFAULT NULL,
  `plan_id` bigint(20) DEFAULT NULL,
  `progress_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3w33jx3goxcfqv89vhi74lmhw` (`approve_user_id`),
  KEY `FK58q0y51ivsjpanccw9q0ouq1h` (`copy_user_id`),
  KEY `FKbegad5kw6ll7fkvkb30ajd5nl` (`matter_id`),
  KEY `FKbyo7w3r1frn865c7xi41kcjjg` (`meeting_id`),
  KEY `FKs4jt8tncmjwjkca6qcabvexh4` (`meeting_topic_id`),
  KEY `FK2vrah4wqp6bufitqjtqt68bw7` (`plan_id`),
  KEY `FKcjr7k2sm8gortnb855r7lgws3` (`progress_id`),
  CONSTRAINT `FK2vrah4wqp6bufitqjtqt68bw7` FOREIGN KEY (`plan_id`) REFERENCES `ta_plan` (`id`),
  CONSTRAINT `FK3w33jx3goxcfqv89vhi74lmhw` FOREIGN KEY (`approve_user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK58q0y51ivsjpanccw9q0ouq1h` FOREIGN KEY (`copy_user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKbegad5kw6ll7fkvkb30ajd5nl` FOREIGN KEY (`matter_id`) REFERENCES `fr_matter` (`id`),
  CONSTRAINT `FKbyo7w3r1frn865c7xi41kcjjg` FOREIGN KEY (`meeting_id`) REFERENCES `fr_meeting` (`id`),
  CONSTRAINT `FKcjr7k2sm8gortnb855r7lgws3` FOREIGN KEY (`progress_id`) REFERENCES `fr_progress` (`id`),
  CONSTRAINT `FKs4jt8tncmjwjkca6qcabvexh4` FOREIGN KEY (`meeting_topic_id`) REFERENCES `fr_meeting_topic` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of approval
-- ----------------------------
INSERT INTO `approval` VALUES ('1', '2022-06-16 14:01:07.500480', '2022-06-16 14:01:07.500480', '1', null, '1', null, null, null, null);
INSERT INTO `approval` VALUES ('2', '2022-06-16 14:03:04.444081', '2022-06-16 14:03:04.444081', '1', null, '2', null, null, null, null);
INSERT INTO `approval` VALUES ('3', '2022-06-16 14:03:52.823135', '2022-06-16 14:03:52.823135', '1', null, '3', null, null, null, null);
INSERT INTO `approval` VALUES ('4', '2022-06-16 14:04:27.401040', '2022-06-16 14:04:27.401040', '1', null, '4', null, null, null, null);
INSERT INTO `approval` VALUES ('5', '2022-06-16 14:05:02.353038', '2022-06-16 14:05:02.353038', '1', null, '5', null, null, null, null);
INSERT INTO `approval` VALUES ('6', '2022-06-16 14:05:31.844133', '2022-06-16 14:05:31.844133', '1', null, '6', null, null, null, null);
INSERT INTO `approval` VALUES ('7', '2022-06-16 14:06:04.599346', '2022-06-16 14:06:04.599346', '1', null, '7', null, null, null, null);
INSERT INTO `approval` VALUES ('8', '2022-06-16 15:09:03.241399', '2022-06-16 15:09:03.241399', '1', null, '8', null, null, null, null);
INSERT INTO `approval` VALUES ('9', '2022-06-16 15:10:15.406581', '2022-06-16 15:10:15.406581', '1', null, '9', null, null, null, null);
INSERT INTO `approval` VALUES ('10', '2022-06-22 09:19:55.038772', '2022-06-22 09:19:55.038772', '1', null, null, '1', null, null, null);
INSERT INTO `approval` VALUES ('11', '2022-06-22 09:25:25.764751', '2022-06-22 09:25:25.764751', '1', null, null, null, '1', null, null);
INSERT INTO `approval` VALUES ('12', '2022-06-22 09:29:38.344481', '2022-06-22 09:29:38.344481', '1', null, null, null, '2', null, null);
INSERT INTO `approval` VALUES ('13', '2022-06-22 09:32:17.461596', '2022-06-22 09:32:17.461596', '1', null, null, null, '3', null, null);
INSERT INTO `approval` VALUES ('14', '2022-06-22 09:35:20.236672', '2022-06-22 09:35:20.236672', '1', null, null, null, '4', null, null);
INSERT INTO `approval` VALUES ('15', '2022-06-22 09:37:47.979886', '2022-06-22 09:37:47.979886', '1', null, null, null, '5', null, null);
INSERT INTO `approval` VALUES ('16', '2022-06-22 09:48:42.644277', '2022-06-22 09:48:42.644277', '1', null, null, null, '8', null, null);
INSERT INTO `approval` VALUES ('17', '2022-06-22 09:53:56.901966', '2022-06-22 09:53:56.901966', '1', null, null, null, '9', null, null);
INSERT INTO `approval` VALUES ('18', '2022-06-22 09:56:53.375730', '2022-06-22 09:56:53.375730', '1', null, null, null, '10', null, null);
INSERT INTO `approval` VALUES ('19', '2022-06-22 10:00:18.101276', '2022-06-22 10:00:18.101276', '1', null, null, null, '11', null, null);
INSERT INTO `approval` VALUES ('20', '2022-06-22 10:04:00.490744', '2022-06-22 10:04:00.490744', '1', null, null, null, '12', null, null);
INSERT INTO `approval` VALUES ('21', '2022-06-22 10:06:25.741811', '2022-06-22 10:06:25.741811', '1', null, null, null, '13', null, null);
INSERT INTO `approval` VALUES ('22', '2022-06-22 10:10:26.996799', '2022-06-22 10:10:26.996799', '1', null, null, null, '14', null, null);
INSERT INTO `approval` VALUES ('23', '2022-06-22 10:12:57.058596', '2022-06-22 10:12:57.058596', '1', null, null, null, '15', null, null);
INSERT INTO `approval` VALUES ('24', '2022-06-22 10:16:41.787490', '2022-06-22 10:16:41.787490', '1', null, null, null, '16', null, null);
INSERT INTO `approval` VALUES ('25', '2022-06-22 10:18:50.325287', '2022-06-22 10:18:50.325287', '1', null, null, null, '17', null, null);
INSERT INTO `approval` VALUES ('26', '2022-06-22 10:20:53.119294', '2022-06-22 10:20:53.119294', '1', null, null, null, '18', null, null);
INSERT INTO `approval` VALUES ('27', '2022-06-22 10:22:46.556498', '2022-06-22 10:22:46.556498', '1', null, null, null, '19', null, null);
INSERT INTO `approval` VALUES ('28', '2022-06-22 10:24:34.590958', '2022-06-22 10:24:34.590958', '1', null, null, null, '20', null, null);
INSERT INTO `approval` VALUES ('29', '2022-06-22 10:26:28.607896', '2022-06-22 10:26:28.607896', '1', null, null, null, '21', null, null);
INSERT INTO `approval` VALUES ('30', '2022-06-22 10:28:45.979118', '2022-06-22 10:28:45.979118', '1', null, null, null, '22', null, null);

-- ----------------------------
-- Table structure for approval_step
-- ----------------------------
DROP TABLE IF EXISTS `approval_step`;
CREATE TABLE `approval_step` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `approval_id` bigint(20) DEFAULT NULL,
  `approve_user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6lh55o1ulv2yi1pgrwkxp2hq9` (`approval_id`),
  KEY `FKwnl1p6kxf2a9r5hc9wj855ja` (`approve_user_id`),
  CONSTRAINT `FK6lh55o1ulv2yi1pgrwkxp2hq9` FOREIGN KEY (`approval_id`) REFERENCES `approval` (`id`),
  CONSTRAINT `FKwnl1p6kxf2a9r5hc9wj855ja` FOREIGN KEY (`approve_user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of approval_step
-- ----------------------------
INSERT INTO `approval_step` VALUES ('1', null, 'AWAITING_REVIEW', '2022-06-16 14:01:07.503518', '1', '1');
INSERT INTO `approval_step` VALUES ('2', null, 'AWAITING_REVIEW', '2022-06-16 14:03:04.445081', '2', '1');
INSERT INTO `approval_step` VALUES ('3', null, 'AWAITING_REVIEW', '2022-06-16 14:03:52.823135', '3', '1');
INSERT INTO `approval_step` VALUES ('4', null, 'AWAITING_REVIEW', '2022-06-16 14:04:27.405216', '4', '1');
INSERT INTO `approval_step` VALUES ('5', null, 'AWAITING_REVIEW', '2022-06-16 14:05:02.358278', '5', '1');
INSERT INTO `approval_step` VALUES ('6', null, 'AWAITING_REVIEW', '2022-06-16 14:05:31.844133', '6', '1');
INSERT INTO `approval_step` VALUES ('7', null, 'AWAITING_REVIEW', '2022-06-16 14:06:04.600378', '7', '1');
INSERT INTO `approval_step` VALUES ('8', null, 'AWAITING_REVIEW', '2022-06-16 15:09:03.241901', '8', '1');
INSERT INTO `approval_step` VALUES ('9', null, 'AWAITING_REVIEW', '2022-06-16 15:10:15.406581', '9', '1');
INSERT INTO `approval_step` VALUES ('10', null, 'REVIEWED', '2022-06-22 09:20:38.069110', '10', '1');
INSERT INTO `approval_step` VALUES ('11', null, 'REVIEWED', '2022-06-22 15:04:48.259757', '11', '1');
INSERT INTO `approval_step` VALUES ('12', null, 'REVIEWED', '2022-06-22 15:04:37.312012', '12', '1');
INSERT INTO `approval_step` VALUES ('13', null, 'REVIEWED', '2022-06-22 15:04:21.308740', '13', '1');
INSERT INTO `approval_step` VALUES ('14', null, 'REVIEWED', '2022-06-22 15:04:13.338456', '14', '1');
INSERT INTO `approval_step` VALUES ('15', null, 'REVIEWED', '2022-06-22 15:04:05.496040', '15', '1');
INSERT INTO `approval_step` VALUES ('16', null, 'REVIEWED', '2022-06-22 15:03:58.310137', '16', '1');
INSERT INTO `approval_step` VALUES ('17', null, 'REVIEWED', '2022-06-22 15:03:49.963567', '17', '1');
INSERT INTO `approval_step` VALUES ('18', null, 'REVIEWED', '2022-06-22 15:03:41.983764', '18', '1');
INSERT INTO `approval_step` VALUES ('19', null, 'REVIEWED', '2022-06-22 15:03:32.826277', '19', '1');
INSERT INTO `approval_step` VALUES ('20', null, 'REVIEWED', '2022-06-22 15:03:23.448840', '20', '1');
INSERT INTO `approval_step` VALUES ('21', null, 'REVIEWED', '2022-06-22 15:03:15.319213', '21', '1');
INSERT INTO `approval_step` VALUES ('22', null, 'REVIEWED', '2022-06-22 15:02:56.439444', '22', '1');
INSERT INTO `approval_step` VALUES ('23', null, 'REVIEWED', '2022-06-22 15:02:48.540445', '23', '1');
INSERT INTO `approval_step` VALUES ('24', null, 'REVIEWED', '2022-06-22 15:02:40.866013', '24', '1');
INSERT INTO `approval_step` VALUES ('25', null, 'REVIEWED', '2022-06-22 15:02:32.011107', '25', '1');
INSERT INTO `approval_step` VALUES ('26', null, 'REVIEWED', '2022-06-22 15:02:23.265959', '26', '1');
INSERT INTO `approval_step` VALUES ('27', null, 'REVIEWED', '2022-06-22 15:02:14.757220', '27', '1');
INSERT INTO `approval_step` VALUES ('28', null, 'REVIEWED', '2022-06-22 14:59:36.341597', '28', '1');
INSERT INTO `approval_step` VALUES ('29', null, 'REVIEWED', '2022-06-22 14:59:23.128084', '29', '1');
INSERT INTO `approval_step` VALUES ('30', null, 'REVIEWED', '2022-06-22 14:59:10.819077', '30', '1');

-- ----------------------------
-- Table structure for attach
-- ----------------------------
DROP TABLE IF EXISTS `attach`;
CREATE TABLE `attach` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) DEFAULT NULL,
  `fs_file_name` varchar(255) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `upload_user_id` bigint(20) DEFAULT NULL,
  `source_ordinal_form_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK5nl2cfs26l2x9q8e2ny12d97u` (`upload_user_id`),
  KEY `FKfvgc5cljvnqk7ym7e0se4ssaj` (`source_ordinal_form_id`),
  CONSTRAINT `FK5nl2cfs26l2x9q8e2ny12d97u` FOREIGN KEY (`upload_user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKfvgc5cljvnqk7ym7e0se4ssaj` FOREIGN KEY (`source_ordinal_form_id`) REFERENCES `fr_ordinal_form` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of attach
-- ----------------------------
INSERT INTO `attach` VALUES ('1', '监督检查.jpg', '1_监督检查.jpg', '2022-06-28 15:53:09.127789', '999', '1');

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `short_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES ('1', '镇党委', null, null);
INSERT INTO `department` VALUES ('2', '镇党委书记', null, null);
INSERT INTO `department` VALUES ('3', '班子其他成员', null, null);
INSERT INTO `department` VALUES ('4', '镇纪委', null, null);
INSERT INTO `department` VALUES ('5', '组织部门', null, null);
INSERT INTO `department` VALUES ('6', '党政综合办公室', '1', '党政办');
INSERT INTO `department` VALUES ('7', '党建工作办公室', '1', '党建办');
INSERT INTO `department` VALUES ('8', '社会治理办公室', '1', '社会治理办');
INSERT INTO `department` VALUES ('9', '经济发展办公室', '1', '经发办');
INSERT INTO `department` VALUES ('10', '社会事务服务管理办公室', '1', '社会事务办');
INSERT INTO `department` VALUES ('11', '村镇建设管理办公室', '1', '村建办');
INSERT INTO `department` VALUES ('12', '财政办公室', '1', '财政办');
INSERT INTO `department` VALUES ('13', '农业农村办公室', '1', '农业农村办');
INSERT INTO `department` VALUES ('14', '招商和项目推进科', '1', null);
INSERT INTO `department` VALUES ('15', '综合服务中心', '1', '文化站');
INSERT INTO `department` VALUES ('16', '生态环境办公室', '1', null);
INSERT INTO `department` VALUES ('17', '生态环境执法分队', '1', '生环分队');
INSERT INTO `department` VALUES ('18', '市场监督管理局百步分局', '1', '市场监管百步分局');
INSERT INTO `department` VALUES ('19', '综合行政执法中队', '1', '综合执法');
INSERT INTO `department` VALUES ('20', '自然规划局百步分局', '1', '自然资源所');
INSERT INTO `department` VALUES ('21', '百步社区', '1', null);
INSERT INTO `department` VALUES ('22', '百联村', '1', null);
INSERT INTO `department` VALUES ('23', '超同村', '1', null);
INSERT INTO `department` VALUES ('24', '逍恬村', '1', null);
INSERT INTO `department` VALUES ('25', '农丰村', '1', null);
INSERT INTO `department` VALUES ('26', '新升村', '1', null);
INSERT INTO `department` VALUES ('27', '横港村', '1', null);
INSERT INTO `department` VALUES ('28', '桃北村', '1', null);
INSERT INTO `department` VALUES ('29', '胜利村', '1', null);
INSERT INTO `department` VALUES ('30', '五丰村', '1', null);
INSERT INTO `department` VALUES ('31', '得胜村', '1', null);
INSERT INTO `department` VALUES ('999', '系统管理员', null, null);

-- ----------------------------
-- Table structure for file
-- ----------------------------
DROP TABLE IF EXISTS `file`;
CREATE TABLE `file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of file
-- ----------------------------

-- ----------------------------
-- Table structure for fr_evaluation
-- ----------------------------
DROP TABLE IF EXISTS `fr_evaluation`;
CREATE TABLE `fr_evaluation` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` longtext DEFAULT NULL,
  `focus` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `page` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `value` decimal(19,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fr_evaluation
-- ----------------------------
INSERT INTO `fr_evaluation` VALUES ('1', '依据班子成员“一岗双责”及其下位责任实际，按要求参加及召开“1+X”会议，分析分管、联系及负责领域、分管基层站所等全面从严治党形势任务、问题风险，以及“七张问题清单”状况，明晰各方职责任务，研究解决履责突出问题，推进各方职责任务调整、完善及有效落实。', null, '“1+X”专题会议', '1', '明责评价', null);
INSERT INTO `fr_evaluation` VALUES ('2', '班子成员“一岗双责”及其下位责任主体，坚持问题、风险导向，特别是依据全面从严治党、“七张问题清单”导向，查找、建立分管、联系及负责领域、分管基层站所各主体等“问题清单”并全程跟进调整完善，同时有针对性地建立“措施清单”及依据上级移交、反馈、交办的“问题清单”有效、动态建立“措施清单”，确保明确履责方向、突出履责重点、强化履责协同、有效落实责任清单。', null, '建立责任清单', '1', '明责评价', null);
INSERT INTO `fr_evaluation` VALUES ('3', '班子成员按要求参加区（镇）党委“第一议题”（含学规学纪）学习，指导督促分管、联系及负责领域、分管基层站所认真制定年度安排计划，坚持每月不少于1次组织开展学习、宣传、教育、警示等活动，推动班子成员及分管主体做到“两个维护”，提高政治站位，强化纪律规矩意识，守牢法纪底线红线。', null, '“第一议题”制度', '1', '明责评价', null);
INSERT INTO `fr_evaluation` VALUES ('4', '班子成员“一岗双责”及其下位责任主体，依据自我查找、建立的，以及上级移交、反馈、交办的分管、联系及负责领域、分管基层站所各主体等“问题清单”及相应建立的“措施清单”等，全程动态推进整改进展直至整改完成销号，形成落实“整改清单”，实现各责任主体能动、协同履责工作到位，提升管党治党责任落实成效。', null, '落实责任清单', '1', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('5', '根据“5+1”谈话机制要求，班子成员认真落实对分管、联系及负责领域、分管基层站所“一把手”开展日常谈话、受委托开展任职谈话及监督谈话，讲明职责任务，对苗头性、倾向性谈话及时进行提醒。认真落实区（镇）“一把手”对班子成员日常谈话和监督谈话要求，抓实“一岗双责”，注重自身问题、风险防范处置。', null, '“5+1”谈话机制', '1', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('6', '班子成员“一岗双责”及其下位责任主体，围绕上级重大决策部署及分管、联系及负责领域、分管基层站所党风廉政建设重点领域，“七张问题清单”所涉内容等，相关主体每季度不少于1次组织（联合）开展监督检查，加强问题、风险排查发现及有效处置、整改。', null, '监督检查工作', '1', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('7', '班子成员及其下位责任主体，严格按照区(镇）“三重一大”事项目录清单和议事规则规定要求，履行分管、联系领域及负责领域、分管基层站所涉“三重一大”事项决策必要前置程序，执行落实议事决策全流程纪实，分管领域自觉接受集体领导和有效监督，抓好相关问题整改。主动参与区（镇）“三重一大”事项决策监督，充分发表意见，特别是加强对“一把手”违反民主集中制问题的监督。', null, '“三重一大”决策', '1', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('8', '班子成员“一岗双责”及其下位责任主体主动抓好监督执纪“四种形态”，主动适用第一种形态处置问题，主动发现、报告所分管、负责、联系领域、基层站所干部和公职人员的违纪违规违法问题。', null, '第一种形态运用', '1', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('9', '班子成员发现同级班子其他成员，特别是“一把手”存在的苗头性、倾向性问题及时进行相互监提醒，对发现存在的重要问题，及时向区（镇）“一把手”或上级如实报告。同时，主动接受其他班子成员对本人的监督提醒，切实抓好问题整改。', null, '相互监督提醒', '1', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('10', '班子成员对照“一岗双责”责任清单、协同履责绩效考评项目等，客观、如实、及时向上级报告履责情况，特别是主动做好向区（镇）“一把手”民主生活会前个别汇报、党委专题会议汇报及特殊情况随时汇报等，根据监督评议意见、“一把手”约谈意见及纪委情况通报等，抓好突出问题及风险整改。同时，认真抓好下位责任主体履责报告等职责范围内的监督评议工作，督促跟进评议反馈问题，特别是纪委情况通报问题的整改落实。', null, '履责情况报告', '1', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('11', '班子成员在每年年底区（镇）党委（扩大）会议上述责述廉，把包括执行政治纪律和政治规矩、贯彻落实中央决策部署、履行管党治党责任、担当作为、工作实绩、履职用权、廉洁自律等方面，并接受评议。', null, '述责述廉评议', '1', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('12', '班子成员认真落实个人有关事项报告规定，如实、及时做好即时报告、年度报告工作，每年民主生活进行书面公开，新任职“一把手”按规定做好到任后第一次党委会上进行口头公开。', null, '个人有关事项报告及公开', '1', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('13', '班子成员“一岗双责”及其下位责任主体认真开展党员干部和公职人员廉政问题风险排查，有针对性地制定防范措施，抓好措施执行落实，防范廉政风险问题发生。', null, '廉政风险排查防控开展、落实', '1', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('14', '班子成员按照区（镇）领导班子民主生活会要求，聚焦主题，认真开展理论学习、征求意见建议、相互谈心谈话、高质量撰写发言提纲、严肃开展批评和自我批评、主动做好相关问题情况说明、抓好问题整改落实。按照组织生活会督导要求，指导参加联系村（社）组织生活会，带领督导组抓好会前检查、会中指导、会后评估及跟进查摆问题整改工作。', null, '民主（组织）生活会（督导）', '1', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('15', '班子成员要全面如实记录相关干部本人或授意他人插手干预干部选拔任用、土地使用权出让、工程建设、房地产开发与经营、执纪执法活动等重大事项情况并第一时间做好向区（镇）党委报告工作。', null, '领导干部插手干预重大事项记录报告', '1', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('16', '班子成员按照落实“一岗双责”要求，认真抓好分管清廉机关（基层站所）建设，严格执行落实议事规则、集体决策机制及工程项目招投标制度规定等，严格执行行业、业务工作法律法规、政策制度规定，健全单位内部治理、内控、监督机制，全面规范权力运行，加强机关、站所）清廉文化建设，积极打造清廉单元建设示范标杆。', null, '清廉单元建设', '1', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('17', '班子成员按照落实“一岗双责”要求，认真抓好“一单三书”制度的执行落实，对所涉的各类问题、风险，各主体强化责任落实，协同落实整改，层层落实管党治党责任。认真配合上级巡察、基层作风巡查、专项监督、专项治理等反馈问题的整改落实。', null, '“一单三书”', '1', '督责评价', null);
INSERT INTO `fr_evaluation` VALUES ('18', '班子成员按照落实“一岗双责”要求，认真抓好“纪委动议”制度的执行落实，对所涉的各类问题、风险及其他工作职责任务，各主体协同落实抓好整改及部署落实，防控风险、解决问题。认真抓好上级纪委专项监督、纪委专项治理及纪检监察建议书、正风肃纪移送函等按要求办理落实。', null, '纪委动议', '1', '督责评价', null);
INSERT INTO `fr_evaluation` VALUES ('19', '班子成员针对各责任主体日常监督等发现的问题，抓好“六必谈”等情形的履责约谈，同步抓好被上级履责约谈的整改落实，不断增强相关责任主体的履责意识、履责动力，推动各类问题、风险有效整改。', null, '履责约谈', '1', '督责评价', null);
INSERT INTO `fr_evaluation` VALUES ('20', '对班子成员“一岗双责”及其下位主体履责不到位、公权力大数据监督应用发现涉班子成员及下位主体的问题风险等，落实班子成员追踪督促、跟进有效闭环整改。', null, '履责追踪', '1', '督责评价', null);
INSERT INTO `fr_evaluation` VALUES ('21', '对班子成员“一岗双责”及其下位主体履责整改不力、公权力大数据监督应用发现涉班子成员及下位主体的问题风险处置整改不力或拒不整改、整改搞形式主义、官僚主义造成不良影响或严重后果的，实施预警并追究责任、作出处置。', null, '预警处置', '1', '追责评价', null);
INSERT INTO `fr_evaluation` VALUES ('22', '\"发生违纪违规违法情况,或在推进上级党委、政府中心工作、重点工作中发生不作为慢作为乱作为假作为等问题的，班子成员及其下位主体干部职工被区（镇）及以上机关查处的一般给予相应扣分。在区（镇）党委、纪委监察办发现查处之前，及时跟进主动处置（指适用第一种形态的情形）的，不予扣分或相应予以加分；主动报告相关问题（指第二种形态及以上的情形）的，减半扣分或不予扣分；涉及瞒报的，加倍扣分。违纪违规案件发生后，针对分管、联系及分管基层站所等违纪党员干部、公职人员，通过组织生活会、警示教育会落实警示教育制度，强化以案促改，健全内部制度规范，强化内部监督，有具体举措并见到实效的，适当予以加分。\"', null, '违纪违规', '1', '追责评价', null);
INSERT INTO `fr_evaluation` VALUES ('23', '按要求召开“1+X”会议，分析本村（社）全面从严治党形势任务、问题风险，以及“七张问题清单”状况，明晰各方职责任务，研究解决履责突出问题，推进各方职责任务调整、完善及有效落实。', null, '“1+X”专题会议', '2', '明责评价', null);
INSERT INTO `fr_evaluation` VALUES ('24', '坚持问题、风险导向，特别是依据全面从严治党、“七张问题清单”导向，查找、建立本村（社）各主体“问题清单”并全程跟进调整完善，同时有针对性地建立“措施清单”及依据上级移交、反馈、交办的“问题清单”有效、动态建立“措施清单”，确保明确履责方向、突出履责重点、强化履责协同、有效落实责任清单。', null, '建立责任清单', '2', '明责评价', null);
INSERT INTO `fr_evaluation` VALUES ('25', '认真制定“第一议题”（含学规学纪）年度安排计划，各村（社）坚持每月不少于1次组织开展学习、宣传、教育、警示等活动，推动村（社）各主体做到“两个维护”，提高政治站位，强化纪律规矩意识，守牢法纪底线红线。', null, '“第一议题”制度', '2', '明责评价', null);
INSERT INTO `fr_evaluation` VALUES ('26', '坚持问题、风险导向，依据本村（社）各主体自我查找、建立的，以及上级移交、反馈、交办的“问题清单”及相应建立的“措施清单”等，全程动态推进整改进展直至整改完成销号，形成落实“整改清单”，实现各责任主体能动、协同履责工作到位，提升管党治党责任落实成效。', null, '落实责任清单', '2', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('27', '根据“5+1”谈话机制要求，村（社）“一把手”认真落实对班子成员日常谈话、监督谈话，讲明职责任务，对苗头性、倾向性谈话及时进行提醒。认真落实区（镇）“一把手”、纪委、组织部门负责人对村（社）“一把手”日常谈话、任职谈话、监督谈话、集体谈话、勉励谈话要求，抓实主体责任和“第一责任人”责任，注重自身问题、风险防范处置。', null, '“5+1”谈话机制', '2', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('28', '围绕上级重大决策部署及村（社）党风廉政建设重点领域，“七张问题清单”所涉内容等，村（社）主体每季度不少于1次组织（联合）开展监督检查，加强问题、风险排查发现及有效处置、整改。', null, '监督检查工作', '2', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('29', '严格执行村级重大事务“五议两公开”相关制度规定，对村（社）纳入区(镇）“三重一大”事项目录清单的项目按区（镇）相关规定严格执行落实，村（社）“一把手”严格执行末位表态等制度规定，班子成员主动参与决策监督、提出意见建议，加强对“一把手”违反民主集中制问题的监督。村（社）“一把手”和班子成员其主管、分管领域自觉接受集体领导和监督。', null, '重大事务决策', '2', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('30', '主动抓好监督执纪“四种形态”，村（社）相关主体，特别是“一把手”主动适用第一种形态处置问题，主动发现、报告所负责或分管条线领域、下属网格党支部党员的违纪违法问题。', null, '第一种形态运用', '2', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('31', '村（社）班子成员发现班子其他成员，特别是“一把手”存在的苗头性、倾向性问题及时进行相互监提醒，对发现存在的重要问题，及时向村（社）“一把手”或区（镇）党委、纪委和组织部门如实报告。同时，村（社）班子成员要主动接受其他班子成员对本人的监督提醒，切实抓好问题整改。', null, '相互监督提醒', '2', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('32', '村（社）各主体对照责任清单、协同履责绩效考评项目等，客观、如实、及时向上级报告履责情况，抓好监督评议工作，督促跟进评议反馈问题整改落实，特别是做好村（社）“一把手”听取班子成员组织生活会前个别汇报、党组织专题会议汇报及特殊情况随时汇报，发现问题约谈督促整改，并纳入村（社）党组织向区（镇）党委书面报告，做好村（社）“一把手”向区（镇）“一把手”报告工作。', null, '履责情况报告', '2', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('33', '村（社）班子成员在每年年底村（社）党组织等会议上述责述廉，把包括执行政治纪律和政治规矩、贯彻落实中央决策部署、履行管党治党责任、担当作为、工作实绩、履职用权、廉洁自律等方面，并接受评议，落实评议意见整改。同时，村（社）“一把手”做好向区（镇）党委述责述廉制度。', null, '述责述廉评议', '2', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('34', '村（社）“一把手”认真落实个人有关事项报告规定，如实、及时做好个人有关事项集中报告、个人其他重要事项报告，每年组织生活进行书面公开，新任职村（社）“一把手”按规定做好到任后第一次党组织会议上进行口头公开。', null, '个人有关事项报告及公开', '2', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('35', '村（社）班子及其成员按照村（社）班子组织生活会要求，聚焦主题，认真开展理论学习、征求意见建议、相互谈心谈话、高质量撰写发言提纲、严肃开展批评和自我批评、主动做好相关问题情况说明、抓好查摆问题、组织生活会评估反馈意见的整改落实。', null, '召开组织生活会', '2', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('36', '村（社）班子成员，特别是“一把手”要全面如实记录相关干部本人或授意他人插手工程建设、资产处置等重大事项情况并第一时间做好向村（社）党组织报告工作。', null, '干部插手干预重大事项记录报告', '2', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('37', '认真开展村（社）干部廉政问题风险排查，有针对性地制定防范措施，抓好措施执行落实，防范廉政风险问题发生。', null, '廉政风险排查防控', '2', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('38', '认真开展清廉村居建设，严格执行落实班子议事规则、“五议两公开”村级重大事务议事决策机制及工程项目招投标制度规定等，推行实施村级“三资”监管信息系统和村级小微权力监管平台，健全内部治理机制，全面规范、制约村级小微权力运行，加强村居清廉文化建设，积极打造清廉村居建设示范点。以县对村（社）清廉村居指数考评结果认定。', null, '清廉村居建设', '2', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('39', '依照村（社）纪委监察工作联络站履职清单，重点突出监督村（社）落实上级决策部署、村社监察对象依法履职、廉洁用权，以及作风操守情况，以及协助推进清廉村居建设、“四责协同”机制建设和加强自身建设等方面认真履职尽责。积极参与基层监督深化年活动，主动争创示范村社。以区（镇）纪委监察办对村（社）监察工作联络站年度考评结果认定。', null, '纪委监察工作联络站监督履职', '2', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('40', '认真抓好“一单三书”制度的执行落实，对所涉的各类问题、风险，各主体强化责任落实，协同落实整改。同时，村党委主动探索延伸实施“一单三书”制度，层层落实管党治党责任。认真配合上级村居巡察（回头看）、基层作风巡查、专项监督、专项治理等反馈问题的整改落实。', null, '“一单三书”', '2', '督责评价', null);
INSERT INTO `fr_evaluation` VALUES ('41', '认真抓好“纪委动议”制度的执行落实，对所涉的各类问题、风险及其他工作职责任务，各主体协同落实抓好整改及部署落实，防控风险、解决问题。认真抓好上级纪委专项监督、纪委专项治理及纪检监察建议书、正风肃纪移送函等按要求办理落实。', null, '纪委动议', '2', '督责评价', null);
INSERT INTO `fr_evaluation` VALUES ('42', '围绕村（社）党组织、纪检监察组织日常监督增强发现的问题，抓好“六必谈”等情形的履责约谈，同步抓好村（社）相关主体被上级履责约谈的整改落实，不断增强相关责任主体的履责意识、履责动力，推动各类问题、风险有效整改。', null, '履责约谈', '2', '督责评价', null);
INSERT INTO `fr_evaluation` VALUES ('43', '对村（社）相关主体履责不到位、公权力大数据监督应用发现涉村（社）相关主体的问题风险等，落实追踪督促、跟进有效闭环整改。', null, '履责追踪', '2', '督责评价', null);
INSERT INTO `fr_evaluation` VALUES ('44', '对村（社）相关主体履责整改不力、公权力大数据监督应用发现涉村（社）相关主体的问题风险处置整改不力或拒不整改、整改搞形式主义、官僚主义造成不良影响或严重后果的，实施预警并追究责任、作出处置。', null, '预警处置', '2', '督责评价', null);
INSERT INTO `fr_evaluation` VALUES ('45', '\"发生违纪违规违法情况,或在推进上级党委、政府中心工作、重点工作中发生不作为慢作为乱作为假作为等问题的，村（社）班子成员被区（镇）及以上机关查处的一般给予相应扣分。在区（镇）党委、纪委监察办发现查处之前，村（社）及时跟进主动处置（指适用第一种形态的情形）的，不予扣分或相应予以加分；主动报告相关问题（指第二种形态及以上的情形）的，减半扣分或不予扣分；涉及瞒报的，加倍扣分。违纪违规案件发生后，针对违纪党员干部、公职人员等，通过组织生活会、警示教育会落实警示教育制度，强化以案促改，健全内部制度规范，强化内部监督，有具体举措并见到实效的，适当予以加分。\"', null, '违纪违规', '2', '督责评价', null);
INSERT INTO `fr_evaluation` VALUES ('46', '按要求召开“1+X”会议，分析本基层站所全面从严治党形势任务、问题风险，以及“七张问题清单”状况，明晰各方职责任务，研究解决履责突出问题，推进各方职责任务调整、完善及有效落实。', null, '“1+X”专题会议', '3', '明责评价', null);
INSERT INTO `fr_evaluation` VALUES ('47', '坚持问题、风险导向，特别是依据全面从严治党、“七张问题清单”导向，查找、建立本基层站所各主体“问题清单”并全程跟进调整完善，同时有针对性地建立“措施清单”及依据上级移交、反馈、交办的“问题清单”有效、动态建立“措施清单”，确保明确履责方向、突出履责重点、强化履责协同、有效落实责任清单。', null, '建立责任清单', '3', '明责评价', null);
INSERT INTO `fr_evaluation` VALUES ('48', '认真制定“第一议题”(含学规学纪)年度安排计划，各基层站所坚持每月不少于1次组织开展学习、宣传、教育、警示等活动，推动基层站所各主体做到“两个维护”，提高政治站位，强化纪律规矩意识，守牢法纪底线红线。', null, '“第一议题”制度', '3', '明责评价', null);
INSERT INTO `fr_evaluation` VALUES ('49', '坚持问题、风险导向，依据本基层站所自我查找、建立的，以及上级移交、反馈、交办的“问题清单”及相应建立的“措施清单”等，全程动态推进整改进展直至整改完成销号，形成落实“整改清单”，实现各责任主体能动、协同履责工作到位，提升管党治党责任落实成效。', null, '落实责任清单', '3', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('50', '根据“5+1”谈话机制要求，认真落实区（镇）“一把手”、纪委负责人、组织部门负责人或分管领导对基层站所“一把手”开展的日常谈话、任职谈话、监督谈话、集体谈话、勉励谈话，明确职责任务，落实问题风险防范整改和及时处置。', null, '“5+1”谈话机制', '3', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('51', '围绕上级重大决策部署及基层站所党风廉政建设重点领域，“七张问题清单”所涉内容等，相关主体每季度不少于1次组织（联合）开展监督检查，加强问题、风险排查发现及有效处置、整改。', null, '监督检查工作', '3', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('52', '严格按照区(镇）“三重一大”事项目录清单和议事规则规定要求，协助落实本基层站所涉区（镇）“三重一大”事项决策必要前置程序，自觉接受上级领导和有效监督，协助抓好相关问题整改。协助主动参与区（镇）“三重一大”事项决策监督。', null, '“三重一大”决策', '3', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('53', '主动抓好监督执纪“四种形态”，基层站所相关主体主动适用第一种形态处置问题，主动发现、报告违纪违法问题。', null, '第一种形态运用', '3', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('54', '基层站所相关负责人发现其他相关负责人，特别是“一把手”存在的苗头性、倾向性问题及时进行相互监提醒，对发现存在的重要问题，及时向分管领导或上级如实报告。同时，主动接受基层站所其他负责人对本人的监督提醒，切实抓好问题整改。', null, '相互监督提醒', '3', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('55', '基层站所各主体对照责任清单、协同履责绩效考评项目等，客观、如实、及时向区（镇）分管领导报告履责情况，特别是主动做好专题会议汇报及特殊情况随时汇报等，根据监督评议意见、“一把手”约谈意见及纪委情况通报等，抓好突出问题及风险整改落实。', null, '履责情况报告', '3', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('56', '视情安排在基层站所“一把手”每年年底区（镇）党委（扩大）会议上口头方式或书面方式述责述廉，把包括执行政治纪律和政治规矩、贯彻落实中央决策部署、履行管党治党责任、担当作为、工作实绩、履职用权、廉洁自律等方面，并接受评议。', null, '述责述廉评议', '3', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('57', '基层站所相关负责人，特别是“一把手”认真落实个人有关事项报告规定，如实、及时做好即时报告、年度报告工作。', null, '个人有关事项报告', '3', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('58', '基层站所相关负责人，特别是“一把手”要全面如实记录相关干部本人或授意他人插手干预干部选拔任用、土地使用权出让、工程建设、房地产开发与经营、执纪执法活动等重大事项情况并第一时间做好向区（镇）党委报告工作。', null, '领导干部插手干预重大事项记录报告', '3', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('59', '基层站所负责人和工作人员，特别是“一把手”认真开展基层站所干部廉政问题风险排查，有针对性地制定防范措施，抓好措施执行落实，防范廉政风险问题发生。', null, '廉政风险排查防控', '3', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('60', '基层站所相关负责人，特别是“一把手”认真抓好清廉站所建设，严格执行落实议事规则、集体决策机制及工程项目招投标制度规定等，严格执行行业、业务工作法律法规、政策制度规定，健全单位内部治理、内控、监督机制，全面规范权力运行，加强站所清廉文化建设，积极打造清廉单元建设示范标杆。', null, '清廉站所建设', '3', '履责评价', null);
INSERT INTO `fr_evaluation` VALUES ('61', '基层站所相关负责人，特别是“一把手”认真抓好“一单三书”制度的执行落实，对所涉的各类问题、风险，各主体强化责任落实，协同落实整改。认真配合上级巡察、基层作风巡查、专项监督、专项治理等反馈问题的整改落实。', null, '“一单三书”', '3', '督责评价', null);
INSERT INTO `fr_evaluation` VALUES ('62', '基层站所相关负责人，特别是“一把手”认真抓好涉分管领导的“纪委动议”制度的执行落实，对所涉的各类问题、风险及其他工作职责任务，各主体协同落实抓好整改及部署落实，防控风险、解决问题。认真抓好上级纪委专项监督、纪委专项治理及纪检监察建议书、正风肃纪移送函等按要求办理落实。', null, '纪委动议', '3', '督责评价', null);
INSERT INTO `fr_evaluation` VALUES ('63', '围绕日常监督增强发现的问题，基层站所相关负责人，特别是“一把手”抓好被分管领导等履责约谈的整改落实，不断增强相关责任主体的履责意识、履责动力，推动各类问题、风险有效整改。', null, '履责约谈', '3', '督责评价', null);
INSERT INTO `fr_evaluation` VALUES ('64', '对基层站所、相关负责人，特别是“一把手”主体履责不到位、公权力大数据监督应用发现涉基层站所的问题风险等，落实基层站所追踪督促、跟进有效闭环整改。', null, '履责追踪', '3', '督责评价', null);
INSERT INTO `fr_evaluation` VALUES ('65', '对基层站所、相关负责人，特别是“一把手”履责整改不力、公权力大数据监督应用发现涉基层站所的问题风险处置整改不力或拒不整改、整改搞形式主义、官僚主义造成不良影响或严重后果的，实施预警并追究责任、作出处置。', null, '预警处置', '3', '追责评价', null);
INSERT INTO `fr_evaluation` VALUES ('66', '\"发生违纪违规违法情况,或在推进上级党委、政府中心工作、重点工作中发生不作为慢作为乱作为假作为等问题的，本基层站所干部职工被区（镇）及以上机关查处的一般给予相应扣分。在区（镇）党委、纪委监察办发现查处之前，及时跟进主动处置（指适用第一种形态的情形）的，不予扣分或相应予以加分；主动报告相关问题（指第二种形态及以上的情形）的，减半扣分或不予扣分；涉及瞒报的，加倍扣分。违纪违规案件发生后，针对违纪党员干部、公职人员，通过组织生活会、警示教育会落实警示教育制度，强化以案促改，健全内部制度规范，强化内部监督，有具体举措并见到实效的，适当予以加分。\"', null, '违纪违规', '3', '追责评价', null);

-- ----------------------------
-- Table structure for fr_inform
-- ----------------------------
DROP TABLE IF EXISTS `fr_inform`;
CREATE TABLE `fr_inform` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `dest_department_id` bigint(20) DEFAULT NULL,
  `dest_user_id` bigint(20) DEFAULT NULL,
  `from_department_id` bigint(20) DEFAULT NULL,
  `from_user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK71o2i3mtv8mqy331nx2t58o4f` (`dest_department_id`),
  KEY `FKh9x618egvhj5smw41637wdo0c` (`dest_user_id`),
  KEY `FK5taf09tnh57p7ijd02cauyfs5` (`from_department_id`),
  KEY `FKmyn73sdpt8jc61lgsvhrgb0h4` (`from_user_id`),
  CONSTRAINT `FK5taf09tnh57p7ijd02cauyfs5` FOREIGN KEY (`from_department_id`) REFERENCES `department` (`id`),
  CONSTRAINT `FK71o2i3mtv8mqy331nx2t58o4f` FOREIGN KEY (`dest_department_id`) REFERENCES `department` (`id`),
  CONSTRAINT `FKh9x618egvhj5smw41637wdo0c` FOREIGN KEY (`dest_user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKmyn73sdpt8jc61lgsvhrgb0h4` FOREIGN KEY (`from_user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fr_inform
-- ----------------------------
INSERT INTO `fr_inform` VALUES ('4', null, '指导、监督横港村做好海盐县百步镇常青家庭农场历年欠缴流转土地租金及水费工作，有效挽回经济损失和不良影响。', null, 'ADVICE', null, '279', null, '1');
INSERT INTO `fr_inform` VALUES ('5', null, '海盐县百步镇常青家庭农场（法定代表人卜年兴）2013年以来在租赁横港村农户委托流转土地的过程中，存在长期、大量欠缴土地租金及水费问题，造成了村集体资产的较大损失和不良社会影响。', null, 'OPINION', null, '279', null, '1');
INSERT INTO `fr_inform` VALUES ('6', null, '针对横港村土地流转工作中存在的突出问题业务指导、监督管理不到位，导致海盐县百步镇常青家庭农场2013年以来在租赁横港村农户委托流转土地的过程中，存在长期、大量欠缴土地租金及水费问题，造成了村集体资产的较大损失和不良社会影响。', null, 'ANNOUNCE', null, '21', null, '1');

-- ----------------------------
-- Table structure for fr_matter
-- ----------------------------
DROP TABLE IF EXISTS `fr_matter`;
CREATE TABLE `fr_matter` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `measure_status` varchar(255) DEFAULT NULL,
  `origin` varchar(255) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `source_ordinal_form_id` bigint(20) DEFAULT NULL,
  `source_inform_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKb2ony0kcujofipt1hc3scycx3` (`user_id`),
  KEY `FKcqjgbdd8fg0bhb97sso9i4g4j` (`source_ordinal_form_id`),
  KEY `FKrwd347716b6xfyuvtha7cj5ha` (`source_inform_id`),
  CONSTRAINT `FKb2ony0kcujofipt1hc3scycx3` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKcqjgbdd8fg0bhb97sso9i4g4j` FOREIGN KEY (`source_ordinal_form_id`) REFERENCES `fr_ordinal_form` (`id`),
  CONSTRAINT `FKrwd347716b6xfyuvtha7cj5ha` FOREIGN KEY (`source_inform_id`) REFERENCES `fr_inform` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fr_matter
-- ----------------------------
INSERT INTO `fr_matter` VALUES ('1', '1', '“非粮化”整治推进不力', '2022-12-31', 'AWAITING_REVIEW', '责任主体排查发现 / 执行上级重大决策部署方面问题或风险', '2022-06-16 14:01:07.510173', '21', null, null);
INSERT INTO `fr_matter` VALUES ('2', '2', '农村人居环境整治推进不力', '2022-12-31', 'AWAITING_REVIEW', '责任主体排查发现 / 履职方面的风险或问题', '2022-06-16 14:03:04.445081', '21', null, null);
INSERT INTO `fr_matter` VALUES ('3', '3', '相关农田水利工程等方面利用职权谋取私利风险', '2022-07-31', 'AWAITING_REVIEW', '责任主体排查发现 / 廉洁用权履职方面的问题或风险', '2022-06-16 14:03:52.824138', '21', null, null);
INSERT INTO `fr_matter` VALUES ('4', '4', '与相关农业市场化主体交往过程中权力寻租的风险', '2022-07-31', 'AWAITING_REVIEW', '责任主体排查发现 / 廉洁用权履职方面的问题或风险', '2022-06-16 14:04:27.406135', '21', null, null);
INSERT INTO `fr_matter` VALUES ('5', '5', '存在违规接受管理服务对象吃请等“四风”问题风险', '2022-07-31', 'AWAITING_REVIEW', '责任主体排查发现 / 执行落实中央八项规定精神等方面的问题风险', '2022-06-16 14:05:02.359230', '21', null, null);
INSERT INTO `fr_matter` VALUES ('6', '6', '作风不够实，自律不够严的问题', '2022-07-31', 'AWAITING_REVIEW', '责任主体排查发现 / 作风建设方面的问题或风险', '2022-06-16 14:05:31.845099', '21', null, null);
INSERT INTO `fr_matter` VALUES ('7', '7', '存在违法违纪风险', '2022-12-31', 'AWAITING_REVIEW', '责任主体排查发现 / 严守国家法律法规和党的纪律方面的问题或风险', '2022-06-16 14:06:04.601392', '21', null, null);
INSERT INTO `fr_matter` VALUES ('8', '8', '（重大督查问题）桃北村蔡张丽反映台风期间人员未安置问题', '2021-12-31', 'AWAITING_REVIEW', '上级反馈、移交、交办 / 纳入上级“七张问题清单”的移交、交办问题', '2022-06-16 15:09:03.242952', '21', null, null);
INSERT INTO `fr_matter` VALUES ('9', '9', '反映百步三和印刷公司违法建造五千多平方米的房子、百步镇横港村程小唤无审批手续建造村旁单门独户。', '2022-07-15', 'AWAITING_REVIEW', '区(镇)反馈、交办 / 本级纪检监察部门监督检查、信访调查、审查调查、问题线索处置等发现、暴露的各类问题', '2022-06-16 15:10:15.407846', '17', null, null);
INSERT INTO `fr_matter` VALUES ('18', null, '指导、监督横港村做好海盐县百步镇常青家庭农场历年欠缴流转土地租金及水费工作，有效挽回经济损失和不良影响。', '2022-06-24', 'AWAITING_REVIEW', '区（镇）反馈、交办/一单三书', '2022-07-05 16:52:18.104401', '279', null, '4');
INSERT INTO `fr_matter` VALUES ('19', null, '海盐县百步镇常青家庭农场（法定代表人卜年兴）2013年以来在租赁横港村农户委托流转土地的过程中，存在长期、大量欠缴土地租金及水费问题，造成了村集体资产的较大损失和不良社会影响。', '2022-06-24', 'AWAITING_REVIEW', '区（镇）反馈、交办/一单三书', '2022-07-05 16:54:38.120840', '279', null, '5');
INSERT INTO `fr_matter` VALUES ('20', null, '针对横港村土地流转工作中存在的突出问题业务指导、监督管理不到位，导致海盐县百步镇常青家庭农场2013年以来在租赁横港村农户委托流转土地的过程中，存在长期、大量欠缴土地租金及水费问题，造成了村集体资产的较大损失和不良社会影响。', '2022-06-15', 'AWAITING_REVIEW', '区（镇）反馈、交办/一单三书', '2022-07-05 17:00:15.219769', '21', null, '6');

-- ----------------------------
-- Table structure for fr_measure
-- ----------------------------
DROP TABLE IF EXISTS `fr_measure`;
CREATE TABLE `fr_measure` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `matter_id` bigint(20) DEFAULT NULL,
  `progress_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4h9fvfcgnsp2xp91jj9cfcmsh` (`matter_id`),
  KEY `FK6ryvg9pyxn7nnxdtvq9yex0jy` (`progress_id`),
  KEY `FK4qpryomqol5f9fen1on62usi2` (`user_id`),
  CONSTRAINT `FK4h9fvfcgnsp2xp91jj9cfcmsh` FOREIGN KEY (`matter_id`) REFERENCES `fr_matter` (`id`),
  CONSTRAINT `FK4qpryomqol5f9fen1on62usi2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK6ryvg9pyxn7nnxdtvq9yex0jy` FOREIGN KEY (`progress_id`) REFERENCES `fr_progress` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fr_measure
-- ----------------------------
INSERT INTO `fr_measure` VALUES ('1', '1', '1、进一步完善“非粮化”整治推进计划；\n2、建立完成目标任务倒排机制，突出节点化推进，责任逐层传导压实到村；\n3、加强日常监督检查跟进，抓好督查通报和考核结果运用。', '2022-12-31', null, '1', '1', '21');
INSERT INTO `fr_measure` VALUES ('2', '1', '1、进一步建立健全面向各村的定期督查、考核通报机制；\n2、建立完善面向人居环境治理第三方主体的监督检查及考核奖惩机制，运用市场力量倒逼落实人居环境治理工作责任；\n3、加强宣传引导，推动建立农户主体参与房前屋后人居环境治理、规范垃圾分类的有效激励奖惩机制；\n4、进一步加强人居环境和垃圾分类执法力度，严厉打击、通报各类违规违法行为，形成震慑效果。', '2022-12-31', null, '2', '2', '21');
INSERT INTO `fr_measure` VALUES ('3', '1', '1、严格监管工程管理人员，对工程施工单位变更、追加项目等行为严格按程序审核，确保工程质量；2、加强日工程管理人员的日常教育管理，督促与工程单位人员“八小时”之外不接触、保持距离；3、严格自律，带头严格落实工程发包、合同签约、建设施工、验收、审价、资金支付、履约保证金缴纳等各环节监管，规避不良交往。', '2022-07-31', null, '3', '3', '21');
INSERT INTO `fr_measure` VALUES ('4', '1', '1、严格兑现落实上级对各类农业主体的奖补规定，按程序规范操作，确保公平公正；2.对属于“三重一大”事项提交区（镇）党委会议决策后执行；3、主动规避与相关农业市场主体人员工作之外的交往。', '2022-07-31', null, '4', '4', '21');
INSERT INTO `fr_measure` VALUES ('5', '1', '1、加强农业农村办干部和公职人员队伍的教育监督，发现苗头性、倾向性问题主动落实第一种形态处置；2、定期结合站所会议，进行案例通报和警示；3、带头垂范，不接受农场主、工程单位的宴请、送礼等吃请，要求分管的干部职工对我本人进行监督。', '2022-07-31', null, '5', '5', '21');
INSERT INTO `fr_measure` VALUES ('6', '1', '1、切实加强党性、廉政学习，提升自我修养；2、注意言行，重抓落实，不搞形式主义官僚主义这套。3、在各方面与上级要求保持一致。', '2022-07-31', null, '6', '6', '21');
INSERT INTO `fr_measure` VALUES ('7', '1', '1、注重自我警示，严格遵守不酒驾醉驾、不参与各类赌博活动；2、不去各类不良场所，净化朋友圈、社交圈；3.加强对分管条线的提醒和教育，注重以案为鉴，严防此类问题发生。', '2022-12-31', null, '7', '7', '21');
INSERT INTO `fr_measure` VALUES ('8', '1', '\"1、针对留言人蔡张丽所反映的情况，及时做好沟通，消除误解，取得蔡张丽对镇村防汛防台工作的支持与理解。\n2、区（镇）将根据此次事件反映出的问题进行完善提升，对防汛防台工作进行复盘，补齐救灾安置工作短板，进一步强化为民服务意识水平\"', '2021-12-31', '2021-11-30', '8', '8', '21');
INSERT INTO `fr_measure` VALUES ('9', '1', '1、分别由分管拆违的副镇长叶吴良、分管农民建房的副镇长沈伟华对负责进行调查核实是否存在违建情况；\n2、根据调查结果，跟进处置。', '2022-07-15', '2022-06-02', '9', '9', '17');
INSERT INTO `fr_measure` VALUES ('10', null, '指导、监督横港村做好海盐县百步镇常青家庭农场历年欠缴流转土地租金及水费工作，有效挽回经济损失和不良影响。', null, null, '18', '10', null);
INSERT INTO `fr_measure` VALUES ('11', null, '指导、督促横港村做好海盐县百步镇常青家庭农场2022年度实际承租流转土地面积的核定工作，指导横港村做好重新订立或变更流转土地合同、合同登记、风险保证金缴纳及规范“再流转”等工作。', null, null, '18', '11', null);
INSERT INTO `fr_measure` VALUES ('12', null, '抓好举一反三，对包括横港村在内的各行政村流转土地实际租赁现状、合同履约、历年租金和水费缴纳、合同订立变更、保证金缴纳等情况开展一次全面的起底梳理、核查，指导、督促面上纠正土地领域的各类突出问题。', null, null, '18', '12', null);
INSERT INTO `fr_measure` VALUES ('13', null, '深刻吸取教训，围绕土地流转领域易发多发问题，探索从进一步完善细化相关制度办法、确保制度办法刚性执行的层面推动实现土地流转工作常态长效管理，促进土地流转工作规范化，维护好村集体和广大农户利益。', null, null, '18', '13', null);
INSERT INTO `fr_measure` VALUES ('14', null, '抓紧做好海盐县百步镇常青家庭农场历年欠缴流转土地租金及水费工作，有效挽回经济损失和不良影响。', null, null, '19', '14', null);
INSERT INTO `fr_measure` VALUES ('15', null, '抓紧做好海盐县百步镇常青家庭农场2022年度实际承租流转土地面积的核定工作，及时做好合同重新订立或变更流转土地合同、合同登记、风险保证金缴纳及规范“再流转”等工作。', null, null, '19', '15', null);
INSERT INTO `fr_measure` VALUES ('16', null, '抓好举一反三，对本村其他流转土地实际租赁现状、合同履约、历年租金和水费缴纳、合同订立变更、保证金缴纳等情况开展一次起底梳理、核查，全面纠正土地领域的各类突出问题，推动实现土地流转工作规范化和常态长效管理，切实维护好村集体和广大农户利益。', null, null, '19', '16', null);
INSERT INTO `fr_measure` VALUES ('17', null, '研究运用落实第一种形态处置工作，并将运用落实情况书面报镇纪委', null, null, '20', '17', null);

-- ----------------------------
-- Table structure for fr_meeting
-- ----------------------------
DROP TABLE IF EXISTS `fr_meeting`;
CREATE TABLE `fr_meeting` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `placement` varchar(255) DEFAULT NULL,
  `start_time` datetime(6) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1ywl2v55i56r7h32h501rsyqx` (`department_id`),
  KEY `FK3exiwgm68042ndmnsj9crcq2w` (`user_id`),
  CONSTRAINT `FK1ywl2v55i56r7h32h501rsyqx` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`),
  CONSTRAINT `FK3exiwgm68042ndmnsj9crcq2w` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fr_meeting
-- ----------------------------
INSERT INTO `fr_meeting` VALUES ('1', 'HY001', '1. 传达学习上级精神\n2. 明确各责任主体职责任务\n3. 排查各自领域问题风险及防范措施', '暂无', '2022-03-08 10:00:00.534000', 'REVIEWED', '1专题会议', null, '2');

-- ----------------------------
-- Table structure for fr_meeting_meeting_user
-- ----------------------------
DROP TABLE IF EXISTS `fr_meeting_meeting_user`;
CREATE TABLE `fr_meeting_meeting_user` (
  `meeting_id` bigint(20) NOT NULL,
  `meeting_user_id` bigint(20) NOT NULL,
  KEY `FKh8j47guaovbg77b5kt44tnj61` (`meeting_user_id`),
  KEY `FKm5a4mh8mam8w151h62rx3u1ja` (`meeting_id`),
  CONSTRAINT `FKh8j47guaovbg77b5kt44tnj61` FOREIGN KEY (`meeting_user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKm5a4mh8mam8w151h62rx3u1ja` FOREIGN KEY (`meeting_id`) REFERENCES `fr_meeting` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fr_meeting_meeting_user
-- ----------------------------
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '2');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '3');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '4');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '5');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '6');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '7');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '8');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '9');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '10');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '11');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '12');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '13');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '14');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '15');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '16');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '17');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '18');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '19');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '20');
INSERT INTO `fr_meeting_meeting_user` VALUES ('1', '21');

-- ----------------------------
-- Table structure for fr_meeting_sub_user
-- ----------------------------
DROP TABLE IF EXISTS `fr_meeting_sub_user`;
CREATE TABLE `fr_meeting_sub_user` (
  `meeting_id` bigint(20) NOT NULL,
  `sub_user_id` bigint(20) NOT NULL,
  KEY `FK2hdg4yw3i5baivp1p43myw0mi` (`sub_user_id`),
  KEY `FKky3w23lc5o5max1mhnw36q7gl` (`meeting_id`),
  CONSTRAINT `FK2hdg4yw3i5baivp1p43myw0mi` FOREIGN KEY (`sub_user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKky3w23lc5o5max1mhnw36q7gl` FOREIGN KEY (`meeting_id`) REFERENCES `fr_meeting` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fr_meeting_sub_user
-- ----------------------------

-- ----------------------------
-- Table structure for fr_meeting_topic
-- ----------------------------
DROP TABLE IF EXISTS `fr_meeting_topic`;
CREATE TABLE `fr_meeting_topic` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_time` datetime(6) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `meeting_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6tf6o0t6lc7ep5xaob29nljf2` (`meeting_id`),
  KEY `FK6dvntc6550hkbukau1oa5253w` (`user_id`),
  CONSTRAINT `FK6dvntc6550hkbukau1oa5253w` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK6tf6o0t6lc7ep5xaob29nljf2` FOREIGN KEY (`meeting_id`) REFERENCES `fr_meeting` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fr_meeting_topic
-- ----------------------------
INSERT INTO `fr_meeting_topic` VALUES ('1', '2022-06-22 09:25:25.743287', 'REVIEWED', '1', '2');
INSERT INTO `fr_meeting_topic` VALUES ('2', '2022-06-22 09:29:38.341030', 'REVIEWED', '1', '3');
INSERT INTO `fr_meeting_topic` VALUES ('3', '2022-06-22 09:32:17.458549', 'REVIEWED', '1', '4');
INSERT INTO `fr_meeting_topic` VALUES ('4', '2022-06-22 09:35:20.232671', 'REVIEWED', '1', '5');
INSERT INTO `fr_meeting_topic` VALUES ('5', '2022-06-22 09:37:47.976889', 'REVIEWED', '1', '6');
INSERT INTO `fr_meeting_topic` VALUES ('8', '2022-06-22 09:48:42.626897', 'REVIEWED', '1', '7');
INSERT INTO `fr_meeting_topic` VALUES ('9', '2022-06-22 09:53:56.881553', 'REVIEWED', '1', '8');
INSERT INTO `fr_meeting_topic` VALUES ('10', '2022-06-22 09:56:53.371732', 'REVIEWED', '1', '9');
INSERT INTO `fr_meeting_topic` VALUES ('11', '2022-06-22 10:00:18.093149', 'REVIEWED', '1', '10');
INSERT INTO `fr_meeting_topic` VALUES ('12', '2022-06-22 10:04:00.482007', 'REVIEWED', '1', '11');
INSERT INTO `fr_meeting_topic` VALUES ('13', '2022-06-22 10:06:25.733526', 'REVIEWED', '1', '12');
INSERT INTO `fr_meeting_topic` VALUES ('14', '2022-06-22 10:10:26.971789', 'REVIEWED', '1', '13');
INSERT INTO `fr_meeting_topic` VALUES ('15', '2022-06-22 10:12:57.058596', 'REVIEWED', '1', '14');
INSERT INTO `fr_meeting_topic` VALUES ('16', '2022-06-22 10:16:41.779079', 'REVIEWED', '1', '15');
INSERT INTO `fr_meeting_topic` VALUES ('17', '2022-06-22 10:18:50.317146', 'REVIEWED', '1', '16');
INSERT INTO `fr_meeting_topic` VALUES ('18', '2022-06-22 10:20:53.119294', 'REVIEWED', '1', '17');
INSERT INTO `fr_meeting_topic` VALUES ('19', '2022-06-22 10:22:46.547903', 'REVIEWED', '1', '18');
INSERT INTO `fr_meeting_topic` VALUES ('20', '2022-06-22 10:24:34.557985', 'REVIEWED', '1', '19');
INSERT INTO `fr_meeting_topic` VALUES ('21', '2022-06-22 10:26:28.599405', 'REVIEWED', '1', '20');
INSERT INTO `fr_meeting_topic` VALUES ('22', '2022-06-22 10:28:45.971753', 'REVIEWED', '1', '21');

-- ----------------------------
-- Table structure for fr_meeting_topic_task
-- ----------------------------
DROP TABLE IF EXISTS `fr_meeting_topic_task`;
CREATE TABLE `fr_meeting_topic_task` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` longtext DEFAULT NULL,
  `is_matter` bit(1) DEFAULT NULL,
  `topic_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK9ykl3j4jlwkhucwvbq39hf4ip` (`topic_id`),
  CONSTRAINT `FK9ykl3j4jlwkhucwvbq39hf4ip` FOREIGN KEY (`topic_id`) REFERENCES `fr_meeting_topic` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fr_meeting_topic_task
-- ----------------------------
INSERT INTO `fr_meeting_topic_task` VALUES ('1', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。严肃党内政治生活，加强政治生态研判。带头贯彻执行民主集中制，严格执行党委会议议事规则和集体决策制度，严格落实“五不直接分管”、集体议事决策时末位表态等要求。带头遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '1');
INSERT INTO `fr_meeting_topic_task` VALUES ('2', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制要求，牵头推动落实“五张责任清单”，履行第一责任人责任，加强区（镇）全面从严治党研究部署和督促落实，重点抓好对区（镇）班子成员和村（社）、中心办所“一把手”的监督，抓好职责范围内党风廉政建设和反腐败工作。', null, '1');
INSERT INTO `fr_meeting_topic_task` VALUES ('3', '认真贯彻落实省市县委和区（镇）党委决策部署，牵头推动落实招大引强、产业转型、创新赋能、城乡建设、民生保障、社会治理、党建统领“七大提升行动”，深入开展项目攻坚年、改革创新年、作风建设年“三个年”活动。', null, '1');
INSERT INTO `fr_meeting_topic_task` VALUES ('4', '加强党对反腐败工作的统一领导，坚持综合施治，牵头落实不敢腐、不能腐、不想腐一体推进，重点推动强化权力公开规范高效运行机制建设，提升基层治理体系和治理能力现代化水平。牵头统筹谋划清廉单元建设，持续深化清廉百步建设。', null, '1');
INSERT INTO `fr_meeting_topic_task` VALUES ('5', '牵头加固中央八项规定堤坝，持之以恒加强作风建设，锲而不舍纠“四风”树新风。', null, '1');
INSERT INTO `fr_meeting_topic_task` VALUES ('6', '牵头加固中央八项规定堤坝，持之以恒加强作风建设，锲而不舍纠“四风”树新风。', null, '1');
INSERT INTO `fr_meeting_topic_task` VALUES ('7', '坚持以身作则，在严格自律上当标杆、作表率，带头遵守执行全面从严治党各项规定，带头落实中央八项规定及其实施细则精神，带头坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '1');
INSERT INTO `fr_meeting_topic_task` VALUES ('8', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行党委会议议事规则和集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '2');
INSERT INTO `fr_meeting_topic_task` VALUES ('9', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实政府系统全面从严治党工作及责任落实工作，重点抓好对政府系统党员干部，特别是财政办和国资、审计线“一把手”及其成员的严格教育管理监督，抓好政府系统、主管部门（口子）等职责范围内党风廉政建设和反腐败工作，推动廉洁政府建设。', null, '2');
INSERT INTO `fr_meeting_topic_task` VALUES ('10', '认真贯彻落实省市县委和区（镇）党委决策部署，推动落实“七大提升行动”，深入开展“三个年”活动。', null, '2');
INSERT INTO `fr_meeting_topic_task` VALUES ('11', '强化政府权力公开规范高效运行，谋划、实施职责范围内的重点清廉单元建设，提高治理水平。严格执行财政预算决算制度，加强对财政性资金的管理和监督检查，抓好基础设施、公共建设等政府投资项目的监管，提高资金使用绩效，严格控制和缩减一般性支出，厉行勤俭节约，带头过“紧日子”。切实抓好国有资产管理及处置、土地出让、政府采购、招商引资、债务管理、内控机制数字化改革等方面监督。', null, '2');
INSERT INTO `fr_meeting_topic_task` VALUES ('12', '加强政府系统作风建设，推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '2');
INSERT INTO `fr_meeting_topic_task` VALUES ('13', '加强政府系统党员干部日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '2');
INSERT INTO `fr_meeting_topic_task` VALUES ('14', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '2');
INSERT INTO `fr_meeting_topic_task` VALUES ('15', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行班子集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '3');
INSERT INTO `fr_meeting_topic_task` VALUES ('16', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实镇人大全面从严治党工作及责任落实工作，重点抓好对镇人大党员干部，特别是人大办、慈善分会“一把手”及其成员的严格教育管理监督，抓好镇人大、分管部门（口子）等职责范围内党风廉政建设和反腐败工作，推动廉洁人大建设。', null, '3');
INSERT INTO `fr_meeting_topic_task` VALUES ('17', '认真贯彻落实省市县委和区（镇）党委决策部署，强化人大监督履职，有力推动落实“七大提升行动”和“三个年”活动，协助抓好民生保障提升行动。', null, '3');
INSERT INTO `fr_meeting_topic_task` VALUES ('18', '强化人大监督权力的公开规范高效运行，谋划、实施职责范围内的重点清廉单元建设，提高履职规范化水平。抓好慈善资金募集、分配使用监管，防范化解问题风险。', null, '3');
INSERT INTO `fr_meeting_topic_task` VALUES ('19', '创新优化人大监督，推动人大监督与其他各类监督形成协同格局，不断提升监督效能，保障和推动上级决策部署落地见效。', null, '3');
INSERT INTO `fr_meeting_topic_task` VALUES ('20', '加强镇人大作风建设，推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '3');
INSERT INTO `fr_meeting_topic_task` VALUES ('21', '加强镇人大、分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '3');
INSERT INTO `fr_meeting_topic_task` VALUES ('22', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '3');
INSERT INTO `fr_meeting_topic_task` VALUES ('23', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行党委集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '4');
INSERT INTO `fr_meeting_topic_task` VALUES ('24', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实主持和分管领域全面从严治党工作及责任落实工作，重点抓好对主管和分管领域党员干部，特别是政协联络室、工会、党政办、党建办、招商和项目推进科、所联系村“一把手”及其成员的严格教育管理监督，抓好主持和分管领域等职责范围内党风廉政建设和反腐败工作。', null, '4');
INSERT INTO `fr_meeting_topic_task` VALUES ('25', '认真贯彻落实省市县委和区（镇）党委决策部署，扎实开展招大引强提升行动、产业转型提升行动、党建统领提升行动和项目攻坚年、改革创新年、作风建设年活动。', null, '4');
INSERT INTO `fr_meeting_topic_task` VALUES ('26', '创新优化政协民主监督，推动政协监督与其他各类监督形成协同格局，不断提升监督效能，保障和推动上级决策部署落地见效。', null, '4');
INSERT INTO `fr_meeting_topic_task` VALUES ('27', '严格执行上级和本级有关招商和项目推进、营商环境建设工作涉及政策、制度、规定，完善优化相关制度规则，规范权力运行，强化廉政风险防控。', null, '4');
INSERT INTO `fr_meeting_topic_task` VALUES ('28', '坚持数字化改革为牵引推进清廉机关建设，加快内控制度机制刚性落地，规范机关权力运行，健全优化督查考核一体化机制，推动区（镇）机关党员干部进一步转作风、提效能、优服务。', null, '4');
INSERT INTO `fr_meeting_topic_task` VALUES ('29', '切实严格执行公务用车管理、机关食堂管理等制度规定，厉行节约。', null, '4');
INSERT INTO `fr_meeting_topic_task` VALUES ('30', '推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义，持续抓好基层减负工作。', null, '4');
INSERT INTO `fr_meeting_topic_task` VALUES ('31', '加强主持和分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '4');
INSERT INTO `fr_meeting_topic_task` VALUES ('32', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '4');
INSERT INTO `fr_meeting_topic_task` VALUES ('33', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行党委集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '5');
INSERT INTO `fr_meeting_topic_task` VALUES ('34', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实分管领域全面从严治党工作及责任落实工作，重点抓好对分管领域党员干部，特别是社会治理办、生态环境办、行政执法办和所联系村“一把手”及其成员的严格教育管理监督，抓好分管领域等职责范围内党风廉政建设和反腐败工作。', null, '5');
INSERT INTO `fr_meeting_topic_task` VALUES ('35', '认真贯彻落实省市县委和区（镇）党委决策部署，扎实开展城乡建设提升行动、社会治理提升行动，牵头抓好疫情防控工作，切实加强平安建设、法治建设，以及安全生产、消防安全、交通安全等工作。', null, '5');
INSERT INTO `fr_meeting_topic_task` VALUES ('36', '严格落实重要信访事项领导包案等制度，持续深化涉法、涉诉等领域损害群众利益突出问题治理，扎实抓好信访积案“清零”专项行动，抓好常态化扫黑除恶工作。', null, '5');
INSERT INTO `fr_meeting_topic_task` VALUES ('37', '加强“一支队伍管执法”机制执行落实，创新落实垃圾分类、三改一拆、生态环境治理等工作，全面改进责任落实、督查检查、考核奖惩机制，提升工作质量，提高专项资金使用绩效，规范权力运行，有效强化廉政风险防控。', null, '5');
INSERT INTO `fr_meeting_topic_task` VALUES ('38', '推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '5');
INSERT INTO `fr_meeting_topic_task` VALUES ('39', '加强对分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '5');
INSERT INTO `fr_meeting_topic_task` VALUES ('40', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '5');
INSERT INTO `fr_meeting_topic_task` VALUES ('43', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行党委集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '8');
INSERT INTO `fr_meeting_topic_task` VALUES ('44', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，既牵头落实纪委监督责任，加强监督执纪问责，做深做实政治监督，协助区（镇）党委压实管党治党责任、深化清廉百步建设，抓好对区（镇）班子同级监督和村（社）、中心办所班子监督，深化政治生态动态分析和研判工作，又认真落实班子成员“一岗双责”，从严从实抓好纪委监察办内部监督管理和纪检监察干部队伍自身建设，自觉接受最严格的约束和监督，严防“灯下黑”。', null, '8');
INSERT INTO `fr_meeting_topic_task` VALUES ('45', '认真贯彻落实省市县委和区（镇）党委决策部署，有力监督保障“七大提升行动”“三个年”活动目标任务圆满完成，确保政令畅通。', null, '8');
INSERT INTO `fr_meeting_topic_task` VALUES ('46', '协同推进党建统领提升行动，扎实开展“作风建设年”活动，强化监督执纪，锤炼锻造“五敢型”干部队伍，为新时代共同富裕示范样板建设提供坚强作风保障。', null, '8');
INSERT INTO `fr_meeting_topic_task` VALUES ('47', '坚持综合施治，深化“三不”一体推进，始终保持反腐败高压态势，准确运用监督执纪“四种形态”，不断做深做透案后文章。', null, '8');
INSERT INTO `fr_meeting_topic_task` VALUES ('48', '坚持聚焦群众关切，健全完善村级监察工作联络站日常监督机制，以基层监督助力基层自治。加强对惠民富民、促进共同富裕政策措施落实情况的监督检查，持续开展漠视侵害群众利益问题专项治理，抓好重复检举控告“清零”专项行动，切实推动解决群众“急难愁盼”。', null, '8');
INSERT INTO `fr_meeting_topic_task` VALUES ('49', '加快推进监督数字化改革，围绕区（镇）资产处置、土地收储、基础设施建设、招商引资等重要公权力、重大项目和重点工作推进，建立项目化、节点化、数字化、实效化的运行推进机制及其配套的责任落实机制、评估研判机制和风险监管机制，全面构建监督数字化多跨协同场景，推动架构形成以“公权运行内控、督查考核推进、“五张清单”体系、大数据云监督”为特征“3+1”开发区（乡镇）“智治”平台。', null, '8');
INSERT INTO `fr_meeting_topic_task` VALUES ('50', '强化正风肃纪，驰而不息纠治“四风”，推动构建纠治“四风”长效机制，持续加固中央八项规定堤坝。', null, '8');
INSERT INTO `fr_meeting_topic_task` VALUES ('51', '推动构建亲清政商关系，会同组织部门开展《关于规范领导干部廉洁从政从业行为，进一步推动构建亲清政商关系的意见》贯彻执行情况的监督检查，有效跟进督促处置工作。', null, '8');
INSERT INTO `fr_meeting_topic_task` VALUES ('52', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '8');
INSERT INTO `fr_meeting_topic_task` VALUES ('53', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行党委集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '9');
INSERT INTO `fr_meeting_topic_task` VALUES ('54', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，既牵头落实组织部门职能监督责任，加强对机关、村（社）、中心（站办）党员干部、工作人员的日常监督管理，指导各基层党组织开好组织生活会，强化选人用人组织把关，又认真落实班子成员“一岗双责”，部署、检查、督促落实分管条线站办全面从严治党工作及责任落实工作，从严从实抓好对党建办组织口、党政办档案条线工作人员和所联系村“一把手”及其成员的教育管理监督，抓好分管领域等职责范围内党风廉政建设和反腐败工作。', null, '9');
INSERT INTO `fr_meeting_topic_task` VALUES ('55', '认真贯彻落实省市县委和区（镇）党委决策部署，牵头强化组织部门职能监督保障，推动“七大提升行动”“三个年”活动目标任务圆满完成。', null, '9');
INSERT INTO `fr_meeting_topic_task` VALUES ('56', '扎实推进党建统领提升行动，扎实开展“作风建设年”活动，围绕强化担当作为，锤炼锻造“五敢型”干部队伍，为新时代共同富裕示范样板建设提供坚强作风保障。', null, '9');
INSERT INTO `fr_meeting_topic_task` VALUES ('57', '牵头建立健全区（镇）管思想、管工作、管作风、管纪律的日常监督管理体系，加强村（社）民主集中制执行情况监督检查，推动落实请示报告、任职回避、定期轮岗、干部交流等制度，运用约谈、专项检查、个人有关事项报告、因私出国（境）证照集中管理，以及组织处理等方式，加强对党员干部、工作人员的日常监督，安排区（镇）党委会议听取村（社）书记党建和述职述廉报告。', null, '9');
INSERT INTO `fr_meeting_topic_task` VALUES ('58', '严格执行干部选拔任用的相关规定，强化对中层干部、村（社）干部拟任人选的把关，按要求执行分析研判和动议、民主推荐、考察、讨论决定等各环节。落实干部落实好干部标准和“凡提四必”程序，全面考察干部。', null, '9');
INSERT INTO `fr_meeting_topic_task` VALUES ('59', '组织实施村（社）、中心办所班子年度考核与平时考核相结合工作，对重点工作进行专项考核，突出工作实绩考核。', null, '9');
INSERT INTO `fr_meeting_topic_task` VALUES ('60', '推动构建亲清政商关系，会同纪委监察办开展《关于规范领导干部廉洁从政从业行为，进一步推动构建亲清政商关系的意见》贯彻执行情况的监督检查，有效跟进督促处置工作。', null, '9');
INSERT INTO `fr_meeting_topic_task` VALUES ('61', '推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '9');
INSERT INTO `fr_meeting_topic_task` VALUES ('62', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '9');
INSERT INTO `fr_meeting_topic_task` VALUES ('63', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行党委集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '10');
INSERT INTO `fr_meeting_topic_task` VALUES ('64', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实分管领域全面从严治党工作及责任落实工作，重点抓好对分管领域党员干部，特别是文化站和所联系村“一把手”及其成员的严格教育管理监督，抓好分管领域等职责范围内党风廉政建设和反腐败工作。', null, '10');
INSERT INTO `fr_meeting_topic_task` VALUES ('65', '认真贯彻落实省市县委和区（镇）党委决策部署，协同开展产业转型提升行动、城乡建设提升行动、民生保障提升行动和党建统领提升行动。', null, '10');
INSERT INTO `fr_meeting_topic_task` VALUES ('66', '扎实开展“作风建设年”活动，围绕强化思想引领，锤炼锻造“五敢型”干部队伍，为新时代共同富裕示范样板建设提供坚强作风保障。', null, '10');
INSERT INTO `fr_meeting_topic_task` VALUES ('67', '推动落实意识形态工作责任制，巩固提升思想舆论阵地。规范公职人员网络行为，加强涉纪涉腐网络舆情的监测、研判和处置，确保不发生各类网络舆情事件。', null, '10');
INSERT INTO `fr_meeting_topic_task` VALUES ('68', '持续深入抓好学习宣传贯彻习近平新时代中国特色社会主义思想和党的十九届六中全会精神，以及下半年召开的党的二十大精神，全面落实“第一议题”制度，拧紧区（镇）党员干部思想“总开关”。', null, '10');
INSERT INTO `fr_meeting_topic_task` VALUES ('69', '加强文化、旅游、体育基础设施建设项目及资金、文明创建和文旅体活动、赛事资金监管工作，加强廉政风险防控。', null, '10');
INSERT INTO `fr_meeting_topic_task` VALUES ('70', '加强对分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '10');
INSERT INTO `fr_meeting_topic_task` VALUES ('71', '加强对分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '10');
INSERT INTO `fr_meeting_topic_task` VALUES ('72', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '10');
INSERT INTO `fr_meeting_topic_task` VALUES ('73', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行党委集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '11');
INSERT INTO `fr_meeting_topic_task` VALUES ('74', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实分管领域全面从严治党工作及责任落实工作，重点抓好对分管领域党员干部，特别是招商和项目推进科负责人及其成员的严格教育管理监督，抓好分管领域等职责范围内党风廉政建设和反腐败工作。', null, '11');
INSERT INTO `fr_meeting_topic_task` VALUES ('75', '认真贯彻落实省市县委和区（镇）党委决策部署，协同开展招大引强提升行动、产业转型提升行动和党建统领提升行动。', null, '11');
INSERT INTO `fr_meeting_topic_task` VALUES ('76', '加大对民族宗教领域群体性事件、重大网络舆情及非法宗教活动、渗透的风险研判，跟进有效处置。', null, '11');
INSERT INTO `fr_meeting_topic_task` VALUES ('77', '严格执行上级和本级有关招商和项目推进、营商环境建设工作涉及政策、制度、规定，完善优化相关制度规则，规范权力运行，强化廉政风险防控。', null, '11');
INSERT INTO `fr_meeting_topic_task` VALUES ('78', '协助创新优化政协民主监督，推动政协监督与其他各类监督形成协同格局，不断提升监督效能，保障和推动上级决策部署落地见效。', null, '11');
INSERT INTO `fr_meeting_topic_task` VALUES ('79', '加强对分管及协助分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '11');
INSERT INTO `fr_meeting_topic_task` VALUES ('80', '推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '11');
INSERT INTO `fr_meeting_topic_task` VALUES ('81', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '11');
INSERT INTO `fr_meeting_topic_task` VALUES ('82', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行党委集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '12');
INSERT INTO `fr_meeting_topic_task` VALUES ('83', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实协助分管领域全面从严治党工作及责任落实工作，重点抓好对协助分管领域党员干部，特别是社会治理办、行政执法办和所联系村“一把手”及其成员的严格教育管理监督，抓好协助分管领域等职责范围内党风廉政建设和反腐败工作。', null, '12');
INSERT INTO `fr_meeting_topic_task` VALUES ('84', '认真贯彻落实省市县委和区（镇）党委决策部署，协助开展城乡建设提升行动、社会治理提升行动和党建统领提升行动，协助抓好法治建设、平安建设。', null, '12');
INSERT INTO `fr_meeting_topic_task` VALUES ('85', '协助落实重要信访事项领导包案等制度，持续深化涉法、涉诉等领域损害群众利益突出问题治理，协助抓好信访积案“清零”专项行动。', null, '12');
INSERT INTO `fr_meeting_topic_task` VALUES ('86', '创新落实“四位一体”保洁（垃圾分类）等工作推进运作机制，协助全面改进责任落实、督查检查、考核奖惩机制，提升工作质量，提高专项资金使用绩效，规范权力运行，有效强化廉政风险防控。', null, '12');
INSERT INTO `fr_meeting_topic_task` VALUES ('87', '加强对协助分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '12');
INSERT INTO `fr_meeting_topic_task` VALUES ('88', '推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '12');
INSERT INTO `fr_meeting_topic_task` VALUES ('89', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '12');
INSERT INTO `fr_meeting_topic_task` VALUES ('90', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行党委集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '13');
INSERT INTO `fr_meeting_topic_task` VALUES ('91', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实分管及协助分管领域全面从严治党工作及责任落实工作，重点抓好对分管及协助分管领域党员干部，特别是人武部、行政执法办和所联系村“一把手”及其成员的严格教育管理监督，抓好协助分管领域等职责范围内党风廉政建设和反腐败工作。', null, '13');
INSERT INTO `fr_meeting_topic_task` VALUES ('92', '认真贯彻落实省市县委和区（镇）党委决策部署，协同开展城乡建设提升行动和党建统领提升行动，重点抓好党管武装等工作。', null, '13');
INSERT INTO `fr_meeting_topic_task` VALUES ('93', '落实廉洁征兵要求，深化征兵工作廉政风险防控，加强民兵预备役人员的监督和管理，防范出现履职廉政风险。', null, '13');
INSERT INTO `fr_meeting_topic_task` VALUES ('94', '切实抓好“三改一拆”等项目资金、质量的监管工作，加强廉政风险防控。', null, '13');
INSERT INTO `fr_meeting_topic_task` VALUES ('95', '加强对分管及协助分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '13');
INSERT INTO `fr_meeting_topic_task` VALUES ('96', '推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '13');
INSERT INTO `fr_meeting_topic_task` VALUES ('97', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '13');
INSERT INTO `fr_meeting_topic_task` VALUES ('98', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行党委集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '14');
INSERT INTO `fr_meeting_topic_task` VALUES ('99', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实分管领域全面从严治党工作及责任落实工作，重点抓好对分管及协助分管领域党员干部，特别是派出所民警、协警等严格教育管理监督，抓好分管领域等职责范围内党风廉政建设和反腐败工作。', null, '14');
INSERT INTO `fr_meeting_topic_task` VALUES ('100', '认真贯彻落实省市县委和区（镇）党委决策部署，协助开展社会治理提升行动，协助抓好平安建设。', null, '14');
INSERT INTO `fr_meeting_topic_task` VALUES ('101', '深化推进清廉单元（站所）建设，从严落实从严治警要求，加强日常教育管理监督，坚决防范执法司法腐败问题。抓好常态化扫黑除恶工作', null, '14');
INSERT INTO `fr_meeting_topic_task` VALUES ('102', '推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '14');
INSERT INTO `fr_meeting_topic_task` VALUES ('103', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '14');
INSERT INTO `fr_meeting_topic_task` VALUES ('104', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行班子集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '15');
INSERT INTO `fr_meeting_topic_task` VALUES ('105', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，协助部署、检查、督促落实镇人大全面从严治党工作及责任落实工作，重点抓好对镇人大党员干部，特别是人大办、慈善分会负责人、百步社区“一把手”及其成员的严格教育管理监督，协助抓好镇人大、分管部门（口子）等职责范围内党风廉政建设和反腐败工作，推动廉洁人大建设。', null, '15');
INSERT INTO `fr_meeting_topic_task` VALUES ('106', '认真贯彻落实省市县委和区（镇）党委决策部署，协助强化人大监督履职，有力推动落实“七大提升行动”和“三个年”活动，协助抓好民生保障提升行动。', null, '15');
INSERT INTO `fr_meeting_topic_task` VALUES ('107', '协助强化人大监督权力的公开规范高效运行，谋划、实施职责范围内的重点清廉单元建设，提高履职规范化水平。协助抓好慈善资金募集、分配使用监管，防范化解问题风险。', null, '15');
INSERT INTO `fr_meeting_topic_task` VALUES ('108', '创新优化人大监督，协助推动人大监督与其他各类监督形成协同格局，不断提升监督效能，保障和推动上级决策部署落地见效。', null, '15');
INSERT INTO `fr_meeting_topic_task` VALUES ('109', '协助加强镇人大作风建设，推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '15');
INSERT INTO `fr_meeting_topic_task` VALUES ('110', '协助加强镇人大、分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '15');
INSERT INTO `fr_meeting_topic_task` VALUES ('111', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '15');
INSERT INTO `fr_meeting_topic_task` VALUES ('112', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行班子集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '16');
INSERT INTO `fr_meeting_topic_task` VALUES ('113', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实分管领域全面从严治党工作及责任落实工作，重点抓好对分管领域党员干部，特别是经济发展办、市场监管分局“一把手”及其成员和招商和项目推进科、生态环境办负责人及其成员的严格教育管理监督，抓好分管领域等职责范围内党风廉政建设和反腐败工作。', null, '16');
INSERT INTO `fr_meeting_topic_task` VALUES ('114', '认真贯彻落实省市县委和区（镇）党委决策部署，协同开展产业转型提升行动、招大引强提升行动、城乡建设提升行动、社会治理提升行动和创新赋能提升行动，扎实开展项目攻坚年、改革创新年活动。', null, '16');
INSERT INTO `fr_meeting_topic_task` VALUES ('115', '认真抓好分管领域内重大基础设施、产业项目和发展资金、科技资金监管，加强廉政风险防控。严格执行落实有关禁止领导干部违反规定插手工程建设、公共资源交易、资产处置等制度规定。', null, '16');
INSERT INTO `fr_meeting_topic_task` VALUES ('116', '严格执行上级和本级有关招商和项目推进工作涉及政策、制度、规定，完善优化相关制度规则，规范权力运行，强化廉政风险防控。', null, '16');
INSERT INTO `fr_meeting_topic_task` VALUES ('117', '加强营商环境建设，持续提升民营经济发展服务保障水平，切实指导商会规范化建设运作，推动亲清政商关系迭代升级。', null, '16');
INSERT INTO `fr_meeting_topic_task` VALUES ('118', '加强对分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '16');
INSERT INTO `fr_meeting_topic_task` VALUES ('119', '推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '16');
INSERT INTO `fr_meeting_topic_task` VALUES ('120', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '16');
INSERT INTO `fr_meeting_topic_task` VALUES ('121', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行班子集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '17');
INSERT INTO `fr_meeting_topic_task` VALUES ('122', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实分管领域全面从严治党工作及责任落实工作，重点抓好对分管领域党员干部，特别是社会事务服务管理办、政务服务办和所联系的行政村“一把手”及其成员的严格教育管理监督，抓好分管领域等职责范围内党风廉政建设和反腐败工作。', null, '17');
INSERT INTO `fr_meeting_topic_task` VALUES ('123', '认真贯彻落实省市县委和区（镇）党委决策部署，协同开展民生保障提升行动，扎实开展项目攻坚年活动，切实抓好疫情防控工作。', null, '17');
INSERT INTO `fr_meeting_topic_task` VALUES ('124', '切实防范群众身边的腐败问题和不正之风，认真抓好民生专项资金、项目和社会救助、养老社保等资金监管、检查，加强廉政风险防控。持续开展漠视侵害群众利益问题专项治理，切实解决群众“急难愁盼”事。', null, '17');
INSERT INTO `fr_meeting_topic_task` VALUES ('125', '加强对分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '17');
INSERT INTO `fr_meeting_topic_task` VALUES ('126', '推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '17');
INSERT INTO `fr_meeting_topic_task` VALUES ('127', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、公共资源交易、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '17');
INSERT INTO `fr_meeting_topic_task` VALUES ('128', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行班子集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '18');
INSERT INTO `fr_meeting_topic_task` VALUES ('129', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实分管领域全面从严治党工作及责任落实工作，重点抓好对分管领域党员干部，特别是村镇建设管理办、自然资源所和所联系的行政村“一把手”及其成员的严格教育管理监督，抓好分管领域等职责范围内党风廉政建设和反腐败工作。', null, '18');
INSERT INTO `fr_meeting_topic_task` VALUES ('130', '认真贯彻落实省市县委和区（镇）党委决策部署，协同开展城乡建设提升行动、产业转型提升行动，扎实开展项目攻坚年活动，抓好耕地“非农化”治理工作和美丽城镇样板镇创建。', null, '18');
INSERT INTO `fr_meeting_topic_task` VALUES ('131', '认真抓好重大基础设施工程、政府投资项目等质量、资金等监管，加强廉政风险防控。严格执行落实有关禁止领导干部违反规定插手工程建设、公共资源交易、资产处置等制度规定。', null, '18');
INSERT INTO `fr_meeting_topic_task` VALUES ('132', '加强对分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '18');
INSERT INTO `fr_meeting_topic_task` VALUES ('133', '推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '18');
INSERT INTO `fr_meeting_topic_task` VALUES ('134', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、公共资源交易、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '18');
INSERT INTO `fr_meeting_topic_task` VALUES ('135', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行班子集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '19');
INSERT INTO `fr_meeting_topic_task` VALUES ('136', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实分管领域全面从严治党工作及责任落实工作，重点抓好对分管领域党员干部，特别是经济发展办、招商和项目推进科负责人及其成员的严格教育管理监督，抓好分管领域等职责范围内党风廉政建设和反腐败工作。', null, '19');
INSERT INTO `fr_meeting_topic_task` VALUES ('137', '认真贯彻落实省市县委和区（镇）党委决策部署，协同开展产业转型提升行动、招大引强提升行动和创新赋能提升行动，扎实开展项目攻坚年、改革创新年活动。', null, '19');
INSERT INTO `fr_meeting_topic_task` VALUES ('138', '严格执行上级和本级有关招商和项目推进、营商环境建设工作涉及政策、制度、规定，完善优化相关制度规则，规范权力运行，强化廉政风险防控。认真抓好分管领域内三产服务业项目、人才资金监管，加强廉政风险防控。', null, '19');
INSERT INTO `fr_meeting_topic_task` VALUES ('139', '加强对分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '19');
INSERT INTO `fr_meeting_topic_task` VALUES ('140', '推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '19');
INSERT INTO `fr_meeting_topic_task` VALUES ('141', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '19');
INSERT INTO `fr_meeting_topic_task` VALUES ('142', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行党委集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '20');
INSERT INTO `fr_meeting_topic_task` VALUES ('143', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，既认真履行村党组织书记第一责任人责任，加强百联村全面从严治党研究部署和督促落实，重点抓好对村班子成员的监督，抓好职责范围内党风廉政建设和反腐败工作，深化清廉村居建设，又认真落实班子成员“一岗双责”，部署、检查、督促落实分管领域全面从严治党工作及责任落实工作，重点抓好村镇建设办（征迁、两新搬迁）负责人及其成员的严格教育管理监督。', null, '20');
INSERT INTO `fr_meeting_topic_task` VALUES ('144', '认真贯彻落实省市县委和区（镇）党委决策部署，扎实开展城乡建设提升行动、产业转型提升行动和项目攻坚年。', null, '20');
INSERT INTO `fr_meeting_topic_task` VALUES ('145', '认真抓好征迁、两新搬迁项目资金、质量等监管，加强廉政风险防控。严格执行落实有关禁止领导干部违反规定插手工程建设、公共资源交易、资产处置等制度规定。', null, '20');
INSERT INTO `fr_meeting_topic_task` VALUES ('146', '加强对百联村班子成员和分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '20');
INSERT INTO `fr_meeting_topic_task` VALUES ('147', '推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '20');
INSERT INTO `fr_meeting_topic_task` VALUES ('148', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '20');
INSERT INTO `fr_meeting_topic_task` VALUES ('149', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行班子集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '21');
INSERT INTO `fr_meeting_topic_task` VALUES ('150', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实分管领域全面从严治党工作及责任落实工作，重点抓好对分管领域党员干部，特别是招商和项目推进科“一把手”及其成员的严格教育管理监督，抓好分管领域等职责范围内党风廉政建设和反腐败工作。', null, '21');
INSERT INTO `fr_meeting_topic_task` VALUES ('151', '认真贯彻落实省市县委和区（镇）党委决策部署，协同开展产业转型提升行动、招大引强提升行动，扎实开展项目攻坚年活动。', null, '21');
INSERT INTO `fr_meeting_topic_task` VALUES ('152', '严格执行上级和本级有关招商和项目推进、营商环境建设、山海协作等工作涉及政策、制度、规定，完善优化相关制度规则，规范权力运行，强化廉政风险防控。', null, '21');
INSERT INTO `fr_meeting_topic_task` VALUES ('153', '加强对分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '21');
INSERT INTO `fr_meeting_topic_task` VALUES ('154', '推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '21');
INSERT INTO `fr_meeting_topic_task` VALUES ('155', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '21');
INSERT INTO `fr_meeting_topic_task` VALUES ('156', '加强党的政治建设，增强“四个意识”，坚定“四个自信”，做到“两个维护”，切实提高政治判断力、政治领悟力、政治执行力，坚决贯彻落实习近平总书记重要讲话和重要指示批示精神，坚决贯彻落实党中央决策部署，坚持全面从严治党战略方针，始终保持自我革命定力，推动更好发挥全面从严治党引领保障作用。认真贯彻执行民主集中制，严格执行班子集体决策制度，加强班子成员之间相互监督，讨论决策问题充分发表意见，有效发挥监督作用。严格遵守政治纪律和政治规矩，主动向上级请示报告工作。', null, '22');
INSERT INTO `fr_meeting_topic_task` VALUES ('157', '认真执行《党委（党组）落实全面从严治党主体责任规定》、《中共中央关于加强对“一把手”和领导班子监督的意见》和省委实施意见，按照深化全面从严治党“四责协同”机制、落实“五张责任清单”要求，认真履行“一岗双责”，部署、检查、督促落实分管领域全面从严治党工作及责任落实工作，重点抓好对分管领域党员干部，特别是农业农村办“一把手”及其成员的严格教育管理监督，抓好分管领域等职责范围内党风廉政建设和反腐败工作。', null, '22');
INSERT INTO `fr_meeting_topic_task` VALUES ('158', '认真贯彻落实省市县委和区（镇）党委决策部署，协同开展城乡建设提升行动、招大引强提升行动和民生保障提升行动，扎实开展项目攻坚年活动，切实抓好乡村振兴工作，推动农村环境全域美丽工作，落实耕地“非粮化”整治。', null, '22');
INSERT INTO `fr_meeting_topic_task` VALUES ('159', '严格执行上级和本级有关农业项目招商和项目推进、营商环境建设工作涉及政策、制度、规定，认真抓好农业项目、资金监管，规范权力运行，强化廉政风险防控。严格执行落实有关禁止领导干部违反规定插手工程建设、公共资源交易、资产处置等制度规定。', null, '22');
INSERT INTO `fr_meeting_topic_task` VALUES ('160', '协助抓好国有资产管理运营及处置方面监督。督促进一步抓好对村级“三资”监管。', null, '22');
INSERT INTO `fr_meeting_topic_task` VALUES ('161', '加强对分管部门（口子）党员干部的日常教育管理监督，运用好“四种形态”特别是第一种形态，让“红红脸、出出汗”成为常态。', null, '22');
INSERT INTO `fr_meeting_topic_task` VALUES ('162', '推动严格执行中央八项规定及其实施细则精神，持之以恒反“四风”，持续整治享乐主义、奢靡之风，力戒形式主义、官僚主义。', null, '22');
INSERT INTO `fr_meeting_topic_task` VALUES ('163', '严格廉洁自律，模范遵守执行全面从严治党各项规定，严格落实中央八项规定及其实施细则精神，坚决抵制其他党员干部及其家属亲友违规干预干部选拔任用、工程建设、执法司法等行为。带头做到廉洁从政、廉洁用权、廉洁修身、廉洁齐家，带头落实构建亲清政商关系要求，管住管好自己的家属亲友和身边工作人员，始终保持清正廉洁政治本色。', null, '22');

-- ----------------------------
-- Table structure for fr_ordinal_form
-- ----------------------------
DROP TABLE IF EXISTS `fr_ordinal_form`;
CREATE TABLE `fr_ordinal_form` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `content1` varchar(255) DEFAULT NULL,
  `content2` varchar(255) DEFAULT NULL,
  `content3` varchar(255) DEFAULT NULL,
  `content4` varchar(255) DEFAULT NULL,
  `content5` varchar(255) DEFAULT NULL,
  `content6` varchar(255) DEFAULT NULL,
  `content7` varchar(255) DEFAULT NULL,
  `content8` varchar(255) DEFAULT NULL,
  `content9` varchar(255) DEFAULT NULL,
  `create_time` datetime(6) DEFAULT NULL,
  `form_type` varchar(255) DEFAULT NULL,
  `integer1` int(11) DEFAULT NULL,
  `long_content1` longtext DEFAULT NULL,
  `long_content2` longtext DEFAULT NULL,
  `time1` datetime(6) DEFAULT NULL,
  `time2` datetime(6) DEFAULT NULL,
  `time3` datetime(6) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `dest_user_id` bigint(20) DEFAULT NULL,
  `request_user_id` bigint(20) DEFAULT NULL,
  `single_user1_id` bigint(20) DEFAULT NULL,
  `single_user2_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKdifgrs15jgvorqtcpbtpa29g9` (`dest_user_id`),
  KEY `FKp6hetolhiigkdojjxw7b94sj7` (`request_user_id`),
  KEY `FKsgvs4xyjcirgs21g5mn0fw7rq` (`single_user1_id`),
  KEY `FK7pyk5njwoupfmopu6twceuyfn` (`single_user2_id`),
  CONSTRAINT `FK7pyk5njwoupfmopu6twceuyfn` FOREIGN KEY (`single_user2_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKdifgrs15jgvorqtcpbtpa29g9` FOREIGN KEY (`dest_user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKp6hetolhiigkdojjxw7b94sj7` FOREIGN KEY (`request_user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKsgvs4xyjcirgs21g5mn0fw7rq` FOREIGN KEY (`single_user1_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fr_ordinal_form
-- ----------------------------
INSERT INTO `fr_ordinal_form` VALUES ('1', null, '农民建房领域', '村建办、相关行政村', '农村危房解危监督检查', null, null, null, null, null, null, '2022-06-28 15:53:48.085664', 'INSPECT', null, '4月19日至20日，带领村建办主任金文彬、副主任盛秀锋及2名工作人员，采取实地踏勘、检查台账等方式，对鉴定为C、D级危房的农房及解危情况进行检查。共计检查农房35幢。', '1、部分村存在危房排查、鉴定不全面、村里对危房底子不清的问题（整改措施：由村建办协同各相关村进一步抓好排查等工作，摸清底子，确保9月底前整改处置到位）；\n2、部分村已解危的D级危房场地硬化等设施配套没跟上（整改措施：由村建办协同属地村及时跟进配套硬化建设，确保6月底前整改到位）\n', '2022-04-19 00:00:00.000000', null, null, '2022-06-28 15:53:48.085664', null, '999', '17', null);
INSERT INTO `fr_ordinal_form` VALUES ('2', null, '《百步镇渔民公寓房安置实施意见》（上会稿）', '镇长办公会议商议提交', null, '口头表决', '同意按讨论确定的修改方案、意见等执行', '与会班子成员均充分发表了意见，“一把手”严格落实了末位表态规定，讨论意见总体较为一致，相关合理的修改建议纳入该意见正式文本。', null, null, null, '2022-06-29 13:20:52.067978', 'THREE', null, '拟提交确定百步镇渔民公寓房安置涉及的对象、房屋补偿、公寓房安置标准及价格、货币安置、渔船处置、奖励标准、工作流程等内容（具体见《实施意见》上会稿）', '沈鹏介绍了《百步镇渔民公寓房安置实施意见》（上会稿）形成的前期调研情况、条线研讨情况、镇长办公会议的商议修改情况，具体介绍涉及上会稿中对渔民公寓房安置的补偿对象、房屋补偿、公寓房安置标准及价格、货币安置、渔船处置、奖励标准、工作流程等内容。班子成员逐一发表意见，总体同意该安置意见。同时，也分别提出了修改完善意见。其中：蒋爱君认为1人户安置面积定为50平偏高，与面上原有政策有突破；蔡耀明、董佳浩、沈伟华建议货币补偿可参照征搬迁政策，应在现有基础上有提高至6300元一平；朱世鹏建议对“渔船处置”中的“有证”作出进一步明确；沈潇雅建议该政策要与目前的征搬迁政策保持一致；叶吴良认为货币安置6300一平价格过高，也容易导致后续隐患问题，建议调将至3500元一平为宜。其他班子成员表示总体同意该意见。赵小龙最后表态，认为该政策出台已几易其稿，原则同意以人口计算基准面积，单人户建议仍维持在40平，货币安置价格3500一平为宜，不能过高。政策定下来后加快跟进处置，彻底解决好这一民生问题。19名与会班子成员均发表了意见。', '2022-06-05 00:00:00.000000', null, null, '2022-06-29 13:20:52.067978', null, '999', '21', null);
INSERT INTO `fr_ordinal_form` VALUES ('3', null, '领导干部', '涉及本人重大事项/家庭大额投资、消费支出等情况，包括购置房产、替他人担保以及在国（境）外存款投资等情况', '不公开', null, null, null, null, null, null, '2022-06-29 13:22:46.368255', 'PERSONAL', null, '2022年4月16日，本人/配偶（许慧霞）购买纯电动小型轿车1辆（小鹏7，车价282800元），资金来源为家庭积蓄，用途：家用。2022年4月20日，该车登记上牌，机动车所有人：许慧霞，车牌号浙FDH0386', null, '2022-04-24 13:22:30.569000', null, null, '2022-06-29 13:22:46.368255', null, '3', null, null);

-- ----------------------------
-- Table structure for fr_ordinal_form_multi_user1
-- ----------------------------
DROP TABLE IF EXISTS `fr_ordinal_form_multi_user1`;
CREATE TABLE `fr_ordinal_form_multi_user1` (
  `ordinal_form_id` bigint(20) NOT NULL,
  `multi_user1_id` bigint(20) NOT NULL,
  KEY `FKa03aevtb47jg0oal6n9jy7ua1` (`multi_user1_id`),
  KEY `FK8nx8cloc9x5xx3jl4cudjg6sm` (`ordinal_form_id`),
  CONSTRAINT `FK8nx8cloc9x5xx3jl4cudjg6sm` FOREIGN KEY (`ordinal_form_id`) REFERENCES `fr_ordinal_form` (`id`),
  CONSTRAINT `FKa03aevtb47jg0oal6n9jy7ua1` FOREIGN KEY (`multi_user1_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fr_ordinal_form_multi_user1
-- ----------------------------

-- ----------------------------
-- Table structure for fr_progress
-- ----------------------------
DROP TABLE IF EXISTS `fr_progress`;
CREATE TABLE `fr_progress` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `percentage` int(11) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fr_progress
-- ----------------------------
INSERT INTO `fr_progress` VALUES ('1', null, '0', null, 'NONE_REVIEW', '2022-06-16 14:01:07.492768');
INSERT INTO `fr_progress` VALUES ('2', null, '0', null, 'NONE_REVIEW', '2022-06-16 14:03:04.440124');
INSERT INTO `fr_progress` VALUES ('3', null, '0', null, 'NONE_REVIEW', '2022-06-16 14:03:52.819136');
INSERT INTO `fr_progress` VALUES ('4', null, '0', null, 'NONE_REVIEW', '2022-06-16 14:04:27.382124');
INSERT INTO `fr_progress` VALUES ('5', null, '0', null, 'NONE_REVIEW', '2022-06-16 14:05:02.347901');
INSERT INTO `fr_progress` VALUES ('6', null, '0', null, 'NONE_REVIEW', '2022-06-16 14:05:31.826501');
INSERT INTO `fr_progress` VALUES ('7', null, '0', null, 'NONE_REVIEW', '2022-06-16 14:06:04.596347');
INSERT INTO `fr_progress` VALUES ('8', null, '0', null, 'NONE_REVIEW', '2022-06-16 15:09:03.236420');
INSERT INTO `fr_progress` VALUES ('9', null, '0', null, 'NONE_REVIEW', '2022-06-16 15:10:15.390824');
INSERT INTO `fr_progress` VALUES ('10', null, '0', null, 'NONE_REVIEW', '2022-07-05 16:52:18.111250');
INSERT INTO `fr_progress` VALUES ('11', null, '0', null, 'NONE_REVIEW', '2022-07-05 16:52:18.113956');
INSERT INTO `fr_progress` VALUES ('12', null, '0', null, 'NONE_REVIEW', '2022-07-05 16:52:18.114843');
INSERT INTO `fr_progress` VALUES ('13', null, '0', null, 'NONE_REVIEW', '2022-07-05 16:52:18.115846');
INSERT INTO `fr_progress` VALUES ('14', null, '0', null, 'NONE_REVIEW', '2022-07-05 16:54:38.120840');
INSERT INTO `fr_progress` VALUES ('15', null, '0', null, 'NONE_REVIEW', '2022-07-05 16:54:38.121840');
INSERT INTO `fr_progress` VALUES ('16', null, '0', null, 'NONE_REVIEW', '2022-07-05 16:54:38.122840');
INSERT INTO `fr_progress` VALUES ('17', null, '0', null, 'NONE_REVIEW', '2022-07-05 17:00:15.220767');

-- ----------------------------
-- Table structure for station
-- ----------------------------
DROP TABLE IF EXISTS `station`;
CREATE TABLE `station` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `dept` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK5su4gct055ywt5s569yaqr3t1` (`department_id`),
  CONSTRAINT `FK5su4gct055ywt5s569yaqr3t1` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of station
-- ----------------------------
INSERT INTO `station` VALUES ('1', null, '党委', '1');
INSERT INTO `station` VALUES ('2', null, '党委书记、管委会主任', '2');
INSERT INTO `station` VALUES ('3', null, '党委副书记、镇长、管委会副主任', '3');
INSERT INTO `station` VALUES ('4', null, '人大主席', '3');
INSERT INTO `station` VALUES ('5', null, '党委副书记 (党群)', '3');
INSERT INTO `station` VALUES ('6', null, '党委副书记 (政法)', '3');
INSERT INTO `station` VALUES ('7', null, '党委委员、纪委书记', '3');
INSERT INTO `station` VALUES ('8', null, '党委委员 (组织)', '3');
INSERT INTO `station` VALUES ('9', null, '党委委员 (宣传)', '3');
INSERT INTO `station` VALUES ('10', null, '党委委员 (统战)', '3');
INSERT INTO `station` VALUES ('11', null, '党委委员 (政法)', '3');
INSERT INTO `station` VALUES ('12', null, '党委委员、人武部部长', '3');
INSERT INTO `station` VALUES ('13', null, '党委委员、派出所所长', '3');
INSERT INTO `station` VALUES ('14', null, '人大副主席', '3');
INSERT INTO `station` VALUES ('15', null, '副镇长 (工业)', '3');
INSERT INTO `station` VALUES ('16', null, '副镇长 (社会事业)', '3');
INSERT INTO `station` VALUES ('17', null, '副镇长 (城建交通)', '3');
INSERT INTO `station` VALUES ('18', null, '副镇长 (人才、招商)', '3');
INSERT INTO `station` VALUES ('19', null, '副镇长 (征迁)', '3');
INSERT INTO `station` VALUES ('20', null, '管委会副主任 (招商)', '3');
INSERT INTO `station` VALUES ('21', null, '管委会副主任 (农业)', '3');
INSERT INTO `station` VALUES ('22', null, '副镇长级干部 (蒋爱君)', '3');
INSERT INTO `station` VALUES ('23', null, '副镇长级干部 (赵生良)', '3');
INSERT INTO `station` VALUES ('24', null, '副镇长级干部 (张明)', '3');
INSERT INTO `station` VALUES ('25', null, '副镇长级干部 (张陆君)', '3');
INSERT INTO `station` VALUES ('26', null, '副镇长级干部 (刘爱群)', '3');
INSERT INTO `station` VALUES ('27', null, '副镇长级干部 (唐惠平)', '3');
INSERT INTO `station` VALUES ('28', null, '纪委', '4');
INSERT INTO `station` VALUES ('29', null, '组织', '5');
INSERT INTO `station` VALUES ('30', null, '党政综合办公室主任、纪委委员（全面统筹）', '6');
INSERT INTO `station` VALUES ('31', null, '党政综合办公室副主任、人大办公室副主任（两办信息、人大工作、政府出纳、信息公开）', '6');
INSERT INTO `station` VALUES ('32', null, '党政综合办公室工作人员（文书）', '6');
INSERT INTO `station` VALUES ('33', null, '人武干事', '6');
INSERT INTO `station` VALUES ('34', null, '党政综合办公室工作人员、百联村书记助理、团委副书记', '6');
INSERT INTO `station` VALUES ('35', null, '党政综合办公室工作人员、镇长秘书，（OA收发、数字化改革（党政智治）、保密工作）', '6');
INSERT INTO `station` VALUES ('36', null, '党政综合办公室工作人员（司机、文书）', '6');
INSERT INTO `station` VALUES ('37', null, '党政综合办公室工作人员（档案）', '6');
INSERT INTO `station` VALUES ('38', null, '信息攥写、防疫物资', '6');
INSERT INTO `station` VALUES ('39', null, '党政综合办公室工作人员（档案、文印）', '6');
INSERT INTO `station` VALUES ('40', null, '党建工作办公室主任、团委书记、妇联副主席（全面统筹。主要负责信息、考核等）', '7');
INSERT INTO `station` VALUES ('41', null, '纪委副书记（正股级）（纪委工作）', '7');
INSERT INTO `station` VALUES ('42', null, '党建工作办公室工作人员（一支队伍管执法）', '7');
INSERT INTO `station` VALUES ('43', null, '党建工作办公室工作人员（协助纪委工作）', '7');
INSERT INTO `station` VALUES ('44', null, '党建工作办公室工作人员（人事、档案）', '7');
INSERT INTO `station` VALUES ('45', null, '工业社区党支部副书记（协助党员发展等组织事务；工业社区事务）', '7');
INSERT INTO `station` VALUES ('46', null, '党建工作办公室工作人员（工会、关工委）', '7');
INSERT INTO `station` VALUES ('47', null, '社会治理办公室副主任（保留正股长级）（主持全面工作（信访维稳、禁毒、反邪教））', '8');
INSERT INTO `station` VALUES ('48', null, '司法所所长（司法行政）', '8');
INSERT INTO `station` VALUES ('49', null, '综治、平安、四个平台、微嘉园', '8');
INSERT INTO `station` VALUES ('50', null, '社会治理办公室工作人员（人民调解）', '8');
INSERT INTO `station` VALUES ('51', null, '社会治理办公室工作人员（中心报账、禁毒、信访）', '8');
INSERT INTO `station` VALUES ('52', null, '社会治理办公室工作人员。综治日常内勤工作（反恐、信访、考核、报表）', '8');
INSERT INTO `station` VALUES ('53', null, '社会治理办公室工作人员（社区矫正、安置帮教）', '8');
INSERT INTO `station` VALUES ('54', null, '社会治理办公室工作人员（禁毒）', '8');
INSERT INTO `station` VALUES ('55', null, '社会治理办公室工作人员（信访、12349、禁毒）', '8');
INSERT INTO `station` VALUES ('56', null, '社会治理办公室工作人员（禁毒、调解）', '8');
INSERT INTO `station` VALUES ('57', null, '信访接待', '8');
INSERT INTO `station` VALUES ('58', null, '反诈宣讲员', '8');
INSERT INTO `station` VALUES ('59', null, '司法行政内勤（人民调解、台账）', '8');
INSERT INTO `station` VALUES ('60', null, '社会治理办公室工作人员（综合指挥室、四个平台、微嘉园、驾证式系统）', '8');
INSERT INTO `station` VALUES ('61', null, '百步集镇片区专职网格员', '8');
INSERT INTO `station` VALUES ('62', null, '横港集镇专职网格员', '8');
INSERT INTO `station` VALUES ('63', null, '横港第三网格专职网格员', '8');
INSERT INTO `station` VALUES ('64', null, '五丰第六网格专职网格员', '8');
INSERT INTO `station` VALUES ('65', null, '农丰第二网格专职网格员', '8');
INSERT INTO `station` VALUES ('66', null, '新升第一网格专职网格员', '8');
INSERT INTO `station` VALUES ('67', null, '矛调中心', '8');
INSERT INTO `station` VALUES ('68', null, '人民调解', '8');
INSERT INTO `station` VALUES ('69', null, '经济发展办公室主任（负责经发办全面工作）', '9');
INSERT INTO `station` VALUES ('70', null, '综合服务中心副主任（科技、三产、经信、商务，企业联审；达产履约）', '9');
INSERT INTO `station` VALUES ('71', null, '综合服务中心副主任（劳动、安全、项目推进、园区管理、发改（能耗）双控，负责对接发改局应急局人社局卫计局条线科室、事故处理、重点时段专项整治、星创湾、入区入园、项目推进等）', '9');
INSERT INTO `station` VALUES ('72', null, '综合服务中心副主任（统计、创建，全面负责统计各条线工作，做好部门对接和统筹安排；做好统计数据分析、调研；各项创建、验收工作、统计普查工作等）', '9');
INSERT INTO `station` VALUES ('73', null, '经济发展办公室工作人员（办公室事务、报账）', '9');
INSERT INTO `station` VALUES ('74', null, '经济发展办公室工作人员（项目备案、外贸、旅游、低散乱污、腾退、收储（对接经信局行政许可科、产业转型升级科；商务局外经外贸科））', '9');
INSERT INTO `station` VALUES ('75', null, '经济发展办公室工作人员（固定资产投资统计工作、劳动工资统计工作、科技统计工作、统计“双强”行动(星级创建工作)、统计服务与政务信息工作、统计法制工作）', '9');
INSERT INTO `station` VALUES ('76', null, '经济发展办公室工作人员（信息宣传、培大育强、营商环境、股改上市（对接经信局企业培育科、企业服务中心；财政局经融办））', '9');
INSERT INTO `station` VALUES ('77', null, '经济发展办公室工作人员（亩均绩效、数字化、两高一低、技改投资（对接经信局产业转型科、数字经济发展科）', '9');
INSERT INTO `station` VALUES ('78', null, '经济发展办公室工作人员（兼工业镇长助理、技能培训、协助发改（能耗）双控、电力化改革、项目推进）', '9');
INSERT INTO `station` VALUES ('79', null, '经济发展办公室工作人员（科技创新、服务业发展、投资（对接科技局；商务局服务业发展中心））', '9');
INSERT INTO `station` VALUES ('80', null, '经济发展办公室工作人员（支部工作、协助重点工作及商会工作）', '9');
INSERT INTO `station` VALUES ('81', null, '劳动纠纷、职业卫生、日常监督、星创湾现场（对接人社局、卫计局）', '9');
INSERT INTO `station` VALUES ('82', null, '安全生产、小微园区监管、日常监督、特种设备、污水零直排（对接应急局、墙改办、市场监管）', '9');
INSERT INTO `station` VALUES ('83', null, '税务协理、科协、电子商务、小微园系统建设（对接国税于城分局；科协；商务局商贸电商科；经信局园区科）', '9');
INSERT INTO `station` VALUES ('84', null, '规上工业统计工作、能源和水消费统计工作、工业经济效益、景气调查统计工作', '9');
INSERT INTO `station` VALUES ('85', null, '就业条线、安全资料、安全培训、工程资料', '9');
INSERT INTO `station` VALUES ('86', null, '农业统计工作、城乡一体化住户调查工作、粮食生产统计监测调查工作、畜禽监测。', '9');
INSERT INTO `station` VALUES ('87', null, '规模以下工业抽样调查统计工作、服务业统计工作（贸易统计）、名录库工作、旅游业统计、其他临时性或一次性调查工作', '9');
INSERT INTO `station` VALUES ('88', null, '信息员，镇相关工作对接处理，上级交办问题处理，日常巡查检查，管家工作管理。', '9');
INSERT INTO `station` VALUES ('89', null, '特色小镇统计（年度考核）工作、开发区统计（年度考核）工作、链长制、小城市试点考核、嘉兴市重大产业平台', '9');
INSERT INTO `station` VALUES ('90', null, '商会、园区党建', '9');
INSERT INTO `station` VALUES ('91', null, '星创湾资料、入园入区资料、疫情防控、发改（能耗）双控报表', '9');
INSERT INTO `station` VALUES ('92', null, '社会事务服务管理办公室主任，全面统筹负责教育工作、食品药品安全工作，统筹民政、残联、退役军人、三社、卫健、疫情防控等各项工作', '10');
INSERT INTO `station` VALUES ('93', null, '社会事务服务管理办公室副主任，牵头负责民政、残联工作', '10');
INSERT INTO `station` VALUES ('94', null, '负责民政工作', '10');
INSERT INTO `station` VALUES ('95', null, '社会治理办公室副主任、行政执法办公室副主任、教导员。牵头负责退役军人、三社工作，协助食品药品安全工作', '10');
INSERT INTO `station` VALUES ('96', null, '社会组织党支部书记、社区党支部委员，负责慈善工作、协助三社工作', '10');
INSERT INTO `station` VALUES ('97', null, '负责退役军人工作', '10');
INSERT INTO `station` VALUES ('98', null, '妇联主席、社会事务服务管理办公室副主任、政务服务办公室副主任，负责便民服务中心', '10');
INSERT INTO `station` VALUES ('99', null, '居民医保', '10');
INSERT INTO `station` VALUES ('100', null, '城乡居民基本养老保险、居民医保', '10');
INSERT INTO `station` VALUES ('101', null, '负责残联工作', '10');
INSERT INTO `station` VALUES ('102', null, '职工医保', '10');
INSERT INTO `station` VALUES ('103', null, '就业，创业，失业窗口，职工医保', '10');
INSERT INTO `station` VALUES ('104', null, '综合服务中心党支部副书记，牵头负责疫情防控、爱国卫生、计生工作。', '10');
INSERT INTO `station` VALUES ('105', null, '负责计生统计、药具、档案、流动人口计生工作', '10');
INSERT INTO `station` VALUES ('106', null, '负责计生协活动、服务、计生政策、党支部联络员', '10');
INSERT INTO `station` VALUES ('107', null, '疫情防控', '10');
INSERT INTO `station` VALUES ('108', null, '负责爱国卫生、红十字会、报账', '10');
INSERT INTO `station` VALUES ('109', null, '负责信息工作、协助食药安全工作', '10');
INSERT INTO `station` VALUES ('110', null, '村镇建设管理办公室主任，统管村建办工作、配合城建镇长做好相关工作、统筹协调安排相关工作', '11');
INSERT INTO `station` VALUES ('111', null, '综合服务中心副主任、负责巡查、创建等。交通大会战、文明创建、美丽城镇、农村公路管理站、安全生产等镇级工作、日常巡查相关事宜、政府投资项目统计事宜、农村生活污水', '11');
INSERT INTO `station` VALUES ('112', null, '招商和项目推进科副科长，负责项目前期。政府投资项目前期办证、后期竣工事宜、国土空间利用（规划）、农民建房规划', '11');
INSERT INTO `station` VALUES ('113', null, '村镇建设管理办公室工作人员', '11');
INSERT INTO `station` VALUES ('114', null, '招投标、农民建房。镇招投标中心工作、农民建房（具体工作）、美丽城镇相关工作（具体工作）', '11');
INSERT INTO `station` VALUES ('115', null, '政府投资项目全过程管理、交通大会战相关工作（具体工作）、农村公路管理站台账', '11');
INSERT INTO `station` VALUES ('116', null, '镇级小型项目现场管理、线性工程（G528等）对下工作', '7');
INSERT INTO `station` VALUES ('117', null, '交通建管', '11');
INSERT INTO `station` VALUES ('118', null, '财务、统计、投资入库、档案', '11');
INSERT INTO `station` VALUES ('119', null, '镇级小型项目现场管理；日常巡查相关工作（上级督察、专项检查等）', '11');
INSERT INTO `station` VALUES ('120', null, '政府投资项目现场管理；日常巡查相关工作（上级督察、专项检查等）', '11');
INSERT INTO `station` VALUES ('121', null, '交通管理', '11');
INSERT INTO `station` VALUES ('122', null, '政府投资项目现场管理；文明创建相关工作（具体工作）', '11');
INSERT INTO `station` VALUES ('123', null, '在建档案管理（三楼档案室），包括行成电子档；配合经办人办理前期、归档工作；政府投资领导小组会议资料整理', '11');
INSERT INTO `station` VALUES ('124', null, '道路、农房、码头、燃气等日常巡查；建筑工地文明施工、防疫工作等巡查；其他镇级工作巡查；', '11');
INSERT INTO `station` VALUES ('125', null, '交通大会战台账整理；农村公路管理台账整理；镇级小型项目现场管理；', '11');
INSERT INTO `station` VALUES ('126', null, '办公室统筹', '11');
INSERT INTO `station` VALUES ('127', null, '征搬迁工作', '11');
INSERT INTO `station` VALUES ('128', null, '档案、内勤', '11');
INSERT INTO `station` VALUES ('129', null, '村镇建设管理办公室党支部书记，征搬迁工作、侧重负责征迁', '11');
INSERT INTO `station` VALUES ('130', null, '财政办公室主任、综合服务中心党支部书记，统筹协调财政办日常工作；财政复核；合同审核；财务审批', '12');
INSERT INTO `station` VALUES ('131', null, '协助财政办主任开展工作；融资；会计（总工会、机关工会）', '12');
INSERT INTO `station` VALUES ('132', null, '综合服务中心副主任、事业会计，会计（站办、保留账户、党群服务中心、政府本级、党政办、党建办）；站办账户（出纳蔡海萍）复核；票据管理；', '12');
INSERT INTO `station` VALUES ('133', null, '站办专项资金出纳；会计（慈善、水利建设、农合联、镇食堂）； 党费户、党群服务中心、农合联、慈善、保留账户（出纳蔡海萍）复核', '12');
INSERT INTO `station` VALUES ('134', null, '出纳（财政办、镇食堂、站办、党费户、党群服务中心、农合联、党政、党建、慈善、保留账户、三泽物业）', '12');
INSERT INTO `station` VALUES ('135', null, '10家公司出纳（开发区投资公司、城建公司、百尚公司、百新公司、基础、富村、尚成公司）', '11');
INSERT INTO `station` VALUES ('136', null, '国有公司财务印鉴章管理；9家国有公司会计（开发区投资、尚成、三泽物业、百尚开发、百新公司）；债务申报、债务表、快报、凭证装订整理、工程款台账', '10');
INSERT INTO `station` VALUES ('137', null, '总会计账、预决算编制、政府采购、报表上报（财政支出、三公经费等月报）；党政办、党建办账户（出纳蔡海萍）复核；工资奖金核算；', '12');
INSERT INTO `station` VALUES ('138', null, '负责国有资产日常管理工作；各国有公司公章管理', '12');
INSERT INTO `station` VALUES ('139', null, '协助管理国有资产的使用和经营工作', '12');
INSERT INTO `station` VALUES ('140', null, '10家公司付款复核工作；会计（城建公司、基础公司、富村公司、党费户）、社保办理、公积金业务；工商变更；固定资产管理平台（每月更新）；资产云系统（资产月报）、国有资产年报', '12');
INSERT INTO `station` VALUES ('141', null, '协助监督、检查国有资产管理、维护和使用情况，建立健全相关台帐，合同签订，国资收租；合同备案管理', '12');
INSERT INTO `station` VALUES ('142', null, '农业农村办公室主任，统筹全面工作', '13');
INSERT INTO `station` VALUES ('143', null, '综合服务中心副主任（分管农经），农合联、农民增收、农业投资、农经管理', '13');
INSERT INTO `station` VALUES ('144', null, '经作（蔬菜、蚕桑）、粮食生产功能（非粮化）、气象、农业招商引资、产业化项目管理', '13');
INSERT INTO `station` VALUES ('145', null, '综合服务中心副主任（分管农业），畜牧、水产与渔政、农村人居环境', '13');
INSERT INTO `station` VALUES ('146', null, 'UNKNOWN', '13');
INSERT INTO `station` VALUES ('147', null, '农机监理', '13');
INSERT INTO `station` VALUES ('148', null, '农机监理、农民培训等农培工作', '13');
INSERT INTO `station` VALUES ('149', null, '栽培、土肥、植保、农业设施用地报批、农业保险', '13');
INSERT INTO `station` VALUES ('150', null, '畜牧、农村人居环境、防疫', '13');
INSERT INTO `station` VALUES ('151', null, '林业、水果、科教（含生态、能源、秸秆禁烧、清洁农场、项目申报等）', '13');
INSERT INTO `station` VALUES ('152', null, '水政监察和水资源管理、工程质监和安全、水利工程、防汛防台抗旱、灾情统计、考核数据及材料整理、档案、党务', '13');
INSERT INTO `station` VALUES ('153', null, '五个村会计、票据管理、农村财务审计、壮大村级集体经济', '13');
INSERT INTO `station` VALUES ('154', null, '十个村出纳、一事一议、扶贫', '13');
INSERT INTO `station` VALUES ('155', null, '水利规划、水文、防汛防台抗旱、水利信息、防汛仓库管理、灾情统计、档案、报账', '13');
INSERT INTO `station` VALUES ('156', null, '水利规划、工程质监和安全、水利工程、防汛防台抗旱', '13');
INSERT INTO `station` VALUES ('157', null, '五个村会计、村级产权交易、农村财务审计', '13');
INSERT INTO `station` VALUES ('158', null, '种子、惠农补贴、信息、农产品质量安全及三品认证', '13');
INSERT INTO `station` VALUES ('159', null, '招商和项目推进科科长，全面负责招商和项目推进科工作，分管招商引资工作，负责招商引资目标责任制考核指标落实。', '14');
INSERT INTO `station` VALUES ('160', null, '综合服务中心主任', '14');
INSERT INTO `station` VALUES ('161', null, '招商和项目推进科副科长，负责驻沪、项目招引、项目推进等工作，协助长三角一体化目标责任制考核指标落实。', '14');
INSERT INTO `station` VALUES ('162', null, '负责文字材料的撰写，相关数据统计、分析、上报，上级各类统计信息的填报，以及目标责任制考核情况汇总、通报等工作，协助外语翻译工作。', '14');
INSERT INTO `station` VALUES ('163', null, '招商和项目推进服务中心副主任，全面负责项目推进、综合服务等工作，联系招商二组项目推进工作。', '14');
INSERT INTO `station` VALUES ('164', null, '负责项目招引、项目推进、人才、统战等工作，协助人才、科创工作目标责任制考核指标落实，协助信息宣传报道。', '14');
INSERT INTO `station` VALUES ('165', null, '负责项目招引、项目推进等工作，协助内资招商目标责任制考核指标落实。', '14');
INSERT INTO `station` VALUES ('166', null, '负责项目招引、项目推进等工作，协助项目推进节点化管理考核指标等工作。', '14');
INSERT INTO `station` VALUES ('167', null, '负责二三产项目推进、协调等全流程服务，以及项目推进节点化管理考核指标等工作，联系招商三组项目推进工作。', '14');
INSERT INTO `station` VALUES ('168', null, '负责项目招引、项目推进、服务业等工作，协助服务业工作目标责任制考核指标落实。', '14');
INSERT INTO `station` VALUES ('169', null, '负责信息宣传报道、档案管理、财务报销、后勤保障、招商周报编辑等工作，协助文字材料撰写、数据统计和统战工作，联系招商一组项目推进工作。', '14');
INSERT INTO `station` VALUES ('170', null, '负责外资项目招引，外语翻译，外国协会、外资中介、外商人员的日常联系沟通、信息收集等工作，协助外资招商目标责任制考核指标落实。', '14');
INSERT INTO `station` VALUES ('171', null, '驾驶员', '14');
INSERT INTO `station` VALUES ('172', null, '综合服务中心副主任、文化副站长（主持工作），主持镇文化分馆、文化站工作，负责日常事务；活动策划组织（含品牌节庆活动开展）；基础设施建设及重点工程推进；文化队伍建设；各类创建；指导、督促各村文化礼堂（新建、提升、创建评定、活动等）。', '15');
INSERT INTO `station` VALUES ('173', null, '综合服务中心副主任，文化化产业；文化市场（含扫黄打非）；学习强国日常管理；中心工作联络；文化场所疫情防控；负责图书分馆、企业分馆、文创馆、横港印象馆、名师工作室等场馆活动开展、运作管理', '15');
INSERT INTO `station` VALUES ('174', null, '沈奕云：指导镇级舞蹈节目编排；平台填报处理（各文化平台）；指导村创编节目、会务、演出服管理；协助活动策划组织及品牌节庆活动开展；文艺繁荣工程；协助文化礼堂工作；文保和非遗。', '15');
INSERT INTO `station` VALUES ('175', null, '账（宣文统旅）；材料撰写及课题研究；站内工作信息统筹、文学理论部工作；协助文明日常工作；意识形态（含网络舆情）。', '15');
INSERT INTO `station` VALUES ('176', null, '文明日常工作；协助课题及材料撰写、站内信系、文学理论部工作；新闻信息宣传（含短视频、爱海盐发布、学习强国供稿）', '15');
INSERT INTO `station` VALUES ('177', null, '文明创建；体育（含老年体协）；摄影及视觉部工作；台账档案；四个平台处理；负责线上线下各阵地管理及外宣工作；后勤。', '15');
INSERT INTO `station` VALUES ('178', null, '横港村宣传文化工作', '15');
INSERT INTO `station` VALUES ('179', null, '逍恬村宣传文化工作，同时负责百步分馆表演艺术指导部相关工作', '15');
INSERT INTO `station` VALUES ('180', null, '农丰村宣传文化工作（含礼堂书屋）', '15');
INSERT INTO `station` VALUES ('181', null, '桃北村宣传文化工作', '15');
INSERT INTO `station` VALUES ('182', null, '五丰村宣传文化工作（含礼堂书屋）', '15');
INSERT INTO `station` VALUES ('183', null, '百联村宣传文化工作，同时负责站内培训方案策划和组织', '15');
INSERT INTO `station` VALUES ('184', null, '胜利村宣传文化工作', '15');
INSERT INTO `station` VALUES ('185', null, '超同村宣传文化工作', '15');
INSERT INTO `station` VALUES ('186', null, '得胜村宣传文化工作', '15');
INSERT INTO `station` VALUES ('187', null, '新升村宣传文化工作', '15');
INSERT INTO `station` VALUES ('188', null, '负责一支队伍管执法及党建、创建、队伍建设等；负责大综合一体化改革等相关工作。', '16');
INSERT INTO `station` VALUES ('189', null, '生态环境执法分队队长，主持全面工作，环保督查、上级交办、转办件的办理，日常案件办理，其它与局、镇等工作对接。', '17');
INSERT INTO `station` VALUES ('190', null, '负责环保督查件、上级交办、转办件的办理，日常案件办理，日常巡查检查，信访处理，信息员。', '17');
INSERT INTO `station` VALUES ('191', null, '驾驶员，信访处理，日常巡查检查。', '17');
INSERT INTO `station` VALUES ('192', null, '档案管理，材料、数据的收集和报送，固废平台管理员，后勤管理。', '17');
INSERT INTO `station` VALUES ('193', null, '市场监管局百步分局局长、党支部书记，全面主持分局各项工作，重点牵头投诉举报、放心消费、行政审批、财物、人事、党建、属地交办等工作，联系消保科、人事科、办公室等。', '18');
INSERT INTO `station` VALUES ('194', null, '市场监管局百步分局副局长，全面参与分局各项工作，重点牵头知识产权保护中心（快维中心）筹建、食品安全、质量标准、农贸市场监管、行政审批信息宣传等工作，联系知识产权科、市场科、食品科、质量标准科、审批科、商家共治联盟。', '18');
INSERT INTO `station` VALUES ('195', null, '市场监管局百步分局副局长，全面参与分局各项工作，重点牵头信用监管、稽查执法、特设安全、药械监管等工作，联系信用科、执法队、特设科、药械科、品牌指导站。', '18');
INSERT INTO `station` VALUES ('196', null, '重点负责市场主体年报、日常巡查、疫情防控、有关催报（填报）等工作，以及交办的其他工作。', '18');
INSERT INTO `station` VALUES ('197', null, '重点负责行政审批、信息宣传、党务、人事等工作，以及交办的其他工作。', '18');
INSERT INTO `station` VALUES ('198', null, '重点负责知识产权保护中心（快维中心）筹建、食品安全、质量标准、农贸市场监管、信息宣传、行政执法、财物等工作，以及交办的其他工作。', '18');
INSERT INTO `station` VALUES ('199', null, '重点负责信用监管、稽查执法、特设安全、药械监管、信息宣传（牵头）、等工作，以及交办的其他工作。', '18');
INSERT INTO `station` VALUES ('200', null, '重点负责市场主体年报、个私协会、日常巡查、疫情防控、小微企业调查、车辆维保、文件收发等工作，以及交办的其他工作。', '18');
INSERT INTO `station` VALUES ('201', null, '综合行政执法中队中队长（主持工作），统筹负责综合行政执法、三改一拆、四位一体（人居环境）、五水共治、垃圾分类、队伍建设等。承接一支队伍管执法相关工作。', '19');
INSERT INTO `station` VALUES ('202', null, '负责执法办案工作，餐厨垃圾以及犬类管理联络员。参与横港片综合巡查组巡查工作。', '19');
INSERT INTO `station` VALUES ('203', null, '内勤，负责综合材料、信息宣传、统计、档案、智慧城管系统、执法办案等工作。', '19');
INSERT INTO `station` VALUES ('204', null, '负责执法办案工作，参与百步片综合巡查组巡查工作。', '19');
INSERT INTO `station` VALUES ('205', null, '局借调人员，负责执法办案工作，参与横港片综合巡查组巡查工作。', '19');
INSERT INTO `station` VALUES ('206', null, '负责行政审批工作。', '19');
INSERT INTO `station` VALUES ('207', null, '协助支部书记做好党建工作，协助教导员做好四位一体和垃圾分类等工作', '19');
INSERT INTO `station` VALUES ('208', null, '百步集镇市容管理组组长，负责百步集镇市容市貌管理（户外广告、店招店牌、餐饮油烟、越店经营、流动摊贩开店审批等）、犬类管理及佳惠物业考核管理。', '19');
INSERT INTO `station` VALUES ('209', null, '百步片四位一体组长，牵头负责百步片四位一体工作，工业垃圾打包站、中转站管理。', '19');
INSERT INTO `station` VALUES ('210', null, '内勤及财务，负责（四位一体、垃圾分类、五水共治、人居环境）内勤，采购、报账及综治系统管理。', '19');
INSERT INTO `station` VALUES ('211', null, '横港片综合巡查组组长，负责横港片全域违建巡查和管控、农村主要道路流动摊贩管理，行政执法领域违法行为巡查等。协助三改一拆、四位一体和垃圾分类等工作。', '19');
INSERT INTO `station` VALUES ('212', null, '综合分队', '19');
INSERT INTO `station` VALUES ('213', null, '横港片综合巡查组组员。', '19');
INSERT INTO `station` VALUES ('214', null, '百步片综合巡查组组长，负责百步片全域违建巡查和管控、农村主要道路流动摊贩管理，行政执法领域违法行为巡查等。协助三改一拆、四位一体和垃圾分类等工作。', '19');
INSERT INTO `station` VALUES ('215', null, '头负责三改一拆工作。', '19');
INSERT INTO `station` VALUES ('216', null, '垃圾分类组长，牵头负责百步镇全域垃圾分类工作。', '19');
INSERT INTO `station` VALUES ('217', null, '横港片四位一体组长，牵头负责横港片四位一体工作，餐厨垃圾点、建筑垃圾场、中转站管理。', '19');
INSERT INTO `station` VALUES ('218', null, '横港集镇市容管理组组长，负责横港集镇市容市貌管理（户外广告、店招店牌、餐饮油烟、越店经营、流动摊贩、开店审批等）。', '19');
INSERT INTO `station` VALUES ('219', null, '横港集镇市容管理组组员', '19');
INSERT INTO `station` VALUES ('220', null, '百步片巡查组组员。', '19');
INSERT INTO `station` VALUES ('221', null, '自然资源规划局百步国土所所长，全面负责', '20');
INSERT INTO `station` VALUES ('222', null, '农房审批、农房发证、档案管理、林业管理，协助其他工作等其他工作。', '20');
INSERT INTO `station` VALUES ('223', null, '信息一张图、用地批后监管、土地执法监察、土地调查变更、宣传、设施用地审批与管理、临时用地审批与管理、土地开发、土地整治、耕地占补平衡、土地整理', '20');
INSERT INTO `station` VALUES ('224', null, '自然资源规划局百步国土所副所长，负责党建工作、用地预审、农转用（征收）报批、供地、收储、土地调查变更、土地执法监察、信访；协助土地开发、土地整治、耕地占补平衡、土地整理、设施用地审批与管理、临时用地审批与管理。', '20');
INSERT INTO `station` VALUES ('225', null, '档案管理、办公室内勤、协助土地执法监察等工作', '20');
INSERT INTO `station` VALUES ('226', null, '社区书记', '21');
INSERT INTO `station` VALUES ('227', null, '社区干部', '21');
INSERT INTO `station` VALUES ('228', null, '村书记', '22');
INSERT INTO `station` VALUES ('229', null, '村干部', '22');
INSERT INTO `station` VALUES ('230', null, '村书记', '23');
INSERT INTO `station` VALUES ('231', null, '村干部', '23');
INSERT INTO `station` VALUES ('232', null, '村书记', '24');
INSERT INTO `station` VALUES ('233', null, '村干部', '24');
INSERT INTO `station` VALUES ('234', null, '村书记', '25');
INSERT INTO `station` VALUES ('235', null, '村干部', '25');
INSERT INTO `station` VALUES ('236', null, '村书记', '26');
INSERT INTO `station` VALUES ('237', null, '村干部', '26');
INSERT INTO `station` VALUES ('238', null, '村书记', '27');
INSERT INTO `station` VALUES ('239', null, '村干部', '27');
INSERT INTO `station` VALUES ('240', null, '村书记', '28');
INSERT INTO `station` VALUES ('241', null, '村干部', '28');
INSERT INTO `station` VALUES ('242', null, '村书记', '29');
INSERT INTO `station` VALUES ('243', null, '村干部', '29');
INSERT INTO `station` VALUES ('244', null, '村书记', '30');
INSERT INTO `station` VALUES ('245', null, '村干部', '30');
INSERT INTO `station` VALUES ('246', null, '村书记', '31');
INSERT INTO `station` VALUES ('247', null, '村干部', '31');
INSERT INTO `station` VALUES ('999', null, '系统管理员', '999');

-- ----------------------------
-- Table structure for ta_assessment
-- ----------------------------
DROP TABLE IF EXISTS `ta_assessment`;
CREATE TABLE `ta_assessment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `level_one` varchar(255) DEFAULT NULL,
  `level_two` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `point` decimal(19,2) DEFAULT NULL,
  `standard` longtext DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `value_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ta_assessment
-- ----------------------------
INSERT INTO `ta_assessment` VALUES ('1', 'CZ2022-0001', '2022-06-29', '实际利用外资', '合同利用外资', '合同利用外资', '0.50', '完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分；', '1.05亿美元', null);
INSERT INTO `ta_assessment` VALUES ('2', 'CZ2022-0002', '2022-06-29', '实际利用外资', '实际利用外资', '实际利用外资', '2.00', '（完成率1.4分，规模贡献0.6分）。完成率达100%及以上的得该项赋分，完成率达80%（含）以上的按完成率计算得分，完成率不足80%的，不得分；规模贡献按（本值/最大值）*赋分计算得分。', '3400万美元', null);
INSERT INTO `ta_assessment` VALUES ('3', 'CZ2022-0003', '2022-06-29', '实际利用外资', '高技术产业实际利用外资占比', '高技术产业实际利用外资占比', '0.50', '完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分。', '40%', null);
INSERT INTO `ta_assessment` VALUES ('4', 'CZ2022-0004', '2022-06-29', '内资招引', '内资新增工业用地备案投资额', '内资新增工业用地备案投资额', '1.00', '（完成率0.7分，规模贡献0.3分）。完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分，规模贡献按（本值/最大值）*赋分计算得分。', '30亿元', null);
INSERT INTO `ta_assessment` VALUES ('5', 'CZ2022-0005', '2022-06-29', '内资招引', '亿元以上备案内资工业项目', '亿元以上备案内资工业项目', '1.00', '完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分。', '7个', null);
INSERT INTO `ta_assessment` VALUES ('6', 'CZ2022-0006', '2022-06-29', '服务业项目招引', '引进备案总投资2000万元以上服务业项目，或当年注册2000万以上，年营收超500万元或当年实到资金20%以上的零增地生产性服务业项目，其中当年引进当年月度上规纳统（其中批发超2亿元），考核可折算为两个项目。', '引进备案总投资2000万元以上服务业项目，或当年注册2000万以上，年营收超500万元或当年实到资金20%以上的零增地生产性服务业项目，其中当年引进当年月度上规纳统（其中批发超2亿元），考核可折算为两个项目。', '1.00', '完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分。', '3个', null);
INSERT INTO `ta_assessment` VALUES ('7', 'CZ2022-0007', '2022-06-29', '服务业项目招引', '引进备案总投资5000万元（现代物流项目1亿元）以上服务业项目，或当年注册5000万以上，年营收超1000万元或当年实到资金20%以上的零增地生产性服务业项目；其中当年注册5000万元以上，实现月度纳统（批发项目超2亿元）或当年实到资金2000万元以上的零增地生产性服务业项目，可折算为2个项目。', '引进备案总投资5000万元（现代物流项目1亿元）以上服务业项目，或当年注册5000万以上，年营收超1000万元或当年实到资金20%以上的零增地生产性服务业项目；其中当年注册5000万元以上，实现月度纳统（批发项目超2亿元）或当年实到资金2000万元以上的零增地生产性服务业项目，可折算为2个项目。', '0.80', '完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分。', '2个', null);
INSERT INTO `ta_assessment` VALUES ('8', 'CZ2022-0008', '2022-06-29', '服务业项目招引', '新备案亿元以上服务业项目', '新备案亿元以上服务业项目', '0.20', '完成任务得该项赋分，未完成任务的按完成率计算得分；其他镇（街道）参照得分。', '0', null);
INSERT INTO `ta_assessment` VALUES ('9', 'CZ2022-0009', '2022-06-29', '招大引强', '招大引强项目招引', '10亿（含）—50亿备案内资项目', '0.00', '加分规则：以上任务数未完成的统一扣1分，按完成个数计算加分，上不封顶（没有任务的参照执行）；以上加分项按就高原则不重复加分', '3个', null);
INSERT INTO `ta_assessment` VALUES ('10', 'CZ2022-0010', '2022-06-29', '招大引强', '招大引强项目招引', '50亿（含）以上备案内资项目或总投资3亿美元（含）以上项目', '0.00', '加分规则：以上任务数未完成的统一扣1分，按完成个数计算加分，上不封顶（没有任务的参照执行）；以上加分项按就高原则不重复加分', '1个', null);
INSERT INTO `ta_assessment` VALUES ('11', 'CZ2022-0011', '2022-06-29', '招大引强', '招大引强项目招引', '世界500强或国际行业领先企业项目', '0.00', '加分规则：以上任务数未完成的统一扣1分，按完成个数计算加分，上不封顶（没有任务的参照执行）；以上加分项按就高原则不重复加分', '1个', null);
INSERT INTO `ta_assessment` VALUES ('12', 'CZ2022-0012', '2022-06-29', '招大引强', '招大引强项目招引', '总投资超亿美元项目', '0.00', '加分规则：以上任务数未完成的统一扣1分，按完成个数计算加分，上不封顶（没有任务的参照执行）；以上加分项按就高原则不重复加分', '0个', null);
INSERT INTO `ta_assessment` VALUES ('13', 'CZ2022-0013', '2022-06-29', '招大引强', '招大引强项目招引', '总部型、功能型机构和本土跨国公司', '0.00', '加分规则：以上任务数未完成的统一扣1分，按完成个数计算加分，上不封顶（没有任务的参照执行）；以上加分项按就高原则不重复加分', '1个', null);
INSERT INTO `ta_assessment` VALUES ('14', 'CZ2022-0014', '2022-06-29', '招大引强', '超额完成实际利用外资', '超额完成实际利用外资', '0.00', '加分规则：全年超额完成实际利用外资任务的，每超100万美元加0.2分，上限5分；一季度超额完成实际利用外资任务（任务数以一季度“红旗奖”立功竞赛行动方案任务为准），且全年完成实际利用外资任务的，一季度超额部分每超100万美元加0.1分，上限1分。（没有任务的参照执行）', null, null);
INSERT INTO `ta_assessment` VALUES ('15', 'CZ2022-0015', '2022-06-29', '招大引强', '重大服务业项目招引', '招引世界品牌排名500强项目，每个加1.5分', '0.00', '加分规则：按完成个数和就高原则加分，不重复加分。', null, null);
INSERT INTO `ta_assessment` VALUES ('16', 'CZ2022-0016', '2022-06-29', '招大引强', '重大服务业项目招引', '引进备案总投资1亿元（现代物流项目2亿元）以上服务业项目，每个加1分；', '0.00', '加分规则：按完成个数和就高原则加分，不重复加分。', null, null);
INSERT INTO `ta_assessment` VALUES ('17', 'CZ2022-0017', '2022-06-29', '招大引强', '重大服务业项目招引', '引进备案总投资5000万元（现代物流项目1亿元）以上服务业项目，每个加0.5分。', '0.00', '加分规则：按完成个数和就高原则加分，不重复加分。', null, null);
INSERT INTO `ta_assessment` VALUES ('18', 'CZ2022-0018', '2022-06-29', 'GDP增速%', 'GDP增速%', 'GDP增速%', '3.50', '计分方法：1.目标任务完成率（2分）：按完成率赋分；2.贡献度（1.5分）：按照功效系数法赋分，[0.7+0.3*（本值-最低值）/（最高值-最低值）] *1.5。', '增长10%', null);
INSERT INTO `ta_assessment` VALUES ('19', 'CZ2022-0019', '2022-06-29', '固定资产', '总量投资', '总量投资', '0.20', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。', '24.9亿元', null);
INSERT INTO `ta_assessment` VALUES ('20', 'CZ2022-0020', '2022-06-29', '固定资产', '一产投资', '一产投资', '0.10', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。', '0.205亿元', null);
INSERT INTO `ta_assessment` VALUES ('21', 'CZ2022-0021', '2022-06-29', '固定资产', '制造业投资', '制造业投资', '0.80', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。', '14.2亿元', null);
INSERT INTO `ta_assessment` VALUES ('22', 'CZ2022-0022', '2022-06-29', '固定资产', '工业技改投资', '工业技改投资', '0.40', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。', '6.5亿元', null);
INSERT INTO `ta_assessment` VALUES ('23', 'CZ2022-0023', '2022-06-29', '固定资产', '三产项目投资', '三产项目投资', '1.00', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。', '5亿元', null);
INSERT INTO `ta_assessment` VALUES ('24', 'CZ2022-0024', '2022-06-29', '固定资产', '民间投资', '民间投资', '0.30', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。', '16.99亿元', null);
INSERT INTO `ta_assessment` VALUES ('25', 'CZ2022-0025', '2022-06-29', '固定资产', '交通投资', '交通投资', '0.30', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。', '1亿元', null);
INSERT INTO `ta_assessment` VALUES ('26', 'CZ2022-0026', '2022-06-29', '固定资产', '生态环保、城市更新和水利设施', '生态环保、城市更新和水利设施', '0.30', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。', '0.9亿元', null);
INSERT INTO `ta_assessment` VALUES ('27', 'CZ2022-0027', '2022-06-29', '固定资产', '社会事业投资', '社会事业投资', '0.30', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。', '0.45亿元', null);
INSERT INTO `ta_assessment` VALUES ('28', 'CZ2022-0028', '2022-06-29', '固定资产', '高耗能行业投资占比下降', '高耗能行业投资占比下降', '0.30', '占比低于8%的得0.3分；8%-12%的得0.2分，高于12%的不得分', null, null);
INSERT INTO `ta_assessment` VALUES ('29', 'CZ2022-0029', '2022-06-29', '能耗、碳达峰、碳中和', '淘汰落后用能量', '淘汰落后用能量', '0.50', '1.目标完成率得分（70%）：完成目标任务得满分，未完成按比例折算法计分；2.贡献度得分（30%）：按功效系数法计分，贡献度最高者得满分；', '3600吨标煤', null);
INSERT INTO `ta_assessment` VALUES ('30', 'CZ2022-0030', '2022-06-29', '能耗、碳达峰、碳中和', '2022年规上工业能耗量', '2022年规上工业能耗量', '1.00', '1.任务分：完成目标任务得满分；2.用能量超额5%以内，扣总分的10%；用能量超额5%-10%，扣总分的30%；用能量超额10%以上不得分；暂定目标，待明确市里2022年规上工业能耗降低率目标任务再调整；', '102533吨标煤', null);
INSERT INTO `ta_assessment` VALUES ('31', 'CZ2022-0031', '2022-06-29', '能耗、碳达峰、碳中和', '新增光伏装机量', '新增光伏装机量', '0.50', '完成任务得满分，完成量达到90%的按比例记分，完成量90%以下的不得分。', '3.5兆瓦', null);
INSERT INTO `ta_assessment` VALUES ('32', 'CZ2022-0032', '2022-06-29', '重大项目', '3.0平台立项项目开工率', '3.0平台立项项目开工率', '0.30', '完成率达到全市平均水平的得该项赋分，未完成任务的不得分。', '超过全市平均', null);
INSERT INTO `ta_assessment` VALUES ('33', 'CZ2022-0033', '2022-06-29', '重大项目', '一季度新入库项目个数和总投资', '一季度新入库项目个数和总投资', '0.30', '完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分。', '新入库5个，总投资2.8亿元', null);
INSERT INTO `ta_assessment` VALUES ('34', 'CZ2022-0034', '2022-06-29', '重大项目', '亿元以上产业项目开工数', '亿元以上产业项目开工数', '0.30', '完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分。', '9个', null);
INSERT INTO `ta_assessment` VALUES ('35', 'CZ2022-0035', '2022-06-29', '重大项目', '重大攻坚项目', '重大攻坚项目', '0.30', '节点完成率达100%的得该项赋分，未完成的按比例折算得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('36', 'CZ2022-0036', '2022-06-29', '推动全面融入长三角一体化（东西部协作与山海协作）', '长三角一体化发展暨虹桥国际开放枢纽南向拓展带建设工作任务清单节点完成情况', '长三角一体化发展暨虹桥国际开放枢纽南向拓展带建设工作任务清单节点完成情况', '1.00', '完成节点任务得满分，不完成不得分（如涉及数据的，按完成比例计分）；', '浙江冠宇年产10GWH锂离子动力电池项目建设', null);
INSERT INTO `ta_assessment` VALUES ('37', 'CZ2022-0037', '2022-06-29', '推动全面融入长三角一体化（东西部协作与山海协作）', '双招双引项目信息数', '双招双引项目信息数', '0.50', '得分=0.5*[(本值-最低值）/（最高值-最低值）*40+60]/100', '每月报送1次', null);
INSERT INTO `ta_assessment` VALUES ('38', 'CZ2022-0038', '2022-06-29', '推动全面融入长三角一体化（东西部协作与山海协作）', '东西部协作社会帮扶资金完成数量', '东西部协作社会帮扶资金完成数量', '0.50', '完成任务得满分，未完成任务的不得分。', '暂定60万元(具体数额以省市下达的2022年度任务数为基数）。', null);
INSERT INTO `ta_assessment` VALUES ('39', 'CZ2022-0039', '2022-06-29', '工业发展', '县内规上工业增加值', '县内规上工业增加值', '4.00', '（一）规上工业增加值目标任务完成率（2.4分）：按完成率赋分，上不封顶（二）规上工业增加值贡献（0.8分）：1.增加值绝对值（0.4分）：按照功效系数法赋分，计分方法：[0.5+0.5*（本值-最低值）/（最高值-最低值）] *0.4；2.增加值贡献率提升幅度（0.4分）：按照功效系数法赋分，计分方法：[0.7+0.3*（本值-最低值）/（最高值-最低值）] *0.4；（三）规上工业增加值率（0.8分）：1.增加值率（0.4分）：按照排名计算得分，其次扣减0.02分，依次类推，2.增加值率提升幅度（0.4分）：按照功效系数法赋分；计分方法：[0.7+0.3*（本值-最低值）/（最高值-最低值）] *0.4；', '按县对各镇（街道）年度目标任务为准。', null);
INSERT INTO `ta_assessment` VALUES ('40', 'CZ2022-0040', '2022-06-29', '工业发展', '县内规上工业战略性新兴产业增加值增速', '县内规上工业战略性新兴产业增加值增速', '0.80', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '15%', null);
INSERT INTO `ta_assessment` VALUES ('41', 'CZ2022-0041', '2022-06-29', '工业发展', '数字经济核心制造业增加值', '数字经济核心制造业增加值', '1.00', '（一）目标任务完成率（0.6分）：按完成率赋分，上不封顶；（二）贡献度得分（0.4分）：1.增加值绝对值（0.2分）：按功效系数法计分，计分方法：[0.5+0.5*（本值-最低值）/（最高值-最低值）] *0.2；2.增加值贡献率提升幅度（0.2分）：按功效系数法计分，计分方法：[0.7+0.3*（本值-最低值）/（最高值-最低值）] *0.2；', '按县对各镇（街道）年度目标任务为准', null);
INSERT INTO `ta_assessment` VALUES ('42', 'CZ2022-0042', '2022-06-29', '工业发展', '规上制造业亩均税收增速', '规上制造业亩均税收增速', '0.50', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '9%', null);
INSERT INTO `ta_assessment` VALUES ('43', 'CZ2022-0043', '2022-06-29', '工业发展', '规上制造业亩均增加值增速', '规上制造业亩均增加值增速', '0.50', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '11%', null);
INSERT INTO `ta_assessment` VALUES ('44', 'CZ2022-0044', '2022-06-29', '工业发展', '规上制造业全员劳动生产率增速', '规上制造业全员劳动生产率增速', '0.20', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '9%', null);
INSERT INTO `ta_assessment` VALUES ('45', 'CZ2022-0045', '2022-06-29', '工业发展', '规模以上工业企业新产品销售收入占比', '规模以上工业企业新产品销售收入占比', '0.50', '占比（0.2分）：按排名得分，第一名得0.2分，第二名得0.18分，依次递减，第九名得0.04分。规模以占比提高幅度（0.3分）：按排名得分，第一名得0.3分，第二名得0.27分，依次递减，第九名得0.06分。', null, null);
INSERT INTO `ta_assessment` VALUES ('46', 'CZ2022-0046', '2022-06-29', '企业梯度培育', '净增规上企业数', '净增规上企业数', '0.30', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。无新增5亿元、30亿元目标任务的镇（街道）有新增企业的，新增1家得0.05分，总计分不超过对应目标任务的赋分。', '4家', null);
INSERT INTO `ta_assessment` VALUES ('47', 'CZ2022-0047', '2022-06-29', '企业梯度培育', '净增亿元企业数', '净增亿元企业数', '0.50', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。无新增5亿元、30亿元目标任务的镇（街道）有新增企业的，新增1家得0.05分，总计分不超过对应目标任务的赋分。', '3家', null);
INSERT INTO `ta_assessment` VALUES ('48', 'CZ2022-0048', '2022-06-29', '企业梯度培育', '新增5亿元企业数', '新增5亿元企业数', '0.10', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。无新增5亿元、30亿元目标任务的镇（街道）有新增企业的，新增1家得0.05分，总计分不超过对应目标任务的赋分。', '1家', null);
INSERT INTO `ta_assessment` VALUES ('49', 'CZ2022-0049', '2022-06-29', '企业梯度培育', '新增“绿色工厂”企业数', '新增“绿色工厂”企业数', '0.30', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '1家', null);
INSERT INTO `ta_assessment` VALUES ('50', 'CZ2022-0050', '2022-06-29', '企业梯度培育', 'JMRH工作开展', '新增JG资质数量', '0.30', '完成任务的满分，未完成按完成比例计分。', '1个', null);
INSERT INTO `ta_assessment` VALUES ('51', 'CZ2022-0051', '2022-06-29', '企业梯度培育', 'JMRH工作开展', '贡献度考', '0.20', '参照市考核办法赋分排名得分，第一名得0.2分，每下降一名按0.01分依次递减。', null, null);
INSERT INTO `ta_assessment` VALUES ('52', 'CZ2022-0052', '2022-06-29', '“两高一低”整治提升', '高耗能企业数', '高耗能企业数', '0.20', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '2家', null);
INSERT INTO `ta_assessment` VALUES ('53', 'CZ2022-0053', '2022-06-29', '“两高一低”整治提升', '高排放企业数', '高排放企业数', '0.30', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '3家', null);
INSERT INTO `ta_assessment` VALUES ('54', 'CZ2022-0054', '2022-06-29', '“两高一低”整治提升', '低效企业数', '低效企业数', '0.30', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '8家', null);
INSERT INTO `ta_assessment` VALUES ('55', 'CZ2022-0055', '2022-06-29', '“两高一低”整治提升', '“低散乱”企业数', '“低散乱”企业数', '0.50', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '13家', null);
INSERT INTO `ta_assessment` VALUES ('56', 'CZ2022-0056', '2022-06-29', '“两高一低”整治提升', '腾退土地', '腾退土地', '0.70', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '320亩', null);
INSERT INTO `ta_assessment` VALUES ('57', 'CZ2022-0057', '2022-06-29', '“两高一低”整治提升', '腾退土地其中单块20亩土地以上占比', '腾退土地其中单块20亩土地以上占比', '0.30', '最高得满分，其他按比例折算得分，小于55%的不得分；', '55%', null);
INSERT INTO `ta_assessment` VALUES ('58', 'CZ2022-0058', '2022-06-29', '“两高一低”整治提升', '收购收储工业用地', '收购收储工业用地', '0.50', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '250亩', null);
INSERT INTO `ta_assessment` VALUES ('59', 'CZ2022-0059', '2022-06-29', '“两高一低”整治提升', '入园入区企业数', '入园入区企业数', '0.20', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。', '35家', null);
INSERT INTO `ta_assessment` VALUES ('60', 'CZ2022-0060', '2022-06-29', '深化“达产履约”精准\n帮扶', '加大“达产履约”投资挖潜', '加大“达产履约”投资挖潜', '0.80', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。', '4亿元', null);
INSERT INTO `ta_assessment` VALUES ('61', 'CZ2022-0061', '2022-06-29', '服务业高质量发展', '服务业增加值增速', '服务业增加值增速', '1.00', '完成目标得满分；未完成目标的，县平均水平以下的不得分，达到县平均水平的按比例折算法计分；', '9.5%', null);
INSERT INTO `ta_assessment` VALUES ('62', 'CZ2022-0062', '2022-06-29', '服务业高质量发展', '服务业增加值占GDP比重提升幅度', '服务业增加值占GDP比重提升幅度', '0.50', '完成目标得满分；未完成目标的，县平均水平以下的不得分，达到县平均水平的按比例折算法计分；', '1.2个百分点', null);
INSERT INTO `ta_assessment` VALUES ('63', 'CZ2022-0063', '2022-06-29', '服务业高质量发展', '净增规（限）上企业数（其中：知识密集型服务业）', '净增规（限）上企业数（其中：知识密集型服务业）（净增规（限）上企业数0.3分、知识密集型服务业0.2分）', '0.50', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '（3）家', null);
INSERT INTO `ta_assessment` VALUES ('64', 'CZ2022-0064', '2022-06-29', '服务业高质量发展', '服务业综合发展', '服务业综合发展', '1.00', '根据年度服务业综合发展考评办法实施', '根据年度服务业综合发展考评办法实施', null);
INSERT INTO `ta_assessment` VALUES ('65', 'CZ2022-0065', '2022-06-29', '社会消费品零售总额增速', '限上零售额增速', '限上零售额增速', '0.50', '完成任务得满分；未完成目标的，县平均水平以下的不得分，达到县平均水平的按比例折算法计分；', '25%', null);
INSERT INTO `ta_assessment` VALUES ('66', 'CZ2022-0066', '2022-06-29', '社会消费品零售总额增速', '新增限上零售业企业家数及企业贡献率（新增限上零售业企业家数及企业贡献率分别赋0.2分、0.1分）', '新增限上零售业企业家数及企业贡献率（新增限上零售业企业家数及企业贡献率分别赋0.2分、0.1分）', '0.30', '（新增限上零售业企业家数及企业贡献率分别赋0.2分、0.1分）新增限上零售业企业家数完成目标得满分，未完成目标按比例折算法计分；企业贡献率最高得0.1分，其余按比例折算法计分；', '2家', null);
INSERT INTO `ta_assessment` VALUES ('67', 'CZ2022-0067', '2022-06-29', '社会消费品零售总额增速', '居民人均消费支出增速', '居民人均消费支出增速', '0.20', '达到全省平均以上的得满分，未完成目标按比例折算法计分。', '高于全省平均水平', null);
INSERT INTO `ta_assessment` VALUES ('68', 'CZ2022-0068', '2022-06-29', '外贸高质量发展', '货物贸易进出口增速', '货物贸易进出口增速', '0.30', '完成任务得满分，完成率不到90%的不得分，完成率达到90%及以上的按完成比例计分；', '8%', null);
INSERT INTO `ta_assessment` VALUES ('69', 'CZ2022-0069', '2022-06-29', '外贸高质量发展', '货物贸易出口增速', '货物贸易出口增速', '0.80', '完成任务得满分，完成率不到90%的不得分，完成率达到90%及以上的按完成比例计分；', '8%', null);
INSERT INTO `ta_assessment` VALUES ('70', 'CZ2022-0070', '2022-06-29', '外贸高质量发展', '在岸服务外包执行额', '在岸服务外包执行额', '0.10', '完成任务得满分，完成率不到90%的不得分，完成率达到90%及以上的按完成比例计分；', '130万美元', null);
INSERT INTO `ta_assessment` VALUES ('71', 'CZ2022-0071', '2022-06-29', '外贸高质量发展', '服务贸易进出口额增速', '服务贸易进出口额增速', '0.20', '完成任务得满分，完成率不到90%的不得分，完成率达到90%及以上的按完成比例计分；', '增长5%', null);
INSERT INTO `ta_assessment` VALUES ('72', 'CZ2022-0072', '2022-06-29', '外贸高质量发展', '离岸服务外包执行额增速', '离岸服务外包执行额增速', '0.10', '完成任务得满分，完成率不到90%的不得分，完成率达到90%及以上的按完成比例计分；', '10%', null);
INSERT INTO `ta_assessment` VALUES ('73', 'CZ2022-0073', '2022-06-29', '外贸高质量发展', '跨境电商出口额', '跨境电商出口额', '0.30', '完成任务得满分，完成率不到90%的不得分，完成率达到90%及以上的按完成比例计分；', '2100万元', null);
INSERT INTO `ta_assessment` VALUES ('74', 'CZ2022-0074', '2022-06-29', '外贸高质量发展', '跨境电商新增应用家数', '跨境电商新增应用家数', '0.10', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '4家', null);
INSERT INTO `ta_assessment` VALUES ('75', 'CZ2022-0075', '2022-06-29', '外贸高质量发展', '数字服务贸易增速', '数字服务贸易增速', '0.10', '完成任务得满分，完成率不到90%的不得分，完成率达到90%及以上的按完成比例计分。', '增长20%', null);
INSERT INTO `ta_assessment` VALUES ('76', 'CZ2022-0076', '2022-06-29', '上市“50”专项行动', '新增招引上市后备企业', '新增招引上市后备企业', '0.20', '任务分0.08分，完成任务的（含超额完成）得0.08分，未完成任务的按任务完成率计算得分，各镇（街道）得分=0.08分*任务完成率；排名分0.12分，各镇（街道）得分=0.12分*排名得分系数（排名第一名的得分系数为1.0，最后一名得分系数为0.2，期间得分系数按排名数量平均梯度确定，存在并列排名的，按排名次序对系数进行平均）；', '2家', null);
INSERT INTO `ta_assessment` VALUES ('77', 'CZ2022-0077', '2022-06-29', '上市“50”专项行动', '新增对接资本市场股改企业', '新增对接资本市场股改企业', '0.20', '任务分0.08分，完成任务的（含超额完成）得0.08分，未完成任务的按任务完成率计算得分，各镇（街道）得分=0.08分*任务完成率；排名分0.12分，各镇（街道）得分=0.12分*排名得分系数（排名第一名的得分系数为1.0，最后一名得分系数为0.2，期间得分系数按排名数量平均梯度确定，存在并列排名的，按排名次序对系数进行平均）；', '1家', null);
INSERT INTO `ta_assessment` VALUES ('78', 'CZ2022-0078', '2022-06-29', '品牌企业和实施“浙江制造”标准企业', '主导制定“浙江制造”标准数', '主导制定“浙江制造”标准数', '0.30', '完成基准任务得0.2分,未完成任务的按任务完成率计算得分(0.2分*任务完成率)；每增加1家培育企业加0.1分，总分不超过0.3分。', '2家', null);
INSERT INTO `ta_assessment` VALUES ('79', 'CZ2022-0079', '2022-06-29', '品牌企业和实施“浙江制造”标准企业', '新增“品质标”企业数', '新增“品质标”企业数', '0.30', '完成基准任务得0.2分,未完成任务的按任务完成率计算得分(0.2分*任务完成率)；每增加1家培育企业加0.1分，总分不超过0.3分。', '2家', null);
INSERT INTO `ta_assessment` VALUES ('80', 'CZ2022-0080', '2022-06-29', '品牌企业和实施“浙江制造”标准企业', '申报政府质量奖企业数', '申报政府质量奖企业数', '0.20', '完成任务得满分，未完成按完成比例计分；', '2家', null);
INSERT INTO `ta_assessment` VALUES ('81', 'CZ2022-0081', '2022-06-29', '品牌企业和实施“浙江制造”标准企业', '年末高价值发明专利数', '年末高价值发明专利数', '0.20', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分。', '37件', null);
INSERT INTO `ta_assessment` VALUES ('82', 'CZ2022-0082', '2022-06-29', '文化旅游', '乡村旅游收入增长', '乡村旅游收入增长', '0.10', '以2021年＂浙江省乡村旅游统计系统＂填报并通过审核的数据为准，増长率高于或等于10%的得满分，完成率≥80%按比率得分，完成率<80%不得分。', '百步开发区10%', null);
INSERT INTO `ta_assessment` VALUES ('83', 'CZ2022-0083', '2022-06-29', '文化旅游', '全年举办镇级及以上文化旅游体育活动', '全年举办镇级及以上文化旅游体育活动', '0.60', '全年举办活动需经县文化广电旅游体育局审核备案，在规定数额及以上，得满分；完成率≥80%按比率得分，完成率<80%不得分；', '15场', null);
INSERT INTO `ta_assessment` VALUES ('84', 'CZ2022-0084', '2022-06-29', '农业高质量发展', '农业增加值增速', '农业增加值增速', '0.20', '完成率≥80%按比率得分，完成率<80%不得分', '增长2.5%以上', null);
INSERT INTO `ta_assessment` VALUES ('85', 'CZ2022-0085', '2022-06-29', '农业高质量发展', '农业“双强”项目', '完成高品质科技示范基地、数字农业基地（工厂）、全程机械化应用基地或农机服务中心项目建设', '0.40', '完成得0.3分，超额完成得0.1分，未完成按比例扣分；', '2个', null);
INSERT INTO `ta_assessment` VALUES ('86', 'CZ2022-0086', '2022-06-29', '农业高质量发展', '稻虾新增面积', '稻虾新增面积', '0.60', '完成得0.45分，超额按面积分三档分别得0.15、0.1、0.05分，未完成按比例扣分；', '1500亩', null);
INSERT INTO `ta_assessment` VALUES ('87', 'CZ2022-0087', '2022-06-29', '农业高质量发展', '农业招商项目', '1000万元以上项目', '0.60', '未完成按比例扣分', '1个', null);
INSERT INTO `ta_assessment` VALUES ('88', 'CZ2022-0088', '2022-06-29', '农业高质量发展', '农村实用人才培训', '农村实用人才培训', '0.10', '未完成按比例扣分，其余200人培训任务由县级部门负责完成。', '35人', null);
INSERT INTO `ta_assessment` VALUES ('89', 'CZ2022-0089', '2022-06-29', '农业高质量发展', '农创客培育', '农创客培育', '0.10', '完成得满分，完成率≥80%按比率得分，完成率<80%不得分', '30人', null);
INSERT INTO `ta_assessment` VALUES ('90', 'CZ2022-0090', '2022-06-29', '农业高质量发展', '粮食产量稳定度', '粮食播种面积', '0.30', '完成得满分，完成率≥80%按比率得分，完成率<80%不得分。', '4.4万亩', null);
INSERT INTO `ta_assessment` VALUES ('91', 'CZ2022-0091', '2022-06-29', '农业高质量发展', '粮食产量稳定度', '粮功区“非粮化”整治优化', '0.10', '按时完成“非粮化”整治优化并通过验收的得满分，未完成得0分。', null, null);
INSERT INTO `ta_assessment` VALUES ('92', 'CZ2022-0092', '2022-06-29', '农业高质量发展', '粮食产量稳定度', '绿色优质高产水稻示范方', '0.10', '按验收评比，一等奖0.1分、二等奖0.09分、三等奖0.08分；', null, null);
INSERT INTO `ta_assessment` VALUES ('93', 'CZ2022-0093', '2022-06-29', '农业高质量发展', '低收入农户人均可支配收入增速', '低收入农户人均可支配收入增速', '0.50', '完成得满分，完成率≥80%按比率得分，完成率<80%不得分。', '达10%以上', null);
INSERT INTO `ta_assessment` VALUES ('94', 'CZ2022-0094', '2022-06-29', '全域土地整治', '垦造耕地', '垦造耕地', '1.40', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '260亩', null);
INSERT INTO `ta_assessment` VALUES ('95', 'CZ2022-0095', '2022-06-29', '全域土地整治', '建设用地复垦', '建设用地复垦', '0.80', '完成任务得满分，完成率≥80%按比率得分，完成率<80%不得分；', '120亩', null);
INSERT INTO `ta_assessment` VALUES ('96', 'CZ2022-0096', '2022-06-29', '全域土地整治', '盘活存量土地', '盘活存量土地', '0.80', '完成率达100%及以上的得该项赋分，完成率≥70%的按完成率*该项赋分计算，完成率<70%不得分。', '300亩', null);
INSERT INTO `ta_assessment` VALUES ('97', 'CZ2022-0097', '2022-06-29', '研发投入', '研发“两率”', '研发“两率”', '0.20', '“两率”均实现的，得0.2分，任意一项未完成的，本大项（0.8分）不得分；实现规上企业研发活动率全覆盖（特殊企业除外）的加0.025分，研发机构设置率达85%的加0.025分', '规上企业研发活动率达到95%、研发机构设置率达到80%', null);
INSERT INTO `ta_assessment` VALUES ('98', 'CZ2022-0098', '2022-06-29', '研发投入', '研发费用投入', '研发费用投入', '0.60', '完成情况0.5分。完成任务得满分，完成90%（含）以上的按比例计分，不到90%的不得分；超额完成的，每超额完成10%，加0.025分，加分不超过0.1分。规模贡献0.1分（须完成90%以上方可计分），得分=（本值/最大值）×0.1\n※本大项得分（含加分）不超过0.8分。', '3.2亿元', null);
INSERT INTO `ta_assessment` VALUES ('99', 'CZ2022-0099', '2022-06-29', '企业培育', '高新技术企业认定', '高新技术企业认定', '0.20', '完成任务得满分，少于应完成任务1家的按比例得分，少于应完成任务2家或2家以上的，不得分', '10家', null);
INSERT INTO `ta_assessment` VALUES ('100', 'CZ2022-0100', '2022-06-29', '企业培育', '省科技型中小企业认定', '省科技型中小企业认定', '0.15', '完成任务得满分，少于应完成任务1至2家的按比例得分，少于应完成任务3家或3家以上的，不得分。', '15家', null);
INSERT INTO `ta_assessment` VALUES ('101', 'CZ2022-0101', '2022-06-29', '企业培育', '企业研究院（研发中心）、科技“小巨人”企业认定', '企业研究院（研发中心）、科技“小巨人”企业认定', '0.15', '完成1家省级认定得0.05分，其中省级重点企业研究院0.1分；完成1家市级认定得0.025分', null, null);
INSERT INTO `ta_assessment` VALUES ('102', 'CZ2022-0102', '2022-06-29', '成果转化', '技术合同成交额', '技术合同成交额', '0.40', '完成90%（含）以上的按比例计分（满分0.4分），不到90%的不得分', '2亿元', null);
INSERT INTO `ta_assessment` VALUES ('103', 'CZ2022-0103', '2022-06-29', '成果转化', '实施产学研项目“揭榜挂帅”', '实施产学研项目“揭榜挂帅”', '0.10', '挂榜0.02分/项（累计最高不超过0.08分），揭榜0.04分/项（累计最高不超过0.08分）\n※本大项得分不超过0.5分', null, null);
INSERT INTO `ta_assessment` VALUES ('104', 'CZ2022-0104', '2022-06-29', '产业优化', '高新技术产业投资', '高新技术产业投资', '1.20', '（按照市对县考核高新投资占比不低于20%要求分解高新投资任务）完成情况1分。完成任务得满分，完成90%（含）以上的按比例计分，不到90%的不得分；超额完成的，每超额完成1%，加0.01分，加分不超过0.2分\n规模贡献0.2分（须完成90%以上方可计分），得分=（本值/最大值）×0.2\n※本大项得分（含加分）不超过1.2分', '8.9亿元', null);
INSERT INTO `ta_assessment` VALUES ('105', 'CZ2022-0105', '2022-06-29', '创新生态的优化', '“深根计划”、湖区科创平台建设等年度工作，根据实际完成情况评分。', '“深根计划”、湖区科创平台建设等年度工作，根据实际完成情况评分。', '1.00', '高标准打造科技城智创片区0.2分；新增众创空间（星创天地）、孵化器并投入使用0.2分，达到市级主要指标再加0.2分；高质量推进省级高新区发展0.2分，在省高新区评价中实现晋位再加0.2分；引育科创项目0.2分；高品质推进湾北科技城（南北湖科创湖区）建设0.2分；新建（引进）重大科创载体0.2分；实施农业科技项目0.2分', '新建众创空间（星创天地）1家。新增培育科技企业孵化器1家，并达到市级主要指标。全年引育科创项目9个。实施农业科技项目。', null);
INSERT INTO `ta_assessment` VALUES ('106', 'CZ2022-0106', '2022-06-29', '重大人才工程', '引才计划培育', '国家引才计划申报通过市级审核', '6.00', '完成得6分，完成50%（含）以上按比例得分，完成50%以下不得分，超额完成每人次计2分，完成答辩每人次计5分，获评每人次计20分。', '4人', null);
INSERT INTO `ta_assessment` VALUES ('107', 'CZ2022-0107', '2022-06-29', '重大人才工程', '引才计划培育', '省引才计划申报通过市级审核', '6.00', '完成得6分，完成50%（含）以上按比例得分，完成50%以下不得分，超额完成每人次计2分，完成答辩每人次计5分，获评每人次计20分。', '5人', null);
INSERT INTO `ta_assessment` VALUES ('108', 'CZ2022-0108', '2022-06-29', '重大人才工程', '省海外工程师培育', '省海外工程师申报通过市级审核', '3.00', '完成得3分，未完成按比例得分，超额完成每人次计1分，获评每人次计10分。', '2人', null);
INSERT INTO `ta_assessment` VALUES ('109', 'CZ2022-0109', '2022-06-29', '重大人才工程', '万人计划培育', '万人计划申报通过市级审核', '3.00', '完成得3分，未完成按比例得分，超额完成每人次计1分，完成答辩每人次计3分，获评每人次计10分。', '2人', null);
INSERT INTO `ta_assessment` VALUES ('110', 'CZ2022-0110', '2022-06-29', '人才及人才项目引育', '市级领军人才项目培育', '市级领军人才项目完成答辩', '3.00', '完成申报任务得3分，未完成不得分，超额完成申报任务每项目计1分；完成获评任务得10分，未完成按比例得分，超额完成获评任务每项目计5分。', '4个', null);
INSERT INTO `ta_assessment` VALUES ('111', 'CZ2022-0111', '2022-06-29', '人才及人才项目引育', '高技能人才培养', '新增高技能人才', '4.00', '完成得4分，完成90%（含）以上按比例得分，完成90%以下不得分。', '550人', null);
INSERT INTO `ta_assessment` VALUES ('112', 'CZ2022-0112', '2022-06-29', '人才及人才项目引育', '青年大学生引进', '青年大学生引进', '5.00', '完成得5分，未完成按比例得分，其中青年大学生任务3分、青年硕士任务2分。', '新增青年大学生880人<青年硕士32人>', null);
INSERT INTO `ta_assessment` VALUES ('113', 'CZ2022-0113', '2022-06-29', '人才及人才项目引育', '高级及以上人才引进', '高级及以上人才引进', '5.00', '完成得5分，未完成按比例得分，全职引进的按每人次10分另行加分。', '引进C类以上人才4人<A类1人、B类及以上1人>', null);
INSERT INTO `ta_assessment` VALUES ('114', 'CZ2022-0114', '2022-06-29', '人才及人才项目引育', '高级及以上人才引进', '高级及以上人才引进', '5.00', '完成得5分，未完成按比例得分，超额完成每人次计2分。', '全职引进青年博士6人', null);
INSERT INTO `ta_assessment` VALUES ('115', 'CZ2022-0115', '2022-06-29', '人才团队、平台及生态提升', '人才团队及平台提升', '人才团队及平台提升', '0.00', '加分项：省领军型创新创业团队申报并通过县级审核1个（4分）、通过省实地核查1个（6分）、入选1个（10分），入选市领军型创新创业团队1个（8分），入选市优才计划先锋型团队1个（8分），入选C类以上人才工程1人（10分，不含第1项重大人才工程的引才计划、省海外工程师、万人计划），创建高层次人才平台1个（5分）。计分：按上述加分项累计计分', null, null);
INSERT INTO `ta_assessment` VALUES ('116', 'CZ2022-0116', '2022-06-29', '人才团队、平台及生态提升', '落实重点人才工作推进', '落实重点人才工作推进', '0.00', '根据日常人才工作落实推进力度综合赋分，总分不超过10分。', null, null);
INSERT INTO `ta_assessment` VALUES ('117', 'CZ2022-0117', '2022-06-29', '季度督察', '各镇（街道）推进政务服务和公共服务事项进驻便民服务中心，实现“中心”外无权力', '各镇（街道）推进政务服务和公共服务事项进驻便民服务中心，实现“中心”外无权力', '0.40', '每季度开展暗访督查，每发现1项“中心”外事项，扣0.02分，每季度最多扣0.1分；', '各镇（街道）推进政务服务和公共服务事项进驻便民服务中心，实现“中心”外无权力', null);
INSERT INTO `ta_assessment` VALUES ('118', 'CZ2022-0118', '2022-06-29', '服务群众', '各镇（街道）深化“一窗受理、集成服务”改革，镇（街道）、村（社区）全面应用政务服务2.0平台，除公安服务、公用事业外，其余事项全部纳入综合受理', '政务服务2.0平台应用', '0.20', '每月各镇（街道）便民服务中心和各镇（街道）所辖村（社区）在政务服务2.0平台都产生办件，每发现1个镇（街道）或村（社区）未有办件的，扣0.05分，累计最多扣0.2分；', null, null);
INSERT INTO `ta_assessment` VALUES ('119', 'CZ2022-0119', '2022-06-29', '服务群众', '各镇（街道）深化“一窗受理、集成服务”改革，镇（街道）、村（社区）全面应用政务服务2.0平台，除公安服务、公用事业外，其余事项全部纳入综合受理', '综合受理', '0.20', '每季度开展暗访督查，每发现1个事项未纳入综合受理的，扣0.02分，累计最多扣0.2分。', null, null);
INSERT INTO `ta_assessment` VALUES ('120', 'CZ2022-0120', '2022-06-29', '服务企业', '各镇（街道）实施企业投资项目全流程代办服务，县领导挂帅重大项目100%代办服务，新增工业用地100%按照“标准地”供地，实施“拿地即开工”。', '新增工业用地100%按照“标准地”供地', '0.20', '每出现1宗新增工业用地未按照“标准地”供地（不含纳入省级负面清单模块），扣0.04分，累计最多扣0.2分；', null, null);
INSERT INTO `ta_assessment` VALUES ('121', 'CZ2022-0121', '2022-06-29', '服务企业', '各镇（街道）实施企业投资项目全流程代办服务，县领导挂帅重大项目100%代办服务，新增工业用地100%按照“标准地”供地，实施“拿地即开工”。', '建立项目代办制度和至少1名专职代办员队伍', '0.20', '未有项目代办制度的，扣0.1分；未建立1名专职代办员队伍扣0.1分；', null, null);
INSERT INTO `ta_assessment` VALUES ('122', 'CZ2022-0122', '2022-06-29', '服务企业', '各镇（街道）实施企业投资项目全流程代办服务，县领导挂帅重大项目100%代办服务，新增工业用地100%按照“标准地”供地，实施“拿地即开工”。', '每季度对县领导挂帅重大项目库项目进行回访督察', '0.20', '每发现1个项目满意度低的，扣0.02分，累计最多扣0.2分；', null, null);
INSERT INTO `ta_assessment` VALUES ('123', 'CZ2022-0123', '2022-06-29', '服务企业', '各镇（街道）实施企业投资项目全流程代办服务，县领导挂帅重大项目100%代办服务，新增工业用地100%按照“标准地”供地，实施“拿地即开工”。', '实施“拿地即开工”', '0.20', '除负面清单外，工业项目100%“拿地即开工”。当年度未有新增工业用地供地的，该项不得分；每发生一个未按要求实施拿地即开工项目，扣0.05分。累计最多扣0.2分。', null, null);
INSERT INTO `ta_assessment` VALUES ('124', 'CZ2022-0124', '2022-06-29', '特色工作', '各镇（街道）营商环境特色亮点工作', '信息被《嘉兴市营商环境建设简报》录用的，每篇加0.1分', '0.20', '以上内容最多得0.2分，同一内容就高计分，不重复计分。', null, null);
INSERT INTO `ta_assessment` VALUES ('125', 'CZ2022-0125', '2022-06-29', '特色工作', '各镇（街道）营商环境特色亮点工作', '营商环境建设案例被评为嘉兴市营商环境建设优秀案例的，每个案例加0.1分；被评为省级营商环境建设优秀案例的，每个案例加0.2分', '0.20', '以上内容最多得0.2分，同一内容就高计分，不重复计分。', null, null);
INSERT INTO `ta_assessment` VALUES ('126', 'CZ2022-0126', '2022-06-29', '垃圾分类', '定时定点小区建设', '完成省市县下达的定时定点收运小区建设任务，实现定时定点收运小区全覆盖。', '0.20', '未完成不得分', null, null);
INSERT INTO `ta_assessment` VALUES ('127', 'CZ2022-0127', '2022-06-29', '垃圾分类', '各级各类示范创建', '完成省级高标分类示范小区、省级试点商业街、省级示范片区（街道）等各级各类示范创建', '0.10', '未完成不得分', null, null);
INSERT INTO `ta_assessment` VALUES ('128', 'CZ2022-0128', '2022-06-29', '垃圾分类', '各级各类示范创建', '按照县生活垃圾分类年度工作目标要求，完成其他年度各项任务', '0.10', '未完成不得分', null, null);
INSERT INTO `ta_assessment` VALUES ('129', 'CZ2022-0129', '2022-06-29', '垃圾分类', '源头减量及易腐占比', '生活垃圾总量实现“零增长”', '0.10', '未完成不得分', null, null);
INSERT INTO `ta_assessment` VALUES ('130', 'CZ2022-0130', '2022-06-29', '垃圾分类', '源头减量及易腐占比', '易腐垃圾清运量占比不低于25%。易腐垃圾处置计量纳入市生活垃圾分类信息化监管平台。', '0.10', '未完成不得分', null, null);
INSERT INTO `ta_assessment` VALUES ('131', 'CZ2022-0131', '2022-06-29', '垃圾分类', '市监管平台系统接入率', '各项接入率均达到100%', '0.08', '按已建尽接的原则，确保已建成的定时定点收运小区（生活垃圾分类信息化监管平台可追溯可计量小区）智能评价系统及监控视频的接入率均达到100%。未完成不得分', '100%', null);
INSERT INTO `ta_assessment` VALUES ('132', 'CZ2022-0132', '2022-06-29', '垃圾分类', '市监管平台系统接入率', '日常运维规范使用', '0.12', '每月未完成扣0.01分,对已按要求接入的定时定点收运小区配备劝导员并规范管理。同时每月规范使用智能投放站（点），并确保每月有投放称重和评价记录。', null, null);
INSERT INTO `ta_assessment` VALUES ('133', 'CZ2022-0133', '2022-06-29', '垃圾分类', '建筑垃圾综合治理', '建筑垃圾综合治理', '0.20', '开展生活垃圾、建筑垃圾整治行动，100%完成装修垃圾示范小区、村创建。按照《海盐县建筑垃圾治理考核办法》，综合得分排名第一名得0.2分，每下降一名扣0.02分。', null, null);
INSERT INTO `ta_assessment` VALUES ('134', 'CZ2022-0134', '2022-06-29', '“四好农村路”建设', '农村公路改造提升（全县共67.6公里）', '农村公路改造提升（全县共67.6公里）', '0.60', '要求10月完工。在规定时间内完成率达100%及以上的得该项赋分，未在要求时间内完成任务的不得分。', '6.1公里', null);
INSERT INTO `ta_assessment` VALUES ('135', 'CZ2022-0135', '2022-06-29', '“四好农村路”建设', '桥梁养护及危旧桥梁治理（全县共79座）', '加强桥梁日常管养，确保桥梁整体运行状况良好', '0.20', '列入2021年度政府投资计划的桥梁10月底前完工，列入2022年度政府投资计划的桥梁12月基本完工。在规定时间内完成率达100%及以上的得该项赋分，未在要求时间为完成任务的不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('136', 'CZ2022-0136', '2022-06-29', '“四好农村路”建设', '桥梁养护及危旧桥梁治理（全县共79座）', '实施危旧桥梁治理', '0.30', '列入2021年度政府投资计划的桥梁10月底前完工，列入2022年度政府投资计划的桥梁12月基本完工。在规定时间内完成率达100%及以上的得该项赋分，未在要求时间为完成任务的不得分。', '8座', null);
INSERT INTO `ta_assessment` VALUES ('137', 'CZ2022-0137', '2022-06-29', '“四好农村路”建设', '道路交通故多发点段整治', '道路交通故多发点段整治', '0.40', '要求9月完成验收并销号。在规定时间内完成率达100%及以上的得该项赋分，未在要求时间为完成任务的不得分。', '整治湖盐线与百左路路口', null);
INSERT INTO `ta_assessment` VALUES ('138', 'CZ2022-0138', '2022-06-29', '乡村振兴', '农村环境全域美丽无死角', '农村环境全域美丽无死角长效保持', '0.30', '目标任务中，除明确以排名制计分的，其他完成任务要求得该项赋分，不完成不得分。按市县常态化检查综合排名，1-3名得0.3分，第4名得0.27分，之后每下降1名依次扣0.03分。', null, null);
INSERT INTO `ta_assessment` VALUES ('139', 'CZ2022-0139', '2022-06-29', '乡村振兴', '农村环境全域美丽无死角', '散养生猪和温室甲鱼动态清零', '0.05', '目标任务中，除明确以排名制计分的，其他完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('140', 'CZ2022-0140', '2022-06-29', '乡村振兴', '农村环境全域美丽无死角', '完成道路沿线农作物覆盖物整治', '0.05', '目标任务中，除明确以排名制计分的，其他完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('141', 'CZ2022-0141', '2022-06-29', '乡村振兴', '农村环境全域美丽无死角', '农村生活垃圾智能可追溯收集全覆盖', '0.05', '目标任务中，除明确以排名制计分的，其他完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('142', 'CZ2022-0142', '2022-06-29', '乡村振兴', '强村富民', '村经常性收入150万元以上、村经营性收入50万以上全覆盖', '0.07', '目标任务中，除明确以排名制计分的，其他完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('143', 'CZ2022-0143', '2022-06-29', '乡村振兴', '强村富民', '农村居民人均可支配收入', '0.08', '目标任务中，除明确以排名制计分的，其他完成任务要求得该项赋分，不完成不得分。', '增长7%以上', null);
INSERT INTO `ta_assessment` VALUES ('144', 'CZ2022-0144', '2022-06-29', '乡村振兴', '农产品安全', '农产品安全', '0.10', '目标任务中，除明确以排名制计分的，其他完成任务要求得该项赋分，不完成不得分。规模生产主体食品农产品承诺达标合格证管理比例达100%，“治违禁、控药残、捉提升”三年行动排查到位率100%，措施到位率100%。每下降一个百分点扣0.01分，扣完为止。', null, null);
INSERT INTO `ta_assessment` VALUES ('145', 'CZ2022-0145', '2022-06-29', '三改一拆（城市管理）', '无违建创建', '无违建创建', '0.40', '全面深化“无违建”创建创先争优工作；按时完成“三改一拆”、“四边三化”各项任务；（此项以省、市考评办法为准）。根据年度综合排名进行计分，第1名得0.4分，之后每下降1名依次扣0.04分。“无违建镇（街道）”复评通过率达100%，未通过扣0.2分。', null, null);
INSERT INTO `ta_assessment` VALUES ('146', 'CZ2022-0146', '2022-06-29', '三改一拆（城市管理）', '违建管控', '违建管控', '0.20', '未被县级以上领导点名批评以及被市级以上新闻媒体和上级督查曝光等；创建省、市治违控违示范典型、拆改示范典型、治违控违示范乡镇街道和其他示范典型的镇（街道）不失分。被县级领导点名批评的扣0.05分/次，被市级领导点名批评的扣0.1分/次，被省级领导点名批评的扣0.2分。新增违法建筑未按时处置到位的每起扣0.02分，被省、市督查发现导致我县扣分的每起扣0.04分，扣完为止。', null, null);
INSERT INTO `ta_assessment` VALUES ('147', 'CZ2022-0147', '2022-06-29', '三改一拆（城市管理）', '专项行动', '专项行动', '0.20', '按要求开展各类专项整治行动，及时完成省、市、县督办、交办点位整治。根据年度综合排名进行计分，第1名得0.2分，之后每下降1名依次扣0.02分。', null, null);
INSERT INTO `ta_assessment` VALUES ('148', 'CZ2022-0148', '2022-06-29', '三改一拆（城市管理）', '清障拔钉', '清障拔钉', '0.40', '完成清障签约率达85%以上，拆除率达75%以上；影响县级及以上重大项目建设的，清障拆除率达100%。清障拔钉完成率每少一个百分点扣0.01分，扣完为止。', null, null);
INSERT INTO `ta_assessment` VALUES ('149', 'CZ2022-0149', '2022-06-29', '三改一拆（城市管理）', '城市精细化管理', '城市精细化管理', '0.30', '围绕犬类、户外广告、市容市貌等持续开展秩序乱象整治行动，数字城管按时处置率、问题解决率分别达到96%、98%以上。按照《海盐县2022年城市管理工作考核办法》，按每季度督查计分年底进行排名，第一名得0.3分，每下降一名扣0.03分。', null, null);
INSERT INTO `ta_assessment` VALUES ('150', 'CZ2022-0150', '2022-06-29', '生态文明建设', '大气污染防治', 'PM2.5浓度、PM10浓度、O3浓度达到年度考核要求或者全市排名上升，单项指标不列入全市后十名。', '0.30', '所有任务完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('151', 'CZ2022-0151', '2022-06-29', '生态文明建设', '大气污染防治', '完成清新园区、工业废气治理、错峰减排、扬尘治理、餐饮油烟、秸秆禁烧等任务', '0.50', '所有任务完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('152', 'CZ2022-0152', '2022-06-29', '生态文明建设', '水污染防治', '县控以上地表水断面及跨行政区域交接断面达到Ⅲ类及以上水质，其中，千亩荡月月达标且年均值达Ⅱ类水，其他断面每月不出现劣V类', '0.20', '所有任务完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('153', 'CZ2022-0153', '2022-06-29', '生态文明建设', '水污染防治', '市对镇考核断面达到Ⅲ类及以上水质且不列入全市后十名', '0.10', '所有任务完成任务要求得该项赋分，不完成不得分。位次排名前移可酌情抵扣分。（按断面数平摊赋分）', null, null);
INSERT INTO `ta_assessment` VALUES ('154', 'CZ2022-0154', '2022-06-29', '生态文明建设', '水污染防治', '建成污水零直排区标杆镇、标杆园区或完成“回头看”任务', '0.25', '所有任务完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('155', 'CZ2022-0155', '2022-06-29', '生态文明建设', '水污染防治', '完成河湖缓冲带、碧水工程等建设任务', '0.25', '所有任务完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('156', 'CZ2022-0156', '2022-06-29', '生态文明建设', '固废、土壤和辐射污染防治', '完成无废城市建设任务', '0.20', '所有任务完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('157', 'CZ2022-0157', '2022-06-29', '生态文明建设', '固废、土壤和辐射污染防治', '工业固废（危废）安全收集、利用、处置，全年不发生跨省、市非法倾倒事件', '0.10', '所有任务完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('158', 'CZ2022-0158', '2022-06-29', '生态文明建设', '固废、土壤和辐射污染防治', '完成疑似污染地块调查和土壤重点监管单位自行监测任务', '0.10', '所有任务完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('159', 'CZ2022-0159', '2022-06-29', '生态文明建设', '固废、土壤和辐射污染防治', '完成辐射安全监管工作任务', '0.10', '所有任务完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('160', 'CZ2022-0160', '2022-06-29', '生态文明建设', '美丽浙江建设', '完成生态文明建设目标责任制考核任务', '0.70', '所有任务完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('161', 'CZ2022-0161', '2022-06-29', '生态文明建设', '美丽浙江建设', '完成减污降碳协同管理碳排放基础数据管理工作', '0.20', '所有任务完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('162', 'CZ2022-0162', '2022-06-29', '生态文明建设', '美丽浙江建设', '完成河长制、宣传报道、督查整改、废旧商品回收体系建设、传统产业高排放企业整治等任务', '0.20', '所有任务完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('163', 'CZ2022-0163', '2022-06-29', '生态文明建设', '美丽浙江建设', '完成生态环境满意度评价工作任务', '0.30', '所有任务完成任务要求得该项赋分，不完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('164', 'CZ2022-0164', '2022-06-29', '精神文明建设', '新时代文明实践所、站建设', '全年新建成文明实践点', '0.05', '全年完成目标任务指标的得该项满分，未完成目标任务指标的，按照该项未完成指标条目赋分扣分。', '5个', null);
INSERT INTO `ta_assessment` VALUES ('165', 'CZ2022-0165', '2022-06-29', '精神文明建设', '新时代文明实践所、站建设', '所、站每季度开展理论政策宣讲、文化文艺服务、助学支教、医疗健身、科学普及、法律服务、卫生环保、扶贫帮困、社会治安、文明旅游、文明交通、智慧助老等文明实践志愿服务活动（不少于5类）', '0.25', '全年完成目标任务指标的得该项满分，未完成目标任务指标的，按照该项未完成指标条目赋分扣分。', '5场', null);
INSERT INTO `ta_assessment` VALUES ('166', 'CZ2022-0166', '2022-06-29', '精神文明建设', '文明乡风建设', '年举办线上线下相结合的“办酒不铺张”、文明餐桌、家庭家教家风、文明好习惯养成行动等主题教育实践活动各不少于1场。（每场0.05分）', '0.20', '每场0.05分。全年完成目标任务指标的得该项满分，未完成目标任务指标的，按照该项未完成指标条目赋分扣分。', null, null);
INSERT INTO `ta_assessment` VALUES ('167', 'CZ2022-0167', '2022-06-29', '精神文明建设', '志愿服务工作', '完成镇（街道）辖区所有志愿队伍入驻', '0.05', '全年完成目标任务指标的得该项满分，未完成目标任务指标的，按照该项未完成指标条目赋分扣分。', null, null);
INSERT INTO `ta_assessment` VALUES ('168', 'CZ2022-0168', '2022-06-29', '精神文明建设', '志愿服务工作', '入驻队伍每周有不少于1场活动的发布和签到', '0.05', '全年完成目标任务指标的得该项满分，未完成目标任务指标的，按照该项未完成指标条目赋分扣分。', null, null);
INSERT INTO `ta_assessment` VALUES ('169', 'CZ2022-0169', '2022-06-29', '精神文明建设', '志愿服务工作', '全年在志愿浙江上，镇（街道）注册志愿者人数占本地常住人口比例不低于15%', '0.05', '全年完成目标任务指标的得该项满分，未完成目标任务指标的，按照该项未完成指标条目赋分扣分。', null, null);
INSERT INTO `ta_assessment` VALUES ('170', 'CZ2022-0170', '2022-06-29', '精神文明建设', '志愿服务工作', '记录的人均志愿服务时长不低于12小时', '0.05', '全年完成目标任务指标的得该项满分，未完成目标任务指标的，按照该项未完成指标条目赋分扣分。', null, null);
INSERT INTO `ta_assessment` VALUES ('171', 'CZ2022-0171', '2022-06-29', '精神文明建设', '志愿服务工作', '有志愿服务时间记录的志愿者人数占注册志愿者总人数的比例不低于50%', '0.05', '全年完成目标任务指标的得该项满分，未完成目标任务指标的，按照该项未完成指标条目赋分扣分。', null, null);
INSERT INTO `ta_assessment` VALUES ('172', 'CZ2022-0172', '2022-06-29', '精神文明建设', '志愿服务工作', '活动签到场次和发布场次数据不低于全县平均水平', '0.05', '全年完成目标任务指标的得该项满分，未完成目标任务指标的，按照该项未完成指标条目赋分扣分。', null, null);
INSERT INTO `ta_assessment` VALUES ('173', 'CZ2022-0173', '2022-06-29', '精神文明建设', '道德典型选树工作', '全年好人候选人报送数量每月不少于1人', '0.10', '全年完成目标任务指标的得该项满分，未完成目标任务指标的，按照该项未完成指标条目赋分扣分。', null, null);
INSERT INTO `ta_assessment` VALUES ('174', 'CZ2022-0174', '2022-06-29', '精神文明建设', '道德典型选树工作', '入选市级以上好人榜不少于1人', '0.10', '全年完成目标任务指标的得该项满分，未完成目标任务指标的，按照该项未完成指标条目赋分扣分。', null, null);
INSERT INTO `ta_assessment` VALUES ('175', 'CZ2022-0175', '2022-06-29', '城乡品质提升', '重点项目建设', '城乡风貌样板区和未来社区建设', '0.02', '目标任务中，除明确以排名制计分的，其他按完成率达100%及以上的得该项赋分，未完成任务的按完成率计分。', '完成第二批城乡风貌区申报', null);
INSERT INTO `ta_assessment` VALUES ('176', 'CZ2022-0176', '2022-06-29', '城乡品质提升', '城乡有机更新', '征搬迁和农户集聚', '0.40', '目标任务中，除明确以排名制计分的，其他按完成率达100%及以上的得该项赋分，未完成任务的按完成率计分。', '100户', null);
INSERT INTO `ta_assessment` VALUES ('177', 'CZ2022-0177', '2022-06-29', '城乡品质提升', '城乡有机更新', '城乡危旧房解危', '0.20', '目标任务中，除明确以排名制计分的，其他按完成率达100%及以上的得该项赋分，未完成任务的按完成率计分。每季度开展城乡危旧房滚动排查、“动态清零”（0.1分）。按要求完成每季度对90年前农房巡查，年底根据巡查情况进行综合排名计分，1-3名得0.1分，4-6名得0.09分，7-9名得0.08分，未按最晚时间要求完成巡查的，每季度扣0.02分，扣完为止。', null, null);
INSERT INTO `ta_assessment` VALUES ('178', 'CZ2022-0178', '2022-06-29', '城乡品质提升', '基础设施和公园绿地建设', '新增公园绿地12.7万平方米', '0.20', '目标任务中，除明确以排名制计分的，其他按完成率达100%及以上的得该项赋分，未完成任务的按完成率计分。', '3.2万平方米', null);
INSERT INTO `ta_assessment` VALUES ('179', 'CZ2022-0179', '2022-06-29', '城乡品质提升', '基础设施和公园绿地建设', '新建农村污水管网178.3公里，新增纳管5000户', '0.10', '目标任务中，除明确以排名制计分的，其他按完成率达100%及以上的得该项赋分，未完成任务的按完成率计分。', '21.3公里、478户', null);
INSERT INTO `ta_assessment` VALUES ('180', 'CZ2022-0180', '2022-06-29', '城乡品质提升', '基础设施和公园绿地建设', '做好农村污水长效运维管理', '0.20', '目标任务中，除明确以排名制计分的，其他按完成率达100%及以上的得该项赋分，未完成任务的按完成率计分。根据县级农村人居环境巡查农村生活污水单项年底综合排名计分，1-3名得0.2分，4-6名得0.15分，7-9名得0.1分。市级检查农村生活污水单项得分少于（含）10分且排名4-9名的，每次扣0.05分，扣完为止。', null, null);
INSERT INTO `ta_assessment` VALUES ('181', 'CZ2022-0181', '2022-06-29', '城乡品质提升', '民生服务项目建设', '完成既有住宅加装电梯19台', '0.10', '目标任务中，除明确以排名制计分的，其他按完成率达100%及以上的得该项赋分，未完成任务的按完成率计分。', '1台', null);
INSERT INTO `ta_assessment` VALUES ('182', 'CZ2022-0182', '2022-06-29', '城乡品质提升', '民生服务项目建设', '培育县级“红色物业”项目5个以上', '0.05', '目标任务中，除明确以排名制计分的，其他按完成率达100%及以上的得该项赋分，未完成任务的按完成率计分。', '1个', null);
INSERT INTO `ta_assessment` VALUES ('183', 'CZ2022-0183', '2022-06-29', '城乡品质提升', '民生服务项目建设', '建设（筹集）保障性租赁住房任务', '0.15', '目标任务中，除明确以排名制计分的，其他按完成率达100%及以上的得该项赋分，未完成任务的按完成率计分。', '240套', null);
INSERT INTO `ta_assessment` VALUES ('184', 'CZ2022-0184', '2022-06-29', '城乡品质提升', '美丽城镇建设', '省级美丽城镇样板创建', '0.15', '目标任务中，除明确以排名制计分的，其他按完成率达100%及以上的得该项赋分，未完成任务的按完成率计分。', '百步经济开发区（百步镇）完成省级工业特色型美丽城镇样板创建相关工作', null);
INSERT INTO `ta_assessment` VALUES ('185', 'CZ2022-0185', '2022-06-29', '城乡品质提升', '美丽城镇建设', '小城镇长效管理', '0.30', '目标任务中，除明确以排名制计分的，其他按完成率达100%及以上的得该项赋分，未完成任务的按完成率计分。根据每季度县小城镇环境卫生综合整治巡查考核，年底进行综合排名计分，1-3名得0.3分，4-6名得0.2分，7-9名得0.1分。每月发现问题未按时间要求完成整改的，每个问题扣0.05分，扣完为止。', null, null);
INSERT INTO `ta_assessment` VALUES ('186', 'CZ2022-0186', '2022-06-29', '城乡品质提升', '美丽城镇建设', '美丽城镇宣传', '0.15', '目标任务中，除明确以排名制计分的，其他按完成率达100%及以上的得该项赋分，未完成任务的按完成率计分。除武原街道和望海街道以外，参照《海盐县2022年度美丽城镇建设宣传工作考核办法》，根据年底总分进行排名计分，1-3名得0.15分，4-6名得0.1分，7-9名得0.05分。每月未完成最低信息报送任务量的，每月扣0.01分，扣完为止。', null, null);
INSERT INTO `ta_assessment` VALUES ('187', 'CZ2022-0187', '2022-06-29', '宜业在盐', '参保扩面任务等省、市下达指标后再分解。', '参保扩面任务等省、市下达指标后再分解。', '0.20', null, null, null);
INSERT INTO `ta_assessment` VALUES ('188', 'CZ2022-0188', '2022-06-29', '宜业在盐', '各镇（街道）每月重点群体帮扶率', '各镇（街道）每月重点群体帮扶率', '0.20', '各镇（街道）每月重点群体帮扶率均维持在96%以上（暂定，待市里下达指标后再作调整）。每月底对各镇（街道）完成情况进行通报，发现一次未达标扣0.03分。', '96%以上（暂定）', null);
INSERT INTO `ta_assessment` VALUES ('189', 'CZ2022-0189', '2022-06-29', '宜业在盐', '全县户籍人口基本医疗保险参保率达到99%以上，嘉兴大病无忧参保率达到65%以上，完成市下达的目标任务', '全县户籍人口基本医疗保险参保率达到99%以上，嘉兴大病无忧参保率达到65%以上，完成市下达的目标任务', '0.20', '全县户籍人口基本医疗保险参保率达到99%以上，嘉兴大病无忧参保率达到65%以上，完成市下达的目标任务', '99%、65%', null);
INSERT INTO `ta_assessment` VALUES ('190', 'CZ2022-0190', '2022-06-29', '宜业在盐', '落实符合条件的困难群众资助参保率和政策落实率', '落实符合条件的困难群众资助参保率和政策落实率', '0.10', '落实符合条件的困难群众资助参保率和政策落实率均达到100%', '100%', null);
INSERT INTO `ta_assessment` VALUES ('191', 'CZ2022-0191', '2022-06-29', '宜业在盐', '村（社区）公益性岗位残疾人工作专职委员覆盖率', '村（社区）公益性岗位残疾人工作专职委员覆盖率', '0.20', '力争村（社区）公益性岗位残疾人工作专职委员覆盖率20%以上。（每少1个百分点，扣总分的5%）', '20%以上', null);
INSERT INTO `ta_assessment` VALUES ('192', 'CZ2022-0192', '2022-06-29', '优学在盐', '规范民办幼儿园发展', '规范民办幼儿园发展', '0.30', '规范管理；全园平均班额超过30人、办园规模超过教育局核定的班级数、专任教师工资待遇未达到省规定的相应要求、未按标准配足配齐教职工，每发生一项扣0.02分（武原街道每发生一项扣0.005分）。安全工作(0.1分)；安全、疫情防控工作被县级及以上暗访扣分的，每发生一起扣0.1分（武原街道每发生一项扣0.025分）。发生安全责任事故的，每发生一起扣0.1分（武原街道每发生一项扣0.025分）。扣完为止', null, null);
INSERT INTO `ta_assessment` VALUES ('193', 'CZ2022-0193', '2022-06-29', '优学在盐', '推动“双减”工作落实落地，加强培训机构属地管理，维护良好教育生态', '推动“双减”工作落实落地，加强培训机构属地管理，维护良好教育生态', '0.20', '未按要求完成校外培训机构日常巡查或巡查不力，每次扣0.02分；发生隐形变异等违规培训举报并查实的，每次扣0.1分（武原街道扣0.05分）。扣完为止。', null, null);
INSERT INTO `ta_assessment` VALUES ('194', 'CZ2022-0194', '2022-06-29', '优学在盐', '确保属地对成人教育经费的投入力度，以创建打造品牌特色，逐步形成被社会各界认可的职成教育品牌项目', '确保属地对成人教育经费的投入力度，以创建打造品牌特色，逐步形成被社会各界认可的职成教育品牌项目', '0.30', '打造年度职成教育品牌项目1个及以上进行申报并参加评比，未完成扣0.1分；重视职成教育，各镇、街道按常住人口数人均2元拨付给属地成校社区教育经费，未足额拨付的酌情扣分。', null, null);
INSERT INTO `ta_assessment` VALUES ('195', 'CZ2022-0195', '2022-06-29', '优学在盐', '积极推进在建幼儿园（含周边配套工程）建设', '积极推进在建幼儿园（含周边配套工程）建设', '0.20', '未能在秋季开学投入使用的，扣0.05-0.1分。（0.2分）（项目建设涉及百步、开发区、望海、沈荡；澉浦镇没有民办幼儿园。）', null, null);
INSERT INTO `ta_assessment` VALUES ('196', 'CZ2022-0196', '2022-06-29', '健康在盐', '坚决筑牢“外防输入、内防反弹”防线，落实疫情防控措施', '坚决筑牢“外防输入、内防反弹”防线，落实疫情防控措施', '0.30', null, null, null);
INSERT INTO `ta_assessment` VALUES ('197', 'CZ2022-0197', '2022-06-29', '健康在盐', '深入开展爱国卫生运动，推进除“四害”村建设', '深入开展爱国卫生运动，推进除“四害”村建设', '0.20', '各镇（街道）通过国家卫生镇（县）省级复审（0.1分）；各镇（街道）完成年度除“四害”村任务（包括新增不少于1个、美丽乡村精品村均为除“四害”村等上级任务）（0.05分），年底40%以上的村获评市级及以上除“四害”村或新创一个省样板村（含升级为省级）（0.05分）', null, null);
INSERT INTO `ta_assessment` VALUES ('198', 'CZ2022-0198', '2022-06-29', '健康在盐', '实施基层卫生健康综合试验区建设，完成基本公共卫生服务任务', '实施基层卫生健康综合试验区建设，完成基本公共卫生服务任务', '0.30', '镇（街道）、村（社区）均公共卫生委员会覆盖率100%，按基本公共卫生服务项目省定标准的15%补助辖区基层医疗卫生机构公卫经费，完成年度家庭医生签约指标任务，上半年启动签约服务工作，三季度完成年度任务数50%，四季度完成年度任务数100%。', null, null);
INSERT INTO `ta_assessment` VALUES ('199', 'CZ2022-0199', '2022-06-29', '健康在盐', '落实三救三献工作，提升保障力度', '落实三救三献工作，提升保障力度', '0.20', '每个AED设点单位完成救护员取证培训不少于5人，各镇（街道）四季度完成AED安装并投入使用，配置率达到1.5台/万人（按常住人口计算）；按照辖区内每百常住人口1.39人的数量，完成年度无偿献血任务，一季度完成25%、二季度完成50%、三季度完成80%、四季度完成100%。', null, null);
INSERT INTO `ta_assessment` VALUES ('200', 'CZ2022-0200', '2022-06-29', '健康在盐', '巩固提升慢性病综合防控工作', '巩固提升慢性病综合防控工作', '0.30', '年度重点人群结直肠癌筛查率达50%，至2022年覆盖目标人群比例达60%；各镇（街道）新建健康支持性环境（健康步道、健康主题公园、健康单位、健康餐厅、健康食堂等）不少于1个；开展全民健康生活方式“健康体重”专项行动。未完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('201', 'CZ2022-0201', '2022-06-29', '健康在盐', '每个镇（街道）建设1个三星级智慧化社区卫生服务站', '每个镇（街道）建设1个三星级智慧化社区卫生服务站', '0.20', '一季度完成三星级智慧化社区卫生服务站（村卫生室）选址；二季度完成三星级智慧化社区卫生服务站（村卫生室）工程招标；三季度完成智慧化社区卫生服务站改造进度50%；四季度沈荡镇卫生院开工，于城镇卫生院迁建项目立项，完成方案设计，智慧化社区卫生服务站落地运行数字健康服务应用。', '1个', null);
INSERT INTO `ta_assessment` VALUES ('202', 'CZ2022-0202', '2022-06-29', '健康在盐', '县级体育赛事（“乡村共富”浙江省文化礼堂运动会海盐县预选赛，项目根据省局规定）', '县级体育赛事（“乡村共富”浙江省文化礼堂运动会海盐县预选赛，项目根据省局规定）', '0.10', '评分细则：县级赛事（0.1分），镇级赛事（0.025分）。(一季度完成比赛方案制定；二至三季度分步开展比赛；四季度完成资料收集并组队参加省市级决赛。)', '1场', null);
INSERT INTO `ta_assessment` VALUES ('203', 'CZ2022-0203', '2022-06-29', '健康在盐', '镇（街道）级体育赛事（各镇、街道）', '镇（街道）级体育赛事（各镇、街道）', '0.10', '评分细则：县级赛事（0.1分），镇级赛事（0.025分）。(一季度完成比赛方案制定；二至三季度分步开展比赛；四季度完成资料收集并组队参加省市级决赛。)', '4场', null);
INSERT INTO `ta_assessment` VALUES ('204', 'CZ2022-0204', '2022-06-29', '健康在盐', '建设4个体医养融合模式“运动家”智慧体育社区（武原、西塘桥、秦山、澉浦各1个），百姓健身房模式“运动家”智慧体育社区（沈荡、于城、通元、百步、望海各1个）', '建设4个体医养融合模式“运动家”智慧体育社区（武原、西塘桥、秦山、澉浦各1个），百姓健身房模式“运动家”智慧体育社区（沈荡、于城、通元、百步、望海各1个）', '0.20', '一季度完成选址；二季度完成招标设计；三季度开展施工安装；四季度完成竣工验收并投入使用。', '1个', null);
INSERT INTO `ta_assessment` VALUES ('205', 'CZ2022-0205', '2022-06-29', '健康在盐', '新建健心客厅', '新建健心客厅', '0.10', '一季度完成选址，二季度开工建设，三季度完成建设，四季度实现对外开放。', '1家', null);
INSERT INTO `ta_assessment` VALUES ('206', 'CZ2022-0206', '2022-06-29', '健康在盐', '食品药品安全工作综合评价', '食品药品安全工作综合评价', '0.40', '食品药品安全指数根据《海盐县食品药品安全工作考核评议办法》年终进行赋分排名。农贸市场改造提升工作：持续推进农贸市场改造提升，巩固市场各类创建成果，2022年新创建“五化农贸市场”2家（望海1家、百步1家）、创建五星级文明规范市场1家（武原好邻居农贸市场）、三星级文明规范市场1家（武原街道光明农贸市场）；有关农贸市场通过“五化市场”“星级文明规范市场”“放心农贸市场”等复评。', null, null);
INSERT INTO `ta_assessment` VALUES ('207', 'CZ2022-0207', '2022-06-29', '颐养在盐', '根据民生实事项目任务分配要求，在10月底前完成适老化改造项目、新增老年食堂等助餐点及助餐人数、新增持证护理员、居家养老服务中心无感服务智能终端配备', '根据民生实事项目任务分配要求，在10月底前完成适老化改造项目、新增老年食堂等助餐点及助餐人数、新增持证护理员、居家养老服务中心无感服务智能终端配备', '0.30', '根据民生实事项目任务分配要求，在10月底前完成适老化改造项目、新增老年食堂等助餐点及助餐人数、新增持证护理员、居家养老服务中心无感服务智能终端配备', null, null);
INSERT INTO `ta_assessment` VALUES ('208', 'CZ2022-0208', '2022-06-29', '颐养在盐', '实施居家和社区基本养老服务提升行动，按照具体分配额完成任务。', '实施居家和社区基本养老服务提升行动，按照具体分配额完成任务。', '0.20', '实施居家和社区基本养老服务提升行动，按照具体分配额完成任务。', null, null);
INSERT INTO `ta_assessment` VALUES ('209', 'CZ2022-0209', '2022-06-29', '颐养在盐', '全年实现孤寡、空巢、独居、高龄老年人日常探访全覆盖。', '全年实现孤寡、空巢、独居、高龄老年人日常探访全覆盖。', '0.20', '全年实现孤寡、空巢、独居、高龄老年人日常探访全覆盖。', null, null);
INSERT INTO `ta_assessment` VALUES ('210', 'CZ2022-0210', '2022-06-29', '颐养在盐', '优化居家养老服务照料中心功能布局，提档升级为3A级及以上标准', '优化居家养老服务照料中心功能布局，提档升级为3A级及以上标准', '0.20', '优化居家养老服务照料中心功能布局，提档升级为3A级及以上标准', null, null);
INSERT INTO `ta_assessment` VALUES ('211', 'CZ2022-0211', '2022-06-29', '颐养在盐', '提升机构服务能力，养老机构实现基层党组织全覆盖，每60张养老机构床位配备1名社会工作者（西塘桥、望海、于城、百步、澉浦、通元）', '提升机构服务能力，养老机构实现基层党组织全覆盖，每60张养老机构床位配备1名社会工作者（西塘桥、望海、于城、百步、澉浦、通元）', '0.20', '提升机构服务能力，养老机构实现基层党组织全覆盖，每60张养老机构床位配备1名社会工作者（西塘桥、望海、于城、百步、澉浦、通元）', null, null);
INSERT INTO `ta_assessment` VALUES ('212', 'CZ2022-0212', '2022-06-29', '颐养在盐', '持续推进长护险区域标准化建设，数字赋能推进长护险提质扩面，确保符合条件重度失能人员长期护理保险享受率达到100%、服务质量回访反馈率达到100%', '持续推进长护险区域标准化建设，数字赋能推进长护险提质扩面，确保符合条件重度失能人员长期护理保险享受率达到100%、服务质量回访反馈率达到100%', '0.20', '持续推进长护险区域标准化建设，数字赋能推进长护险提质扩面，确保符合条件重度失能人员长期护理保险享受率达到100%、服务质量回访反馈率达到100%', '100%', null);
INSERT INTO `ta_assessment` VALUES ('213', 'CZ2022-0213', '2022-06-29', '温暖在盐', '落实社会救助政策', '一季度100%签订特困人员救助供养协议，二至四季度配合做好“暖巢行动”2.0提升帮扶，二季度组织开展岗位培训竞赛，全年开展面向困难群众的志愿服务活动不少于4次；四季度“助联体”覆盖率达100%；每季入户调查率、探访关爱率、幸福清单送达率均达100%。', '0.30', '一季度100%签订特困人员救助供养协议，二至四季度配合做好“暖巢行动”2.0提升帮扶，二季度组织开展岗位培训竞赛，全年开展面向困难群众的志愿服务活动不少于4次；四季度“助联体”覆盖率达100%；每季入户调查率、探访关爱率、幸福清单送达率均达100%。', null, null);
INSERT INTO `ta_assessment` VALUES ('214', 'CZ2022-0214', '2022-06-29', '温暖在盐', '四季度完成居民会客厅建设', '四季度完成居民会客厅建设', '0.10', '四季度完成60%居民会客厅建设', '60%', null);
INSERT INTO `ta_assessment` VALUES ('215', 'CZ2022-0215', '2022-06-29', '温暖在盐', '组织全国社会工作者职业水平考试，社区工作者持证率', '组织全国社会工作者职业水平考试，社区工作者持证率', '0.10', '组织全国社会工作者职业水平考试，社区工作者持证率达50%', '50%', null);
INSERT INTO `ta_assessment` VALUES ('216', 'CZ2022-0216', '2022-06-29', '温暖在盐', '积极开展公益创投，社会工作站规范化项目化运行，新增1支标记的活跃的志愿服务组织', '积极开展公益创投，社会工作站规范化项目化运行，新增1支标记的活跃的志愿服务组织', '0.10', '积极开展公益创投，社会工作站规范化项目化运行，新增1支标记的活跃的志愿服务组织', '1支', null);
INSERT INTO `ta_assessment` VALUES ('217', 'CZ2022-0217', '2022-06-29', '温暖在盐', '成立社区发展基金会等慈善组织', '成立社区发展基金会等慈善组织', '0.10', '成立1个社区发展基金会等慈善组织', '1个', null);
INSERT INTO `ta_assessment` VALUES ('218', 'CZ2022-0218', '2022-06-29', '温暖在盐', '新增慈善信托资金规模达到50万', '新增慈善信托资金规模达到50万', '0.10', '新增慈善信托资金规模达到50万', '50万', null);
INSERT INTO `ta_assessment` VALUES ('219', 'CZ2022-0219', '2022-06-29', '温暖在盐', '打造2项以上婚俗改革示范型标志性成果，完成集中补证分配量。望海、秦山、于城开工建设安息堂，沈荡、通元完成安息堂提升改造任务。', '打造2项以上婚俗改革示范型标志性成果，完成集中补证分配量。望海、秦山、于城开工建设安息堂，沈荡、通元完成安息堂提升改造任务。', '0.20', '打造2项以上婚俗改革示范型标志性成果，完成集中补证分配量。望海、秦山、于城开工建设安息堂，沈荡、通元完成安息堂提升改造任务。', null, null);
INSERT INTO `ta_assessment` VALUES ('220', 'CZ2022-0220', '2022-06-29', '温暖在盐', '全年落实未成年人关爱保护，镇（街道）未成年人保护工作站实体化运行，形成一镇一品。一季度完成全国未成年人保护示范县创建指标任务，三季度完成2家示范型儿童之家创建。', '全年落实未成年人关爱保护，镇（街道）未成年人保护工作站实体化运行，形成一镇一品。一季度完成全国未成年人保护示范县创建指标任务，三季度完成2家示范型儿童之家创建。', '0.20', '全年落实未成年人关爱保护，镇（街道）未成年人保护工作站实体化运行，形成一镇一品。一季度完成全国未成年人保护示范县创建指标任务，三季度完成2家示范型儿童之家创建。', null, null);
INSERT INTO `ta_assessment` VALUES ('221', 'CZ2022-0221', '2022-06-29', '温暖在盐', '开展3岁以下婴幼儿照护服务工作', '新增托育机构1家或托班3个；未完成不得分', '0.20', '武原街道新增普惠性托育机构2家、新增托位300个，其余镇（街道）均有新增托育机构1家或托班3个；未完成不得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('222', 'CZ2022-0222', '2022-06-29', '温暖在盐', '11月底前完成镇（街道）退役军人服务站的迁建工作（秦山、通元）、提升建设（其余7家），省级枫桥式服务站创建不少于1家。2月底前完成50%的存量对象建档立卡，启动优待证发放申请；3月底，全面完成建档立卡工作，完成全市退役军人优待证首发；4月底全面完成退役军人优待证发放申请。', '11月底前完成镇（街道）退役军人服务站的迁建工作（秦山、通元）、提升建设（其余7家），省级枫桥式服务站创建不少于1家。2月底前完成50%的存量对象建档立卡，启动优待证发放申请；3月底，全面完成建档立卡工作，完成全市退役军人优待证首发；4月底全面完成退役军人优待证发放申请。', '0.30', '11月底前完成镇（街道）退役军人服务站的迁建工作（秦山、通元）、提升建设（其余7家），省级枫桥式服务站创建不少于1家。2月底前完成50%的存量对象建档立卡，启动优待证发放申请；3月底，全面完成建档立卡工作，完成全市退役军人优待证首发；4月底全面完成退役军人优待证发放申请。', null, null);
INSERT INTO `ta_assessment` VALUES ('223', 'CZ2022-0223', '2022-06-29', '温暖在盐', '研究制定并落实本地军人军属、退役军人和其他优抚对象基本优待目录清单，各镇（街道）6月份前提升完善不少于40家（武原100家、西塘桥50家）的崇军商家，拓展扩大优待证使用场景范围。', '研究制定并落实本地军人军属、退役军人和其他优抚对象基本优待目录清单，各镇（街道）6月份前提升完善不少于40家（武原100家、西塘桥50家）的崇军商家，拓展扩大优待证使用场景范围。', '0.20', '研究制定并落实本地军人军属、退役军人和其他优抚对象基本优待目录清单，各镇（街道）6月份前提升完善不少于40家（武原100家、西塘桥50家）的崇军商家，拓展扩大优待证使用场景范围。', '40家', null);
INSERT INTO `ta_assessment` VALUES ('224', 'CZ2022-0224', '2022-06-29', '温暖在盐', '健全新兵入伍欢送、光荣牌悬挂、立功受奖报喜、退役返乡欢迎、节日走访慰问、重大庆典邀请等全流程工作机制，实现光荣牌悬挂率，立功喜报送达率，退役军人走访率，重点优抚对象、获二等功以上奖励的退役军人和现役军人家属慰问率全部达到100%，退役军人满意度测评满意率达到90%以上。', '健全新兵入伍欢送、光荣牌悬挂、立功受奖报喜、退役返乡欢迎、节日走访慰问、重大庆典邀请等全流程工作机制，实现光荣牌悬挂率，立功喜报送达率，退役军人走访率，重点优抚对象、获二等功以上奖励的退役军人和现役军人家属慰问率全部达到100%，退役军人满意度测评满意率达到90%以上。', '0.10', '健全新兵入伍欢送、光荣牌悬挂、立功受奖报喜、退役返乡欢迎、节日走访慰问、重大庆典邀请等全流程工作机制，实现光荣牌悬挂率，立功喜报送达率，退役军人走访率，重点优抚对象、获二等功以上奖励的退役军人和现役军人家属慰问率全部达到100%，退役军人满意度测评满意率达到90%以上。', null, null);
INSERT INTO `ta_assessment` VALUES ('225', 'CZ2022-0225', '2022-06-29', '温暖在盐', '新建智慧书房4家（武原、西塘桥各2家），改建智慧书房9家[各镇（街道）各1家]，新建礼堂书屋12家（武原、西塘桥、望海、于城、澉浦、通元各1家，秦山、沈荡、百步各2家），新建文化馆企业分馆5家（武原、西塘桥、望海、秦山、百步各1家）；新建乡村文化名师工作室4家（西塘桥、秦山、沈荡、通元各1家）；新建省级旅游驿站2个（武原、澉浦各1个），开展非物质文化遗产数字化保护工作。一季度完成选址，二季度开工建设，三季度完成建设，四季度实现对外开放。', '新建智慧书房4家（武原、西塘桥各2家），改建智慧书房9家[各镇（街道）各1家]，新建礼堂书屋12家（武原、西塘桥、望海、于城、澉浦、通元各1家，秦山、沈荡、百步各2家），新建文化馆企业分馆5家（武原、西塘桥、望海、秦山、百步各1家）；新建乡村文化名师工作室4家（西塘桥、秦山、沈荡、通元各1家）；新建省级旅游驿站2个（武原、澉浦各1个），开展非物质文化遗产数字化保护工作。一季度完成选址，二季度开工建设，三季度完成建设，四季度实现对外开放。', '0.30', '新建智慧书房4家（武原、西塘桥各2家），改建智慧书房9家[各镇（街道）各1家]，新建礼堂书屋12家（武原、西塘桥、望海、于城、澉浦、通元各1家，秦山、沈荡、百步各2家），新建文化馆企业分馆5家（武原、西塘桥、望海、秦山、百步各1家）；新建乡村文化名师工作室4家（西塘桥、秦山、沈荡、通元各1家）；新建省级旅游驿站2个（武原、澉浦各1个），开展非物质文化遗产数字化保护工作。一季度完成选址，二季度开工建设，三季度完成建设，四季度实现对外开放。', null, null);
INSERT INTO `ta_assessment` VALUES ('226', 'CZ2022-0226', '2022-06-29', '温暖在盐', '全年落实文广旅体行业及艺术、体育类培训市场检查管理措施，旅游新业态第三方安全评估全覆盖', '全年落实文广旅体行业及艺术、体育类培训市场检查管理措施，旅游新业态第三方安全评估全覆盖', '0.20', '全年落实文广旅体行业及艺术、体育类培训市场检查管理措施，旅游新业态第三方安全评估全覆盖', null, null);
INSERT INTO `ta_assessment` VALUES ('227', 'CZ2022-0227', '2022-06-29', '温暖在盐', '完成残疾人家庭无障碍改造21户。10月底前（每少1户，相应扣分）。9月底前，百步完成省级民生实事工程公共服务场所无障碍9个点位改造（每少1个点，扣总分的10%）', '完成残疾人家庭无障碍改造21户。10月底前（每少1户，相应扣分）。9月底前，百步完成省级民生实事工程公共服务场所无障碍9个点位改造（每少1个点，扣总分的10%）', '0.20', '完成残疾人家庭无障碍改造21户。10月底前（每少1户，相应扣分）。9月底前，百步完成省级民生实事工程公共服务场所无障碍9个点位改造（每少1个点，扣总分的10%）', null, null);
INSERT INTO `ta_assessment` VALUES ('228', 'CZ2022-0228', '2022-06-29', '温暖在盐', '开展放心消费在我“嘉”云社区建设，将放心消费单位纳入云社区管理，提升消费环境满意度。3月底前，云社区组建2个，完成每个云社区管理机构建设；6月底前，完成“海盐农商银行杯”放心消费在我“嘉”创建竞赛活动，形成云社区规范管理格局；9月底前，完成放心消费单位云社区全覆盖；12月底前，根据云社区运行情况进行总结，提升云社区在放心消费创建中的突出作用。', '开展放心消费在我“嘉”云社区建设，将放心消费单位纳入云社区管理，提升消费环境满意度。3月底前，云社区组建2个，完成每个云社区管理机构建设；6月底前，完成“海盐农商银行杯”放心消费在我“嘉”创建竞赛活动，形成云社区规范管理格局；9月底前，完成放心消费单位云社区全覆盖；12月底前，根据云社区运行情况进行总结，提升云社区在放心消费创建中的突出作用。', '0.20', '3月底前，云社区组建2个，完成每个云社区管理机构建设；6月底前，完成“海盐农商银行杯”放心消费在我“嘉”创建竞赛活动，形成云社区规范管理格局；9月底前，完成放心消费单位云社区全覆盖；12月底前，根据云社区运行情况进行总结，提升云社区在放心消费创建中的突出作用。', null, null);
INSERT INTO `ta_assessment` VALUES ('229', 'CZ2022-0229', '2022-06-29', '平安建设', '按照《2022年度嘉兴市平安镇（街道）考核评审条件》考核结果计分', '按照《2022年度嘉兴市平安镇（街道）考核评审条件》考核结果计分', '2.50', '按照《2022年度嘉兴市平安镇（街道）考核评审条件》考核结果计分', null, null);
INSERT INTO `ta_assessment` VALUES ('230', 'CZ2022-0230', '2022-06-29', '信访工作', '到市去省进京走访人次按辖区实有人口万人比值进行排名赋分，1-3名得0.2分，4-6名得0.15分，7-9名得0.1分', '到市去省进京走访人次按辖区实有人口万人比值进行排名赋分，1-3名得0.2分，4-6名得0.15分，7-9名得0.1分', '0.20', '到市去省进京走访人次按辖区实有人口万人比值进行排名赋分，1-3名得0.2分，4-6名得0.15分，7-9名得0.1分', null, null);
INSERT INTO `ta_assessment` VALUES ('231', 'CZ2022-0231', '2022-06-29', '信访工作', '到市个访的，每人次扣0.02分；集体访的，5至9人的每批次扣0.2分，10至19人的每批次扣0.3分，20人以上的每批次扣0.4分；到市扰序的个访加倍扣分，集体访扰序的扣0.4分。去省个访的每人次扣0.05分；集体访的，5至９人的每批次扣0.3分，10人以上的每批次扣0.4分；去省扰序的个访加倍扣分，集体访扰序的扣0.4分。进京个访的，每人次扣0.2分；发生集体访、进京扰序的扣0.4分；实际进京未在国家信访局登记的每人次扣0.1分；进京途中劝返的，视情减免扣分。', '到市个访的，每人次扣0.02分；集体访的，5至9人的每批次扣0.2分，10至19人的每批次扣0.3分，20人以上的每批次扣0.4分；到市扰序的个访加倍扣分，集体访扰序的扣0.4分。去省个访的每人次扣0.05分；集体访的，5至９人的每批次扣0.3分，10人以上的每批次扣0.4分；去省扰序的个访加倍扣分，集体访扰序的扣0.4分。进京个访的，每人次扣0.2分；发生集体访、进京扰序的扣0.4分；实际进京未在国家信访局登记的每人次扣0.1分；进京途中劝返的，视情减免扣分。', '0.40', '到市个访的，每人次扣0.02分；集体访的，5至9人的每批次扣0.2分，10至19人的每批次扣0.3分，20人以上的每批次扣0.4分；到市扰序的个访加倍扣分，集体访扰序的扣0.4分。去省个访的每人次扣0.05分；集体访的，5至９人的每批次扣0.3分，10人以上的每批次扣0.4分；去省扰序的个访加倍扣分，集体访扰序的扣0.4分。进京个访的，每人次扣0.2分；发生集体访、进京扰序的扣0.4分；实际进京未在国家信访局登记的每人次扣0.1分；进京途中劝返的，视情减免扣分。', null, null);
INSERT INTO `ta_assessment` VALUES ('232', 'CZ2022-0232', '2022-06-29', '信访工作', '开展积案化解清零行动', '开展积案化解清零行动', '0.30', '4月底前，每件积案按规定时限完成化解的，得0.3分；虽在4月底前清零但存在逾期完成情形的，得该件积案赋分值的50%；4月底前未完成清零的，按实际完成比例得分。', null, null);
INSERT INTO `ta_assessment` VALUES ('233', 'CZ2022-0233', '2022-06-29', '信访工作', '年内不发生市级以上交办的新增积案', '年内不发生市级以上交办的新增积案', '0.10', '发生新增积案每件扣0.025分', null, null);
INSERT INTO `ta_assessment` VALUES ('234', 'CZ2022-0234', '2022-06-29', '安全生产', '按照县安委会《2022年度安全生产目标管理责任制考核办法》折算', '按照县安委会《2022年度安全生产目标管理责任制考核办法》折算', '1.20', '按照县安委会《2022年度安全生产目标管理责任制考核办法》折算', null, null);
INSERT INTO `ta_assessment` VALUES ('235', 'CZ2022-0235', '2022-06-29', '交通安全', '实现交通事故亡人数“一个不突破，两个不发生”总目标（即确保道路交通事故亡人数不突破年度控制数，不发生群死群伤道路交通事故，不发生较大以上道路交通事故）。挂牌整治镇（街道）交通事故亡人数得到有效遏制并成功摘牌。', '实现交通事故亡人数“一个不突破，两个不发生”总目标（即确保道路交通事故亡人数不突破年度控制数，不发生群死群伤道路交通事故，不发生较大以上道路交通事故）。挂牌整治镇（街道）交通事故亡人数得到有效遏制并成功摘牌。', '0.20', '实现交通事故亡人数“一个不突破，两个不发生”总目标（即确保道路交通事故亡人数不突破年度控制数，不发生群死群伤道路交通事故，不发生较大以上道路交通事故）。挂牌整治镇（街道）交通事故亡人数得到有效遏制并成功摘牌。', null, null);
INSERT INTO `ta_assessment` VALUES ('236', 'CZ2022-0236', '2022-06-29', '交通安全', '按时完成市级、县级挂牌隐患整治任务，按时完成农村公路标准化路口整治任务', '按时完成市级、县级挂牌隐患整治任务，按时完成农村公路标准化路口整治任务', '0.10', '按时完成市级、县级挂牌隐患整治任务，按时完成农村公路标准化路口整治任务', null, null);
INSERT INTO `ta_assessment` VALUES ('237', 'CZ2022-0237', '2022-06-29', '交通安全', '按时完成超标电动车提前淘汰工作', '按时完成超标电动车提前淘汰工作', '0.10', '按时完成超标电动车提前淘汰工作', null, null);
INSERT INTO `ta_assessment` VALUES ('238', 'CZ2022-0238', '2022-06-29', '交通安全', '电动车头盔佩戴率和守法率', '电动车头盔佩戴率和守法率', '0.10', '电动车头盔佩戴率和守法率不低于95%和90%。', '95%、90%', null);
INSERT INTO `ta_assessment` VALUES ('239', 'CZ2022-0239', '2022-06-29', '消防安全', '全年火灾起数同比去年下降，不发生亡人火灾事故。', '全年火灾起数同比去年下降，不发生亡人火灾事故。', '0.20', '全年火灾起数同比去年下降，不发生亡人火灾事故。', null, null);
INSERT INTO `ta_assessment` VALUES ('240', 'CZ2022-0240', '2022-06-29', '消防安全', '完成消防宣传体验室建设和村（社区）示范体验点的建设', '完成消防宣传体验室建设和村（社区）示范体验点的建设', '0.10', '完成消防宣传体验室建设和村（社区）示范体验点的建设', null, null);
INSERT INTO `ta_assessment` VALUES ('241', 'CZ2022-0241', '2022-06-29', '消防安全', '完成137个（含有物业公司）住宅小区打通生命通道(消防车道划线），全部落实电动自行车集中管理要求措施', '完成137个（含有物业公司）住宅小区打通生命通道(消防车道划线），全部落实电动自行车集中管理要求措施', '0.10', '完成137个（含有物业公司）住宅小区打通生命通道(消防车道划线），全部落实电动自行车集中管理要求措施', null, null);
INSERT INTO `ta_assessment` VALUES ('242', 'CZ2022-0242', '2022-06-29', '消防安全', '完成11处县级及以上挂牌督办的重大火灾隐患单位（区域）的整改。武原、澉浦各2处，其他镇（街道）各1处', '完成11处县级及以上挂牌督办的重大火灾隐患单位（区域）的整改。武原、澉浦各2处，其他镇（街道）各1处', '0.10', '完成11处县级及以上挂牌督办的重大火灾隐患单位（区域）的整改。武原、澉浦各2处，其他镇（街道）各1处', '1处', null);
INSERT INTO `ta_assessment` VALUES ('243', 'CZ2022-0243', '2022-06-29', '消防安全', '消防救援队伍作用发挥及培训演练按指定要求开展', '消防救援队伍作用发挥及培训演练按指定要求开展', '0.10', '消防救援队伍作用发挥及培训演练按指定要求开展', null, null);
INSERT INTO `ta_assessment` VALUES ('244', 'CZ2022-0244', '2022-06-29', '无欠薪县', '政府投资项目未按照四方监管协议按时足额拨付农民工工资，导致拖欠农民工工资的，发生一起扣0.2分', '政府投资项目未按照四方监管协议按时足额拨付农民工工资，导致拖欠农民工工资的，发生一起扣0.2分', '0.20', '政府投资项目未按照四方监管协议按时足额拨付农民工工资，导致拖欠农民工工资的，发生一起扣0.2分', null, null);
INSERT INTO `ta_assessment` VALUES ('245', 'CZ2022-0245', '2022-06-29', '无欠薪县', '按照《海盐县建设领域农民工工资支付管理实施细则》相关规定，对项目工资性工程款拨付监管不到位，导致发生欠薪案件的，发生1起扣0.05分', '按照《海盐县建设领域农民工工资支付管理实施细则》相关规定，对项目工资性工程款拨付监管不到位，导致发生欠薪案件的，发生1起扣0.05分', '0.10', '按照《海盐县建设领域农民工工资支付管理实施细则》相关规定，对项目工资性工程款拨付监管不到位，导致发生欠薪案件的，发生1起扣0.05分', null, null);
INSERT INTO `ta_assessment` VALUES ('246', 'CZ2022-0246', '2022-06-29', '无欠薪县', '及时办结各类欠薪线索', '及时办结各类欠薪线索', '0.10', '部省级平台欠薪线索逾期1件扣0.05分，县级平台欠薪线索逾期1件扣0.02分', null, null);
INSERT INTO `ta_assessment` VALUES ('247', 'CZ2022-0247', '2022-06-29', '无欠薪县', '按要求开展劳动保障书面审查和信用等级评价及劳动用工排查工作', '按要求开展劳动保障书面审查和信用等级评价及劳动用工排查工作', '0.10', '未完成扣0.05分', null, null);
INSERT INTO `ta_assessment` VALUES ('248', 'CZ2022-0248', '2022-06-29', '法治建设', '民主法治村（社区）的创建工作中，省级未达到创建比例的、市级创建未全覆盖的各扣0.2分；申报创建国家级民主法治村（社区）、省级枫桥式司法所、省品牌调解室，但未创建成功的各扣0.05分', '民主法治村（社区）的创建工作中，省级未达到创建比例的、市级创建未全覆盖的各扣0.2分；申报创建国家级民主法治村（社区）、省级枫桥式司法所、省品牌调解室，但未创建成功的各扣0.05分', '0.40', '民主法治村（社区）的创建工作中，省级未达到创建比例的、市级创建未全覆盖的各扣0.2分；申报创建国家级民主法治村（社区）、省级枫桥式司法所、省品牌调解室，但未创建成功的各扣0.05分', null, null);
INSERT INTO `ta_assessment` VALUES ('249', 'CZ2022-0249', '2022-06-29', '法治建设', '重大行政决策、行政规范性文件、行政合同未依规定程序管理的；未规范开展人民调解工作的，各扣0.2分', '重大行政决策、行政规范性文件、行政合同未依规定程序管理的；未规范开展人民调解工作的，各扣0.2分', '0.40', '重大行政决策、行政规范性文件、行政合同未依规定程序管理的；未规范开展人民调解工作的，各扣0.2分', null, null);
INSERT INTO `ta_assessment` VALUES ('250', 'CZ2022-0250', '2022-06-29', '法治建设', '行政执法“三项制度”公开', '行政执法“三项制度”公开', '0.10', '行政处罚、行政许可公示，重大执法决定法制审核未落实的，各扣0.1分；省统一处罚办案系统应用未达标的，扣0.1分', null, null);
INSERT INTO `ta_assessment` VALUES ('251', 'CZ2022-0251', '2022-06-29', '法治建设', '归正人员重新犯罪超考核指标，每发生一起扣0.1分；社区矫正、安置帮教工作管理不规范的，每出现一项扣0.1分。（0.1分）', '归正人员重新犯罪超考核指标，每发生一起扣0.1分；社区矫正、安置帮教工作管理不规范的，每出现一项扣0.1分。（0.1分）', '0.10', '归正人员重新犯罪超考核指标，每发生一起扣0.1分；社区矫正、安置帮教工作管理不规范的，每出现一项扣0.1分。（0.1分）', null, null);
INSERT INTO `ta_assessment` VALUES ('252', 'CZ2022-0252', '2022-06-29', '法治建设', '政务公开', '政务公开', '0.50', '按照《2022年海盐县政务公开考核办法》折算赋分', null, null);

-- ----------------------------
-- Table structure for ta_assessment_external
-- ----------------------------
DROP TABLE IF EXISTS `ta_assessment_external`;
CREATE TABLE `ta_assessment_external` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `level_one` varchar(255) DEFAULT NULL,
  `level_two` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `point` decimal(19,2) DEFAULT NULL,
  `standard` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ta_assessment_external
-- ----------------------------
INSERT INTO `ta_assessment_external` VALUES ('1', 'EZ2022-0001', null, '', '', '测试扣分指标', '-2.00', '测试扣分标准');
INSERT INTO `ta_assessment_external` VALUES ('2', 'EZ2022-0002', null, '', '', '测试加分指标', '3.00', '测试加分标准');
INSERT INTO `ta_assessment_external` VALUES ('3', 'EZ2022-0003', null, '引领力', '党政正职表现情况', '发生失、泄密情况', '-1.00', '发生失、泄密情况的，扣0.5分，被上级通报的，加倍扣分； ');
INSERT INTO `ta_assessment_external` VALUES ('4', 'EZ2022-0004', null, '引领力', '党政正职表现情况', '未在规定时间内完成县委县政府领导批示、函告单、督办单', '-0.10', '未在规定时间内完成县委县政府领导批示、函告单、督办单的，每发现1起扣0.1分；');
INSERT INTO `ta_assessment_external` VALUES ('5', 'EZ2022-0005', null, '引领力', '党政正职表现情况', '未按要求上报请销假、请示报告，值班值守工作落实不到位', '-0.50', '未按要求上报请销假、请示报告，值班值守工作落实不到位的，每发现一次扣0.25分，被上级检查发现的，加倍扣分。             ');
INSERT INTO `ta_assessment_external` VALUES ('6', 'EZ2022-0006', null, '引领力', '队伍建设', '对年轻干部队伍建设不够重视', '-0.50', '对年轻干部队伍建设不够重视，未按要求配备年轻中层干部，视情扣0.1-0.5分。');
INSERT INTO `ta_assessment_external` VALUES ('7', 'EZ2022-0007', null, '引领力', '队伍建设', '公务员平时考核未按照要求开展或者流于形式', '-0.25', '公务员平时考核未按照要求开展或者流于形式的，扣0.25分。');

-- ----------------------------
-- Table structure for ta_assessment_external_usage
-- ----------------------------
DROP TABLE IF EXISTS `ta_assessment_external_usage`;
CREATE TABLE `ta_assessment_external_usage` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `apply_user_id` bigint(20) DEFAULT NULL,
  `external_id` bigint(20) DEFAULT NULL,
  `request_user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKfv4efwcj7ap33f2psvsyy4p03` (`apply_user_id`),
  KEY `FK7nmm8teqn1c69tjj855nvw3sn` (`external_id`),
  KEY `FK7rtq3k6mchwhxhg9woie5s7ws` (`request_user_id`),
  CONSTRAINT `FK7nmm8teqn1c69tjj855nvw3sn` FOREIGN KEY (`external_id`) REFERENCES `ta_assessment_external` (`id`),
  CONSTRAINT `FK7rtq3k6mchwhxhg9woie5s7ws` FOREIGN KEY (`request_user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKfv4efwcj7ap33f2psvsyy4p03` FOREIGN KEY (`apply_user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ta_assessment_external_usage
-- ----------------------------

-- ----------------------------
-- Table structure for ta_assessment_resp_department
-- ----------------------------
DROP TABLE IF EXISTS `ta_assessment_resp_department`;
CREATE TABLE `ta_assessment_resp_department` (
  `assessment_id` bigint(20) NOT NULL,
  `resp_department_id` bigint(20) NOT NULL,
  KEY `FKd8ph91705dbi5dnkx3fxqhdnq` (`resp_department_id`),
  KEY `FK2rs86usb1eflwyniw3dbrb5b7` (`assessment_id`),
  CONSTRAINT `FK2rs86usb1eflwyniw3dbrb5b7` FOREIGN KEY (`assessment_id`) REFERENCES `ta_assessment` (`id`),
  CONSTRAINT `FKd8ph91705dbi5dnkx3fxqhdnq` FOREIGN KEY (`resp_department_id`) REFERENCES `department` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ta_assessment_resp_department
-- ----------------------------
INSERT INTO `ta_assessment_resp_department` VALUES ('1', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('2', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('3', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('4', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('4', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('5', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('5', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('6', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('6', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('7', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('7', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('8', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('8', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('9', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('9', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('10', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('10', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('11', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('11', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('12', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('12', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('13', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('13', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('14', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('14', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('15', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('15', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('16', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('16', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('17', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('17', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('18', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('18', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('19', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('19', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('19', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('19', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('20', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('21', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('21', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('22', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('22', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('23', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('23', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('24', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('24', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('24', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('25', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('26', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('26', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('26', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('26', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('27', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('27', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('28', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('29', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('30', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('31', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('32', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('32', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('32', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('33', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('33', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('33', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('33', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('34', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('34', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('35', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('35', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('36', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('36', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('36', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('36', '20');
INSERT INTO `ta_assessment_resp_department` VALUES ('37', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('37', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('38', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('39', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('40', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('41', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('42', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('43', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('44', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('45', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('46', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('47', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('48', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('49', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('50', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('51', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('52', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('53', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('54', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('55', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('56', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('56', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('57', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('57', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('58', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('58', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('59', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('60', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('61', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('62', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('63', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('64', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('65', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('66', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('67', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('68', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('69', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('70', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('71', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('72', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('73', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('74', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('75', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('76', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('77', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('78', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('78', '18');
INSERT INTO `ta_assessment_resp_department` VALUES ('79', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('79', '18');
INSERT INTO `ta_assessment_resp_department` VALUES ('80', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('80', '18');
INSERT INTO `ta_assessment_resp_department` VALUES ('81', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('81', '18');
INSERT INTO `ta_assessment_resp_department` VALUES ('82', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('83', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('84', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('85', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('86', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('87', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('88', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('89', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('90', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('91', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('92', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('93', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('94', '20');
INSERT INTO `ta_assessment_resp_department` VALUES ('95', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('95', '20');
INSERT INTO `ta_assessment_resp_department` VALUES ('96', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('96', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('96', '20');
INSERT INTO `ta_assessment_resp_department` VALUES ('97', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('98', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('99', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('100', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('101', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('102', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('103', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('104', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('105', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('105', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('105', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('106', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('107', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('108', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('109', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('110', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('110', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('111', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('111', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('112', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('112', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('113', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('113', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('114', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('114', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('115', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('116', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('117', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('118', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('119', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('120', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('120', '20');
INSERT INTO `ta_assessment_resp_department` VALUES ('121', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('121', '20');
INSERT INTO `ta_assessment_resp_department` VALUES ('122', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('122', '20');
INSERT INTO `ta_assessment_resp_department` VALUES ('123', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('123', '20');
INSERT INTO `ta_assessment_resp_department` VALUES ('124', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('124', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('124', '20');
INSERT INTO `ta_assessment_resp_department` VALUES ('125', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('125', '14');
INSERT INTO `ta_assessment_resp_department` VALUES ('125', '20');
INSERT INTO `ta_assessment_resp_department` VALUES ('126', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('127', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('128', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('129', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('130', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('131', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('132', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('133', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('134', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('135', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('136', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('137', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('138', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('139', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('140', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('141', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('142', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('143', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('144', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('145', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('146', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('147', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('148', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('149', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('150', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('150', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('150', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('150', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('150', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('150', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('151', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('151', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('151', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('151', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('151', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('151', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('152', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('152', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('152', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('152', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('152', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('152', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('153', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('153', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('153', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('153', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('153', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('153', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('154', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('154', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('154', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('154', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('154', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('154', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('155', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('155', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('155', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('155', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('155', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('155', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('156', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('156', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('156', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('156', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('156', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('156', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('157', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('157', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('157', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('157', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('157', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('157', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('158', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('158', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('158', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('158', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('158', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('158', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('159', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('159', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('159', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('159', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('159', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('159', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('160', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('160', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('160', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('160', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('160', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('160', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('161', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('161', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('161', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('161', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('161', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('161', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('162', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('162', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('162', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('162', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('162', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('162', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('163', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('163', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('163', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('163', '16');
INSERT INTO `ta_assessment_resp_department` VALUES ('163', '17');
INSERT INTO `ta_assessment_resp_department` VALUES ('163', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('164', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('165', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('166', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('167', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('168', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('169', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('170', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('171', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('172', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('173', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('174', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('175', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('176', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('177', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('178', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('179', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('179', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('180', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('180', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('181', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('182', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('183', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('184', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('184', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('184', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('184', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('185', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('185', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('185', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('185', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('186', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('186', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('186', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('186', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('187', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('188', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('189', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('190', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('191', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('192', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('193', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('194', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('195', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('196', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('197', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('198', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('199', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('200', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('201', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('202', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('203', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('204', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('205', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('206', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('206', '18');
INSERT INTO `ta_assessment_resp_department` VALUES ('207', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('208', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('209', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('210', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('211', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('212', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('213', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('214', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('215', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('216', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('217', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('218', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('219', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('220', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('221', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('222', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('223', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('224', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('225', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('226', '15');
INSERT INTO `ta_assessment_resp_department` VALUES ('227', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('228', '18');
INSERT INTO `ta_assessment_resp_department` VALUES ('229', '8');
INSERT INTO `ta_assessment_resp_department` VALUES ('230', '8');
INSERT INTO `ta_assessment_resp_department` VALUES ('231', '8');
INSERT INTO `ta_assessment_resp_department` VALUES ('232', '8');
INSERT INTO `ta_assessment_resp_department` VALUES ('233', '8');
INSERT INTO `ta_assessment_resp_department` VALUES ('234', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('234', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('234', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('234', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('234', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('235', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('236', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('237', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('238', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('239', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('239', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('239', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('239', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('239', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('240', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('240', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('240', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('240', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('240', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('241', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('241', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('241', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('241', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('241', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('242', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('242', '10');
INSERT INTO `ta_assessment_resp_department` VALUES ('242', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('242', '13');
INSERT INTO `ta_assessment_resp_department` VALUES ('242', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('244', '8');
INSERT INTO `ta_assessment_resp_department` VALUES ('244', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('244', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('244', '12');
INSERT INTO `ta_assessment_resp_department` VALUES ('245', '8');
INSERT INTO `ta_assessment_resp_department` VALUES ('245', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('245', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('245', '12');
INSERT INTO `ta_assessment_resp_department` VALUES ('246', '8');
INSERT INTO `ta_assessment_resp_department` VALUES ('246', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('246', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('246', '12');
INSERT INTO `ta_assessment_resp_department` VALUES ('247', '8');
INSERT INTO `ta_assessment_resp_department` VALUES ('247', '9');
INSERT INTO `ta_assessment_resp_department` VALUES ('247', '11');
INSERT INTO `ta_assessment_resp_department` VALUES ('247', '12');
INSERT INTO `ta_assessment_resp_department` VALUES ('248', '8');
INSERT INTO `ta_assessment_resp_department` VALUES ('249', '6');
INSERT INTO `ta_assessment_resp_department` VALUES ('249', '8');
INSERT INTO `ta_assessment_resp_department` VALUES ('250', '19');
INSERT INTO `ta_assessment_resp_department` VALUES ('251', '8');
INSERT INTO `ta_assessment_resp_department` VALUES ('252', '6');

-- ----------------------------
-- Table structure for ta_assessment_resp_user
-- ----------------------------
DROP TABLE IF EXISTS `ta_assessment_resp_user`;
CREATE TABLE `ta_assessment_resp_user` (
  `assessment_id` bigint(20) NOT NULL,
  `resp_user_id` bigint(20) NOT NULL,
  KEY `FK4wf1dfecbvt6912ld8b4lj2n9` (`resp_user_id`),
  KEY `FKm1iw7o2992g8jj2hpvdcfe4qj` (`assessment_id`),
  CONSTRAINT `FK4wf1dfecbvt6912ld8b4lj2n9` FOREIGN KEY (`resp_user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKm1iw7o2992g8jj2hpvdcfe4qj` FOREIGN KEY (`assessment_id`) REFERENCES `ta_assessment` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ta_assessment_resp_user
-- ----------------------------
INSERT INTO `ta_assessment_resp_user` VALUES ('1', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('1', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('1', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('1', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('2', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('2', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('2', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('2', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('3', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('3', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('3', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('3', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('4', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('4', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('4', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('4', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('4', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('5', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('5', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('5', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('5', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('5', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('6', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('6', '22');
INSERT INTO `ta_assessment_resp_user` VALUES ('7', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('7', '22');
INSERT INTO `ta_assessment_resp_user` VALUES ('8', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('8', '22');
INSERT INTO `ta_assessment_resp_user` VALUES ('9', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('9', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('9', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('9', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('9', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('10', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('10', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('10', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('10', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('10', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('11', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('11', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('11', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('11', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('11', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('12', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('12', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('12', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('12', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('12', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('13', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('13', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('13', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('13', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('13', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('14', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('14', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('14', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('14', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('14', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('15', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('15', '22');
INSERT INTO `ta_assessment_resp_user` VALUES ('16', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('16', '22');
INSERT INTO `ta_assessment_resp_user` VALUES ('17', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('17', '22');
INSERT INTO `ta_assessment_resp_user` VALUES ('18', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('18', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('18', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('19', '3');
INSERT INTO `ta_assessment_resp_user` VALUES ('19', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('19', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('19', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('19', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('19', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('20', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('21', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('21', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('21', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('21', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('21', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('22', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('23', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('24', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('24', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('24', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('24', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('25', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('26', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('26', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('26', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('27', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('27', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('28', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('29', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('30', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('31', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('32', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('32', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('32', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('32', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('32', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('32', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('33', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('33', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('33', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('33', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('33', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('33', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('34', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('34', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('34', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('34', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('34', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('35', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('35', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('35', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('35', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('35', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('36', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('36', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('36', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('36', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('36', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('36', '19');
INSERT INTO `ta_assessment_resp_user` VALUES ('36', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('37', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('37', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('37', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('37', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('37', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('38', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('38', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('38', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('39', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('40', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('41', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('42', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('43', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('44', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('45', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('46', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('47', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('48', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('49', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('50', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('51', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('52', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('53', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('54', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('55', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('56', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('56', '19');
INSERT INTO `ta_assessment_resp_user` VALUES ('57', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('57', '19');
INSERT INTO `ta_assessment_resp_user` VALUES ('58', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('58', '19');
INSERT INTO `ta_assessment_resp_user` VALUES ('59', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('60', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('61', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('61', '22');
INSERT INTO `ta_assessment_resp_user` VALUES ('62', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('62', '22');
INSERT INTO `ta_assessment_resp_user` VALUES ('63', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('63', '22');
INSERT INTO `ta_assessment_resp_user` VALUES ('64', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('64', '22');
INSERT INTO `ta_assessment_resp_user` VALUES ('65', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('65', '22');
INSERT INTO `ta_assessment_resp_user` VALUES ('66', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('66', '22');
INSERT INTO `ta_assessment_resp_user` VALUES ('67', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('67', '22');
INSERT INTO `ta_assessment_resp_user` VALUES ('68', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('69', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('70', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('71', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('72', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('73', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('74', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('75', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('76', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('77', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('78', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('79', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('80', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('81', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('82', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('83', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('84', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('85', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('86', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('87', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('88', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('89', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('90', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('91', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('92', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('93', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('94', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('95', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('95', '19');
INSERT INTO `ta_assessment_resp_user` VALUES ('96', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('96', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('96', '19');
INSERT INTO `ta_assessment_resp_user` VALUES ('97', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('98', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('99', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('100', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('101', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('102', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('103', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('104', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('105', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('105', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('105', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('106', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('107', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('108', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('109', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('110', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('110', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('111', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('111', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('112', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('112', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('113', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('113', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('114', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('114', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('115', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('116', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('117', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('118', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('119', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('120', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('120', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('120', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('120', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('120', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('121', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('121', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('121', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('121', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('121', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('122', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('122', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('122', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('122', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('122', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('123', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('123', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('123', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('123', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('123', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('124', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('124', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('124', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('124', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('124', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('124', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('125', '5');
INSERT INTO `ta_assessment_resp_user` VALUES ('125', '10');
INSERT INTO `ta_assessment_resp_user` VALUES ('125', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('125', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('125', '18');
INSERT INTO `ta_assessment_resp_user` VALUES ('125', '20');
INSERT INTO `ta_assessment_resp_user` VALUES ('126', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('127', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('128', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('129', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('130', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('131', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('132', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('133', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('134', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('135', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('136', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('137', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('138', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('139', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('140', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('141', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('142', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('143', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('144', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('145', '12');
INSERT INTO `ta_assessment_resp_user` VALUES ('146', '12');
INSERT INTO `ta_assessment_resp_user` VALUES ('147', '12');
INSERT INTO `ta_assessment_resp_user` VALUES ('148', '19');
INSERT INTO `ta_assessment_resp_user` VALUES ('149', '12');
INSERT INTO `ta_assessment_resp_user` VALUES ('150', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('150', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('150', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('150', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('150', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('151', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('151', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('151', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('151', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('151', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('152', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('152', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('152', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('152', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('152', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('153', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('153', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('153', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('153', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('153', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('154', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('154', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('154', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('154', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('154', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('155', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('155', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('155', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('155', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('155', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('156', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('156', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('156', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('156', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('156', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('157', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('157', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('157', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('157', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('157', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('158', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('158', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('158', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('158', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('158', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('159', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('159', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('159', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('159', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('159', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('160', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('160', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('160', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('160', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('160', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('161', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('161', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('161', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('161', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('161', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('162', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('162', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('162', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('162', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('162', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('163', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('163', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('163', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('163', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('163', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('164', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('165', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('166', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('167', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('168', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('169', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('170', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('171', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('172', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('173', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('174', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('175', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('176', '19');
INSERT INTO `ta_assessment_resp_user` VALUES ('177', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('178', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('179', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('179', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('180', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('180', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('181', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('182', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('183', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('184', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('184', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('184', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('184', '12');
INSERT INTO `ta_assessment_resp_user` VALUES ('184', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('185', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('185', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('185', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('185', '12');
INSERT INTO `ta_assessment_resp_user` VALUES ('185', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('186', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('186', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('186', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('186', '12');
INSERT INTO `ta_assessment_resp_user` VALUES ('186', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('187', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('188', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('189', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('190', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('191', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('192', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('193', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('194', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('195', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('196', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('197', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('198', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('199', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('200', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('201', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('202', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('203', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('204', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('205', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('206', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('206', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('207', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('208', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('209', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('210', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('211', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('212', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('213', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('214', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('215', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('216', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('217', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('218', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('219', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('220', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('221', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('222', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('223', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('224', '12');
INSERT INTO `ta_assessment_resp_user` VALUES ('224', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('225', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('226', '9');
INSERT INTO `ta_assessment_resp_user` VALUES ('227', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('228', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('229', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('229', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('230', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('230', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('231', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('231', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('232', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('232', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('233', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('233', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('234', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('234', '12');
INSERT INTO `ta_assessment_resp_user` VALUES ('234', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('234', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('234', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('234', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('235', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('236', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('237', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('238', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('239', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('239', '12');
INSERT INTO `ta_assessment_resp_user` VALUES ('239', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('239', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('239', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('239', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('240', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('240', '12');
INSERT INTO `ta_assessment_resp_user` VALUES ('240', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('240', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('240', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('240', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('241', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('241', '12');
INSERT INTO `ta_assessment_resp_user` VALUES ('241', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('241', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('241', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('241', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('242', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('242', '12');
INSERT INTO `ta_assessment_resp_user` VALUES ('242', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('242', '16');
INSERT INTO `ta_assessment_resp_user` VALUES ('242', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('242', '21');
INSERT INTO `ta_assessment_resp_user` VALUES ('243', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('244', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('244', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('244', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('244', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('245', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('245', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('245', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('245', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('246', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('246', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('246', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('246', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('247', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('247', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('247', '15');
INSERT INTO `ta_assessment_resp_user` VALUES ('247', '17');
INSERT INTO `ta_assessment_resp_user` VALUES ('248', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('249', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('250', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('250', '12');
INSERT INTO `ta_assessment_resp_user` VALUES ('251', '6');
INSERT INTO `ta_assessment_resp_user` VALUES ('251', '11');
INSERT INTO `ta_assessment_resp_user` VALUES ('252', '6');

-- ----------------------------
-- Table structure for ta_plan
-- ----------------------------
DROP TABLE IF EXISTS `ta_plan`;
CREATE TABLE `ta_plan` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `assessment_id` bigint(20) DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8skyrk7y5vs1sc5j8u7i94cae` (`assessment_id`),
  KEY `FK2jh29bsw225ysnil6smp95g68` (`department_id`),
  KEY `FK4l3393ibau5x8dxpplf7damcd` (`user_id`),
  CONSTRAINT `FK2jh29bsw225ysnil6smp95g68` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`),
  CONSTRAINT `FK4l3393ibau5x8dxpplf7damcd` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK8skyrk7y5vs1sc5j8u7i94cae` FOREIGN KEY (`assessment_id`) REFERENCES `ta_assessment` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ta_plan
-- ----------------------------

-- ----------------------------
-- Table structure for ta_plan_detail
-- ----------------------------
DROP TABLE IF EXISTS `ta_plan_detail`;
CREATE TABLE `ta_plan_detail` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `end_date` date DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `value_type` varchar(255) DEFAULT NULL,
  `plan_id` bigint(20) DEFAULT NULL,
  `task_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcrvuh04dbrowboyadfg9noybd` (`plan_id`),
  KEY `FKb94uxty2jevp5d9tleyq0n9ed` (`task_id`),
  KEY `FKe03bb16i3dvy80ujce4p5e0f1` (`user_id`),
  CONSTRAINT `FKb94uxty2jevp5d9tleyq0n9ed` FOREIGN KEY (`task_id`) REFERENCES `ta_task` (`id`),
  CONSTRAINT `FKcrvuh04dbrowboyadfg9noybd` FOREIGN KEY (`plan_id`) REFERENCES `ta_plan` (`id`),
  CONSTRAINT `FKe03bb16i3dvy80ujce4p5e0f1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ta_plan_detail
-- ----------------------------

-- ----------------------------
-- Table structure for ta_task
-- ----------------------------
DROP TABLE IF EXISTS `ta_task`;
CREATE TABLE `ta_task` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `progress` int(11) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `value_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ta_task
-- ----------------------------

-- ----------------------------
-- Table structure for ta_task_detail
-- ----------------------------
DROP TABLE IF EXISTS `ta_task_detail`;
CREATE TABLE `ta_task_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `end_time` datetime(6) DEFAULT NULL,
  `plan_detail_id` int(11) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `start_time` datetime(6) DEFAULT NULL,
  `task_id` int(11) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ta_task_detail
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `station_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3epii5sxhw0lqhb92yj286y2d` (`station_id`),
  CONSTRAINT `FK3epii5sxhw0lqhb92yj286y2d` FOREIGN KEY (`station_id`) REFERENCES `station` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', null, '党委', null, '1');
INSERT INTO `user` VALUES ('2', null, '赵小龙', null, '2');
INSERT INTO `user` VALUES ('3', null, '吴胜杰', null, '3');
INSERT INTO `user` VALUES ('4', null, '蔡耀明', null, '4');
INSERT INTO `user` VALUES ('5', null, '王哲', null, '5');
INSERT INTO `user` VALUES ('6', null, '姜利明', null, '6');
INSERT INTO `user` VALUES ('7', null, '李勤根', null, '7');
INSERT INTO `user` VALUES ('8', null, '沈潇雅', null, '8');
INSERT INTO `user` VALUES ('9', null, '范郭真', null, '9');
INSERT INTO `user` VALUES ('10', null, '吴肖峰', null, '10');
INSERT INTO `user` VALUES ('11', null, '朱世鹏', null, '11');
INSERT INTO `user` VALUES ('12', null, '董佳浩', null, '12');
INSERT INTO `user` VALUES ('13', null, '张陆军', null, '13');
INSERT INTO `user` VALUES ('14', null, '李均敬', null, '14');
INSERT INTO `user` VALUES ('15', null, '潘其华', null, '15');
INSERT INTO `user` VALUES ('16', null, '王玲敏', null, '16');
INSERT INTO `user` VALUES ('17', null, '沈伟华', null, '17');
INSERT INTO `user` VALUES ('18', null, '姚晨雪', null, '18');
INSERT INTO `user` VALUES ('19', null, '叶吴良', null, '19');
INSERT INTO `user` VALUES ('20', null, '叶锋', null, '20');
INSERT INTO `user` VALUES ('21', null, '沈鹏', null, '21');
INSERT INTO `user` VALUES ('22', null, '蒋爱君', null, '22');
INSERT INTO `user` VALUES ('23', null, '赵生良', null, '23');
INSERT INTO `user` VALUES ('24', null, '张明', null, '24');
INSERT INTO `user` VALUES ('25', null, '张陆君', null, '25');
INSERT INTO `user` VALUES ('26', null, '刘爱群', null, '26');
INSERT INTO `user` VALUES ('27', null, '唐惠平', null, '27');
INSERT INTO `user` VALUES ('28', null, '纪委', null, '28');
INSERT INTO `user` VALUES ('29', null, '组织', null, '29');
INSERT INTO `user` VALUES ('30', '男', '任凯波', null, '30');
INSERT INTO `user` VALUES ('31', '女', '江琳', null, '31');
INSERT INTO `user` VALUES ('32', '男', '蔡琦亮', null, '32');
INSERT INTO `user` VALUES ('33', '男', '顾嘉骏', null, '33');
INSERT INTO `user` VALUES ('34', '女', '王怡雯', null, '34');
INSERT INTO `user` VALUES ('35', '女', '朱佳琪', null, '35');
INSERT INTO `user` VALUES ('36', '男', '俞金良', null, '36');
INSERT INTO `user` VALUES ('37', '女', '宋婷', null, '37');
INSERT INTO `user` VALUES ('38', '男', '马徐杰', null, '38');
INSERT INTO `user` VALUES ('39', '女', '王皓', null, '39');
INSERT INTO `user` VALUES ('40', '女', '金梦靖', null, '40');
INSERT INTO `user` VALUES ('41', '男', '秦银平', null, '41');
INSERT INTO `user` VALUES ('42', '男', '沈晓明', null, '42');
INSERT INTO `user` VALUES ('43', '男', '何柏良', null, '43');
INSERT INTO `user` VALUES ('44', '女', '高沁', null, '44');
INSERT INTO `user` VALUES ('45', '男', '庄建康', null, '42');
INSERT INTO `user` VALUES ('46', '男', '刘晓冬', null, '45');
INSERT INTO `user` VALUES ('47', '女', '夏欣宜', null, '46');
INSERT INTO `user` VALUES ('48', '男', '富高君', null, '47');
INSERT INTO `user` VALUES ('49', '男', '徐皓', null, '48');
INSERT INTO `user` VALUES ('50', '女', '潘如锦', null, '49');
INSERT INTO `user` VALUES ('51', '男', '殷其良', null, '50');
INSERT INTO `user` VALUES ('52', '男', '王建文', null, '50');
INSERT INTO `user` VALUES ('53', '男', '沈金良', null, '51');
INSERT INTO `user` VALUES ('54', '女', '盛玲丽', null, '52');
INSERT INTO `user` VALUES ('55', '男', '蒋勇杰', null, '53');
INSERT INTO `user` VALUES ('56', '男', '吴浩加', null, '54');
INSERT INTO `user` VALUES ('57', '女', '张漂洁', null, '55');
INSERT INTO `user` VALUES ('58', '女', '沈怡', null, '56');
INSERT INTO `user` VALUES ('59', '女', '黄亦潇', null, '57');
INSERT INTO `user` VALUES ('60', '女', '钟舒亭', null, '58');
INSERT INTO `user` VALUES ('61', '女', '蒋陈燕', null, '59');
INSERT INTO `user` VALUES ('62', '男', '徐晨阳', null, '60');
INSERT INTO `user` VALUES ('63', '男', '王华烽', null, '61');
INSERT INTO `user` VALUES ('64', '男', '李新', null, '61');
INSERT INTO `user` VALUES ('65', '男', '盛怡豪', null, '61');
INSERT INTO `user` VALUES ('66', '男', '陈飞', null, '61');
INSERT INTO `user` VALUES ('67', '男', '沈钱明', null, '62');
INSERT INTO `user` VALUES ('68', '男', '孙晨辉', null, '63');
INSERT INTO `user` VALUES ('69', '男', '张佳伟', null, '64');
INSERT INTO `user` VALUES ('70', '男', '柯江', null, '65');
INSERT INTO `user` VALUES ('71', '男', '吴拂晓', null, '66');
INSERT INTO `user` VALUES ('72', '男', '陈国卫', null, '67');
INSERT INTO `user` VALUES ('73', '男', '缪法明', null, '68');
INSERT INTO `user` VALUES ('74', '男', '李伟明', null, '68');
INSERT INTO `user` VALUES ('75', '男', '沈晓坚', null, '69');
INSERT INTO `user` VALUES ('76', '女', '干高霞', null, '70');
INSERT INTO `user` VALUES ('77', '男', '吴辰凯', null, '71');
INSERT INTO `user` VALUES ('78', '女', '姚春燕', null, '72');
INSERT INTO `user` VALUES ('79', '女', '储美芬', null, '73');
INSERT INTO `user` VALUES ('80', '女', '沈凯悦', null, '74');
INSERT INTO `user` VALUES ('81', '女', '钱梦婷', null, '75');
INSERT INTO `user` VALUES ('82', '男', '胡晨迪', null, '76');
INSERT INTO `user` VALUES ('83', '男', '陆韵涛', null, '77');
INSERT INTO `user` VALUES ('84', '男', '陆军', null, '78');
INSERT INTO `user` VALUES ('85', '女', '朱勤燕', null, '79');
INSERT INTO `user` VALUES ('86', '男', '张建松', null, '80');
INSERT INTO `user` VALUES ('87', '男', '姚佳飞', null, '81');
INSERT INTO `user` VALUES ('88', '男', '陈涛', null, '82');
INSERT INTO `user` VALUES ('89', '女', '秦倩芸', null, '83');
INSERT INTO `user` VALUES ('90', '女', '王瑜', null, '84');
INSERT INTO `user` VALUES ('91', '女', '王月婷', null, '85');
INSERT INTO `user` VALUES ('92', '女', '蔡芸', null, '86');
INSERT INTO `user` VALUES ('93', '女', '吴珊', null, '87');
INSERT INTO `user` VALUES ('94', '男', '朱军军', null, '88');
INSERT INTO `user` VALUES ('95', '男', '陈龙', null, '89');
INSERT INTO `user` VALUES ('96', '女', '吴霞菁', null, '90');
INSERT INTO `user` VALUES ('97', '女', '吴能娟', null, '91');
INSERT INTO `user` VALUES ('98', '男', '陆加海', null, '92');
INSERT INTO `user` VALUES ('99', '男', '王永明', null, '93');
INSERT INTO `user` VALUES ('100', '男', '王超鑫', null, '94');
INSERT INTO `user` VALUES ('101', '男', '金顺祥', null, '95');
INSERT INTO `user` VALUES ('102', '女', '沈红维', null, '96');
INSERT INTO `user` VALUES ('103', '女', '印佳', null, '97');
INSERT INTO `user` VALUES ('104', '女', '冯瀛', null, '98');
INSERT INTO `user` VALUES ('105', '女', '姜燕', null, '99');
INSERT INTO `user` VALUES ('106', '女', '吴凯丽', null, '100');
INSERT INTO `user` VALUES ('107', '男', '盛卫丰', null, '101');
INSERT INTO `user` VALUES ('108', '女', '陈维', null, '102');
INSERT INTO `user` VALUES ('109', '女', '吴凌霞', null, '103');
INSERT INTO `user` VALUES ('110', '女', '何琦', null, '104');
INSERT INTO `user` VALUES ('111', '女', '吴静怡', null, '105');
INSERT INTO `user` VALUES ('112', '女', '许柳婷', null, '106');
INSERT INTO `user` VALUES ('113', '女', '朱洛慧', null, '107');
INSERT INTO `user` VALUES ('114', '女', '姚玲丹', null, '108');
INSERT INTO `user` VALUES ('115', '女', '李董燕', null, '109');
INSERT INTO `user` VALUES ('116', '男', '金文彬', null, '110');
INSERT INTO `user` VALUES ('117', '男', '盛秀锋', null, '111');
INSERT INTO `user` VALUES ('118', '男', '沈伟佳', null, '112');
INSERT INTO `user` VALUES ('119', '男', '庄雪明', null, '113');
INSERT INTO `user` VALUES ('120', '男', '朱健康', null, '114');
INSERT INTO `user` VALUES ('121', '男', '蒉张斌', null, '115');
INSERT INTO `user` VALUES ('122', '男', '徐姚明', null, '116');
INSERT INTO `user` VALUES ('123', '男', '张春伟', null, '113');
INSERT INTO `user` VALUES ('124', '男', '夏晶', null, '117');
INSERT INTO `user` VALUES ('125', '女', '郑欢', null, '118');
INSERT INTO `user` VALUES ('126', '男', '许李金', null, '119');
INSERT INTO `user` VALUES ('127', '男', '沈超', null, '120');
INSERT INTO `user` VALUES ('128', '男', '庄宇峰', null, '121');
INSERT INTO `user` VALUES ('129', '男', '叶士斌', null, '121');
INSERT INTO `user` VALUES ('130', '男', '丁悦', null, '122');
INSERT INTO `user` VALUES ('131', '女', '袁洁', null, '123');
INSERT INTO `user` VALUES ('132', '男', '钱海青', null, '124');
INSERT INTO `user` VALUES ('133', '女', '李昕', null, '125');
INSERT INTO `user` VALUES ('134', '男', '冯沈燕', null, '126');
INSERT INTO `user` VALUES ('135', '男', '蒋昊', null, '127');
INSERT INTO `user` VALUES ('136', '男', '薛斌', null, '127');
INSERT INTO `user` VALUES ('137', '男', '朱豪杰', null, '127');
INSERT INTO `user` VALUES ('138', '女', '张晓琴', null, '128');
INSERT INTO `user` VALUES ('139', '男', '李德明', null, '129');
INSERT INTO `user` VALUES ('140', '男', '张仕明', null, '127');
INSERT INTO `user` VALUES ('141', '男', '李志远', null, '128');
INSERT INTO `user` VALUES ('142', '男', '钱雪峰', null, '127');
INSERT INTO `user` VALUES ('143', '女', '陈仁群', null, '130');
INSERT INTO `user` VALUES ('144', '男', '吴玉明', null, '131');
INSERT INTO `user` VALUES ('145', '女', '沈燕君', null, '132');
INSERT INTO `user` VALUES ('146', '女', '金徐萍', null, '133');
INSERT INTO `user` VALUES ('147', '女', '蔡海萍', null, '134');
INSERT INTO `user` VALUES ('148', '女', '郑洁', null, '135');
INSERT INTO `user` VALUES ('149', '女', '邓燕君', null, '136');
INSERT INTO `user` VALUES ('150', '女', '顾丽燕', null, '137');
INSERT INTO `user` VALUES ('151', '男', '徐建平', null, '138');
INSERT INTO `user` VALUES ('152', '男', '张建龙', null, '139');
INSERT INTO `user` VALUES ('153', '女', '徐娟', null, '140');
INSERT INTO `user` VALUES ('154', '男', '金敏佳', null, '141');
INSERT INTO `user` VALUES ('155', '男', '陆水良', null, '142');
INSERT INTO `user` VALUES ('156', '男', '包海兴', null, '143');
INSERT INTO `user` VALUES ('157', '女', '徐忠玲', null, '144');
INSERT INTO `user` VALUES ('158', '男', '王建明', null, '145');
INSERT INTO `user` VALUES ('159', '女', '张岚', null, '146');
INSERT INTO `user` VALUES ('160', '男', '吴惠明', null, '147');
INSERT INTO `user` VALUES ('161', '男', '张永明', null, '148');
INSERT INTO `user` VALUES ('162', '男', '应小平', null, '149');
INSERT INTO `user` VALUES ('163', '男', '曹国光', null, '150');
INSERT INTO `user` VALUES ('164', '男', '秦许康', null, '151');
INSERT INTO `user` VALUES ('165', '男', '姚明', null, '152');
INSERT INTO `user` VALUES ('166', '女', '朱淑丽', null, '153');
INSERT INTO `user` VALUES ('167', '女', '王芸', null, '154');
INSERT INTO `user` VALUES ('168', '女', '俞晨怡', null, '155');
INSERT INTO `user` VALUES ('169', '男', '俞雪峰', null, '156');
INSERT INTO `user` VALUES ('170', '女', '彭印洁', null, '157');
INSERT INTO `user` VALUES ('171', '女', '金菊娟', null, '158');
INSERT INTO `user` VALUES ('172', '男', '肖叶忠', null, '159');
INSERT INTO `user` VALUES ('173', '男', '许伟兵', null, '160');
INSERT INTO `user` VALUES ('174', '男', '陈哲浩', null, '161');
INSERT INTO `user` VALUES ('175', '女', '曹忆湄', null, '162');
INSERT INTO `user` VALUES ('176', '男', '张伟忠', null, '163');
INSERT INTO `user` VALUES ('177', '男', '李望龙', null, '164');
INSERT INTO `user` VALUES ('178', '男', '徐元涛', null, '165');
INSERT INTO `user` VALUES ('179', '男', '阮鑫磊', null, '166');
INSERT INTO `user` VALUES ('180', '男', '张晟涛', null, '167');
INSERT INTO `user` VALUES ('181', '男', '马镭耘', null, '168');
INSERT INTO `user` VALUES ('182', '女', '吴丹青', null, '169');
INSERT INTO `user` VALUES ('183', '女', '王瑞', null, '170');
INSERT INTO `user` VALUES ('184', '男', '姚文浩', null, '171');
INSERT INTO `user` VALUES ('185', '男', '袁春峰', null, '171');
INSERT INTO `user` VALUES ('186', '男', '沈峰火', null, '172');
INSERT INTO `user` VALUES ('187', '女', '叶慧娟', null, '173');
INSERT INTO `user` VALUES ('188', '女', '沈奕云', null, '174');
INSERT INTO `user` VALUES ('189', '女', '李艳春', null, '175');
INSERT INTO `user` VALUES ('190', '女', '俞嘉雯', null, '176');
INSERT INTO `user` VALUES ('191', '女', '沈欢渊', null, '177');
INSERT INTO `user` VALUES ('192', '女', '徐林燕', null, '178');
INSERT INTO `user` VALUES ('193', '女', '曹李洁', null, '179');
INSERT INTO `user` VALUES ('194', '女', '徐珊妮', null, '180');
INSERT INTO `user` VALUES ('195', '女', '金银洁', null, '181');
INSERT INTO `user` VALUES ('196', '女', '闻丹媛', null, '182');
INSERT INTO `user` VALUES ('197', '女', '殷露娜', null, '183');
INSERT INTO `user` VALUES ('198', '女', '钱佳丽', null, '184');
INSERT INTO `user` VALUES ('199', '女', '储妮', null, '185');
INSERT INTO `user` VALUES ('200', '女', '康妍', null, '186');
INSERT INTO `user` VALUES ('201', '女', '康怡晨', null, '187');
INSERT INTO `user` VALUES ('202', '男', '李丹捷', null, '188');
INSERT INTO `user` VALUES ('203', '男', '卢毅', null, '189');
INSERT INTO `user` VALUES ('204', '男', '钟海富', null, '190');
INSERT INTO `user` VALUES ('205', '男', '孙学军', null, '191');
INSERT INTO `user` VALUES ('206', '女', '许晓', null, '192');
INSERT INTO `user` VALUES ('207', '男', '徐建国', null, '193');
INSERT INTO `user` VALUES ('208', '男', '张志来', null, '194');
INSERT INTO `user` VALUES ('209', '男', '朱犟', null, '195');
INSERT INTO `user` VALUES ('210', '男', '冯建明', null, '196');
INSERT INTO `user` VALUES ('211', '女', '汪超逸', null, '197');
INSERT INTO `user` VALUES ('212', '男', '庄毅炜', null, '198');
INSERT INTO `user` VALUES ('213', '女', '朱克来', null, '199');
INSERT INTO `user` VALUES ('214', '男', '孙腾飞', null, '200');
INSERT INTO `user` VALUES ('215', '男', '钱雪飞', null, '201');
INSERT INTO `user` VALUES ('216', '男', '蔡诚航', null, '202');
INSERT INTO `user` VALUES ('217', '女', '王琴', null, '203');
INSERT INTO `user` VALUES ('218', '男', '范振伟', null, '204');
INSERT INTO `user` VALUES ('219', '男', '杨慧杰', null, '205');
INSERT INTO `user` VALUES ('220', '男', '舒宁', null, '206');
INSERT INTO `user` VALUES ('221', '男', '徐海平', null, '207');
INSERT INTO `user` VALUES ('222', '男', '沈海飞', null, '208');
INSERT INTO `user` VALUES ('223', '男', '干佳伟', null, '209');
INSERT INTO `user` VALUES ('224', '女', '顾蕾婷', null, '210');
INSERT INTO `user` VALUES ('225', '男', '郭伟', null, '211');
INSERT INTO `user` VALUES ('226', '男', '倪周剑', null, '212');
INSERT INTO `user` VALUES ('227', '男', '杜镱杰', null, '213');
INSERT INTO `user` VALUES ('228', '男', '黄燕飞', null, '214');
INSERT INTO `user` VALUES ('229', '男', '徐晓明', null, '215');
INSERT INTO `user` VALUES ('230', '男', '陆一侃', null, '216');
INSERT INTO `user` VALUES ('231', '男', '张卫佳', null, '217');
INSERT INTO `user` VALUES ('232', '男', '马明复', null, '218');
INSERT INTO `user` VALUES ('233', '男', '张益斌', null, '219');
INSERT INTO `user` VALUES ('234', '男', '查敏皓', null, '219');
INSERT INTO `user` VALUES ('235', '男', '朱超岳', null, '220');
INSERT INTO `user` VALUES ('236', '男', '金海凤', null, '221');
INSERT INTO `user` VALUES ('237', '男', '戴根松', null, '222');
INSERT INTO `user` VALUES ('238', '女', '朗宇', null, '223');
INSERT INTO `user` VALUES ('239', '男', '王益文', null, '224');
INSERT INTO `user` VALUES ('240', '男', '叶华明', null, '225');
INSERT INTO `user` VALUES ('241', '', '徐佳', null, '226');
INSERT INTO `user` VALUES ('242', '', '金雪明', null, '227');
INSERT INTO `user` VALUES ('243', '', '蒋吴顺', null, '227');
INSERT INTO `user` VALUES ('244', '', '高菊芬', null, '227');
INSERT INTO `user` VALUES ('245', '', '夏婷吉', null, '227');
INSERT INTO `user` VALUES ('246', '', '顾嘉晖', null, '227');
INSERT INTO `user` VALUES ('247', '', '陆伦杰', null, '227');
INSERT INTO `user` VALUES ('248', '', '贺晓叶', null, '227');
INSERT INTO `user` VALUES ('249', '', '董云瑶', null, '227');
INSERT INTO `user` VALUES ('250', '', '叶吴良2', null, '228');
INSERT INTO `user` VALUES ('251', '', '张培锋', null, '229');
INSERT INTO `user` VALUES ('252', '', '顾烨超', null, '229');
INSERT INTO `user` VALUES ('253', '', '蒋伊莉', null, '229');
INSERT INTO `user` VALUES ('254', '', '冯力栋', null, '229');
INSERT INTO `user` VALUES ('255', '', '储海锋', null, '230');
INSERT INTO `user` VALUES ('256', '', '韩惠东', null, '231');
INSERT INTO `user` VALUES ('257', '', '范程佳', null, '231');
INSERT INTO `user` VALUES ('258', '', '陈超', null, '231');
INSERT INTO `user` VALUES ('259', '', '陈菊', null, '231');
INSERT INTO `user` VALUES ('260', '', '李晓', null, '231');
INSERT INTO `user` VALUES ('261', '', '张小吐', null, '232');
INSERT INTO `user` VALUES ('262', '', '张永妹', null, '233');
INSERT INTO `user` VALUES ('263', '', '张陆艳', null, '233');
INSERT INTO `user` VALUES ('264', '', '张陈凯', null, '233');
INSERT INTO `user` VALUES ('265', '', '胡剑波', null, '233');
INSERT INTO `user` VALUES ('266', '', '张萍', null, '233');
INSERT INTO `user` VALUES ('267', '', '张浩东', null, '234');
INSERT INTO `user` VALUES ('268', '', '吴丹加', null, '235');
INSERT INTO `user` VALUES ('269', '', '姚燕青', null, '235');
INSERT INTO `user` VALUES ('270', '', '徐群玉', null, '235');
INSERT INTO `user` VALUES ('271', '', '蒋超', null, '235');
INSERT INTO `user` VALUES ('272', '', '沈佳丽', null, '235');
INSERT INTO `user` VALUES ('273', '', '钱益平', null, '236');
INSERT INTO `user` VALUES ('274', '', '徐晓飞', null, '237');
INSERT INTO `user` VALUES ('275', '', '陆林军', null, '237');
INSERT INTO `user` VALUES ('276', '', '施文芳', null, '237');
INSERT INTO `user` VALUES ('277', '', '吴金超', null, '237');
INSERT INTO `user` VALUES ('278', '', '王凯丽', null, '237');
INSERT INTO `user` VALUES ('279', '', '钱伟斌', null, '238');
INSERT INTO `user` VALUES ('280', '', '俞惠飞', null, '239');
INSERT INTO `user` VALUES ('281', '', '王亚晴', null, '239');
INSERT INTO `user` VALUES ('282', '', '庄丽', null, '239');
INSERT INTO `user` VALUES ('283', '', '郑亚平', null, '240');
INSERT INTO `user` VALUES ('284', '', '田洪彬', null, '241');
INSERT INTO `user` VALUES ('285', '', '何明霞', null, '241');
INSERT INTO `user` VALUES ('286', '', '何佳伟', null, '241');
INSERT INTO `user` VALUES ('287', '', '沈浩', null, '241');
INSERT INTO `user` VALUES ('288', '', '陆建国', null, '242');
INSERT INTO `user` VALUES ('289', '', '张森煜', null, '243');
INSERT INTO `user` VALUES ('290', '', '陆伟', null, '243');
INSERT INTO `user` VALUES ('291', '', '陈叶娟', null, '243');
INSERT INTO `user` VALUES ('292', '', '戴东涛', null, '243');
INSERT INTO `user` VALUES ('293', '', '钱柏根', null, '244');
INSERT INTO `user` VALUES ('294', '', '王月屏', null, '245');
INSERT INTO `user` VALUES ('295', '', '吴忠伟', null, '245');
INSERT INTO `user` VALUES ('296', '', '王建波', null, '245');
INSERT INTO `user` VALUES ('297', '', '葛月红', null, '245');
INSERT INTO `user` VALUES ('298', '', '韩斌', null, '245');
INSERT INTO `user` VALUES ('299', '', '郑佳琦', null, '245');
INSERT INTO `user` VALUES ('300', '', '陈建芬', null, '246');
INSERT INTO `user` VALUES ('301', '', '吴丹萍', null, '247');
INSERT INTO `user` VALUES ('302', '', '吴妙辉', null, '247');
INSERT INTO `user` VALUES ('303', '', '吴涛', null, '247');
INSERT INTO `user` VALUES ('304', '', '钱亦芳', null, '247');
INSERT INTO `user` VALUES ('999', null, 'admin', null, '999');
