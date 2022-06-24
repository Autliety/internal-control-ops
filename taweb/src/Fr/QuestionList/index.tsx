import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BaseEditableTable from '../../components/BaseEditableTable';
import QuestionCreateModal from './QuestionCreateModal';

export const questionColumns: ProColumns[] = [
  { title: '约谈人', dataIndex: 'leader' },
  { title: '约谈对象', dataIndex: 'user' },
  { title: '约谈方式', dataIndex: 'type' },
  { title: '时间', dataIndex: 'time', valueType: 'dateTime' },
  { title: '约谈内容', dataIndex: 'content', valueType: 'textarea' },
];

export const questionData = [
  {
    id: 1,
    user: '王哲',
    leader: '李勤根',
    type: '个别约谈',
    time: '2022-04-23 12:00:00',
  }
]

export default function QuestionList() {

  const navigate = useNavigate();

  const columns: ProColumns[] = questionColumns.concat({
    title: '详情',
    dataIndex: 'operation',
    width: 100,
    align: 'center',
    render: (_, record: any) => <Tooltip title={'详情'}>
      <Button
          type={'primary'}
          icon={<FileTextOutlined/>}
          size={'small'}
          onClick={() => navigate(`/fr/dz/question/${record.id}`)}
      />
    </Tooltip>,
  });

  return <PageContainer
      extra={<Space>
        <QuestionCreateModal/>
      </Space>}
  >
    <BaseEditableTable columns={columns} value={questionData}/>
  </PageContainer>;
}