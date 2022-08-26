import React from 'react';
import { Liquid } from "@ant-design/charts";
import { Space } from "antd";

function LiquidChart() {
  const config1 = {
    percent: 0.25,
    height: 275,
    width: 220,
    outline: { border: 4, distance: 8 },
    wave: { length: 128 },
    liquidStyle: { fill: '#48F9D6' },
    statistic: { content: { style: { color: '#fff' } } }
  };

  const config2 = {
    height: 275,
    width: 200,
    percent: 0.50,
    shape: 'rect',
    outline: { border: 2, distance: 4 },
    wave: { length: 128 },
    statistic: { content: { style: { color: '#fff' } } }
  };

  const config3 = {
    height: 275,
    width: 200,
    percent: 0.75,
    shape: 'diamond',
    outline: { border: 4, distance: 8 },
    wave: { length: 128 },
    liquidStyle: { fill: '#0597d7' },
    statistic: { content: { style: { color: '#fff' } } }
  };


  return <div>
    <p style={{ textAlign: 'center', color: '#fff' }}>水波图</p>
    <Space size='large' style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Liquid {...config1}/>
      <Liquid {...config2}/>
      <Liquid {...config3}/>
    </Space>
  </div>;
}

export default LiquidChart;