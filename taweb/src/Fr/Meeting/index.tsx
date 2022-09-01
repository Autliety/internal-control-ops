import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Modal, Space, Statistic } from 'antd';
import { ExclamationCircleOutlined, FileAddOutlined, PauseOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import MeetingInfo from './MeetingInfo';
import TopicTask from '../MeetingTopic/TopicTask';
import MeetingAttendee from './MeetingAttendee';
import { useAuth } from '../../utils/auth';
import FileUpload from '../../components/FileUpload';
import ApprovalTable from '../../components/ApprovalTable';
import AttendeeSelectCard from '../MeetingList/AttendeeSelectCard';
import ApprovalFooterToolbar from '../../components/ApprovalFooterToolbar';
import moment from 'moment';

export default function Meeting() {

  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const { state, loading } = useHttp(`/meeting/${id}`);
  let myTopicId = state.topic?.find(t => t.user?.id === user.id)?.id;

  const { http: meetingUpdate } = useHttp(`/meeting/${id}`, { isManual: true, method: 'POST' });
  const { http: topicCreate } = useHttp('/topic', { isManual: true, method: 'POST' });

  // 编辑
  const isUpdate = ['NONE_REVIEW', 'AWAITING_FIX'].includes(state.status) && state.user?.id === user.id;

  const [info, setInfo] = React.useState<any>({});
  const [meetingUser, setMeetingUser] = React.useState([]);
  const [subUser, setSubUser] = React.useState([]);

  const onSave = () => meetingUpdate(null, null, {
    ...info,
    startTime: moment(info.startTime).valueOf(),
    meetingUser: meetingUser,
    subUser: subUser,
  });

  React.useEffect(() => {
    setMeetingUser(state.meetingUser);
    setSubUser(state.subUser);
    setInfo(state);
  }, [state]);

  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title={'会议编号'} value={state.code}/>
        <Statistic title={'会议类型'} value={state.type}/>
      </Space>}
      loading={loading}
  >

    <Divider orientation={'left'}>会议信息</Divider>
    <MeetingInfo
        dataSource={info}
        editable={isUpdate ? {
          onSave: async (_, newInfo) => setInfo(newInfo),
        } : null}
    />

    <Divider orientation={'left'}>参会人员</Divider>
    {
      isUpdate
          ? <div className="content">
            <AttendeeSelectCard value={meetingUser} onChange={setMeetingUser}/>
          </div>
          : <MeetingAttendee data={meetingUser} isOptional={false}/>
    }

    <Divider orientation={'left'}>列席人员</Divider>
    {
      isUpdate
          ? <div className="content">
            <AttendeeSelectCard value={subUser} onChange={setSubUser}/>
          </div>
          : <MeetingAttendee data={subUser} isOptional/>
    }

    <Divider orientation={'left'}>职责任务</Divider>
    <TopicTask
        isInEdit={false}
        value={state.topic?.filter(t => t.status === 'REVIEWED').flatMap(t => t.task?.map(ta => ({ topic: t, ...ta })))}
    />

    <Divider orientation={'left'}>上传附件</Divider>
    <FileUpload value={state.attach || []}/>

    <ApprovalTable value={state.approval}/>

    <ApprovalFooterToolbar
        value={state.approval}
        onSave={onSave}
        extraButton={{
          noneReview: <Button
              type={'primary'}
              disabled={!state.meetingUser?.find(u => u.id === user.id)}
              onClick={() => myTopicId ?
                  navigate(`/fr/mz/meeting/${id}/topic/${myTopicId}`)
                  :
                  topicCreate(null, null, { meeting: { id } })
                  .then(data => navigate(`/fr/mz/meeting/${id}/topic/${data.id}`))
              }
          >
            <FileAddOutlined/>会前准备
          </Button>,
          reviewed: <Button
              type={'primary'}
              disabled={user.id !== state.user?.id}
              onClick={() => Modal.confirm({
                title: '是否结束并关闭该会议',
                icon: <ExclamationCircleOutlined/>,
                onOk() {
                  meetingUpdate(null, null, { ...state, status: 'FINISHED' }).then(() => window.location.reload());
                },
              })}
          >
            <PauseOutlined/>结束会议
          </Button>,
        }}
        defaultConfig={{
          disabled: true,
        }}
    />

  </PageContainer>;
}