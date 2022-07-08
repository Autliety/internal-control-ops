import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { threeColumns } from '../ThreeList';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import ThreeCreateModal from '../ThreeList/ThreeCreateModal';

export default function Three() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/ordinal/three/${id}`, { initState: {} });

  return <PageContainer
      extra={[<ThreeCreateModal isFirstEdit={false} id={parseInt(id)} size='middle'/>]}
      loading={loading}
  >
    <BaseDescriptions
        columns={threeColumns}
        dataSource={state}
    />
  </PageContainer>;
}