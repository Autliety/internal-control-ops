import React from 'react';
import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';

export default function DemoDeptResponse() {

  const columns: ColumnsType = [
    { title: '部门', dataIndex: 'name' },
    { title: '指标指派', dataIndex: 'distribute' },
    { title: '部门意见', dataIndex: 'response', render: value => <Tag color={'green'}>{value}</Tag> },
    { title: '更新时间', dataIndex: 'updateTime' },
  ];

  const data = [
    {name: '招商和项目推进科', distribute: 'CZ001-01', response: '同意'},
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