import React from 'react';
import BaseEditableTable from '../../components/BaseEditableTable';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { progressColumns } from '../Progress/ProgressInfo';

export default function ProgressTable({ isSearch = false, data }) {

  const navigate = useNavigate();
  const columns: ProColumns[] = progressColumns.concat({
    title: '详情',
    dataIndex: 'operation',
    render: (_, record: any) => <Space>
      <Tooltip title={'查看详情'}>
        <Button
            type={'primary'}
            icon={<ContainerOutlined/>}
            size={'small'}
            onClick={() => navigate(`/lz/list/progress/${record.id}`)}
        />
      </Tooltip>
    </Space>,
    fixed: 'right',
    width: 50,
    align: 'center',
  });
  return <>
    <BaseEditableTable isSearch={isSearch} columns={columns} value={data}/>
  </>;
}