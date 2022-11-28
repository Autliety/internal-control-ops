import React from 'react';
import Title from './Title';
import { Carousel, Col, Row } from 'antd';
import map from '../../image/map.png';
import chaotong from '../../image/chaotong.png';
import bailian from '../../image/bailian.png';
import xiaotian from '../../image/xiaotian.png';
import nongfeng from '../../image/nongfeng.png';
import shengli from '../../image/shengli.png';
import henggang from '../../image/henggang.png';
import taobei from '../../image/taobei.png';
import desheng from '../../image/desheng.png';
import wufeng from '../../image/wufeng.png';
import xinsheng from '../../image/xinsheng.png';
import './style.css';

function Map() {

  const data = [
    {
      id: 1,
      name: '百步镇',
      img: map,
      height: 510
    },
    {
      id: 2,
      name: '超同村',
      img: chaotong,
    },
    {
      id: 3,
      name: '百联村',
      img: bailian,
    },
    {
      id: 4,
      name: '逍恬村',
      img: xiaotian,
    },
    {
      id: 5,
      name: '农丰村',
      img: nongfeng,
    },
    {
      id: 6,
      name: '胜利村',
      img: shengli,
    },
    {
      id: 7,
      name: '横港村',
      img: henggang,
    },

    {
      id: 8,
      name: '桃北村',
      img: taobei,
    },
    {
      id: 9,
      name: '得胜村',
      img: desheng,
    },
    {
      id: 10,
      name: '五丰村',
      img: wufeng,
    },
    {
      id: 11,
      name: '新升村',
      img: xinsheng,
    },
  ];

  return <div style={{ height: 570 }}>
    <Title title={'责任清单地图'} />
    <Carousel dots={false} autoplay>
      {
        data.map(item => <div key={item.id}>
          <Row>
            <Col span={16}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={item.img} alt={'责任清单地图'} height={item?.height || 390} style={{ display: 'block' }} />
              </div>
            </Col>
            <Col span={8}>
              <div>
                <div className={'itemStyle'}>
                  <div style={{ fontSize: 30, color: '#2bddf1' }}>82</div>
                  <div style={{ color: '#fff' }}>总数</div>
                </div>
                <div className={'itemStyle'}>
                  <div style={{ fontSize: 30, color: '#2bddf1' }}>64</div>
                  <div style={{ color: '#fff' }}>已完成</div>
                </div>
                <div className={'itemStyle'}>
                  <div style={{ fontSize: 30, color: '#2bddf1' }}>16</div>
                  <div style={{ color: '#fff' }}>未完成</div>
                </div>
                <div className={'itemStyle'}>
                  <div style={{ fontSize: 30, color: '#2bddf1' }}>2</div>
                  <div style={{ color: '#fff' }}>已作废</div>
                </div>
              </div>

            </Col>
          </Row>
        </div>)
      }
    </Carousel>
  </div>
}

export default Map;