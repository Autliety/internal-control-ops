import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Link } from 'react-router-dom';
import { ContainerOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import InformCreateModal from '../InformList/InformCreateModal';
import { baseColumns } from '../InformList';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function DisposalList() {

  const columns: ProColumns[] = baseColumns.concat({
    title: '详情',
    key: 'operation',
    width: '5%',
    align: 'center',
    fixed: 'right',
    render: (_, record: any) => <Link to={`/lz/disposal/${record.id}`}><ContainerOutlined/></Link>,
  });

  return <PageContainer
      title={'第一种形态处置运用'}
      extra={
        <Space>
          <InformCreateModal isDisposal httpPath={'disposal'}/>
        </Space>
      }
  >
    <BaseEditableTable
        columns={columns}
        value={[]}
    />
  </PageContainer>;
}