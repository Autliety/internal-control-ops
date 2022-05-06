import React from 'react';
import { Button, Divider, Space, Statistic } from 'antd';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import TopicInfo from './TopicInfo';
import TopicContent from './TopicContent';
import TopicMatter from './TopicMatter';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useHttp } from '../../utils/request';

export default function MeetingTopic() {

  const navigate = useNavigate();

  const [search] = useSearchParams();
  let isCreate = search.get('create') === 'true';

  const { id, meetingId } = useParams();
  const { state } = useHttp(`/topic/${id}`, { isManual: isCreate });

  const [info, setInfo] = React.useState(isCreate ? {} : state);
  const [content, setContent] = React.useState(isCreate ? [] : state.content);
  const [matter, setMatter] = React.useState(isCreate ? [] : state.matter);

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)} /> 会议议题</>}
      content={isCreate || <Space size={'large'}>
        <Statistic title={'会议编号'} value={state.meeting?.code} />
        <Statistic title={'责任主体'} value={state.user?.name} />
      </Space>}
  >

    <Divider orientation={'left'}>基本信息</Divider>
    <TopicInfo
        isEdit={isCreate}
        data={info}
        onChange={setInfo}
    />

    <Divider orientation={'left'}>议题内容</Divider>
    <TopicContent
        isEdit={isCreate}
        data={content}
        onChange={setContent}
    />

    <Divider orientation={'left'}>职责任务概述</Divider>
    <TopicMatter
        isEdit={isCreate}
        data={matter}
        onChange={setMatter}
    />

    <FooterToolbar>
      {
        isCreate && <Button
            type={'primary'}
            onClick={() => {
              console.log('data', {
                meetingId,
                ...info,
                content: content.map(c => c.content),
                matter: matter.map(m => m.content),
              });
            }}
        >
          保存
        </Button>
      }
    </FooterToolbar>

  </PageContainer>;
}