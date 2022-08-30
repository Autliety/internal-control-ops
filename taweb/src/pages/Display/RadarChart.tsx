import React from 'react';
import { Radar } from "@ant-design/charts";

function RadarChart() {
  const data = [
    { name: 'G2', star: 10371 },
    { name: 'G6', star: 7380 },
    { name: 'F2', star: 7414 },
    { name: 'L7', star: 2140 },
    { name: 'X6', star: 660 },
    { name: 'AVA', star: 885 },
    { name: 'G2Plot', star: 1626 },
  ];
  const config = {
    height: 445,
    data: data.map((d) => ({ ...d, star: Math.sqrt(d.star) })),
    xField: 'name',
    yField: 'star',
    appendPadding: [0, 10, 0, 10],
    meta: {
      star: {
        alias: 'star 数量',
        min: 0,
        nice: true,
        formatter: (v) => Number(v).toFixed(2),
      },
    },
    xAxis: {
      tickLine: null,
      label: { style: { fill: '#fff' } }
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    // 开启辅助点
    point: { size: 2 },
    area: {},
  };
  return <div>
    <Radar {...config} />
    <p style={{ textAlign: 'center', color: '#fff' }}>雷达图</p>
  </div>;
}

export default RadarChart;