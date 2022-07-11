import React from 'react';
import { Divider, Space, Statistic } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { PageContainer } from '@ant-design/pro-layout';
import { useHttp } from '../../utils/request';
import MeasureInfo from './MeasureInfo';
import MatterInfo from '../Matter/MatterInfo';
import BaseDivider from '../../components/BaseDivider';
import ProgressTable from '../ProgressList/ProgressTable';
import FileUpload from '../../components/FileUpload';

export default function Measure() {

  const navigate = useNavigate();
  const { id } = useParams();

  const { state, loading } = useHttp(`/measure/${id}`);

  return <>
    <PageContainer
        content={<Space size={'large'}>
          <Statistic title={'编号'} value={state.code}/>
          <Statistic title={'责任人'} value={state.user?.name ?? ' '}/>
        </Space>}
        loading={loading}
    >
      <BaseDivider title={'所属问题'} onLink={() => navigate(`/fr/mz/list/matter/${state.matter?.id}`)}/>
      <MatterInfo dataSource={state?.matter}/>

      <Divider orientation={'left'}>措施详情</Divider>
      <MeasureInfo dataSource={state}/>

      <BaseDivider title={'相关附件'}/>
      <FileUpload value={state.attach || []}/>

      <Divider orientation={'left'}>履责情况</Divider>
      <ProgressTable data={state.progress ? [{ measure: state, ...state.progress }] : []}/>

    </PageContainer>
  </>;
}