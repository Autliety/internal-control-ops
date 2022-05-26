import React from 'react';
import { useHttp } from '../../utils/request';
import { Button, Space, Tooltip } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { measureColumns } from '../Measure/MeasureInfo';
import BaseEditableTable from '../../components/BaseEditableTable';

type Props = {
  dataSource?: object[],
  params?: {
    ids?: number[],
  }
};

export default function MeasureTable({ dataSource }: Props) {

  const navigate = useNavigate();

  const { state } = useHttp('/measure', { initState: [], isManual: !!dataSource });

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
        value={dataSource || state}
        isSearch
    />
  </>;
}