import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Space } from 'antd';

import { useHttp } from '../../utils/request';
import AssessmentTable from './AssessmentTable';
import AssessmentImportModal from './AssessmentImportModal';


export default function AssessmentList() {

  const { state } = useHttp('/assessment', { initState: [] });

  return <PageContainer
      extra={<Space size={'middle'}>
        <AssessmentImportModal/>
      </Space>}
  >
    <AssessmentTable value={state}/>
  </PageContainer>;
}
