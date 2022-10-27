import React from 'react';
import { Bullet } from '@ant-design/plots';

function BulletChart({ data }) {

  const config = {
    data,
    height: 160,
    autoFit: true,
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
      label: { style: { fill: '#fff' }, formatter: t => t.length < 11 ? '\xa0\xa0\xa0\xa0'.repeat(11 - t.length) + t : t }
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
    {/*@ts-ignore*/}
    <Bullet {...config} />
  </div>;
}

export default BulletChart;