import React from 'react';
import { EditableProTable } from '@ant-design/pro-table';
import moment from 'moment';

export default function BaseEditableTable(
    {
      columns,
      isInEdit = false,
      isSearch = false,
      disableAdd = false, // 编辑模式下不允许新增数据
      isOnlyDelete = false,
      isOnlyEdit = false,
      value = [],
      onChange = (_: any[]) => {
      },
      ...restProps
    }) {

  const [editableKeys, setEditableKeys] = React.useState([]);

  return <EditableProTable
      bordered
      size={'middle'}
      scroll={{
        x: 'max-content',
        scrollToFirstRowOnChange: true,
      }}

      pagination={{ hideOnSinglePage: true, ...restProps.pagination }}
      rowKey={'key'}
      columns={isInEdit ? columns.filter(c => Array.isArray(c.dataIndex) || c.dataIndex !== 'operation').concat({
            title: '操作',
            width: 150,
            valueType: 'option',
            key: 'option',
            render: (text, record, _, action) => [
              isOnlyDelete || <a key="editable" onClick={() => action?.startEditable?.(record.key)}>
                编辑
              </a>,
              isOnlyEdit || <a key="delete" onClick={() => onChange(value.filter(i => i.key !== record.key))}>
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

      search={false/*isSearch && {
        collapsed,
        onCollapse: setCollapsed,
      }*/}
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