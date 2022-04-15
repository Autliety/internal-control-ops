import React from 'react';
import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';
import { Progress } from 'antd';

export default function TaskInfo({ data }) {
  const columns: ColumnDef[] = [
    { title: '责任部门', dataIndex: ['plan', 'department', 'name'] },
    { title: '状态', dataIndex: 'status', render: () => '已审核' },
    {
      title: '总体进度', dataIndex: 'progress',
      render: () => <Progress percent={40} />,
    },
    { title: '当前加权分', dataIndex: 'currentPoint', render: () => 0.02 },
    { title: '创建时间', dataIndex: 'createTime' },
    { title: '更新时间', dataIndex: 'updateTime' },
  ];

  return <>
    <EditableDescriptions
        columns={columns}
        data={data}
        isEdit={false}
    />
  </>;
}