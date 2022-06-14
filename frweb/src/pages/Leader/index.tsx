import React from 'react';
import { Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { baseColumns } from '../LeaderList';
import BaseDescriptions from '../../components/BaseDescriptions';
import DemoFileDownload from '../../components/DemoFileDownload';

function Leader() {

  const data = {
    id: 1,
    userType: '镇（街道）班子成员',
    user: '赵小龙',
    type: '干部选拔任用',
    record: '详情查看附件',
    report: '向上级党委报告',
    disposal: '移送当地公安机关处理',
  };

  return <PageContainer>
    <BaseDescriptions columns={baseColumns} dataSource={data}/>
    <Divider/>
    <DemoFileDownload/>
  </PageContainer>;
}

export default Leader;