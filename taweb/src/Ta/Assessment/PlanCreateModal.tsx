import React from 'react';
import { Button, Cascader, Divider, message, Modal, Space } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import BaseEditableTable from '../../components/BaseEditableTable';
import { detailColumns } from '../Plan/PlanDetailTable';
import UserSelectCascader from '../../components/UserSelectCascader';
import { useHttp } from '../../utils/request';
import { useAuth } from '../../utils/auth';

export default function PlanCreateModal({ title = '制定计划', isSelectAssessment = false }) {

  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  const [isVisible, setIsVisible] = React.useState(false);
  const [detailData, setDetailData] = React.useState([]);
  const [approveId, setApproveId] = React.useState<number>(0);
  const [assessmentId, setAssessmentId] = React.useState<number>(0);

  const { state } = useHttp('/assessment?plan=false', { initState: [] });
  const { http } = useHttp('/plan', { method: 'POST', isManual: true });

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusCircleOutlined/>{title}</Button>

    <Modal
        width={1500}
        title={title}
        visible={isVisible}
        closable
        onCancel={() => setIsVisible(false)}
        onOk={() => {
          if (approveId > 0) {
            http(null, null, {
              assessment: isSelectAssessment ? { id: assessmentId } : { id },
              user,
              department: user.department,
              detail: detailData,
              approval: { approveUser: { id: approveId } },
            })
            .then(res => navigate(`/ta/plan/${res.id}`));
          } else {
            message.warning('请选择审核人');
          }
        }}
    >
      <Space size={'large'}>
        {
          isSelectAssessment && <>
            选择指标：
            <Cascader
                dropdownMenuColumnStyle={{ width: 400, overflow: 'hidden' }}
                fieldNames={{ label: 'name', value: 'id' }}
                options={state}
                placeholder="请选择"
                onChange={v => setAssessmentId(v.at(-1))}
            />
          </>
        }
        计划负责人:
        <UserSelectCascader value={user} disabled/>
        审批人:
        <UserSelectCascader onChange={v => setApproveId(v.id)}/>
      </Space>
      <Divider/>

      <BaseEditableTable
          columns={detailColumns}
          isInEdit
          value={detailData}
          onChange={setDetailData}
      />

    </Modal>
  </>;
};