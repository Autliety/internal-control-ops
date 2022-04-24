import React from 'react';
import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';
import valueTypeMap from '../../utils/valueTypeMap';

export default function AssessmentInfo({ data}) {
  const columns: ColumnDef[] = [
    { title: '名称', dataIndex: 'name' },
    { title: '编号', dataIndex: 'code' },
    { title: '权重分值', dataIndex: 'point', render: value => valueTypeMap(value, 'POINT') },
    { title: '考核责任单位', dataIndex: 'upperDepartment' },
    { title: '考核开始时间', dataIndex: 'startTime' },
    { title: '考核结束时间', dataIndex: 'endTime' },
  ];

  return <>
    <EditableDescriptions
        columns={columns}
        data={data}
        isEdit={false}
    />
  </>;
}