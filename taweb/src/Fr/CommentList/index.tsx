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
import FileUpload from '../../components/FileUpload';

export const baseColumns: ProColumns[] = [
  { title: '序号', renderText: (_, r, index) => index + 1, width: 50, hideInForm: true, hideInDescriptions: true },
  {
    title: '报告人', dataIndex: 'singleUser1', renderText: t => t.name, renderFormItem: () => <UserSelectCascader/>,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '报告人类别', dataIndex: 'content1', valueType: 'select',
    fieldProps: {
      options: ['区（镇）“一把手”', '区（镇）班子成员', '村（社区）“一把手”', '村（社区）班子成员']
    },
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '会议类别', dataIndex: 'content2', valueType: 'select',
    fieldProps: {
      options: ['县委常委会（扩大）会议', '区（镇）党委专题会议', '村（社区）党组织专题会议']
    },
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '会议时间',
    dataIndex: 'time1',
    valueType: 'date',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '述职述廉方式', dataIndex: 'content3', valueType: 'select',
    fieldProps: {
      options: ['口头方式', '书面方式']
    },
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '述职述廉内容', dataIndex: 'longContent1', valueType: 'textarea', hideInTable: true,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '相关附件', dataIndex: 'attach', renderFormItem: () => <FileUpload isInEdit/>, hideInTable: true,
    hideInDescriptions: true,
  },
  {
    title: '评议结果', dataIndex: 'longContent2', valueType: 'textarea', hideInTable: true,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '纳入廉政档案情况', dataIndex: 'content5', hideInTable: true,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
];

function CommentList() {

  const navigate = useNavigate();
  const { state, loading } = useHttp('/ordinal/comment', { initState: [] });

  return <PageContainer
      extra={[<CommentCreateModal isFirstEdit size='middle'/>]}
      loading={loading}
  >
    <BaseEditableTable
        columns={baseColumns.concat([
          {
            title: '详情',
            hideInSearch: true,
            dataIndex: 'operation',
            render: (_, record: any) => <Space>
              <Tooltip title={'详情'}><Button
                  type={'primary'}
                  icon={<FileTextOutlined/>}
                  size={'small'}
                  onClick={() => navigate(`/fr/lz/comment/${record.id}`)}
              />
              </Tooltip>
              <CommentCreateModal isFirstEdit={false} id={record.id}/>
            </Space>,
            fixed: 'right',
            width: 120,
            align: 'center',
          }
        ])}
        value={state}
    />
  </PageContainer>;
}

export default CommentList;