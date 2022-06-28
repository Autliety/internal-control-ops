import React from 'react';
import { Button, Divider, Modal, Space } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import BaseEditableTable from '../../components/BaseEditableTable';
import { detailColumns } from '../Plan/PlanDetailTable';
import UserSelectCascader from '../../components/UserSelectCascader';
import { useHttp } from '../../utils/request';
import { useAuth } from '../../utils/auth';
import { useNavigate, useParams } from 'react-router-dom';

export default function PlanCreateModal({ title = '制定计划' }) {

  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  const [isVisible, setIsVisible] = React.useState(false);
  const [detailData, setDetailData] = React.useState([]);
  const [approveId,setApproveId] = React.useState(0);
  const { http } = useHttp('/plan', { method: 'POST', isManual: true });

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusCircleOutlined/>{title}</Button>

    <Modal
        width={1400}
        title={title}
        visible={isVisible}
        closable
        onCancel={() => setIsVisible(false)}
        onOk={() => http(null, null, {
          assessment: { id },
          user,
          department: user.department,
          detail: detailData,
          approval: {approveUser:{id:approveId}},
        }).then(res => navigate(`/ta/plan/${res.id}`))}
    >
      <Space size={'large'}>
        计划负责人:
        <UserSelectCascader value={user} disabled/>
        审批人:
        <UserSelectCascader onChange={v=>setApproveId(v.id)}/>

      </Space>
      <Divider />

      <BaseEditableTable
          columns={detailColumns}
          isInEdit
          value={detailData}
          onChange={setDetailData}
      />

    </Modal>
  </>;
}