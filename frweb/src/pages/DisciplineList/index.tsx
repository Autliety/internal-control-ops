import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '@ant-design/pro-layout';
import BaseEditableTable from '../../components/BaseEditableTable';
import { Button, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import DisciplineCreateModal from './DisciplineCreateModal';


export const discipColumns: ProColumns[] = [
  { title: '序号', dataIndex: 'code' },
  { title: '上报人', dataIndex: 'user' },
  { title: '违纪违法类型', dataIndex: 'type' },
  { title: '情况概述', dataIndex: 'content' },
  { title: '上报时间', dataIndex: 'time' },
];

export default function DisciplineList() {

  const navigate = useNavigate();

  return <PageContainer
      extra={<DisciplineCreateModal/>}
  >
    <BaseEditableTable
        columns={discipColumns.concat({
          title: '详情',
          dataIndex: 'operation',
          width: 100,
          align: 'center',
          render: (_, record: any) => <Tooltip title={'详情'}>
            <Button
                type={'primary'}
                icon={<FileTextOutlined/>}
                size={'small'}
                onClick={() => navigate(`/lz/discipline/${record.id}`)}
            />
          </Tooltip>,
        })}
        value={[]}
    />
  </PageContainer>;
}