import React from 'react';
import {
  AuditOutlined,
  BulbOutlined,
  HomeOutlined,
  ProfileOutlined,
  SecurityScanOutlined,
  SettingOutlined,
  WarningOutlined,
} from '@ant-design/icons';

import Home from './Home';
import Matter from './Matter';
import MeetingList from './MeetingList';
import Meeting from './Meeting';
import MeetingTopic from './MeetingTopic';
import InformList from './InformList';
import Inform from './Inform';
import MeetingNotice from './Meeting/MeetingNotice';
import EvaluationList from './EvaluationList';
import Evaluation from './Evaluation';
import LearnList from './LearnList';
import Learn from './Learn';
import Inspect from './Inspect';
import Motion from './Motion';
import DisposalList from './DisposalList';
import Report from './Report';
import ReportList from './ReportList';
import Disposal from './Disposal';
import Progress from './Progress';
import Permission from './Permission';
import InspectList from './InspectList';
import Question from './Question';
import QuestionList from './QuestionList';
import Risk from './Risk';
import ThreeList from './ThreeList';
import Three from './Three';
import Discipline from './Discipline';
import LeaderList from './LeaderList';
import Leader from './Leader';
import PersonList from './PersonList';
import Person from './Person';
import CommentList from './CommentList';
import Comment from './Comment';
import RemindList from './RemindList';
import Remind from './Remind';
import ClubList from './ClubList';
import Club from './Club';
import TalkingList from './TalkingList';
import Talking from './Talking';
import Department from '../pages/Department';
import Settings from '../pages/Settings';
import MotionList from './MotionList';
import WarningList from './WarningList';
import WarningYellow from './Warning/WarningYellow';
import Score from './Evaluation/Score';
import WarningRed from './Warning/WarningRed';
import AlertList from './AlertList';
import Establish from './EstablishList';

