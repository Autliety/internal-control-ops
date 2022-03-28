import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import { ColumnsType } from 'antd/lib/table/interface';
import { basicFormStatus } from '../../utils/nameMap';
import { ContainerOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Space, Table, Tag } from 'antd';

export default function ScrapList() {

  const navigate = useNavigate();
  // const { state, loading } = useHttp('/asset/scrap', { initState: [] });

  const columns: ColumnsType = [
    { title: '单号', dataIndex: 'code' },
    { title: '申请人', dataIndex: ['user', 'name'] },
    { title: '申请单位', dataIndex: ['organization', 'fullName'] },
    {
      title: '状态', dataIndex: 'status',
      render: text => <Tag color={basicFormStatus[text]?.tag}>{basicFormStatus[text]?.label}</Tag>,
    },
    { title: '报废/报损', dataIndex: 'isBroken', render: text => text === 'true' ? '报废' : '报损' },
    { title: '最后更新时间', dataIndex: 'updateTime' },
    {
      title: '详情',
      key: 'operation',
      width: '5%',
      align: 'center',
      fixed: 'right',
      render: (_, record: any) => <Link to={`/asset/scrap/${record.id}`}><ContainerOutlined /></Link>,
    },
  ];

  return <PageContainer
      extra={<Space>
        <Button type="primary" onClick={() => navigate('/asset/scrap/0?create=true')}>报废报损申请</Button>
      </Space>}
  >

    <Table
        bordered
        size={'small'}
        scroll={{
          scrollToFirstRowOnChange: true,
          x: 1300,
        }}
        pagination={{
          showTotal: (total, range) => `${range[0]}-${range[1]} / ${total}`,
          hideOnSinglePage: true,
          pageSize: 15,
          showSizeChanger: false,
        }}

        columns={columns}
        rowKey={'id'}

        dataSource={[]}
        // loading={loading}
    />
  </PageContainer>;
}