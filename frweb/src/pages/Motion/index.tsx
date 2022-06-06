import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Space, Tooltip } from 'antd';
import { ContainerOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import BaseEditableTable from '../../components/BaseEditableTable';
import MeetingCreateModal from '../MeetingList/MeetingCreateModal';
import { meetingColumns } from '../Meeting/MeetingInfo';

export default function Motion() {

  const navigate = useNavigate();

  const columns = meetingColumns.concat({
    hideInSearch: true,
    dataIndex: 'operation',
    render: (_, record: any) => <Space>
      <Tooltip title={'会议通知'}>
        <Button
            type={'primary'}
            icon={<MailOutlined/>}
            size={'small'}
            onClick={() => navigate(`/mz/meeting/${record.id}/notice`)}
        />
      </Tooltip>
      <Tooltip title={'会议详情'}>
        <Button
            type={'primary'}
            disabled={record.status === 'AWAITING_REVIEW'}
            icon={<ContainerOutlined/>}
            size={'small'}
            onClick={() => navigate(`/mz/meeting/${record.id}`)}
        />
      </Tooltip>
    </Space>,
    fixed: 'right',
    width: 60,
    align: 'center',
  });

  return <PageContainer
      extra={<Space size={'large'}>
        <MeetingCreateModal typesLimit={3} isMotion={false}/>
      </Space>}
  >
    <BaseEditableTable
        columns={columns}
        value={[]}
        isSearch
    />
  </PageContainer>;
}