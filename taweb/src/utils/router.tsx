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
import Assessment from '../pages/Assessment';
import NotFound from '../pages/NotFound';
import Settings from '../pages/Settings';
import Plan from "../pages/Plan";
import Task from "../pages/Task";
import EchoWall from "../pages/EchoWall";
import WorkReply from "../pages/EchoWall/WorkReply";
import Appraisal from "../pages/Appraisal";
import Department from "../pages/Department";
import Users from "../pages/Department/Users";
import PlanInfo from "../pages/Plan/PlanInfo";
import TaskInfo from "../pages/Task/TaskInfo";

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
      element: <Assessment/>,
      routes: [
        {
          name: '常规考核指标',
          path: '/assessment/convention',
          element: <Assessment/>,
        },
        {
          name: '临时考核指标',
          path: '/assessment/temporary',
          element: <Assessment/>
        }
      ]
    },
    {
      name: '工作计划',
      icon: <BarsOutlined/>,
      path: '/plan',
      element: <Plan/>,
      routes: [
        {
          name: '年度工作计划',
          path: '/plan/annual',
          element: <Plan/>,
        },
        {
          name: '时限工作计划',
          path: '/plan/limitTime',
          element: <Plan/>,
        },
        {
          name: '无时限工作计划',
          path: '/plan/infinite',
          element: <Plan/>,
        }
      ]
    },
    {
      name: '工作进度',
      icon: <FundProjectionScreenOutlined/>,
      path: '/process',
      element: <Task/>,
      routes: [
        {
          name: '时限工作进度',
          path: '/process/limitTime',
          element: <Task/>
        },
        {
          name: '无时限工作进度',
          path: '/process/infinite',
          element: <Task/>
        }
      ]
    },
    {
      name: '考评情况',
      icon: <ReconciliationOutlined/>,
      path: '/appraisal',
      element: <Appraisal/>,
      routes: [
        {
          name: '计划制定考评',
          path: '/appraisal/plan',
          element: <Appraisal/>,
        },
        {
          name: '实际工作考评',
          path: '/appraisal/actual',
          element: <Appraisal/>,
        }
      ]
    },
    {
      name: '组织管理',
      icon: <ClusterOutlined/>,
      path: '/dept',
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
      ]
    },
    {
      name: '回音壁',
      icon: <WhatsAppOutlined/>,
      path: '/wall',
      element: <EchoWall/>,
      routes: [
        {
          name: '投诉建议',
          path: '/wall/complaint',
          element: <EchoWall/>
        },
        {
          name: '工作回复',
          path: '/wall/reply',
          element: <WorkReply/>
        }
      ]
    },
  ],
};

const extRoutes = [
  {
    path: '/plan/:id',
    element: <PlanInfo/>,
  },
  {
    path: '/task/:id',
    element: <TaskInfo/>,
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

export const routesConfig = routerConcat(router.routes).concat(routerConcat(extRoutes));
