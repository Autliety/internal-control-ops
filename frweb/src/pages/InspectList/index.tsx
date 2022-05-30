import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from '../../components/BaseEditableTable';
import { PageContainer } from '@ant-design/pro-layout';
import InspectCreateModal from './InspectCreateModal';

export const inspectColumns: ProColumns[] = [
  { title: '检查人', dataIndex: 'user' },
  { title: '检查领域', dataIndex: 'field' },
  { title: '涉及部门', dataIndex: 'department' },
  { title: '检查时间', dataIndex: 'createTime', valueType: 'dateTime' },
  { title: '检查项目名称', dataIndex: 'name', valueType: 'textarea' },
  { title: '检查开展情况', dataIndex: 'detail', valueType: 'textarea' },
];

export default function InspectList() {
  return <PageContainer
      extra={<InspectCreateModal/>}
  >
    <BaseEditableTable columns={inspectColumns} value={[]} />
  </PageContainer>;
}