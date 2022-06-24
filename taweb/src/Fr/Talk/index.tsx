import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { baseColumns } from '../TalkList';
import BaseDivider from '../../components/BaseDivider';
import { ProColumns } from '@ant-design/pro-table';
import DemoFileDownload from '../../components/DemoFileDownload';

export const talkColumnsTwo: ProColumns[] = [
  { title: '谈话事由', dataIndex: 'title' },
  { title: '谈话内容', dataIndex: 'content', valueType: 'textarea', hideInTable: true },
  { title: '谈话对象表态', dataIndex: 'response', hideInTable: true, valueType: 'textarea' },
];

function Talk() {

  /*
  columns2: ProColumns[] = [
    { title: '申请谈话人', dataIndex: 'applicant' },
    { title: '互谈人', dataIndex: 'another' },
    { title: '谈话事由', dataIndex: 'reason' },
    { title: '谈话内容', dataIndex: 'content' },
  ];
   */

  return <PageContainer>
    {/* todo 根据获取数据中 谈话指向 选择columns */}
    <BaseDivider title={'基本信息'}/>
    <BaseDescriptions
        columns={baseColumns}
        dataSource={{
          id: 1,
          request: '王哲',
          point: '任凯波',
          title: '测试谈话数据',
          type: '日常谈话',
          time: '2022-01-01 00:00:00',
        }}
    />

    <BaseDivider title={'谈话内容'}/>
    <BaseDescriptions
        columns={talkColumnsTwo}
        dataSource={{
          id: 1,
          request: '王哲',
          point: '任凯波',
          title: '测试谈话数据',
          type: '日常谈话',
          time: '2022-01-01 00:00:00',
        }}
        column={1}
    />

    <BaseDivider title={'附件资料'} />
    <DemoFileDownload />

  </PageContainer>;
}

export default Talk;