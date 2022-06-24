import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import RemindCreateModal from './RemindCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';
import UserSelectCascader from '../../components/UserSelectCascader';

export const remindColumns: ProColumns[] = [
  { title: '监督提醒人', dataIndex: 'requestUser', renderFormItem: () => <UserSelectCascader/> },
  {
    title: '监督提醒人类别', dataIndex: 'requestUserType', valueType: 'select', fieldProps: {
      options: [
        '镇（街道）“一把手”',
        '镇（街道）班子成员',
        '村（社区）“一把手”',
        '村（社区）班子成员',
      ],
    },
  },
  { title: '被监督提醒人', dataIndex: 'targetUser', renderFormItem: () => <UserSelectCascader/> },
  {
    title: '被监督提醒人类别', dataIndex: 'targetUserType', valueType: 'select', fieldProps: {
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
  { title: '监督提醒内容', dataIndex: 'content', valueType: 'textarea' },
  {
    title: '监督提醒方式', dataIndex: 'method', valueType: 'select', fieldProps: {
      options: [
        '当面沟通交流',
        '系统平台交流',
        '其他方式',
      ],
    },
  },
  { title: '监督提醒时间', dataIndex: 'createTime', valueType: 'dateTime' },
  { title: '情况反馈', dataIndex: 'feedback', valueType: 'textarea' },
];

export const remindData = {
  requestUser: '王哲',
  requestUserType: '镇（街道）班子成员',
  targetUser: '沈潇雅',
  targetUserType: '镇（街道）班子成员',
  content: '测试数据',
  method: '当面沟通交流',
};

function RemindList() {

  const navigate = useNavigate();

  return <PageContainer
      extra={
        <Space>
          <RemindCreateModal/>
        </Space>
      }
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
        value={[remindData]}
    />
  </PageContainer>;
}

export default RemindList;