import React from 'react';
import { Avatar, Col, Input, List, Modal, Row, Select, Space, Statistic } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { StatisticCard } from "@ant-design/pro-card";

import PieChart from './PieChart';
import { useAppSelector } from '../../store/hook';

const imgStyle = {
  display: 'block',
  width: 42,
  height: 42,
};

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
      content: '收到新的第一张形态告知书【DS001】,哈哈哈哈！收到新的第一张形态告知书【DS001】,收到新的第一张形态告知书【DS001】',
    },
    {
      id: 3,
      title: '需要制订措施',
      content: '问题【WT008】尚未制定相关的措施清单',
    },
    {
      id: 4,
      title: '第一种形态告知书',
      content: '收到新的第一张形态告知书【DS009】',
    },
  ];

  const toDoList = [
    {
      key: '0', title: '待处理', value: 4,
      icon: 'https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ',
    },
    {
      key: '1', title: '已处理', value: 50,
      icon: 'https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ',
    },
  ];

  const dynamicList = [
    {
      key: '3', title: '执行中', value: 5,
      icon: 'https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ',
    },
    {
      key: '4', title: '已完成', value: 84,
      icon: 'https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ',
    },
  ]

  const [isVisible, setIsVisible] = React.useState(false);

  return <div>
    <PageContainer
        title='百步镇政府四责协同管理平台'
        subTitle={'首页'}
        content={
          <Space size={'large'}>
            <Statistic title='欢迎您' value={user.name}/>
            <Statistic title={'职位'} value={'纪委书记'}/>
          </Space>
        }
    >

      <div className={'content'}>
        <Space>
          <Select defaultValue={0} dropdownMatchSelectWidth={200}>
            <Select.Option value={0}>全部</Select.Option>
            <Select.Option value={1}>‘1+X’会议</Select.Option>
            <Select.Option value={2}>问题清单</Select.Option>
            <Select.Option value={3}>措施清单</Select.Option>
            <Select.Option value={4}>一单三书</Select.Option>
          </Select>
          <Input.Search placeholder={'全局搜索'} enterButton/>
        </Space>
      </div>
      <br/>

      <StatisticCard.Group
          direction={'row'}
          title={'待办事项'}
          split={'vertical'}
          style={{ cursor: 'pointer' }}
          headerBordered
          bordered
      >
        {
          toDoList.map((item, index) =>
              <StatisticCard
                  key={index}
                  statistic={{
                    title: item.title,
                    value: item.value,
                    icon: (
                        <img
                            style={imgStyle}
                            src={item.icon}
                            alt="icon"
                        />
                    ),
                  }}
                  onClick={() => setIsVisible(true)}
              />)
        }
      </StatisticCard.Group>
      <br/>

      <StatisticCard.Group
          direction={'row'}
          title={'动态跟踪'}
          split={'vertical'}
          headerBordered
          bordered
      >
        {
          dynamicList.map((item, index) =>
              <StatisticCard
                  key={index}
                  statistic={{
                    title: item.title,
                    value: item.value,
                    icon: (
                        <img
                            style={imgStyle}
                            src={item.icon}
                            alt="icon"
                        />
                    ),
                  }}
                  onClick={() => setIsVisible(true)}
              />
          )
        }
      </StatisticCard.Group>
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

      <Modal
          title={''}
          visible={isVisible}
          closable
          width={800}
          onCancel={() => setIsVisible(false)}
          onOk={() => setIsVisible(false)}
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
      </Modal>

    </PageContainer>
  </div>;
}

