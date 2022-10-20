import React from 'react';
import { Line } from '@ant-design/charts';
import Title from './Title';

function LineChart() {

  const data = [
    { category: '履责情况报告', value: 6, month: '一月' },
    { category: '5+1谈话机制', value: 7, month: '一月' },
    { category: '第一种形态运用', value: 2, month: '一月' },

    { category: '履责情况报告', value: 3, month: '二月' },
    { category: '5+1谈话机制', value: 8, month: '二月' },
    { category: '第一种形态运用', value: 5, month: '二月' },

    { category: '履责情况报告', value: 6, month: '三月' },
    { category: '5+1谈话机制', value: 4, month: '三月' },
    { category: '第一种形态运用', value: 3, month: '三月' },

    { category: '履责情况报告', value: 12, month: '四月' },
    { category: '5+1谈话机制', value: 14, month: '四月' },
    { category: '第一种形态运用', value: 6, month: '四月' },

    { category: '履责情况报告', value: 6, month: '五月' },
    { category: '5+1谈话机制', value: 7, month: '五月' },
    { category: '第一种形态运用', value: 21, month: '五月' },

    { category: '履责情况报告', value: 6, month: '五月' },
    { category: '5+1谈话机制', value: 7, month: '五月' },
    { category: '第一种形态运用', value: 21, month: '五月' },

    { category: '履责情况报告', value: 6, month: '六月' },
    { category: '5+1谈话机制', value: 7, month: '六月' },
    { category: '第一种形态运用', value: 21, month: '六月' },

    { category: '履责情况报告', value: 6, month: '七月' },
    { category: '5+1谈话机制', value: 7, month: '七月' },
    { category: '第一种形态运用', value: 21, month: '七月' },

    { category: '履责情况报告', value: 6, month: '八月' },
    { category: '5+1谈话机制', value: 8, month: '八月' },
    { category: '第一种形态运用', value: 15, month: '八月' },

    { category: '履责情况报告', value: 6, month: '九月' },
    { category: '5+1谈话机制', value: 4, month: '九月' },
    { category: '第一种形态运用', value: 16, month: '九月' },

    { category: '履责情况报告', value: 9, month: '十月' },
    { category: '5+1谈话机制', value: 7, month: '十月' },
    { category: '第一种形态运用', value: 21, month: '十月' },

    { category: '履责情况报告', value: 6, month: '十一月' },
    { category: '5+1谈话机制', value: 13, month: '十一月' },
    { category: '第一种形态运用', value: 21, month: '十一月' },

    { category: '履责情况报告', value: 6, month: '十二月' },
    { category: '5+1谈话机制', value: 7, month: '十二月' },
    { category: '第一种形态运用', value: 21, month: '十二月' },
  ];

  const config = {
    data,
    xField: 'month',
    yField: 'value',
    seriesField: 'category',
    height: 275,
    point: { size: 5, shape: 'diamond' },
    lineStyle: { color: '#fff' },
    legend: {
      position: 'top-left',
      title: { text: '图例', spacing: 8, style: { fill: '#fff' } },
      itemName: { style: { fill: '#fff', fontSize: 14 } },
    },
    meta: {
      month: { alias: '日期' },
      value: { alias: '数量' },
    },
    xAxis: {
      title: {
        text: '日期',
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
        style: { fill: '#fff' },
      },
      label: { style: { fill: '#fff' } }
    },
    color: ['#1979C9', '#f6ee4b', '#58ea53'],
  };
  return <div>
    <Title title={'最近完成'} />
    {/*@ts-ignore*/}
    <Line {...config} />
  </div>;
}

export default LineChart;