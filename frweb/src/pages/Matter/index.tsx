import React from 'react';
import { Divider, Space, Statistic } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import DemoFileDownload from '../../components/DemoFileDownload';
import MeasureTable from '../MeasureList/MeasureTable';
import BaseDescriptions from '../../components/BaseDescriptions';

export default function Matter() {

  const navigate = useNavigate();
  const { id } = useParams();

  const { state, loading } = useHttp(`/matter/${id}`);

  const matterColumns = [
    { title: '编号', dataIndex: 'code' },
    { title: '问题概述', dataIndex: 'name' },
    { title: '问题内容', dataIndex: 'content', span: 2 },
    { title: '问题类型', dataIndex: 'type' },
    { title: '问题来源', dataIndex: 'origin' },
    { title: '责任主体', dataIndex: ['department', 'name'] },
    { title: '更新时间', dataIndex: 'updateTime' },
  ];

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)} /> 问题清单</>}
      content={<Space size={'large'}>
        <Statistic title={'编号'} value={'WT001'} />
        <Statistic title={'问题类型'} value={'日常监督检查'} />
      </Space>}
      loading={loading}
  >

    <Divider orientation={'left'}>问题详情</Divider>
    <BaseDescriptions
        columns={matterColumns}
        dataSource={state}
    />
    <DemoFileDownload />

    <Divider orientation={'left'}>措施清单</Divider>
    <MeasureTable
        dataSource={state.measures || []}
    />

  </PageContainer>;

}