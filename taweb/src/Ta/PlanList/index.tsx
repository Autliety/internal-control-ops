import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ContainerOutlined } from '@ant-design/icons';

import { useHttp } from '../../utils/request';
import BaseEditableTable from '../../components/BaseEditableTable';
import { ProColumns } from '@ant-design/pro-table';
import { statusEnum } from '../../utils/nameMapTa';
import PlanCreateModal from "../Assessment/PlanCreateModal";

export const planColumns: ProColumns[] = [
  { title: '指标编号', dataIndex: ['assessment', 'code'], hideInDescriptions: true },
  { title: '指标名称', dataIndex: ['assessment', 'name'], hideInDescriptions: true },
  { title: '计划编号', dataIndex: 'code' },
  { title: '措施数', dataIndex: 'detailCount', valueType: 'digit' },
  { title: '责任单位', dataIndex: ['department', 'name'] },
  { title: '负责人', dataIndex: ['user', 'name'] },
  { title: '状态', dataIndex: 'status', valueEnum: statusEnum },
  // { title: '备注', dataIndex: 'remark', valueType: 'textarea' },
  // { title: '计划完整度', dataIndex: 'progress' },
  { title: '更新时间', dataIndex: 'updateTime', valueType: 'dateTime' },
];

export default function PlanList() {

  const navigate = useNavigate();
  const { state } = useHttp('/plan', { initState: [] });

  return <PageContainer
      extra={[<PlanCreateModal isSelectAssessment={true}/>]}
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
                    onClick={() => navigate(`/ta/plan/${record.id}`)}
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
