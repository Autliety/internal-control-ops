import React from 'react';
import { Area } from "@ant-design/charts";

function AreaChart() {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
  };
  const config = {
    data,
    height: 510,
    areaStyle: { fill: '#48F9D6' },
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
      title: { text: '年份', position: 'end', style: { fill: '#fff' }, },
      label: { style: { fill: '#fff' } }
    },
    yAxis: {
      title: {
        text: '降水量（dm）',
        position: 'end',
        style: { fill: '#fff' },
      },
      label: { style: { fill: '#fff' } }
    },
    meta: {
      year: { alias: '年份' },
      value: { alias: '降水量' },
    },
    line: { color: '#fff' },
  };


  return <div>
    <Area {...config} />
    <p style={{ textAlign: 'center', color: '#fff' }}>面积图</p>
  </div>;
}

export default AreaChart;