import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Select, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import LearningCreateModal from './LearningCreateModal';
import AttendeeSelectCard from '../MeetingList/AttendeeSelectCard';
import { useHttp } from '../../utils/request';
import BaseEditableTable from '../../components/BaseEditableTable';
import FileUpload from '../../components/FileUpload';

export const learningColumns: ProColumns[] = [
  {
    title: '学习时间',
    dataIndex: 'content1',
    valueType: 'dateMonth',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  { title: '学习地点', dataIndex: 'content2', formItemProps: { rules: [{ required: true, message: '此项必填' }] } },
  { title: '学习主题', dataIndex: 'content3', formItemProps: { rules: [{ required: true, message: '此项必填' }] } },
  {
    title: '组织形式',
    dataIndex: 'content4',
    renderFormItem: () => <Select placeholder='请选择'>
      <Select.Option value='领学'>领学</Select.Option>
      <Select.Option value='交流'>交流</Select.Option>
      <Select.Option value='堂课'>堂课</Select.Option>
    </Select>,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  { title: '负责人', dataIndex: 'destUser', hideInForm: true, renderText: u => u.name},
  {
    title: '参加对象',
    dataIndex: 'multiUser1',
    renderFormItem: () => <AttendeeSelectCard/>,
    hideInTable: true,
    hideInDescriptions: true,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '学习内容',
    dataIndex: 'longContent1',
    valueType: 'textarea',
    hideInTable: true,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '上传附件',
    dataIndex: 'attach',
    renderFormItem: () => <FileUpload isInEdit/>,
    hideInTable: true,
    hideInDescriptions: true
  },
];

export default function LearnList() {

  const navigate = useNavigate();
  const { state, loading } = useHttp('/ordinal/learning', { initState: [] });

  return <PageContainer
      extra={[<LearningCreateModal/>]}
      loading={loading}
  >
    <BaseEditableTable
        columns={learningColumns.concat({
          title: '详情',
          hideInSearch: true,
          dataIndex: 'operation',
          render: (_, record: any) => <Tooltip title={'学习记录详情'}>
            <Button
                type={'primary'}
                icon={<FileTextOutlined/>}
                size={'small'}
                onClick={() => navigate(`/fr/mz/learning/${record.id}`)}
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

