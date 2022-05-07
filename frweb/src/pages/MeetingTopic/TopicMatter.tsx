import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function TopicMatter({ isEdit, data, onChange }) {

  const columns: ProColumns[] = [
    { title: '编号', dataIndex: 'code', editable: false },
    { title: '问题内容', dataIndex: 'content' },
    { title: '问题类型', dataIndex: 'type' },
    { title: '截止日期', dataIndex: 'endDate', valueType: 'date' },
  ];

  return <>
    <BaseEditableTable
        isInEdit={isEdit}
        value={data}
        columns={columns}
        onChange={onChange}
    />
  </>;
}