export const router = {
  routes: [
    {
      name: '首页',
      icon: <HomeOutlined />,
      path: '/fr/',
      element: <Home />,
    },
    {
      name: '明责',
      icon: <BulbOutlined />,
      path: '/fr/mz',
      routes: [
        {
          name: '“1+X”会议',
          path: '/fr/mz/meeting',
          element: <MeetingList />,
        },
        {
          name: '建立责任清单',
          path: '/fr/mz/list',
          element: <Establish />,
        },
        {
          name: '第一议题制度',
          path: '/fr/mz/learning',
          element: <LearnList />,
        },
      ],
    },
    {
      name: '履责',
      icon: <ProfileOutlined />,
      path: '/fr/lz',
      routes: [
        {
          name: '落实责任清单',
          path: '/fr/lz/list',
          element: <Establish isProgress />
        },
        {
          name: '5+1谈话机制',
          path: '/fr/lz/talking',
          element: <TalkingList />,
        },
        {
          name: '监督检查工作',
          path: '/fr/lz/inspect',
          element: <InspectList />,
        },
        {
          name: '三重一大决策',
          path: '/fr/lz/three',
          element: <ThreeList />,
        },

        {
          name: '第一种形态运用',
          path: '/fr/lz/disposal',
          element: <DisposalList />,
        },
        {
          name: '相互监督提醒',
          path: '/fr/lz/remind',
          element: <RemindList />,
        },
        {
          name: '履责情况报告',
          path: '/fr/lz/report',
          element: <ReportList />,
        },
        {
          name: '述责述廉评议',
          path: '/fr/lz/comment',
          element: <CommentList />,
        },
        // {
        //   name: '违纪违法上报',
        //   path: '/fr/lz/discipline',
        //   element: <DisciplineList/>,
        // },
        {
          name: '个人有关事项报告及公开',
          path: '/fr/lz/person',
          element: <PersonList />,
        },
        {
          name: '民主（组织）生活会督导',
          path: '/fr/lz/club',
          element: <ClubList />,
        },
        {
          name: '领导干部插手干预重大事项记录报告',
          path: '/fr/lz/leader',
          element: <LeaderList />,
        },
        {
          name: '政治生态分析研判',
          path: '/fr/lz/political',
          disabled: true,
        },
      ],
    },
    {
      name: '评责',
      icon: <AuditOutlined />,
      path: '/fr/pz',
      routes: [
        {
          name: '班子成员考评',
          path: '/fr/pz/evaluation/1',
          element: <EvaluationList page={1} />,
        },
        {
          name: '基层站所考评',
          path: '/fr/pz/evaluation/2',
          element: <EvaluationList page={2} />,
        },
        {
          name: '村(社)考评',
          path: '/fr/pz/performance/3',
          element: <EvaluationList page={3} />,
        },
      ],
    },
    {
      name: '督责',
      icon: <SecurityScanOutlined />,
      path: '/fr/dz',
      routes: [
        {
          name: '一单三书',
          path: '/fr/dz/inform',
          element: <InformList />,
        },
        {
          name: '纪委动议',
          path: '/fr/dz/motion',
          element: <MotionList />,
        },
        {
          name: '履责约谈',
          path: '/fr/dz/question',
          element: <QuestionList />,
        },
        {
          name: '履责追踪',
          path: '/fr/dz/alert',
          element: <AlertList />,
        },
      ],
    },
    {
      name: '追责',
      icon: <WarningOutlined />,
      path: '/fr/zz',
      routes: [
        {
          name: '预警处置',
          path: '/fr/zz/warning',
          element: <WarningList />
        },
      ],
    },
    {
      name: '系统设置',
      icon: <SettingOutlined />,
      path: '/fr/setting',
      routes: [
        {
          name: '部门及岗位',
          path: '/fr/setting/department',
          element: <Department systemType='Fr' isUser={false} />,
        },
        {
          name: '人员组成',
          path: '/fr/setting/user',
          element: <Department systemType='Fr' />,
        },
        {
          name: '权限管理',
          path: '/fr/setting/permission',
          element: <Permission />,
        },
      ],
    },

    // extRoutes
    {
      hideInMenu: true,
      name: '会议详情',
      path: '/fr/mz/meeting/:id',
      element: <Meeting />,
    },
    {
      hideInMenu: true,
      name: '会议通知',
      path: '/fr/mz/meeting/:id/notice',
      element: <MeetingNotice />,
    },
    {
      hideInMenu: true,
      name: '会前准备',
      path: '/fr/mz/meeting/:id/topic/:tid',
      element: <MeetingTopic />,
    },
    {
      name: '责任清单',
      path: '/fr/mz/list/:id',
      element: <Establish />,
      hideInMenu: true,
    },
    {
      name: '落实责任清单',
      path: '/fr/lz/list/:id',
      element: <Establish isProgress />,
      hideInMenu: true,
    },
    {
      hideInMenu: true,
      name: '责任清单详情',
      path: '/fr/mz/list/matter/:id',
      element: <Matter />,
    },
    {
      hideInMenu: true,
      name: '责任清单落实详情',
      path: '/fr/lz/list/matter/:id',
      element: <Matter />,
    },
    {
      hideInMenu: true,
      name: '第一议题制度',
      path: '/fr/mz/learning/:id',
      element: <Learn />,
    },
    {
      hideInMenu: true,
      name: '监督检查详情',
      path: '/fr/lz/inspect/:id',
      element: <Inspect />,
    },
    {
      hideInMenu: true,
      name: '一单三书详情',
      path: '/fr/dz/inform/:id',
      element: <Inform />,
    },
    {
      hideInMenu: true,
      name: '履责报告详情',
      path: '/fr/lz/report/:id',
      element: <Report />,
    },
    {
      hideInMenu: true,
      name: '第一种形态运用',
      path: '/fr/lz/disposal/:id',
      element: <Disposal />,
    },
    {
      hideInMenu: true,
      name: '履责情况详情',
      path: '/fr/lz/list/progress/:id',
      element: <Progress />,
    },
    {
      hideInMenu: true,
      name: '绩效考评详情',
      path: '/fr/pz/evaluation/:type/:year',
      element: <Evaluation />,
    },
    {
      hideInMenu: true,
      name: '学习记录',
      path: '/fr/mz/learn/:id',
      element: <Learn />,
    },
    {
      hideInMenu: true,
      name: '履责约谈记录',
      path: '/fr/dz/question/:id',
      element: <Question />,
    },
    {
      hideInMenu: true,
      name: '廉政风险排查防控记录',
      path: '/fr/lz/risk/:id',
      element: <Risk />,
    },
    {
      hideInMenu: true,
      name: '三重一大集体决策',
      path: '/fr/lz/three/:id',
      element: <Three />,
    },
    {
      hideInMenu: true,
      name: '违纪违法上报详情',
      path: '/fr/lz/discipline/:id',
      element: <Discipline />,
    },
    {
      hideInMenu: true,
      name: '领导干部插手干预重大事项记录报告详情',
      path: '/fr/lz/leader/:id',
      element: <Leader />,
    },
    {
      hideInMenu: true,
      name: '个人有关事项报告及公开详情',
      path: '/fr/lz/person/:id',
      element: <Person />,
    },
    {
      hideInMenu: true,
      name: '述责述廉评议详情',
      path: '/fr/lz/comment/:id',
      element: <Comment />,
    },
    {
      hideInMenu: true,
      name: '相互监督提醒详情',
      path: '/fr/lz/remind/:id',
      element: <Remind />,
    },
    {
      hideInMenu: true,
      name: '民主（组织）生活会督导详情',
      path: '/fr/lz/club/:id',
      element: <Club />,
    },
    {
      hideInMenu: true,
      name: '5+1 谈话内容详情',
      path: '/fr/lz/talking/:id',
      element: <Talking />,
    },
    {
      hideInMenu: true,
      name: '纪委动议详情',
      path: '/fr/dz/motion/:id',
      element: <Motion />,
    },
    {
      hideInMenu: true,
      name: '预警详情',
      path: '/fr/zz/warning/yellow/:id',
      element: <WarningYellow />
    },
    {
      hideInMenu: true,
      name: '预警详情',
      path: '/fr/zz/warning/red/:id',
      element: <WarningRed />
    },
    {
      hideInMenu: true,
      name: '得分情况',
      path: '/fr/pz/score/1',
      element: <Score page={1} />
    },
    {
      hideInMenu: true,
      name: '得分情况',
      path: '/fr/pz/score/2',
      element: <Score page={2} />
    },
    {
      hideInMenu: true,
      name: '得分情况',
      path: '/fr/pz/score/3',
      element: <Score page={3} />
    },
    {
      hideInMenu: true,
      name: '个人中心',
      path: '/fr/center',
      element: <Settings />,
    },
  ],
};


function routerConcat(routes: any) {
  let result = routes;
  for (let route of routes) {
    result = route.routes ? routerConcat(route.routes).concat(result) : result;
  }
  return result;
}

export const routesConfig = routerConcat([...router.routes]);
// export const routesConfig2 = routerConcat([...routerV2.routes]);
