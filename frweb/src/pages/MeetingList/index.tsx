import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Input, Select, Space, Tooltip } from 'antd';
import { ContainerOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { meetingColumns } from '../Meeting/MeetingInfo';
import { useHttp } from '../../utils/request';
import BaseTable from '../../components/BaseTable';
import MeetingCreateModal from './MeetingCreateModal';

export default function MeetingList() {

  const navigate = useNavigate();
  const { state, loading } = useHttp('/meeting', { initState: [] });

  const columns = meetingColumns.concat({
    dataIndex: 'operation',
    render: (_, record: any) => <Space>
      <Tooltip title={'会议通知'}>
        <Button
            type={'primary'}
            icon={<MailOutlined />}
            size={'small'}
            onClick={() => navigate(`/meeting/${record.id}/notice`)}
        />
      </Tooltip>
      <Tooltip title={'会议详情'}>
        <Button
            type={'primary'}
            disabled={record.status === 'AWAITING_REVIEW'}
            icon={<ContainerOutlined />}
            size={'small'}
            onClick={() => navigate(`/meeting/${record.id}`)}
        />
      </Tooltip>
    </Space>,
    fixed: 'right',
    width: 60,
    align: 'center',
  });

  return <PageContainer
      title={'"1+X"四方会议'}
      extra={<Space size={'middle'}>
        <MeetingCreateModal />
      </Space>}
  >
    <Space>
      <Select defaultValue={0} dropdownMatchSelectWidth={100}>
        <Select.Option value={0}>全部</Select.Option>
        <Select.Option value={1}>"1"专题会议</Select.Option>
        <Select.Option value={2}>"X"专题会议</Select.Option>
      </Select>
      <Input.Search placeholder={'搜索'} enterButton />
    </Space>

    <Divider />
    <BaseTable
        loading={loading}
        columns={columns}
        dataSource={state}
    />

  </PageContainer>;
}