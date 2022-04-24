import React from 'react';
import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function TopicList() {
  const navigate = useNavigate();

  const columns: ColumnsType = [
    { title: '议题填写人员', dataIndex: 'name' },
    { title: '完成时间', dataIndex: 'time' },
    {
      title: '详情',
      dataIndex: 'operation',
      render: (_, record: any) => <Button
          type={'primary'}
          icon={<ContainerOutlined/>}
          size={'small'}
          onClick={() => navigate(`/v2/topic/${record.id}`)}
      />,
      fixed: 'right',
      width: 80,
      align: 'center',
    },
  ];

  const data = [
    { id: 1, name: '王哲', time: '2022-02-23' },
    { id: 2, name: '赵小龙', time: '2022-02-22' },
  ];

  return <>
    <Table
        rowKey={'id'}
        columns={columns}
        dataSource={data}
        pagination={false}
    />
  </>;
}