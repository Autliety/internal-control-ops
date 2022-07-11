import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import MeetingInfo from './MeetingInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import MeetingAttendee from './MeetingAttendee';
import BaseDivider from '../../components/BaseDivider';

export default function MeetingNotice() {

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

    <FooterToolbar>
      {state.status === 'REVIEWED' &&
          <Button
              type={'primary'}
              onClick={() =>  navigate(`/fr/mz/meeting/${id}`)}
          >会前准备</Button>
      }
    </FooterToolbar>

  </PageContainer>;
}