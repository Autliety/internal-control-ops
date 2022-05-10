import React from 'react';
import { ColumnDef } from '../../components/EditableDescriptions';
import SelectUser from '../../components/SelectUser';
import { Tag } from 'antd';
import { meetingStatus } from '../../utils/nameMap';
import BaseDescriptions from '../../components/BaseDescriptions';
import moment from 'moment';

export default function TopicInfo({ isEdit, data, onChange }) {

  const columns: ColumnDef[] = [
    {
      title: '责任主体',
      dataIndex: ['user', 'name'],
      renderFormItem: () => <SelectUser withUser onChange={v => onChange({ userId: v })} />,
    },
    {
      title: '议题状态',
      dataIndex: 'status',
      render: v => <Tag color={meetingStatus[v].tag}>{meetingStatus[v].label}</Tag>,
    },
    { title: '议题数量', dataIndex: 'count' },
    { title: '编写时间', dataIndex: 'createTime', render: v => moment(v).format('yyyy-MM-DD HH:mm:ss') },
  ];

  return <>
    <BaseDescriptions
        isEdit={isEdit}
        columns={columns}
        dataSource={data}
    />
  </>;
}