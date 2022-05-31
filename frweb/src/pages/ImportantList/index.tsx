import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BaseEditableTable from '../../components/BaseEditableTable';
import ImportantCreateModal from './ImportantCreateModal';

export default function ImportantList() {

  const navigate = useNavigate();

  const columns: ProColumns[] = [
    { title: '事项名称', dataIndex: 'name' },
    { title: '事项类型', dataIndex: 'type' },
    { title: '提交人', dataIndex: 'submitter' },
    {
      title: '详情',
      dataIndex: 'operation',
      width: 100,
      align: 'center',
      render: (_, record: any) => <Tooltip title={'详情'}>
        <Button
            type={'primary'}
            icon={<FileTextOutlined/>}
            size={'small'}
            onClick={() => navigate(`/lz/important/${record.id}`)}
        />
      </Tooltip>,
    },
  ];

  const data = [
    {
      id: 1,
      name: '海盐县人民医院迁建工程',
      type: '重要项目',
      submitter: '王哲',
    }
  ];

  return <PageContainer
      extra={<Space>
        <ImportantCreateModal/>
      </Space>}
  >
    <BaseEditableTable columns={columns} value={data}/>
  </PageContainer>;
}