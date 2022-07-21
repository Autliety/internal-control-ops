import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';
import BaseDescriptions from '../../components/BaseDescriptions';
import { baseColumns } from '../CommentList';
import { useHttp } from '../../utils/request';
import BaseDivider from '../../components/BaseDivider';
import FileUpload from '../../components/FileUpload';
import CommentCreateModal from '../CommentList/CommentCreateModal';

function Comment() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/ordinal/comment/${id}`, { initState: {} });

  return <PageContainer
      extra={[<CommentCreateModal isFirstEdit={false} id={parseInt(id)} size='middle'/>]}
      loading={loading}
  >
    <BaseDescriptions columns={baseColumns} dataSource={state}/>

    <BaseDivider title={'上传附件'}/>
    <FileUpload value={state?.attach || []}/>
  </PageContainer>;
}

export default Comment;