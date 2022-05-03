import React from 'react';
import { ColumnsType } from 'antd/lib/table/interface';
import { useHttp } from '../../utils/request';
import BaseTable from '../../components/BaseTable';

type Props = {
  dataSource?: object[],
  params?: {
    ids?: number[],
  }
};

export default function MeasureTable({ dataSource }: Props) {

  const { state } = useHttp('/measure', { initState: [], isManual: !!dataSource });

  const columns: ColumnsType = [
    { title: '编号', dataIndex: 'code' },
    { title: '工作措施', dataIndex: 'content' },
    { title: '责任人', dataIndex: ['user', 'name'] },
    { title: '开始时间', dataIndex: 'startTime' },
    { title: '结束时间', dataIndex: 'endTime' },
  ];

  return <>
    <BaseTable
        columns={columns}
        dataSource={dataSource || state}
    />
  </>;
}