import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Space, Statistic } from 'antd';
import { ArrowLeftOutlined, FileAddOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import MeetingInfo from './MeetingInfo';
import DemoFileDownload from '../../components/DemoFileDownload';
import TopicList from './TopicList';
import TopicContent from '../MeetingTopic/TopicContent';
import TopicMatter from '../MeetingTopic/TopicMatter';

export default function Meeting() {

  const navigate = useNavigate();
  const { id } = useParams();

  const { state, loading } = useHttp(`/meeting/${id}`);

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
    <DemoFileDownload />

    <Divider orientation={'left'}>参会人员及议题</Divider>
    <TopicList
        topic={state.topic || []}
        user={state.user}
    />

    <Divider orientation={'left'}>已确认议题统计</Divider>
    <TopicContent
        isEdit={false}
        data={state.topic?.filter(t => t.status === 'REVIEWED').flatMap(t => t.content).map(c => ({ content: c }))}
        onChange={() => {}}
    />
    <br />
    <TopicMatter
        isEdit={false}
        data={state.topic?.filter(t => t.status === 'REVIEWED').flatMap(t => t.matter)}
        onChange={() => {}}
    />

  </PageContainer>;
}