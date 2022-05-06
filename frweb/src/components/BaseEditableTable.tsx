import React from 'react';
import { EditableProTable } from '@ant-design/pro-table';
import moment from 'moment';

export default function BaseTable({ columns, isInEdit, value, onChange, ...restProps }) {

  const [editableKeys, setEditableKeys] = React.useState([]);

  if (isInEdit) {
    columns.push({
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a key="editable" onClick={() => action?.startEditable?.(record.id)}>
          编辑
        </a>,
        <a key="delete" onClick={() => onChange(value.filter(i => i.id !== record.id))}>
          删除
        </a>,
      ],
    })
  } else {
    setEditableKeys([]);
  }

  return <EditableProTable
      rowKey={'id'}
      scroll={{
        scrollToFirstRowOnChange: true,
      }}

      columns={columns}
      value={value}
      onChange={onChange}

      editable={{
        type: 'multiple',
        editableKeys,
        onChange: setEditableKeys,
      }}
      recordCreatorProps={{ record: () => ({ id: moment().valueOf() }) }}

      {...restProps}
  />
}