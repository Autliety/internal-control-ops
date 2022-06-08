import React from 'react';
import ProDescriptions from '@ant-design/pro-descriptions';

export default function BaseDescriptions({ columns, dataSource, ...restProps }) {
  return <>
    <ProDescriptions
        bordered
        size={'middle'}
        style={{ backgroundColor: 'white' }}
        labelStyle={{ width: '14%' }}
        contentStyle={{ width: '36%' }}
        column={2}

        columns={columns}
        dataSource={dataSource}

        {...restProps}
    />
  </>;
}