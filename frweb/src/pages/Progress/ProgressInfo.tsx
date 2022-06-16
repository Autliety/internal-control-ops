import React from 'react';
import BaseDescriptions from '../../components/BaseDescriptions';
import { ProColumns } from '@ant-design/pro-table';
import { statusEnum } from '../../utils/nameMap';
import moment from "moment";

export const progressColumns: ProColumns[] = [
  { title: '措施编号', dataIndex: ['measure', 'code'], hideInDescriptions: true, editable: false },
  { title: '负责人', dataIndex: ['measure', 'user', 'name'], editable: false },
  { title: '开始日期', dataIndex: ['measure', 'startDate'], valueType: 'date', editable: false },
  { title: '结束日期', dataIndex: ['measure', 'endDate'], valueType: 'date', hideInTable: true, editable: false },
  { title: '状态', dataIndex: 'status', valueEnum: statusEnum, editable: false },
  { title: '履责情况', dataIndex: 'content', valueType: 'textarea', hideInTable: true },
  { title: '事项完成率', dataIndex: 'percentage', valueType: 'progress' },
  { title: '未完成原因', dataIndex: 'reason', valueType: 'textarea', hideInTable: true },
  { title: '最后更新时间', dataIndex: 'updateTime', editable: false, renderText: t => moment(t).format('YYYY-MM-DD HH:mm') },
];

export default function ProgressInfo({ dataSource, ...rest }) {
  return <>
    <BaseDescriptions
        columns={progressColumns}
        dataSource={dataSource}
        {...rest}
    />
  </>;
}