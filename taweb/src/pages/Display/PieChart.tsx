import React from 'react';
import { Pie } from '@ant-design/charts';
import Title from './Title';

export default function PieChart() {

  const data = [
    { type: '区（镇）', value: 27 },
    { type: '站办', value: 25 },
    { type: '村（社）', value: 40 }
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
      content: '{name}\n{value}件\n{percentage}',
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
    <Title title={'问题清单'} />
    {/* @ts-ignore */}
    <Pie {...config} />
  </div>;
}
