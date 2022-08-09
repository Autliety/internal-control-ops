import React from 'react';
import { Col, Row, Space, Statistic } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

import PieChart from './PieChart';
import { useAuth } from '../../utils/auth';
import GlobalSearch from './GlobalSearch';
import StatisticNotes from './StatisticNotes';
import BarChart from "./BarChart";


export default function Home() {

  const { user } = useAuth();

  return <div>
    <PageContainer
        title="百步经济开发区(百步镇)督考平台"
        subTitle={'首页'}
        content={
          <Space size={'large'}>
            <Statistic title="欢迎您" value={user?.name}/>
            <Statistic title={'部门'} value={user?.department?.name}/>
          </Space>
        }
    >

      <GlobalSearch/>
      <br/>

      <StatisticNotes/>
      <br/>

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="content">
            <PieChart title={'各部门指标数'}/>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="content">
            <BarChart/>
          </div>
        </Col>
      </Row>

    </PageContainer>
  </div>;
}

