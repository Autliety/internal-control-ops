import React from 'react';
import { ColumnsType } from 'antd/lib/table/interface';
import { Tag } from 'antd';
import BaseTable from './BaseTable';

export default function DemoProcess({ status }) {

  const columns: ColumnsType = [
    { title: '审核岗位', dataIndex: 'title' },
    { title: '审核人', dataIndex: 'name' },
    {
      title: '审核情况', dataIndex: 'response',
      render: () => status === 'REVIEWED'
          ? <Tag color={'green'}>已通过</Tag>
          : <Tag color={'grey'}>待审</Tag>,
    },
    { title: '修改意见', dataIndex: 'fix' },
    { title: '更新时间', dataIndex: 'updateTime' },
  ];

  const data = [
    { title: '领导班子', name: '吴胜杰' },
  ];

  return <>
    <BaseTable
        columns={columns}
        dataSource={data}
    />
  </>;
}