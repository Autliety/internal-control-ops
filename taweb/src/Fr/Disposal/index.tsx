import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';
import { Divider } from 'antd';
import BaseDescriptions from '../../components/BaseDescriptions';
import { disposalColumns } from '../DisposalList';
import { useHttp } from '../../utils/request';
import FileUpload from '../../components/FileUpload';

export default function Disposal() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/ordinal/disposal/${id}`, { initState: {} });

  return <PageContainer loading={loading}>
    <BaseDescriptions columns={disposalColumns} dataSource={state}/>

    <Divider orientation='left'>相关附件</Divider>
    <FileUpload value={state.attach || []}/>
  </PageContainer>;
}

