import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ContainerOutlined } from '@ant-design/icons';

import { useHttp } from '../../utils/request';
import CreateModal from './CreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';
import { ProColumns } from '@ant-design/pro-table';

export const planColumns: ProColumns[] = [
  { title: '指标编号', dataIndex: ['assessment', 'code'], hideInDescriptions: true },
  { title: '指标名称', dataIndex: ['assessment', 'name'], hideInDescriptions: true },
  { title: '计划编号', dataIndex: 'code' },
  { title: '措施数', dataIndex: 'count', valueType: 'digit' },
  { title: '责任单位', dataIndex: ['department', 'name'] },
  { title: '负责人', dataIndex: ['user', 'name'] },
  { title: '计划完整度', dataIndex: 'progress', render: () => '100%' },
  { title: '更新时间', dataIndex: 'updateTime' },
];

export default function PlanList() {

  const navigate = useNavigate();
  const { state } = useHttp('/plan', { initState: [] });

  return <PageContainer
      extra={[
        <CreateModal/>,
      ]}
  >

    <BaseEditableTable
        columns={planColumns.concat({
              title: '操作',
              dataIndex: 'operation',
              render: (_, record: any) => <Space>
                <Button
                    type={'primary'}
                    icon={<ContainerOutlined/>}
                    size={'small'}
                    onClick={() => navigate(`/plan/${record.id}`)}
                />
              </Space>,
              fixed: 'right',
              width: 50,
              align: 'center',
            },
        )}
        value={state}
    />

  </PageContainer>;
}
