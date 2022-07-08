import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import LeaderCreateModal from './LeaderCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';
import UserSelectCascader from '../../components/UserSelectCascader';
import FileUpload from '../../components/FileUpload';
import { useHttp } from '../../utils/request';

export const leaderColumns: ProColumns[] = [
  {
    title: '受请托人类别', dataIndex: 'content1', valueType: 'select', fieldProps: {
      options: [
        '区（镇）“一把手”',
        '区（镇）班子成员',
        '职能站所负责人',
        '村（社区）“一把手”',
        '村（社区）班子成员',
      ],
    },
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '受请托人',
    dataIndex: 'singleUser1',
    renderText: u => u?.name,
    renderFormItem: () => <UserSelectCascader/>,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '请托日期',
    dataIndex: 'time1',
    valueType: 'date',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '插手干预事项类别', dataIndex: 'content2', valueType: 'select', fieldProps: {
      options: [
        '干部选拔任用',
        '土地使用权出让',
        '工程建设',
        '让地产开发与经营',
        '执纪执法活动',
        '其他事项',
      ],
    },
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  { title: '插手干预重大事项记录', dataIndex: 'content3' },
  { title: '插手干预重大事项报告', dataIndex: 'longContent1', valueType: 'textarea', hideInTable: true },
  { title: '核查处置', dataIndex: 'longContent2', valueType: 'textarea', hideInTable: true },
  {
    title: '附件上传',
    dataIndex: 'attach',
    renderFormItem: () => <FileUpload isInEdit/>,
    hideInDescriptions: true,
    hideInTable: true,
  },
];

function LeaderList() {

  const navigate = useNavigate();
  const { state } = useHttp('/ordinal/leader', { initState: [] });

  const columns = leaderColumns.concat({
    title: '详情',
    hideInSearch: true,
    dataIndex: 'operation',
    render: (_, record: any) => <Tooltip title={'查看详情'}><Button
        type={'primary'}
        icon={<FileTextOutlined/>}
        size={'small'}
        onClick={() => navigate(`/fr/lz/leader/${record.id}`)}
    />
    </Tooltip>,
    fixed: 'right',
    width: 120,
    align: 'center',
  });

  return <PageContainer
      extra={<Space>
        <LeaderCreateModal/>
      </Space>}
  >
    <BaseEditableTable columns={columns} value={state}/>
  </PageContainer>;
}

export default LeaderList;