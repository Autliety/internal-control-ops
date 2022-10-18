import React from 'react';
import { Col, Row, Space, Typography } from 'antd';
import moment from 'moment';
import { useInterval } from 'ahooks';

import PieChart from './PieChart';
import ColumnChart from './ColumnChart';
import LineChart from './LineChart';
import bg from '../../image/bg.jpg';
import Map from './Map';
import BarChart from './BarChart';
import PieChart2 from './PieChart2';
import Table from './Table';
import './style.css';
import { EnvironmentTwoTone } from '@ant-design/icons';

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
    <Row style={{ color: '#2bddf1', fontWeight: 'bold' }}>
      <Col span={7}>
        <p style={{ textAlign: 'center' }}>
          <EnvironmentTwoTone twoToneColor={'#2bddf1'} style={{ marginRight: 10, fontSize: 20 }} />
          所在位置：海盐百步经济开发区（百步镇）
        </p>
        <p style={{ textAlign: 'center' }}>在岗人员：55/56</p>
      </Col>
      <Col span={10}>
        <Typography.Title level={2} className={'title'}>百步经济开发区（百步镇）-- 数据可视化（测试）</Typography.Title>
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
          <PieChart />
          <LineChart />
          <ColumnChart />
        </Space>
      </Col>

      <Col span={10}>
        <Map />
        <br />
        <Table />
      </Col>

      <Col span={7}>
        <PieChart2 />
        <br />
        <BarChart />
      </Col>
    </Row>

  </div>
}

export default Display;