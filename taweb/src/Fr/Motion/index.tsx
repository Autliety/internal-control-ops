import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';
import BaseDescriptions from '../../components/BaseDescriptions';
import { motionColumns } from '../MotionList';
import { useHttp } from '../../utils/request';
import BaseDivider from '../../components/BaseDivider';
import ApprovalTable from '../../components/ApprovalTable';
import ApprovalFooterToolbar from '../../components/ApprovalFooterToolbar';
import { useAuth } from '../../utils/auth';
import MotionCreateModal from '../MotionList/MotionCreateModal';
import FileUpload from '../../components/FileUpload';

export default function Motion() {

  const { user } = useAuth();
  const { id } = useParams();
  const { state, loading } = useHttp(`/motion/${id}`, { initState: {} });

  return <PageContainer
      extra={[
        ((user?.id === 1 && state.approval?.status === 'REVIEWED' && state.integer1 === 1)
            || (user?.id === state.requestUser?.id && state.integer1 === 2))
        && <MotionCreateModal isFirstEdit={false} id={parseInt(id)} size={'middle'} />
      ]}
      loading={loading}
  >
    <BaseDivider title={'动议准备'} />
    <BaseDescriptions columns={motionColumns.filter(c => c.onStep === 0)} dataSource={state} />

    <ApprovalTable value={state.approval} />

    <BaseDivider title={'研究交办'} />
    <BaseDescriptions columns={motionColumns.filter(c => c.onStep === 1)} dataSource={state} />

    <BaseDivider title={'执行落实'} />
    <BaseDescriptions columns={motionColumns.filter(c => c.onStep === 2)} dataSource={state} />

    <BaseDivider title={'相关附件'} />
    <FileUpload isInEdit={false} value={state.requestAttach} />

    <ApprovalFooterToolbar value={state.approval} />

  </PageContainer>;
}