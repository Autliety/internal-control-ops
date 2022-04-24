import React from 'react';
import { ColumnsType } from 'antd/lib/table/interface';
import { Button, Space, Table } from 'antd';

import valueTypeMap from '../../utils/valueTypeMap';
import { ContainerOutlined, DownloadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import showInfo from '../../utils/showInfo';

type Props = {
  isParent?: boolean,
  dataSource: any[],
}

export default function AssessmentTable({ isParent, dataSource, ...configs }: Props) {

  const navigate = useNavigate();

  const columns: ColumnsType = [
    { title: '编号', dataIndex: 'code' },
    { title: `${isParent ? '' : '详细'}指标名称`, dataIndex: 'name' },
    !isParent ? {
      title: '目标',
      dataIndex: 'value',
      render: (text, record: any) => valueTypeMap(text, record?.valueType),
    } : null,
    isParent ? { title: '考核责任单位', dataIndex: 'upperDepartment' } : null,
    { title: '权重分值', dataIndex: 'point', render: value => valueTypeMap(value, 'POINT') },
    isParent ? { title: '指标细则数', dataIndex: 'children', render: data => data?.length ?? '' } : null,
    {
      title: '考核标准',
      dataIndex: 'standard',
      render: text => text
          ? <>
            {text.substring(0, 30)}
            {text.length > 30 && <Button type={'link'} onClick={() => showInfo(text)}>...[更多]</Button>}
          </>
          : '无',
    },
    { title: '更新时间', dataIndex: 'updateTime' },
    isParent ? {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record: any) => <Space>
        <Button
            type={'primary'}
            icon={<ContainerOutlined />}
            size={'small'}
            onClick={() => navigate(`/assessment/${record.id}`)}
            disabled={record?.parentId}
        />
        <Button
            icon={<DownloadOutlined />}
            size={'small'}
            disabled
        />
      </Space>,
      fixed: 'right',
      width: 80,
    } : null,
  ];

  return <>
    <Table
        {...configs}
        bordered
        scroll={{ x: 'max-content' }}
        pagination={false}

        columns={columns.filter(i => i)}
        rowKey={'id'}

        dataSource={Array.isArray(dataSource) ? dataSource : [dataSource]}
    />
  </>;
}