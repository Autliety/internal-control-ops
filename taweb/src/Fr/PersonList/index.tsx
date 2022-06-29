import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import PersonCreateModal from './PersonCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';

export const baseColumns: ProColumns[] = [
  { title: '报告人姓名', dataIndex: ['requestUser', 'name'] },
  { title: '报告人类别', dataIndex: 'content1' },
  { title: '报告类别', dataIndex: 'content2' },
  { title: '报告时间', dataIndex: 'time1', valueType: 'date' },
  { title: '内部公开情况', dataIndex: 'content3' },
  { title: '组织部门监督意见', dataIndex: 'content4' },
  { title: '报告内容', dataIndex: 'longContent1' },
];

function PersonList() {

  const navigate = useNavigate();
  const { state, loading } = useHttp('/ordinal/personal', { initState: [] });

  return <PageContainer
      extra={<Space>
        <PersonCreateModal/>
      </Space>}
      loading={loading}
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
              onClick={() => navigate(`/fr/lz/person/${record.id}`)}
          />
          </Tooltip>,
          fixed: 'right',
          width: 120,
          align: 'center',
        })}
        value={state}
    />
  </PageContainer>;
}

export default PersonList;