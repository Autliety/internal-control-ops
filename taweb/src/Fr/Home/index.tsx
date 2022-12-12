import React from 'react';
import { Button, Card, Space, Statistic } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../utils/auth';
import GlobalSearch from './GlobalSearch';
import StatisticNotes from './StatisticNotes';

export default function Home() {

  const { user } = useAuth();
  const navigate = useNavigate();

  return <div>
    <PageContainer
        title={'区（镇）村（社）一体“四责协同”监督应用系统'}
        subTitle={'首页'}
        content={
          <Space size={'large'}>
            <Statistic title='欢迎您' value={user?.name} />
            <Statistic title={'部门'} value={user?.department?.name} />
          </Space>
        }
    >

      <GlobalSearch />
      <br />

      <StatisticNotes />
      <br />

      <Card title={<p style={{ fontWeight: 'bold' }}>查看数据展示</p>}>
        <Button type={'primary'} onClick={() => navigate('/data')} style={{ width: 200 }} shape={'round'}>点击跳转</Button>
      </Card>

    </PageContainer>
  </div>;
}

