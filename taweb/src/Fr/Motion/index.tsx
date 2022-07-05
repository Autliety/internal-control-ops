import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';
import { Divider } from 'antd';
import MeetingAttendee from '../Meeting/MeetingAttendee';
import BaseDescriptions from '../../components/BaseDescriptions';
import { motionColumns } from '../MotionList';
import { useHttp } from '../../utils/request';

export default function Motion() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/ordinal/motion/${id}`, { initState: {} });

  return <PageContainer loading={loading}>
    <BaseDescriptions columns={motionColumns} dataSource={state}/>

    <Divider orientation='left'>参会人员</Divider>
    < div className='content'>
      <MeetingAttendee data={state.multiUser1} isOptional={false}/>
    </div>
  </PageContainer>;
}