import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Divider, Input, Select, Space } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ProColumns } from '@ant-design/pro-table';

import { useHttp } from '../../utils/request';
import { informType } from '../../utils/nameMap';
import InformCreateModal from './InformCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';

export const baseColumns: ProColumns[] = [
  { title: '编号', dataIndex: 'code', width: 100 },
  { title: '类型', dataIndex: 'type', renderText: text => informType[text].name },
  { title: '下达时间', dataIndex: 'createTime' },
  { title: '下达部门', dataIndex: 'destDepartment' },
];

function InformList() {

  const columns: ProColumns[] = baseColumns.concat({
    title: '详情',
    key: 'operation',
    width: '5%',
    align: 'center',
    fixed: 'right',
    render: (_, record: any) => <Link to={`/lz/inform/${record.id}`}><ContainerOutlined/></Link>,
  });

  const { state, loading } = useHttp('/inform', { initState: [] });

  return <PageContainer
      title={'一单三书'}
      extra={
        <Space>
          <InformCreateModal httpPath={'inform'}/>
        </Space>
      }
  >
    <Space>
      <Select placeholder={'筛选'} dropdownMatchSelectWidth={200}>
        <Select.Option value={'COPY'}>抄告单</Select.Option>
        <Select.Option value={'OPINION'}>意见书</Select.Option>
        <Select.Option value={'ADVICE'}>建议书</Select.Option>
        <Select.Option value={'ANNOUNCE'}>第一种形态告知书</Select.Option>
      </Select>
      <Input.Search placeholder={'搜索'} enterButton/>
    </Space>
    <Divider/>

    <BaseEditableTable
        columns={columns}
        value={state}
        loading={loading}
    />
  </PageContainer>;
}

export default InformList;