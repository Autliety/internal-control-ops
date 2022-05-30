import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useHttp } from '../../utils/request';
import ProgressTable from './ProgressTable';


export default function ProgressList({ isTrace = false }) {

  const { state } = useHttp('/progress', { initState: []})

  return <PageContainer>
    <ProgressTable isSearch data={isTrace ? [] : state} />
  </PageContainer>;
}