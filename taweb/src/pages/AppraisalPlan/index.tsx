import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function AppraisalPlan() {

  const navigate = useNavigate();

  const appraisalColumns: ProColumns[] = [
        { title: '常规指标总分', dataIndex: 'totalScore' },
        { title: '常规指标评分', dataIndex: 'score' },
        { title: '额外增减分', dataIndex: 'point' },
        {
          title: '评分细则',
          dataIndex: 'detail',
          render: (_, c: any) => <Button
              type='primary'
              onClick={() => navigate('/appraisal/plan/appraisalDetail', {
                replace: false,
                state: { userId: c.user?.id },
              })}
          >
            评分细则
          </Button>
        }
      ],
      columns: ProColumns[] = [{ title: '被考评人', dataIndex: 'user' }],
      data = [
        {
          id: 1,
          user: { id: 20 },
          totalScore: 5,
          score: 4,
          point: 3,
        }
      ];

  return <PageContainer>
    <Divider orientation={'left'}>个人考评</Divider>
    <BaseEditableTable columns={appraisalColumns} value={data}/>

    <Divider orientation={'left'}>他人考评</Divider>
    <BaseEditableTable columns={columns.concat(appraisalColumns)} value={[]}/>
  </PageContainer>;
}