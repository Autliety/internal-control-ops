import React from 'react';
import { Line } from "@ant-design/charts";

function LineChart() {

  const data = [
    { year: '2017', value: 34567 },
    { year: '2018', value: 29813 },
    { year: '2019', value: 12365 },
    { year: '2020', value: 23459 },
    { year: '2021', value: 31265 },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    height: 275,
    point: { size: 5, shape: 'diamond' },
    lineStyle: { color: '#fff' },
    meta: {
      year: { alias: '年份' },
      value: { alias: '人口' },
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
        text: '人口',
        position: 'end',
        autoRotate: true,
        style: { fill: '#fff' },
      },
      label: { style: { fill: '#fff' } }
    }
  };
  return <div>
    <p style={{ textAlign: 'center', color: '#fff' }}>折线图</p>
    {/*@ts-ignore*/}
    <Line {...config}/>
  </div>;
}

export default LineChart;