import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Table } from 'antd';

const columns = [
  { title: '公司名称', dataIndex: 'name' }
];
export default function Organizations() {

  return <div className="Organizations">
    <PageContainer>
      <Table
          rowKey="id"
          columns={columns}
          defaultExpandAllRows
          dataSource={[]}
      />
    </PageContainer>
  </div>;
}
