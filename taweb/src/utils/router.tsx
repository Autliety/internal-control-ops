import React from 'react';
import {
  HomeOutlined,
  ProjectOutlined,
  BarsOutlined,
  FundProjectionScreenOutlined,
  WhatsAppOutlined,
  ReconciliationOutlined,
  ClusterOutlined,
} from '@ant-design/icons';

import Home from '../pages/Home';
import AssessmentList from '../pages/AssessmentList';
import NotFound from '../pages/NotFound';
import Settings from '../pages/Settings';
import PlanList from '../pages/PlanList';
import TaskList from '../pages/TaskList';
import EchoWall from '../pages/EchoWall';
import WorkReply from '../pages/EchoWall/WorkReply';
import Appraisal from '../pages/Appraisal';
import Department from '../pages/Department';
import Users from '../pages/Department/Users';
import Plan from '../pages/Plan';
import Task from '../pages/Task';
import Assessment from '../pages/Assessment';
import Test from "../pages/Test";
import Copy from "../pages/Test/Copy";
import Motion from "../pages/Test/Motion";

export const router = {
  routes: [
    {
      name: '首页',
      icon: <HomeOutlined />,
      path: '/',
      element: <Home />,
    },
    {
      name: '考核指标',
      icon: <ProjectOutlined />,
      routes: [
        {
          name: '常规考核指标',
          path: '/assessment',
          element: <AssessmentList />,
        },
        {
          name: '临时考核指标',
          path: '/temporary',
        },
      ],
    },
    {
      name: '工作计划',
      icon: <BarsOutlined />,
      routes: [
        {
          name: '年度工作计划',
          path: '/plan',
          element: <PlanList />,
        },
        {
          name: '时限工作计划',
          path: '/plan/limitTime',
        },
        {
          name: '无时限工作计划',
          path: '/plan/infinite',
        },
      ],
    },
    {
      name: '工作进度',
      icon: <FundProjectionScreenOutlined />,
      routes: [
        {
          name: '时限工作进度',
          path: '/task',
          element: <TaskList />,
        },
        {
          name: '无时限工作进度',
          path: '/process/infinite',
        },
      ],
    },
    {
      name: '考评情况',
      icon: <ReconciliationOutlined />,
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
      icon: <ClusterOutlined />,
      element: <Department />,
      routes: [
        {
          name: '组织架构',
          path: '/dept/depts',
          element: <Department />,
        },
        {
          name: '员工档案',
          path: '/dept/users',
          element: <Users />,
        },
      ],
    },
    {
      name: '回音壁',
      icon: <WhatsAppOutlined />,
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
      path: '/v2/',
      element: <Test/>,
    },
    {
      name: '明责',
      icon: <ProjectOutlined/>,
      path: '/v2/test',
      element: <Test/>,
      routes: [
        {
          name: '问题清单',
          path: '/v2/test/a',
          element: <Test/>,
        },
        {
          name: '抄告单',
          path: '/v2/test/b',
          element: <Copy/>
        },
        {
          name: '政府动议',
          path: '/v2/test/c',
          element: <Motion/>
        }
      ]
    },
  ]
}

const extRoutes = [
  {
    path: '/assessment/:id',
    element: <Assessment />,
  },
  {
    path: '/plan/:id',
    element: <Plan />,
  },
  {
    path: '/task/:id',
    element: <Task />,
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

export const routesConfig = routerConcat([...router.routes, ...routerV2.routes]).concat(routerConcat(extRoutes));
