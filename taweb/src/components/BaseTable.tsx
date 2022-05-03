import React from 'react';
import { Table } from 'antd';

export default function BaseTable({ columns, dataSource, ...restProps }) {
  return <Table
      bordered
      size={'middle'}
      scroll={{ x: 'max-content' }}
      pagination={{ hideOnSinglePage: true, ...restProps.pagination}}

      rowKey={'id'}

      columns={columns}
      dataSource={dataSource}

      title={restProps.title ? () => restProps.title : undefined}

      {...restProps}
  />;
}