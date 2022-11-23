import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';
import BaseDescriptions from '../../components/BaseDescriptions';
import { motionColumns } from '../MotionList';
import { useHttp } from '../../utils/request';
import BaseDivider from '../../components/BaseDivider';
import ApprovalTable from '../../components/ApprovalTable';
import ApprovalFooterToolbar from '../../components/ApprovalFooterToolbar';

export default function Motion() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/motion/${id}`, { initState: {} });
  // const { http } = useHttp(`/motion/${id}`, { isManual: true, method: 'POST' });

  return <PageContainer loading={loading}>
    <BaseDivider title={'动议准备'}/>
    <BaseDescriptions columns={motionColumns.filter(c => c.onStep === 0)} dataSource={state}/>

    <ApprovalTable value={state.approval}/>

    <BaseDivider title={'研究交办'}/>
    <BaseDescriptions columns={motionColumns.filter(c => c.onStep === 1)} dataSource={state}/>

    <BaseDivider title={'执行落实'}/>
    <BaseDescriptions columns={motionColumns.filter(c => c.onStep === 2)} dataSource={state}/>

    <ApprovalFooterToolbar value={state.approval}/>

  </PageContainer>;
}