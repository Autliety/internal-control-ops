import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import TalkCreateModal from './TalkCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';

export const baseColumns: ProColumns[] = [
  { title: '谈话指向', dataIndex: 'point' },
  { title: '谈话类型', dataIndex: 'type' },
  { title: '谈话时间', dataIndex: 'time' },
  { title: '谈话地点', dataIndex: 'placement' },
  { title: '谈话记录人', dataIndex: 'recorder' },
];

function TalkList() {

  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      time: '2022-05-12',
    }
  ]

  return <PageContainer
      extra={
        <Space>
          <TalkCreateModal/>
        </Space>
      }
  >
    <BaseEditableTable
        columns={baseColumns.concat({
          title: '详情',
          dataIndex: 'operation',
          width: 100,
          align: 'center',
          render: (_, record: any) => <Tooltip title={'谈话详情'}>
            <Button
                type={'primary'}
                icon={<FileTextOutlined/>}
                size={'small'}
                onClick={() => navigate(`/lz/talk/${record.id}`)}
            />
          </Tooltip>,
        })}
        value={data}
    />
  </PageContainer>;
}

export default TalkList;