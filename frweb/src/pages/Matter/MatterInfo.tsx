import React from 'react';
import BaseDescriptions from '../../components/BaseDescriptions';
import { Space, Switch } from 'antd';
import { ProColumns } from '@ant-design/pro-table';

export const matterColumns: ProColumns[] = [
  { title: '编号', dataIndex: 'code'},
  { title: '问题内容', dataIndex: 'content' },
  { title: '问题类型', dataIndex: 'type' },
  { title: '截止日期', dataIndex: 'endDate', valueType: 'date' },
  { title: '责任主体', dataIndex: ['department', 'name'] },
  { title: '负责人', dataIndex: ['user', 'name'] },
];

export default function MatterInfo({ dataSource }) {
  return <>
    <BaseDescriptions
        columns={matterColumns.concat([
          { title: '更新时间', dataIndex: 'updateTime', valueType: 'dateTime' },
          { title: '动态跟踪', dataIndex: 'trace', render: () => <Space><Switch /> 开启动态跟踪</Space> },
        ])}
        dataSource={dataSource}
    />
  </>;
}