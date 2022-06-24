import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { threeColumns } from '../ThreeList';

export default function Three() {
  return <PageContainer>
    <BaseDescriptions columns={threeColumns} dataSource={{}}/>
  </PageContainer>;
}