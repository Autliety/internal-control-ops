INSERT INTO department (id, name, parent_id)
VALUES (1, '领导班子', NULL),
       (2, '党政综合办公室', 1),
       (3, '党政综合办公室（人大）', 1),
       (4, '党建工作办公室', 1),
       (5, '纪检', 1),
       (6, '工会', 1),
       (7, '妇联', 1),
       (8, '团委、政协', 1),
       (9, '关工委', 1),
       (10, '社会治理办公室', 1),
       (11, '综合执法办公室', 1),
       (12, '经济发展办公室（统计办公室）', 1),
       (13, '生态环境办公室', 1),
       (14, '社会事务服务管理办公室', 1),
       (15, '社会事务办（残联）', 1),
       (16, '社会事务办（计生）', 1),
       (17, '村镇建设管理办公室', 1),
       (18, '村镇建设管理办公室（搬迁）', 1),
       (19, '村镇建设管理办公室（征迁）', 1),
       (20, '村镇建设管理办公室（搬迁）', 1),
       (21, '财政办公室', 1),
       (22, '农业农村办公室', 1),
       (23, '招商和项目推进科', 1),
       (24, '综合服务中心综合服务中心（挂文化站牌子）', 1),
       (25, '工业社区', 1),
       (26, '百步社区', 1),
       (27, '生态环境执法分队', 1),
       (28, '市场监督管理局百步分局', 1),
       (29, '综合行政执法中队', 1),
       (30, '自然规划局百步分局', 1);

INSERT INTO station (id, dept_id, name)
VALUES (1, 1, '经办人'),
       (2, 1, '镇长'),
       (3, 1, '党委书记'),
       (4, 1, '财政所审核'),
       (5, 1, '出纳'),
       (6, 1, '纪委书记'),
       (7, 1, '采购负责人'),
       (8, 1, '党委副书记'),
       (9, 1, '招标分中心'),
       (10, 2, '经办人'),
       (11, 2, '部门负责人'),
       (12, 2, '分管领导'),
       (13, 3, '经办人'),
       (14, 3, '部门负责人'),
       (15, 3, '分管领导'),
       (16, 4, '经办人'),
       (17, 4, '部门负责人'),
       (18, 4, '分管领导'),
       (19, 5, '经办人'),
       (20, 5, '部门负责人'),
       (21, 5, '分管领导'),
       (22, 6, '经办人'),
       (23, 6, '部门负责人'),
       (24, 6, '分管领导'),
       (25, 7, '经办人'),
       (26, 7, '部门负责人'),
       (27, 7, '分管领导'),
       (28, 8, '经办人'),
       (29, 8, '部门负责人'),
       (30, 8, '分管领导'),
       (31, 9, '经办人'),
       (32, 9, '部门负责人'),
       (33, 9, '分管领导'),
       (34, 10, '经办人'),
       (35, 10, '部门负责人'),
       (36, 10, '分管领导'),
       (37, 11, '经办人'),
       (38, 11, '部门负责人'),
       (39, 11, '分管领导'),
       (40, 12, '经办人'),
       (41, 12, '部门负责人'),
       (42, 12, '分管领导'),
       (43, 13, '经办人'),
       (44, 13, '部门负责人'),
       (45, 13, '分管领导'),
       (46, 14, '经办人'),
       (47, 14, '部门负责人'),
       (48, 14, '分管领导'),
       (49, 15, '经办人'),
       (50, 15, '部门负责人'),
       (51, 16, '分管领导'),
       (52, 16, '经办人'),
       (53, 16, '部门负责人'),
       (54, 16, '分管领导'),
       (55, 17, '经办人'),
       (56, 17, '部门负责人'),
       (57, 17, '分管领导'),
       (58, 18, '经办人'),
       (59, 18, '分管领导'),
       (60, 19, '经办人'),
       (61, 19, '部门负责人'),
       (62, 19, '分管领导'),
       (63, 20, '部门负责人'),
       (64, 21, '经办人'),
       (65, 21, '部门负责人'),
       (66, 21, '分管领导'),
       (67, 22, '经办人'),
       (68, 22, '部门负责人'),
       (69, 22, '分管领导'),
       (70, 23, '经办人'),
       (71, 23, '部门负责人'),
       (72, 23, '分管领导'),
       (73, 24, '经办人'),
       (74, 24, '部门负责人'),
       (75, 24, '分管领导'),
       (76, 25, '经办人'),
       (77, 25, '部门负责人'),
       (78, 25, '分管领导'),
       (79, 26, '经办人'),
       (80, 26, '部门负责人'),
       (81, 26, '分管领导'),
       (82, 27, '经办人'),
       (83, 27, '部门负责人'),
       (84, 27, '分管领导'),
       (85, 28, '经办人'),
       (86, 28, '部门负责人'),
       (87, 28, '分管领导'),
       (88, 29, '经办人'),
       (89, 29, '部门负责人'),
       (90, 29, '分管领导'),
       (91, 30, '分管领导'),
       (92, 30, '经办人'),
       (93, 30, '部门负责人');


