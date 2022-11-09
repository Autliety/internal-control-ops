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
      img: bailian
    },
    {
      id: 4,
      name: '逍恬村',
      img: xiaotian
    },
    {
      id: 5,
      name: '农丰村',
      img: nongfeng
    },
    {
      id: 6,
      name: '胜利村',
      img: shengli
    },
    {
      id: 7,
      name: '横港村',
      img: henggang
    },

    {
      id: 8,
      name: '桃北村',
      img: taobei
    },
    {
      id: 9,
      name: '得胜村',
      img: desheng
    },
    {
      id: 10,
      name: '五丰村',
      img: wufeng
    },
    {
      id: 11,
      name: '新升村',
      img: xinsheng
    },
  ];

  return <div style={{ height: 570 }}>
    <Title title={'各行政区详情'} />
    <Carousel dots={false} autoplay>
      {
        data.map(item => <div key={item.id}>
          <Row align={'middle'}>
            <Col span={12}>
              <img src={item.img} alt={'各行政区域地图'} height={item.height || 250} />
            </Col>
            <Col span={12}>
              <div className={'tableStyle'}>
                <div className={'itemStyle'} style={{ fontSize: 18 }}>
                  <span>标题</span>
                  <span>数量</span>
                </div>
                <hr className={'hrStyle'} />
                <div className={'itemStyle'}>
                  <span>问题总数</span>
                  <span>42</span>
                </div>
                <hr className={'hrStyle'} />
                <div className={'itemStyle'}>
                  <span>已解决</span>
                  <span>20</span>
                </div>
                <hr className={'hrStyle'} />
                <div className={'itemStyle'}>
                  <span>未解决</span>
                  <span>12</span>
                </div>
                <hr className={'hrStyle'} />
                <div className={'itemStyle'}>
                  <span>已作废</span>
                  <span>8</span>
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