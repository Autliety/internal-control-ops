import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Divider } from 'antd';
import BaseDescriptions from '../../components/BaseDescriptions';
import { baseColumns } from '../CommentList';
import DemoFileDownload from '../../components/DemoFileDownload';

function Comment() {

  const data = {
    id: 1,
    user: '王哲',
    userType: '镇（街道）一把手',
    meetingType: '县委常委会（扩大）会议',
    time: '2022-02-25',
    way: '口头方式',
    content: '详见附件',
    result: '情况属实',
    situation: '已存入廉政档案',
  }

  return <PageContainer>
    <BaseDescriptions columns={baseColumns} dataSource={data}/>
    <Divider orientation={'left'}>相关附件</Divider>
    <DemoFileDownload/>
  </PageContainer>;
}

export default Comment;