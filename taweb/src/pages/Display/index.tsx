import React from 'react';
import { Button, Carousel, Col, Row, Space, Typography } from 'antd';
import moment from 'moment';
import { useInterval } from 'ahooks';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import bg from '../../image/bg.jpg';
import Map from './Map';
import Table from './Table';
import Warning from './Warning';
import './style.css';
import BulletChart from './BulletChart';
import ColumnChart from './ColumnChart';
import RoseChart from './RoseChart';
import Title from './Title';
import RingChart from './RingChart';
import List from './List';

function Display() {

  const navigate = useNavigate();
  // 显示时间
  const [date, setDate] = React.useState('');
  useInterval(() => setDate(moment().format('YYYY月MM月DD日 HH:mm')), 1000 * 60, { immediate: true });

  // 评分情况测试数据（班子成员）
  const data = [
    {
      title: '党委副书记',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '人大主席',
      ranges: [20, 80, 100],
      measures: [40],
      target: 100,
    },
    {
      title: '党委副书记【党群】',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '党委副书记【政法】',
      ranges: [20, 80, 100],
      measures: [65],
      target: 100,
    },
    {
      title: '纪委书记',
      ranges: [20, 80, 100],
      measures: [45],
      target: 100,
    },
    {
      title: '党委委员【组织】',
      ranges: [20, 80, 100],
      measures: [55],
      target: 100,
    },
    {
      title: '党委委员【宣传】',
      ranges: [20, 80, 100],
      measures: [40],
      target: 100,
    },
    {
      title: '党委委员【统战】',
      ranges: [20, 80, 100],
      measures: [55],
      target: 100,
    },
    {
      title: '党委委员【政法】',
      ranges: [20, 80, 100],
      measures: [40],
      target: 100,
    },

    {
      title: '人武部部长',
      ranges: [20, 80, 100],
      measures: [36],
      target: 100,
    },
    {
      title: '派出所所长',
      ranges: [20, 80, 100],
      measures: [55],
      target: 100,
    },
    {
      title: '人大副主席',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },

    {
      title: '副镇长【工业】',
      ranges: [20, 80, 100],
      measures: [36],
      target: 100,
    },
    {
      title: '副镇长【社会事业】',
      ranges: [20, 80, 100],
      measures: [28],
      target: 100,
    },
    {
      title: '副镇长【城建交通】',
      ranges: [20, 80, 100],
      measures: [84],
      target: 100,
    },

    {
      title: '副镇长【人才、招商】',
      ranges: [20, 80, 100],
      measures: [84],
      target: 100,
    },
    {
      title: '副镇长【征迁】',
      ranges: [20, 80, 100],
      measures: [84],
      target: 100,
    },
    {
      title: '管委会副主任【招商】',
      ranges: [20, 80, 100],
      measures: [84],
      target: 100,
    },
    {
      title: '管委会副主任【农业】',
      ranges: [20, 80, 100],
      measures: [84],
      target: 100,
    },
    {
      title: '副镇长级干部【蒋爱君】',
      ranges: [20, 80, 100],
      measures: [84],
      target: 100,
    },
    {
      title: '副镇长级干部【赵生良】',
      ranges: [20, 80, 100],
      measures: [84],
      target: 100,
    },
    {
      title: '副镇长级干部【张明】',
      ranges: [20, 80, 100],
      measures: [84],
      target: 100,
    },
    {
      title: '副镇长级干部【张陆君】',
      ranges: [20, 80, 100],
      measures: [84],
      target: 100,
    },
    {
      title: '副镇长级干部【刘爱群】',
      ranges: [20, 80, 100],
      measures: [84],
      target: 100,
    },
    {
      title: '副镇长级干部【唐惠平】',
      ranges: [20, 80, 100],
      measures: [84],
      target: 100,
    },

  ];
  // 评分情况测试数据（村社成员）
  const data3 = [
    {
      title: '征搬迁办公室',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '百步社区',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '百联村',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '超同村',
      ranges: [20, 80, 100],
      measures: [75],
      target: 100,
    },
    {
      title: '逍恬村',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '农丰村',
      ranges: [20, 80, 100],
      measures: [21],
      target: 100,
    },
    {
      title: '新升村',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '横港村',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '桃北村',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '胜利村',
      ranges: [20, 80, 100],
      measures: [30],
      target: 100,
    },
    {
      title: '五丰村',
      ranges: [20, 80, 100],
      measures: [56],
      target: 100,
    },
    {
      title: '得胜村',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
  ];
  // 评分情况测试数据（站办成员）
  const data2 = [
    {
      title: '党政综合办公室',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '党建工作办公室',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '社会治理办公室',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '经济发展办公室',
      ranges: [20, 80, 100],
      measures: [75],
      target: 100,
    },
    {
      title: '社会事务服务管理办公室',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '村镇建设管理办公室',
      ranges: [20, 80, 100],
      measures: [21],
      target: 100,
    },
    {
      title: '财政办公室',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '农业农村办公室',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '招商和项目推进科',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '文化站',
      ranges: [20, 80, 100],
      measures: [30],
      target: 100,
    },
    {
      title: '生态环境办公室',
      ranges: [20, 80, 100],
      measures: [56],
      target: 100,
    },
    {
      title: '生态环境执法分队',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '市场监督管理局百步分局',
      ranges: [20, 80, 100],
      measures: [56],
      target: 100,
    },
    {
      title: '综合行政执法中队',
      ranges: [20, 80, 100],
      measures: [50],
      target: 100,
    },
    {
      title: '自然规划局百步分局',
      ranges: [20, 80, 100],
      measures: [68],
      target: 100,
    }
  ];

  const setData = (data) => {
    let newData = [];
    for (let i = 0; i < data?.length; i = i + 3) {
      newData.push(data.slice(i, i + 3));
    }
    return newData;
  }


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
    {/* 顶部 */}
    <Row style={{ color: '#2bddf1', fontWeight: 'bold' }}>
      <Col span={7}>
        <Button
            type={'primary'}
            shape={'round'}
            icon={<HomeOutlined />}
            onClick={() => navigate('/fr')}
        >
          返回首页
        </Button>
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
      {/* 左 */}
      <Col span={7}>
        <Space direction='vertical' size='large' style={{ display: 'flex' }}>
          <Carousel autoplay dots={false} dotPosition={'right'}>
            <div>
              <Title title={'问题清单'} />
              <RoseChart />
            </div>
            <div>
              <Title title={'措施清单'} />
              <RoseChart />
            </div>
            <div>
              <Title title={'整改清单'} />
              <RoseChart />
            </div>
          </Carousel>
          <div>
            <Title title={'班子成员考评得分'} />
            <Carousel autoplay dots={false} dotPosition={'right'}>
              {
                setData(data)?.map((item, index) => <div key={index}>
                  <BulletChart data={item} />
                </div>)
              }
            </Carousel>
          </div>

          <div>
            <Title title={'站所考评得分'} />
            <Carousel autoplay dots={false} dotPosition={'right'}>
              {
                setData(data2)?.map((item, index) => <div key={index}>
                  <BulletChart data={item} />
                </div>)
              }
            </Carousel>
          </div>

          <div>
            <Title title={'村（社）考评得分'} />
            <Carousel autoplay dots={false} dotPosition={'right'}>
              {
                setData(data3)?.map((item, index) => <div key={index}>
                  <BulletChart data={item} />
                </div>)
              }
            </Carousel>
          </div>

        </Space>
      </Col>
      {/* 中 */}
      <Col span={10}>
        <Map />
        <Warning />
        <br />
        <Table />
      </Col>
      {/* 右 */}
      <Col span={7}>
        <Title title={'预警指标'} />
        <Carousel autoplay dots={false} effect='fade'>
          <div>
            <RoseChart />
          </div>
          <div>
            <List />
          </div>
        </Carousel>

        <br />
        <ColumnChart />

        <br />
        <div style={{ height: 280 }}>
          <RingChart />
        </div>
      </Col>
    </Row>

  </div>
}

export default Display;
