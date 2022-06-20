import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Divider, Select } from 'antd';
import DemoFileDownload from '../../components/DemoFileDownload';
import BaseDivider from '../../components/BaseDivider';
import BaseDescriptions from '../../components/BaseDescriptions';
import { learningColumns, learningData } from '../LearnList';
import ApproveAndCopyModal from '../../components/ApproveAndCopyModal';

export default function Learn() {


  const columns = [
    { title: '责任主体', dataIndex: 'department', render: () => '其它班子成员' },
    { title: '责任人', dataIndex: 'user', render: () => '王哲' },
    {
      title: '学习时间',
      dataIndex: 'date',
    },
    {
      title: '学习地点',
      dataIndex: 'placement',
    },
    {
      title: '学习主题',
      dataIndex: 'topic',
    },
    {
      title: '组织形式',
      dataIndex: 'type',
      renderFormItem: () => <Select>
        <Select.Option value={'领学'}>领学</Select.Option>
        <Select.Option value={'交流'}>交流</Select.Option>
        <Select.Option value={'党课'}>党课</Select.Option>
        <Select.Option value={'其他'}>其他</Select.Option>
      </Select>
    },
    {
      title: '参加对象',
      dataIndex: 'attendee',
    },
    {
      title: '学习内容',
      dataIndex: 'content',
    },
  ];

  return <PageContainer>
    <BaseDivider title={'学习安排'} />
    <BaseDescriptions columns={learningColumns} dataSource={learningData}/>

    <BaseDivider title={'学习记录'} />
    <BaseDescriptions columns={columns} dataSource={{}}/>

    <Divider orientation={'left'}>相关附件</Divider>
    <DemoFileDownload/>

    <FooterToolbar>
      <ApproveAndCopyModal onSubmit={() => {}}/>
    </FooterToolbar>
  </PageContainer>;
}