import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function TopicContent() {

  const columns: ProColumns[] = [
    {
      title: '序号',
      dataIndex: 'id',
    },
    {
      title: '议题内容',
      dataIndex: 'content',
    },
  ];

  // todo demo data
  const defaultData = [
    {id: 1, content: '什么'},
    {id: 2, content: '什么什么'},
    {id: 3, content: '什么什么什么'},
  ]

  return <>
    <BaseEditableTable
        columns={columns}
        value={defaultData}
    />
  </>;
}