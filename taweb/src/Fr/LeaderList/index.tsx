import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import LeaderCreateModal from './LeaderCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';

export const baseColumns: ProColumns[] = [
  { title: '受请托人类别', dataIndex: 'userType' },
  { title: '受请托人姓名', dataIndex: 'user' },
  { title: '干预事项类别', dataIndex: 'type' },
  { title: '事项记录', dataIndex: 'record' },
  { title: '事项报告', dataIndex: 'report' },
  { title: '核查处置', dataIndex: 'disposal' },
];


function LeaderList() {

  const navigate = useNavigate();

  const columns = baseColumns.slice(0, 3).concat({
    title: '详情',
    hideInSearch: true,
    dataIndex: 'operation',
    render: (_, record: any) => <Tooltip title={'查看详情'}><Button
        type={'primary'}
        icon={<FileTextOutlined/>}
        size={'small'}
        onClick={() => navigate(`/fr/lz/leader/${record.id}`)}
    />
    </Tooltip>,
    fixed: 'right',
    width: 120,
    align: 'center',
  });

  const data = [
    {
      id: 1,
      userType: '镇（街道）班子成员',
      user: '赵小龙',
      type: '干部选拔任用',
    }
  ];


  return <PageContainer
      extra={<Space>
        <LeaderCreateModal/>
      </Space>}
  >
    <BaseEditableTable columns={columns} value={data}/>
  </PageContainer>;
}

export default LeaderList;