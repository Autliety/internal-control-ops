import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Link, useNavigate } from 'react-router-dom';
import { ContainerOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function ReportList() {

  const data = [
    {
      id: 1,
      user: '王哲',
      review: 'XXXXXX',
    }
  ]

  const columns: ProColumns[] = [
    { title: '履责主体', dataIndex: 'user' },
    { title: '监督评议', dataIndex: 'review' },
    {
      title: '详情',
      key: 'operation',
      width: '5%',
      align: 'center',
      fixed: 'right',
      render: (_, record: any) => <Link to={`/lz/report/${record.id}`}><ContainerOutlined/></Link>,
    }
  ];

  const navigate = useNavigate();

  return <PageContainer
      title={'履责报告'}
      extra={
        <Space size={'large'}>
          <Button type={'primary'} onClick={() => navigate('/lz/report/0?create=true')}> <PlusOutlined/>新建</Button>
        </Space>
      }
  >

    <BaseEditableTable columns={columns} value={data}/>

  </PageContainer>;
}

