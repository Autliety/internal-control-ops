import React from 'react';
import { StatisticCard } from '@ant-design/pro-card';
import { BellTwoTone, CarryOutTwoTone, TagsTwoTone } from '@ant-design/icons';
import { Avatar, List, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import { getApprovalNotes } from './getNotes';

export default function StatisticNotes() {

  const navigate = useNavigate();
  const { state } = useHttp('/approval?current=true', { initState: {} });

  const [onPage, setOnPage] = React.useState(0);

  const pageInfo = [
    {},
    {
      title: '待办事项', data: state['AWAITING_REVIEW']
          ?.map(a => getApprovalNotes(a))
          .filter(n => !!n.link)
          ?? [],
    },
    {
      title: '已处理待办事项', data: state['REVIEWED']
          ?.map(a => getApprovalNotes(a))
          .filter(n => !!n.link)
          ?? [],
    },
    { title: '未读提醒事项', data: [] },
    { title: '已读提醒事项', data: [] },
    { title: '动态跟踪', data: [] },
    { title: '已完成动态跟踪', data: [] },
  ];

  return <>
    <StatisticCard.Group
        direction={'row'}
        title={<b>待办事项</b>}
        split={'vertical'}
        style={{ cursor: 'pointer' }}
        headerBordered
        bordered
    >
      <StatisticCard
          style={{ padding: 24 }}
          statistic={{
            title: '待处理',
            value: pageInfo[1].data.length,
            icon: <CarryOutTwoTone className={'homepage-icon'} twoToneColor={'#eb2f96'}/>,
          }}
          onClick={() => setOnPage(1)}
      />
      <StatisticCard
          style={{ padding: 24 }}
          statistic={{
            title: '已处理',
            value: pageInfo[2].data.length,
            icon: <CarryOutTwoTone className={'homepage-icon'} twoToneColor={'#52c41a'}/>,
          }}
          onClick={() => setOnPage(2)}
      />

    </StatisticCard.Group>
    <br/>

    <StatisticCard.Group
        direction={'row'}
        title={<b>提醒事项</b>}
        split={'vertical'}
        headerBordered
        bordered
    >
      <StatisticCard
          style={{ padding: 24 }}
          statistic={{
            title: '未读',
            value: pageInfo[3].data.length,
            icon: <BellTwoTone className={'homepage-icon'} twoToneColor={'red'}/>,
          }}
          onClick={() => setOnPage(3)
          }
      />
      <StatisticCard
          style={{ padding: 24 }}
          statistic={{
            title: '已读',
            value: pageInfo[4].data.length,
            icon: <BellTwoTone className={'homepage-icon'} twoToneColor={'blue'}/>,
          }}
          onClick={() => setOnPage(4)
          }
      />
    </StatisticCard.Group>

    <br/>
    <StatisticCard.Group
        direction={'row'}
        title={<b>重大事项动态跟踪</b>}
        split={'vertical'}
        headerBordered
        bordered
    >
      <StatisticCard
          style={{ padding: 24 }}
          statistic={{
            title: '执行中',
            value: pageInfo[5].data.length,
            icon: <TagsTwoTone className={'homepage-icon'} twoToneColor={'orange'}/>,
          }}
          onClick={() => setOnPage(5)}
      />
      <StatisticCard
          style={{ padding: 24 }}
          statistic={{
            title: '已完成',
            value: pageInfo[6].data.length,
            icon: <TagsTwoTone className={'homepage-icon'}/>,
          }}
          onClick={() => setOnPage(6)}
      />,
    </StatisticCard.Group>

    <Modal
        title={''}
        visible={onPage !== 0}
        closable
        width={800}
        onCancel={() => setOnPage(0)}
        footer={null}
    >
      <List
          className="content"
          header={pageInfo[onPage].title}
          itemLayout="horizontal"
      >
        {pageInfo[onPage].data
        ?.map(item =>
            <List.Item
                key={item.key}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(item.link)}
            >
              <List.Item.Meta
                  avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"/>}
                  title={item.title}
                  description={item.content}
              />
              <div>{item.time}</div>
            </List.Item>)
        }
      </List>
    </Modal>
  </>;
}