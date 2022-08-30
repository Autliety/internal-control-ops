import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useHttp } from "../../utils/request";

export default function BarChart() {

  const { state } = useHttp('/department', { initState: [] });

  const option = {
    title: {
      text: '各站办指标数量',
      left: 'center',
    },
    color: {},
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: state.map(dept => dept.shortName),
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: state.map((_, i) => i + 1),
        type: 'bar',
        color: '#0ca0e0',
      }
    ]
  };

  return <ReactECharts option={option}/>;
}