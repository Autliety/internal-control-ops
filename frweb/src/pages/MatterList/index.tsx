import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Space } from 'antd';
import { useHttp } from '../../utils/request';
import MatterCreateModal from './MatterCreateModal';
import MatterTable from './MatterTable';

export default function MatterList() {

  const { state, loading } = useHttp('/matter', { initState: [] });

  return <PageContainer
      extra={
        <Space size={'middle'}>
          <MatterCreateModal />
        </Space>
      }
  >
    <MatterTable value={state} loading={loading} isSearch />

  </PageContainer>;
}