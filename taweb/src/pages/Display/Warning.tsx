import React from 'react';
import { Col, Row } from 'antd';
import { AlertTwoTone, BellTwoTone, BulbTwoTone } from '@ant-design/icons';
import Title from './Title';
import './style.css';

function Warning() {
  return <div style={{ fontFamily: 'serif', fontWeight: 'bold' }}>
    <Title title={'预警指标'} />
    <div className={'box'}>
      <Row>
        <Col span={4}>
          <BellTwoTone twoToneColor={'#efaf35'} style={{ fontSize: 40 }} />
        </Col>
        <Col span={6}>
          <p style={{ color: '#efaf35' }}>云哨黄哨</p>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={8}>
              <span style={{ fontSize: 14, color: '#fff' }}>总数：</span>
              <span style={{ color: '#fff', fontSize: 24 }}>80</span>
            </Col>

            <Col span={8}>
              <span style={{ fontSize: 14, color: '#fff' }}>逾期：</span>
              <span style={{ color: '#fff', fontSize: 24 }}>8</span>
            </Col>

            <Col span={8}>
              <span style={{ fontSize: 14, color: '#fff' }}>完成：</span>
              <span style={{ color: '#fff', fontSize: 24 }}>72</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

    <div className={'box'}>
      <Row>
        <Col span={4}>
          <BulbTwoTone twoToneColor={'#3cef21'} style={{ fontSize: 40 }} />
        </Col>
        <Col span={6}>
          <p style={{ color: '#3cef21' }}>三重一大</p>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={8}>
              <span style={{ fontSize: 14, color: '#fff' }}>总数：</span>
              <span style={{ color: '#fff', fontSize: 24 }}>80</span>
            </Col>

            <Col span={8}>
              <span style={{ fontSize: 14, color: '#fff' }}>逾期：</span>
              <span style={{ color: '#fff', fontSize: 24 }}>8</span>
            </Col>

            <Col span={8}>
              <span style={{ fontSize: 14, color: '#fff' }}>完成：</span>
              <span style={{ color: '#fff', fontSize: 24 }}>72</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

    <div className={'box'}>
      <Row>
        <Col span={4}>
          <AlertTwoTone twoToneColor={'#2bddf1'} style={{ fontSize: 40 }} />
        </Col>
        <Col span={6}>
          <p style={{ color: '#2bddf1' }}>系统预警</p>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={8}>
              <span style={{ fontSize: 14, color: '#fff' }}>总数：</span>
              <span style={{ color: '#fff', fontSize: 24 }}>80</span>
            </Col>

            <Col span={8}>
              <span style={{ fontSize: 14, color: '#fff' }}>逾期：</span>
              <span style={{ color: '#fff', fontSize: 24 }}>8</span>
            </Col>

            <Col span={8}>
              <span style={{ fontSize: 14, color: '#fff' }}>完成：</span>
              <span style={{ color: '#fff', fontSize: 24 }}>72</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </div>;
}

export default Warning;