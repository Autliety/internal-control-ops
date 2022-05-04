import React from 'react';
import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function TopicList() {
  const navigate = useNavigate();

  const columns: ColumnsType = [
    { title: '责任主体', dataIndex: 'department' },
    { title: '议题编写人', dataIndex: 'name' },
    { title: '审核状态', dataIndex: 'status' },
    { title: '议题数量', dataIndex: 'count' },
    { title: '最后更新时间', dataIndex: 'time' },
    {
      title: '详情',
      dataIndex: 'operation',
      render: (_, record: any) => <Button
          type={'primary'}
          icon={<ContainerOutlined/>}
          size={'small'}
          onClick={() => navigate(`/v2/meeting/${record.id}/topic`)}
      />,
      fixed: 'right',
      width: 80,
      align: 'center',
    },
  ];

  const data = [
    { id: 1, department: '纪委', name: '李勤根', status: '已完成', count: 2, time: '2022-02-23' },
    { id: 2, department: '领导干部', name: '赵小龙', status: '待审', time: '2022-02-22' },
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