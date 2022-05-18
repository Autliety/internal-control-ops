import React from 'react';
import { Button, Space } from 'antd';
import { ProColumns } from '@ant-design/pro-table';
import { ContainerOutlined, DownloadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import valueTypeMap from '../../utils/valueTypeMap';
import showInfo from '../../utils/showInfo';
import BaseEditableTable from '../../components/BaseEditableTable';

type Props = {
  isParent?: boolean,
  dataSource: any[],
}

export default function AssessmentTable({ isParent, dataSource, ...configs }: Props) {

  const navigate = useNavigate();

  // 三层数据结构(指标数据)
  const data = [
    {
      'id': 1,
      'code': 'CZ22001',
      'name': '‘招大引强’提升行动',
      'children': [
        {
          'id': 2,
          'code': 'CZ22001-01',
          'name': '实际利用外资',
          'point': 3,
          'upperDepartment': '县商务局',
          'isParent': 1,
          'children': [
            {
              'id': 3,
              'code': 'CZ22001-01-01',
              'name': '合同利用外资',
              'point': 0.5,
              'valueType': 'DOLLAR',
              'value': '105000000',
              'standard': '完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分。',
              'parentId': 2
            },
            {
              'id': 4,
              'code': 'CZ22001-01-02',
              'name': '实际利用外资',
              'point': 2,
              'valueType': 'DOLLAR',
              'value': '34000000',
              'standard': '完成率达100%及以上的得该项赋分，完成率达80%（含）以上的按完成率计算得分，完成率不足80%的，不得分；规模贡献按（本值/最大值）*赋分计算得分。',
              'parentId': 2
            },
            {
              'id': 5,
              'code': 'CZ22001-01-03',
              'name': '高技术实际利用外资占比',
              'point': 0.5,
              'valueType': 'PERCENT',
              'value': '0.4',
              'standard': '完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分。',
              'parentId': 2
            }
          ]
        }
      ]
    },

  ];

  const columns: ProColumns[] = [
    { title: '编号', dataIndex: 'code' },
    { title: `${isParent ? '' : '详细'}指标名称`, dataIndex: 'name' },
    !isParent ? {
      title: '目标',
      dataIndex: 'value',
      render: (text, record: any) => valueTypeMap(text, record?.valueType),
    } : null,
    isParent ? { title: '考核责任单位', dataIndex: 'upperDepartment' } : null,
    { title: '权重分值', dataIndex: 'point', render: text => text ?? valueTypeMap(text, 'POINT') },
    {
      title: '考核标准',
      dataIndex: 'standard',
      renderText: text => text
          ? <>
            {text.substring(0, 30)}
            {text.length > 30 && <Button type={'link'} onClick={() => showInfo(text)}>[更多]</Button>}
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
            icon={<ContainerOutlined/>}
            size={'small'}
            onClick={() => navigate(`/assessment/${record.id}`)}
            disabled={!record?.parentId}
        />
        <Button
            icon={<DownloadOutlined/>}
            size={'small'}
            disabled
        />
      </Space>,
      fixed: 'right',
      width: 80,
    } : null,
  ];

  return <>
    <BaseEditableTable
        columns={columns.filter(i => i)}
        // dataSource={Array.isArray(dataSource) ? dataSource : [dataSource]}
        value={data}
    />
  </>;
}