import React from 'react';
import BaseDescriptions from '../../components/BaseDescriptions';
import moment from 'moment';

export const matterColumns: object[] = [
  { title: '编号', dataIndex: 'code'},
  { title: '责任主体', dataIndex: ['department', 'name'] },
  { title: '问题内容', dataIndex: 'content', span: 2 },
  { title: '问题类型', dataIndex: 'type' },
  { title: '问题来源', dataIndex: 'origin' },
  { title: '截止日期', dataIndex: 'endDate', render: v => moment(v).format("yyyy-MM-DD") },
  { title: '更新时间', dataIndex: 'updateTime' },
];

export default function MatterInfo({ dataSource }) {
  return <>
    <BaseDescriptions
        columns={matterColumns}
        dataSource={dataSource}
    />
  </>;
}