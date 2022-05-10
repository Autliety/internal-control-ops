import React from 'react';
import BaseDescriptions from '../../components/BaseDescriptions';
import moment from 'moment';
import { statusEnum } from '../../utils/nameMap';
import { ProColumns } from '@ant-design/pro-table';

export const meetingColumns: ProColumns[] = [
  { title: '编号', dataIndex: 'code' },
  { title: '会议类型', dataIndex: 'type' },
  { title: '责任主体', dataIndex: ['department', 'name'], renderText: v => v || '党委' },
  { title: '经办人', dataIndex: ['user', 'name'] },
  {
    title: '会议状态',
    dataIndex: 'status',
    valueEnum: statusEnum,
  },
  { title: '会议时间', dataIndex: 'startTime', renderText: v => moment(v).format('yyyy-MM-DD HH:mm:ss') },
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