import React from 'react';
import { Avatar, Col, List, Row, Statistic } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

import PieChart from './PieChart';
import { useAppSelector } from '../../store/hook';

export default function Home() {

  const { username } = useAppSelector((state) => state.login);
  const user = { name: username };

  const announceData = [
    {
      id: 1,
      title: '需要制订措施',
      content: '问题【WT001】尚未制定相关的措施清单',
    },
    {
      id: 2,
      title: '第一种形态告知书',
      content: '收到新的第一张形态告知书【DS001】',
    },
  ];

  return <div>
    <PageContainer
        title='百步镇政府四责协同管理平台'
        subTitle={'首页'}
        content={
          <Statistic title='欢迎您' value={user.name}/>
        }
    >
      <List
          className='content'
          header='消息通知'
          itemLayout='horizontal'
      >
        {announceData.map((item, index) =>
            <List.Item
                key={index}
                style={{ cursor: 'pointer' }}
            >
              <List.Item.Meta
                  avatar={<Avatar src='https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png'/>}
                  title={item['title']}
                  description={item['content']}
              />
            </List.Item>)
        }
      </List>
      <br/>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className='content'>
            <PieChart title={'问题清单总体完成情况'}/>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className='content'>
            <PieChart title={'各部门问题清单数量'}/>
          </div>
        </Col>
      </Row>

    </PageContainer>


  </div>;
}

