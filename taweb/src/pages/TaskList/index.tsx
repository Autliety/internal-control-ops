import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Progress, Space } from 'antd';
import { ContainerOutlined, DownloadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ProColumns } from '@ant-design/pro-table';

import { useHttp } from '../../utils/request';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function TaskList() {

  const navigate = useNavigate();
  const { state, loading } = useHttp('/task', { initState: [] });

  const columns: ProColumns[] = [
    { title: '指标编号', dataIndex: ['plan', 'assessment', 'code'] },
    { title: '指标名称', dataIndex: ['plan', 'assessment', 'name'] },
    { title: '计划编号', dataIndex: ['plan', 'code'] },
    { title: '责任单位', dataIndex: ['plan', 'department', 'name'] },
    { title: '进度更新时间', dataIndex: 'updatedTime', render: () => '2022-01-01' },
    { title: '总体工作进度', dataIndex: '0.4', render: () => <Progress percent={40} size={'small'}/> },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record: any) => <Space>
        <Button
            type={'primary'}
            icon={<ContainerOutlined/>}
            size={'small'}
            onClick={() => navigate(`/task/${record.id}`)}
            disabled={record?.parentId}
        />
        <Button
            icon={<DownloadOutlined/>}
            size={'small'}
            disabled
        />
      </Space>,
      fixed: 'right',
      width: 80,
      align: 'center',
    }
  ];

  return <PageContainer
      extra={<Button type={'primary'}>新建</Button>}
  >
    <BaseEditableTable
        columns={columns}
        value={state}
        loading={loading}
    />
  </PageContainer>;
}
