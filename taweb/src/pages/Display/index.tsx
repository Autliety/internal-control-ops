import React from 'react';
import { Col, Row, Space } from 'antd';
import PieChart from './PieChart';
import ColumnChart from './ColumnChart';
import LineChart from './LineChart';
import LiquidChart from './LiquidChart';
import BarChart from './BarChart';
import RadarChart from './RadarChart';
import bg from '../../image/bg.jpg';
import Map from './Map';
import moment from "moment";
import { useInterval } from "ahooks";

function Display() {

  // 时间
  const [date, setDate] = React.useState('');
  useInterval(() => setDate(moment().format('YYYY月MM月DD日 HH:mm')), 1000 * 60, { immediate: true });

  return <div
      style={{
        padding: 20,
        margin: 0,
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
      }}
  >
    <Row style={{ color: '#fff' }}>
      <Col span={7}/>
      <Col span={10}>
        <h1 style={{ textAlign: 'center', color: '#fff' }}>百步经济开发区（百步镇）-- 数据可视化（测试）</h1>
      </Col>
      <Col span={7}>
        <p style={{ textAlign: 'center' }}>
          {date} / 星期四
        </p>
        <p style={{ textAlign: 'center' }}>26°~35° / 阴</p>
      </Col>
    </Row>

    <Row justify='space-around' gutter={[32, 32]}>

      <Col span={7}>
        <Space direction='vertical' size='large' style={{ display: 'flex' }}>
          <PieChart/>
          <LineChart/>
          <ColumnChart/>
        </Space>
      </Col>

      <Col span={10}>
        {/*<AreaChart/>*/}
        <Map/>
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