INSERT INTO user (id, dept_id, name)
VALUES (1, 1, 'admin'),
       (2, 1, '吴胜杰'),
       (3, 1, '赵小龙'),
       (4, 1, '吴玉明'),
       (5, 1, '李勤根'),
       (6, 1, '任凯波'),
       (7, 1, '王哲'),
       (8, 1, '陆加海'),
       (9, 1, '王哲'),
       (10, 1, '蔡耀明'),
       (11, 1, '沈潇雅'),
       (12, 1, '李勤根'),
       (13, 1, '姜利明'),
       (14, 1, '潘其华'),
       (15, 1, '王玲敏'),
       (16, 1, '沈伟华'),
       (17, 1, '吴胜杰'),
       (18, 1, '沈鹏'),
       (19, 1, '叶锋'),
       (20, 1, '范郭真'),
       (21, 1, '赵小龙'),
       (22, 2, '朱佳琪'),
       (23, 2, '任凯波'),
       (24, 2, '王哲'),
       (25, 3, '江琳'),
       (26, 3, '蔡耀明'),
       (27, 4, '刘晓冬'),
       (28, 4, '金梦靖'),
       (29, 4, '沈潇雅'),
       (30, 5, '秦银平'),
       (31, 5, '李勤根'),
       (32, 6, '夏欣宜'),
       (33, 6, '张陆君'),
       (34, 6, '王哲'),
       (35, 7, '冯瀛'),
       (36, 7, '王哲'),
       (37, 8, '金梦靖'),
       (38, 8, '王哲'),
       (39, 9, '金梦靖'),
       (40, 9, '张明'),
       (41, 9, '王哲'),
       (42, 10, '徐金良'),
       (43, 10, '富高君'),
       (44, 10, '姜利明'),
       (45, 11, '干佳伟'),
       (46, 11, '金顺祥'),
       (47, 11, '姜利明'),
       (48, 12, '储美芬'),
       (49, 12, '张建松'),
       (50, 12, '潘其华'),
       (51, 13, '储美芬'),
       (52, 13, '李丹捷'),
       (53, 13, '潘其华'),
       (54, 14, '王超鑫'),
       (55, 14, '陈仁群'),
       (56, 14, '王玲敏'),
       (57, 15, '盛卫丰'),
       (58, 15, '陈仁群'),
       (59, 16, '王玲敏'),
       (60, 16, '姚玲丹'),
       (61, 16, '陈仁群'),
       (62, 16, '王玲敏'),
       (63, 17, '郑欢'),
       (64, 17, '丁悦'),
       (65, 17, '陆加海'),
       (66, 17, '沈伟华'),
       (67, 18, '张晓琴'),
       (68, 18, '沈伟华'),
       (69, 19, '李志远'),
       (70, 19, '沈伟华'),
       (71, 20, '冯沈燕'),
       (72, 21, '菜海萍'),
       (73, 21, '郑洁'),
       (74, 21, '吴玉明'),
       (75, 21, '吴胜杰'),
       (76, 22, '俞晨怡'),
       (77, 22, '陆水良'),
       (78, 22, '沈鹏'),
       (79, 23, '徐元涛'),
       (80, 23, '吴丹青'),
       (81, 23, '张伟忠'),
       (82, 23, '叶锋'),
       (83, 24, '李艳春'),
       (84, 24, '沈峰火'),
       (85, 24, '范郭真'),
       (86, 25, '沈潇雅'),
       (87, 26, '顾嘉晖'),
       (88, 26, '徐佳'),
       (89, 27, '许晓'),
       (90, 27, '卢毅'),
       (91, 27, '潘其华'),
       (92, 28, '张志来'),
       (93, 28, '徐建国'),
       (94, 28, '潘其华'),
       (95, 29, '干佳伟'),
       (96, 29, '姜利明'),
       (97, 30, '沈伟华'),
       (98, 30, '姜丽佳'),
       (99, 30, '金海凤');

