import React from 'react';
import moment from "moment";
import { Space } from 'antd';
import { StatisticCard } from "@ant-design/pro-card";
import { ClockCircleTwoTone, EnvironmentTwoTone, IdcardTwoTone, SkinTwoTone } from "@ant-design/icons";

const { Divider } = StatisticCard;

function BaseInfo() {

  const weekday = { 0: '星期日', 1: '星期一', 2: '星期二', 3: '星期三', 4: '星期四', 5: '星期五', 6: '星期六' }

  return <>
    <StatisticCard.Group
        direction={'row'}
        title={<p style={{ fontSize: 18 }}>基本信息</p>}
    >
      <StatisticCard
          statistic={{
            title: '当前时间',
            value: moment().format('HH:mm'),
            description: (<Space>
              {moment().format('YYYY-MM-DD')}
              <Divider type='vertical'/>
              {weekday[moment().weekday() + 1]}
            </Space>),
            icon: <ClockCircleTwoTone twoToneColor={'#1890FF'} style={{ fontSize: 40 }}/>
          }}
      />

      <StatisticCard
          statistic={{
            title: '所在位置',
            value: '百步经济开发区',
            description: '海盐县',
            icon: <EnvironmentTwoTone twoToneColor={'#6496F9'} style={{ fontSize: 40 }}/>
          }}
      />

    </StatisticCard.Group>
    <br/>
    <StatisticCard.Group>
      <StatisticCard
          statistic={{
            title: '天气状况',
            value: '24°',
            description: (<Space>
              多云
              <Divider type={'vertical'}/>
              北风3级
            </Space>),
            icon: <SkinTwoTone twoToneColor={'#ee81e4'} style={{ fontSize: 40 }}/>
          }}
      />

      <StatisticCard
          statistic={{
            title: '在岗人员',
            value: '55/56',
            description: '请假：1',
            icon: <IdcardTwoTone twoToneColor={'#5BD171'} style={{ fontSize: 40 }}/>
          }}
      />
    </StatisticCard.Group>
  </>
}

export default BaseInfo;