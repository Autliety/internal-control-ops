import React from 'react';
import { Avatar, Col, List, message, Row, Statistic } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

import { rentStatusEnumOrigin, statusEnum } from '../../utils/nameMap';
import PieChart from './PieChart';

export default function Home() {

  const approveData = [
    {
      id: 1,
      title: '计划未制定',
      content: '【考核指标0001】尚未制定相关的工作计划',
    },
    {
      id: 2,
      title: '工作进度汇报已逾期',
      content: '【工作计划A】已逾期，但尚未汇报进度',
    },
  ];

  // 饼状图测试数据
  const pieData = [
    { value: 1048, name: 'PENDING' },
    { value: 735, name: 'UNUSED' },
    { value: 580, name: 'IN_USING' },
    { value: 484, name: 'SCRAPPED' },
    { value: 300, name: 'CLEANED' }
  ]


  return <div>
    <PageContainer
        title='百步镇政府'
        subTitle='督考系统'
        content={
          <Statistic title='欢迎您' value={'管理员'}/>
        }
    >

      <List
          className='content'
          header='消息通知'
          itemLayout='horizontal'
      >
        {approveData.map((item, index) =>
            <List.Item
                key={index}
                style={{ cursor: 'pointer' }}
                onClick={() => message.info('跳转不了哦，再等等吧！！！')}
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
          <div className="content">
            <PieChart title={'年度考核考评情况'} value={pieData} options={statusEnum}/>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="content">
            <PieChart title={'本月考核指标与计划'} value={pieData} options={rentStatusEnumOrigin}/>
          </div>
        </Col>
      </Row>

    </PageContainer>
  </div>;
}

