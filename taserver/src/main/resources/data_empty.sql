SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT;
SET NAMES utf8;
SET NAMES utf8mb4;
SET @OLD_TIME_ZONE=@@TIME_ZONE;
SET TIME_ZONE='+00:00';
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO';
SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0;

INSERT INTO `department` (`id`, `dept_order`, `name`, `parent_id`, `short_name`, `dept_type`) VALUES
	(-999, 1, '系统管理员', NULL, NULL, NULL),
	(1, 1, '测试部门1', NULL, NULL, NULL),
	(2, 2, '测试部门2', NULL, NULL, NULL),
	(3, 3, '测试部门3', NULL, NULL, NULL),
	(4, 4, '测试部门4', NULL, NULL, NULL),
	(5, 5, '测试部门5', NULL, NULL, NULL),
	(6, 6, '测试部门6', 1, '', 'STATION'),
	(7, 7, '测试部门7', 1, '', 'STATION'),
	(8, 8, '测试部门8', 1, '', 'STATION'),
	(9, 9, '测试部门9', 1, '', 'STATION'),
	(10, 10, '测试部门10', 1, '', 'STATION'),
	(11, 11, '测试部门11', 1, '', 'STATION'),
	(12, 12, '测试部门12', 1, '', 'STATION'),
	(13, 13, '测试部门13', 1, '', 'STATION'),
	(14, 14, '测试部门14', 1, NULL, NULL),
	(15, 16, '测试部门15', 1, '', 'STATION'),
	(16, 17, '测试部门16', 1, NULL, NULL),
	(17, 18, '测试部门17', 1, '', 'STATION'),
	(18, 19, '测试部门18', 1, '', 'STATION'),
	(19, 20, '测试部门19', 1, '', 'STATION'),
	(20, 21, '测试部门20', 1, '', 'STATION'),
	(21, 22, '测试部门21', 1, NULL, NULL),
	(22, 23, '测试部门22', 1, NULL, NULL),
	(23, 24, '测试部门23', 1, NULL, NULL),
	(24, 25, '测试部门24', 1, NULL, NULL),
	(25, 26, '测试部门25', 1, NULL, NULL),
	(26, 27, '测试部门26', 1, NULL, NULL),
	(27, 28, '测试部门27', 1, NULL, NULL),
	(28, 29, '测试部门28', 1, NULL, NULL),
	(29, 30, '测试部门29', 1, NULL, NULL),
	(30, 31, '测试部门30', 1, NULL, NULL),
	(31, 32, '测试部门31', 1, NULL, NULL),
	(32, 15, '测试部门32', 1, NULL, NULL);

