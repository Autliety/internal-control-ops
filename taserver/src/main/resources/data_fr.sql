

SET FOREIGN_KEY_CHECKS=0;

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
-- Records of file
-- ----------------------------

-- ----------------------------
-- Records of fr_evaluation
-- ----------------------------
INSERT INTO `fr_evaluation` VALUES ('1', '依据“一岗双责”及其下位责任实际，按要求参加及召开“1+X”会议，分析分管、联系及负责领域、办所（中心）、条线等全面从严治党形势任务、问题风险，以及“七张问题清单”状况，明晰各方职责任务，研究解决履责突出问题，推进各方职责任务调整、完善及有效落实。', '是否参加“1+X”会议：取表单“1”和“X”专项会议中参会人员表中的人名；“x”会议有多次但不确定数量，每次都取，少1次按比例扣分', '“1+X”会议部署、推进', '明责评价', '4.00');
INSERT INTO `fr_evaluation` VALUES ('2', '班子成员“一岗双责”及其下位责任主体，坚持问题、风险导向，特别是依据全面从严治党、“七张问题清单”导向，查找、建立分管、联系及负责领域、办所（中心）、条线各主体等“问题清单”并全程跟进调整完善，有针对性动态建立“措施清单”及“廉政重点项目清单”，确保明确履责方向、突出履责重点、强化履责协同、有效落实责任清单。', '1、是否有四项清单；2、四项清单内容详实，有明确的责任人。取数四个清单，主要取措施清单中的数据。（1、是否按时完成任务并登记履责模板纪实。可根据时间逐步对未完成事项进行提醒；2、未完成事项有没有说明及申请协调，没有要扣分；3、有没有季度核查；取数主要取履责模板记实、临时交办工作、约谈记录中的数据）', '责任清单建立', '明责评价', '6.00');
INSERT INTO `fr_evaluation` VALUES ('3', '按要求参加区（镇）党委“第一议题”、学规学纪活动，指导督促分管、联系及负责领域、办所（中心）、条线认真制定年度安排计划，各办所（中心）坚持每月不少于1次组织开展学习、宣传、教育、警示等活动，推动班子成员及办所（中心）各主体做到“两个维护”，提高政治站位，强化纪律规矩意识，守牢法纪底线红线。', '1、有没有学习计划；2、有没有按照时间和内容进行学习；取数主要取学规学纪计划和月度执行情况数据', '“第一议题”、学规学纪开展、落实', '明责评价', '5.00');
INSERT INTO `fr_evaluation` VALUES ('4', '班子成员“一岗双责”及其下位责任主体，坚持问题、风险导向，依据建立的分管、联系及负责领域、办所（中心）、条线各主体等“问题清单”、“措施清单”及“廉政重点项目清单”等，全程动态推进整改进展直至整改完成销号，形成落实“整改清单”，实现各责任主体能动、协同履责工作到位，提升管党治党责任落实成效。', '1、是否有四项清单；2、四项清单内容详实，有明确的责任人。取数四个清单，主要取措施清单中的数据。（1、是否按时完成任务并登记履责模板纪实。可根据时间逐步对未完成事项进行提醒；2、未完成事项有没有说明及申请协调，没有要扣分；3、有没有季度核查；取数主要取履责模板纪实、临时交办工作、约谈记录中的数据）', '责任清单落实', '履责评价', '12.00');
INSERT INTO `fr_evaluation` VALUES ('5', '班子成员“一岗双责”及其下位责任主体，围绕上级重大决策部署及分管、联系及负责领域、办所（中心）、条线党风廉政建设重点领域，“七张问题清单”所涉内容，相关主体每季度不少于1次组织（联合）开展监督检查，加强问题、风险排查发现及有效处置、整改。', '1、有没有季度检查；2、有没有检查报告；3、有没有对问题的解决方案和跟进。取数主要是监督检查表数据', '监督检查组织、实施', '履责评价', '6.00');
INSERT INTO `fr_evaluation` VALUES ('6', '班子成员“一岗双责”及其下位责任主体主动抓好监督执纪“四种形态”，主动适用第一种形态处置问题，主动发现、报告所分管、负责、联系领域、办所（中心）、条线干部和公职人员的违纪违法问题。', '1、有没有第一种形态的应用通知书；2、有没有提醒谈话等；取数主要取一单三书的数据', '第一种形态处置、运用', '履责评价', '6.00');
INSERT INTO `fr_evaluation` VALUES ('7', '认真抓好“一单三书”制度的执行落实，对所涉的各类问题、风险，各主体强化责任落实，协同落实整改，层层落实管党治党责任。', '1、一单三书内容是否完善；2、涉及的问题和意见建议是否得到整改；取数主要取一单三书数据', '“一单三书”执行、落实', '履责评价', '4.00');
INSERT INTO `fr_evaluation` VALUES ('8', '认真抓好“纪委动议”制度的执行落实，对所涉的各类问题、风险及其他工作职责任务，各主体协同落实抓好整改及部署落实，防控风险、解决问题。', '1、纪委动议中的问题有没有得到有效整改；取数主要取措施清单、纪委动议中的数据', '纪委动议执行、落实', '履责评价', '4.00');
INSERT INTO `fr_evaluation` VALUES ('9', '班子成员“一岗双责”及其下位责任主体对照责任清单、协同履责绩效考评项目等，客观、如实、及时向上级报告履责情况，突出存在问题及风险，抓好职责范围内的监督评议工作，抓好评议反馈问题的整改落实。', '1、有没有如实编制履责报告；2、履责报告内容是否详实；取数主要是自动形成的评责报告和班子成员添加内容编制的数据', '履责报告执行、落实', '履责评价', '6.00');
INSERT INTO `fr_evaluation` VALUES ('10', '班子成员“一岗双责”及其下位责任主体按照重大事项请示报告相关规定，如实、及时做好重大事项报告。', '1、重大事项有没有报告，内容是否属实。什么是重大事项由领导判断，如果没有报告，由领导按规定扣分', '重大事项请示报告执行、落实', '履责评价', '4.00');
INSERT INTO `fr_evaluation` VALUES ('11', '班子成员“一岗双责”及其下位责任主体认真开展党员干部和公职人员廉政问题风险排查，有针对性地制定防范措施，抓好措施执行落实，防范廉政风险问题发生。', '1、分管站办中心所有党员干部是否均已排查；2、排查报告。取数要取组织结构下部门人员与风险防控排查的数量，以及各自的内容是否齐全', '廉政风险排查防控开展、落实', '履责评价', '5.00');
INSERT INTO `fr_evaluation` VALUES ('12', '认真抓好分管清廉机关（站所）建设，严格执行落实班子议事规则、“三重一大”集体决策机制及工程项目招投标制度规定等，严格执行行业、业务工作法律法规、政策制度规定，健全单位内部治理、内控、监督机制，全面规范权力运行，加强机关、站所）清廉文化建设，积极打造清廉单元建设示范标杆。', '这个是由领导来判断是否达到，默认为满分', '清廉单元建设推进、实施', '履责评价', '8.00');
INSERT INTO `fr_evaluation` VALUES ('13', '认真配合上级巡察、基层作风巡查、专项监督、专项治理及反馈问题整改落实工作，支持、配合纪检监察组织正常履行监督执纪问责工作，对“一单三书”及纪检监察建议书、正风肃纪移送函等按要求办理及整改落实。', '部分数据由领导判断，部分数据来源为一单三书的表单中', '上级监督、治理配合、整改', '履责评价', '5.00');
INSERT INTO `fr_evaluation` VALUES ('14', '纪检监察组织、班子成员、办所（中心）在日常监督增强发现的问题，抓好“六必谈”等情形的履责约谈，同步抓好被上级履责约谈的整改落实，不断增强相关责任主体的履责意识、履责动力，推动各类问题、风险有效整改。', '1、有没有约谈记录；2、约谈事项是否得到纠正；取数主要取约谈记录的数据', '履责约谈开展、实施', '督责评价', '5.00');
INSERT INTO `fr_evaluation` VALUES ('15', '发生违纪违规违法情况，或在推进上级党委、政府中心工作、重点工作中发生不作为慢作为乱作为假作为等问题的，被区（镇）及以上机关查处的一般给予相应扣分。其中，给予通报的，每人次扣2分；给予诫勉的，每人次扣3分；给予组织处理或组织调整的，每人次扣4分。被给予党纪政务轻处分的，每人次扣6分；被给予党纪政务重处分的，每人次扣8分；因职务犯罪被追究刑事责任的，每人次扣12分。涉及镇班子成员、办所（中心）负责人的，加倍扣分。在镇党委、镇纪委监察办发现查处之前，及时跟进主动处置（指适用第一种形态的情形）的，不予扣分或相应予以加分；主动报告相关问题（指第二种形态及以上的情形）的，减半扣分或不予扣分；涉及瞒报的，加倍扣分。违纪违规案件发生后，针对分管、联系及负责办所（中心）违纪党员干部、公职人员开展谈心谈话等思想教育的，每案加0.5分。违纪违规案件发生后，通过组织生活会、警示教育会落实警示教育制度的，每案加1分；强化以案促改，针对违纪违规案件暴露出的薄弱环节和廉政风险，及时提出整改意见和建议，并健全制度规范，强化内部监督，有具体举措并书面总结的，每案加1分。本项加分最高不超过6分。', '由组织部门或领导判断，默认为满分', '党员干部监督、管理', '追责评价', '20.00');

