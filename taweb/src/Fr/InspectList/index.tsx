import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { useNavigate } from 'react-router-dom';
import { Button, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';

import InspectCreateModal from './InspectCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';
import UserSelectCascader from '../../components/UserSelectCascader';
import FileUpload from '../../components/FileUpload';

export const inspectColumns: ProColumns[] = [
  { title: '监督检查人', dataIndex: 'singleUser1', renderText: u => u?.name, renderFormItem: () => <UserSelectCascader/> },
  { title: '监督检查领域', dataIndex: 'content1' },
  { title: '涉及部门', dataIndex: 'content2', hideInTable: true },
  { title: '监督检查日期', dataIndex: 'time1', valueType: 'date' },
  { title: '项目名称', dataIndex: 'content3' },
  { title: '检查情况', dataIndex: 'longContent1', valueType: 'textarea', hideInTable: true },
  { title: '发现问题处置及整改情况', dataIndex: 'longContent2', valueType: 'textarea', hideInTable: true },
  { title: '上传附件', dataIndex: 'attach', renderFormItem: () => <FileUpload isInEdit/>, hideInTable: true, hideInDescriptions: true },
];

export default function InspectList() {

  const { state } = useHttp('/ordinal/inspect', { initState: [] });
  const navigate = useNavigate();

  return <PageContainer
      extra={<InspectCreateModal/>}
  >
    <BaseEditableTable
        columns={inspectColumns.concat({
          title: '详情',
          dataIndex: 'operation',
          width: 100,
          align: 'center',
          render: (_, record: any) => <Tooltip title={'详情'}>
            <Button
                type={'primary'}
                icon={<FileTextOutlined/>}
                size={'small'}
                onClick={() => navigate(`/fr/lz/inspect/${record.id}`)}
            />
          </Tooltip>,
        })}
        value={state}
    />
  </PageContainer>;
}