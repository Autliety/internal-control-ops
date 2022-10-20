import React from 'react';
import { Bar } from '@ant-design/charts';
import Title from './Title';

function BarChart() {

  const data = [
    { name: '党委书记', value: 38 },
    { name: '党委副书记', value: 45 },
    { name: '人大主席', value: 75 },
    { name: '党委副书记 (党群)', value: 52 },
    { name: '党委副书记 (政法)', value: 45 },
    { name: '纪委书记', value: 52 },
    { name: '党委委员 (组织)', value: 38 },
    { name: '党委委员 (宣传)', value: 52 },
    { name: '党委委员 (统战)', value: 56 },
    { name: '党委委员 (政法)', value: 23 },
  ];
  const config = {
    data,
    height: 600,
    xField: 'value',
    yField: 'name',
    seriesField: 'name',
    legend: {
      position: 'top-left',
      title: { text: '岗位', style: { fill: '#fff' } },
      itemName: { style: { fill: '#fff', fontSize: 12 } },
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
    <Title title={'得分情况'} />
    {/*@ts-ignore*/}
    <Bar {...config} />
  </div>;
}

export default BarChart;