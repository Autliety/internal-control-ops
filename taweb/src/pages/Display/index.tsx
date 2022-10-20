import React from 'react';
import { Alert, Col, Row, Space, Typography } from 'antd';
import Marquee from 'react-fast-marquee';
import moment from 'moment';
import { useInterval } from 'ahooks';
import { EnvironmentTwoTone } from '@ant-design/icons';

import PieChart from './PieChart';
import LineChart from './LineChart';
import bg from '../../image/bg.jpg';
import Map from './Map';
import PieChart2 from './PieChart2';
import Table from './Table';
import Warning from './Warning';
import './style.css';
import BulletChart from './BulletChart';

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
        <p style={{ textAlign: 'center' }}>在岗人数：55/56</p>
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
          <Warning />
        </Space>
      </Col>

      <Col span={10}>
        <Alert
            banner
            type={'info'}
            showIcon={false}
            message={
              <Marquee pauseOnHover gradient={false}>
                百步社区：1、 百联村：5、 超同村：2、 桃北村：4、 胜利村：3、 五丰村：4、 新升村：1、 横港村：6、 农丰村：1、 得胜村：2、 逍恬村：4、
              </Marquee>
            }
        />
        <Map />
        <br />
        <Table />
      </Col>

      <Col span={7}>
        <PieChart2 />
        <br />
        <BulletChart />
      </Col>
    </Row>

  </div>
}

export default Display;