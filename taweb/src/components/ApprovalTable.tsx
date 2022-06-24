import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import { statusEnum } from '../utils/nameMapTa';
import BaseEditableTable from './BaseEditableTable';
import { FooterToolbar } from '@ant-design/pro-layout';
import { useHttp } from '../utils/request';
import { Button, Input, Modal, Space } from 'antd';
import { useAuth } from '../utils/auth';

export default function ApprovalTable({ value }) {

  const columns: ProColumns[] = [
    { title: '审核主体', dataIndex: ['approveUser', 'department', 'name'] },
    { title: '审核人', dataIndex: ['approveUser', 'name'] },
    { title: '审核情况', dataIndex: 'status', valueEnum: statusEnum },
    { title: '修改意见', dataIndex: 'content' },
    { title: '更新时间', dataIndex: 'updateTime', valueType: 'dateTime' },
  ];

  const { user } = useAuth();
  const { http } = useHttp('/approval', { method: 'PATCH', isManual: true });

  return <>
    <BaseEditableTable
        columns={columns}
        value={value?.step ?? []}
    />

    {value?.step?.[0]?.status === 'AWAITING_REVIEW' &&
    <FooterToolbar>
      {value?.step?.[0]?.approveUser?.id === user.id ?
          <Space>
            <Button
                danger
                onClick={() => Modal.confirm({
                  title: '审核不通过',
                  content: <>审核不通过，退回申请人重新修改。<br/><br/><Input placeholder={'修改意见'}/></>,
                })}
            >退回修改</Button>
            <Button
                type={'primary'}
                onClick={() => Modal.confirm({
                  title: '确认审核通过',
                  content: '审核完成后将自动发回申请人',
                  onOk: () => {
                    http(value.id, null, { content: null })
                    .then(() => window.location.reload());
                  },
                })}
            >审核通过</Button>
          </Space>
          :
          <Button disabled>等待审核</Button>
      }
    </FooterToolbar>
    }

  </>;
}