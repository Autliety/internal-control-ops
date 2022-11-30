import React from 'react';
import ProDescriptions from '@ant-design/pro-descriptions';

export default function BaseDescriptions(
    {
      columns,
      dataSource,
      isInEdit = false,
      ...restProps
    }
) {
  return <>
    <ProDescriptions
        bordered
        size={'middle'}
        style={{ backgroundColor: 'white' }}
        labelStyle={restProps.column === 1 ? { width: '14%' } : { width: '14%' }}
        contentStyle={restProps.column === 1 ? { width: '86%' } : { width: '36%' }}
        column={restProps.column || 2}
        editable={isInEdit ? {} : null}
        extra={restProps.extra}

        columns={columns}
        dataSource={dataSource}
        formProps={{ onValuesChange: restProps.onChange }}

        {...restProps}
    />
  </>;
}