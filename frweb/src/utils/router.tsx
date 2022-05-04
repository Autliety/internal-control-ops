import React from 'react';
import { BarsOutlined, HomeOutlined, ProjectOutlined, ReconciliationOutlined, TeamOutlined } from '@ant-design/icons';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Settings from '../pages/Settings';
import MatterList from '../pages/MatterList';
import Matter from '../pages/Matter';
import MeetingList from '../pages/MeetingList';
import Meeting from '../pages/Meeting';
import MeetingTopic from '../pages/MeetingTopic';
import MeasureList from '../pages/MeasureList';
import Copy from '../pages/MatterList/Copy';
import Measure from '../pages/Measure';

export const router = {
  routes: [
    {
      name: '首页',
      icon: <HomeOutlined />,
      path: '/',
      element: <Home />,
    },
    {
      name: '“1+X” 四方会议',
      icon: <TeamOutlined />,
      path: '/meeting',
      element: <MeetingList />,
    },
    {
      name: '问题清单',
      icon: <ProjectOutlined />,
      path: '/matter',
      element: <MatterList />,
    },
    {
      name: '措施清单',
      icon: <BarsOutlined />,
      path: '/measure',
      element: <MeasureList />,
    },
    {
      name: '履责情况',
      icon: <ReconciliationOutlined />,
      path: '/copy',
      element: <Copy />,
    },
  ],
};

const extRoutes = [
  {
    path: '/meeting/:id',
    element: <Meeting />,
  },
  {
    path: '/meeting/:id/topic',
    element: <MeetingTopic />,
  },
  {
    path: '/matter/:id',
    element: <Matter />,
  },
  {
    path: '/measure/:id',
    element: <Measure />,
  },
  {
    path: '/admin/settings',
    element: <Settings />,
  },
  {
    path: '*',
    element: <NotFound />,
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
