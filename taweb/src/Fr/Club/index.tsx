import React from 'react';
import { Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';
import BaseDescriptions from '../../components/BaseDescriptions';
import { clubColumns } from '../ClubList';
import { useHttp } from '../../utils/request';
import BaseDivider from '../../components/BaseDivider';
import FileUpload from '../../components/FileUpload';

function Club() {

  const { id } = useParams();
  const { state } = useHttp(`/ordinal/club/${id}`);

  return <PageContainer>
    <BaseDivider title={'基本信息'}/>
    <BaseDescriptions columns={clubColumns} dataSource={state}/>

    <Divider orientation={'left'}>相关附件</Divider>
    <div className='content'>
      <FileUpload value={state?.attach}/>
    </div>
  </PageContainer>;
}

export default Club;