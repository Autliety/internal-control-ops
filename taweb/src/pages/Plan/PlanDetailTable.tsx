import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from '../../components/BaseEditableTable';
import UserSelectCascader from "../../components/UserSelectCascader";
import { Input } from "antd";

export const detailColumns: ProColumns[] = [
  { title: '措施细则', dataIndex: 'name', renderFormItem: () => <Input.TextArea rows={1} placeholder='措施细则'/> },
  { title: '执行人', dataIndex: 'user', renderText: o => o?.name, renderFormItem: () => <UserSelectCascader/> },
  { title: '措施目标', dataIndex: 'value' },
  { title: '描述', dataIndex: 'remark', renderFormItem: () => <Input.TextArea rows={1} placeholder='描述'/> },
  { title: '措施开始日期', dataIndex: 'startDate', valueType: 'date' },
  { title: '措施结束日期', dataIndex: 'endDate', valueType: 'date' },
];

export default function PlanDetailTable({ value = [] }) {

  return <>
    <BaseEditableTable columns={detailColumns} value={value}/>
  </>;
}