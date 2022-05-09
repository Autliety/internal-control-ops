import React from 'react';
import { FooterToolbar, PageContainer } from "@ant-design/pro-layout";
import { Button, Card, Divider } from "antd";
import MeetingInfo from "./MeetingInfo";
import { useNavigate, useParams } from "react-router-dom";
import { useHttp } from "../../utils/request";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ProCard, { CheckCard } from "@ant-design/pro-card";
import DemoFileDownload from "../../components/DemoFileDownload";
import DemoUpperResponse from "../../components/DemoUpperResponse";
import MeetingAttendee from "./MeetingAttendee";

export default function MeetingNotice() {

  const users = [
    { id: 1, name: '王哲', station: '经办人', department: '领导班子' },
    { id: 2, name: '吴胜杰', station: '经办人', department: '领导班子' },
    { id: 3, name: '赵小龙', station: '经办人', department: '领导班子' },
    { id: 4, name: '李书记', station: '党委书记', department: '党委' },
    { id: 5, name: '王哲', station: '经办人', department: '领导班子' },
    { id: 6, name: '吴胜杰', station: '经办人', department: '领导班子' },
    { id: 7, name: '赵小龙', station: '经办人', department: '领导班子' },
    { id: 8, name: '李书记', station: '党委书记', department: '党委' },
    { id: 9, name: '王哲', station: '经办人', department: '领导班子' },
    { id: 6, name: '吴胜杰', station: '经办人', department: '领导班子' },
    { id: 7, name: '赵小龙', station: '经办人', department: '领导班子' },
    { id: 8, name: '李书记', station: '党委书记', department: '党委' },
  ];

  const navigate = useNavigate();
  const { id } = useParams();


  const { state, loading } = useHttp(`/meeting/${id}`);

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> 会议通知</>}
      loading={loading}
  >
    <Divider orientation={'left'}>会议信息</Divider>
    <MeetingInfo dataSource={state}/>

    <Divider orientation={'left'}>参会人员</Divider>
    <MeetingAttendee data={users} isOptional={false}/>

    {/* 暂用 */}
    <DemoFileDownload/>
    <DemoUpperResponse/>

    <FooterToolbar>
      <Button type={'primary'}>审核通过</Button>
    </FooterToolbar>

  </PageContainer>;
}