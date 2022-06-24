import React from 'react';
import { Button, Space, Tooltip } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function TopicList({ topic, user }) {

  const navigate = useNavigate();

  user.forEach(u => u.topic = topic.filter(t => t.userId === u.id)?.[0]);

  const columns: ProColumns[] = [
    { title: '参会人', dataIndex: 'name' },
    { title: '议题审核状态', dataIndex: ['topic', 'status'] },
    { title: '议题数量', dataIndex: ['topic', 'count'] },
    { title: '编写时间', dataIndex: ['topic', 'createTime'], renderText: v => !v || moment(v).format('YYYY-MM-DD HH:mm:ss') },
    {
      dataIndex: 'operation',
      render: (_, record: any) => <Space>
        {!record.topic?.id ||
            <Tooltip title={'查看详情'}>
              <Button
                  type={'primary'}
                  icon={<ContainerOutlined/>}
                  size={'small'}
                  onClick={() => navigate(`/fr/meeting/${record.id}/topic/${record.topic.id}`)}
              />
            </Tooltip>
        }
      </Space>,
      fixed: 'right',
      width: 50,
      align: 'center',
    },
  ];

  return <>
    <BaseEditableTable
        columns={columns}
        value={user}
    />
  </>;
}