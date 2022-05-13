import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from '../../components/BaseEditableTable';

type Props = {
  isEdit?: boolean,
  data?: any,
  onChange?: any,
};

export default function TopicContent({ isEdit, data, onChange }: Props) {

  const columns: ProColumns[] = [
    {
      title: '议题内容',
      dataIndex: 'content',
    },
    {
      title: '议题归属',
      dataIndex: ['user', 'name'],
    },
  ];

  return <>
    <BaseEditableTable
        isInEdit={isEdit}
        columns={columns}
        value={data}
        onChange={onChange}
    />
  </>;
}