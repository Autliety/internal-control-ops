import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';

import { useHttp } from '../../utils/request';
import AssessmentTable from './AssessmentTable';
import AssessmentImportModal from './AssessmentImportModal';


export default function AssessmentList() {

  const { state, loading } = useHttp('/assessment', { initState: [] });

  return <PageContainer
      loading={loading}
      extra={[
        <AssessmentImportModal/>
      ]}
  >
    <AssessmentTable value={state}/>
  </PageContainer>;
}
