import React from 'react';
import { useHttp } from '../../utils/request';
import BaseTable from '../../components/BaseTable';
import { Button, Space, Tooltip } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { measureColumns } from '../Measure/MeasureInfo';

type Props = {
  dataSource?: object[],
  params?: {
    ids?: number[],
  }
};

export default function MeasureTable({ dataSource }: Props) {

  const navigate = useNavigate();

  const { state } = useHttp('/measure', { initState: [], isManual: !!dataSource });

  const columns = measureColumns
  .concat([
    {
      key: 'operation',
      render: (_, record: any) => <Space>
        <Tooltip title={'查看详情'}>
          <Button
              type={'primary'}
              icon={<ContainerOutlined />}
              size={'small'}
              onClick={() => navigate(`/measure/${record.id}`)}
          />
        </Tooltip>
      </Space>,
      fixed: 'right',
      width: 50,
      align: 'center',
    },
  ]);

  return <>
    <BaseTable
        columns={columns}
        dataSource={dataSource || state}
    />
  </>;
}