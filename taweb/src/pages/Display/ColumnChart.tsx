import React from 'react';
import { Column } from "@ant-design/charts";

export default function ColumnChart() {

  const data = [
    { year: '2017', value: 102 },
    { year: '2018', value: 104 },
    { year: '2019', value: 109 },
    { year: '2020', value: 112 },
    { year: '2021', value: 116 },
  ];

  const config = {
    data,
    height: 275,
    xField: 'year',
    yField: 'value',
    point: { size: 5, shape: 'diamond' },
    label: {
      position: 'top',
      style: {
        fill: '#fff',
        fontSize: 14,
      },
    },
    meta: {
      year: { alias: '年份' },
      value: { alias: 'GDP（亿元）' },
    },
    xAxis: {
      title: {
        text: '年份',
        position: 'end',
        style: { fill: '#fff' }
      },
      label: {
        style: { fill: '#fff' }
      }
    },
    yAxis: {
      title: {
        text: 'GDP（亿元）',
        position: 'end',
        autoRotate: true,
        style: { fill: '#fff' }
      },
      label: {
        style: { fill: '#fff' }
      }
    },
    columnStyle: { fill: 'l(270) 0:#ffffff 1:#48F9D6' }
  };

  return <div>
    <p style={{ textAlign: 'center', color: '#fff' }}>柱状图</p>
    {/* @ts-ignore */}
    <Column {...config} />
  </div>;
}