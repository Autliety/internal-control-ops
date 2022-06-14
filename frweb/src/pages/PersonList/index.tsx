import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import PersonCreateModal from './PersonCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';

export const baseColumns: ProColumns[] = [
  { title: '报告人姓名', dataIndex: 'user' },
  { title: '报告人类别', dataIndex: 'userType' },
  { title: '报告类别', dataIndex: 'type' },
  { title: '报告时间', dataIndex: 'time' },
  { title: '内部公开情况', dataIndex: 'public' },
  { title: '组织部门监督意见', dataIndex: 'opinion' },
  { title: '报告内容', dataIndex: 'content' },
];

function PersonList() {

  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      user: '王哲',
      userType: '领导干部',
      type: '年度报告',
      time: '2022-05-25',
    }
  ];

  return <PageContainer
      extra={<Space>
        <PersonCreateModal/>
      </Space>}
  >
    <BaseEditableTable
        columns={baseColumns.slice(0, 4).concat({
          title: '详情',
          hideInSearch: true,
          dataIndex: 'operation',
          render: (_, record: any) => <Tooltip title={'查看详情'}><Button
              type={'primary'}
              icon={<FileTextOutlined/>}
              size={'small'}
              onClick={() => navigate(`/lz/person/${record.id}`)}
          />
          </Tooltip>,
          fixed: 'right',
          width: 120,
          align: 'center',
        })}
        value={data}
    />
  </PageContainer>;
}

export default PersonList;