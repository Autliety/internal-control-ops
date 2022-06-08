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
import Settings from '../pages/Settings';
import AssessmentList from '../pages/AssessmentList';
import Assessment from '../pages/Assessment';
import PlanList from '../pages/PlanList';
import Plan from '../pages/Plan';
import TaskList from '../pages/TaskList';
import Task from '../pages/Task';
import Department from '../pages/Department';
import Complaint from '../pages/Wall/Complaint';
import Permission from '../pages/Permission';

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
      path: '/assessment',
      routes: [
        {
          name: '常规考核指标',
          path: '/assessment/basic',
          element: <AssessmentList/>,
        },
        {
          name: '增减分考核指标',
          path: '/assessment/temporary',
          disabled: true,
        },
      ],
    },
    {
      name: '工作计划',
      icon: <BarsOutlined/>,
      path: '/plan',
      element: <PlanList/>,
    },
    {
      name: '工作进度',
      icon: <FundProjectionScreenOutlined/>,
      path: '/task',
      routes: [
        {
          name: '时限工作进度',
          path: '/task/basic',
          element: <TaskList/>,
        },
        {
          name: '无时限工作进度',
          path: '/task/unlimited',
          disabled: true,
        },
      ],
    },
    {
      name: '考评情况',
      icon: <ReconciliationOutlined/>,
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
      icon: <ClusterOutlined/>,
      path: '/dept',
      routes: [
        {
          name: '组织架构',
          path: '/dept/depts',
          element: <Department/>,
        },
        {
          name: '员工档案',
          path: '/dept/users',
          element: <Department withUser/>,
        },
        {
          name: '权限管理',
          path: '/dept/permission',
          element: <Permission/>,
        },
      ],
    },
    {
      name: '回音壁',
      icon: <WhatsAppOutlined/>,
      path: '/wall',
      routes: [
        {
          name: '投诉建议',
          path: '/wall/complaint',
          element: <Complaint/>,
        },
        {
          name: '工作回复',
          path: '/wall/reply',
          disabled: true,
        },
      ],
    },

    // ext routes
    {
      name: '指标详情',
      path: '/assessment/basic/:id',
      element: <Assessment/>,
      hideInMenu: true,
    },
    {
      path: '/plan/:id',
      element: <Plan/>,
      hideInMenu: true,
    },
    {
      path: '/task/:id',
      element: <Task/>,
      hideInMenu: true,
    },
    {
      path: '/admin/settings',
      element: <Settings/>,
      hideInMenu: true,
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
