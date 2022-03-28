import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Modal, Progress, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';

export default function WorkProcess() {

  // 完成标准详细信息
  function showInfo(text) {
    Modal.info({
      title: '完成标准详情',
      content: <p>{text}</p>,
      icon: undefined,
    });
  }

  const columns: ColumnsType = [
    { title: '编号', dataIndex: 'id', width: 60 },
    { title: '计划', dataIndex: 'plan', width: 60 },
    {
      title: '完成进度',
      dataIndex: 'completedProgress',
      render: text => <Progress percent={text.slice(0, text.length - 1)} size='small'/>
    },
    {
      title: '汇报情况说明',
      dataIndex: 'report',
      render: text => <>
        {text.substring(0, 30) + '···'}
        <Button type={'link'} onClick={() => showInfo(text)}>[更多]</Button>
      </>,
      width: 600,
    },
    { title: '更新时间', dataIndex: 'updateDate' },
    {
      title: '操作',
      dataIndex: 'coordinateApply',
      render: () => <Space>
        <Button type={'primary'}>进度汇报</Button>
          <Button>协调申请</Button>
      </Space>
    },
  ];

  const dataSource = [
    {
      id: 1,
      plan: '计划A',
      completedProgress: '80%',
      report: '西湖南、西、北三面环山，湖中白堤、苏堤、杨公堤、赵公堤将湖面分割成若干水面。西湖的湖体轮廓呈近椭圆形，湖底部' +
          '较为平坦，湖泊平均水深为2.27米，最深约5米，最浅不到1米。湖泊天然地表水源是金沙涧、龙泓涧、赤山涧（慧因涧）、长桥溪四条溪流。',
      updateDate: '2020-03-01',
      coordinateApply: '川建国',
      progressReport: '川建国',
    },
    {
      id: 2,
      plan: '计划B',
      completedProgress: '30%',
      report: '西湖南、西、北三面环山，湖中白堤、苏堤、杨公堤、赵公堤将湖面分割成若干水面。西湖的湖体轮廓呈近椭圆形，湖底部' +
          '较为平坦，湖泊平均水深为2.27米，最深约5米，最浅不到1米。湖泊天然地表水源是金沙涧、龙泓涧、赤山涧（慧因涧）、长桥溪四条溪流。',
      updateDate: '2020-03-01',
      coordinateApply: '川建国',
      progressReport: '川建国',
    },
  ]

  return <PageContainer
      extra={<Button type={'primary'}>新建</Button>}
  >
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
