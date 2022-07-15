import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { talkingColumns } from '../TalkingList';
import BaseDivider from '../../components/BaseDivider';
import { useHttp } from '../../utils/request';
import { useParams } from 'react-router-dom';
import FileUpload from '../../components/FileUpload';

function Talking() {

  const { id } = useParams();
  const { state } = useHttp(`/ordinal/talking/${id}`);

  return <PageContainer>
    <BaseDivider title={'基本信息'}/>
    <BaseDescriptions
        columns={talkingColumns}
        dataSource={state}
    />

    <BaseDivider title={'相关附件'}/>
    <FileUpload value={state?.attach || []}/>

  </PageContainer>;
}

export default Talking;