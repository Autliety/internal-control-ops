import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { threeColumns } from '../ThreeList';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import ThreeCreateModal from '../ThreeList/ThreeCreateModal';
import { useAuth } from '../../utils/auth';
import BaseDivider from '../../components/BaseDivider';
import ApprovalTable from '../../components/ApprovalTable';
import ApprovalFooterToolbar from '../../components/ApprovalFooterToolbar';
import FileUpload from '../../components/FileUpload';

export default function Three() {

  const { user } = useAuth();
  const { id } = useParams();
  const { state, loading } = useHttp(`/three/${id}`, { initState: {} });

  return <PageContainer
      extra={[
        ((user?.id === 1 && state.approval?.status === 'REVIEWED' && state.integer1 === 1)
            || (user?.id === 28 && state.integer1 === 2)
            || (user.id === state.requestUser?.id && state.integer1 === 3)
            || (user.id === 28 && state.integer1 === 4)) &&
        <ThreeCreateModal isFirstEdit={false} id={parseInt(id)} size='middle' />
      ]}
      loading={loading}
  >
    <BaseDivider title={'拟提交议题'} />
    <BaseDescriptions
        columns={threeColumns.filter(c => c.onStep === 0)}
        dataSource={state}
    />
    <FileUpload value={state.requestAttach}/>

    <ApprovalTable value={state.approval} />

    <BaseDivider title={'党委决策'} />
    <BaseDescriptions
        columns={threeColumns.filter(c => c.onStep === 1 || c.onStep === 2)}
        dataSource={state}
    />
    <FileUpload value={state.decisionAttach}/>

    <BaseDivider title={'决策执行'} />
    <BaseDescriptions
        columns={threeColumns.filter(c => c.onStep === 3 || c.onStep === 4)}
        dataSource={state}
    />
    <FileUpload value={state.executeAttach}/>

    <ApprovalFooterToolbar value={state.approval} />

  </PageContainer>;
}