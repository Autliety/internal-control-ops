import React from 'react';
import BaseDescriptions from '../../components/BaseDescriptions';
import { meetingStatusEnum } from '../../utils/nameMap';
import { ProColumns } from '@ant-design/pro-table';

export const meetingColumns: ProColumns[] = [
  { title: '编号', dataIndex: 'code' },
  { title: '会议类型', dataIndex: 'type' },
  { title: '责任主体', dataIndex: ['department', 'name'], renderText: v => v || '党委' },
  { title: '经办人', dataIndex: ['user', 'name'] },
  {
    title: '会议状态',
    dataIndex: 'status',
    valueEnum: meetingStatusEnum,
  },
  { title: '会议时间', dataIndex: 'startTime', valueType: 'dateTime' },
  { title: '会议地点', dataIndex: 'placement' },
  { title: '会议议题', dataIndex: 'content', valueType: 'textarea', hideInTable: true, hideInSearch: true },
];

export default function MeetingInfo({ dataSource }) {

  return <>
    <BaseDescriptions
        columns={meetingColumns}
        dataSource={dataSource}
    />
  </>;
}