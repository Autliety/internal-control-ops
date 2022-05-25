import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function EvaluationList() {

  const navigate = useNavigate();

  const columns: ProColumns[] = [
    { title: '年度', dataIndex: 'year' },
    { title: '总分值', dataIndex: 'count' },
    { title: '考核指标总数（项）', dataIndex: 'amount' },
    { title: '系统评价得分', dataIndex: 'mark' },
    { title: '自评得分', dataIndex: 'mark' },
    { title: '互评得分', dataIndex: 'mark' },
    { title: '领导评价得分', dataIndex: 'mark' },
    { title: '综合得分', dataIndex: 'mark' },
    {
      title: '详情',
      dataIndex: 'operation',
      width: 100,
      align: 'center',
      render: (_, record: any) => <Tooltip title={'绩效详情'}>
        <Button
            type={'primary'}
            icon={<FileTextOutlined/>}
            size={'small'}
            onClick={() => navigate(`/pz/evaluation/leader/${record.year}`)}
        />
      </Tooltip>,
    },
  ];

  const data = [
    {
      id: 1,
      year: '2022',
      count: 100,
      amount: 14,
    },
  ];

  return <PageContainer>
    <BaseEditableTable columns={columns} value={data}/>
  </PageContainer>;
}