import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Input, Select, Space, Tooltip } from 'antd';
import { ContainerOutlined, FileSearchOutlined, PrinterOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BaseTable from '../../components/BaseTable';
import { useHttp } from '../../utils/request';
import MatterPartingModal from './MatterPartingModal';
import { matterColumns } from '../Matter/MatterInfo';

export default function MatterList() {

  const navigate = useNavigate();
  const { state, loading } = useHttp('/matter', { initState: [] });

  const columns = matterColumns.concat([
    {
      dataIndex: 'operation',
      render: (_, record: any) => <Space>
        <Tooltip title={'查看详情'}>
          <Button
              type={'primary'}
              icon={<ContainerOutlined />}
              size={'small'}
              onClick={() => navigate(`/matter/${record.id}`)}
          />
        </Tooltip>
      </Space>,
      fixed: 'right',
      width: 50,
      align: 'center',
    },
  ]);

  return <PageContainer
      title={'问题清单'}
      extra={
        <Space size={'middle'}>
          <Button><PrinterOutlined />打印清单</Button>
          <MatterPartingModal dataSource={state} />
        </Space>
      }
  >
    <Space>
      <Select defaultValue={0} dropdownMatchSelectWidth={200}>
        <Select.Option value={0}>全部</Select.Option>
        <Select.Option value={1}>党委</Select.Option>
        <Select.Option value={2}>xx站办</Select.Option>
        <Select.Option value={3}>个人</Select.Option>
      </Select>
      <Input.Search placeholder={'搜索'} enterButton />
      <Button><FileSearchOutlined />精确查找</Button>
    </Space>

    <Divider />
    <BaseTable
        loading={loading}
        columns={columns}
        dataSource={state}
    />

  </PageContainer>;
}