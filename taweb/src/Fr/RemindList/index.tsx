import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import RemindCreateModal from './RemindCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';
import UserSelectCascader from '../../components/UserSelectCascader';
import { useHttp } from '../../utils/request';

export const remindColumns: ProColumns[] = [
  { title: '序号', renderText: (_, r, index) => index + 1, hideInDescriptions: true, hideInForm: true },
  {
    title: '监督提醒人类别', dataIndex: 'content1', valueType: 'select', fieldProps: {
      options: ['区（镇）“一把手”', '区（镇）班子成员', '村（社区）“一把手”', '村（社区）班子成员'],
    },
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '监督提醒人',
    dataIndex: 'singleUser1',
    renderText: t => t.name,
    renderFormItem: () => <UserSelectCascader/>,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '被监督提醒人类别', dataIndex: 'content2', valueType: 'select', fieldProps: {
      options: [
        '区（镇）“一把手”',
        '区（镇）班子成员',
        '村（社区）“一把手”',
        '村（社区）班子成员',
        '村（社区）纪检监察组织负责人',
        '区（镇）纪（工）委书记',
      ],
    },
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '被监督提醒人',
    dataIndex: 'singleUser2',
    renderText: t => t.name,
    renderFormItem: () => <UserSelectCascader/>,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '监督提醒内容',
    dataIndex: 'longContent1',
    valueType: 'textarea',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '监督提醒方式', dataIndex: 'content3', valueType: 'select', fieldProps: {
      options: [
        '当面沟通交流',
        '系统平台交流',
        '其他方式',
      ],
    },
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '监督提醒时间',
    dataIndex: 'time1',
    valueType: 'date',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  { title: '情况反馈', dataIndex: 'longContent2', valueType: 'textarea', hideInTable: true },
];

function RemindList() {

  const navigate = useNavigate();
  const { state, loading } = useHttp('/ordinal/remind', { initState: [] });

  return <PageContainer
      extra={[<RemindCreateModal isFirstEdit size='middle'/>]}
      loading={loading}
  >
    <BaseEditableTable
        columns={remindColumns.concat({
          title: '详情',
          hideInSearch: true,
          dataIndex: 'operation',
          render: (_, record: any) => <Space>
            <Tooltip title={'查看详情'}><Button
                type={'primary'}
                icon={<FileTextOutlined/>}
                size={'small'}
                onClick={() => navigate(`/fr/lz/remind/${record.id}`)}
            />
            </Tooltip>
            <RemindCreateModal isFirstEdit={false} id={record.id}/>
          </Space>,
          fixed: 'right',
          width: 120,
          align: 'center',
        })}
        value={state}
    />
  </PageContainer>;
}

export default RemindList;