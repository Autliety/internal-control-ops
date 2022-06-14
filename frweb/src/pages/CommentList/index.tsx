import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { useNavigate } from 'react-router-dom';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import CommentCreateModal from './CommentCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';

export const baseColumns: ProColumns[] = [
  { title: '报告人', dataIndex: 'user' },
  { title: '报告人类别', dataIndex: 'userType' },
  { title: '会议类别', dataIndex: 'meetingType' },
  { title: '会议时间', dataIndex: 'time' },
  { title: '述职方式', dataIndex: 'way' },
  { title: '述职内容', dataIndex: 'content' },
  { title: '评议结果', dataIndex: 'result' },
  { title: '纳入廉政档案情况', dataIndex: 'situation' },
];

function CommentList() {

  const navigate = useNavigate();
  const columns = baseColumns.slice(0, 4).concat([
    { title: '评议结果', dataIndex: 'result' },
    {
      title: '详情',
      hideInSearch: true,
      dataIndex: 'operation',
      render: (_, record: any) => <Tooltip title={'查看详情'}><Button
          type={'primary'}
          icon={<FileTextOutlined/>}
          size={'small'}
          onClick={() => navigate(`/lz/comment/${record.id}`)}
      />
      </Tooltip>,
      fixed: 'right',
      width: 120,
      align: 'center',
    }
  ]);

  const data = [
    {
      id: 1,
      user: '王哲',
      userType: '镇（街道）一把手',
      meetingType: '县委常委会（扩大）会议',
      time: '2022-02-25',
      result: '情况属实',
    }
  ];

  return <PageContainer
      extra={
        <Space>
          <CommentCreateModal/>
        </Space>
      }
  >
    <BaseEditableTable columns={columns} value={data}/>
  </PageContainer>;
}

export default CommentList;