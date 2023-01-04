import React from 'react';
import { Col, Row } from 'antd';
import Title from './Title';
import './style.css';

function Warning() {
  return <div style={{ fontFamily: 'serif', fontWeight: 'bold' }}>
    <Title title={'预警指标'} />
    <Row gutter={8}>
      <Col span={12}>
        <div className={'box'}>

          <Row>
            <Col span={8}>
              <p style={{ color: '#efaf35' }}>履责预警</p>
            </Col>
            <Col span={16}>
              <Row>
                <Col span={7}>
                  <span style={{ fontSize: 14, color: '#fff' }}>总数：</span>
                  <span style={{ color: '#fff', fontSize: 24 }}>80</span>
                </Col>

                <Col span={7}>
                  <span style={{ fontSize: 14, color: '#fff' }}>逾期：</span>
                  <span style={{ color: '#fff', fontSize: 24 }}>8</span>
                </Col>

                <Col span={10}>
                  <span style={{ fontSize: 14, color: '#fff' }}>处理率：</span>
                  <span style={{ color: '#fff', fontSize: 24 }}>72%</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>


      <Col span={12}>
        <div className={'box'}>
          <Row>
            <Col span={8}>
              <p style={{ color: '#3cef21' }}>用权预警</p>
            </Col>
            <Col span={16}>
              <Row>
                <Col span={7}>
                  <span style={{ fontSize: 14, color: '#fff' }}>总数：</span>
                  <span style={{ color: '#fff', fontSize: 24 }}>80</span>
                </Col>

                <Col span={7}>
                  <span style={{ fontSize: 14, color: '#fff' }}>逾期：</span>
                  <span style={{ color: '#fff', fontSize: 24 }}>8</span>
                </Col>

                <Col span={10}>
                  <span style={{ fontSize: 14, color: '#fff' }}>处理率：</span>
                  <span style={{ color: '#fff', fontSize: 24 }}>72%</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>

    </Row>


  </div>;
}

export default Warning;