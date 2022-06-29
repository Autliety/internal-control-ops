import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';
import BaseDescriptions from '../../components/BaseDescriptions';
import { remindColumns } from '../RemindList';
import { useHttp } from '../../utils/request';

function Remind() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/ordinal/remind/${id}`, { initState: {} });

  return <PageContainer loading={loading}>
    <BaseDescriptions columns={remindColumns} dataSource={state}/>
  </PageContainer>;
}
export default Remind;