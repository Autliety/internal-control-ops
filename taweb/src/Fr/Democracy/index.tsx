import React from 'react';
import { Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { baseColumns } from '../DemocracyList';
import DemoFileDownload from '../../components/DemoFileDownload';

function Democracy() {
  return <PageContainer>
    <BaseDescriptions columns={baseColumns} dataSource={{}}/>

    <Divider orientation={'left'}>相关附件</Divider>
    <DemoFileDownload/>
  </PageContainer>;
}

export default Democracy;