import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Divider, Space, Statistic } from 'antd';
import { useParams } from 'react-router-dom';

import PlanInfo from '../Plan/PlanInfo';
import { useHttp } from '../../utils/request';
import AssessmentTable from '../AssessmentList/AssessmentTable';
import TaskInfo from './TaskInfo';
import TaskProgress from './TaskProgress';

export default function Task() {

  const { id } = useParams();
  const { state } = useHttp(`/task/${id}`);

  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title={'计划编号'} value={state.plan?.code} />
      </Space>}
  >

    <Divider orientation={'left'}>{'基本信息'}</Divider>
    <TaskInfo data={state} />

    <Divider orientation={'left'}>{'相关计划详情'}</Divider>
    <PlanInfo data={state.plan} />

    <Divider orientation={'left'}>{'关联指标详情'}</Divider>
    <AssessmentTable value={[state.plan?.assessment]} />

    <Divider orientation={'left'}>{'措施及进度'}</Divider>
    <TaskProgress dataSource={state.detail} />

  </PageContainer>;
}