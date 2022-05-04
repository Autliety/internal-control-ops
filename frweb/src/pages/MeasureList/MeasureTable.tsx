import React from 'react';
import { ColumnsType } from 'antd/lib/table/interface';
import { useHttp } from '../../utils/request';
import BaseTable from '../../components/BaseTable';
import { Button, Space, Tooltip } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

type Props = {
  dataSource?: object[],
  params?: {
    ids?: number[],
  }
};

export default function MeasureTable({ dataSource }: Props) {

  const navigate = useNavigate()

  const { state } = useHttp('/measure', { initState: [], isManual: !!dataSource });

  const columns: ColumnsType = [
    { title: '编号', dataIndex: 'code' },
    { title: '工作措施', dataIndex: 'content' },
    { title: '责任人', dataIndex: ['user', 'name'] },
    { title: '开始时间', dataIndex: 'startTime' },
    { title: '结束时间', dataIndex: 'endTime' },
    {
      dataIndex: 'operation',
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
    }
  ];

  return <>
    <BaseTable
        columns={columns}
        dataSource={dataSource || state}
    />
  </>;
}