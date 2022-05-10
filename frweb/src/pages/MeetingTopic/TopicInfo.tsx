import React from 'react';
import { statusEnum } from '../../utils/nameMap';
import BaseDescriptions from '../../components/BaseDescriptions';
import { ProColumns } from '@ant-design/pro-table';

export default function TopicInfo({ data}) {

  const columns: ProColumns[] = [
    {
      title: '议题责任主体',
      dataIndex: ['user', 'department', 'name'],
    },
    {
      title: '议题负责人',
      dataIndex: ['user', 'name'],
    },
    {
      title: '议题状态',
      dataIndex: 'status',
      valueEnum: statusEnum,
    },
    { title: '编写时间', dataIndex: 'createTime', valueType: 'dateTime' },
  ];

  return <>
    <BaseDescriptions
        columns={columns}
        dataSource={data}
    />
  </>;
}