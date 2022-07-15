import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';
import { leaderColumns } from '../LeaderList';
import BaseDescriptions from '../../components/BaseDescriptions';
import { useHttp } from '../../utils/request';
import BaseDivider from '../../components/BaseDivider';
import FileUpload from '../../components/FileUpload';
import LeaderCreateModal from '../LeaderList/LeaderCreateModal';

function Leader() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/ordinal/leader/${id}`);

  return <PageContainer
      extra={[<LeaderCreateModal isFirstEdit={false} id={parseInt(id)} size='middle'/>]}
      loading={loading}
  >
    <BaseDivider title={'基本信息'}/>
    <BaseDescriptions columns={leaderColumns} dataSource={state}/>

    <BaseDivider title={'相关附件'}/>
    <FileUpload value={state?.attach}/>
  </PageContainer>;
}

export default Leader;