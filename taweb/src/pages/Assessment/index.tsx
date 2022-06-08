import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Divider, Space, Statistic } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import ProCard from '@ant-design/pro-card';
import { useHttp } from '../../utils/request';
import AssessmentInfo from './AssessmentInfo';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function Assessment() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useHttp(`/assessment/${id}`);

  return <>
    <PageContainer
        title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> 考核指标详情</>}
        content={<Space size={'large'}>
          <Statistic title={'编号'} value={state.code || state.id}/>
          <Statistic title={'名称'} value={state.name}/>
        </Space>}
    >
      <Divider orientation="left">基本信息</Divider>
      <AssessmentInfo data={state}/>

      <Divider orientation={'left'}>指标责任领导</Divider>
      <ProCard gutter={[16, 16]} wrap ghost>
        {state?.respUser?.map(i => <ProCard
            colSpan={{ sm: 12, md: 6 }}
            bordered
            key={i.id}
            size={'small'}
            layout={'center'}
        >
          {i.name}
          <Divider type={'vertical'}/>
          {i.department?.name}
          <Divider type={'vertical'}/>
          {i.station?.name}
        </ProCard>)}
      </ProCard>

      <Divider orientation="left">指标责任部门</Divider>
      <BaseEditableTable
          columns={[
            { title: '部门', dataIndex: 'name' },
            { title: '相关计划数', dataIndex: 'count' },
          ]}
          value={state.respDepartment}
      />

    </PageContainer>
  </>;
}