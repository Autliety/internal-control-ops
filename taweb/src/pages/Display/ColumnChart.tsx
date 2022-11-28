import React from 'react';
import { Column } from '@ant-design/charts';
import Title from './Title';

export default function ColumnChart() {

  const data = [
    { year: '一单三书', value: 102 },
    { year: '纪委动议', value: 104 },
    { year: '履责约谈', value: 109 },
    { year: '履责追踪', value: 112 },
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
      year: { alias: '类别' },
      value: { alias: '数量' },
    },
    xAxis: {
      title: {
        text: '类别',
        position: 'end',
        style: { fill: '#fff' }
      },
      label: {
        style: { fill: '#fff' }
      }
    },
    yAxis: {
      title: {
        text: '数量',
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
    <Title title={'督责情况'} />
    {/* @ts-ignore */}
    <Column {...config} />
  </div>;
}