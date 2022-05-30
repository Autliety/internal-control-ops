import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { inspectColumns } from '../InspectList';

export default function Inspect() {

  return <PageContainer>
    <BaseDescriptions columns={inspectColumns} dataSource={{}}/>
  </PageContainer>;
}