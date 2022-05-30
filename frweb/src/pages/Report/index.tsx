import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { reportColumns } from '../ReportList';

export default function Report() {

  return <PageContainer>
    <BaseDescriptions columns={reportColumns} dataSource={{}} />
  </PageContainer>;
}

