import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Space, Spin, Statistic } from 'antd';
import { ArrowLeftOutlined, FileAddOutlined } from '@ant-design/icons';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Summary from './Summary';
import TopicList from './TopicList';

export default function Meeting() {

  const navigate = useNavigate();
  const [search] = useSearchParams();
  let isCreate = search.get('create') === 'true';

  const [onTab, setOnTab] = React.useState('1');

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> 会议详情</>}
      extra={
        <Button
            type={'primary'}
            onClick={() => navigate('/meeting/0/topic?create=true')}
        >
          <FileAddOutlined/>
          添加议题
        </Button>
      }
      content={isCreate || <Space size={'large'}>
        <Statistic title={'会议编号'} value={'HY001'}/>
        <Statistic title={'会议名称'} value={'百步镇党委全面从严治党2021年度 “1” 专题会议'}/>
      </Space>}
      tabList={[
        { tab: '会议信息', key: '1' },
        { tab: '议题列表', key: '2' },
      ]}
      onTabChange={setOnTab}
  >

    <Spin spinning={false}>
      {onTab === '1' && <Summary/>}
      {onTab === '2' && <TopicList/>}
    </Spin>
  </PageContainer>;
}