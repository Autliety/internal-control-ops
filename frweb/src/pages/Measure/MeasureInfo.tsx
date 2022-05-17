import React from 'react';
import BaseDescriptions from '../../components/BaseDescriptions';
import { Space, Switch } from 'antd';
import { statusEnum } from '../../utils/nameMap';
import { ProColumns } from '@ant-design/pro-table';

export const measureColumns: ProColumns[] = [
  { title: '编号', dataIndex: 'code' },
  {
    title: '审核状态',
    dataIndex: 'status',
    valueEnum: statusEnum,
  },
  { title: '工作措施', dataIndex: 'content' },
  { title: '责任主体', dataIndex: ['matter', 'department', 'name'] },
  { title: '责任人', dataIndex: ['user', 'name'] },
  { title: '开始时间', dataIndex: 'startDate', valueType: 'date' },
];

export default function MeasureInfo({ dataSource }) {

  return <>
    <BaseDescriptions
        columns={measureColumns.concat([
          { title: '结束时间', dataIndex: 'endDate' },
          { title: '动态跟踪', dataIndex: 'trace', render: () => <Space><Switch disabled/>未动态跟踪</Space> },
        ])}
        dataSource={dataSource}
    />
  </>;
}