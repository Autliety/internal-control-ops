import React from 'react';
import { useHttp } from '../../utils/request';
import BaseDivider from '../../components/BaseDivider';
import MatterTable from '../MatterList/MatterTable';
import { PageContainer } from '@ant-design/pro-layout';
import ThreeTable from '../ThreeList/ThreeTable';

export default function AlertList() {

  const { state, loading } = useHttp('/alert');

  return <PageContainer loading={loading}>
    <BaseDivider title={'问题清单预警'}/>
    <MatterTable value={state['matter'] || []}/>
    <BaseDivider title={'三重一大预警'}/>
    <ThreeTable value={state['three'] || []}/>
  </PageContainer>;
}