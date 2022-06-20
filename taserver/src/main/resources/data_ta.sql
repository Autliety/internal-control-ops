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
  ta_assessment_external (id, code, create_date, name, point, standard)
VALUES
  (1, 'EZ2022-0001', NULL, '测试扣分指标', -2, 'testtesttest');
