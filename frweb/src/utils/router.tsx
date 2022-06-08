import React from 'react';
import {
  AuditOutlined,
  HomeOutlined,
  ProfileOutlined,
  SecurityScanOutlined,
  SettingOutlined,
  WarningOutlined,
} from '@ant-design/icons';

import Home from '../pages/Home';
import MatterList from '../pages/MatterList';
import Matter from '../pages/Matter';
import MeetingList from '../pages/MeetingList';
import Meeting from '../pages/Meeting';
import MeetingTopic from '../pages/MeetingTopic';
import MeasureList from '../pages/MeasureList';
import Measure from '../pages/Measure';
import InformList from '../pages/InformList';
import Inform from '../pages/Inform';
import MeetingNotice from '../pages/Meeting/MeetingNotice';
import Department from '../pages/Department';
import EvaluationList from '../pages/EvaluationList';
import Evaluation from '../pages/Evaluation';
import LearnList from '../pages/LearnList';
import Learn from '../pages/Learn';
import Inspect from '../pages/Inspect';
import Motion from '../pages/Motion';
import ProgressList from '../pages/ProgressList';
import DisposalList from '../pages/DisposalList';
import Report from '../pages/Report';
import ReportList from '../pages/ReportList';
import Disposal from '../pages/Disposal';
import Progress from '../pages/Progress';
import Permission from '../pages/Permission';
import InspectList from '../pages/InspectList';
import ImportantList from '../pages/ImportantList';
import Important from '../pages/Important';
import Question from '../pages/Question';
import QuestionList from '../pages/QuestionList';
import Risk from '../pages/Risk';
import ThreeList from '../pages/ThreeList';
import Three from '../pages/Three';
import Discipline from '../pages/Discipline';

