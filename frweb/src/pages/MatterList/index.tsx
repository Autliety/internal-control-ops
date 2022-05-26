import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Space, Tooltip } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import { matterColumns } from '../Matter/MatterInfo';
import BaseEditableTable from '../../components/BaseEditableTable';
import MatterCreateModal from './MatterCreateModal';

export default function MatterList() {

  const navigate = useNavigate();
  const { state, loading } = useHttp('/matter', { initState: [] });

  const columns = matterColumns.concat([
    {
      hideInSearch:true,
      dataIndex: 'operation',
      render: (_, record: any) => <Space>
        <Tooltip title={'查看详情'}>
          <Button
              type={'primary'}
              icon={<ContainerOutlined />}
              size={'small'}
              onClick={() => navigate(`/mz/list/matter/${record.id}`)}
          />
        </Tooltip>
      </Space>,
      fixed: 'right',
      width: 50,
      align: 'center',
    },
  ]);

  return <PageContainer
      title={'问题清单'}
      extra={
        <Space size={'middle'}>
          <MatterCreateModal />
        </Space>
      }
  >

    <BaseEditableTable
        loading={loading}
        columns={columns}
        value={state}
        isSearch
    />
  </PageContainer>;
}