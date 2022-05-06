import React from 'react';
import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';
import SelectUser from '../../components/SelectUser';

export default function TopicInfo({ isEdit, data, onChange }) {

  const columns: ColumnDef[] = [
    {
      title: '责任主体',
      dataIndex: 'user',
      renderFormItem: () => <SelectUser withUser onChange={v => onChange({userId: v})} />,
    },
    { title: '议题审核状态', dataIndex: 'status' },
    { title: '议题数量', dataIndex: 'count' },
    { title: '编写时间', dataIndex: 'createTime' },
  ];

  return <>
    <EditableDescriptions
        isEdit={isEdit}
        columns={columns}
        data={data}
    />
  </>;
}