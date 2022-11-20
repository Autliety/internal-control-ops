import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';
import BaseDescriptions from '../../components/BaseDescriptions';
import { motionColumns } from '../MotionList';
import { useHttp } from '../../utils/request';

export default function Motion() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/motion/${id}`, { initState: {} });

  return <PageContainer loading={loading}>
    <BaseDescriptions columns={motionColumns} dataSource={state}/>
  </PageContainer>;
}