INSERT INTO `user` (`id`, `name`, `privilege`, `station`, `user_order`, `department_id`, `parent_id`, `password`, `gender`, `is_deleted`, `phone`) VALUES
	(-999, 'admin', 'ADMIN', '系统管理员', NULL, -999, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` (`id`, `name`, `privilege`, `station`, `user_order`, `department_id`, `parent_id`, `password`, `gender`, `is_deleted`, `phone`) VALUES
	(1, '党委', 'DEPT', '', NULL, 1, NULL, '123abc', NULL, NULL, NULL),
	(2, '用户2', 'FIRST', '', NULL, 2, NULL, 'zhaoxiaolong123', NULL, NULL, NULL),
	(3, '用户3', 'DOUBLE', '', NULL, 3, NULL, NULL, NULL, NULL, NULL),
	(4, '用户4', 'DOUBLE', '', NULL, 3, NULL, NULL, NULL, NULL, NULL),
	(5, '用户5', 'DOUBLE', '', NULL, 3, NULL, 'hy1415926', NULL, NULL, NULL),
	(6, '用户6', 'DOUBLE', '', NULL, 3, NULL, 'jlm031128', NULL, NULL, NULL),
	(7, '用户7', 'DOUBLE', '', NULL, 3, NULL, '770608aa', NULL, NULL, NULL),
	(8, '用户8', 'DOUBLE', '', NULL, 3, NULL, '860522sxy', NULL, NULL, NULL),
	(9, '用户9', 'DOUBLE', '', NULL, 3, NULL, NULL, NULL, NULL, NULL),
	(10, '用户10', 'DOUBLE', '', NULL, 3, NULL, 'wuxf123456', NULL, NULL, NULL),
	(11, '用户11', 'DOUBLE', '', NULL, 3, NULL, 'zsp134679', NULL, NULL, NULL),
	(12, '用户12', 'DOUBLE', '', NULL, 3, NULL, NULL, NULL, NULL, NULL),
	(13, '用户13', 'DOUBLE', '', NULL, 3, NULL, NULL, NULL, NULL, NULL),
	(14, '用户14', 'DOUBLE', '', NULL, 3, NULL, NULL, NULL, NULL, NULL),
	(15, '用户15', 'DOUBLE', '', NULL, 3, NULL, 'panqh302', NULL, NULL, NULL),
	(16, '用户16', 'DOUBLE', '', NULL, 3, NULL, 'QAZ7895123', NULL, NULL, NULL),
	(17, '用户17', 'DOUBLE', '', NULL, 3, NULL, 'swh639285', NULL, NULL, NULL),
	(18, '用户18', 'DOUBLE', '', NULL, 3, NULL, '092116cherish', NULL, NULL, NULL),
	(19, '用户19', 'DOUBLE', '', NULL, 3, NULL, 'zbq123456', NULL, NULL, NULL),
	(20, '用户20', 'DOUBLE', '', NULL, 3, NULL, 'yf20021111', NULL, NULL, NULL),
	(21, '用户21', 'DOUBLE', '', NULL, 3, NULL, NULL, NULL, NULL, NULL),
	(22, '用户22', 'DOUBLE', '', NULL, 3, NULL, NULL, NULL, NULL, NULL),
	(23, '用户23', 'DOUBLE', '', NULL, 3, NULL, NULL, NULL, NULL, NULL),
	(24, '用户24', 'DOUBLE', '', NULL, 3, NULL, NULL, NULL, NULL, NULL),
	(25, '用户25', 'DOUBLE', '', NULL, 3, NULL, NULL, NULL, NULL, NULL),
	(26, '用户26', 'DOUBLE', '', NULL, 3, NULL, NULL, NULL, NULL, NULL),
	(27, '用户27', 'DOUBLE', '', NULL, 3, NULL, NULL, NULL, NULL, NULL),
	(28, '用户28', 'DEPT_J', '', NULL, 4, NULL, '123abc', NULL, NULL, NULL),
	(29, '用户29', 'DEPT_Z', '', NULL, 5, NULL, NULL, NULL, NULL, NULL),
	(30, '用户30', 'FIRST', '', NULL, 6, NULL, 'rkb19851003', NULL, NULL, NULL),
	(31, '用户31', 'DOUBLE', '', NULL, 6, NULL, NULL, NULL, NULL, NULL),
	(32, '用户32', NULL, '', NULL, 6, NULL, 'C737589', NULL, NULL, NULL),
	(33, '用户33', NULL, '', NULL, 6, NULL, NULL, NULL, NULL, NULL),
	(34, '用户34', NULL, '', NULL, 6, NULL, NULL, NULL, NULL, NULL),
	(35, '用户35', NULL, '', NULL, 6, NULL, NULL, NULL, NULL, NULL),
	(36, '用户36', NULL, '', NULL, 6, NULL, NULL, NULL, NULL, NULL),
	(37, '用户37', NULL, '', NULL, 6, NULL, 'sting312', NULL, NULL, NULL),
	(38, '用户38', NULL, '', NULL, 6, NULL, NULL, NULL, NULL, NULL),
	(39, '用户39', NULL, '', NULL, 6, NULL, 'Wh199412', NULL, NULL, NULL),
	(40, '用户40', 'FIRST', '', NULL, 7, NULL, NULL, NULL, NULL, NULL),
	(41, '用户41', NULL, '', NULL, 7, NULL, NULL, NULL, NULL, NULL),
	(42, '用户42', NULL, '', NULL, 7, NULL, 'sxm1998', NULL, NULL, NULL),
	(44, '用户44', NULL, '', NULL, 7, NULL, NULL, NULL, NULL, NULL),
	(45, '用户45', NULL, '', NULL, 7, NULL, NULL, NULL, NULL, NULL),
	(46, '用户46', NULL, '', NULL, 7, NULL, NULL, NULL, NULL, NULL),
	(48, '用户48', 'FIRST', '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(49, '用户49', 'DOUBLE', '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(50, '用户50', 'DOUBLE', '', NULL, 8, NULL, 'bbzz110', NULL, NULL, NULL),
	(51, '用户51', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(52, '用户52', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(53, '用户53', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(54, '用户54', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(55, '用户55', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(56, '用户56', NULL, '', NULL, 8, NULL, 'whj938145', NULL, NULL, NULL),
	(57, '用户57', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(58, '用户58', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(59, '用户59', NULL, '', NULL, 8, NULL, 'qie19920819', NULL, NULL, NULL),
	(60, '用户60', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(61, '用户61', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(62, '用户62', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(63, '用户63', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(64, '用户64', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(65, '用户65', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(66, '用户66', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(67, '用户67', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(68, '用户68', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(69, '用户69', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(70, '用户70', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(71, '用户71', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(72, '用户72', NULL, '', NULL, 8, NULL, 'CHENguowei711228', NULL, NULL, NULL),
	(73, '用户73', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(74, '用户74', NULL, '', NULL, 8, NULL, NULL, NULL, NULL, NULL),
	(75, '用户75', 'FIRST', '', NULL, 9, NULL, NULL, NULL, NULL, NULL),
	(76, '用户76', 'DOUBLE', '', NULL, 9, NULL, NULL, NULL, NULL, NULL),
	(77, '用户77', 'DOUBLE', '', NULL, 9, NULL, NULL, NULL, NULL, NULL),
	(78, '用户78', 'DOUBLE', '', NULL, 9, NULL, NULL, NULL, NULL, NULL),
	(79, '用户79', NULL, '', NULL, 9, NULL, NULL, NULL, NULL, NULL),
	(80, '用户80', NULL, '', NULL, 9, NULL, 'Sky6786713', NULL, NULL, NULL),
	(81, '用户81', NULL, '', NULL, 9, NULL, 'qmt886785428', NULL, NULL, NULL),
	(82, '用户82', NULL, '', NULL, 9, NULL, 'a123371182', NULL, NULL, NULL),
	(83, '用户83', NULL, '', NULL, 9, NULL, '9302lovelyt', NULL, NULL, NULL),
	(84, '用户84', NULL, '', NULL, 9, NULL, NULL, NULL, NULL, NULL),
	(85, '用户85', NULL, '', NULL, 9, NULL, 'zqyaijxd1211', NULL, NULL, NULL),
	(86, '用户86', NULL, '', NULL, 9, NULL, NULL, NULL, NULL, NULL),
	(87, '用户87', NULL, '', NULL, 9, NULL, NULL, NULL, NULL, NULL),
	(88, '用户88', NULL, '', NULL, 9, NULL, NULL, NULL, NULL, NULL),
	(89, '用户89', NULL, '', NULL, 9, NULL, NULL, NULL, NULL, NULL),
	(90, '用户90', NULL, '', NULL, 9, NULL, 'wangyu199302', NULL, NULL, NULL),
	(91, '用户91', NULL, '', NULL, 9, NULL, NULL, NULL, NULL, NULL),
	(92, '用户92', NULL, '', NULL, 9, NULL, 'Bb258963', NULL, NULL, NULL),
	(93, '用户93', NULL, '', NULL, 9, NULL, 'shan1020qiong', NULL, NULL, NULL),
	(94, '用户94', NULL, '', NULL, 9, NULL, NULL, NULL, NULL, NULL),
	(95, '用户95', NULL, '', NULL, 9, NULL, 'chenlong0704', NULL, NULL, NULL),
	(96, '用户96', NULL, '', NULL, 9, NULL, NULL, NULL, NULL, NULL),
	(97, '用户97', NULL, '', NULL, 9, NULL, NULL, NULL, NULL, NULL),
	(98, '用户98', 'FIRST', '', NULL, 10, NULL, NULL, NULL, NULL, NULL),
	(99, '用户99', 'DOUBLE', '', NULL, 10, NULL, NULL, NULL, NULL, NULL),
	(100, '用户100', NULL, '', NULL, 10, NULL, NULL, NULL, NULL, NULL),
	(101, '用户101', 'DOUBLE', '', NULL, 10, NULL, NULL, NULL, NULL, NULL),
	(102, '用户102', NULL, '', NULL, 10, NULL, NULL, NULL, NULL, NULL),
	(103, '用户103', NULL, '', NULL, 10, NULL, NULL, NULL, NULL, NULL),
	(104, '用户104', 'DOUBLE', '', NULL, 6, NULL, 'fy09061110', NULL, NULL, NULL),
	(105, '用户105', NULL, '', NULL, 10, NULL, NULL, NULL, NULL, NULL),
	(106, '用户106', NULL, '', NULL, 10, NULL, NULL, NULL, NULL, NULL),
	(107, '用户107', NULL, '', NULL, 10, NULL, NULL, NULL, NULL, NULL),
	(108, '用户108', NULL, '', NULL, 10, NULL, 'cw112233', NULL, NULL, NULL),
	(109, '用户109', NULL, '', NULL, 10, NULL, 'Aa123456', NULL, NULL, NULL),
	(110, '用户110', 'DOUBLE', '', NULL, 10, NULL, NULL, NULL, NULL, NULL),
	(111, '用户111', NULL, '', NULL, 10, NULL, 'hjy123456', NULL, NULL, NULL),
	(112, '用户112', NULL, '', NULL, 10, NULL, NULL, NULL, NULL, NULL),
	(113, '用户113', NULL, '', NULL, 10, NULL, NULL, NULL, NULL, NULL),
	(114, '用户114', NULL, '', NULL, 10, NULL, NULL, NULL, NULL, NULL),
	(115, '用户115', NULL, '', NULL, 10, NULL, 'yanjing985', NULL, NULL, NULL),
	(116, '用户116', 'FIRST', '', NULL, 11, NULL, 'Jwb8788Yhq', NULL, NULL, NULL),
	(117, '用户117', 'DOUBLE', '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(118, '用户118', 'DOUBLE', '', NULL, 11, NULL, 'swj860102', NULL, NULL, NULL),
	(119, '用户119', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(120, '用户120', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(121, '用户121', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(122, '用户122', NULL, '', NULL, 7, NULL, 'xym836809', NULL, NULL, NULL),
	(123, '用户123', NULL, '', NULL, 11, NULL, 'cjb123456', NULL, NULL, NULL),
	(124, '用户124', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(125, '用户125', NULL, '', NULL, 11, NULL, '19931001zh', NULL, NULL, NULL),
	(126, '用户126', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(127, '用户127', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(128, '用户128', NULL, '', NULL, 11, NULL, 'zyf692661', NULL, NULL, NULL),
	(129, '用户129', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(130, '用户130', NULL, '', NULL, 11, NULL, 'dy1281922824', NULL, NULL, NULL),
	(131, '用户131', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(132, '用户132', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(133, '用户133', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(134, '用户134', 'FIRST', '', NULL, 32, NULL, 'zbq123456', NULL, NULL, NULL),
	(135, '用户135', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(136, '用户136', NULL, '', NULL, 11, NULL, 'xb661581', NULL, NULL, NULL),
	(137, '用户137', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(138, '用户138', NULL, '', NULL, 11, NULL, 'zxq446770230qq', NULL, NULL, NULL),
	(139, '用户139', 'DOUBLE', '', NULL, 32, NULL, 'zbq123456', NULL, NULL, NULL),
	(140, '用户140', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(141, '用户141', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(142, '用户142', NULL, '', NULL, 11, NULL, 'qian1020', NULL, NULL, NULL),
	(143, '用户143', 'FIRST', '', NULL, 12, NULL, NULL, NULL, NULL, NULL),
	(144, '用户144', NULL, '', NULL, 12, NULL, NULL, NULL, NULL, NULL),
	(145, '用户145', 'DOUBLE', '', NULL, 12, NULL, 'syj123456', NULL, NULL, NULL),
	(146, '用户146', NULL, '', NULL, 12, NULL, NULL, NULL, NULL, NULL),
	(147, '用户147', NULL, '', NULL, 12, NULL, NULL, NULL, NULL, NULL),
	(148, '用户148', NULL, '', NULL, 11, NULL, NULL, NULL, NULL, NULL),
	(149, '用户149', NULL, '', NULL, 10, NULL, NULL, NULL, NULL, NULL),
	(150, '用户150', NULL, '', NULL, 12, NULL, NULL, NULL, NULL, NULL),
	(151, '用户151', 'DOUBLE', '', NULL, 12, NULL, NULL, NULL, NULL, NULL),
	(152, '用户152', NULL, '', NULL, 12, NULL, NULL, NULL, NULL, NULL),
	(153, '用户153', NULL, '', NULL, 12, NULL, NULL, NULL, NULL, NULL),
	(155, '用户155', 'FIRST', '', NULL, 13, NULL, NULL, NULL, NULL, NULL),
	(156, '用户156', 'DOUBLE', '', NULL, 13, NULL, '1', NULL, NULL, NULL),
	(157, '用户157', NULL, '', NULL, 13, NULL, NULL, NULL, NULL, NULL),
	(158, '用户158', 'DOUBLE', '', NULL, 13, NULL, NULL, NULL, NULL, NULL),
	(160, '用户160', NULL, '', NULL, 13, NULL, NULL, NULL, NULL, NULL),
	(161, '用户161', NULL, '', NULL, 13, NULL, NULL, NULL, NULL, NULL),
	(162, '用户162', NULL, '', NULL, 13, NULL, 'Y851303', NULL, NULL, NULL),
	(163, '用户163', NULL, '', NULL, 13, NULL, 'zg123456', NULL, NULL, NULL),
	(164, '用户164', NULL, '', NULL, 13, NULL, 'xk561783', NULL, NULL, NULL),
	(165, '用户165', 'DOUBLE', '', NULL, 13, NULL, NULL, NULL, NULL, NULL),
	(166, '用户166', NULL, '', NULL, 13, NULL, NULL, NULL, NULL, NULL),
	(167, '用户167', NULL, '', NULL, 13, NULL, NULL, NULL, NULL, NULL),
	(168, '用户168', NULL, '', NULL, 13, NULL, NULL, NULL, NULL, NULL),
	(169, '用户169', NULL, '', NULL, 13, NULL, 'yxf061230', NULL, NULL, NULL),
	(170, '用户170', NULL, '', NULL, 13, NULL, NULL, NULL, NULL, NULL),
	(171, '用户171', NULL, '', NULL, 13, NULL, NULL, NULL, NULL, NULL),
	(172, '用户172', 'FIRST', '', NULL, 14, NULL, NULL, NULL, NULL, NULL),
	(173, '用户173', 'DOUBLE', '', NULL, 14, NULL, NULL, NULL, NULL, NULL),
	(174, '用户174', 'DOUBLE', '', NULL, 14, NULL, 'czh191126', NULL, NULL, NULL),
	(175, '用户175', NULL, '', NULL, 14, NULL, NULL, NULL, NULL, NULL),
	(176, '用户176', 'DOUBLE', '', NULL, 14, NULL, 'zwz820616', NULL, NULL, NULL),
	(177, '用户177', NULL, '', NULL, 14, NULL, NULL, NULL, NULL, NULL),
	(178, '用户178', NULL, '', NULL, 14, NULL, NULL, NULL, NULL, NULL),
	(179, '用户179', NULL, '', NULL, 14, NULL, '930805ABCd', NULL, NULL, NULL),
	(180, '用户180', NULL, '', NULL, 14, NULL, 'zst19970309', NULL, NULL, NULL),
	(181, '用户181', NULL, '', NULL, 14, NULL, NULL, NULL, NULL, NULL),
	(182, '用户182', NULL, '', NULL, 14, NULL, 'dan9719', NULL, NULL, NULL),
	(183, '用户183', NULL, '', NULL, 14, NULL, 'ruirui0119zhuo', NULL, NULL, NULL),
	(184, '用户184', NULL, '', NULL, 14, NULL, NULL, NULL, NULL, NULL),
	(185, '用户185', NULL, '', NULL, 14, NULL, NULL, NULL, NULL, NULL),
	(186, '用户186', 'FIRST', '', NULL, 15, NULL, '1984114516shen', NULL, NULL, NULL),
	(187, '用户187', 'DOUBLE', '', NULL, 15, NULL, NULL, NULL, NULL, NULL),
	(188, '用户188', NULL, '', NULL, 15, NULL, 'Syy19930908', NULL, NULL, NULL),
	(189, '用户189', NULL, '', NULL, 15, NULL, NULL, NULL, NULL, NULL),
	(190, '用户190', NULL, '', NULL, 15, NULL, NULL, NULL, NULL, NULL),
	(191, '用户191', NULL, '', NULL, 15, NULL, NULL, NULL, NULL, NULL),
	(192, '用户192', NULL, '', NULL, 15, NULL, NULL, NULL, NULL, NULL),
	(193, '用户193', NULL, '', NULL, 15, NULL, NULL, NULL, NULL, NULL),
	(194, '用户194', NULL, '', NULL, 15, NULL, NULL, NULL, NULL, NULL),
	(195, '用户195', NULL, '', NULL, 15, NULL, NULL, NULL, NULL, NULL),
	(196, '用户196', NULL, '', NULL, 15, NULL, NULL, NULL, NULL, NULL),
	(197, '用户197', NULL, '', NULL, 15, NULL, NULL, NULL, NULL, NULL),
	(198, '用户198', NULL, '', NULL, 15, NULL, NULL, NULL, NULL, NULL),
	(199, '用户199', NULL, '', NULL, 15, NULL, '1114924648cn', NULL, NULL, NULL),
	(200, '用户200', NULL, '', NULL, 15, NULL, NULL, NULL, NULL, NULL),
	(201, '用户201', NULL, '', NULL, 15, NULL, NULL, NULL, NULL, NULL),
	(202, '用户202', 'FIRST', '', NULL, 16, NULL, 'li6811630', NULL, NULL, NULL),
	(203, '用户203', 'FIRST', '', NULL, 17, NULL, 'abc123456', NULL, NULL, NULL),
	(204, '用户204', NULL, '', NULL, 17, NULL, NULL, NULL, NULL, NULL),
	(205, '用户205', NULL, '', NULL, 17, NULL, '86336123sun', NULL, NULL, NULL),
	(206, '用户206', NULL, '', NULL, 17, NULL, 'xuxiao115006', NULL, NULL, NULL),
	(207, '用户207', 'FIRST', '', NULL, 18, NULL, 'xjg123456', NULL, NULL, NULL),
	(208, '用户208', 'DOUBLE', '', NULL, 18, NULL, NULL, NULL, NULL, NULL),
	(209, '用户209', 'DOUBLE', '', NULL, 18, NULL, 'zj86513902', NULL, NULL, NULL),
	(210, '用户210', NULL, '', NULL, 18, NULL, NULL, NULL, NULL, NULL),
	(211, '用户211', NULL, '', NULL, 18, NULL, NULL, NULL, NULL, NULL),
	(212, '用户212', NULL, '', NULL, 18, NULL, 'Zyw86778160', NULL, NULL, NULL),
	(213, '用户213', NULL, '', NULL, 18, NULL, NULL, NULL, NULL, NULL),
	(214, '用户214', NULL, '', NULL, 18, NULL, NULL, NULL, NULL, NULL),
	(215, '用户215', 'FIRST', '', NULL, 19, NULL, 'qianxuefei216', NULL, NULL, NULL),
	(216, '用户216', NULL, '', NULL, 19, NULL, 'cch19940404', NULL, NULL, NULL),
	(217, '用户217', NULL, '', NULL, 19, NULL, NULL, NULL, NULL, NULL),
	(218, '用户218', NULL, '', NULL, 19, NULL, NULL, NULL, NULL, NULL),
	(219, '用户219', NULL, '', NULL, 19, NULL, NULL, NULL, NULL, NULL),
	(220, '用户220', NULL, '', NULL, 19, NULL, 'shuning636699', NULL, NULL, NULL),
	(221, '用户221', NULL, '', NULL, 19, NULL, 'xhp680806', NULL, NULL, NULL),
	(222, '用户222', NULL, '', NULL, 19, NULL, 'shen1124', NULL, NULL, NULL),
	(223, '用户223', NULL, '', NULL, 19, NULL, NULL, NULL, NULL, NULL),
	(224, '用户224', NULL, '', NULL, 19, NULL, '123456glt', NULL, NULL, NULL),
	(225, '用户225', NULL, '', NULL, 19, NULL, NULL, NULL, NULL, NULL),
	(226, '用户226', 'DOUBLE', '', NULL, 27, NULL, NULL, NULL, NULL, NULL),
	(227, '用户227', NULL, '', NULL, 19, NULL, '2012123jj', NULL, NULL, NULL),
	(228, '用户228', NULL, '', NULL, 19, NULL, NULL, NULL, NULL, NULL),
	(229, '用户229', NULL, '', NULL, 19, NULL, NULL, NULL, NULL, NULL),
	(230, '用户230', NULL, '', NULL, 19, NULL, NULL, NULL, NULL, NULL),
	(231, '用户231', NULL, '', NULL, 19, NULL, NULL, NULL, NULL, NULL),
	(232, '用户232', NULL, '', NULL, 19, NULL, NULL, NULL, NULL, NULL),
	(233, '用户233', NULL, '', NULL, 19, NULL, NULL, NULL, NULL, NULL),
	(234, '用户234', NULL, '', NULL, 19, NULL, '126991Zz', NULL, NULL, NULL),
	(235, '用户235', NULL, '', NULL, 19, NULL, 'zxjcy1614', NULL, NULL, NULL),
	(236, '用户236', 'FIRST', '', NULL, 20, NULL, NULL, NULL, NULL, NULL),
	(237, '用户237', NULL, '', NULL, 20, NULL, 'Dgs880523', NULL, NULL, NULL),
	(238, '用户238', NULL, '', NULL, 20, NULL, NULL, NULL, NULL, NULL),
	(239, '用户239', 'DOUBLE', '', NULL, 20, NULL, NULL, NULL, NULL, NULL),
	(240, '用户240', NULL, '', NULL, 20, NULL, NULL, NULL, NULL, NULL),
	(241, '用户241', 'NORMAL', '', NULL, 13, NULL, 'bbsq123456', NULL, NULL, NULL),
	(242, '用户242', 'FIRST', '', NULL, 21, NULL, NULL, NULL, NULL, NULL),
	(243, '用户243', 'DOUBLE', '', NULL, 21, NULL, NULL, NULL, NULL, NULL),
	(244, '用户244', 'DOUBLE', '', NULL, 21, NULL, 'qin358751', NULL, NULL, NULL),
	(245, '用户245', 'DOUBLE', '', NULL, 21, NULL, 'hyeg112007', NULL, NULL, NULL),
	(246, '用户246', 'DOUBLE', '', NULL, 21, NULL, 'Gjh1994', NULL, NULL, NULL),
	(247, '用户247', 'DOUBLE', '', NULL, 21, NULL, 'a123456', NULL, NULL, NULL),
	(248, '用户248', 'DOUBLE', '', NULL, 21, NULL, NULL, NULL, NULL, NULL),
	(249, '用户249', 'DOUBLE', '', NULL, 21, NULL, NULL, NULL, NULL, NULL),
	(250, '用户250', 'FIRST', '', NULL, 22, NULL, 'blc220701', NULL, NULL, NULL),
	(251, '用户251', 'DOUBLE', '', NULL, 22, NULL, 'blc220701', NULL, NULL, NULL),
	(252, '用户252', 'DOUBLE', '', NULL, 22, NULL, NULL, NULL, NULL, NULL),
	(253, '用户253', 'DOUBLE', '', NULL, 22, NULL, 'j710100', NULL, NULL, NULL),
	(254, '用户254', 'DOUBLE', '', NULL, 22, NULL, 'fld19920316', NULL, NULL, NULL),
	(255, '用户255', 'FIRST', '', NULL, 23, NULL, 'ct123456', NULL, NULL, NULL),
	(256, '用户256', 'DOUBLE', '', NULL, 23, NULL, 'hdywd13511281982', NULL, NULL, NULL),
	(257, '用户257', 'DOUBLE', '', NULL, 23, NULL, 'danche511792', NULL, NULL, NULL),
	(258, '用户258', 'DOUBLE', '', NULL, 23, NULL, 'ab123456', NULL, NULL, NULL),
	(259, '用户259', 'DOUBLE', '', NULL, 23, NULL, NULL, NULL, NULL, NULL),
	(260, '用户260', 'DOUBLE', '', NULL, 23, NULL, 'twl73057', NULL, NULL, NULL),
	(261, '用户261', 'FIRST', '', NULL, 24, NULL, NULL, NULL, NULL, NULL),
	(262, '用户262', 'DOUBLE', '', NULL, 24, NULL, '1', NULL, NULL, NULL),
	(263, '用户263', 'DOUBLE', '', NULL, 24, NULL, NULL, NULL, NULL, NULL),
	(264, '用户264', 'DOUBLE', '', NULL, 24, NULL, NULL, NULL, NULL, NULL),
	(265, '用户265', 'DOUBLE', '', NULL, 24, NULL, NULL, NULL, NULL, NULL),
	(266, '用户266', 'DOUBLE', '', NULL, 24, NULL, NULL, NULL, NULL, NULL),
	(267, '用户267', 'FIRST', '', NULL, 25, NULL, NULL, NULL, NULL, NULL),
	(268, '用户268', 'DOUBLE', '', NULL, 25, NULL, NULL, NULL, NULL, NULL),
	(269, '用户269', 'DOUBLE', '', NULL, 25, NULL, NULL, NULL, NULL, NULL),
	(270, '用户270', 'DOUBLE', '', NULL, 25, NULL, '123456xqy', NULL, NULL, NULL),
	(271, '用户271', 'DOUBLE', '', NULL, 25, NULL, 'jiangchao622', NULL, NULL, NULL),
	(272, '用户272', 'DOUBLE', '', NULL, 25, NULL, NULL, NULL, NULL, NULL),
	(273, '用户273', 'FIRST', '', NULL, 26, NULL, 'qyp11262626', NULL, NULL, NULL),
	(274, '用户274', 'DOUBLE', '', NULL, 26, NULL, 'Xu123456', NULL, NULL, NULL),
	(275, '用户275', 'DOUBLE', '', NULL, 26, NULL, 'llj280808', NULL, NULL, NULL),
	(276, '用户276', 'DOUBLE', '', NULL, 26, NULL, 'swf123456', NULL, NULL, NULL),
	(277, '用户277', 'DOUBLE', '', NULL, 26, NULL, 'wjc123456', NULL, NULL, NULL),
	(278, '用户278', 'DOUBLE', '', NULL, 26, NULL, 'XSC123xsc', NULL, NULL, NULL),
	(279, '用户279', 'FIRST', '', NULL, 27, NULL, NULL, NULL, NULL, NULL),
	(280, '用户280', 'DOUBLE', '', NULL, 27, NULL, NULL, NULL, NULL, NULL),
	(281, '用户281', 'DOUBLE', '', NULL, 27, NULL, NULL, NULL, NULL, NULL),
	(282, '用户282', 'DOUBLE', '', NULL, 27, NULL, NULL, NULL, NULL, NULL),
	(283, '用户283', 'FIRST', '', NULL, 28, NULL, 'tbc123456', NULL, NULL, NULL),
	(284, '用户284', 'DOUBLE', '', NULL, 28, NULL, 'tbc123456', NULL, NULL, NULL),
	(285, '用户285', 'DOUBLE', '', NULL, 28, NULL, 'tbc123456', NULL, NULL, NULL),
	(286, '用户286', 'DOUBLE', '', NULL, 28, NULL, 'tbc123456', NULL, NULL, NULL),
	(287, '用户287', 'DOUBLE', '', NULL, 28, NULL, 'tbc123456', NULL, NULL, NULL),
	(288, '用户288', 'FIRST', '', NULL, 29, NULL, NULL, NULL, NULL, NULL),
	(289, '用户289', 'DOUBLE', '', NULL, 29, NULL, NULL, NULL, NULL, NULL),
	(290, '用户290', 'DOUBLE', '', NULL, 29, NULL, 'luwei1025', NULL, NULL, NULL),
	(291, '用户291', 'DOUBLE', '', NULL, 29, NULL, NULL, NULL, NULL, NULL),
	(292, '用户292', 'DOUBLE', '', NULL, 29, NULL, NULL, NULL, NULL, NULL),
	(293, '用户293', 'FIRST', '', NULL, 30, NULL, NULL, NULL, NULL, NULL),
	(294, '用户294', 'DOUBLE', '', NULL, 30, NULL, NULL, NULL, NULL, NULL),
	(295, '用户295', 'DOUBLE', '', NULL, 30, NULL, NULL, NULL, NULL, NULL),
	(296, '用户296', 'DOUBLE', '', NULL, 30, NULL, NULL, NULL, NULL, NULL),
	(297, '用户297', 'DOUBLE', '', NULL, 30, NULL, 'tonyli0508', NULL, NULL, NULL),
	(298, '用户298', 'DOUBLE', '', NULL, 30, NULL, NULL, NULL, NULL, NULL),
	(299, '用户299', 'DOUBLE', '', NULL, 30, NULL, 'zheng125', NULL, NULL, NULL),
	(300, '用户300', 'DOUBLE', '', NULL, 31, NULL, NULL, NULL, NULL, NULL),
	(301, '用户301', 'FIRST', '', NULL, 31, NULL, '123456abc', NULL, NULL, NULL),
	(302, '用户302', 'DOUBLE', '', NULL, 31, NULL, 'wmh19890308', NULL, NULL, NULL),
	(303, '用户303', 'DOUBLE', '', NULL, 31, NULL, 'wt467997', NULL, NULL, NULL),
	(304, '用户304', 'DOUBLE', '', NULL, 31, NULL, 'qyf11212', NULL, NULL, NULL),
	(305, '用户305', 'DEPT', '', 10, 6, 5, 'dzb123', NULL, NULL, NULL),
	(306, '用户306', 'DEPT', '', 10, 7, 5, NULL, NULL, NULL, NULL),
	(307, '用户307', 'DEPT', '', 10, 8, 6, NULL, NULL, NULL, NULL),
	(308, '用户308', 'DEPT', '', 10, 9, 18, NULL, NULL, NULL, NULL),
	(309, '用户309', 'DEPT', '', 10, 10, 15, NULL, NULL, NULL, NULL),
	(310, '用户310', 'DEPT', '', 10, 11, 17, NULL, NULL, NULL, NULL),
	(311, '用户311', 'DEPT', '', 10, 12, 3, NULL, NULL, NULL, NULL),
	(312, '用户312', 'DEPT', '', 10, 13, 16, NULL, NULL, NULL, NULL),
	(313, '用户313', 'DEPT', '', 10, 14, 5, 'zs123456', NULL, NULL, NULL),
	(315, '用户315', 'DEPT', '', 10, 16, 6, 'li6811630', NULL, NULL, NULL),
	(316, '用户316', 'DEPT', '', 10, 17, 6, 'abc123456', NULL, NULL, NULL),
	(317, '用户317', 'DEPT', '', 10, 18, 18, 'scjg86778159', NULL, NULL, NULL),
	(318, '用户318', 'DEPT', '', 10, 19, 6, 'qianxuefei216', NULL, NULL, NULL),
	(319, '用户319', 'DEPT', '', 10, 20, 17, NULL, NULL, NULL, NULL),
	(320, '用户320', 'DEPT', '', 10, 21, 1, NULL, NULL, NULL, NULL),
	(321, '用户321', 'DEPT', '', 10, 22, 1, 'blc220701', NULL, NULL, NULL),
	(322, '用户322', 'DEPT', '', 10, 23, 1, NULL, NULL, NULL, NULL),
	(323, '用户323', 'DEPT', '', 10, 24, 1, NULL, NULL, NULL, NULL),
	(324, '用户324', 'DEPT', '', 10, 25, 1, 'nongfeng1', NULL, NULL, NULL),
	(325, '用户325', 'DEPT', '', 10, 26, 1, 'Xu123456', NULL, NULL, NULL),
	(326, '用户326', 'DEPT', '', 10, 27, 1, NULL, NULL, NULL, NULL),
	(327, '用户327', 'DEPT', '', 10, 28, 1, 'tbc123456', NULL, NULL, NULL),
	(328, '用户328', 'DEPT', '', 10, 29, 1, NULL, NULL, NULL, NULL),
	(329, '用户329', 'DEPT', '', 10, 30, 1, NULL, NULL, NULL, NULL),
	(330, '用户330', 'DEPT', '', 10, 31, 1, 'dsc123', NULL, NULL, NULL),
	(331, '用户331', 'DEPT_J', '', 9, 21, NULL, NULL, NULL, NULL, NULL),
	(332, '用户332', 'DEPT_J', '', 9, 22, NULL, 'blc220701', NULL, NULL, NULL),
	(333, '用户333', 'DEPT_J', '', 9, 23, NULL, NULL, NULL, NULL, NULL),
	(334, '用户334', 'DEPT_J', '', 9, 24, NULL, NULL, NULL, NULL, NULL),
	(335, '用户335', 'DEPT_J', '', 9, 25, NULL, NULL, NULL, NULL, NULL),
	(336, '用户336', 'DEPT_J', '', 9, 26, NULL, 'xu123456', NULL, NULL, NULL),
	(337, '用户337', 'DEPT_J', '', 9, 27, NULL, NULL, NULL, NULL, NULL),
	(338, '用户338', 'DEPT_J', '', 9, 28, NULL, 'tbc123456', NULL, NULL, NULL),
	(339, '用户339', 'DEPT_J', '', 9, 29, NULL, NULL, NULL, NULL, NULL),
	(340, '用户340', 'DEPT_J', '', 9, 30, NULL, NULL, NULL, NULL, NULL),
	(341, '用户341', 'DEPT_J', '', 9, 31, NULL, NULL, NULL, NULL, NULL),
	(342, '用户342', 'DEPT', '', 10, 32, 19, 'zbq123456', NULL, NULL, NULL),
	(343, '用户343', 'DEPT', '', 10, 15, 9, '1984114516shen', NULL, NULL, NULL),
	(344, '用户344', 'DOUBLE', '', NULL, 27, NULL, NULL, NULL, NULL, NULL),
	(345, '用户345', 'DOUBLE', '', NULL, 27, NULL, NULL, NULL, NULL, NULL),
	(346, '用户346', 'DOUBLE', '', NULL, 19, NULL, 'sjh630087', '男', NULL, NULL),
	(347, '用户347', NULL, '', NULL, 15, NULL, NULL, NULL, NULL, NULL),
	(348, '用户348', NULL, NULL, NULL, 11, NULL, NULL, NULL, NULL, NULL);

UPDATE user SET password = '1' WHERE password IS NOT NULL;

SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system');
SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '');
SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1);
SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT;
SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1);
