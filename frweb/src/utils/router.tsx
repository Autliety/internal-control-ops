import React from 'react';
import { BarsOutlined, HomeOutlined, ProfileOutlined, ProjectOutlined, TeamOutlined, } from '@ant-design/icons';

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

export const router = {
  routes: [
    {
      name: '首页',
      icon: <HomeOutlined/>,
      path: '/',
      element: <Home/>,
    },
    {
      name: '“1+X” 四方会议',
      icon: <TeamOutlined/>,
      path: '/meeting',
      element: <MeetingList/>,
    },
    {
      name: '问题清单',
      icon: <ProjectOutlined/>,
      path: '/matter',
      element: <MatterList/>,
    },
    {
      name: '措施清单',
      icon: <BarsOutlined/>,
      path: '/measure',
      element: <MeasureList/>,
    },
    {
      name: '一单三书',
      icon: <ProfileOutlined/>,
      path: '/inform',
      element: <InformList/>,
    },
  ],
};

const extRoutes = [
  {
    path: '/meeting/:id',
    element: <Meeting/>,
  },
  {
    path: '/topic/:id',
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
    element: <Inform/>
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
