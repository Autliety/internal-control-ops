import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import BaseDescriptions from '../../components/BaseDescriptions';
import { meetingStatusEnum } from '../../utils/nameMapFr';

export const meetingColumns: ProColumns[] = [
  { title: '编号', dataIndex: 'id', renderText: n => 'HY' + n?.toString().padStart(3, '0'), editable: false },
  { title: '会议类型', dataIndex: 'type', valueType: 'select', fieldProps: { options: ['1专题会议', 'X专门会议'] }, editable: false },
  { title: '责任主体', dataIndex: ['user', 'name'], editable: false },
  {
    title: '会议状态',
    dataIndex: 'approvalStatus',
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