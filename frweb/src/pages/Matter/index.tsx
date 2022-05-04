import React from 'react';
import { Divider, Space, Statistic } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import DemoFileDownload from '../../components/DemoFileDownload';
import MeasureTable from '../MeasureList/MeasureTable';
import MatterInfo from './MatterInfo';

export default function Matter() {

  const navigate = useNavigate();
  const { id } = useParams();

  const { state, loading } = useHttp(`/matter/${id}`);

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)} /> 问题清单</>}
      content={<Space size={'large'}>
        <Statistic title={'编号'} value={'WT001'} />
        <Statistic title={'问题类型'} value={'日常监督检查'} />
      </Space>}
      loading={loading}
  >

    <Divider orientation={'left'}>问题详情</Divider>
    <MatterInfo dataSource={state} />
    <DemoFileDownload />

    <Divider orientation={'left'}>措施清单</Divider>
    <MeasureTable
        dataSource={state.measures || []}
    />

  </PageContainer>;

}