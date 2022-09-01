import React from 'react';
import { Button, Divider, Modal, Space, Statistic } from 'antd';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useHttp } from '../../utils/request';
import MeasureTable from '../MeasureList/MeasureTable';
import MatterInfo from './MatterInfo';
import ApprovalTable from '../../components/ApprovalTable';
import { useAuth } from '../../utils/auth';

export default function Matter() {

  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams();

  const { state, loading } = useHttp(`/matter/${id}`);
  const { http: updateHttp } = useHttp(`/matter/${id}`, { isManual: true, method: 'POST' });
  const { http: deleteHttp } = useHttp(`/matter/${id}`, { isManual: true, method: 'DELETE' });

  const editable = user.id === state.user?.id &&
      (['NONE_REVIEW', 'AWAITING_FIX'].includes(state.status) || 'AWAITING_FIX' === state.stepTwoStatus);

  const [info, setInfo] = React.useState<any>({});
  const [measure, setMeasure] = React.useState([]);
  React.useEffect(() => {
    setInfo(state);
    setMeasure(state.measure);
  }, [state]);

  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title={'序号'} value={state.id}/>
        <Statistic title={'责任主体'} value={state.department?.name}/>
      </Space>}
      loading={loading}
  >

    <Divider orientation={'left'}>问题详情</Divider>
    <MatterInfo
        dataSource={info}
        editable={editable ? {
          onSave: async (_, newInfo) => setInfo(newInfo),
        } : null}
    />

    <Divider orientation={'left'}>措施清单</Divider>
    <MeasureTable
        dataSource={measure}
        onChange={setMeasure}
        isInEdit={editable}
    />

    <>
      <Divider orientation={'left'}>审核流程</Divider>
      <ApprovalTable value={state.approval}/>
    </>

    {editable &&
    <FooterToolbar>
      {
        <Space>
          <Button
              type="primary"
              icon={<EditOutlined/>}
              onClick={() => updateHttp(null, null, {
                ...info,
                endDate: info.endDate ? moment(info.endDate).format('YYYY-MM-DD') : null,
                measure,
              }).then(() => window.location.reload())}
          >
            暂存更新
          </Button>
          <Button danger icon={<DeleteOutlined/>} onClick={() => {
            Modal.confirm({
              title: '是否删除该问题',
              icon: <ExclamationCircleOutlined/>,
              okType: 'danger',
              onOk() {
                deleteHttp().then(() => navigate('/fr/mz/list/matter'));
              },
            });
          }}
          >删除问题</Button>
        </Space>
      }

    </FooterToolbar>
    }

  </PageContainer>;

}