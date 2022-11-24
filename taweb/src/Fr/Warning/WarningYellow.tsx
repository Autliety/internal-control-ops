import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Divider, Space, Statistic } from 'antd';
import { useParams } from 'react-router-dom';
import BaseDescriptions from '../../components/BaseDescriptions';
import { yellowColumns } from '../WarningList';
import { useHttp } from '../../utils/request';
import MatterTable from '../MatterList/MatterTable';

function WarningYellow() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/warning/yellow/${id}`, { initState: {} });
  const { state: yellowMatter } = useHttp(`/warning/yellow/matter/${id}`, { initState: {} });

  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title={'预警对象'} value={state?.yjdx ?? '暂无'}/>
        <Statistic title={'预警等级'} value={state?.yjdj ?? '暂无'}/>
      </Space>}
      loading={loading}
  >
    <BaseDescriptions columns={yellowColumns} isInEdit={false} dataSource={state}/>

    <Divider orientation={'left'}>【相关问题】</Divider>
    <MatterTable value={[yellowMatter.matter]}/>
  </PageContainer>;
}

export default WarningYellow;