INSERT INTO user_station (station_id, user_id)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (1, 4),
       (1, 5),
       (1, 6),
       (1, 7),
       (1, 8),
       (1, 9),
       (1, 10),
       (1, 11),
       (1, 12),
       (1, 13),
       (1, 14),
       (2, 15),
       (3, 16),
       (4, 17),
       (5, 18),
       (6, 19),
       (7, 20),
       (8, 21),
       (9, 22),
       (10, 23),
       (11, 24),
       (12, 25),
       (13, 26),
       (14, 27),
       (15, 28),
       (16, 29),
       (17, 30),
       (18, 31),
       (19, 32),
       (20, 33),
       (21, 34),
       (22, 35),
       (23, 36),
       (24, 37),
       (25, 38),
       (26, 39),
       (27, 40),
       (28, 41),
       (29, 42),
       (30, 43),
       (31, 44),
       (32, 45),
       (33, 46),
       (34, 47),
       (35, 48),
       (36, 49),
       (37, 50),
       (38, 51),
       (39, 52),
       (40, 53),
       (41, 54),
       (42, 55),
       (43, 56),
       (44, 57),
       (45, 58),
       (46, 59),
       (47, 60),
       (48, 61),
       (49, 62),
       (50, 63),
       (51, 64),
       (52, 65),
       (53, 66),
       (54, 67),
       (55, 68),
       (56, 69),
       (57, 70),
       (58, 71),
       (59, 72),
       (60, 73),
       (61, 74),
       (62, 75),
       (63, 76),
       (64, 77),
       (65, 78),
       (66, 79),
       (67, 80),
       (68, 81),
       (69, 82),
       (70, 83),
       (71, 84),
       (72, 85),
       (73, 86),
       (74, 87),
       (75, 88),
       (76, 89),
       (77, 90),
       (78, 91),
       (79, 92),
       (80, 93),
       (81, 94),
       (82, 95),
       (83, 96),
       (84, 97),
       (85, 98),
       (86, 99),
       (87, 100),
       (88, 101),
       (89, 102),
       (90, 103),
       (91, 104),
       (92, 105),
       (93, 106);

INSERT INTO assessment (id, name, parent_id, dept_id, point, value_type, value)
VALUES (1, '实际利用外资', NULL, 1, NULL, NULL, NULL),
       (2, '合同利用外资', 1, 1, 0.5, 'MONEY', '10500'),
       (3, '实际利用外资', 1, 1, 2.0, 'MONEY', '10500'),
       (4, '高技术实际利用外资占比', 1, 1, 0.5, 'PERCENT', '40');

INSERT INTO plan (id, asmt_id, dept_id, name, create_time, update_time)
VALUES (1, 2, 1, '计划A', NULL, NULL),
       (2, 2, 2, '计划B', NULL, NULL),
       (3, 3, 3, '计划C', NULL, NULL),
       (4, 4, 4, '计划D', NULL, NULL);

INSERT INTO plan_measure (id, name, value_type, value, plan_id, start_time, end_time, remark)
VALUES (1, '保持经济恢复发展', 'MONEY', '114.00', 1, NULL, NULL,
        '国内生产总值达到114万亿元，增长8.1%。全国财政收入突破20万亿元，增长10.7%。城镇新增就业1269万人，城镇调查失业率平均为5.1%。居民消费价格上涨0.9%。国际收支基本平衡。'),
       (2, '创新能力进一步增强', 'PERCENT', '15.5', 1, NULL, NULL, '企业研发经费增长15.5%。数字技术与实体经济加速融合。'),
       (3, '人民生活水平稳步提高', 'AMOUNT', '56000', 2, NULL, NULL, '教育改革发展迈出新步伐。新开工改造城镇老旧小区5.6万个，惠及近千万家庭。');
