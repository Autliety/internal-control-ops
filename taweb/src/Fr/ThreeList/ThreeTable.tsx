import React from 'react';
import BaseEditableTable from '../../components/BaseEditableTable';
import { Button, Space, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FileTextOutlined } from '@ant-design/icons';
import ThreeCreateModal from './ThreeCreateModal';
import { threeColumns } from './index';
import { useAuth } from '../../utils/auth';

export default function ThreeTable({ value, isEdit = false }) {

  const { user } = useAuth();
  const navigate = useNavigate();

  return <>
    <BaseEditableTable
        columns={threeColumns.concat({
          title: '操作',
          dataIndex: 'operation',
          width: 100,
          align: 'center',
          render: (_, record: any) => <Space>
            <Tooltip title={'详情'}>
              <Button
                  type={'primary'}
                  icon={<FileTextOutlined />}
                  size={'small'}
                  onClick={() => navigate(`/fr/lz/three/${record.id}`)}
              />
            </Tooltip>
            {(
                    (user?.id === 1 && record.status === 'REVIEWED' && record.integer1 === 0)
                    || (user?.id === 28 && record.integer1 === 2)
                    || (user?.id === record.requestUser?.id && record.integer1 === 3)
                    || (user.id === 28 && record.integer1 === 4)
                )
                && isEdit
                &&
                <ThreeCreateModal
                    isFirstEdit={false}
                    id={record.id}
                />}
          </Space>,
        })}
        value={value}
    />
  </>;
}