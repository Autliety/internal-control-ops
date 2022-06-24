import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { riskColumns, riskData } from '../RiskList';

export default function Risk() {
  return <PageContainer>
    <BaseDescriptions columns={riskColumns} dataSource={riskData[0]}/>
  </PageContainer>;
}