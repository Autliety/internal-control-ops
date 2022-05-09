import React from 'react';
import { StatisticCard } from '@ant-design/pro-card';
import { CarryOutTwoTone, TagsTwoTone } from '@ant-design/icons';
import { Avatar, List, Modal } from 'antd';

export default function StatisticNotes() {

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
    { key: '0', title: '待处理', value: 4, color: '#eb2f96' },
    { key: '1', title: '已处理', value: 50, color: '#52c41a' },
  ];

  const dynamicList = [
    { key: '3', title: '执行中', value: 5, color: 'orange' },
    { key: '4', title: '已完成', value: 84 },
  ];

  const [isVisible, setIsVisible] = React.useState(false);
  const imgStyle = { fontSize: '50px' };

  return <>

    <StatisticCard.Group
        direction={'row'}
        title={'待办事项'}
        split={'vertical'}
        style={{ cursor: 'pointer' }}
        headerBordered
        bordered
    >
      {
        toDoList.map((item, index) => <StatisticCard
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
        title={'动态跟踪'}
        split={'vertical'}
        headerBordered
        bordered
    >
      {
        dynamicList.map((item, index) => <StatisticCard
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
        onCancel={() => setIsVisible(false)}
        onOk={() => setIsVisible(false)}
    >
      <List
          className="content"
          header="消息通知"
          itemLayout="horizontal"
      >
        {announceData.map((item, index) =>
            <List.Item
                key={index}
                style={{ cursor: 'pointer' }}
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