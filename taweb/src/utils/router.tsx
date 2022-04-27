import React from 'react';
import {
  BarsOutlined,
  ClusterOutlined,
  FundProjectionScreenOutlined,
  HomeOutlined,
  ProjectOutlined,
  ReconciliationOutlined,
  TeamOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Settings from '../pages/Settings';
import AssessmentList from '../pages/AssessmentList';
import Assessment from '../pages/Assessment';
import PlanList from '../pages/PlanList';
import Plan from '../pages/Plan';
import TaskList from '../pages/TaskList';
import Task from '../pages/Task';
import Department from '../pages/Department';
import Users from '../pages/Department/Users';
import MatterList from '../pages/MatterList';
import Matter from "../pages/Matter";
import MeetingList from '../pages/MeetingList';
import Meeting from '../pages/Meeting';
import MeetingTopic from "../pages/MeetingTopic";
import Measure from "../pages/Measure";

export const router = {
  routes: [
    {
      name: '首页',
      icon: <HomeOutlined/>,
      path: '/',
      element: <Home/>,
    },
    {
      name: '考核指标',
      icon: <ProjectOutlined/>,
      routes: [
        {
          name: '常规考核指标',
          path: '/assessment/basic',
          element: <AssessmentList/>,
        },
        {
          name: '临时考核指标',
          path: '/temporary',
        },
      ],
    },
    {
      name: '工作计划',
      icon: <BarsOutlined/>,
      routes: [
        {
          name: '年度工作计划',
          path: '/plan/annual',
          element: <PlanList/>,
        },
        {
          name: '时限工作计划',
          path: '/plan/limited',
          element: <PlanList/>,
        },
        {
          name: '无时限工作计划',
          path: '/plan/infinite',
        },
      ],
    },
    {
      name: '工作进度',
      icon: <FundProjectionScreenOutlined/>,
      routes: [
        {
          name: '时限工作进度',
          path: '/task',
          element: <TaskList/>,
        },
        {
          name: '无时限工作进度',
          path: '/process/infinite',
        },
      ],
    },
    {
      name: '考评情况',
      icon: <ReconciliationOutlined/>,
      routes: [
        {
          name: '计划制定考评',
          path: '/appraisal/plan',
        },
        {
          name: '实际工作考评',
          path: '/appraisal/actual',
        },
      ],
    },
    {
      name: '组织管理',
      icon: <ClusterOutlined/>,
      element: <Department/>,
      routes: [
        {
          name: '组织架构',
          path: '/dept/depts',
          element: <Department/>,
        },
        {
          name: '员工档案',
          path: '/dept/users',
          element: <Users/>,
        },
      ],
    },
    {
      name: '回音壁',
      icon: <WhatsAppOutlined/>,
      routes: [
        {
          name: '投诉建议',
          path: '/wall/complaint',
        },
        {
          name: '工作回复',
          path: '/wall/reply',
        },
      ],
    },
  ],
};

export const routerV2 = {
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
      path: '/responsibility',
      element: <MatterList/>,
    },
    {
      name: '措施清单',
      icon: <BarsOutlined/>,
      path: '/measure',
      element: <Measure/>
    },
    {
      name: '履责情况',
      icon: <ReconciliationOutlined/>,
    }
  ],
};

const extRoutes = [
  {
    path: '/assessment/:id',
    element: <Assessment/>,
  },
  {
    path: '/plan/:id',
    element: <Plan/>,
  },
  {
    path: '/task/:id',
    element: <Task/>,
  },
  {
    path: '/meeting/:id',
    element: <Meeting/>,
  },
  {
    path: '/meeting/:id/topic',
    element: <MeetingTopic/>,
  },
  {
    path: '/responsibility/:id',
    element: <Matter/>,
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
export const routesConfig2 = routerConcat([...routerV2.routes]).concat(routerConcat(extRoutes));
