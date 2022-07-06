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

import Home from './Home';
import AssessmentList from './AssessmentList';
import Assessment from './Assessment';
import PlanList from './PlanList';
import Plan from './Plan';
import TaskList from './TaskList';
import Task from './Task';
import Department from '../pages/Department';
import AssessmentAddition from './AssessmentAddition';
import Evaluate from './Evaluate';
import EvaluateDetail from './Evaluate/EvaluateDetail';
import Permission from './Permission';
import Settings from '../pages/Settings';
import Advice from '../Ta/Wall/index';

export const router = {
  routes: [
    {
      name: '首页',
      icon: <HomeOutlined/>,
      path: '/ta/',
      element: <Home/>,
    },
    {
      name: '考核指标',
      icon: <ProjectOutlined/>,
      path: '/ta/assessment',
      routes: [
        {
          name: '常规考核指标',
          path: '/ta/assessment/basic',
          element: <AssessmentList/>,
        },
        {
          name: '增减分考核指标',
          path: '/ta/assessment/external',
          element: <AssessmentAddition/>,
        },
      ],
    },
    {
      name: '工作计划',
      icon: <BarsOutlined/>,
      path: '/ta/plan',
      element: <PlanList/>,
    },
    {
      name: '工作进度',
      icon: <FundProjectionScreenOutlined/>,
      path: '/ta/task',
      element: <TaskList/>,
    },
    {
      name: '考评情况',
      icon: <ReconciliationOutlined/>,
      path: '/ta/evaluate',
      element: <Evaluate/>,
    },
    {
      name: '预警事项',
      icon: <WarningOutlined/>,
      path: '/ta/warning',
      routes: [
        {
          name: '预警提醒',
          path: '/ta/warning/tip',
          disabled: true,
        },
        {
          name: '预警追踪',
          path: '/ta/warning/trace',
          disabled: true,
        },
      ],
    },
    {
      name: '回音壁',
      icon: <WhatsAppOutlined/>,
      path: '/ta/wall',
      routes: [
        {
          name: '投诉建议',
          path: '/ta/wall/complaint',
          element: <Advice/>,
        },
        {
          name: '工作回复',
          path: '/ta/wall/reply',
          disabled: true,
        },
      ],
    },
    {
      name: '系统设置',
      icon: <ClusterOutlined/>,
      path: '/ta/setting',
      routes: [
        {
          name: '组织架构',
          path: '/ta/setting/department',
          element: <Department systemType='Ta'/>,
        },
        {
          name: '员工档案',
          path: '/ta/setting/user',
          element: <Department withUser systemType='Ta'/>,
        },
        {
          name: '权限管理',
          path: '/ta/setting/permission',
          element: <Permission/>,
        },
      ],
    },


    // ext routes
    {
      name: '指标详情',
      path: '/ta/assessment/basic/:id',
      element: <Assessment/>,
      hideInMenu: true,
    },
    {
      name: '计划详情',
      path: '/ta/plan/:id',
      element: <Plan/>,
      hideInMenu: true,
    },
    {
      name: '进度详情',
      path: '/ta/task/:id',
      element: <Task/>,
      hideInMenu: true,
    },
    {
      name: '评分细则',
      path: '/ta/evaluate/:id',
      element: <EvaluateDetail/>,
      hideInMenu: true,
    },
    {
      hideInMenu: true,
      name: '个人中心',
      path: '/ta/center',
      element: <Settings/>,
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
