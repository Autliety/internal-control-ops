import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Divider, Space, Statistic } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { PageContainer } from '@ant-design/pro-layout';
import { useHttp } from '../../utils/request';
import MeasureInfo from './MeasureInfo';
import MatterInfo from '../Matter/MatterInfo';
import BaseDivider from '../../components/BaseDivider';
import DemoFileDownload from '../../components/DemoFileDownload';
import DemoUpperResponse from '../../components/DemoUpperResponse';

export default function Measure() {

  const navigate = useNavigate();
  const { id } = useParams();

  const { state } = useHttp(`/measure/${id}`);

  return <>
    <PageContainer
        title={<><ArrowLeftOutlined onClick={() => navigate(-1)} /> 措施清单</>}
        content={<Space size={'large'}>
          <Statistic title={'编号'} value={state.code} />
          <Statistic title={'责任人'} value={state.user?.name ?? ' '} />
        </Space>}
    >
      <Divider orientation={'left'}>措施详情</Divider>
      <MeasureInfo dataSource={state} />
      <DemoFileDownload />
      <DemoUpperResponse />

      <BaseDivider title={'相关问题'} onLink={() => navigate(`/matter/${state.matterId}`)}/>
      <MatterInfo dataSource={state.matter} />

      <Divider orientation={'left'}>履责情况</Divider>

    </PageContainer>
  </>;
}