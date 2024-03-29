import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Divider, Space, Statistic } from 'antd';
import { useParams } from 'react-router-dom';

import PlanInfo from '../Plan/PlanInfo';
import { useHttp } from '../../utils/request';
import AssessmentTable from '../AssessmentList/AssessmentTable';
import TaskInfo from './TaskInfo';
import FileUpload from '../../components/FileUpload';
import PlanDetailTable from '../Plan/PlanDetailTable';

export default function Task() {

  const { id } = useParams();
  const { state } = useHttp(`/task/${id}`);

  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title={'计划编号'} value={state.planDetail?.plan?.code}/>
        <Statistic title={'计划名称'} value={state.planDetail?.name}/>
      </Space>}
  >

    <Divider orientation={'left'}>{'基本信息'}</Divider>
    <TaskInfo data={state} />

    <Divider orientation={'left'}>{'相关计划详情'}</Divider>
    <PlanInfo data={state.planDetail?.plan}/>
    <PlanDetailTable value={[state.planDetail]}/>

    <Divider orientation={'left'}>{'关联指标详情'}</Divider>
    <AssessmentTable value={[state.planDetail?.plan?.assessment]}/>

    <Divider orientation={'left'}>{'上传附件'}</Divider>
    <FileUpload isInEdit/>

  </PageContainer>;
}