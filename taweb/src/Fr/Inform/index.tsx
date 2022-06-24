import React from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import { informType } from '../../utils/nameMapFr';
import { Space, Statistic } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import DemoFileDownload from '../../components/DemoFileDownload';
import BaseDescriptions from '../../components/BaseDescriptions';
import { informColumns } from '../InformList';
import BaseDivider from '../../components/BaseDivider';
import MatterTable from '../MatterList/MatterTable';

export default function Inform() {
  const { id } = useParams();
  const { state, loading } = useHttp(`/inform/${id}`);

  return <PageContainer
      content={
        <Space size={'large'}>
          <Statistic title={'编号'} value={state.code}/>
          <Statistic title={'类型'} value={informType[state.type]?.name}/>
        </Space>
      }
      loading={loading}
  >
    <BaseDivider title={'基本信息'} />
    <BaseDescriptions columns={informColumns} dataSource={state} />

    <BaseDivider title={'相关问题'} />
    <MatterTable value={state.matter} />

    <BaseDivider title={'相关附件'} />
    <DemoFileDownload/>

  </PageContainer>;

}