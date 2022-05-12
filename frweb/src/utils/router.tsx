import React from 'react';
import {
  AuditOutlined,
  HomeOutlined,
  PlayCircleOutlined,
  ProfileOutlined,
  ProjectOutlined,
  SettingOutlined,
  TeamOutlined,
} from '@ant-design/icons';

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
      name: '“1+X”会议',
      icon: <TeamOutlined/>,
      path: '/meeting',
      element: <MeetingList/>,
    },
    {
      name: '责任清单',
      icon: <ProjectOutlined/>,
      path: '/list',
      routes: [
        {
          name: '问题清单',
          path: '/list/matter',
          element: <MatterList/>,
        },
        {
          name: '措施清单',
          path: '/list/measure',
          element: <MeasureList/>,
        },
        {
          name: '项目清单',
          path: '/list/project',
          disabled: true,
        },
        {
          name: '整改清单',
          path: '/list/reform',
          disabled: true,
        },
      ]
    },
    {
      name: '特办事项',
      icon: <ProfileOutlined/>,
      path: '/special',
      routes: [
        {
          name: '一单三书',
          path: '/special/inform',
          element: <InformList/>,
        },
        {
          name: '临时交办',
          path: '/special/temp',
          disabled: true,
        },
        {
          name: '学习记录',
          path: '/work',
          disabled: true,
        },
        {
          name: '违法违纪上报',
          path: '/work',
          disabled: true,
        },
      ]
    },
    {
      name: '履责跟踪',
      icon: <PlayCircleOutlined/>,
      path: '/work',
      disabled: true,
      routes: [
        {
          name: '常规事项履责',
          path: '/work',
          disabled: true,
        },
        {
          name: '重大事项动态跟踪',
          path: '/work',
          disabled: true,
        },
      ]
    },
    {
      name: '绩效考评',
      icon: <AuditOutlined/>,
      path: '/performance',
      routes: [
        {
          name: '班子成员考评',
          path: '/performance/staff',
          element: <StaffPerformanceList/>
        },
        {
          name: '村社考评',
          path: '/performance/village',
          disabled: true,
        },
      ]
    },
    {
      name: '追责处理',
      icon: <PlayCircleOutlined/>,
      path: '/responsibility',
      disabled: true,
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
