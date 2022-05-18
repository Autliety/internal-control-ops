import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from '../../components/BaseEditableTable';

type Props = {
  isInEdit?: boolean,
  value?: any,
  onChange?: any,
};

export default function TopicContent(
    {
      isInEdit = false,
      value = [],
      onChange = () => {},
    }: Props,
) {

  const columns: ProColumns[] = [
    {
      title: '职责任务概述',
      dataIndex: 'content',
    },
    {
      title: '责任主体',
      dataIndex: ['user', 'name'],
      editable: false
    },
    {
      title: '添加到问题清单',
      dataIndex: 'boolean',
      valueType: 'switch'
    },
  ];

  return <>
    <BaseEditableTable
        isInEdit={isInEdit}
        columns={columns}
        value={value}
        onChange={onChange}
    />
  </>;
}