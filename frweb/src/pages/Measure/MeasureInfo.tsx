import React from 'react';
import BaseDescriptions from '../../components/BaseDescriptions';

export const measureColumns: object[] = [
  { title: '编号', dataIndex: 'code' },
  { title: '责任人', dataIndex: ['user', 'name'] },
  { title: '工作措施', dataIndex: 'content', span: 2 },
  { title: '开始时间', dataIndex: 'startDate' },
  { title: '结束时间', dataIndex: 'endDate' },
];

export default function MeasureInfo({ dataSource }) {

  return <>
    <BaseDescriptions
        columns={measureColumns}
        dataSource={dataSource}
    />
  </>;
}