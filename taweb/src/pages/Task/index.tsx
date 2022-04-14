import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Divider, Space, Statistic } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';

import PlanInfo from '../Plan/PlanInfo';
import { useHttp } from '../../utils/request';
import AssessmentTable from '../AssessmentList/AssessmentTable';
import TaskInfo from './TaskInfo';
import TaskProgress from './TaskProgress';
import DemoUpperResponse from '../../components/DemoUpperResponse';

export default function Task() {

  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useHttp(`/task/${id}`);

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)} /> 工作进度详情</>}
      content={<Space size={'large'}>
        <Statistic title={'计划编号'} value={state.plan?.code} />
        <Statistic title={'总体进度'} value={'40%'} />
      </Space>}
  >

    <Divider orientation={'left'}>{'基本信息'}</Divider>
    <TaskInfo data={state} />

    <Divider orientation={'left'}>{'相关计划详情'}</Divider>
    <PlanInfo data={state.plan} />

    <Divider orientation={'left'}>{'关联指标详情'}</Divider>
    <AssessmentTable dataSource={state.plan?.assessment} />

    <Divider orientation={'left'}>{'措施及进度'}</Divider>
    <TaskProgress dataSource={state.details} />

    <Divider orientation="left">审核意见</Divider>
    <DemoUpperResponse />

  </PageContainer>;
}