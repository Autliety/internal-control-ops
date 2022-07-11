import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Modal, Space, Statistic } from 'antd';
import { FileAddOutlined, PauseOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import MeetingInfo from './MeetingInfo';
import TopicTask from '../MeetingTopic/TopicTask';
import MeetingAttendee from './MeetingAttendee';
import { useAuth } from '../../utils/auth';
import FileUpload from '../../components/FileUpload';

export default function Meeting() {

  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isVisible, setIsVisible] = React.useState(false);

  const { state, loading } = useHttp(`/meeting/${id}`);

  const [tasks, setTasks] = React.useState([]);
  React.useEffect(() => {
    setTasks(state.topic?.filter(t => t.status === 'REVIEWED').flatMap(t => t.task?.map(ta => ({ topic: t, ...ta }))));
  }, [state]);

  const { http } = useHttp('/topic/task', { isManual: true, method: 'POST' });
  const { http: meetingHttp } = useHttp(`/meeting/${id}`, { isManual: true, method: 'PATCH' });

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
      {state.status === 'REVIEWED' && <Space>
        <Button
            type={'primary'}
            disabled={!state.meetingUser.find(u => u.id === user.id)}
            onClick={() => navigate(`/fr/mz/meeting/${id}/topic/0?create=true`)}
        >
          <FileAddOutlined/>会前准备
        </Button>
        <Button
            type={'primary'}
            disabled={user.id !== state.user.id}
            onClick={() => setIsVisible(true)}
        >
          <PauseOutlined/>结束会议
        </Button>
      </Space>
      }
    </FooterToolbar>

    <Modal
        title={'确认会议职责任务'}
        closable
        visible={isVisible}
        width={1000}
        onOk={() => {
          setIsVisible(false);
          http(null, null, tasks)
          .then(() => meetingHttp(null, null, { status: 'FINISHED' }))
          .then(() => window.location.reload());
        }}
        onCancel={() => setIsVisible(false)}
    >
      <TopicTask
          withMatter
          isInEdit
          value={tasks}
          onChange={setTasks}
      />
    </Modal>

  </PageContainer>;
}