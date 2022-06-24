import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { remindColumns, remindData } from '../RemindList';

function Remind() {
  return <PageContainer>
    <BaseDescriptions columns={remindColumns} dataSource={remindData}/>
  </PageContainer>;
}

export default Remind;