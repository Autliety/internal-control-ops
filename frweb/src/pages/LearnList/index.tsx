import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from '../../components/BaseEditableTable';
import { Button, Space, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import LearningCreateModal from './LearningCreateModal';
import AttendeeSelectCard from '../MeetingList/AttendeeSelectCard';

export const learningColumns: ProColumns[] = [
  { title: '年度', dataIndex: 'year' },
  { title: '月份', dataIndex: 'month' },
  { title: '学习内容', dataIndex: 'content', valueType: 'textarea' },
  { title: '经办人', dataIndex: 'user', hideInTable: true },
  { title: '参加对象', dataIndex: 'attendUser', renderFormItem: () => <AttendeeSelectCard /> },
  { title: '创建日期', dataIndex: 'createDate', valueType: 'date', hideInForm: true },
];

export const learningData = [
  {
    id: 1,
    year: '2022',
    month: '1',
    content: `会议传达学习了习近平总书记《在中央政协工作会议暨庆祝中国人民政治协商会议成立70周年大会上的讲话》`,
    attendUser: '赵小龙、王哲、吴胜杰、李勤根',
    user: '党委',
  },
];

export default function LearnList() {

  const navigate = useNavigate();

  const columns = learningColumns.concat({
    title: '操作',
    hideInSearch: true,
    dataIndex: 'operation',
    render: (_, record: any) => <Tooltip title={'填写学习记录'}>
      <Button
          type={'primary'}
          icon={<EditOutlined/>}
          size={'small'}
          onClick={() => navigate(`/mz/learning/${record.id}`)}
      />
    </Tooltip>,
    fixed: 'right',
    width: 120,
    align: 'center',
  });


  return <PageContainer
      extra={<Space>
        <LearningCreateModal/>
      </Space>}
  >
    <BaseEditableTable columns={columns} value={learningData}/>
  </PageContainer>;
}

