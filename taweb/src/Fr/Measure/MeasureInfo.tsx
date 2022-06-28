import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import BaseDescriptions from '../../components/BaseDescriptions';
import { Button, Space, Switch } from 'antd';
import { statusEnum } from '../../utils/nameMapTa';
import showInfo from "../../utils/showInfo";

export const measureColumns: ProColumns[] = [
  { title: '编号', dataIndex: 'code' },
  {
    title: '审核状态',
    dataIndex: 'status',
    valueEnum: statusEnum,
  },
  {
    title: '工作措施',
    dataIndex: 'content',
    renderText: text => <>
      {text?.substring(0, 40)}
      {text?.length > 40 && <Button type={'link'} onClick={() => showInfo(text)}>...[详情]</Button>}
    </>,
  },
  { title: '责任主体', dataIndex: ['user', 'department', 'name'] },
  { title: '负责人', dataIndex: ['user', 'name'] },
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