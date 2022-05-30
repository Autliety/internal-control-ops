import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Modal } from 'antd';
import MeetingInfo from './MeetingInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import DemoFileDownload from '../../components/DemoFileDownload';
import MeetingAttendee from './MeetingAttendee';
import BaseDivider from '../../components/BaseDivider';
import ApprovalTable from '../../components/ApprovalTable';
import { useAuth } from '../../utils/auth';

export default function MeetingNotice() {

  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  const { state, loading } = useHttp(`/meeting/${id}`);

  return <PageContainer
      loading={loading}
  >
    <BaseDivider title={'基本信息'}/>
    <MeetingInfo dataSource={state}/>

    <BaseDivider title={'参会人员'}/>
    <MeetingAttendee data={state.meetingUser} isOptional={false}/>

    <BaseDivider title={'列席人员'}/>
    <MeetingAttendee data={state.subUser} isOptional={false}/>

    <BaseDivider title={'相关附件'}/>
    <DemoFileDownload/>

    <BaseDivider title={'审核流程'}/>
    <ApprovalTable value={state.approval}/>

    <FooterToolbar>
      {state.status === 'REVIEWED' &&
          <Button
              type={'primary'}
              disabled={state.user?.id !== user.id}
              onClick={() => Modal.confirm({
                title: '发送会议通知',
                content: '发送会议通知所有参会人员',
                onOk: () => navigate(`/mz/meeting/${id}`),
              })}
          >发送通知</Button>
      }
    </FooterToolbar>

  </PageContainer>;
}