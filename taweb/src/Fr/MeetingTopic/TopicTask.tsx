import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from '../../components/BaseEditableTable';

type Props = {
  isInEdit?: boolean,
  value?: any,
  onChange?: any,
  withMatter?: boolean,
};

export default function TopicTask(
    {
      isInEdit = false,
      withMatter = false,
      value = [],
      onChange = () => {
      },
    }: Props,
) {

  const columns: ProColumns[] = [
    {
      title: '责任主体',
      dataIndex: ['user', 'name'],
      editable: false,
    },
    {
      title: '职责任务概述',
      dataIndex: 'content',
    },
  ];

  return <>
    <BaseEditableTable
        disableAdd={withMatter}
        isInEdit={isInEdit}
        columns={columns}
        value={value}
        onChange={onChange}
    />
  </>;
}