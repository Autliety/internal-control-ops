import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Input, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { useNavigate } from 'react-router-dom';
import { ContainerOutlined, DownloadOutlined, FileSearchOutlined } from '@ant-design/icons';

import { useHttp } from '../../utils/request';
import CreateModal from './CreateModal';

export default function PlanList() {

  const navigate = useNavigate();
  const { state, loading } = useHttp('/plan', { initState: [] });


  const columns: ColumnsType = [
    { title: '指标编号', dataIndex: ['assessment', 'code'] },
    { title: '指标名称', dataIndex: ['assessment', 'name'] },
    { title: '计划编号', dataIndex: 'code' },
    { title: '责任单位', dataIndex: ['department', 'name'] },
    { title: '措施数', dataIndex: 'details', render: value => value?.length },
    { title: '计划完整度', dataIndex: 'progress', render: () => '100%' },
    { title: '备注', dataIndex: 'remark' },
    { title: '创建时间', dataIndex: 'createTime' },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record: any) => <Space>
        <Button
            type={'primary'}
            icon={<ContainerOutlined />}
            size={'small'}
            onClick={() => navigate(`/plan/${record.id}`)}
            disabled={record?.parentId}
        />
        <Button
            icon={<DownloadOutlined />}
            size={'small'}
            disabled
        />
      </Space>,
      fixed: 'right',
      width: 80,
      align: 'center',
    },
  ];

  return <PageContainer
      extra={
        <Space size={'middle'}>
          <CreateModal />
        </Space>
      }
  >
    <Space>
      <Input.Search placeholder={'搜索'} enterButton />
      <Button><FileSearchOutlined />精确查找</Button>
    </Space>

    <Divider />

    <Table
        bordered
        loading={loading}
        size={'small'}
        scroll={{ x: 'max-content' }}

        columns={columns}
        rowKey={'id'}

        dataSource={state}
    />

  </PageContainer>;
}
