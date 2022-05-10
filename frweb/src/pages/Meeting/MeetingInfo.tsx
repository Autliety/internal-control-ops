import React from 'react';
import BaseDescriptions from '../../components/BaseDescriptions';
import moment from 'moment';
import { Tag } from 'antd';
import { meetingStatus } from '../../utils/nameMap';

export const meetingColumns: object[] = [
  { title: '编号', dataIndex: 'code' },
  { title: '会议类型', dataIndex: 'type' },
  { title: '责任主体', dataIndex: 'department', render: v => v || '党委' },
  { title: '会议状态', dataIndex: 'status', render: v => <Tag color={meetingStatus[v]?.tag}>{meetingStatus[v]?.label}</Tag> },
  { title: '会议时间', dataIndex: 'startTime', render: v => moment(v).format('yyyy-MM-DD HH:mm:ss') },
  { title: '会议地点', dataIndex: 'placement' },
];

export default function MeetingInfo({ dataSource }) {

  return <>
    <BaseDescriptions
        columns={meetingColumns}
        dataSource={dataSource}
    />
  </>;
}