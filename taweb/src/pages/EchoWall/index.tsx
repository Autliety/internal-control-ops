import React from 'react';
import { PageContainer } from "@ant-design/pro-layout";
import { ColumnsType } from "antd/lib/table/interface";
import { Table } from "antd";

export default function EchoWall() {

  const columns: ColumnsType = [
    { title: '情况', dataIndex: 'situation', },
    { title: '方案', dataIndex: 'plan', },
    { title: '时间', dataIndex: 'time', },
    { title: '反馈', dataIndex: 'feedback', },
  ];

  const dataSource = [
    {
      id: 1,
      situation: '川建国',
      plan: '川建国',
      time: '川建国',
      feedback: '川建国',
    }
  ];

  return <PageContainer>
    <Table
        bordered
        size={'small'}
        scroll={{
          scrollToFirstRowOnChange: true,
          x: 1700,
        }}

        columns={columns}
        rowKey={'id'}

        dataSource={dataSource}
    />
  </PageContainer>;
}

