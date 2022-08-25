import React from 'react';
import moment from 'moment';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from './BaseEditableTable';

type Props = {
  value: any,
}

export default function ApprovalTable({ value }: Props) {

  const columns: ProColumns[] = [
    { title: '审核主体', dataIndex: ['approveUser', 'department', 'name'] },
    { title: '审核人', dataIndex: ['approveUser', 'name'] },
    //{ title: '审核情况', dataIndex: 'status', valueEnum: statusEnum },
    { title: '修改意见', dataIndex: 'content' },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      renderText: t => moment(t).format('YYYY-MM-DD HH:mm'),
    },
  ];

  return <>
    <BaseEditableTable
        columns={columns}
        value={value?.step ?? []}
    />

  </>;
}