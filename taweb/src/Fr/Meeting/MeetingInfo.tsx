import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import BaseDescriptions from '../../components/BaseDescriptions';
import { meetingStatusEnum } from '../../utils/nameMapFr';

export const meetingColumns: ProColumns[] = [
  { title: '编号', dataIndex: 'code', editable: false },
  { title: '会议类型', dataIndex: 'type', valueType: 'select', fieldProps: { options: ['1专题会议', 'X专门会议', '纪委动议'] } },
  { title: '责任主体', dataIndex: ['user', 'name'], editable: false },
  {
    title: '会议状态',
    dataIndex: 'status',
    valueEnum: meetingStatusEnum,
    editable: false,
  },
  { title: '会议时间', dataIndex: 'startTime', valueType: 'date' },
  { title: '会议地点', dataIndex: 'placement' },
  { title: '会议议题', dataIndex: 'content', valueType: 'textarea', hideInTable: true, hideInSearch: true },
];

export default function MeetingInfo({ dataSource, editable = null }) {

  return <>
    <BaseDescriptions
        columns={meetingColumns}
        dataSource={dataSource}
        editable={editable}
    />
  </>;
}