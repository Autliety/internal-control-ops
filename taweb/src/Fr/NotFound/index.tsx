import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Result } from 'antd';

export default function NotFound() {
  return <div className="NotFound">
    <PageContainer
        title="404"
        subTitle="Not Found"
    >
      <Result
          status="warning"
          title="很抱歉，页面未找到。。。"
      />
    </PageContainer>
  </div>;
}