import React from 'react';
import ProDescriptions from '@ant-design/pro-descriptions';

export default function BaseDescriptions(
    {
      columns,
      dataSource,
      column = 2,
      isInEdit = false,
      ...restProps
    }
) {
  return <>
    <ProDescriptions
        bordered
        size={'middle'}
        style={{ backgroundColor: 'white' }}
        labelStyle={{ width: '14%' }}
        contentStyle={{ width: '36%' }}
        column={column}
        editable={isInEdit ? {} : null}

        columns={columns}
        dataSource={dataSource}
        formProps={{ onValuesChange: restProps.onChange }}

        {...restProps}
    />
  </>;
}