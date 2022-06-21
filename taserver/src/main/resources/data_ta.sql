/*
INSERT INTO
  ta_assessment (id, code, level_one, level_two, name, point, standard, value, value_type)
VALUES
  (1, 'CZ2022-0001', '一级', '二级', '三级', 2.0, '标准', '1000000', 'MONEY')
;

INSERT INTO
  ta_plan (id, code, status, assessment_id, department_id)
VALUES
  (1, 'JH2022-0001', 'NONE_REVIEW', 1, 14)
;

INSERT INTO
  ta_task (id, remark, status, value, value_type)
VALUES
  (1, '测试工作进度', 'NONE_REVIEW', '80000', 'MONEY');
;

INSERT INTO
  ta_plan_detail (id, name, remark, value, value_type, plan_id, task_id)
VALUES
  (1, '测试利用外资计划', '测试数据', '160000', 'MONEY', 1, 1);
;
*/

INSERT INTO
  ta_assessment_external (id, code, level_one, level_two, name, point, standard)
VALUES
  (1, 'EZ2022-0001', '', '', '测试扣分指标', -2, '测试扣分标准')
, (2, 'EZ2022-0002', '', '', '测试加分指标', 3, '测试加分标准')
, (3, 'EZ2022-0003', '引领力', '党政正职表现情况', '发生失、泄密情况', -1, '发生失、泄密情况的，扣0.5分，被上级通报的，加倍扣分； ')
, (4, 'EZ2022-0004', '引领力', '党政正职表现情况', '未在规定时间内完成县委县政府领导批示、函告单、督办单', -0.1, '未在规定时间内完成县委县政府领导批示、函告单、督办单的，每发现1起扣0.1分；')
, (5, 'EZ2022-0005', '引领力', '党政正职表现情况', '未按要求上报请销假、请示报告，值班值守工作落实不到位', -0.5, '未按要求上报请销假、请示报告，值班值守工作落实不到位的，每发现一次扣0.25分，被上级检查发现的，加倍扣分。             ')
, (6, 'EZ2022-0006', '引领力', '队伍建设', '对年轻干部队伍建设不够重视', -0.5, '对年轻干部队伍建设不够重视，未按要求配备年轻中层干部，视情扣0.1-0.5分。')
, (7, 'EZ2022-0007', '引领力', '队伍建设', '公务员平时考核未按照要求开展或者流于形式', -0.25, '公务员平时考核未按照要求开展或者流于形式的，扣0.25分。')
;
