import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useNavigate } from 'react-router-dom';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { baseColumns } from '../ContributeList';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function DynamicList() {

  const navigate = useNavigate();

  const columns: ProColumns[] = baseColumns.concat({
    title: '详情',
    dataIndex: 'operation',
    render: (_, record: any) => <Space>
      <Tooltip title={'查看详情'}>
        <Button
            type={'primary'}
            icon={<ContainerOutlined/>}
            size={'small'}
            onClick={() => navigate(`/lz/list/dynamic/${record.id}`)}
        />
      </Tooltip>
    </Space>,
    fixed: 'right',
    width: 50,
    align: 'center',
  });

  const data = [
    {
      id: 1,
      user: '王哲',
      date: '2022-03-12',
      placement: '武警大队',
      detail: '50',
    }
  ];

  return <PageContainer title={'动态跟踪'}>
    <BaseEditableTable columns={columns} value={data}/>

  </PageContainer>;
}