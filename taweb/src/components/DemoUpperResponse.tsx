import React from 'react';
import { Tag } from 'antd';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from './BaseEditableTable';

export default function DemoUpperResponse() {

  const columns: ProColumns[] = [
    { title: '审核岗位', dataIndex: 'title' },
    { title: '审核人', dataIndex: 'name' },
    { title: '审核意见', dataIndex: 'response', renderText: value => <Tag color={'green'}>{value}</Tag> },
    { title: '修改意见', dataIndex: 'fix' },
    { title: '更新时间', dataIndex: 'updateTime' },
  ];

  const data = [
    { title: '分管领导', name: '叶峰', fix: '无', response: '同意' },
    { title: '责任领导', name: '王哲', fix: '将xxx修改为xxx', response: '同意' },
  ]

  return <>
    <BaseEditableTable
        columns={columns}
        value={data}
    />
  </>;
}