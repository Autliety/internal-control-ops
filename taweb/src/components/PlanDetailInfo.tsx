import React from 'react';
import EditableDescriptions, { ColumnDef } from './EditableDescriptions';

export default function PlanDetailInfo({ data }) {
  // 计划详细信息
  const columns: ColumnDef[] = [
    { title: '编号', dataIndex: 'id' },
    { title: '计划名称', dataIndex: 'name' },
    { title: '创建时间', dataIndex: 'createTime' },
    { title: '最后更新时间', dataIndex: 'updateTime' },
  ];

  return <>
    <EditableDescriptions
        columns={columns}
        data={data}
        isEdit={false}
    />
  </>;
}