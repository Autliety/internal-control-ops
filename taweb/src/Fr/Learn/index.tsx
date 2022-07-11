import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Divider } from 'antd';
import { useParams } from 'react-router-dom';
import BaseDescriptions from '../../components/BaseDescriptions';
import { learningColumns } from '../LearnList';
import { useHttp } from '../../utils/request';
import MeetingAttendee from '../Meeting/MeetingAttendee';
import FileUpload from '../../components/FileUpload';

export default function Learn() {

  const { id } = useParams();
  const { state, loading } = useHttp(`/ordinal/learning/${id}`, { initState: {} });

  return <PageContainer loading={loading}>
    <BaseDescriptions columns={learningColumns} dataSource={state}/>

    <Divider orientation='left'>参加对象</Divider>
    <div className='content'>
      <MeetingAttendee data={state?.multiUser1} isOptional={false}/>
    </div>

    <Divider orientation={'left'}>相关附件</Divider>
    <FileUpload value={state.attach || []}/>

  </PageContainer>;
}