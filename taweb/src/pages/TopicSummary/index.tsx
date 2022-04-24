import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Space, Spin, Statistic } from 'antd';
import { ArrowLeftOutlined, FileAddOutlined } from '@ant-design/icons';
import { useNavigate, useSearchParams } from 'react-router-dom';

import TopicSummaryInfo from './TopicSummaryInfo';
import TopicList from '../TopicList';

export default function TopicSummary() {

  const navigate = useNavigate();
  const [search] = useSearchParams();
  let isCreate = search.get('create') === 'true';

  const [onTab, setOnTab] = React.useState('1');

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> 汇总详情</>}
      extra={
        <Button
            type={'primary'}
            onClick={() => navigate('/v2/topic/0?create=true')}
        >
          <FileAddOutlined/>
          新建议题
        </Button>
      }
      content={isCreate || <Space size={'large'}>
        <Statistic title={'会议编号'} value={'1-001'}/>
        <Statistic title={'会议名称'} value={'百步镇党委全面从严治党2021年度 “1+X” 四方会议'}/>
      </Space>}
      tabList={[
        { tab: '会议信息', key: '1' },
        { tab: '议题列表', key: '2' },
      ]}
      onTabChange={setOnTab}
  >

    <Spin spinning={false}>
      {onTab === '1' && <TopicSummaryInfo/>}
      {onTab === '2' && <TopicList/>}
    </Spin>
  </PageContainer>;
}