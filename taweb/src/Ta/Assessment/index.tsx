import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Divider, Space, Statistic, Tooltip } from 'antd';
import { useParams } from 'react-router-dom';
import ProCard from '@ant-design/pro-card';
import { useHttp } from '../../utils/request';
import AssessmentInfo from './AssessmentInfo';
import BaseEditableTable from '../../components/BaseEditableTable';
import PlanCreateModal from './PlanCreateModal';
import { statusEnum } from '../../utils/nameMapTa';

export default function Assessment() {

  const { id } = useParams();
  const { state } = useHttp(`/assessment/${id}`);

  return <>
    <PageContainer
        content={<Space size={'large'}>
          <Statistic title={'编号'} value={state.code || state.id}/>
          <Statistic title={'名称'} value={state.name}/>
        </Space>}
        extra={[
          <PlanCreateModal/>,
        ]}
    >
      <Divider orientation='left'>基本信息</Divider>
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
          <Tooltip title={i.station}>
            {i.station?.length > 8 ? i.station?.substring(0, 7) + '...' : i.station}
          </Tooltip>
        </ProCard>)}
      </ProCard>

      <Divider orientation='left'>指标责任部门</Divider>
      <BaseEditableTable
          columns={[
            { title: '部门', dataIndex: 'dName' },
            { title: '计划审核状态', dataIndex: 'status', valueEnum: statusEnum },
            { title: '计划措施数', dataIndex: 'detailCount' },
          ]}
          value={state.respDepartment?.map(d => ({
            dName: d.name,
            ...state.plan?.find(p => p.department.id === d.id)
          }))}
      />

    </PageContainer>
  </>;
}