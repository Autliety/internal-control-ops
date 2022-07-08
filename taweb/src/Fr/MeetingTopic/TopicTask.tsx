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
      title: '序号',
      dataIndex: 'id',
      renderText: (_, r, index) => index + 1,
      fixed: 'left',
      width: 50,
    },
    {
      title: '职责任务概述',
      dataIndex: 'content',
    },
    {
      title: '责任主体',
      dataIndex: ['user', 'name'],
      editable: false,
      fixed: 'right',
      width: 80,
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