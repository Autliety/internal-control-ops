import React from 'react';
import { Col, Row } from 'antd';
import { AlertTwoTone } from '@ant-design/icons';
import Title from './Title';
import './style.css';

function Warning() {
  return <div style={{ fontFamily: 'serif', fontWeight: 'bold' }}>
    <Title title={'预警指标'} />
    <div className={'box'}>
      <Row>
        <Col span={4}>
          <AlertTwoTone twoToneColor={'#efaf35'} style={{ fontSize: 40 }} />
        </Col>
        <Col span={6}>
          <p style={{ color: '#efaf35' }}>云哨黄哨</p>
        </Col>
        <Col span={6}>
          <p style={{ color: '#efaf35'}}>80【个】</p>
        </Col>
      </Row>
    </div>

    <div className={'box'}>
      <Row>
        <Col span={4}>
          <AlertTwoTone twoToneColor={'#ef2121'} style={{ fontSize: 40 }} />
        </Col>
        <Col span={6}>
          <p>云哨红哨</p>
        </Col>
        <Col span={6}>
          <p>10【个】</p>
        </Col>
      </Row>
    </div>

    <div className={'box'}>
      <Row>
        <Col span={4}>
          <AlertTwoTone twoToneColor={'#2bddf1'} style={{ fontSize: 40 }} />
        </Col>
        <Col span={6}>
          <p style={{ color: '#2bddf1'}}>其他预警</p>
        </Col>
        <Col span={6}>
          <p style={{ color: '#2bddf1'}}>20【个】</p>
        </Col>
      </Row>
    </div>
  </div>;
}

export default Warning;