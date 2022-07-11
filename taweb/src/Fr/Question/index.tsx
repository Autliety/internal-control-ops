import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { questionColumns } from '../QuestionList';
import BaseDescriptions from '../../components/BaseDescriptions';
import { useHttp } from '../../utils/request';
import { useParams } from 'react-router-dom';
import BaseDivider from '../../components/BaseDivider';
import FileUpload from '../../components/FileUpload';

export default function Question() {

  const { id } = useParams();
  const { state } = useHttp(`/ordinal/question/${id}`);

  return <PageContainer>
    <BaseDivider title={'基本信息'}/>
    <BaseDescriptions columns={questionColumns} dataSource={state}/>

    <BaseDivider title={'相关附件'}/>
    <FileUpload value={state?.attach}/>
  </PageContainer>;
}

