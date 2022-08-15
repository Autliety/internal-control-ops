import React from 'react';
import { Bar } from '@ant-design/charts';

function BarChart() {

  const data = [
    {
      year: '1951',
      value: 38,
    },
    {
      year: '1952',
      value: 52,
    },
    {
      year: '1956',
      value: 61,
    },
    {
      year: '1957',
      value: 145,
    },
    {
      year: '1958',
      value: 48,
    },
  ];
  const config = {
    data,
    height: 445,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: {
      position: 'top-left',
      title: { text: '年份', spacing: 8, style: { fill: '#fff' } },
      itemName: { style: { fill: '#fff', fontSize: 14 } },
    },
    label: {
      position: 'top',
      style: {
        fill: '#fff',
        fontSize: 14,
      },
    },
    xAxis: {
      label: {
        style: { fill: '#fff' }
      }
    },
    yAxis: {
      label: {
        style: { fill: '#fff' }
      }
    }
  };

  return <div>
    <p style={{ textAlign: 'center', color: '#fff' }}>条形图</p>
    {/*@ts-ignore*/}
    <Bar {...config} />
  </div>;
}

export default BarChart;