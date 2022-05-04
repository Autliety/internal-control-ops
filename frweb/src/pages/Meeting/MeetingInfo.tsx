import React from 'react';
import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';

export default function MeetingInfo({ data }) {

  const InfoColumns: ColumnDef[] = [
    { title: '编号', dataIndex: 'code' },
    { title: '会议名称', dataIndex: 'name' },
    { title: '会议类型', dataIndex: 'type' },
    { title: '责任主体', dataIndex: 'department' },
    { title: '会议地点', dataIndex: 'placement' },
    { title: '会议时间', dataIndex: 'startTime' },
  ];

  return <>
    <EditableDescriptions isEdit={false} columns={InfoColumns} data={data}/>
  </>;
}