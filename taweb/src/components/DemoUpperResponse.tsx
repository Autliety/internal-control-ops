import React from 'react';
import { ColumnsType } from 'antd/lib/table/interface';
import { Table, Tag } from 'antd';

export default function DemoUpperResponse() {

  const columns: ColumnsType = [
    { title: '审核岗位', dataIndex: 'title' },
    { title: '审核人', dataIndex: 'name' },
    { title: '审核意见', dataIndex: 'response', render: value => <Tag color={'green'}>{value}</Tag> },
    { title: '修改意见', dataIndex: 'fix' },
    { title: '更新时间', dataIndex: 'updateTime' },
  ];

  const data = [
    {title: '分管领导', name: '叶峰', fix: '无', response: '同意'},
    {title: '责任领导', name: '王哲', fix: '将xxx修改为xxx', response: '同意'},
  ]

  return <>
    <Table
        bordered
        scroll={{ x: 'max-content' }}
        pagination={false}

        columns={columns}
        rowKey={'id'}

        dataSource={data}
    />
  </>;
}