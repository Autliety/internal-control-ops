import React from 'react';
import Title from './Title';
import { Bullet } from '@ant-design/plots';

function BulletChart() {

  const data = [
    {
      title: '党委书记',
      ranges: [20, 80, 100],
      measures: [65],
      target: 100,
    },
    {
      title: '党委副书记',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '人大主席',
      ranges: [20, 80, 100],
      measures: [40],
      target: 100,
    },
    {
      title: '党委副书记 (党群)',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '党委副书记 (政法)',
      ranges: [20, 80, 100],
      measures: [65],
      target: 100,
    },
    {
      title: '纪委书记',
      ranges: [20, 80, 100],
      measures: [45],
      target: 100,
    },
    {
      title: '党委委员 (组织)',
      ranges: [20, 80, 100],
      measures: [55],
      target: 100,
    },
    {
      title: '党委委员 (宣传)',
      ranges: [20, 80, 100],
      measures: [40],
      target: 100,
    },
    {
      title: '党委委员 (统战)',
      ranges: [20, 80, 100],
      measures: [55],
      target: 100,
    },
    {
      title: '党委委员 (政法)',
      ranges: [20, 80, 100],
      measures: [40],
      target: 100,
    },

    {
      title: '人武部部长',
      ranges: [20, 80, 100],
      measures: [36],
      target: 100,
    },
    {
      title: '派出所所长',
      ranges: [20, 80, 100],
      measures: [55],
      target: 100,
    },
    {
      title: '人大副主席',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },

    {
      title: '副镇长 (工业)',
      ranges: [20, 80, 100],
      measures: [36],
      target: 100,
    },
    {
      title: '副镇长 (社会事业)',
      ranges: [20, 80, 100],
      measures: [28],
      target: 100,
    },
    {
      title: '副镇长 (城建交通)',
      ranges: [20, 80, 100],
      measures: [84],
      target: 100,
    },
  ];
  const config = {
    data,
    height: 600,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: ['#f51d10', '#f3cb2d', '#15ec3e'],
      measure: '#2bddf1',
      target: '#2bddf1',
    },
    size: { measure: 10 },
    label: {
      measure: {
        position: 'middle',
        style: { fill: '#2bddf1' },
      },
    },
    xAxis: {
      label: { style: { fill: '#fff' } }
    },
    yAxis: false,
    // 自定义 legend
    legend: {
      custom: true,
      position: 'top',
      itemName: { style: { fill: '#fff', fontSize: 12 } },
      items: [
        {
          value: '差',
          name: '差',
          marker: {
            symbol: 'square',
            style: {
              fill: '#f51d10',
              r: 5,
            },
          },
        },
        {
          value: '良',
          name: '良',
          marker: {
            symbol: 'square',
            style: {
              fill: '#f3cb2d',
              r: 5,
            },
          },
        },
        {
          value: '优',
          name: '优',
          marker: {
            symbol: 'square',
            style: {
              fill: '#15ec3e',
              r: 5,
            },
          },
        },
        {
          value: '实际值',
          name: '实际值',
          marker: {
            symbol: 'square',
            style: {
              fill: '#2bddf1',
              r: 5,
            },
          },
        },
        {
          value: '目标值',
          name: '目标值',
          marker: {
            symbol: 'line',
            style: {
              stroke: '#2bddf1',
              r: 5,
            },
          },
        },
      ],
    },
  };

  return <div>
    <Title title={'评分情况'} />
    {/*@ts-ignore*/}
    <Bullet {...config} />
  </div>;
}

export default BulletChart;