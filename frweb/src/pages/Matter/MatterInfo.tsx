import React from 'react';
import BaseDescriptions from '../../components/BaseDescriptions';
import moment from 'moment';
import { Space, Switch } from 'antd';

export const matterColumns: object[] = [
  { title: '编号', dataIndex: 'code'},
  { title: '责任主体', dataIndex: ['department', 'name'] },
  { title: '问题内容', dataIndex: 'content', span: 2 },
  { title: '问题类型', dataIndex: 'type' },
  { title: '问题来源', dataIndex: 'origin' },
  { title: '截止日期', dataIndex: 'endDate', render: v => moment(v).format("YYYY-MM-DD") },
];

export default function MatterInfo({ dataSource }) {
  return <>
    <BaseDescriptions
        columns={matterColumns.concat([
          { title: '更新时间', dataIndex: 'updateTime', render: v => !v || moment(v).format('YYYY-MM-DD HH:mm:ss') },
          { title: '动态跟踪', dataIndex: 'trace', render: () => <Space><Switch /> 开启动态跟踪</Space> },
        ])}
        dataSource={dataSource}
    />
  </>;
}