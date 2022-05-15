import React from 'react';
import { AuditOutlined, HomeOutlined, PlayCircleOutlined, ProfileOutlined, SettingOutlined } from '@ant-design/icons';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Settings from '../pages/Settings';
import MatterList from '../pages/MatterList';
import Matter from '../pages/Matter';
import MeetingList from '../pages/MeetingList';
import Meeting from '../pages/Meeting';
import MeetingTopic from '../pages/MeetingTopic';
import MeasureList from '../pages/MeasureList';
import Measure from '../pages/Measure';
import InformList from '../pages/InformList';
import Inform from '../pages/Inform/Inform';
import MeetingNotice from '../pages/Meeting/MeetingNotice';
import Department from '../pages/Department';
import StaffPerformanceList from '../pages/StaffPerformanceList';
import StaffPerformance from '../pages/StaffPerformance/StaffPerformance';

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
          name: '责任清单建立',
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
          name: '“第一议题”学规学纪',
          path: '/mz/learning',
          disabled: true,
        },
      ]
    },
    {
      name: '履责',
      icon: <ProfileOutlined/>,
      path: '/lz',
      routes: [
        {
          name: '责任清单落实',
          path: '/lz/list',
          routes: [
            {
              name: '项目清单',
              path: '/lz/list/project',
              disabled: true,
            },
            {
              name: '整改清单',
              path: '/lz/list/reform',
              disabled: true,
            },
          ]
        },
        {
          name: '监督检查',
          path: '/lz/temporary',
          disabled: true,
        },
        {
          name: '第一种形态处置',
          path: '/lz/disposal',
          disabled: true,
        },
        {
          name: '一单三书',
          path: '/lz/inform',
          element: <InformList/>,
        },
        {
          name: '纪委动议',
          path: '/lz/motion',
          disabled: true,
        },
        {
          name: '履责报告',
          path: '/lz/report',
          disabled: true,
        },
        {
          name: '重大事项请示',
          path: '/lz/important',
          disabled: true,
        },
        {
          name: '廉政风险防控',
          path: '/lz/risk',
          disabled: true,
        },
      ]
    },
    {
      name: '评责',
      icon: <AuditOutlined/>,
      path: '/pz',
      routes: [
        {
          name: '班子成员考评',
          path: '/pz/performance/staff',
          element: <StaffPerformanceList/>
        },
        {
          name: '村社考评',
          path: '/pz/performance/village',
          disabled: true,
        },
      ]
    },
    {
      name: '督责',
      icon: <PlayCircleOutlined/>,
      path: '/dz',
      routes: [
        {
          name: '督责约谈',
          path: '/dz/todo',
          disabled: true,
        },
      ]
    },
    {
      name: '追责',
      icon: <PlayCircleOutlined/>,
      path: '/zz',
      routes: [
        {
          name: '党员干部监督',
          path: 'zz/todo',
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
          disabled: true,
        },
      ],
    },
  ],
};

const extRoutes = [
  {
    path: '/meeting/:id',
    element: <Meeting/>,
  },
  {
    path: '/meeting/:id/notice',
    element: <MeetingNotice/>,
  },
  {
    path: '/meeting/:meetingId/topic/:id',
    element: <MeetingTopic/>,
  },
  {
    path: '/matter/:id',
    element: <Matter/>,
  },
  {
    path: '/measure/:id',
    element: <Measure/>,
  },
  {
    path: '/inform/:id',
    element: <Inform/>,
  },
  {
    path: '/performance/:id',
    element: <StaffPerformance/>,
  },
  {
    path: '/admin/settings',
    element: <Settings/>,
  },
  {
    path: '*',
    element: <NotFound/>,
  },
];


function routerConcat(routes: any) {
  let result = routes;
  for (let route of routes) {
    result = route.routes ? routerConcat(route.routes).concat(result) : result;
  }
  return result;
}

export const routesConfig = routerConcat([...router.routes]).concat(routerConcat(extRoutes));
