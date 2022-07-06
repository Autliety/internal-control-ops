import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Link, useSearchParams } from 'react-router-dom';
import { ContainerOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import InformCreateModal from '../InformList/InformCreateModal';
import { informColumns } from '../InformList';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';

export default function DisposalList() {

  const { state } = useHttp('/ordinal/disposal', { initState: []});
  const [searchParams] = useSearchParams();
  console.log('searchParams', searchParams.get('informId')); //todo inform info

  const columns: ProColumns[] = informColumns.concat({
    title: '详情',
    key: 'operation',
    width: '5%',
    align: 'center',
    fixed: 'right',
    render: (_, record: any) => <Link to={`/fr/lz/disposal/${record.id}`}><ContainerOutlined/></Link>,
  });

  return <PageContainer
      title={'第一种形态处置运用'}
      extra={
        <Space>
          <InformCreateModal isDisposal/>
        </Space>
      }
  >
    <BaseEditableTable
        columns={columns}
        value={state}
    />
  </PageContainer>;
}