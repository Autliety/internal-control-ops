import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Space, Tooltip } from 'antd';
import { ContainerOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { meetingColumns } from '../Meeting/MeetingInfo';
import { useHttp } from '../../utils/request';
import MeetingCreateModal from './MeetingCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function MeetingList() {

  const navigate = useNavigate();
  const { state, loading } = useHttp('/meeting', { initState: [] });

  const columns = meetingColumns.concat({
    hideInSearch: true,
    dataIndex: 'operation',
    render: (_, record: any) => <Space>
      <Tooltip title={'会议通知'}>
        <Button
            type={'primary'}
            icon={<MailOutlined />}
            size={'small'}
            onClick={() => navigate(`/fr/mz/meeting/${record.id}/notice`)}
        />
      </Tooltip>
      <Tooltip title={'会议详情'}>
        <Button
            type={'primary'}
            disabled={record.status === 'AWAITING_REVIEW'}
            icon={<ContainerOutlined />}
            size={'small'}
            onClick={() => navigate(`/fr/mz/meeting/${record.id}`)}
        />
      </Tooltip>
    </Space>,
    fixed: 'right',
    width: 60,
    align: 'center',
  });

  return <PageContainer
      extra={<Space size={'middle'}>
        <MeetingCreateModal />
      </Space>}
  >

    <BaseEditableTable
        loading={loading}
        columns={columns}
        value={state}
        isSearch
    />

  </PageContainer>;
}