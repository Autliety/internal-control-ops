import React from 'react';
import { Button, Divider, Form, Space, Statistic } from 'antd';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import TopicInfo from './TopicInfo';
import TopicContent from './TopicContent';
import TopicMatter from './TopicMatter';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useHttp } from '../../utils/request';
import DemoProcess from '../../components/DemoProcess';
import MeetingInfo from '../Meeting/MeetingInfo';
import { useAuth } from '../../utils/auth';
import SelectUser from '../../components/SelectUser';

export default function MeetingTopic() {

  const navigate = useNavigate();
  const { user } = useAuth();

  const [search] = useSearchParams();
  let isCreate = search.get('create') === 'true';

  const { id, meetingId } = useParams();
  const { state:meetingState } = useHttp('/meeting/' + meetingId );
  const { state } = useHttp(`/topic/${id}`, { isManual: isCreate });

  const [info, setInfo] = React.useState(isCreate ? { user } : state);
  const [content, setContent] = React.useState(isCreate ? [] : state.content);
  const [matter, setMatter] = React.useState(isCreate ? [] : state.matter);
  React.useEffect(() => {
    if (!isCreate) {
      setInfo(state);
      setContent(state.content?.map((c, i) => ({ id: i, content: c })));
      setMatter(state.matter);
    }
  }, [isCreate, state]);

  const { http } = useHttp('/topic', { method: 'POST', isManual: true });
  // todo deprecated
  const { http: updateHttp } = useHttp('/topic', { method: 'PATCH', isManual: true });

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)} /> 会议议题</>}
      content={isCreate || <Space size={'large'}>
        <Statistic title={'会议编号'} value={state.meeting?.code} />
        <Statistic title={'责任主体'} value={state.user?.name} />
      </Space>}
  >


    <Divider orientation={'left'}>基本信息</Divider>
    <MeetingInfo dataSource={meetingState} />
    <TopicInfo data={info} />

    <Divider orientation={'left'}>议题内容</Divider>
    <TopicContent
        isEdit={isCreate}
        data={content || []}
        onChange={setContent}
    />

    <Divider orientation={'left'}>职责任务概述</Divider>
    <TopicMatter
        isEdit={isCreate}
        data={matter}
        onChange={setMatter}
    />

    <Divider orientation={'left'}>审核流程</Divider>
    {isCreate ?
        <Form.Item label="选择审核人"
            name="approve"
            rules={[{ required: true, message: '请选择' }]}
        >
          <SelectUser withUser />
        </Form.Item>
        :
        <DemoProcess status={info.status} />
    }

    <FooterToolbar>
      {info.status === 'AWAITING_REVIEW' && <Button
          type={'primary'}
          onClick={() => updateHttp(info.id).then(() => window.location.reload())}
      >审核通过
      </Button>}
      {
        isCreate && <Button
            type={'primary'}
            onClick={() => http(null, null, {
              meetingId,
              ...info,
              content: content.map(c => c.content),
              matter: matter.map(m => ({ ...m, id: null, endDate: m.endDate?.valueOf() })),
            })
            .then(res => navigate(`/meeting/${meetingId}/topic/${res.id}`))}
        >
          提交审核
        </Button>
      }
    </FooterToolbar>

  </PageContainer>;
}