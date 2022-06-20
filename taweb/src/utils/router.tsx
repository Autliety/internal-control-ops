import React from 'react';
import {
  BarsOutlined,
  ClusterOutlined,
  FundProjectionScreenOutlined,
  HomeOutlined,
  ProjectOutlined,
  ReconciliationOutlined,
  WarningOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';

import Home from '../pages/Home';
import AssessmentList from '../pages/AssessmentList';
import Assessment from '../pages/Assessment';
import PlanList from '../pages/PlanList';
import Plan from '../pages/Plan';
import TaskList from '../pages/TaskList';
import Task from '../pages/Task';
import Department from '../pages/Department';
import Complaint from '../pages/Wall/Complaint';
import Permission from '../pages/Permission';
import AssessmentAddition from '../pages/AssessmentAddition';
import Evaluate from '../pages/Evaluate';
import EvaluateDetail from '../pages/Evaluate/EvaluateDetail';

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
          path: '/assessment/external',
          element: <AssessmentAddition/>,
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
      element: <TaskList/>,
    },
    {
      name: '考评情况',
      icon: <ReconciliationOutlined/>,
      path: '/evaluate',
      element: <Evaluate/>,
    },
    {
      name: '预警事项',
      icon: <WarningOutlined/>,
      path: 'warning',
      routes: [
        {
          name: '预警提醒',
          path: '/warning/tip',
          disabled: true,
        },
        {
          name: '预警追踪',
          path: '/warning/trace',
          disabled: true,
        },
      ],
    },
    {
      name: '系统设置',
      icon: <ClusterOutlined/>,
      path: '/setting',
      routes: [
        {
          name: '组织架构',
          path: '/setting/department',
          element: <Department/>,
        },
        {
          name: '员工档案',
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
      name: '计划详情',
      path: '/plan/:id',
      element: <Plan/>,
      hideInMenu: true,
    },
    {
      name: '进度详情',
      path: '/task/:id',
      element: <Task/>,
      hideInMenu: true,
    },
    {
      name: '评分细则',
      path: '/evaluate/:id',
      element: <EvaluateDetail/>,
      hideInMenu: true,
    }
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
