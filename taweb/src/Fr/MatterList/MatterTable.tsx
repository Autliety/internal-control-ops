import React from 'react';
import { Button, Space, Tooltip } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BaseEditableTable from '../../components/BaseEditableTable';
import { matterColumns } from '../Matter/MatterInfo';

export default function MatterTable({ value, ...rest }) {

  const navigate = useNavigate();

  return <>
    <BaseEditableTable
        columns={matterColumns.concat([
          {
            hideInSearch: true,
            dataIndex: 'operation',
            render: (_, record: any) => <Space>
              <Tooltip title={'查看详情'}>
                <Button
                    type={'primary'}
                    icon={<ContainerOutlined />}
                    size={'small'}
                    onClick={() => navigate(`/fr/mz/list/matter/${record.id}`)}
                />
              </Tooltip>
            </Space>,
            fixed: 'right',
            width: 50,
            align: 'center',
            editable: false,
          },
        ])}
        value={value}
        {...rest}
    />
  </>;
}