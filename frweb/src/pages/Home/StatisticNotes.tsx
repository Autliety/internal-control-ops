import React from 'react';
import { StatisticCard } from '@ant-design/pro-card';
import { BellTwoTone, CarryOutTwoTone, TagsTwoTone } from '@ant-design/icons';
import { Avatar, List, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function StatisticNotes() {

  const navigate = useNavigate();

  const announceData = [
    {
      id: 1,
      title: '会议通知审核',
      content: '会议【HY001】正在等待您审核',
      link: '/meeting/1/notice',
    },
    {
      id: 4,
      title: '会议议题审核',
      content: '会议【HY001】有1份新的会议议题，正在等待您审核',
      link: '/meeting/1/topic/1',
    },
    {
      id: 6,
      title: '填写/修改措施清单',
      content: '收到一份问题清单，请尽快填写/修改措施清单',
      link: '/list/matter',
    },
    {
      id: 7,
      title: '措施清单审核',
      content: '问题【WT001】更新了措施清单，正在等待您审核',
      link: '/matter/1',
    },
  ];

  const infoData = [
    {
      id: 2,
      title: '已审会议通知',
      content: '会议通知【HY001】已审核完成，需发送',
      link: '/meeting/1/notice',
    },
    {
      id: 3,
      title: '会议通知',
      content: '收到会议通知【HY001】，请尽快填写会议议题',
      link: '/meeting/1',
    },
  ]

  const toDoList = [
    { key: '0', title: '待处理', value: 4, color: '#eb2f96' },
    { key: '1', title: '已处理', value: 25, color: '#52c41a' },
  ];

  const dynamicList = [
    { key: '3', title: '执行中', value: 3, color: 'orange' },
    { key: '4', title: '已完成', value: 7 },
  ];

  const [isVisible, setIsVisible] = React.useState(false);
  const [isInfo, setIsInfo] = React.useState(false);
  const imgStyle = { fontSize: '60px' };

  return <>

    <StatisticCard.Group
        direction={'row'}
        title={<b>待办事项</b>}
        split={'vertical'}
        style={{ cursor: 'pointer' }}
        headerBordered
        bordered
    >
      {
        toDoList.map((item, index) => <StatisticCard
            style={{ padding: 24 }}
            key={index}
            statistic={{
              title: item.title,
              value: item.value,
              icon: <CarryOutTwoTone style={imgStyle} twoToneColor={item.color} />,
            }}
            onClick={() => setIsVisible(true)}
        />)
      }
    </StatisticCard.Group>
    <br />

    <StatisticCard.Group
        direction={'row'}
        title={<b>提醒事项</b>}
        split={'vertical'}
        headerBordered
        bordered
    >
      {
        <StatisticCard
            style={{ padding: 24 }}
            key={1}
            statistic={{
              title: '提醒事项',
              value: 2,
              icon: <BellTwoTone style={imgStyle} twoToneColor={'blue'} />,
            }}
            onClick={() => {
              setIsInfo(true);
              setIsVisible(true);
            }}
        />

      }
    </StatisticCard.Group>

    <br />
    <StatisticCard.Group
        direction={'row'}
        title={<b>重大事项动态跟踪</b>}
        split={'vertical'}
        headerBordered
        bordered
    >
      {
        dynamicList.map((item, index) => <StatisticCard
                style={{ padding: 24 }}
                key={index}
                statistic={{
                  title: item.title,
                  value: item.value,
                  icon: <TagsTwoTone style={imgStyle} twoToneColor={item.color} />,
                }}
                onClick={() => setIsVisible(true)}
            />,
        )
      }
    </StatisticCard.Group>
    <Modal
        title={''}
        visible={isVisible}
        closable
        width={800}
        onCancel={() => {
          setIsVisible(false);
          setIsInfo(false);
        }}
        onOk={() => {
          setIsVisible(false);
          setIsInfo(false);
        }}
    >
      <List
          className="content"
          header={isInfo ? '提醒事项': '待办事项' }
          itemLayout="horizontal"
      >
        {(isInfo ? infoData : announceData).map((item, index) =>
            <List.Item
                key={index}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(item.link)}
            >
              <List.Item.Meta
                  avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png" />}
                  title={item['title']}
                  description={item['content']}
              />
            </List.Item>)
        }
      </List>
    </Modal>
  </>;
}