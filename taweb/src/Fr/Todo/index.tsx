import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Space, Statistic } from 'antd';
import BaseDescriptions from '../../components/BaseDescriptions';
import { yellowColumns, redColumns } from '../TodoList';

function Todo() {
  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title={'预警编号'} value={''} />
        <Statistic title={'预警等级'} value={''} />
      </Space>}
  >
    <BaseDescriptions columns={yellowColumns} isInEdit={false} dataSource={{}} />
  </PageContainer>;
}

export default Todo;