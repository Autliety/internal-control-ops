import React from 'react';
import { Divider, Space, Statistic } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import MeasureTable from '../MeasureList/MeasureTable';
import MatterInfo from './MatterInfo';
import MeasureCreateModal from '../MeasureList/MeasureCreateModal';
import ApprovalTable from '../../components/ApprovalTable';

export default function Matter() {

  const { id } = useParams();

  const { state, loading } = useHttp(`/matter/${id}`);

  return <PageContainer
      extra={
        <Space>
          <MeasureCreateModal
              measures={state.measures}
              matterId={id}
          />
        </Space>
      }
      content={<Space size={'large'}>
        <Statistic title={'编号'} value={'WT001'} />
        <Statistic title={'问题类型'} value={'日常监督检查'} />
      </Space>}
      loading={loading}
  >

    <Divider orientation={'left'}>问题详情</Divider>
    <MatterInfo dataSource={state} />

    <Divider orientation={'left'}>措施清单</Divider>
    <MeasureTable
        dataSource={state.measures || []}
    />


    {!state.measures || state.measures.length === 0 ||
    <>
      <Divider orientation={'left'}>措施清单审核流程</Divider>
      <ApprovalTable value={state.approval} />
    </>
    }

  </PageContainer>;

}