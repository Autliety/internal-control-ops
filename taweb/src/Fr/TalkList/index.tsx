import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import TalkCreateModal from './TalkCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';

export const baseColumns: ProColumns[] = [
  { title: '谈话实施人', dataIndex: 'request' },
  { title: '谈话对象', dataIndex: 'point' },
  { title: '谈话类型', dataIndex: 'type' },
  { title: '谈话事由', dataIndex: 'title', hideInDescriptions: true },
  { title: '谈话时间', dataIndex: 'time', valueType: 'date' },
  { title: '谈话地点', dataIndex: 'placement' },
];


function TalkList() {

  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      request: '王哲',
      point: '任凯波',
      title: '测试谈话数据',
      type: '日常谈话',
      time: '2022-01-01 00:00:00',
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
                onClick={() => navigate(`/fr/lz/talk/${record.id}`)}
            />
          </Tooltip>,
        })}
        value={data}
    />
  </PageContainer>;
}

export default TalkList;