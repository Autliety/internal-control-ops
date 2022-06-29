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
  { title: '监督提醒人', dataIndex: 'singleUser1', renderText: t => t.name, renderFormItem: () => <UserSelectCascader/> },
  {
    title: '监督提醒人类别', dataIndex: 'content1', valueType: 'select', fieldProps: {
      options: [
        '镇（街道）“一把手”',
        '镇（街道）班子成员',
        '村（社区）“一把手”',
        '村（社区）班子成员',
      ],
    },
  },
  { title: '被监督提醒人', dataIndex: 'singleUser2', renderText: t => t.name, renderFormItem: () => <UserSelectCascader/> },
  {
    title: '被监督提醒人类别', dataIndex: 'content2', valueType: 'select', fieldProps: {
      options: [
        '镇（街道）“一把手”',
        '镇（街道）班子成员',
        '村（社区）“一把手”',
        '村（社区）班子成员',
        '村（社区）纪检监察组织负责人',
        '镇（街道）纪（工）委书记',
      ],
    },
  },
  { title: '监督提醒内容', dataIndex: 'longContent1', valueType: 'textarea' },
  {
    title: '监督提醒方式', dataIndex: 'content3', valueType: 'select', fieldProps: {
      options: [
        '当面沟通交流',
        '系统平台交流',
        '其他方式',
      ],
    },
  },
  { title: '监督提醒时间', dataIndex: 'time1', valueType: 'date' },
  { title: '情况反馈', dataIndex: 'content4', valueType: 'textarea' },
];

function RemindList() {

  const navigate = useNavigate();
  const { state, loading } = useHttp('/ordinal/remind', { initState: [] });

  return <PageContainer
      extra={
        <Space>
          <RemindCreateModal/>
        </Space>
      }
      loading={loading}
  >
    <BaseEditableTable
        columns={remindColumns.slice(0, 4).concat({
          title: '详情',
          hideInSearch: true,
          dataIndex: 'operation',
          render: (_, record: any) => <Tooltip title={'查看详情'}><Button
              type={'primary'}
              icon={<FileTextOutlined/>}
              size={'small'}
              onClick={() => navigate(`/fr/lz/remind/${record.id}`)}
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

export default RemindList;