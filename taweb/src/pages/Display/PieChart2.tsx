import React from 'react';
import { Pie } from '@ant-design/charts';
import Title from './Title';

export default function PieChart2() {

  const data = [
    { type: '一单三书', value: 5 },
    { type: '纪委动议', value: 3 },
    { type: '履责约谈', value: 8 }
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
    <Title title={'督责各类别运用分布'} />
    {/* @ts-ignore */}
    <Pie {...config} />
  </div>;
}
