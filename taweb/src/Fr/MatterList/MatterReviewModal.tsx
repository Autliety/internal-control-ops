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
  const [checker, setChecker] = React.useState({id: 1});
  const { http } = useHttp('/matter/approval', { method: 'POST', isManual: true})

  const result = data.filter(i => i.status === 'NONE_REVIEW').filter(i => i.user?.id === user?.id);

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
        // todo api
        onOk={() => http().then(() => window.location.reload())}
        onCancel={() => setIsVisible(false)}
    >
      <MatterTable columns={matterColumns} value={result}/>
      <Divider dashed/>
      <p>审核人</p>
      <UserSelectCascader value={checker} onChange={v => setChecker(v)}/>

    </Modal>
  </>;
}