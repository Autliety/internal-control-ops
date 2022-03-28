import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Space, Table, Tag } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { ColumnsType } from 'antd/lib/table/interface';

import { useHttp } from '../../utils/request';
import { basicFormStatus } from '../../utils/nameMap';
import NoPrivilege from '../../components/NoPrivilege';
import { useAuth } from '../../utils/auth';

export default function TransferList() {

  const { user } = useAuth();
  const navigate = useNavigate();
  // const { state, loading } = useHttp('/asset/transfer', { initState: [] });

  const columns: ColumnsType = [
    { title: '单号', dataIndex: 'code' },
    { title: '申请人', dataIndex: ['user', 'name'] },
    {
      title: '状态', dataIndex: 'status',
      render: text => <Tag color={basicFormStatus[text]?.tag}>{basicFormStatus[text]?.label}</Tag>,
    },
    { title: '调出单位', dataIndex: ['organization', 'fullName'] },
    { title: '调入单位', dataIndex: ['organization', 'fullName'] },
    { title: '最后更新时间', dataIndex: 'updateTime' },
    {
      title: '详情',
      key: 'operation',
      width: '5%',
      align: 'center',
      fixed: 'right',
      render: (_, record: any) => <Link to={`/asset/transfer/${record.id}`}><ContainerOutlined /></Link>,
    },
  ];

  // if (!user.privileges?.includes('ASSET')) {
  //   return <NoPrivilege />;
  // }

  return <PageContainer
      extra={<Space>
        <Button type="primary" onClick={() => navigate('/asset/transfer/0?create=true')}>批量调拨申请</Button>
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