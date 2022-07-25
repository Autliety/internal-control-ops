import React from 'react';
import { Divider, Space, Statistic } from 'antd';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import MeasureTable from '../MeasureList/MeasureTable';
import MatterInfo from './MatterInfo';
import MeasureCreateModal from './MeasureCreateModal';
import ApprovalTable from '../../components/ApprovalTable';

export default function Matter() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/matter/${id}`);

  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title={'编号'} value={state.code}/>
        <Statistic title={'责任主体'} value={state.department?.name}/>
      </Space>}
      loading={loading}
  >

    <Divider orientation={'left'}>问题详情</Divider>
    <MatterInfo dataSource={state}/>

    <Divider orientation={'left'}>措施清单</Divider>
    <MeasureTable
        dataSource={state.measure || []}
    />

    <>
      <Divider orientation={'left'}>审核流程</Divider>
      <ApprovalTable value={state.approval}/>
    </>

    <FooterToolbar>
      <MeasureCreateModal
          measures={state.measures}
          matter={state}
      />
    </FooterToolbar>

  </PageContainer>;

}