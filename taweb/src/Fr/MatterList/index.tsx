import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Space } from 'antd';

import { useHttp } from '../../utils/request';
import MatterAssignModal from './MatterAssignModal';
import MatterReviewModal from './MatterReviewModal';
import MatterTable from './MatterTable';

export default function MatterList() {

  const {state, loading} = useHttp('/matterform?current=true');

  return <PageContainer
      extra={
        <Space size={'middle'}>
          <MatterAssignModal self={false}/>
          <MatterAssignModal self={true}/>
        </Space>
      }
  >

    <MatterTable value={(state.matters || []).concat(state.children?.flatMap(c => c.matters)) ?? []} loading={loading}/>

    <MatterReviewModal data={[]}/>

  </PageContainer>;
}