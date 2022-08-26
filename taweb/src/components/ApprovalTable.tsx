import React from 'react';
import moment from 'moment';
import { Button, Input, Modal, Space } from 'antd';
import { ProColumns } from '@ant-design/pro-table';
import { statusEnum } from '../utils/nameMapTa';
import BaseEditableTable from './BaseEditableTable';
import { FooterToolbar } from '@ant-design/pro-layout';
import { useHttp } from '../utils/request';
import { useAuth } from '../utils/auth';
import UserSelectCascader from './UserSelectCascader';
import { useBoolean } from 'ahooks';
import { InfoCircleTwoTone } from '@ant-design/icons';

type Props = {
  value: any,
  onSave?: () => {},
}

export default function ApprovalTable({ value, onSave }: Props) {

  const columns: ProColumns[] = [
    { title: '审核主体', dataIndex: ['approveUser', 'department', 'name'] },
    { title: '审核人', dataIndex: ['approveUser', 'name'] },
    { title: '审核情况', dataIndex: 'status', valueEnum: statusEnum },
    { title: '修改意见', dataIndex: 'content' },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      renderText: t => moment(t).format('YYYY-MM-DD HH:mm'),
    },
  ];

  const { user } = useAuth();
  const { http } = useHttp('/approval', { method: 'PATCH', isManual: true });

  const [isOpen, { setTrue: open, setFalse: close }] = useBoolean(false);
  const [message, setMessage] = React.useState<string>('');

  return <>
    <BaseEditableTable
        columns={columns}
        value={value?.step ?? []}
    />

    {value?.status === 'AWAITING_REVIEW' &&
    <FooterToolbar>
      {value?.approveUser?.id === user?.id ?
          <Space>
            <Button
                danger
                onClick={open}
            >退回修改</Button>
            <Button
                type={'primary'}
                onClick={() => Modal.confirm({
                  title: '确认审核通过',
                  content: '审核完成后将自动发回申请人',
                  onOk: () =>
                      http(value.id, null, { status: 'REVIEWED', content: null })
                      .then(() => window.location.reload()),
                })}
            >审核通过</Button>
          </Space>
          :
          <Button disabled>等待审核</Button>
      }
    </FooterToolbar>
    }

    {value?.status === 'AWAITING_FIX' &&
    <FooterToolbar>
      {value?.requestUser?.id === user?.id ?
          <Space>
            <Button
                disabled={!onSave}
                onClick={() => onSave()}
            />
            <Button
                type={'primary'}
                onClick={() => Modal.confirm({
                  title: '确认提交审核',
                  content: <>审核人：<UserSelectCascader disabled value={value.approveUser}/></>,
                  onOk: () =>
                      http(value.id, null, { status: 'FIXED', content: null })
                      .then(() => window.location.reload()),
                })}
            >重新提交</Button>
          </Space>
          :
          <Button disabled>等待退回修改</Button>
      }
    </FooterToolbar>
    }

    <Modal
        visible={isOpen}
        width={800}
        onCancel={close}
        onOk={() => http(value.id, null, { status: 'REVIEW_DENIED', content: message })
        .then(() => window.location.reload())}
    >
      <InfoCircleTwoTone twoToneColor={'red'}/> 审核不通过，退回申请人重新修改
      <br/><br/>
      <Input.TextArea placeholder={'修改意见'} onChange={e => setMessage(e.target.value)}/>
    </Modal>


  </>;
}