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

 Date: 11/07/2022 10:35:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for attach
-- ----------------------------
DROP TABLE IF EXISTS `attach`;
CREATE TABLE `attach`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `fs_file_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `update_time` datetime(6) NULL DEFAULT NULL,
  `upload_user_id` bigint(20) NULL DEFAULT NULL,
  `source_ordinal_form_id` bigint(20) NULL DEFAULT NULL,
  `source_inform_id` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK5nl2cfs26l2x9q8e2ny12d97u`(`upload_user_id`) USING BTREE,
  INDEX `FKfvgc5cljvnqk7ym7e0se4ssaj`(`source_ordinal_form_id`) USING BTREE,
  INDEX `FKmpakvutghnso62c5qnjbbfa3d`(`source_inform_id`) USING BTREE,
  CONSTRAINT `FK5nl2cfs26l2x9q8e2ny12d97u` FOREIGN KEY (`upload_user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKfvgc5cljvnqk7ym7e0se4ssaj` FOREIGN KEY (`source_ordinal_form_id`) REFERENCES `fr_ordinal_form` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKmpakvutghnso62c5qnjbbfa3d` FOREIGN KEY (`source_inform_id`) REFERENCES `fr_inform` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of attach
-- ----------------------------
INSERT INTO `attach` VALUES (1, '监督检查.jpg', '1_监督检查.jpg', '2022-06-28 15:53:09.127789', 999, 1, NULL);
INSERT INTO `attach` VALUES (2, '（横港村202205）党风廉政建设意见书.doc', '（横港村202205）党风廉政建设意见书_20220711_003136.doc', '2022-07-11 00:31:36.814575', 999, NULL, 5);
INSERT INTO `attach` VALUES (3, '（农业农村办202205）党风廉政建设建议书.doc', '（农业农村办202205）党风廉政建设建议书_20220711_004017.doc', '2022-07-11 00:40:17.231204', 999, NULL, 4);
INSERT INTO `attach` VALUES (4, '落实第一种形态告知书（202201）.docx', '落实第一种形态告知书（202201）_20220711_004036.docx', '2022-07-11 00:40:36.731937', 999, NULL, 6);
INSERT INTO `attach` VALUES (5, '（4.28党委会议，纪委书记李勤根领学，班子成员参加）传达学习省纪委关于10起违反中央八项规定精神问题的通报.doc', '（4.28党委会议，纪委书记李勤根领学，班子成员参加）传达学习省纪委关于10起违反中央八项规定精神问题的通报_20220711_101244.doc', '2022-07-11 10:12:44.944404', 7, 4, NULL);
INSERT INTO `attach` VALUES (6, '（5.6党委会议，纪委书记李勤根领学，班子成员参加）会议传达学习市纪委关于8起违反中央八项规定精神问题通报.doc', '（5.6党委会议，纪委书记李勤根领学，班子成员参加）会议传达学习市纪委关于8起违反中央八项规定精神问题通报_20220711_101620.doc', '2022-07-11 10:16:20.058873', 7, 5, NULL);
INSERT INTO `attach` VALUES (7, '（6.5党委会议，党委委员范郭真领学，班子成员参加）学习《求是》杂志总书记《正确认识和把握我国发展重大理论和实践问题》.doc', '（6.5党委会议，党委委员范郭真领学，班子成员参加）学习《求是》杂志总书记《正确认识和把握我国发展重大理论和实践问题》_20220711_101756.doc', '2022-07-11 10:17:56.990437', 7, 6, NULL);
INSERT INTO `attach` VALUES (8, '提醒谈话（陆水良）.docx', '提醒谈话（陆水良）_20220711_102615.docx', '2022-07-11 10:26:15.418963', 21, 7, NULL);
INSERT INTO `attach` VALUES (9, '提醒谈话（徐忠玲）.docx', '提醒谈话（徐忠玲）_20220711_102805.docx', '2022-07-11 10:28:05.915877', 21, 8, NULL);
INSERT INTO `attach` VALUES (10, '提醒谈话（张永明）.docx', '提醒谈话（张永明）_20220711_102931.docx', '2022-07-11 10:29:31.339530', 21, 9, NULL);
INSERT INTO `attach` VALUES (11, '张春伟 提醒谈话 2021.1.11.docx', '张春伟 提醒谈话 2021.1.11_20220711_103154.docx', '2022-07-11 10:31:54.277814', 17, 10, NULL);

SET FOREIGN_KEY_CHECKS = 1;
