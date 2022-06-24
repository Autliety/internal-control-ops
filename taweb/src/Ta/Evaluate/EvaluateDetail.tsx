import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Divider } from 'antd';
import { ProColumns } from '@ant-design/pro-table';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import EvaluateDetailCreate from './EvaluateDetailCreate';
import BaseEditableTable from '../../components/BaseEditableTable';
import BaseDescriptions from '../../components/BaseDescriptions';
import { evaluateColumns } from './index';

function EvaluateDetail() {

  const { id } = useParams();
  const { state } = useHttp(`/evaluate/${id}`);

  const columns: ProColumns[] = [
    { title: '指标编号', dataIndex: ['external', 'code'] },
    { title: '指标名称', dataIndex: ['external', 'name'] },
    { title: '分值', dataIndex: ['external', 'point'], valueType: 'digit' },
  ];

  return <PageContainer
      extra={[
        <EvaluateDetailCreate userId={id}/>,
      ]}
  >
    <Divider orientation={'left'}>考评情况</Divider>
    <BaseDescriptions columns={evaluateColumns} dataSource={state}/>

    <Divider orientation={'left'}>常规指标细则</Divider>
    <BaseEditableTable columns={columns} value={[]}/>

    <Divider orientation={'left'}>增减分指标细则</Divider>
    <BaseEditableTable
        columns={columns}
        value={state.externalUsage}
        isInEdit
        isOnlyDelete={true}
        disableAdd
    />

  </PageContainer>;
}

export default EvaluateDetail;