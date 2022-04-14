import React from 'react';
import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';
import { Progress, Space } from 'antd';

export default function PlanInfo({ data }) {
  // 计划详细信息
  const columns: ColumnDef[] = [
    { title: '编号', dataIndex: 'code' },
    { title: '责任部门', dataIndex: ['department', 'name'] },
    { title: '措施数', dataIndex: 'details', render: value => value?.length },
    {
      title: '计划完整度',
      dataIndex: 'progress',
      render: () => <Space size={'large'}>
        <span>100%</span>
        <Progress type="circle" percent={100} width={36} />
      </Space>,
    },
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