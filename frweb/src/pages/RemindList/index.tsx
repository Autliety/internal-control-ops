import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import RemindCreateModal from './RemindCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';

export const baseColumns: ProColumns[] = [
  { title: '提醒时间', dataIndex: 'time' },
  { title: '提醒人', dataIndex: 'user' },
  { title: '提醒人类别', dataIndex: 'userType' },
  { title: '被提醒人类别', dataIndex: 'type' },
  { title: '提醒内容', dataIndex: 'content' },
  { title: '提醒方式', dataIndex: 'way' },
  { title: '情况反馈', dataIndex: 'feedback' },
];

function RemindList() {

  const navigate = useNavigate();

  return <PageContainer
      extra={
        <Space>
          <RemindCreateModal/>
        </Space>
      }
  >
    <BaseEditableTable
        columns={baseColumns.slice(0, 4).concat({
          title: '详情',
          hideInSearch: true,
          dataIndex: 'operation',
          render: (_, record: any) => <Tooltip title={'查看详情'}><Button
              type={'primary'}
              icon={<FileTextOutlined/>}
              size={'small'}
              onClick={() => navigate(`/lz/remind/${record.id}`)}
          />
          </Tooltip>,
          fixed: 'right',
          width: 120,
          align: 'center',
        })}
        value={[]}
    />
  </PageContainer>;
}

export default RemindList;