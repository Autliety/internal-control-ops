import React from 'react';
import { Button, Space, Tooltip } from 'antd';
import { ContainerOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BaseTable from '../../components/BaseTable';

export default function TopicList({ topic, user }) {

  const navigate = useNavigate();

  user.forEach(u => u.topic = topic.filter(t => t.userId === u.id)?.[0]);

  const columns: object[] = [
    { title: '参会人', dataIndex: 'name' },
    { title: '所属部门', dataIndex: ['department', 'name'] },
    { title: '议题审核状态', dataIndex: ['topic', 'status'] },
    { title: '议题数量', dataIndex: ['topic', 'count'] },
    { title: '最后修改时间', dataIndex: ['topic', 'time'] },
    {
      dataIndex: 'operation',
      render: (_, record: any) => <Space>
        {record.topic?.id ?
            <Tooltip title={'查看详情'}>
              <Button
                  type={'primary'}
                  icon={<ContainerOutlined />}
                  size={'small'}
                  onClick={() => navigate(`/topic/${topic.id}`)}
              />
            </Tooltip>
            :
            <Tooltip title={'创建议题'}>
              <Button
                  icon={<PlusOutlined />}
                  size={'small'}
                  onClick={() => navigate(`/topic/0?create=true`)}
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
    <BaseTable
        columns={columns}
        dataSource={user}
    />
  </>;
}