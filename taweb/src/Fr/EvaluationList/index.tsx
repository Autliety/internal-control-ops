import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';
import BaseDivider from '../../components/BaseDivider';
import { useAuth } from '../../utils/auth';

export default function EvaluationList({ page }) {

  const navigate = useNavigate();
  const { user } = useAuth();

  const columns: ProColumns[] = [
    { title: '年度', dataIndex: 'year' },
    { title: '姓名', dataIndex: 'user', renderText: t => t.name },
    { title: '考核指标总数（项）', dataIndex: 'amount' },
    { title: '系统评分【70%】', dataIndex: 'auto' },
    { title: '领导评分【20%】', dataIndex: 'leader' },
    { title: '自评得分【10%】', dataIndex: 'self' },
    { title: '综合得分', dataIndex: 'total' },
    {
      title: '详情',
      dataIndex: 'operation',
      width: 100,
      align: 'center',
      render: (_, record: any) => <Tooltip title={'绩效详情'}>
        <Button
            type={'primary'}
            icon={<FileTextOutlined />}
            size={'small'}
            onClick={() => navigate(`/fr/pz/evaluation/${page}/${record.year}?userId=${record.user?.id}`)}
        />
      </Tooltip>,
    },
  ];

  const { state, loading } = useHttp('/usereva', { initState: [] });

  return <PageContainer loading={loading}>
    <BaseEditableTable columns={columns} value={[state?.find(item => item.user?.id === user.id)]} />

    {
        state?.filter(item => item.user?.id !== user.id).length === 0 || <>
          <BaseDivider title={'【他人评分】'} />
          <BaseEditableTable columns={columns} value={state?.filter(item => item.user?.id !== user.id)} />
        </>
    }

  </PageContainer>;
}