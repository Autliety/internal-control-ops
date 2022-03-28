import React from 'react';
import { Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { ContainerOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { ColumnsType } from 'antd/lib/table/interface';
import { useHttp } from '../../utils/request';
import { approveProcessStatus } from '../../utils/nameMap';
import NoPrivilege from "../../components/NoPrivilege";

export default function ApproveList() {

  // const { state, loading } = useHttp('/approve/process', { initState: [] });
  const columns: ColumnsType<any> = [
    { title: '审批单号', dataIndex: 'code' },
    { title: '审批类型', dataIndex: ['flow', 'remark'] },
    {
      title: '状态',
      dataIndex: 'status',
      render: text => <Tag color={approveProcessStatus[text].tag}>{approveProcessStatus[text].label}</Tag>,
    },
    { title: '创建时间', dataIndex: 'time' },
    {
      title: '详情',
      key: 'operation',
      width: '5%',
      align: 'center',
      fixed: 'right',
      render: (_, record: any) => <Link to={`/approve/process/${record.id}`}><ContainerOutlined/></Link>,
    },
  ];

  return <>
    <PageContainer>
      <Table
          bordered
          size={'small'}
          scroll={{
            scrollToFirstRowOnChange: true,
            x: 1300,
          }}

          columns={columns}
          rowKey={'id'}

          dataSource={[]}
          // loading={loading}
      />

    </PageContainer>
  </>;
}
