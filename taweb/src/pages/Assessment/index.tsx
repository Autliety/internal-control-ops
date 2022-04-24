import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import AssessmentTable from '../AssessmentList/AssessmentTable';
import { Divider, Space, Statistic } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import AssessmentInfo from './AssessmentInfo';
import DemoDeptResponse from '../../components/DemoDeptResponse';
import DemoUpperResponse from '../../components/DemoUpperResponse';

export default function Assessment() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useHttp(`/assessment/${id}`);

  return <>
    <PageContainer
        title={<><ArrowLeftOutlined onClick={() => navigate(-1)} /> 考核指标详情</>}
        content={<Space size={'large'}>
          <Statistic title={'编号'} value={state.code || state.id} />
          <Statistic title={'名称'} value={state.name} />
        </Space>}
    >
      <Divider orientation="left">基本信息</Divider>
      <AssessmentInfo data={state} />

      <Divider orientation="left">分解细则</Divider>
      <AssessmentTable dataSource={state.children} />

      <Divider orientation="left">指标责任部门</Divider>
      <DemoDeptResponse />

      <Divider orientation="left">审核意见</Divider>
      <DemoUpperResponse />

    </PageContainer>
  </>;
}