import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Modal, Space, Statistic } from 'antd';
import { AuditOutlined, PauseOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import MeetingInfo from './MeetingInfo';
import TopicTask from '../MeetingTopic/TopicTask';
import MeetingAttendee from './MeetingAttendee';
import { useAuth } from '../../utils/auth';
import FileUpload from '../../components/FileUpload';
import UserSelectCascader from '../../components/UserSelectCascader';

export default function Meeting() {

  const { user } = useAuth();
  const { id } = useParams();
  const [isVisible, setIsVisible] = React.useState(false);

  const { state, loading } = useHttp(`/meeting/${id}`);

  const [tasks, setTasks] = React.useState([]);
  React.useEffect(() => {
    setTasks(state.topic?.filter(t => t.status === 'REVIEWED').flatMap(t => t.task?.map(ta => ({ topic: t, ...ta }))));
  }, [state]);

  const { http } = useHttp('/topic/task', { isManual: true, method: 'POST' });
  const { http: meetingHttp } = useHttp(`/meeting/${id}`, { isManual: true, method: 'PATCH' });

  // 会议审核
  const [approval, setApproval] = React.useState({ approvalUser: 1, copyUser: 28 });

  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title={'会议编号'} value={state.code}/>
        <Statistic title={'会议类型'} value={state.type}/>
      </Space>}
      loading={loading}
  >

    <Divider orientation={'left'}>会议信息</Divider>
    <MeetingInfo dataSource={state}/>

    <Divider orientation={'left'}>参会人员</Divider>
    <MeetingAttendee data={state.meetingUser} isOptional={false}/>

    <Divider orientation={'left'}>列席人员</Divider>
    <MeetingAttendee data={state.subUser} isOptional/>

    <Divider orientation={'left'}>职责任务</Divider>
    <TopicTask
        isInEdit={false}
        value={tasks}
        onChange={() => {
        }}
    />

    <Divider orientation={'left'}>相关附件</Divider>
    <FileUpload value={state.attach || []}/>

    <FooterToolbar>
      {
          (state.user?.id === user.id && state.status === 'NONE_REVIEW')
          && <Button type='primary' onClick={() => setIsVisible(true)}>
            <AuditOutlined/>提交审核
          </Button>
      }

      {state.status === 'REVIEWED' && <Button
          type={'primary'}
          // disabled={user.id !== state.user.id}
          onClick={() => setIsVisible(true)}
      >
        <PauseOutlined/>结束会议
      </Button>}
    </FooterToolbar>

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
                      .then(() => window.location.reload())
            }
          }
        }
        onCancel={() => setIsVisible(false)}
    >
      {
        state.status === 'NONE_REVIEW'
            ? <>
              <p>审核人</p>
              <UserSelectCascader value={{ id: 1 }} onChange={v => setApproval({ ...approval, approvalUser: v.id })}/>
              <Divider dashed/>
              <p>抄送</p>
              <UserSelectCascader
                  value={{ id: 28 }}
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