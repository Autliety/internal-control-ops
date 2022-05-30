import React from 'react';
import { EditableProTable } from '@ant-design/pro-table';
import moment from 'moment';

export default function BaseEditableTable(
    {
      columns,
      isInEdit = false,
      isSearch = false,
      disableAdd = false,
      value = [],
      onChange = (_: any[]) => {},
      ...restProps
    }) {

  const [editableKeys, setEditableKeys] = React.useState([]);

  const [collapsed, setCollapsed] = React.useState(true);

  return <EditableProTable
      bordered
      size={'middle'}
      scroll={{
        x: 'max-content',
        scrollToFirstRowOnChange: true,
      }}

      pagination={{ hideOnSinglePage: true, ...restProps.pagination }}
      rowKey={'key'}
      columns={isInEdit ? columns.concat({
            title: '操作',
            width: 150,
            valueType: 'option',
            render: (text, record, _, action) => [
              <a key="editable" onClick={() => action?.startEditable?.(record.key)}>
                编辑
              </a>,
              <a key="delete" onClick={() => onChange(value.filter(i => i.key !== record.key))}>
                删除
              </a>,
            ],
          })
          : columns
      }
      value={value.filter(v => v).map(v => {
        v.key = v.key ? v.key : v.id;
        return v;
      })}
      onChange={onChange}

      search={isSearch && {
        collapsed,
        onCollapse: setCollapsed,
      }}
      onSubmit={v => console.log(v)}

      editable={{
        type: 'multiple',
        editableKeys,
        onChange: setEditableKeys,
      }}
      recordCreatorProps={isInEdit && !disableAdd && { record: () => ({ key: moment().valueOf() }) }}

      {...restProps}
  />;
}