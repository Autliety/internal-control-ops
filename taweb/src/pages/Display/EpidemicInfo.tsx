import React from 'react';
import { StatisticCard } from "@ant-design/pro-card";
import { Alert } from "antd";

const { Divider } = StatisticCard;

function EpidemicInfo() {
  return <>

    <StatisticCard.Group
        direction={'column'}
        title={<p style={{ fontSize: 18 }}>疫情信息</p>}
    >
      <Alert message='国内疫情数据' banner type='error' showIcon={false}/><br/>
      <StatisticCard.Group>
        <StatisticCard
            statistic={{
              title: '现有确诊',
              value: 5064834,
              status: 'warning',
            }}
        />
        <Divider/>
        <StatisticCard
            statistic={{
              title: '国内新增',
              value: 24804,
              status: 'processing',
            }}
        />
        <StatisticCard
            statistic={{
              title: '本土新增',
              value: 380,
              status: 'processing',
            }}
        />
        <StatisticCard
            statistic={{
              title: '境外输入',
              value: 21241,
              status: 'success',
            }}
        />
        <StatisticCard
            statistic={{
              title: '累计死亡',
              value: '24055',
              status: 'error',
            }}
        />
      </StatisticCard.Group>
      <br/>

      <Alert message='本地（嘉兴）疫情数据' banner showIcon={false}/><br/>
      <StatisticCard.Group>
        <StatisticCard
            statistic={{
              title: '累计确诊',
              value: 176,
              status: 'warning',
            }}
        />
        <Divider/>
        <StatisticCard
            statistic={{
              title: '本地新增',
              value: 0,
              status: 'processing',
            }}
        />
        <StatisticCard
            statistic={{
              title: '海盐新增',
              value: 0,
              status: 'processing',
            }}
        />
        <StatisticCard
            statistic={{
              title: '现有确诊',
              value: 0,
              status: 'warning',
            }}
        />
        <StatisticCard
            statistic={{
              title: '累计治愈',
              value: '176',
              status: 'success',
            }}
        />
      </StatisticCard.Group>

    </StatisticCard.Group>
  </>;
}

export default EpidemicInfo;