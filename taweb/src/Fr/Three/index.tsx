import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { threeColumns } from '../ThreeList';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';

export default function Three() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/ordinal/three/${id}`, { initState: {} });

  return <PageContainer
      loading={loading}
  >
    <BaseDescriptions
        columns={threeColumns}
        dataSource={state}
    />
  </PageContainer>;
}