import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Select, Space, Tooltip } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ProColumns } from '@ant-design/pro-table';

import { useHttp } from '../../utils/request';
import { informType } from '../../utils/nameMapFr';
import InformCreateModal from './InformCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';
import showInfo from '../../utils/showInfo';

export const informColumns: ProColumns[] = [
  { title: '序号', dataIndex: 'id', width: 100 },
  { title: '类型', dataIndex: 'type', renderText: text => informType[text].name },
  { title: '签发主体', dataIndex: ['fromUser', 'name'] },
  { title: '接收主体', dataIndex: ['destUser', 'name'] },
  { title: '截至日期', dataIndex: 'endDate', renderText: ((_, r) => r.matter?.[0]?.endDate) },
  {
    title: '概述',
    dataIndex: 'content',
    renderText: (t => <>
      {t.substring(0, 30)}
      {t.length > 30 && <Button type='link' onClick={() => showInfo(t)}>...[详情]</Button>}
    </>),
    hideInDescriptions: true,
  },
];

export default function InformList() {

  const navigate = useNavigate();

  const columns: ProColumns[] = informColumns.concat({
    hideInSearch: true,
    dataIndex: 'operation',
    render: (_, record: any) => <Space>
      <Tooltip title={'查看详情'}>
        <Button
            type={'primary'}
            icon={<ContainerOutlined/>}
            size={'small'}
            onClick={() => navigate(`/fr/dz/inform/${record.id}`)}
        />
      </Tooltip>
    </Space>,
    fixed: 'right',
    width: 50,
    align: 'center',
  });

  const { state, loading } = useHttp('/inform', { initState: [] });

  return <PageContainer
      extra={
        <Space>
          <InformCreateModal/>
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
    </Space>
    <Divider/>
    <BaseEditableTable
        columns={columns}
        value={state}
        loading={loading}
    />
  </PageContainer>;
}