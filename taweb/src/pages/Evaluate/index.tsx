import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';
import { useAuth } from '../../utils/auth';

export const evaluateColumns: ProColumns[] = [
  { title: '被考评人', dataIndex: ['user', 'name'] },
  { title: '常规指标总分', dataIndex: 'assessmentPoint', valueType: 'digit' },
  { title: '常规指标得分', dataIndex: 'percent', valueType: 'digit' },
  { title: '额外增减分', dataIndex: 'externalPoint' },
  { title: '加权总评分', dataIndex: 'total' },
];

export default function Evaluate() {

  const { user } = useAuth();
  const navigate = useNavigate();
  const { state, loading } = useHttp('/evaluate', { initState: [] });

  const columns = evaluateColumns.concat(
      {
        title: '评分细则',
        dataIndex: 'detail',
        render: (_, c: any) => <Button
            type="primary"
            onClick={() => navigate(`/evaluate/${c?.user?.id}`)}
        >
          评分细则
        </Button>,
      });

  return <PageContainer
      loading={loading}
  >
    <Divider orientation={'left'}>个人考评</Divider>
    <BaseEditableTable columns={columns.slice(1)} value={state.find(e => e?.user?.id === user.id)}/>

    <Divider orientation={'left'}>他人考评</Divider>
    <BaseEditableTable columns={columns} value={state}/>
  </PageContainer>;
}