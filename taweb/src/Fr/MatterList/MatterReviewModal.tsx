import React from 'react';
import { FooterToolbar } from '@ant-design/pro-layout';
import { Button, Divider, Modal } from 'antd';
import MatterTable from './MatterTable';
import { matterColumns } from '../Matter/MatterInfo';
import UserSelectCascader from '../../components/UserSelectCascader';
import { useAuth } from '../../utils/auth';
import { useHttp } from '../../utils/request';

export default function MatterReviewModal({ data }) {

  const { user } = useAuth();

  const [isVisible, setIsVisible] = React.useState(false);
  const { http } = useHttp('/matter/approval', { method: 'POST', isManual: true})

  let result = data.filter(i => ['NONE_REVIEW', 'AWAITING_FIX'].includes(i.status) && i.user?.id === user?.id);
  if (result.length === 0 && user.privilege === 'DEPT') {
    result = data.filter(i => i.stepTwoStatus === 'NONE_REVIEW');
  }

  return <>
    {result.length > 0 &&
    <FooterToolbar>
      <Button type="primary" onClick={() => setIsVisible(true)}>提交审核</Button>
    </FooterToolbar>
    }

    {/* 提交审核Modal */}
    <Modal
        title="审核内容"
        visible={isVisible}
        width={1500}
        closable
        onOk={() => http().then(() => window.location.reload())}
        onCancel={() => setIsVisible(false)}
    >
      <MatterTable columns={matterColumns} value={result}/>
      <Divider dashed/>
      <p>审核人</p>
      <UserSelectCascader value={{id: user.parent?.id}} disabled />

    </Modal>
  </>;
}