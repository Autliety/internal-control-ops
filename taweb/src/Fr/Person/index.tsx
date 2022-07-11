import React from 'react';
import { Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';

import BaseDescriptions from '../../components/BaseDescriptions';
import { baseColumns } from '../PersonList';
import { useHttp } from '../../utils/request';
import FileUpload from '../../components/FileUpload';

function Person() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/ordinal/personal/${id}`)

  return <PageContainer
      loading={loading}
  >

    <BaseDescriptions columns={baseColumns} dataSource={state}/>

    <Divider orientation={'left'}>个人事项报告资料</Divider>
    <FileUpload value={state.attach || []}/>

  </PageContainer>;
}

export default Person;