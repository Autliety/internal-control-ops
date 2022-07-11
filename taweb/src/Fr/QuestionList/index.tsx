import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BaseEditableTable from '../../components/BaseEditableTable';
import QuestionCreateModal from './QuestionCreateModal';
import UserSelectCascader from '../../components/UserSelectCascader';
import { useHttp } from '../../utils/request';
import FileUpload from '../../components/FileUpload';

export const questionColumns: ProColumns[] = [
  {
    title: '约谈人',
    dataIndex: 'singleUser1',
    renderText: u => u?.name,
    renderFormItem: () => <UserSelectCascader/>,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '约谈对象',
    dataIndex: 'destUser',
    renderText: u => u?.name,
    renderFormItem: () => <UserSelectCascader/>,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '约谈方式', dataIndex: 'content1', fieldProps: {
      options: [
        '集体约谈', '个别约谈',
      ],
    },
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '约谈时间',
    dataIndex: 'time1',
    valueType: 'date',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '约谈内容',
    dataIndex: 'longContent1',
    valueType: 'textarea',
    hideInTable: true,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '相关附件',
    dataIndex: 'attach',
    renderFormItem: () => <FileUpload isInEdit/>,
    hideInTable: true,
    hideInDescriptions: true,
  },
];

export default function QuestionList() {

  const navigate = useNavigate();
  const { state } = useHttp('/ordinal/question', { initState: [] });

  const columns: ProColumns[] = questionColumns.concat({
    title: '详情',
    dataIndex: 'operation',
    width: 100,
    align: 'center',
    render: (_, record: any) => <Tooltip title={'查看详情'}>
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
    <BaseEditableTable columns={columns} value={state}/>
  </PageContainer>;
}