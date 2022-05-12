import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Modal, Space, Statistic } from 'antd';
import { ArrowLeftOutlined, FileAddOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import MeetingInfo from './MeetingInfo';
import DemoFileDownload from '../../components/DemoFileDownload';
import TopicContent from '../MeetingTopic/TopicContent';
import TopicMatter from '../MeetingTopic/TopicMatter';
import MeetingAttendee from './MeetingAttendee';

export default function Meeting() {

  const navigate = useNavigate();
  const { id } = useParams();
  const [isVisible, setIsVisible] = React.useState(false);

  const { state, loading } = useHttp(`/meeting/${id}`);
  const { http: meetingHttp } = useHttp(`/meeting/${id}?done=true`, { method: 'PATCH', isManual: true });
  const { http } = useHttp(`/matter/batch`, { method: 'PATCH', isManual: true });

  const [matterData, setMatterData] = React.useState([]);
  React.useEffect(() => {
    setMatterData(state.topic?.filter(t => t.status === 'REVIEWED').flatMap(t => t.matter).map(v => v));
  }, [state]);

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)} /> 会议详情</>}
      extra={<Space>
        <Button
            type={'primary'}
            onClick={() => navigate(`/meeting/${state.id}/topic/0?create=true`)}
        >
          <FileAddOutlined />添加议题
        </Button>
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

    <Divider orientation={'left'}>会议议题</Divider>
    <TopicContent
        isEdit={false}
        data={state.topic?.filter(t => t.status === 'REVIEWED').flatMap(t => t.content.map(c => ({content: c, user: t.user})))}
        onChange={() => {
        }}
    />

    <br />
    <TopicMatter
        isEdit={false}
        data={state.topic?.filter(t => t.status === 'REVIEWED').flatMap(t => t.matter)}
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
        title={'请确认会议结果问题清单'}
        closable
        visible={isVisible}
        width={1000}
        onOk={() => {
          setIsVisible(false);
          http(matterData.map(m => m.id).join(','))
          .then(() => meetingHttp()
          .then(() => window.location.reload()));
        }}
        onCancel={() => setIsVisible(false)}
    >
      <TopicMatter
          isEdit
          data={matterData}
          onChange={setMatterData}
      />
    </Modal>

  </PageContainer>;
}