import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { inspectColumns, matterColumns } from '../InspectList';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import BaseDivider from '../../components/BaseDivider';
import FileUpload from '../../components/FileUpload';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function Inspect() {

  const { id } = useParams();
  const { state } = useHttp(`/ordinal/inspect/${id}`);

  return <PageContainer>
    <BaseDivider title={'基本信息'}/>
    <BaseDescriptions columns={inspectColumns} dataSource={state}/>

    <BaseDivider title={'相关问题'}/>
    <BaseEditableTable value={state?.matter} columns={matterColumns}/>

    <BaseDivider title={'上传附件'}/>
    <FileUpload value={state?.attach || []}/>

  </PageContainer>;
}