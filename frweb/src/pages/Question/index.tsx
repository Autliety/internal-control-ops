import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { baseColumns } from '../QuestionList';
import BaseDescriptions from '../../components/BaseDescriptions';

export default function Question() {

  return <PageContainer>
    <BaseDescriptions columns={baseColumns} dataSource={[]}/>
  </PageContainer>;
}