export const router = {
  routes: [
    {
      name: '首页',
      icon: <HomeOutlined/>,
      path: '/',
      element: <Home/>,
    },
    {
      name: '明责',
      icon: <HomeOutlined/>,
      path: '/mz',
      routes: [
        {
          name: '“1+X”会议',
          path: '/mz/meeting',
          element: <MeetingList/>,
        },
        {
          name: '建立责任清单',
          path: '/mz/list',
          routes: [
            {
              name: '问题清单',
              path: '/mz/list/matter',
              element: <MatterList/>,
            },
            {
              name: '措施清单',
              path: '/mz/list/measure',
              element: <MeasureList/>,
            },
          ]
        },
        {
          name: '第一议题制度',
          path: '/mz/learning',
          element: <LearnList/>,
        },
      ]
    },
    {
      name: '履责',
      icon: <ProfileOutlined/>,
      path: '/lz',
      routes: [
        {
          name: '落实责任清单',
          path: '/lz/list',
          routes: [
            {
              name: '履责情况',
              path: '/lz/list/progress',
              element: <ProgressList/>,
            },
            {
              name: '动态跟踪',
              path: '/lz/list/dynamic',
              element: <ProgressList isTrace/>,
            },
          ]
        },
        {
          name: '5+1谈话机制',
          path: '/lz/talk',
          disabled: true,
        },
        {
          name: '监督检查工作',
          path: '/lz/inspect',
          element: <InspectList/>,
        },
        {
          name: '三重一大决策',
          path: '/lz/three',
          element: <ThreeList/>,
        },

        {
          name: '第一种形态运用',
          path: '/lz/disposal',
          element: <DisposalList/>,
        },
        {
          name: '相互监督提醒',
          path: '/lz/remind',
          disabled: true,
        },
        {
          name: '年度履责报告',
          path: '/lz/report',
          element: <ReportList/>,
        },
        {
          name: '述责述廉评议',
          path: '/lz/comment',
          disabled: true,
        },
        // {
        //   name: '违纪违法上报',
        //   path: '/lz/discipline',
        //   element: <DisciplineList/>,
        // },
        {
          name: '个人有关事项报告及公开',
          path: '/lz/important',
          element: <ImportantList/>,
        },
        {
          name: '民主（组织）生活会督导',
          path: '/lz/democracy',
          disabled: true,
        },
        {
          name: '领导干部插手干预重大事项记录报告',
          path: '/lz/leader',
          disabled: true,
        },
        {
          name: '政治生态分析研判',
          path: '/lz/political',
          disabled: true
        }
        // {
        //   name: '廉政风险排查防控',
        //   path: '/lz/risk',
        //   element: <RiskList/>,
        // },
        // {
        //   name: '纪委监察工作联络站',
        //   path: '/lz/contact',
        //   disabled: true,
        // },
      ]
    },
    {
      name: '评责',
      icon: <AuditOutlined/>,
      path: '/pz',
      routes: [
        {
          name: '班子成员考评',
          path: '/pz/evaluation/leader',
          element: <EvaluationList/>
        },
        {
          name: '基层站所考评',
          path: '/pz/evaluation/office',
          element: <EvaluationList/>
        },
        {
          name: '村(社)考评',
          path: '/pz/performance/village',
          element: <EvaluationList/>
        },
      ]
    },
    {
      name: '督责',
      icon: <SecurityScanOutlined/>,
      path: '/dz',
      routes: [
        {
          name: '一单三书',
          path: '/dz/inform',
          element: <InformList/>,
        },
        {
          name: '纪委动议',
          path: '/dz/motion',
          element: <Motion/>,
        },
        {
          name: '履责约谈',
          path: '/dz/question',
          element: <QuestionList/>,
        },
        {
          name: '预警追踪',
          path: '/dz/todo',
          disabled: true,
        },
      ]
    },
    {
      name: '追责',
      icon: <WarningOutlined/>,
      path: '/zz',
      routes: [
        {
          name: '预警处置',
          path: '/zz/todo',
          disabled: true,
        },
      ]
    },
    {
      name: '系统设置',
      icon: <SettingOutlined/>,
      path: '/setting',
      routes: [
        {
          name: '部门及岗位',
          path: '/setting/department',
          element: <Department/>,
        },
        {
          name: '人员组成',
          path: '/setting/user',
          element: <Department withUser/>,
        },
        {
          name: '权限管理',
          path: '/setting/permission',
          element: <Permission/>,
        },
      ],
    },

    // extRoutes
    {
      hideInMenu: true,
      name: '会议详情',
      path: '/mz/meeting/:id',
      element: <Meeting/>,
    },
    {
      hideInMenu: true,
      name: '会议通知',
      path: '/mz/meeting/:id/notice',
      element: <MeetingNotice/>,
    },
    {
      hideInMenu: true,
      name: '会前准备',
      path: '/mz/meeting/:id/topic/:tid',
      element: <MeetingTopic/>,
    },
    {
      hideInMenu: true,
      name: '问题详情',
      path: '/mz/list/matter/:id',
      element: <Matter/>,
    },
    {
      hideInMenu: true,
      name: '措施详情',
      path: '/mz/list/measure/:id',
      element: <Measure/>,
    },
    {
      hideInMenu: true,
      name: '监督检查详情',
      path: '/lz/inspect/:id',
      element: <Inspect/>,
    },
    {
      hideInMenu: true,
      name: '一单三书详情',
      path: '/dz/inform/:id',
      element: <Inform/>,
    },
    {
      hideInMenu: true,
      name: '履责报告详情',
      path: '/lz/report/:id',
      element: <Report/>,
    },
    {
      hideInMenu: true,
      name: '第一种形态告知书',
      path: '/lz/disposal/:id',
      element: <Disposal/>,
    },
    {
      hideInMenu: true,
      name: '履责情况详情',
      path: '/lz/list/progress/:id',
      element: <Progress/>,
    },
    {
      hideInMenu: true,
      name: '重大事项请示报告详情',
      path: '/lz/important/:id',
      element: <Important/>,
    },
    {
      hideInMenu: true,
      name: '绩效考评详情',
      path: '/pz/evaluation/:type/:year',
      element: <Evaluation/>,
    },
    {
      hideInMenu: true,
      name: '学习记录',
      path: '/mz/learning/:id',
      element: <Learn/>
    },
    {
      hideInMenu: true,
      name: '履责约谈记录',
      path: '/dz/question/:id',
      element: <Question/>
    },
    {
      hideInMenu: true,
      name: '廉政风险排查防控记录',
      path: '/lz/risk/:id',
      element: <Risk/>,
    },
    {
      hideInMenu: true,
      name: '三重一大集体决策',
      path: '/lz/three/:id',
      element: <Three/>,
    },
    {
      hideInMenu: true,
      name: '违纪违法上报详情',
      path: '/lz/discipline/:id',
      element: <Discipline/>,
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
