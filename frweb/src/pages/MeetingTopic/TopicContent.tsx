import React from 'react';
import { EditableProTable, ProColumns } from '@ant-design/pro-table';
import moment from 'moment';
import { Input } from 'antd';

type Props = {
  isEdit?: boolean,
  data?: any,
  onChange?: any,
};

export default function TopicContent({ isEdit, data, onChange }: Props) {

  const [editableKeys, setEditableRowKeys] = React.useState([]);

  const columns: ProColumns[] = [
    {
      title: '议题内容',
      dataIndex: 'content',
      renderFormItem: () => <Input placeholder={'任务内容'} />,
    },
    isEdit && {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a key="editable" onClick={() => action?.startEditable?.(record.id)}>
          编辑
        </a>,
        <a key="delete" onClick={() => onChange(data.filter(i => i.id !== record.id))}>
          删除
        </a>,
      ],
    },
  ];

  return <>
    <EditableProTable
        rowKey={'id'}
        scroll={{
          scrollToFirstRowOnChange: true,
        }}

        columns={columns}
        value={data}
        onChange={onChange}

        editable={{
          type: 'multiple',
          editableKeys,
          onChange: setEditableRowKeys,
        }}
        recordCreatorProps={{ record: () => ({ id: moment().valueOf() }) }}
    />
  </>;
}