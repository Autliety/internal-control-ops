import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';
import BaseDescriptions from '../../components/BaseDescriptions';
import { reportColumns } from '../ReportList';
import { useHttp } from '../../utils/request';
import FileUpload from '../../components/FileUpload';

export default function Report() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/ordinal/report/${id}`, { initState: {} });

  return <PageContainer loading={loading}>
    <BaseDescriptions columns={reportColumns} dataSource={state}/>
    <FileUpload value={state.attach} />
  </PageContainer>;
}

