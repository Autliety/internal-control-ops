import React from 'react';
import { Pie } from "@ant-design/charts";

export default function PieChart() {

  const data = [
    {
      type: '男',
      value: 27,
    },
    {
      type: '女',
      value: 25,
    },
  ];
  const config = {
    data,
    height: 275,
    appendPadding: 10,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
      style: {
        fill: '#fff',
        fontSize: 16,
      }
    },
    legend: {
      title: { text: '类别', spacing: 8, style: { fill: '#fff' } },
      itemName: { style: { fill: '#fff', fontSize: 14 } },
    },
    interactions: [
      { type: 'element-active' },
      { type: 'pie-legend-active' },
    ],
  };

  return <div>
    <p style={{ textAlign: 'center', color: '#fff' }}>饼图</p>
    {/* @ts-ignore */}
    <Pie {...config} />
  </div>;
}
