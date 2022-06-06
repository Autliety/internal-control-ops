import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { questionColumns } from '../QuestionList';
import BaseDescriptions from '../../components/BaseDescriptions';

export default function Question() {
  const data = {
    id: 1,
    leader: '王哲',
    user: '李勤根',
    type: '个别约谈',
    date: '2022-04-23',
    station: '工作不到位',
  }

  return <PageContainer>
    <BaseDescriptions columns={questionColumns} dataSource={data}/>
  </PageContainer>;
}

