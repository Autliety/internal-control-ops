import React from 'react';
import { Col, Row, Space } from "antd";
import PieChart from "./PieChart";
import ColumnChart from "./ColumnChart";
import LineChart from "./LineChart";
import AreaChart from "./AreaChart";
import LiquidChart from "./LiquidChart";
import BarChart from "./BarChart";
import RadarChart from "./RadarChart";
import bg from '../../image/bg.jpg';

function Display() {
  return <div
      style={{
        padding: 20,
        margin: 0,
        // backgroundColor: '#1a2b3b',
        // height: '100%'
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
      }}
  >
    <Row justify='space-around' gutter={[32, 32]}>

      <Col span={7}>
        <Space direction='vertical' size='large' style={{ display: 'flex' }}>
          <PieChart/>
          <LineChart/>
          <ColumnChart/>
        </Space>
      </Col>

      <Col span={10}>
        <h1 style={{ textAlign: 'center', color: '#fff' }}>百步经济开发区（百步镇）-- 数据可视化（测试）</h1>
        <br/>
        <AreaChart/>
        <br/>
        <LiquidChart/>
      </Col>

      <Col span={7}>
        <BarChart/>
        <br/>
        <RadarChart/>
      </Col>
    </Row>

  </div>
}

export default Display;