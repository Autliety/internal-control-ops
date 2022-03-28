import React from 'react';
import { PageContainer } from "@ant-design/pro-layout";
import { ColumnsType } from "antd/lib/table/interface";
import { Progress, Table } from "antd";

export default function Appraisal() {

  const dataSource = [
    {
      id: '1',
      indicator: '指标0001',
      weight: '20%',
      process: '32',
      weightedProcess: '29',
      updateTime: '2020-03-01 19:00:00',
    },
    {
      id: '2',
      indicator: '指标0001',
      weight: '30%',
      process: '74',
      weightedProcess: '70',
      updateTime: '2020-03-01 19:00:00',
    },
  ];

  const columns: ColumnsType = [
    { title: '编号', dataIndex: 'id' },
    { title: '指标', dataIndex: 'indicator' },
    { title: '指标权重', dataIndex: 'weight' },
    {
      title: '完成进度',
      dataIndex: 'process',
      render: text => <Progress percent={text.slice(0, text.length - 1)} size='small'/>
    },
    { title: '加权完成分', dataIndex: 'weightedProcess' },
    { title: '更新时间', dataIndex: 'updateTime' },
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
