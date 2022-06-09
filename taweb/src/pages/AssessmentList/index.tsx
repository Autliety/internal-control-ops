import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';

import { useHttp } from '../../utils/request';
import AssessmentTable from './AssessmentTable';
import AssessmentImportModal from './AssessmentImportModal';


export default function AssessmentList() {

  const { state } = useHttp('/assessment', { initState: [] });

  return <PageContainer
      extra={[
        <AssessmentImportModal/>
      ]}
  >
    <AssessmentTable value={state}/>
  </PageContainer>;
}
