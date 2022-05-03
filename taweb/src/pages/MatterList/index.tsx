import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Input, Select, Space, Tooltip } from 'antd';
import { ContainerOutlined, FileSearchOutlined, PlusSquareOutlined, PrinterOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table/interface';
import { useNavigate } from 'react-router-dom';
import BaseTable from '../../components/BaseTable';
import { useHttp } from '../../utils/request';

export default function MatterList() {

  const navigate = useNavigate();

  const { state, loading } = useHttp('/matter', {initState: []});

  const columns: ColumnsType = [
    { title: '编号', dataIndex: 'code' },
    { title: '问题概述', dataIndex: 'name' },
    { title: '问题类型', dataIndex: 'type' },
    { title: '问题来源', dataIndex: 'origin' },
    { title: '责任主体', dataIndex: ['department', 'name'] },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record: any) => <Space>
        <Tooltip title={'查看详情'}>
          <Button
              type={'primary'}
              icon={<ContainerOutlined />}
              size={'small'}
              onClick={() => navigate(`${record.id}`)}
          />
        </Tooltip>
      </Space>,
      fixed: 'right',
      width: 40,
      align: 'center',
    },
  ];

  return <PageContainer
      title={'问题清单'}
      extra={
        <Space size={'middle'}>
          <Button ><PrinterOutlined />打印清单</Button>
          <Button type={'primary'}><PlusSquareOutlined />添加问题</Button>
        </Space>
      }
  >
    <Space>
      <Select defaultValue={0} dropdownMatchSelectWidth={200}>
        <Select.Option value={0}>全部</Select.Option>
        <Select.Option value={1}>党委</Select.Option>
        <Select.Option value={2}>xx站办</Select.Option>
        <Select.Option value={3}>个人</Select.Option>
      </Select>
      <Input.Search placeholder={'搜索'} enterButton />
      <Button><FileSearchOutlined />精确查找</Button>
    </Space>

    <Divider />
    <BaseTable
        loading={loading}
        columns={columns}
        dataSource={state}
    />

  </PageContainer>;
}