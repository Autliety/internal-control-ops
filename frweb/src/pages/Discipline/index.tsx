import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { discipColumns } from '../DisciplineList';

export default function Discipline() {
  return <PageContainer>
    <BaseDescriptions columns={discipColumns} dataSource={{}}/>
  </PageContainer>;
}