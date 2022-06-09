import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';
import { Divider, Space, Statistic } from 'antd';

import { useHttp } from '../../utils/request';
import PlanInfo from './PlanInfo';
import DemoUpperResponse from '../../components/DemoUpperResponse';
import PlanDetailTable from './PlanDetailTable';
import AssessmentInfo from '../Assessment/AssessmentInfo';

export default function Plan() {

  const { id } = useParams();
  const { state } = useHttp(`/plan/${id}`, { initState: {} });

  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title={'编号'} value={state.code}/>
        <Statistic title={'措施数量'} value={state.detail?.length}/>
      </Space>}
  >
    <Divider orientation={'left'}>{'基本信息'}</Divider>
    <PlanInfo data={state}/>

    <Divider orientation={'left'}>{'相关指标详情'}</Divider>
    <AssessmentInfo data={state.assessment}/>

    <Divider orientation={'left'}>{'计划措施'}</Divider>
    <PlanDetailTable value={state.detail}/>

    <Divider orientation='left'>审核意见</Divider>
    <DemoUpperResponse/>

  </PageContainer>;
}