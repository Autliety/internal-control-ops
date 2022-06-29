import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { inspectColumns } from '../InspectList';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import BaseDivider from '../../components/BaseDivider';
import FileUpload from '../../components/FileUpload';

export default function Inspect() {

  const { id } = useParams();
  const { state } = useHttp(`/ordinal/inspect/${id}`);

  return <PageContainer>
    <BaseDivider title={'基本信息'}/>
    <BaseDescriptions columns={inspectColumns} dataSource={state}/>

    <BaseDivider title={'附件资料'}/>
    <div className='content'>
      <FileUpload value={state?.attach || []}/>
    </div>

  </PageContainer>;
}