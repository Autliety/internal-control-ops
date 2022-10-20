import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { threeColumns } from '../ThreeList';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import ThreeCreateModal from '../ThreeList/ThreeCreateModal';
import { useAuth } from '../../utils/auth';
import BaseDivider from '../../components/BaseDivider';
import FileUpload from '../../components/FileUpload';
import ApprovalTable from '../../components/ApprovalTable';

export default function Three() {

  const { user } = useAuth();
  const { id } = useParams();
  const { state, loading } = useHttp(`/ordinal/three/${id}`, { initState: {} });

  return <PageContainer
      extra={[
        ((user?.id === 1 && state.integer1 === 1) || (user?.id === 28 && state.integer1 === 2)) &&
        <ThreeCreateModal isFirstEdit={false} id={parseInt(id)} size='middle' />
      ]}
      loading={loading}
  >
    <BaseDivider title={'基本信息'} />
    <BaseDescriptions
        columns={threeColumns.slice(1, 5)}
        dataSource={state}
    />

    <BaseDivider title={'审批流程'} />
    {/* todo 审批数据 */}
    <ApprovalTable value={[]} />

    <BaseDivider title={'决策信息'} />
    <BaseDescriptions columns={threeColumns.slice(6)} dataSource={state} />

    <BaseDivider title={'相关附件'} />
    <FileUpload value={state?.attach || []} />
  </PageContainer>;
}