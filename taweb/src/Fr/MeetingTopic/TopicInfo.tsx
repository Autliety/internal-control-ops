import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import { statusEnum } from '../../utils/nameMapTa';
import BaseDescriptions from '../../components/BaseDescriptions';

export default function TopicInfo({ data}) {

  const columns: ProColumns[] = [
    {
      title: '职责任务责任主体',
      dataIndex: ['user', 'department', 'name'],
    },
    {
      title: '职责任务负责人',
      dataIndex: ['user', 'name'],
    },
    {
      title: '会前准备状态',
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