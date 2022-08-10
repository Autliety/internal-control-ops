import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import MatterTable from './MatterTable';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import ApprovalTable from '../../components/ApprovalTable';
import BaseDivider from '../../components/BaseDivider';
import ApprovalFooterToolbar from '../../components/ApprovalFooterToolbar';

export default function MatterListApproval() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/approval/${id}`);

  return <PageContainer>
    <BaseDivider title={'待审核问题清单'}/>
    <MatterTable value={state.matter || []} loading={loading} />
    <BaseDivider title={'审批流程'}/>
    <ApprovalTable value={state}/>
    <ApprovalFooterToolbar value={state}/>
  </PageContainer>;
}