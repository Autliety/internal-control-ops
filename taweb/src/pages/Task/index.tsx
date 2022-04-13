import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { ContainerOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

import { useHttp } from '../../utils/request';

export default function Task() {

  const { state, loading } = useHttp('/task', { initState: [] });
  const navigate = useNavigate();

  const columns: ColumnsType = [
    { title: '编号', dataIndex: 'id', width: 60 },
    {
      title: '关联计划名称',
      dataIndex: ['plan', 'name'],
      render: (text, record: any) => <Button
          type={'link'}
          onClick={() => navigate(`/plan/${record.id}`)}
      >{text}</Button>
    },
    { title: '创建时间', dataIndex: 'createdTime' },
    { title: '最后更新时间', dataIndex: 'updatedTime' },
    {
      title: '详情',
      key: 'operation',
      width: '5%',
      align: 'center',
      fixed: 'right',
      render: (_, record: any) => <Link to={`/task/${record.id}`}><ContainerOutlined/></Link>,
    }
  ];

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

        dataSource={state}
        loading={loading}
    />
  </PageContainer>;
}
