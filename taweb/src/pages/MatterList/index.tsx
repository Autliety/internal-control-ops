import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Input, Select, Space, Table, Tooltip } from 'antd';
import {
  ContainerOutlined,
  FileSearchOutlined,
  ImportOutlined,
  PlusSquareOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table/interface';
import { useNavigate } from 'react-router-dom';

export default function MatterList() {

  const navigate = useNavigate();

  const columns: ColumnsType = [
    { title: '编号', dataIndex: 'code' },
    { title: '责任主体', dataIndex: 'department', render: () => '党委' },
    { title: '责任年度', dataIndex: 'year' },
    { title: '问题类型', dataIndex: 'type' },
    { title: '问题数量', dataIndex: 'count' },
    { title: '指派状态', dataIndex: 'status' },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record: any) => <Space>
        <Tooltip title={'查看详情'}>
          <Button
              type={'primary'}
              icon={<ContainerOutlined />}
              size={'small'}
              onClick={() => navigate(`/v2/responsibility/${record.id}`)}
          />
        </Tooltip>
        <Tooltip title={'查看会议议题'}>
          <Button
              icon={<TeamOutlined />}
              size={'small'}
              onClick={() => navigate(`/v2/meeting/${record.id}`)}
          />
        </Tooltip>
      </Space>,
      fixed: 'right',
      width: 80,
      align: 'center',
    },
  ];

  const data = [
    { code: 'WT001', year: '2021', type: '日常监督检查', count: 3, status: '未指派' },
    { code: 'WT002', year: '2021', type: '审计', count: 2, status: '未指派' },
    { code: 'WT003', year: '2021', type: '信访调查', count: 4, status: '已完成' },
  ]

  return <PageContainer
      title={'问题清单'}
      extra={
        <Space size={'middle'}>
          <Button type={'primary'}><PlusSquareOutlined />创建清单</Button>
          <Button type={'primary'}><ImportOutlined />导入模板</Button>
        </Space>
      }
  >
    <Space>
      <Select defaultValue={0} dropdownMatchSelectWidth={150} >
        <Select.Option value={0}>全部</Select.Option>
        <Select.Option value={1}>按问题类型分类</Select.Option>
        <Select.Option value={2}>按责任主体分类</Select.Option>
        <Select.Option value={3}>个人</Select.Option>
      </Select>
      <Input.Search placeholder={'搜索'} enterButton />
      <Button><FileSearchOutlined />精确查找</Button>
    </Space>

    <Divider />
    <Table
        rowKey={'id'}
        bordered
        columns={columns}
        dataSource={data}
    />

  </PageContainer>;
}