/*
 Navicat Premium Data Transfer

 Source Server         : MariaDB
 Source Server Type    : MySQL
 Source Server Version : 100608
 Source Host           : localhost:3306
 Source Schema         : icdev

 Target Server Type    : MySQL
 Target Server Version : 100608
 File Encoding         : 65001

 Date: 11/07/2022 10:35:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for fr_ordinal_form
-- ----------------------------
DROP TABLE IF EXISTS `fr_ordinal_form`;
CREATE TABLE `fr_ordinal_form`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `content1` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `content2` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `content3` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `content4` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `content5` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `content6` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `content7` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `content8` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `content9` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `create_time` datetime(6) NULL DEFAULT NULL,
  `form_type` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `integer1` int(11) NULL DEFAULT NULL,
  `long_content1` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL,
  `long_content2` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL,
  `time1` datetime(6) NULL DEFAULT NULL,
  `time2` datetime(6) NULL DEFAULT NULL,
  `time3` datetime(6) NULL DEFAULT NULL,
  `update_time` datetime(6) NULL DEFAULT NULL,
  `dest_user_id` bigint(20) NULL DEFAULT NULL,
  `single_user1_id` bigint(20) NULL DEFAULT NULL,
  `single_user2_id` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKdifgrs15jgvorqtcpbtpa29g9`(`dest_user_id`) USING BTREE,
  INDEX `FKsgvs4xyjcirgs21g5mn0fw7rq`(`single_user1_id`) USING BTREE,
  INDEX `FK7pyk5njwoupfmopu6twceuyfn`(`single_user2_id`) USING BTREE,
  CONSTRAINT `FK7pyk5njwoupfmopu6twceuyfn` FOREIGN KEY (`single_user2_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKdifgrs15jgvorqtcpbtpa29g9` FOREIGN KEY (`dest_user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKsgvs4xyjcirgs21g5mn0fw7rq` FOREIGN KEY (`single_user1_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of fr_ordinal_form
-- ----------------------------
INSERT INTO `fr_ordinal_form` VALUES (1, NULL, '农民建房领域', '村建办、相关行政村', '农村危房解危监督检查', NULL, NULL, NULL, NULL, NULL, NULL, '2022-06-28 15:53:48.085664', 'INSPECT', NULL, '4月19日至20日，带领村建办主任金文彬、副主任盛秀锋及2名工作人员，采取实地踏勘、检查台账等方式，对鉴定为C、D级危房的农房及解危情况进行检查。共计检查农房35幢。', '1、部分村存在危房排查、鉴定不全面、村里对危房底子不清的问题（整改措施：由村建办协同各相关村进一步抓好排查等工作，摸清底子，确保9月底前整改处置到位）；\n2、部分村已解危的D级危房场地硬化等设施配套没跟上（整改措施：由村建办协同属地村及时跟进配套硬化建设，确保6月底前整改到位）\n', '2022-04-19 00:00:00.000000', NULL, NULL, '2022-06-28 15:53:48.085664', 17, 1, NULL);
INSERT INTO `fr_ordinal_form` VALUES (2, NULL, '《百步镇渔民公寓房安置实施意见》（上会稿）', '镇长办公会议商议提交', NULL, '口头表决', '同意按讨论确定的修改方案、意见等执行', '与会班子成员均充分发表了意见，“一把手”严格落实了末位表态规定，讨论意见总体较为一致，相关合理的修改建议纳入该意见正式文本。', NULL, NULL, NULL, '2022-06-29 13:20:52.067978', 'THREE', 2, '拟提交确定百步镇渔民公寓房安置涉及的对象、房屋补偿、公寓房安置标准及价格、货币安置、渔船处置、奖励标准、工作流程等内容（具体见《实施意见》上会稿）', '沈鹏介绍了《百步镇渔民公寓房安置实施意见》（上会稿）形成的前期调研情况、条线研讨情况、镇长办公会议的商议修改情况，具体介绍涉及上会稿中对渔民公寓房安置的补偿对象、房屋补偿、公寓房安置标准及价格、货币安置、渔船处置、奖励标准、工作流程等内容。班子成员逐一发表意见，总体同意该安置意见。同时，也分别提出了修改完善意见。其中：蒋爱君认为1人户安置面积定为50平偏高，与面上原有政策有突破；蔡耀明、董佳浩、沈伟华建议货币补偿可参照征搬迁政策，应在现有基础上有提高至6300元一平；朱世鹏建议对“渔船处置”中的“有证”作出进一步明确；沈潇雅建议该政策要与目前的征搬迁政策保持一致；叶吴良认为货币安置6300一平价格过高，也容易导致后续隐患问题，建议调将至3500元一平为宜。其他班子成员表示总体同意该意见。赵小龙最后表态，认为该政策出台已几易其稿，原则同意以人口计算基准面积，单人户建议仍维持在40平，货币安置价格3500一平为宜，不能过高。政策定下来后加快跟进处置，彻底解决好这一民生问题。19名与会班子成员均发表了意见。', '2022-06-05 00:00:00.000000', NULL, NULL, '2022-06-29 13:20:52.067978', 2, 21, NULL);
INSERT INTO `fr_ordinal_form` VALUES (3, NULL, '领导干部', '涉及本人重大事项/家庭大额投资、消费支出等情况，包括购置房产、替他人担保以及在国（境）外存款投资等情况', '不公开', NULL, NULL, NULL, NULL, NULL, NULL, '2022-06-29 13:22:46.368255', 'PERSONAL', NULL, '2022年4月16日，本人/配偶（许慧霞）购买纯电动小型轿车1辆（小鹏7，车价282800元），资金来源为家庭积蓄，用途：家用。2022年4月20日，该车登记上牌，机动车所有人：许慧霞，车牌号浙FDH0386', NULL, '2022-04-24 13:22:30.569000', NULL, NULL, '2022-06-29 13:22:46.368255', 3, NULL, NULL);
INSERT INTO `fr_ordinal_form` VALUES (4, NULL, '2022-04', '暂无', '学习市纪委关于8起违反中央八项规定精神问题通报', '领学', NULL, NULL, NULL, NULL, NULL, '2022-07-11 10:12:46.556740', 'LEARNING', NULL, '学习省纪委关于10起违反中央八项规定精神问题的通报', NULL, NULL, NULL, NULL, '2022-07-11 10:12:46.556740', 7, NULL, NULL);
INSERT INTO `fr_ordinal_form` VALUES (5, NULL, '2022-05', '暂无', '学习市纪委关于8起违反中央八项规定精神问题通报', '领学', NULL, NULL, NULL, NULL, NULL, '2022-07-11 10:16:21.413356', 'LEARNING', NULL, '学习市纪委关于8起违反中央八项规定精神问题通报', NULL, NULL, NULL, NULL, '2022-07-11 10:16:21.413356', 7, NULL, NULL);
INSERT INTO `fr_ordinal_form` VALUES (6, NULL, '2022-06', '暂无', '《求是》杂志发表习近平总书记重要文章《正确认识和把握我国发展重大理论和实践问题》', '领学', NULL, NULL, NULL, NULL, NULL, '2022-07-11 10:17:58.098000', 'LEARNING', NULL, '《求是》杂志发表习近平总书记重要文章《正确认识和把握我国发展重大理论和实践问题》', NULL, NULL, NULL, NULL, '2022-07-11 10:17:58.098000', 7, NULL, NULL);
INSERT INTO `fr_ordinal_form` VALUES (7, NULL, '提醒谈话', '纪委办公室', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-07-11 10:26:17.912568', 'DISPOSAL', NULL, '1、针对常青家庭农场长期欠缴横港村土地流转租金、导致村集体流失风险等问题，对该同志作为农村农村办主任、原农经办主任履行业务指导、监督管理责任不到位的地方，进行批评教育。\n2、要求该同志牵头履行好主管部门责任，指导、监督横港村做好该农场历年欠缴流转土地租金及水费工作，有效挽回经济损失和不良影响，指导、督促横港村做好农场2022年度实际承租流转土地面积的核定工作，指导横港村做好重新订立或变更流转土地合同、合同登记、风险保证金缴纳及规范“再流转”等工作。\n3、要求牵头抓好举一反三，对包括横港村在内的各行政村流转土地实际租赁现状、合同履约、历年租金和水费缴纳、合同订立变更、保证金缴纳等情况开展一次全面的起底梳理、核查，指导、督促面上纠正土地领域的各类突出问题，防范此类问题再次发生。\n', NULL, '2022-05-25 00:00:00.000000', '2022-05-25 00:00:00.000000', NULL, '2022-07-11 10:26:17.912568', 21, 21, 155);
INSERT INTO `fr_ordinal_form` VALUES (8, NULL, '提醒谈话', '纪委办公室', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-07-11 10:28:08.664788', 'DISPOSAL', NULL, '1、针对常青家庭农场长期欠缴横港村土地流转租金、导致村集体流失风险等问题，对该同志作为原农业农村办分管土地流转等工作的副主任履行业务指导、监督管理责任不到位的地方，进行批评教育。\n2、要求该同志协助现农业农村办负责人，指导、监督横港村做好该农场历年欠缴流转土地租金及水费工作，有效挽回经济损失和不良影响，指导、督促横港村做好农场2022年度实际承租流转土地面积的核定工作，指导横港村做好重新订立或变更流转土地合同、合同登记、风险保证金缴纳及规范“再流转”等工作。\n3、要求协助农业农村办负责人抓好举一反三，对包括横港村在内的各行政村流转土地实际租赁现状、合同履约、历年租金和水费缴纳、合同订立变更、保证金缴纳等情况开展一次全面的起底梳理、核查，指导、督促面上纠正土地领域的各类突出问题，防范此类问题再次发生。\n', NULL, '2022-05-25 00:00:00.000000', '2022-05-25 00:00:00.000000', NULL, '2022-07-11 10:28:08.664788', 21, 21, 157);
INSERT INTO `fr_ordinal_form` VALUES (9, NULL, '提醒谈话', '纪委办公室', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-07-11 10:29:32.452779', 'DISPOSAL', NULL, '1、针对常青家庭农场长期欠缴横港村土地流转租金、导致村集体流失风险等问题，对该同志作为原农经办主任履行业务指导、监督管理责任不到位的地方，进行批评教育。\n2、要求该同志协助现农业农村办负责人，指导、监督横港村做好该农场历年欠缴流转土地租金及水费工作，有效挽回经济损失和不良影响，指导、督促横港村做好农场2022年度实际承租流转土地面积的核定工作，指导横港村做好重新订立或变更流转土地合同、合同登记、风险保证金缴纳及规范“再流转”等工作。\n', NULL, '2022-05-25 00:00:00.000000', '2022-05-25 00:00:00.000000', NULL, '2022-07-11 10:29:32.452779', 21, 21, 161);
INSERT INTO `fr_ordinal_form` VALUES (10, NULL, '提醒谈话', '镇纪委办公室', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-07-11 10:31:55.287646', 'DISPOSAL', NULL, '1、牢记教训，要时刻注重自我管理，确保自己在“八小时外”守规矩，遵法律。\n2、自觉抵制诱惑，严格要求自己。不接受服务管理对象请吃，不接受礼品礼金。\n3、积极净化朋友圈，要加强自身修养，强化自律意识，注重自我管理。\n', NULL, '2022-01-11 00:00:00.000000', '2022-01-11 00:00:00.000000', NULL, '2022-07-11 10:31:55.287646', 17, 17, 123);

SET FOREIGN_KEY_CHECKS = 1;
