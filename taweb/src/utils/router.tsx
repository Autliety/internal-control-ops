import React from 'react';
import {
  BarsOutlined,
  ClusterOutlined,
  FundProjectionScreenOutlined,
  HomeOutlined,
  ProjectOutlined,
  ReconciliationOutlined,
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
      path: '/assessment',
      routes: [
        {
          name: '常规考核指标',
          path: '/assessment/basic',
          element: <AssessmentList />,
        },
        {
          name: '临时考核指标',
          path: '/assessment/temporary',
          disabled: true,
        },
      ],
    },
    {
      name: '工作计划',
      icon: <BarsOutlined />,
      path: '/plan',
      routes: [
        {
          name: '年度工作计划',
          path: '/plan/annual',
          element: <PlanList />,
        },
        {
          name: '时限工作计划',
          path: '/plan/limited',
          element: <PlanList />,
        },
        {
          name: '无时限工作计划',
          path: '/plan/infinite',
          disabled: true,
        },
      ],
    },
    {
      name: '工作进度',
      icon: <FundProjectionScreenOutlined />,
      path: '/task',
      routes: [
        {
          name: '时限工作进度',
          path: '/task/basic',
          element: <TaskList />,
        },
        {
          name: '无时限工作进度',
          path: '/task/infinite',
          disabled: true,
        },
      ],
    },
    {
      name: '考评情况',
      icon: <ReconciliationOutlined />,
      path: '/appraisal',
      routes: [
        {
          name: '计划制定考评',
          path: '/appraisal/plan',
          disabled: true,
        },
        {
          name: '实际工作考评',
          path: '/appraisal/actual',
          disabled: true,
        },
      ],
    },
    {
      name: '系统设置',
      icon: <ClusterOutlined />,
      path: '/dept',
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
      path: '/wall',
      routes: [
        {
          name: '投诉建议',
          path: '/wall/complaint',
          disabled: true,
        },
        {
          name: '工作回复',
          path: '/wall/reply',
          disabled: true,
        },
      ],
    },
  ],
};

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

export const routesConfig = routerConcat([...router.routes]).concat(routerConcat(extRoutes));
