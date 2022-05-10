INSERT INTO
  department (id, name, parent_id)
VALUES
  (999, '系统管理员', NULL)
, (1, '党委', NULL)
, (2, '纪委', NULL)
, (3, '组织部门', NULL)
, (4, '其它领导干部', NULL)
, (5, '党政综合办公室', 1)
, (6, '党建工作办公室', 1)
, (7, '社会治理办公室', 1)
, (8, '经济发展办公室', 1)
, (9, '社会事务服务管理办公室', 1)
, (10, '村镇建设管理办公室', 1)
, (11, '财政办公室', 1)
, (12, '农业农村办公室', 1)
, (13, '招商和项目推进科', 1)
, (14, '综合服务中心综合服务中心', 1)
, (15, '生态环境办公室', 1)
, (16, '生态环境执法分队', 1)
, (17, '市场监督管理局百步分局', 1)
, (18, '综合行政执法中队', 1)
, (19, '自然规划局百步分局', 1)
;

INSERT INTO
  station (id, name, dept_id)
VALUES
  (999, '系统管理员', 999)
, (1, '党委书记', 1)
, (2, '党委副书记', 1)
, (3, '人大主席', 1)
, (4, '党委副书记', 1)
, (5, '纪委书记', 2)
, (6, '组织部长', 3)
, (7, '党委委员', 1)
, (8, '党委委员、人武部部长', 1)
, (9, '党委委员、派出所所长', 1)
, (10, '人大副主席', 4)
, (11, '副镇长', 4)
, (12, '管委会副主任', 4)
, (13, '副镇长级干部', 4)
, (14, '党政综合办公室主任、纪委委员（全面统筹）', 5)
, (15, '党政综合办公室副主任、人大办公室副主任（两办信息、人大工作、政府出纳、信息公开）', 5)
, (16, '党政综合办公室工作人员（文书）', 5)
, (17, '人武干事', 5)
, (18, '党政综合办公室工作人员、百联村书记助理、团委副书记', 5)
, (19, '党政综合办公室工作人员、镇长秘书，（OA收发、数字化改革（党政智治）、保密工作）', 5)
, (20, '党政综合办公室工作人员（司机、文书）', 5)
, (21, '党政综合办公室工作人员（档案）', 5)
, (22, '信息攥写、防疫物资', 5)
, (23, '党政综合办公室工作人员（档案、文印）', 5)
, (24, '党建工作办公室主任、团委书记、妇联副主席（全面统筹。主要负责信息、考核等）', 6)
, (25, '纪委副书记（正股级）（纪委工作）', 6)
, (26, '党建工作办公室工作人员（一支队伍管执法）', 6)
, (27, '党建工作办公室工作人员（协助纪委工作）', 6)
, (28, '党建工作办公室工作人员（人事、档案）', 6)
, (29, '工业社区党支部副书记（协助党员发展等组织事务；工业社区事务）', 6)
, (30, '党建工作办公室工作人员（工会、关工委）', 6)
, (31, '社会治理办公室副主任（保留正股长级）（主持全面工作（信访维稳、禁毒、反邪教））', 7)
, (32, '司法所所长（司法行政）', 7)
, (33, '综治、平安、四个平台、微嘉园', 7)
, (34, '社会治理办公室工作人员（人民调解）', 7)
, (35, '社会治理办公室工作人员（中心报账、禁毒、信访）', 7)
, (36, '社会治理办公室工作人员。综治日常内勤工作（反恐、信访、考核、报表）', 7)
, (37, '社会治理办公室工作人员（社区矫正、安置帮教）', 7)
, (38, '社会治理办公室工作人员（禁毒）', 7)
, (39, '社会治理办公室工作人员（信访、12348、禁毒）', 4)
, (40, '社会治理办公室工作人员（禁毒、调解）', 7)
, (41, '信访接待', 7)
, (42, '反诈宣讲员', 7)
, (43, '司法行政内勤（人民调解、台账）', 7)
, (44, '社会治理办公室工作人员（综合指挥室、四个平台、微嘉园、驾证式系统）', 7)
, (45, '百步集镇片区专职网格员', 7)
, (46, '横港集镇专职网格员', 7)
, (47, '横港第三网格专职网格员', 7)
, (48, '五丰第六网格专职网格员', 7)
, (49, '农丰第二网格专职网格员', 7)
, (50, '新升第一网格专职网格员', 7)
, (51, '矛调中心', 7)
, (52, '人民调解', 7)
, (53, '经济发展办公室主任（负责经发办全面工作）', 8)
, (54, '综合服务中心副主任（科技、三产、经信、商务，企业联审；达产履约）', 8)
, (55, '综合服务中心副主任（劳动、安全、项目推进、园区管理、发改（能耗）双控，负责对接发改局应急局人社局卫计局条线科室、事故处理、重点时段专项整治、星创湾、入区入园、项目推进等）', 8)
, (56, '综合服务中心副主任（统计、创建，全面负责统计各条线工作，做好部门对接和统筹安排；做好统计数据分析、调研；各项创建、验收工作、统计普查工作等）', 8)
, (57, '经济发展办公室工作人员（办公室事务、报账）', 8)
, (58, '经济发展办公室工作人员（项目备案、外贸、旅游、低散乱污、腾退、收储（对接经信局行政许可科、产业转型升级科；商务局外经外贸科））', 8)
, (59, '经济发展办公室工作人员（固定资产投资统计工作、劳动工资统计工作、科技统计工作、统计“双强”行动(星级创建工作)、统计服务与政务信息工作、统计法制工作）', 8)
, (60, '经济发展办公室工作人员（信息宣传、培大育强、营商环境、股改上市（对接经信局企业培育科、企业服务中心；财政局经融办））', 8)
, (61, '经济发展办公室工作人员（亩均绩效、数字化、两高一低、技改投资（对接经信局产业转型科、数字经济发展科）', 8)
, (62, '经济发展办公室工作人员（兼工业镇长助理、技能培训、协助发改（能耗）双控、电力化改革、项目推进）', 8)
, (63, '经济发展办公室工作人员（科技创新、服务业发展、投资（对接科技局；商务局服务业发展中心））', 8)
, (64, '经济发展办公室工作人员（支部工作、协助重点工作及商会工作）', 8)
, (65, '劳动纠纷、职业卫生、日常监督、星创湾现场（对接人社局、卫计局）', 8)
, (66, '安全生产、小微园区监管、日常监督、特种设备、污水零直排（对接应急局、墙改办、市场监管）', 8)
, (67, '税务协理、科协、电子商务、小微园系统建设（对接国税于城分局；科协；商务局商贸电商科；经信局园区科）', 8)
, (68, '规上工业统计工作、能源和水消费统计工作、工业经济效益、景气调查统计工作', 8)
, (69, '就业条线、安全资料、安全培训、工程资料', 8)
, (70, '农业统计工作、城乡一体化住户调查工作、粮食生产统计监测调查工作、畜禽监测。', 8)
, (71, '规模以下工业抽样调查统计工作、服务业统计工作（贸易统计）、名录库工作、旅游业统计、其他临时性或一次性调查工作', 8)
, (72, '信息员，镇相关工作对接处理，上级交办问题处理，日常巡查检查，管家工作管理。', 8)
, (73, '特色小镇统计（年度考核）工作、开发区统计（年度考核）工作、链长制、小城市试点考核、嘉兴市重大产业平台', 8)
, (74, '商会、园区党建', 8)
, (75, '星创湾资料、入园入区资料、疫情防控、发改（能耗）双控报表', 8)
, (76, '社会事务服务管理办公室主任，全面统筹负责教育工作、食品药品安全工作，统筹民政、残联、退役军人、三社、卫健、疫情防控等各项工作', 9)
, (77, '社会事务服务管理办公室副主任，牵头负责民政、残联工作', 9)
, (78, '负责民政工作', 9)
, (79, '社会治理办公室副主任、行政执法办公室副主任、教导员。牵头负责退役军人、三社工作，协助食品药品安全工作', 9)
, (80, '社会组织党支部书记、社区党支部委员，负责慈善工作、协助三社工作', 9)
, (81, '负责退役军人工作', 9)
, (82, '妇联主席、社会事务服务管理办公室副主任、政务服务办公室副主任，负责便民服务中心', 9)
, (83, '居民医保', 9)
, (84, '城乡居民基本养老保险、居民医保', 9)
, (85, '负责残联工作', 9)
, (86, '职工医保', 9)
, (87, '就业，创业，失业窗口，职工医保', 9)
, (88, '综合服务中心党支部副书记，牵头负责疫情防控、爱国卫生、计生工作。', 9)
, (89, '负责计生统计、药具、档案、流动人口计生工作', 9)
, (90, '负责计生协活动、服务、计生政策、党支部联络员', 9)
, (91, '疫情防控', 9)
, (92, '负责爱国卫生、红十字会、报账', 9)
, (93, '负责信息工作、协助食药安全工作', 9)
, (94, '村镇建设管理办公室主任，统管村建办工作、配合城建镇长做好相关工作、统筹协调安排相关工作', 10)
, (95, '综合服务中心副主任、负责巡查、创建等。交通大会战、文明创建、美丽城镇、农村公路管理站、安全生产等镇级工作、日常巡查相关事宜、政府投资项目统计事宜、农村生活污水', 10)
, (96, '招商和项目推进科副科长，负责项目前期。政府投资项目前期办证、后期竣工事宜、国土空间利用（规划）、农民建房规划', 10)
, (97, '村镇建设管理办公室工作人员', 10)
, (98, '招投标、农民建房。镇招投标中心工作、农民建房（具体工作）、美丽城镇相关工作（具体工作）', 10)
, (99, '政府投资项目全过程管理、交通大会战相关工作（具体工作）、农村公路管理站台账', 10)
, (100, '镇级小型项目现场管理、线性工程（G527等）对下工作', 7)
, (101, '交通建管', 10)
, (102, '财务、统计、投资入库、档案', 10)
, (103, '镇级小型项目现场管理；日常巡查相关工作（上级督察、专项检查等）', 10)
, (104, '政府投资项目现场管理；日常巡查相关工作（上级督察、专项检查等）', 10)
, (105, '交通管理', 10)
, (106, '政府投资项目现场管理；文明创建相关工作（具体工作）', 10)
, (107, '在建档案管理（三楼档案室），包括行成电子档；配合经办人办理前期、归档工作；政府投资领导小组会议资料整理', 10)
, (108, '道路、农房、码头、燃气等日常巡查；建筑工地文明施工、防疫工作等巡查；其他镇级工作巡查；', 10)
, (109, '交通大会战台账整理；农村公路管理台账整理；镇级小型项目现场管理；', 10)
, (110, '办公室统筹', 10)
, (111, '征搬迁工作', 10)
, (112, '档案、内勤', 10)
, (113, '村镇建设管理办公室党支部书记，征搬迁工作、侧重负责征迁', 10)
, (114, '财政办公室主任、综合服务中心党支部书记，统筹协调财政办日常工作；财政复核；合同审核；财务审批', 11)
, (115, '协助财政办主任开展工作；融资；会计（总工会、机关工会）', 11)
, (116, '综合服务中心副主任、事业会计，会计（站办、保留账户、党群服务中心、政府本级、党政办、党建办）；站办账户（出纳蔡海萍）复核；票据管理；', 11)
, (117, '站办专项资金出纳；会计（慈善、水利建设、农合联、镇食堂）； 党费户、党群服务中心、农合联、慈善、保留账户（出纳蔡海萍）复核', 11)
, (118, '出纳（财政办、镇食堂、站办、党费户、党群服务中心、农合联、党政、党建、慈善、保留账户、三泽物业）', 11)
, (119, '10家公司出纳（开发区投资公司、城建公司、百尚公司、百新公司、基础、富村、尚成公司）', 10)
, (120, '国有公司财务印鉴章管理；8家国有公司会计（开发区投资、尚成、三泽物业、百尚开发、百新公司）；债务申报、债务表、快报、凭证装订整理、工程款台账', 10)
, (121, '总会计账、预决算编制、政府采购、报表上报（财政支出、三公经费等月报）；党政办、党建办账户（出纳蔡海萍）复核；工资奖金核算；', 11)
, (122, '负责国有资产日常管理工作；各国有公司公章管理', 11)
, (123, '协助管理国有资产的使用和经营工作', 11)
, (124, '10家公司付款复核工作；会计（城建公司、基础公司、富村公司、党费户）、社保办理、公积金业务；工商变更；固定资产管理平台（每月更新）；资产云系统（资产月报）、国有资产年报', 11)
, (125, '协助监督、检查国有资产管理、维护和使用情况，建立健全相关台帐，合同签订，国资收租；合同备案管理', 11)
, (126, '农业农村办公室主任，统筹全面工作', 12)
, (127, '综合服务中心副主任（分管农经），农合联、农民增收、农业投资、农经管理', 12)
, (128, '经作（蔬菜、蚕桑）、粮食生产功能（非粮化）、气象、农业招商引资、产业化项目管理', 12)
, (129, '综合服务中心副主任（分管农业），畜牧、水产与渔政、农村人居环境', 12)
, (130, 'UNKNOWN', 12)
, (131, '农机监理', 12)
, (132, '农机监理、农民培训等农培工作', 12)
, (133, '栽培、土肥、植保、农业设施用地报批、农业保险', 12)
, (134, '畜牧、农村人居环境、防疫', 12)
, (135, '林业、水果、科教（含生态、能源、秸秆禁烧、清洁农场、项目申报等）', 12)
, (136, '水政监察和水资源管理、工程质监和安全、水利工程、防汛防台抗旱、灾情统计、考核数据及材料整理、档案、党务', 12)
, (137, '五个村会计、票据管理、农村财务审计、壮大村级集体经济', 12)
, (138, '十个村出纳、一事一议、扶贫', 12)
, (139, '水利规划、水文、防汛防台抗旱、水利信息、防汛仓库管理、灾情统计、档案、报账', 12)
, (140, '水利规划、工程质监和安全、水利工程、防汛防台抗旱', 12)
, (141, '五个村会计、村级产权交易、农村财务审计', 12)
, (142, '种子、惠农补贴、信息、农产品质量安全及三品认证', 12)
, (143, '招商和项目推进科科长，全面负责招商和项目推进科工作，分管招商引资工作，负责招商引资目标责任制考核指标落实。', 13)
, (144, '综合服务中心主任', 13)
, (145, '招商和项目推进科副科长，负责驻沪、项目招引、项目推进等工作，协助长三角一体化目标责任制考核指标落实。', 13)
, (146, '负责文字材料的撰写，相关数据统计、分析、上报，上级各类统计信息的填报，以及目标责任制考核情况汇总、通报等工作，协助外语翻译工作。', 13)
, (147, '招商和项目推进服务中心副主任，全面负责项目推进、综合服务等工作，联系招商二组项目推进工作。', 13)
, (148, '负责项目招引、项目推进、人才、统战等工作，协助人才、科创工作目标责任制考核指标落实，协助信息宣传报道。', 13)
, (149, '负责项目招引、项目推进等工作，协助内资招商目标责任制考核指标落实。', 13)
, (150, '负责项目招引、项目推进等工作，协助项目推进节点化管理考核指标等工作。', 13)
, (151, '负责二三产项目推进、协调等全流程服务，以及项目推进节点化管理考核指标等工作，联系招商三组项目推进工作。', 13)
, (152, '负责项目招引、项目推进、服务业等工作，协助服务业工作目标责任制考核指标落实。', 13)
, (153, '负责信息宣传报道、档案管理、财务报销、后勤保障、招商周报编辑等工作，协助文字材料撰写、数据统计和统战工作，联系招商一组项目推进工作。', 13)
, (154, '负责外资项目招引，外语翻译，外国协会、外资中介、外商人员的日常联系沟通、信息收集等工作，协助外资招商目标责任制考核指标落实。', 13)
, (155, '驾驶员', 13)
, (156, '综合服务中心副主任、文化副站长（主持工作），主持镇文化分馆、文化站工作，负责日常事务；活动策划组织（含品牌节庆活动开展）；基础设施建设及重点工程推进；文化队伍建设；各类创建；指导、督促各村文化礼堂（新建、提升、创建评定、活动等）。', 14)
, (157, '综合服务中心副主任，文化化产业；文化市场（含扫黄打非）；学习强国日常管理；中心工作联络；文化场所疫情防控；负责图书分馆、企业分馆、文创馆、横港印象馆、名师工作室等场馆活动开展、运作管理', 14)
, (158, '沈奕云：指导镇级舞蹈节目编排；平台填报处理（各文化平台）；指导村创编节目、会务、演出服管理；协助活动策划组织及品牌节庆活动开展；文艺繁荣工程；协助文化礼堂工作；文保和非遗。', 14)
, (159, '账（宣文统旅）；材料撰写及课题研究；站内工作信息统筹、文学理论部工作；协助文明日常工作；意识形态（含网络舆情）。', 14)
, (160, '文明日常工作；协助课题及材料撰写、站内信系、文学理论部工作；新闻信息宣传（含短视频、爱海盐发布、学习强国供稿）', 14)
, (161, '文明创建；体育（含老年体协）；摄影及视觉部工作；台账档案；四个平台处理；负责线上线下各阵地管理及外宣工作；后勤。', 14)
, (162, '横港村宣传文化工作', 14)
, (163, '逍恬村宣传文化工作，同时负责百步分馆表演艺术指导部相关工作', 14)
, (164, '农丰村宣传文化工作  （含礼堂书屋）', 14)
, (165, '桃北村宣传文化工作', 14)
, (166, '五丰村宣传文化工作（含礼堂书屋）', 14)
, (167, '百联村宣传文化工作，同时负责站内培训方案策划和组织', 14)
, (168, '胜利村宣传文化工作', 14)
, (169, '超同村宣传文化工作', 14)
, (170, '得胜村宣传文化工作', 14)
, (171, '新升村宣传文化工作', 14)
, (172, '负责一支队伍管执法及党建、创建、队伍建设等；负责大综合一体化改革等相关工作。', 15)
, (173, '生态环境执法分队队长，主持全面工作，环保督查、上级交办、转办件的办理，日常案件办理，其它与局、镇等工作对接。', 16)
, (174, '负责环保督查件、上级交办、转办件的办理，日常案件办理，日常巡查检查，信访处理，信息员。', 16)
, (175, '驾驶员，信访处理，日常巡查检查。', 16)
, (176, '档案管理，材料、数据的收集和报送，固废平台管理员，后勤管理。', 16)
, (177, '市场监管局百步分局局长、党支部书记，全面主持分局各项工作，重点牵头投诉举报、放心消费、行政审批、财物、人事、党建、属地交办等工作，联系消保科、人事科、办公室等。', 17)
, (178, '市场监管局百步分局副局长，全面参与分局各项工作，重点牵头知识产权保护中心（快维中心）筹建、食品安全、质量标准、农贸市场监管、行政审批信息宣传等工作，联系知识产权科、市场科、食品科、质量标准科、审批科、商家共治联盟。', 17)
, (179, '市场监管局百步分局副局长，全面参与分局各项工作，重点牵头信用监管、稽查执法、特设安全、药械监管等工作，联系信用科、执法队、特设科、药械科、品牌指导站。', 17)
, (180, '重点负责市场主体年报、日常巡查、疫情防控、有关催报（填报）等工作，以及交办的其他工作。', 17)
, (181, '重点负责行政审批、信息宣传、党务、人事等工作，以及交办的其他工作。', 17)
, (182, '重点负责知识产权保护中心（快维中心）筹建、食品安全、质量标准、农贸市场监管、信息宣传、行政执法、财物等工作，以及交办的其他工作。', 17)
, (183, '重点负责信用监管、稽查执法、特设安全、药械监管、信息宣传（牵头）、等工作，以及交办的其他工作。', 17)
, (184, '重点负责市场主体年报、个私协会、日常巡查、疫情防控、小微企业调查、车辆维保、文件收发等工作，以及交办的其他工作。', 17)
, (185, '综合行政执法中队中队长（主持工作），统筹负责综合行政执法、三改一拆、四位一体（人居环境）、五水共治、垃圾分类、队伍建设等。承接一支队伍管执法相关工作。', 18)
, (186, '负责执法办案工作，餐厨垃圾以及犬类管理联络员。参与横港片综合巡查组巡查工作。', 18)
, (187, '内勤，负责综合材料、信息宣传、统计、档案、智慧城管系统、执法办案等工作。', 18)
, (188, '负责执法办案工作，参与百步片综合巡查组巡查工作。', 18)
, (189, '局借调人员，负责执法办案工作，参与横港片综合巡查组巡查工作。', 18)
, (190, '负责行政审批工作。', 18)
, (191, '协助支部书记做好党建工作，协助教导员做好四位一体和垃圾分类等工作', 18)
, (192, '百步集镇市容管理组组长，负责百步集镇市容市貌管理（户外广告、店招店牌、餐饮油烟、越店经营、流动摊贩开店审批等）、犬类管理及佳惠物业考核管理。', 18)
, (193, '百步片四位一体组长，牵头负责百步片四位一体工作，工业垃圾打包站、中转站管理。', 18)
, (194, '内勤及财务，负责（四位一体、垃圾分类、五水共治、人居环境）内勤，采购、报账及综治系统管理。', 18)
, (195, '横港片综合巡查组组长，负责横港片全域违建巡查和管控、农村主要道路流动摊贩管理，行政执法领域违法行为巡查等。协助三改一拆、四位一体和垃圾分类等工作。', 18)
, (196, '综合分队', 18)
, (197, '横港片综合巡查组组员。', 18)
, (198, '百步片综合巡查组组长，负责百步片全域违建巡查和管控、农村主要道路流动摊贩管理，行政执法领域违法行为巡查等。协助三改一拆、四位一体和垃圾分类等工作。', 18)
, (199, '头负责三改一拆工作。', 18)
, (200, '垃圾分类组长，牵头负责百步镇全域垃圾分类工作。', 18)
, (201, '横港片四位一体组长，牵头负责横港片四位一体工作，餐厨垃圾点、建筑垃圾场、中转站管理。', 18)
, (202, '横港集镇市容管理组组长，负责横港集镇市容市貌管理（户外广告、店招店牌、餐饮油烟、越店经营、流动摊贩、开店审批等）。', 18)
, (203, '横港集镇市容管理组组员', 18)
, (204, '百步片巡查组组员。', 18)
, (205, '自然资源规划局百步国土所所长，全面负责', 19)
, (206, '农房审批、农房发证、档案管理、林业管理，协助其他工作等其他工作。', 19)
, (207, '信息一张图、用地批后监管、土地执法监察、土地调查变更、宣传、设施用地审批与管理、临时用地审批与管理、土地开发、土地整治、耕地占补平衡、土地整理', 19)
, (208, '自然资源规划局百步国土所副所长，负责党建工作、用地预审、农转用（征收）报批、供地、收储、土地调查变更、土地执法监察、信访；协助土地开发、土地整治、耕地占补平衡、土地整理、设施用地审批与管理、临时用地审批与管理。', 19)
, (209, '档案管理、办公室内勤、协助土地执法监察等工作', 19)
;

