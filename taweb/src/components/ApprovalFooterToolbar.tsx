import React, { ReactNode } from 'react';
import { FooterToolbar } from '@ant-design/pro-layout';
import { Button, Divider, Input, message, Modal, Space } from 'antd';
import UserSelectCascader from './UserSelectCascader';
import { useAuth } from '../utils/auth';
import { useHttp } from '../utils/request';
import {
  AuditOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
  SaveOutlined,
} from '@ant-design/icons';

type Props = {
  value: any,
  onSave?: () => Promise<any>,
  extraButton?: {
    noneReview?: ReactNode,
    awaitingFix?: ReactNode,
    reviewed?: ReactNode,
  },
  defaultConfig?: {
    disabled?: boolean,
    approveUser?: { id: number },
  }
}

function ApprovalFooterToolbar({ value, onSave, extraButton, defaultConfig }: Props) {

  const { user } = useAuth();
  const { http } = useHttp('/approval', { method: 'PATCH', isManual: true });

  const [reason, setReason] = React.useState<string>('');
  const [modalOnPage, setModalOnPage] = React.useState<number>(0);

  const modalOption = {
    1: {
      title: '确认提交审核',
      icon: <InfoCircleOutlined style={{color: 'orange'}}/>,
      remark: '确认单据填写完成，并提交审核',
      extra: <>审核人：<UserSelectCascader
          disabled={defaultConfig?.disabled}
          value={value?.approveUser || defaultConfig?.approveUser || {id: 1}}
      /></>,
      onOk: async () => {
        if (onSave) await onSave();
        await http(value.id, null, { status: 'AWAITING_REVIEW', content: null });
        window.location.reload();
      }
    },
    2: {
      title: '确认审核退回',
      icon: <CloseCircleOutlined style={{color: 'red'}}/>,
      remark: '审核不通过，退回申请人重新修改。',
      extra: <Input.TextArea placeholder={'修改意见'} onChange={e => setReason(e.target.value)}/>,
      onOk: () =>
          http(value.id, null, { status: 'REVIEW_DENIED', content: reason })
          .then(() => window.location.reload()),
    },
    3: {
      title: '确认审核通过',
      icon: <CheckCircleOutlined style={{color: 'green'}}/>,
      remark: '审核完成后将自动发回申请人',
      onOk: () =>
          http(value.id, null, { status: 'REVIEWED', content: null })
          .then(() => window.location.reload()),
    },
    4: {
      title: '重新提交审核',
      icon: <InfoCircleOutlined style={{color: 'orange'}}/>,
      remark: '确认修改完成，重新提交审核',
      extra: <>审核人：<UserSelectCascader disabled value={value?.approveUser}/></>,
      onOk: async () => {
        if (onSave) await onSave();
        await http(value.id, null, { status: 'FIXED', content: null });
        window.location.reload();
      },
    },
  }[modalOnPage];

  return <>
    {value?.status === 'NONE_REVIEW' &&
    <FooterToolbar>
      {value?.requestUser?.id === user?.id ?
          <Space>
            {extraButton?.noneReview}
            <Button
                disabled={!onSave}
                onClick={() => onSave().then(() => message.success('已保存'))}
            >
              <SaveOutlined/>暂存更新
            </Button>
            <Button
                type={'primary'}
                onClick={() => setModalOnPage(1)}
            >
              <AuditOutlined/>提交审核
            </Button>
          </Space>
          : <Button disabled>等待提交审核</Button>
      }
    </FooterToolbar>
    }

    {value?.status === 'AWAITING_REVIEW' &&
    <FooterToolbar>
      {value?.approveUser?.id === user?.id ?
          <Space>
            <Button
                danger
                onClick={() => setModalOnPage(2)}
            >
              <CloseCircleOutlined/>退回修改
            </Button>
            <Button
                type={'primary'}
                onClick={() => setModalOnPage(3)}
            >
              <CheckCircleOutlined/>审核通过
            </Button>
          </Space>
          :
          <Button disabled>等待审核通过</Button>
      }
    </FooterToolbar>
    }

    {value?.status === 'AWAITING_FIX' &&
    <FooterToolbar>
      {value?.requestUser?.id === user?.id ?
          <Space>
            {extraButton?.awaitingFix || extraButton?.noneReview}
            <Button
                disabled={!onSave}
                onClick={() => onSave().then(() => message.success('保存成功！'))}
            >
              <SaveOutlined/>暂存更新
            </Button>
            <Button
                type={'primary'}
                onClick={() => setModalOnPage(4)}
            >
              <AuditOutlined/>重新提交
            </Button>
          </Space>
          : <Button disabled>等待提交审核</Button>
      }
    </FooterToolbar>
    }

    {value?.status === 'REVIEWED' &&
    <FooterToolbar>
          <Space>
            {extraButton?.reviewed}
            <Button
                type={'dashed'}
                danger
                // todo disabled={value?.approveUser?.id === user?.id}
                disabled
                onClick={() => setModalOnPage(5)}
            >
              <DeleteOutlined/>单据作废
            </Button>
          </Space>
    </FooterToolbar>
    }

    <Modal
        visible={!!modalOnPage}
        destroyOnClose

        title={modalOption?.title}
        width={1000}
        onOk={() => {
          modalOption?.onOk();
          setModalOnPage(0);
        }}
        onCancel={() => setModalOnPage(0)}
    >
      {modalOption?.icon}  {modalOption?.remark}
      {!modalOption?.extra || <Divider/>}
      {modalOption?.extra}
    </Modal>
  </>;
}

export default ApprovalFooterToolbar;