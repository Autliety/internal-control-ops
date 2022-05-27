import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Collapse } from 'antd';

const { Panel } = Collapse;


export default function Permission() {

  const meetingPermission = ['新建会议', '修改会议', '结束会议'], matterPermission = ['问题修改', '问题分派'];

  return <PageContainer>
    <Collapse defaultActiveKey={['1']} bordered={false}>
      <Panel header='会议权限' key='1'>
        {
          meetingPermission.map((item, index) => <p key={index} style={{ textIndent: 40 }}>{item}</p>)
        }
      </Panel>
      <Panel header='问题权限' key='2'>
        {
          matterPermission.map((item, index) => <p key={index} style={{ textIndent: 40 }}>{item}</p>)
        }
      </Panel>
    </Collapse>

  </PageContainer>;
}