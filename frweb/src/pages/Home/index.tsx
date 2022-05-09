import React from 'react';
import { Col, Row, Space, Statistic } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

import PieChart from './PieChart';
import { useAuth } from '../../utils/auth';
import GlobalSearch from './GlobalSearch';
import StatisticNotes from './StatisticNotes';


export default function Home() {

  const { user } = useAuth();

  return <div>
    <PageContainer
        title="百步镇政府四责协同管理平台"
        subTitle={'首页'}
        content={
          <Space size={'large'}>
            <Statistic title="欢迎您" value={user?.name} />
            <Statistic title={'部门'} value={user?.department?.name} />
          </Space>
        }
    >

      <GlobalSearch />
      <br />

      <StatisticNotes />
      <br />

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="content">
            <PieChart title={'问题清单总体完成情况'} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="content">
            <PieChart title={'各部门问题清单数量'} />
          </div>
        </Col>
      </Row>

    </PageContainer>
  </div>;
}

