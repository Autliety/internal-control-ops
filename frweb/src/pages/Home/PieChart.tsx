import React from 'react';
import ReactECharts from 'echarts-for-react';

export default function AssetPieChart({ title }) {

  const option = {
    title: {
      text: title,
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: '资产数量',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: '1' },
          { value: 735, name: '2' },
          { value: 580, name: '3' },
          { value: 484, name: '4' },
          { value: 300, name: '5' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return <ReactECharts option={option}/>;
}
