import React from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {Space, Statistic} from 'antd';
import {useParams} from 'react-router-dom';
import BaseDescriptions from '../../components/BaseDescriptions';
import {redColumns} from '../TodoList';
import {useHttp} from '../../utils/request';

function RedTodo() {

  const {id} = useParams();
  const {state, loading} = useHttp(`/warning/red/${id}`, {initState: {}});

  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title={'预警编号'} value={state?.yswtbm ?? '暂无'}/>
        <Statistic title={'预警对象'} value={state?.dxxm ?? '暂无'}/>
      </Space>}
      loading={loading}
  >
    <BaseDescriptions columns={redColumns} isInEdit={false} dataSource={state}/>
  </PageContainer>;
}

export default RedTodo;