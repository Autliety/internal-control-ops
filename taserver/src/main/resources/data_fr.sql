/*
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
  fr_matter (id, code, content, dept_id, type, origin, source, source_id, status, measure_status)
VALUES
  (1, 'WT001', '问题清单测试数据', 1, '日常监督检查', '本单位自我排查', 'INFORM', 1, 'REVIEWED', 'REVIEWED')
, (2, 'WT002', '问题清单测试数据', 1, '日常监督检查', '本单位自我排查', 'INFORM', 1, 'REVIEWED', 'REVIEWED')
, (3, 'WT003', '问题清单测试数据', 1, '日常监督检查', '本单位自我排查', 'MEETING_TOPIC', 1, 'REVIEWED', 'REVIEWED')
, (4, 'WT004', '问题清单测试数据', 1, '日常监督检查', '本单位自我排查', 'MEETING_TOPIC', 2, 'REVIEWED', 'REVIEWED')
;

INSERT INTO
  fr_measure (id, code, content, matter_id, start_date, end_date, user_id)
VALUES
  (1, '01', '测试措施A', 1, NULL, NULL, 100)
, (2, '02', '测试措施B', 1, NULL, NULL, 101)
, (3, '01', '测试措施C', 2, NULL, NULL, 102)
, (4, '02', '测试措施D', 3, NULL, NULL, 103)
, (5, '03', '测试措施E', 4, NULL, NULL, 104)
;
*/