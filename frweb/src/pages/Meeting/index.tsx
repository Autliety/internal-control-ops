import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Modal, Space, Statistic } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import MeetingInfo from './MeetingInfo';
import DemoFileDownload from '../../components/DemoFileDownload';
import TopicContent from '../MeetingTopic/TopicContent';
import MeetingAttendee from './MeetingAttendee';

export default function Meeting() {

  const navigate = useNavigate();
  const { id } = useParams();
  const [isVisible, setIsVisible] = React.useState(false);

  const { state, loading } = useHttp(`/meeting/${id}`);
/*
  const { http: meetingHttp } = useHttp(`/meeting/${id}?done=true`, { method: 'PATCH', isManual: true });
  const { http } = useHttp(`/matter/batch`, { method: 'PATCH', isManual: true });
*/

  const [topicContent, setTopicContent] = React.useState([]);
  React.useEffect(() => {
    setTopicContent(state.topic?.filter(t => t.status === 'REVIEWED').flatMap(t => t.content.map(c => ({content: c, user: t.user}))));
  }, [state]);

  return <PageContainer
      extra={<Space>
        {state.status === 'REVIEWED' &&
        <Button
            type={'primary'}
            onClick={() => navigate(`topic/0?create=true`)}
        >
          <FileAddOutlined />会前准备
        </Button>
        }
      </Space>
      }
      content={<Space size={'large'}>
        <Statistic title={'会议编号'} value={state.code} />
        <Statistic title={'会议类型'} value={state.type} />
      </Space>}
      loading={loading}
  >

    <Divider orientation={'left'}>会议信息</Divider>
    <MeetingInfo dataSource={state} />

    <Divider orientation={'left'}>参会人员</Divider>
    <MeetingAttendee data={state.meetingUser} isOptional />

    <Divider orientation={'left'}>列席人员</Divider>
    <MeetingAttendee data={[]} isOptional />

    <Divider orientation={'left'}>职责任务</Divider>
    <TopicContent
        isInEdit={false}
        value={topicContent}
        onChange={() => {
        }}
    />

    <Divider orientation={'left'}>相关附件</Divider>
    <DemoFileDownload />

    <FooterToolbar>
      {state.status === 'REVIEWED' &&
      <Button type={'primary'} onClick={() => setIsVisible(true)}>结束会议</Button>
      }
    </FooterToolbar>

    <Modal
        title={'确认会议职责任务'}
        closable
        visible={isVisible}
        width={1000}
        onOk={() => {
          setIsVisible(false);
        /*  http(topicContent.map(m => m.id).join(','))
          .then(() => meetingHttp()
          .then(() => window.location.reload()));*/
        }}
        onCancel={() => setIsVisible(false)}
    >
      <TopicContent
          isInEdit
          value={topicContent}
          onChange={setTopicContent}
      />
    </Modal>

  </PageContainer>;
}