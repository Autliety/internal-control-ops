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
  // 确认参会人员
  const [attendeeId, setAttendeeId] = React.useState([]);

  const { state, loading } = useHttp(`/meeting/${id}`);

  const [matterData, setMatterData] = React.useState([]);
  React.useEffect(() => {
    setMatterData(state.topic?.filter(t => t.status === 'REVIEWED').flatMap(t => t.matter).map(v => v));
  }, [state]);

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> 会议详情</>}
      extra={<Space>
        <Button
            type={'primary'}
            onClick={() => navigate(`/meeting/${state.id}/topic/0?create=true`)}
        >
          <FileAddOutlined/>添加议题
        </Button>
      </Space>
      }
      content={<Space size={'large'}>
        <Statistic title={'会议编号'} value={state.code}/>
        <Statistic title={'会议类型'} value={state.type}/>
      </Space>}
      loading={loading}
  >

    <Divider orientation={'left'}>会议信息</Divider>
    <MeetingInfo dataSource={state}/>
    <DemoFileDownload/>

    <Divider orientation={'left'}>参会人员</Divider>
    <MeetingAttendee data={state.user} isOptional onChange={v => setAttendeeId(v)}/>

    <Divider orientation={'left'}>已确认议题统计</Divider>
    <TopicContent
        isEdit={false}
        data={state.topic?.filter(t => t.status === 'REVIEWED').flatMap(t => t.content).map(c => ({ content: c }))}
        onChange={() => {
        }}
    />

    <br/>
    <TopicMatter
        isEdit={false}
        data={state.topic?.filter(t => t.status === 'REVIEWED').flatMap(t => t.matter)}
        onChange={() => {
        }}
    />

    <Modal
        title={'已确认议题'}
        closable
        visible={isVisible}
        width={1000}
        onOk={() => {
          // todo post请求
          setIsVisible(false);
        }}
        onCancel={() => setIsVisible(false)}
    >
      <TopicMatter
          isEdit
          data={matterData}
          onChange={setMatterData}
      />
    </Modal>

    <FooterToolbar>
      <Button type={'primary'} onClick={() => setIsVisible(true)}>结束会议</Button>
    </FooterToolbar>

  </PageContainer>;
}