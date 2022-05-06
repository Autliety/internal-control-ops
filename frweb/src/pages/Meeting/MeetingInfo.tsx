import React from 'react';
import BaseDescriptions from '../../components/BaseDescriptions';
import { useHttp } from '../../utils/request';
import { useParams } from 'react-router-dom';
import moment from 'moment';

export const meetingColumns: object[] = [
  { title: '编号', dataIndex: 'code' },
  { title: '会议类型', dataIndex: 'type' },
  { title: '责任主体', dataIndex: 'department', render: v => v || '党委' },
  { title: '会议时间', dataIndex: 'startTime', render: v => moment(v).format("yyyy-MM-DD HH:mm:ss") },
  { title: '会议地点', dataIndex: 'placement' },
  { title: '参会人数', dataIndex: 'userCount' },
];

export default function MeetingInfo() {

  const { id } = useParams();

  const { state, loading } = useHttp(`/meeting/${id}`);

  return <>
    <BaseDescriptions
        columns={meetingColumns}
        dataSource={state}
        loading={loading}
    />
  </>;
}