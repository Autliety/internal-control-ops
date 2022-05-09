import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import MeetingInfo from './MeetingInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import { ArrowLeftOutlined } from '@ant-design/icons';
import DemoFileDownload from '../../components/DemoFileDownload';
import MeetingAttendee from './MeetingAttendee';
import DemoProcess from '../../components/DemoProcess';
import BaseDivider from '../../components/BaseDivider';

export default function MeetingNotice() {

  const navigate = useNavigate();
  const { id } = useParams();

  const { state, loading } = useHttp(`/meeting/${id}`);
  const { http } = useHttp(`/meeting/${id}`, { method: 'PATCH', isManual: true });

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)} /> 会议通知</>}
      loading={loading}
  >
    <BaseDivider title={'基本信息'} />
    <MeetingInfo dataSource={state} />

    <BaseDivider title={'计划参会人员'} />
    <MeetingAttendee data={state.user} isOptional={false} />

    {/* 暂用 */}
    <BaseDivider title={'相关附件'} />
    <DemoFileDownload list={[{ name: '会议通知', code: 'HY001.docx' }]} />

    <BaseDivider title={'审批流程'} />
    <DemoProcess status={state.status} />

    <FooterToolbar>
      {state.status === 'AWAITING_REVIEW'
          ?
          <Button
              type={'primary'}
              onClick={() => http().then(() => navigate(-1))}
          >审核通过</Button>
          :
          <Button type={'primary'}>发送通知</Button>
      }
    </FooterToolbar>

  </PageContainer>;
}