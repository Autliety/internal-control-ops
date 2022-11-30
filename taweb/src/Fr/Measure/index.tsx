import React from 'react';
import { Divider, Space, Statistic } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { PageContainer } from '@ant-design/pro-layout';
import { useHttp } from '../../utils/request';
import MeasureInfo from './MeasureInfo';
import BaseDivider from '../../components/BaseDivider';
import ProgressInfo from '../Progress/ProgressInfo';
import UserSelectCascader from '../../components/UserSelectCascader';

export default function Measure() {

  const navigate = useNavigate();
  const { id } = useParams();

  const { state, loading } = useHttp(`/measure/${id}`);

  return <>
    <PageContainer
        content={<Space size={'large'}>
          <Statistic title={'序号'} value={state.id}/>
          <Statistic title={'责任人'} value={state.user?.name ?? ' '}/>
        </Space>}
        loading={loading}
    >
      <BaseDivider title={'所属问题'} onLink={() => navigate(`/fr/mz/list/matter/${state.matter?.id}`)}/>
      {/*<MatterInfo dataSource={state?.matter}/>*/}

      <Divider orientation={'left'}>措施详情</Divider>
      <MeasureInfo dataSource={state}/>

      <Divider orientation={'left'}>履责情况</Divider>
      <ProgressInfo dataSource={state.progress}/>
      <div className='content'>
        协调配合： <UserSelectCascader disabled value={state.progress?.subUser}/>
      </div>

    </PageContainer>
  </>;
}