import React from 'react';
import { Button, Divider, Form, Space, Statistic } from 'antd';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import TopicInfo from './TopicInfo';
import TopicTask from './TopicTask';
import { useHttp } from '../../utils/request';
import MeetingInfo from '../Meeting/MeetingInfo';
import { useAuth } from '../../utils/auth';
import ApprovalTable from '../../components/ApprovalTable';
import UserSelectCascader from '../../components/UserSelectCascader';

export default function MeetingTopic() {

  const navigate = useNavigate();
  const { user } = useAuth();

  const [search] = useSearchParams();
  let isCreate = search.get('create') === 'true';

  const { tid: id, id: meetingId } = useParams();
  const { state: meetingState } = useHttp('/meeting/' + meetingId);
  const { state } = useHttp(`/topic/${id}`, { isManual: isCreate });

  const [info, setInfo] = React.useState<any>({ user });
  const [task, setTask] = React.useState([]);
  const [approveUser, setApproveUser] = React.useState({ id: 1 });
  React.useEffect(() => {
    if (!isCreate) {
      setInfo(state);
      setTask(state.task);
    }
  }, [isCreate, state]);

  const { http } = useHttp('/topic', { method: 'POST', isManual: true });

  return <PageContainer
      content={isCreate || <Space size={'large'}>
        <Statistic title={'会议编号'} value={state.meeting?.code}/>
        <Statistic title={'责任主体'} value={state.user?.name}/>
      </Space>}
  >

    <Divider orientation={'left'}>基本信息</Divider>
    <MeetingInfo dataSource={meetingState}/>
    <br/>
    <TopicInfo data={info}/>

    <Divider orientation={'left'}>职责任务</Divider>
    <TopicTask
        value={task}
        onChange={setTask}
        isInEdit={isCreate}
    />

    <Divider orientation={'left'}>审核流程</Divider>
    {isCreate ?
        <Form.Item label="选择审核人"
                   name={['approval', 'approveUser']}
                   rules={[{ required: true, message: '请选择' }]}
        >
          <UserSelectCascader value={approveUser} onChange={setApproveUser}/>
        </Form.Item>
        :
        <ApprovalTable value={info.approval}/>
    }

    <FooterToolbar>
      {
        isCreate && <Button
            type={'primary'}
            onClick={() => http(null, null, {
              ...info,
              meeting: { id: parseInt(meetingId) },
              task,
              approval: { approveUser },
            })
            .then(res => navigate(`/fr/mz/meeting/${meetingId}/topic/${res.id}`))}
        >
          提交审核
        </Button>
      }
    </FooterToolbar>

  </PageContainer>;
}