INSERT INTO
  department (id, name, parent_id)
VALUES
  (1, '领导班子', NULL),
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

INSERT INTO
  station (id, dept_id, name)
VALUES
  (1, 1, '经办人'),
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
  (24, 6, '分管领导')
;

INSERT INTO
  user (id, dept_id, name)
VALUES
  (1, 1, 'admin')
, (2, 1, '吴胜杰')
, (3, 1, '赵小龙')
, (4, 1, '吴玉明')
, (5, 1, '李勤根')
, (6, 1, '任凯波')
, (7, 1, '王哲')
, (8, 1, '陆加海')
, (9, 1, '王哲')
, (10, 1, '蔡耀明')
, (11, 1, '沈潇雅')
;

INSERT INTO
  user_station (station_id, user_id)
VALUES
  (1, 1),
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
  (11, 24)
;

INSERT INTO
  fr_measure (id, code, content, matter_id, start_date, end_date)
VALUES
  (1, '01', '测试措施A', 1, NULL, NULL)
, (2, '02', '测试措施B', 1, NULL, NULL)
, (3, '01', '测试措施C', 2, NULL, NULL)
, (4, '02', '测试措施D', 3, NULL, NULL)
, (5, '03', '测试措施E', 4, NULL, NULL)
;

INSERT INTO
  fr_meeting (id, code, dept_id, placement, start_time, type, status)
VALUES
  (1, 'HY001', 1, '1', NULL, '1专题会议', 'AWAITING_REVIEW')
, (2, 'HX002', 1, '1', NULL, 'x专题会议', 'REVIEWED')
;

INSERT INTO
  fr_meeting_user (meeting_id, user_id)
VALUES
  (1, 3)
, (1, 4)
, (1, 5)
, (2, 6)
, (2, 7)
, (2, 8)
, (2, 9)
;

INSERT INTO
  fr_meeting_topic (id, meeting_id, status, create_time, user_id)
VALUES
  (1, 1, 'REVIEWED', NULL, 3)
, (2, 1, 'REVIEWED', NULL, 4)
;

INSERT INTO
  fr_meeting_topic_content (topic_id, content)
VALUES
  (1, 'abcde')
, (1, 'abcdef')
, (1, 'abcdefg')
, (2, 'abcdefgh')
;

INSERT INTO
  fr_inform (id, code, create_time, dest_dept_id, dest_user_id, from_dept_id, from_user_id, type)
VALUES
  (1, 'DS001', NULL, 1, 1, 1, 1, 'COPY')
, (2, 'DS002', NULL, 1, 1, 1, 1, 'COPY')
, (3, 'DS003', NULL, 1, 1, 1, 1, 'COPY')
, (4, 'DS004', NULL, 1, 1, 1, 1, 'COPY')
;

INSERT INTO
  fr_matter (id, code, content, dept_id, type, origin, source, source_id)
VALUES
  (1, 'WT001', '问题清单测试数据', 1, '日常监督检查', '本单位自我排查', 'INFORM', 1)
, (2, 'WT002', '问题清单测试数据', 1, '日常监督检查', '本单位自我排查', 'INFORM', 1)
, (3, 'WT003', '问题清单测试数据', 1, '日常监督检查', '本单位自我排查', 'MEETING_TOPIC', 1)
, (4, 'WT004', '问题清单测试数据', 1, '日常监督检查', '本单位自我排查', 'MEETING_TOPIC', 2)
;
