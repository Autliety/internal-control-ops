import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BaseEditableTable from '../../components/BaseEditableTable';
import QuestionCreateModal from './QuestionCreateModal';

export const baseColumns: ProColumns[] = [
  { title: '约谈人', dataIndex: 'leader' },
  { title: '约谈对象', dataIndex: 'user' },
  { title: '约谈类别', dataIndex: 'type' },
  { title: '约谈时间', dataIndex: 'date' },
  { title: '约谈情形', dataIndex: 'station' },
];

export default function QuestionList() {

  const navigate = useNavigate();

  const columns: ProColumns[] = baseColumns.concat({
    title: '详情',
    dataIndex: 'operation',
    width: 100,
    align: 'center',
    render: (_, record: any) => <Tooltip title={'详情'}>
      <Button
          type={'primary'}
          icon={<FileTextOutlined/>}
          size={'small'}
          onClick={() => navigate(`/dz/question/${record.id}`)}
      />
    </Tooltip>,
  });

  const data = [
    {
      id: 1,
      leader: '王哲',
      user: '李勤根',
      type: '个别约谈',
      date: '2022-04-23',
      station: '工作不到位',
    }
  ];

  return <PageContainer
      extra={<Space>
        <QuestionCreateModal/>
      </Space>}
  >
    <BaseEditableTable columns={columns} value={data}/>
  </PageContainer>;
}