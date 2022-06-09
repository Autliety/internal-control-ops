import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from '../../components/BaseEditableTable';

export const detailColumns: ProColumns[] = [
  { title: '措施细则', dataIndex: 'name' },
  { title: '负责人', dataIndex: ['user', 'name'] },
  { title: '措施目标', dataIndex: 'value' },
  { title: '描述', dataIndex: 'remark' },
  { title: '措施开始日期', dataIndex: 'startDate', valueType: 'date' },
  { title: '措施结束日期', dataIndex: 'endDate', valueType: 'date' },
];

export default function PlanDetailTable({ value = [] }) {
  return <>
    <BaseEditableTable columns={detailColumns} value={value}/>
  </>;
}