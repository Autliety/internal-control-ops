import React from 'react';
import { Pie } from '@ant-design/charts';
import { Space } from 'antd';
import Title from './Title';

function RingChart() {
  const data1 = [
    {
      type: '站所',
      value: 27,
    },
    {
      type: '区镇',
      value: 25,
    },
    {
      type: '村（社）',
      value: 18,
    },
  ];
  const data2 = [
    {
      type: '工程',
      value: 27,
    },
    {
      type: '招商',
      value: 22,
    },
    {
      type: '土地',
      value: 18,
    },
    {
      type: '交通',
      value: 16,
    },
    {
      type: '政法',
      value: 25,
    },
    {
      type: '其他',
      value: 18,
    },
  ];
  const config = {
    appendPadding: 10,
    height: 240,
    width: 280,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fill: '#fff',
        fontSize: 14,
      },
    },
    legend: {
      position: 'right',
      itemName: { style: { fill: '#fff', fontSize: 12 } },
    },
    interactions: [
      { type: 'element-selected' },
      { type: 'element-active'},
    ],
    statistic: {
      title: false,
      content: null,
    },
  };
  return <div>
    <Title title={'追责人数'} />
    <Space>
      {/*@ts-ignore*/}
      <Pie {...config} data={data1} />
      {/*@ts-ignore*/}
      <Pie {...config} data={data2} />
    </Space>
  </div>;
}

export default RingChart;