INSERT INTO
  user (id, name, gender, station_id)
VALUES
  (999, 'admin', NULL, 999)
, (1, '赵小龙(党委书记)', NULL, 1)
, (2, '赵小龙(党委委员)', NULL, 1)
, (3, '吴胜杰', NULL, 2)
, (4, '蔡耀明', NULL, 3)
, (5, '王哲', NULL, 4)
, (6, '姜利民', NULL, 4)
, (7, '李勤根(纪委书记)', NULL, 5)
, (8, '李勤根(党委委员)', NULL, 7)
, (9, '沈潇雅(组织部长)', NULL, 6)
, (10, '沈潇雅(党委委员)', NULL, 7)
, (11, '范郭真', NULL, 7)
, (12, '吴肖峰', NULL, 7)
, (13, '朱世鹏', NULL, 7)
, (14, '董佳浩', NULL, 8)
, (15, '张陆军', NULL, 9)
, (16, '李均敬', NULL, 10)
, (17, '潘其华', NULL, 11)
, (18, '王玲敏', NULL, 11)
, (19, '沈伟华', NULL, 11)
, (20, '姚晨雪', NULL, 11)
, (21, '叶吴良', NULL, 11)
, (22, '任叶锋', NULL, 12)
, (23, '沈鹏', NULL, 12)
, (24, '蒋爱君', NULL, 13)
, (25, '赵生良', NULL, 13)
, (26, '张明', NULL, 13)
, (27, '张陆君', NULL, 13)
, (28, '刘爱群', NULL, 13)
, (29, '唐惠平', NULL, 13)
, (30, '任凯波', '男', 14)
, (31, '江  琳', '女', 15)
, (32, '蔡琦亮', '男', 16)
, (33, '顾嘉骏', '男', 17)
, (34, '王怡雯', '女', 18)
, (35, '朱佳琪', '女', 19)
, (36, '俞金良', '男', 20)
, (37, '宋  婷', '女', 21)
, (38, '马徐杰', '男', 22)
, (39, '王  皓', '女', 23)
, (40, '金梦靖', '女', 24)
, (41, '秦银平', '男', 25)
, (42, '沈晓明', '男', 26)
, (43, '何柏良', '男', 27)
, (44, '高  沁', '女', 28)
, (45, '庄建康', '男', 26)
, (46, '刘晓冬', '男', 29)
, (47, '夏欣宜', '女', 30)
, (48, '富高君', '男', 31)
, (49, '徐  皓', '男', 32)
, (50, '潘如锦', '女', 33)
, (51, '殷其良', '男', 34)
, (52, '王建文', '男', 34)
, (53, '沈金良', '男', 35)
, (54, '盛玲丽', '女', 36)
, (55, '蒋勇杰', '男', 37)
, (56, '吴浩加', '男', 38)
, (57, '张漂洁', '女', 39)
, (58, '沈  怡', '女', 40)
, (59, '黄亦潇', '女', 41)
, (60, '钟舒亭', '女', 42)
, (61, '蒋陈燕', '女', 43)
, (62, '徐晨阳', '男', 44)
, (63, '王华烽', '男', 45)
, (64, '李  新', '男', 45)
, (65, '盛怡豪', '男', 45)
, (66, '陈  飞', '男', 45)
, (67, '沈钱明', '男', 46)
, (68, '孙晨辉', '男', 47)
, (69, '张佳伟', '男', 48)
, (70, '柯  江', '男', 49)
, (71, '吴拂晓', '男', 50)
, (72, '陈国卫', '男', 51)
, (73, '缪法明', '男', 52)
, (74, '李伟明', '男', 52)
, (75, '沈晓坚', '男', 53)
, (76, '干高霞', '女', 54)
, (77, '吴辰凯', '男', 55)
, (78, '姚春燕', '女', 56)
, (79, '储美芬', '女', 57)
, (80, '沈凯悦', '女', 58)
, (81, '钱梦婷', '女', 59)
, (82, '胡晨迪', '男', 60)
, (83, '陆韵涛', '男', 61)
, (84, '陆  军', '男', 62)
, (85, '朱勤燕', '女', 63)
, (86, '张建松', '男', 64)
, (87, '姚佳飞', '男', 65)
, (88, '陈  涛', '男', 66)
, (89, '秦倩芸', '女', 67)
, (90, '王  瑜', '女', 68)
, (91, '王月婷', '女', 69)
, (92, '蔡  芸', '女', 70)
, (93, '吴  珊', '女', 71)
, (94, '朱军军', '男', 72)
, (95, '陈  龙', '男', 73)
, (96, '吴霞菁', '女', 74)
, (97, '吴能娟', '女', 75)
, (98, '陆加海', '男', 76)
, (99, '王永明', '男', 77)
, (100, '王超鑫', '男', 78)
, (101, '金顺祥', '男', 79)
, (102, '沈红维', '女', 80)
, (103, '印  佳', '女', 81)
, (104, '冯  瀛', '女', 82)
, (105, '姜  燕', '女', 83)
, (106, '吴凯丽', '女', 84)
, (107, '盛卫丰', '男', 85)
, (108, '陈  维', '女', 86)
, (109, '吴凌霞', '女', 87)
, (110, '何  琦', '女', 88)
, (111, '吴静怡', '女', 89)
, (112, '许柳婷', '女', 90)
, (113, '朱洛慧', '女', 91)
, (114, '姚玲丹', '女', 92)
, (115, '李董燕', '女', 93)
, (116, '金文彬', '男', 94)
, (117, '盛秀锋', '男', 95)
, (118, '沈伟佳', '男', 96)
, (119, '庄雪明', '男', 97)
, (120, '朱健康', '男', 98)
, (121, '蒉张斌', '男', 99)
, (122, '徐姚明', '男', 100)
, (123, '张春伟', '男', 97)
, (124, '夏  晶', '男', 101)
, (125, '郑  欢', '女', 102)
, (126, '许李金', '男', 103)
, (127, '沈  超', '男', 104)
, (128, '庄宇峰', '男', 105)
, (129, '叶士斌', '男', 105)
, (130, '丁  悦', '男', 106)
, (131, '袁  洁', '女', 107)
, (132, '钱海青', '男', 108)
, (133, '李  昕', '女', 109)
, (134, '冯沈燕', '男', 110)
, (135, '蒋  昊', '男', 111)
, (136, '薛  斌', '男', 111)
, (137, '朱豪杰', '男', 111)
, (138, '张晓琴', '女', 112)
, (139, '李德明', '男', 113)
, (140, '张仕明', '男', 111)
, (141, '李志远', '男', 112)
, (142, '钱雪峰', '男', 111)
, (143, '陈仁群', '女', 114)
, (144, '吴玉明', '男', 115)
, (145, '沈燕君', '女', 116)
, (146, '金徐萍', '女', 117)
, (147, '蔡海萍', '女', 118)
, (148, '郑  洁', '女', 119)
, (149, '邓燕君', '女', 120)
, (150, '顾丽燕', '女', 121)
, (151, '徐建平', '男', 122)
, (152, '张建龙', '男', 123)
, (153, '徐  娟', '女', 124)
, (154, '金敏佳', '男', 125)
, (155, '陆水良', '男', 126)
, (156, '包海兴', '男', 127)
, (157, '徐忠玲', '女', 128)
, (158, '王建明', '男', 129)
, (159, '张  岚', '女', 130)
, (160, '吴惠明', '男', 131)
, (161, '张永明', '男', 132)
, (162, '应小平', '男', 133)
, (163, '曹国光', '男', 134)
, (164, '秦许康', '男', 135)
, (165, '姚  明', '男', 136)
, (166, '朱淑丽', '女', 137)
, (167, '王  芸', '女', 138)
, (168, '俞晨怡', '女', 139)
, (169, '俞雪峰', '男', 140)
, (170, '彭印洁', '女', 141)
, (171, '金菊娟', '女', 142)
, (172, '肖叶忠', '男', 143)
, (173, '许伟兵', '男', 144)
, (174, '陈哲浩', '男', 145)
, (175, '曹忆湄', '女', 146)
, (176, '张伟忠', '男', 147)
, (177, '李望龙', '男', 148)
, (178, '徐元涛', '男', 149)
, (179, '阮鑫磊', '男', 150)
, (180, '张晟涛', '男', 151)
, (181, '马镭耘', '男', 152)
, (182, '吴丹青', '女', 153)
, (183, '王  瑞', '女', 154)
, (184, '姚文浩', '男', 155)
, (185, '袁春峰', '男', 155)
, (186, '沈峰火', '男', 156)
, (187, '叶慧娟', '女', 157)
, (188, '沈奕云', '女', 158)
, (189, '李艳春', '女', 159)
, (190, '俞嘉雯', '女', 160)
, (191, '沈欢渊', '女', 161)
, (192, '徐林燕', '女', 162)
, (193, '曹李洁', '女', 163)
, (194, '徐珊妮', '女', 164)
, (195, '金银洁', '女', 165)
, (196, '闻丹媛', '女', 166)
, (197, '殷露娜', '女', 167)
, (198, '钱佳丽', '女', 168)
, (199, '储  妮', '女', 169)
, (200, '康  妍', '女', 170)
, (201, '康怡晨', '女', 171)
, (202, '李丹捷', '男', 172)
, (203, '卢  毅', '男', 173)
, (204, '钟海富', '男', 174)
, (205, '孙学军', '男', 175)
, (206, '许  晓', '女', 176)
, (207, '徐建国', '男', 177)
, (208, '张志来', '男', 178)
, (209, '朱  犟', '男', 179)
, (210, '冯建明', '男', 180)
, (211, '汪超逸', '女', 181)
, (212, '庄毅炜', '男', 182)
, (213, '朱克来', '女', 183)
, (214, '孙腾飞', '男', 184)
, (215, '钱雪飞', '男', 185)
, (216, '蔡诚航', '男', 186)
, (217, '王  琴', '女', 187)
, (218, '范振伟', '男', 188)
, (219, '杨慧杰', '男', 189)
, (220, '舒  宁', '男', 190)
, (221, '徐海平', '男', 191)
, (222, '沈海飞', '男', 192)
, (223, '干佳伟', '男', 193)
, (224, '顾蕾婷', '女', 194)
, (225, '郭  伟', '男', 195)
, (226, '倪周剑', '男', 196)
, (227, '杜镱杰', '男', 197)
, (228, '黄燕飞', '男', 198)
, (229, '徐晓明', '男', 199)
, (230, '陆一侃', '男', 200)
, (231, '张卫佳', '男', 201)
, (232, '马明复', '男', 202)
, (233, '张益斌', '男', 203)
, (234, '查敏皓', '男', 203)
, (235, '朱超岳', '男', 204)
, (236, '金海凤', '男', 205)
, (237, '戴根松', '男', 206)
, (238, '朗  宇', '女', 207)
, (239, '王益文', '男', 208)
, (240, '叶华明', '男', 209)
;

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