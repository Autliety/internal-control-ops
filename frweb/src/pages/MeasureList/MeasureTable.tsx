import React from 'react';
import { Button, Space, Tooltip } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { measureColumns } from '../Measure/MeasureInfo';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function MeasureTable({ isSearch = false, dataSource } ) {

  const navigate = useNavigate();

  const columns = measureColumns.concat([
    {
      key: 'operation',
      hideInSearch: true,
      render: (_, record: any) => <Space>
        <Tooltip title={'查看详情'}>
          <Button
              type={'primary'}
              icon={<ContainerOutlined/>}
              size={'small'}
              onClick={() => navigate(`/mz/list/measure/${record.id}`)}
          />
        </Tooltip>
      </Space>,
      fixed: 'right',
      width: 50,
      align: 'center',
    },
  ]);

  return <>
    <BaseEditableTable
        columns={columns}
        value={dataSource}
        isSearch={isSearch}
    />
  </>;
}