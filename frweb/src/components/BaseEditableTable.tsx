import React from 'react';
import { EditableProTable } from '@ant-design/pro-table';
import moment from 'moment';

export default ({
                  columns,
                  isInEdit = false,
                  value = [],
                  onChange = ([]) => {},
                  ...restProps
                }) => {

  const [editableKeys, setEditableKeys] = React.useState([]);

  return <EditableProTable
      bordered
      size={'middle'}
      scroll={{
        x: 'max-content',
        scrollToFirstRowOnChange: true,
      }}

      pagination={{ hideOnSinglePage: true, ...restProps.pagination }}
      rowKey={'id'}
      columns={isInEdit ? columns.concat({
            title: '操作',
            width: 150,
            valueType: 'option',
            render: (text, record, _, action) => [
              <a key="editable" onClick={() => action?.startEditable?.(record.id)}>
                编辑
              </a>,
              <a key="delete" onClick={() => onChange(value.filter(i => i.id !== record.id))}>
                删除
              </a>,
            ],
          })
          : columns
      }
      value={value}
      onChange={onChange}

      editable={{
        type: 'multiple',
        editableKeys,
        onChange: setEditableKeys,
      }}
      recordCreatorProps={isInEdit && { record: () => ({ id: moment().valueOf() }) }}

      {...restProps}
  />;
}