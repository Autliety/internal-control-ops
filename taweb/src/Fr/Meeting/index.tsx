import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Modal, Space, Statistic } from 'antd';
import { AuditOutlined, FileAddOutlined, PauseOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import MeetingInfo from './MeetingInfo';
import TopicTask from '../MeetingTopic/TopicTask';
import MeetingAttendee from './MeetingAttendee';
import { useAuth } from '../../utils/auth';
import FileUpload from '../../components/FileUpload';
import UserSelectCascader from '../../components/UserSelectCascader';
import BaseDivider from '../../components/BaseDivider';
import ApprovalTable from '../../components/ApprovalTable';
import AttendeeSelectCard from '../MeetingList/AttendeeSelectCard';
import MeetingFoterToolbar from './MeetingFoterToolbar';

export default function Meeting() {

  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = React.useState(false);

  const { state, loading } = useHttp(`/meeting/${id}`);

  const [tasks, setTasks] = React.useState([]);
  const [myTopic, setMyTopic] = React.useState(null);
  React.useEffect(() => {
    setTasks(state.topic?.filter(t => t.status === 'REVIEWED').flatMap(t => t.task?.map(ta => ({ topic: t, ...ta }))));
    setMyTopic(state.topic?.find(t => t.user?.id === user.id)?.id);
  }, [state]);

  const { http } = useHttp('/topic/task', { isManual: true, method: 'POST' });
  const { http: meetingHttp } = useHttp(`/meeting/${id}`, { isManual: true, method: 'PATCH' });

  // 会议审核
  const [approval, setApproval] = React.useState({ approvalUser: 1, copyUser: 28 });

  // 编辑
  const isUpdate = ['NONE_REVIEW', 'AWAITING_FIX'].includes(state.status) && state.user?.id === user.id;
  const [meetingUser, setMeetingUser] = React.useState([]);
  const [info, setInfo] = React.useState({});
  const [subUser, setSubUser] = React.useState([]);
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
          ? <div className='content'>
            <AttendeeSelectCard value={meetingUser} onChange={setMeetingUser}/>
          </div>
          : <MeetingAttendee data={meetingUser} isOptional={false}/>
    }

    <Divider orientation={'left'}>列席人员</Divider>
    {
      isUpdate
          ? <div className='content'>
            <AttendeeSelectCard value={subUser} onChange={setSubUser}/>
          </div>
          : <MeetingAttendee data={subUser} isOptional/>
    }

    <Divider orientation={'left'}>职责任务</Divider>
    <TopicTask
        isInEdit={false}
        value={tasks}
        onChange={() => {
        }}
    />

    <Divider orientation={'left'}>上传附件</Divider>
    <FileUpload value={state.attach || []}/>

    <BaseDivider title={'审核流程'}/>
    <ApprovalTable value={state.approval}/>

    <MeetingFoterToolbar
        value={state.approval}
        onSave={() => meetingHttp(null, null, {
          ...info,
          meetingUser: meetingUser,
          subUser: subUser
        })}
    />

    {state.status === 'NONE_REVIEW' &&
        <FooterToolbar>
          <Space>
            <Button
                type={'primary'}
                disabled={!state.meetingUser.find(u => u.id === user.id)}
                onClick={() => navigate(`/fr/mz/meeting/${id}/topic/${myTopic || '0?create=true'}`)}
            >
              <FileAddOutlined/>会前准备
            </Button>
            <Button
                type='primary'
                disabled={state.user?.id !== user.id}
                onClick={() => setIsVisible(true)}
            >
              <AuditOutlined/>提交审核
            </Button>
          </Space>
        </FooterToolbar>
    }

    {state.status === 'REVIEWED' &&
        <FooterToolbar>
          <Button
              type={'primary'}
              disabled={user.id !== state.user.id}
              onClick={() => setIsVisible(true)}
          >
            <PauseOutlined/>结束会议
          </Button>
        </FooterToolbar>
    }

    <Modal
        title={state.status === 'NONE_REVIEW' ? '会议审批' : '确认会议职责任务'}
        closable
        visible={isVisible}
        width={1000}
        onOk={
          () => {
            setIsVisible(false);
            {
              state.status === 'NONE_REVIEW'
                  ? meetingHttp(null, null, { ...approval, status: 'AWAITING_REVIEW' })
                      .then(() => window.location.reload())
                  : http(null, null, tasks)
                      .then(() => meetingHttp(null, null, { status: 'FINISHED' }))
                      .then(() => window.location.reload());
            }
          }
        }
        onCancel={() => setIsVisible(false)}
    >
      {
        state.status === 'NONE_REVIEW'
            ? <>
              <p>审核人</p>
              <UserSelectCascader value={{id: user.parent?.id ?? 1}} disabled onChange={v => setApproval({ ...approval, approvalUser: v.id })}/>
              <Divider dashed/>
              <p>抄送</p>
              <UserSelectCascader
                  value={{ id: 28 }}
                  disabled
                  onChange={v => setApproval({ ...approval, copyUser: v.id })}
              />
            </>
            : <TopicTask
                withMatter
                isInEdit
                value={tasks}
                onChange={setTasks}
            />
      }
    </Modal>

  </PageContainer>;
}