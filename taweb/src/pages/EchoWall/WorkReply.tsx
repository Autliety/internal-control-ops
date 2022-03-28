import React from 'react';
import { PageContainer } from "@ant-design/pro-layout";
import { Alert } from "antd";

export default function WorkReply() {
  return <PageContainer>
    <Alert message={'提出'} showIcon type='success'/>
    <br/>
    <Alert message={'回复'} showIcon type='warning'/>
  </PageContainer>;
}
