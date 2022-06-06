import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '@ant-design/pro-layout';
import BaseEditableTable from '../../components/BaseEditableTable';
import { Button, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import UserSelectCascader from '../../components/UserSelectCascader';
import { statusEnum } from '../../utils/nameMap';
import ThreeCreateModal from './ThreeCreateModal';


export const threeColumns: ProColumns[] = [
  { title: '序号', dataIndex: 'code', hideInForm: true },
  { title: '拟提交事项', dataIndex: 'title' },
  { title: '拟提交事项内容', dataIndex: 'content', hideInTable: true },
  { title: '议题来源', dataIndex: 'source'},
  { title: '提交人', dataIndex: 'user', renderFormItem: () => <UserSelectCascader/> },
  { title: '审核状态', dataIndex: 'status', valueEnum: statusEnum},
  { title: '决策时间', dataIndex: 'date', valueType: 'date'},
  { title: '决策方式', dataIndex: 'method'},
  { title: '决策过程描述', dataIndex: 'process', valueType: 'textarea', hideInTable: true},
  { title: '决策结果', dataIndex: 'result'},
  { title: '纪委监督意见', dataIndex: 'result', hideInForm: true},
];

export default function ThreeList() {

  const navigate = useNavigate();

  return <PageContainer
      extra={<ThreeCreateModal/>}
  >
    <BaseEditableTable
        columns={threeColumns.concat({
          title: '详情',
          dataIndex: 'operation',
          width: 100,
          align: 'center',
          render: (_, record: any) => <Tooltip title={'详情'}>
            <Button
                type={'primary'}
                icon={<FileTextOutlined/>}
                size={'small'}
                onClick={() => navigate(`/lz/three/${record.id}`)}
            />
          </Tooltip>,
        })}
        value={[]}
    />
  </PageContainer>;
}