import React from 'react';
import { Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';

import BaseDescriptions from '../../components/BaseDescriptions';
import { baseColumns } from '../PersonList';
import DemoFileDownload from '../../components/DemoFileDownload';
import { useHttp } from '../../utils/request';

function Person() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/ordinal/personal/${id}`)

  return <PageContainer
      loading={loading}
  >

    <BaseDescriptions columns={baseColumns} dataSource={state}/>

    <Divider orientation={'left'}>个人事项报告资料</Divider>
    <DemoFileDownload/>

  </PageContainer>;
}

export default Person;