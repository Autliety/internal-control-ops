import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Link } from 'react-router-dom';
import { ContainerOutlined } from '@ant-design/icons';
import BaseEditableTable from '../../components/BaseEditableTable';
import ReportCreateModal from './ReportCreateModal';

export const reportColumns: ProColumns[] = [
  { title: '履责主体', dataIndex: 'user' },
  { title: '履责情况报告', dataIndex: 'content', valueType: 'textarea' },
  { title: '报告日期', dataIndex: 'createDate', valueType: 'date' },
  { title: '监督评议主体', dataIndex: 'reviewUser' },
  { title: '监督评议意见', dataIndex: 'review' },
  { title: '监督评议时间', dataIndex: 'reviewTime' },

];

export default function ReportList() {

  return <PageContainer
      extra={
        <ReportCreateModal/>
      }
  >
    <BaseEditableTable
        columns={reportColumns.concat({
              title: '详情',
              key: 'operation',
              width: '5%',
              align: 'center',
              fixed: 'right',
              render: (_, record: any) => <Link to={`/lz/report/${record.id}`}><ContainerOutlined/></Link>,
            },
        )}
        value={[]}
    />

  </PageContainer>;
}

