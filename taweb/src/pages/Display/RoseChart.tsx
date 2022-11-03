import React from 'react';
import { Rose } from "@ant-design/charts";

function RoseChart() {

  const data = [
    {
      type: '站办',
      value: 27,
      status: '已解决',
    },
    {
      type: '区（镇）',
      value: 25,
      status: '已解决',
    },
    {
      type: '村（社）',
      value: 18,
      status: '已解决',
    },

    {
      type: '站办',
      value: 7,
      status: '未解决',
    },
    {
      type: '区（镇）',
      value: 5,
      status: '未解决',
    },
    {
      type: '村（社）',
      value: 38,
      status: '未解决',
    },
  ];

  const config = {
    data,
    height: 275,
    xField: 'type',
    yField: 'value',
    isStack: true,
    // 当 isStack 为 true 时，该值为必填
    seriesField: 'status',
    radius: 0.9,
    label: {
      offset: -15,
      style: {
        fill: '#fff',
      }
    },
    legend: {
      itemName: { style: { fill: '#fff', fontSize: 14 } },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <div>
    <Rose {...config} />
  </div>;
}

export default RoseChart;