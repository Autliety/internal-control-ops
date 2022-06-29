import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { useNavigate } from 'react-router-dom';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import CommentCreateModal from './CommentCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';
import UserSelectCascader from '../../components/UserSelectCascader';
import { useHttp } from '../../utils/request';

export const baseColumns: ProColumns[] = [
  { title: '报告人', dataIndex: 'singleUser1', renderText: t => t.name, renderFormItem: () => <UserSelectCascader/> },
  { title: '报告人类别', dataIndex: 'content1' },
  { title: '会议类别', dataIndex: 'content2' },
  { title: '会议时间', dataIndex: 'time1', valueType: 'date' },
  { title: '述职方式', dataIndex: 'content3' },
  { title: '述职内容', dataIndex: 'longContent1', valueType: 'textarea', hideInTable: true },
  { title: '评议结果', dataIndex: 'content4', hideInTable: true },
  { title: '纳入廉政档案情况', dataIndex: 'content5', hideInTable: true },
];

function CommentList() {

  const navigate = useNavigate();
  const { state, loading } = useHttp('/ordinal/comment', { initState: [] });

  const columns = baseColumns.concat([
    {
      title: '详情',
      hideInSearch: true,
      dataIndex: 'operation',
      render: (_, record: any) => <Tooltip title={'查看详情'}><Button
          type={'primary'}
          icon={<FileTextOutlined/>}
          size={'small'}
          onClick={() => navigate(`/fr/lz/comment/${record.id}`)}
      />
      </Tooltip>,
      fixed: 'right',
      width: 120,
      align: 'center',
    }
  ]);

  return <PageContainer
      extra={
        <Space>
          <CommentCreateModal/>
        </Space>
      }
      loading={loading}
  >
    <BaseEditableTable columns={columns} value={state}/>
  </PageContainer>;
}

export default CommentList;