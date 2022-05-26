import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Progress, Space, Tooltip } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BaseEditableTable from '../../components/BaseEditableTable';

export const baseColumns: ProColumns[] = [
  { title: '措施编号', dataIndex: 'measureCode' },
  { title: '责任人', dataIndex: 'user' },
  { title: '实施日期', dataIndex: 'date' },
  { title: '实施地点', dataIndex: 'placement' },
  { title: '目标达成情况', dataIndex: 'detail', renderText: text => <Progress percent={text} size='small'/> },
]

export default function ContributeList() {

  const navigate = useNavigate();

  const columns: ProColumns[] = baseColumns.concat({
    title: '详情',
    dataIndex: 'operation',
    render: (_, record: any) => <Space>
      <Tooltip title={'查看详情'}>
        <Button
            type={'primary'}
            icon={<ContainerOutlined/>}
            size={'small'}
            onClick={() => navigate(`/lz/list/contribute/${record.id}`)}
        />
      </Tooltip>
    </Space>,
    fixed: 'right',
    width: 50,
    align: 'center',
  });

  const data = [
    {
      id: 1,
      user: '王哲',
      detail: '50',
    }
  ];

  return <PageContainer
      title={'履责情况'}
  >
    <BaseEditableTable columns={columns} value={data}/>

  </PageContainer>;
}