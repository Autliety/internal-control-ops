import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { baseColumns } from '../RemindList';

function Remind() {
  return <PageContainer>
    <BaseDescriptions columns={baseColumns} dataSource={{}}/>
  </PageContainer>;
}

export default Remind;