-- ----------------------------
-- Records of fr_inform
-- ----------------------------

-- ----------------------------
-- Records of fr_matter
-- ----------------------------
INSERT INTO `fr_matter` VALUES ('1', '1', '“非粮化”整治推进不力', '2022-12-31', 'AWAITING_REVIEW', '责任主体排查发现 / 执行上级重大决策部署方面问题或风险', '2022-06-16 14:01:07.510173', '21', null);
INSERT INTO `fr_matter` VALUES ('2', '2', '农村人居环境整治推进不力', '2022-12-31', 'AWAITING_REVIEW', '责任主体排查发现 / 履职方面的风险或问题', '2022-06-16 14:03:04.445081', '21', null);
INSERT INTO `fr_matter` VALUES ('3', '3', '相关农田水利工程等方面利用职权谋取私利风险', '2022-07-31', 'AWAITING_REVIEW', '责任主体排查发现 / 廉洁用权履职方面的问题或风险', '2022-06-16 14:03:52.824138', '21', null);
INSERT INTO `fr_matter` VALUES ('4', '4', '与相关农业市场化主体交往过程中权力寻租的风险', '2022-07-31', 'AWAITING_REVIEW', '责任主体排查发现 / 廉洁用权履职方面的问题或风险', '2022-06-16 14:04:27.406135', '21', null);
INSERT INTO `fr_matter` VALUES ('5', '5', '存在违规接受管理服务对象吃请等“四风”问题风险', '2022-07-31', 'AWAITING_REVIEW', '责任主体排查发现 / 执行落实中央八项规定精神等方面的问题风险', '2022-06-16 14:05:02.359230', '21', null);
INSERT INTO `fr_matter` VALUES ('6', '6', '作风不够实，自律不够严的问题', '2022-07-31', 'AWAITING_REVIEW', '责任主体排查发现 / 作风建设方面的问题或风险', '2022-06-16 14:05:31.845099', '21', null);
INSERT INTO `fr_matter` VALUES ('7', '7', '存在违法违纪风险', '2022-12-31', 'AWAITING_REVIEW', '责任主体排查发现 / 严守国家法律法规和党的纪律方面的问题或风险', '2022-06-16 14:06:04.601392', '21', null);
INSERT INTO `fr_matter` VALUES ('8', '8', '（重大督查问题）桃北村蔡张丽反映台风期间人员未安置问题', '2021-12-31', 'AWAITING_REVIEW', '上级反馈、移交、交办 / 纳入上级“七张问题清单”的移交、交办问题', '2022-06-16 15:09:03.242952', '21', null);
INSERT INTO `fr_matter` VALUES ('9', '9', '反映百步三和印刷公司违法建造五千多平方米的房子、百步镇横港村程小唤无审批手续建造村旁单门独户。', '2022-07-15', 'AWAITING_REVIEW', '区(镇)反馈、交办 / 本级纪检监察部门监督检查、信访调查、审查调查、问题线索处置等发现、暴露的各类问题', '2022-06-16 15:10:15.407846', '17', null);

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

-- ----------------------------
-- Records of fr_meeting
-- ----------------------------

-- ----------------------------
-- Records of fr_meeting_meeting_user
-- ----------------------------

-- ----------------------------
-- Records of fr_meeting_sub_user
-- ----------------------------

-- ----------------------------
-- Records of fr_meeting_topic
-- ----------------------------

-- ----------------------------
-- Records of fr_meeting_topic_task
-- ----------------------------

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
-- Records of ta_assessment
-- ----------------------------

-- ----------------------------
-- Records of ta_assessment_resp_department
-- ----------------------------

-- ----------------------------
-- Records of ta_assessment_resp_user
-- ----------------------------

-- ----------------------------
-- Records of ta_plan
-- ----------------------------

-- ----------------------------
-- Records of ta_plan_detail
-- ----------------------------

-- ----------------------------
-- Records of ta_task
-- ----------------------------

-- ----------------------------
-- Records of ta_task_detail
-- ----------------------------

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
