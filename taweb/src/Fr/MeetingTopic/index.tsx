import React from 'react';
import { Divider, Space, Statistic } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';

import TopicInfo from './TopicInfo';
import TopicTask from './TopicTask';
import { useHttp } from '../../utils/request';
import MeetingInfo from '../Meeting/MeetingInfo';
import { useAuth } from '../../utils/auth';
import ApprovalTable from '../../components/ApprovalTable';
import ApprovalFooterToolbar from '../../components/ApprovalFooterToolbar';

export default function MeetingTopic() {

  const { tid: id, id: meetingId } = useParams();
  const { user } = useAuth();

  const { state: meetingState } = useHttp('/meeting/' + meetingId);
  const { state } = useHttp(`/topic/${id}`);
  const { http } = useHttp('/topic/' + id, { method: 'POST', isManual: true });
  let editable = ['NONE_REVIEW', 'AWAITING_FIX'].includes(state.status) && state.user?.id === user.id;

  const [task, setTask] = React.useState([]);
  React.useEffect(() => {
    setTask(state.task);
  }, [state, meetingState]);


  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title={'会议编号'} value={state.meeting?.code}/>
        <Statistic title={'参会人员'} value={state.user?.name}/>
      </Space>}
  >

    <Divider orientation={'left'}>基本信息</Divider>
    <MeetingInfo dataSource={meetingState}/>
    <br/>
    <TopicInfo data={state}/>

    <Divider orientation={'left'}>职责任务</Divider>
    <TopicTask
        value={task}
        onChange={setTask}
        isInEdit={editable}
    />

    <ApprovalTable value={state.approval}/>

    <ApprovalFooterToolbar
        value={state.approval}
        onSave={() => http(null, null, { ...state, task})}
        defaultConfig={{ disabled: true }}
    />

  </PageContainer>;
}