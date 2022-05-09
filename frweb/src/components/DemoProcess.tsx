import React from 'react';
import { Tag } from 'antd';
import BaseTable from './BaseTable';

export default function DemoProcess({ status, list }: any) {

  const columns: any = [
    { title: '审核岗位/审核部门', dataIndex: 'title' },
    { title: '审核人', dataIndex: status ? 'name': 'testName' },
    {
      title: '审核情况', dataIndex: 'response',
      render: () => status === 'REVIEWED'
          ? <Tag color={'processing'}>已审核</Tag>
          : <Tag color={'warning'}>待审</Tag>,
    },
    { title: '修改意见', dataIndex: 'fix' },
    { title: '更新时间', dataIndex: 'updateTime' },
  ];

  return <>
    <BaseTable
        columns={columns}
        dataSource={list || [{title: '党委书记', name: '赵小龙'}]}
    />
  </>;
}