/*
INSERT INTO
  ta_assessment (id, code, name, parent_id, point, value_type, value, standard, upper_department)
VALUES
  (1, 'CZ22001', '实际利用外资', NULL, 3.0, NULL, NULL, NULL, '县商务局'),
  (2, 'CZ22001-01', '合同利用外资', 1, 0.5, 'DOLLAR', '105000000', '完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分。', NULL),
  (3, 'CZ22001-02', '实际利用外资', 1, 2.0, 'DOLLAR', '34000000', '完成率达100%及以上的得该项赋分，完成率达80%（含）以上的按完成率计算得分，完成率不足80%的，不得分；规模贡献按（本值/最大值）*赋分计算得分。', NULL),
  (4, 'CZ22001-03', '高技术实际利用外资占比', 1, 0.5, 'PERCENT', '0.4', '完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分。', NULL),
  (5, 'CZ22002', '内资招引', NULL, 2.0, NULL, NULL, NULL, '县商务局'),
  (6, 'CZ22002-01', '内资新增工业用地备案投资额', 5, 1, 'MONEY', '3000000000', '完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分，规模贡献按（本值/最大值）*赋分计算得分。', NULL),
  (7, 'CZ22002-02', '亿元以上备案内资工业项目', 5, 1, 'AMOUNT', '7', '完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分。', NULL)
;

INSERT INTO
  ta_plan (id, code, asmt_id, dept_id, create_time, update_time)
VALUES
  (1, 'CJ22001', 2, 23, NULL, NULL),
  (2, 'CJ22002', 4, 23, NULL, NULL),
  (3, 'CJ22003', 7, 23, NULL, NULL);

INSERT INTO
  ta_plan_detail (id, name, value_type, value, plan_id, start_time, end_time, remark)
VALUES
  (1, '新外资引进合同', 'DOLLAR', '52500000', 1, NULL, NULL,
   '国内生产总值达到114万亿元，增长8.1%。全国财政收入突破20万亿元，增长10.7%。城镇新增就业1269万人，城镇调查失业率平均为5.1%。居民消费价格上涨0.9%。国际收支基本平衡。'),
  (2, '外资合同续签占比', 'PERCENT', '0.5', 1, NULL, NULL, '企业研发经费增长15.5%。数字技术与实体经济加速融合。'),
  (3, '高技术实际利用外资占比', 'PERCENT', '0.4', 2, NULL, NULL, '教育改革发展迈出新步伐。新开工改造城镇老旧小区5.6万个，惠及近千万家庭。'),
  (4, '内资工业项目备案', 'AMOUNT', '7', 3, NULL, NULL, '保持经济恢复发展创新能力进一步增强人民生活水平稳步提高');

INSERT INTO
  ta_task (id, plan_id, create_time, update_time)
VALUES
  (1, 1, NULL, NULL),
  (2, 2, NULL, NULL);

INSERT INTO
  ta_task_detail (id, task_id, plan_detail_id, remark, value, start_time, end_time)
VALUES
  (1, 1, 1, '受疫情影响较大', '21000000', NULL, NULL),
  (2, 1, 2, NULL, '0.2', NULL, NULL),
  (3, 2, 3, NULL, '0.16', NULL, NULL);
*/