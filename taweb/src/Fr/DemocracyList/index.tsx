import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import DemocracyCreateModal from './DemocracyCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';

export const baseColumns: ProColumns[] = [
  { title: '生活会类别', dataIndex: 'type' },
  { title: '召开情形', dataIndex: 'condition' },
  { title: '生活会主题', dataIndex: 'topic' },
  { title: '召开时间', dataIndex: 'time' },
  { title: '上级派员', dataIndex: 'superior' },
  { title: '指导情况', dataIndex: 'guideCase' },
  { title: '问题清单提交情况', dataIndex: 'submitCase' },
  { title: '督导组会前指导', dataIndex: 'before' },
  { title: '督导组会中检查', dataIndex: 'center' },
  { title: '督导组会后评估', dataIndex: 'after' },
  { title: '整改情况', dataIndex: 'rectification' },
  { title: '结果运用', dataIndex: 'result' }
];


function DemocracyList() {

  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      type: '镇（街道）领导班子民主生活会',
      condition: '单位遇到重要或普遍性问题',
      topic:'测试数据',
      time: '2022-01-01',
    }
  ]

  return <PageContainer
      extra={
        <Space>
          <DemocracyCreateModal/>
        </Space>
      }
  >
    <BaseEditableTable
        columns={baseColumns.slice(0, 4).concat({
          title: '详情',
          hideInSearch: true,
          dataIndex: 'operation',
          render: (_, record: any) => <Tooltip title={'查看详情'}><Button
              type={'primary'}
              icon={<FileTextOutlined/>}
              size={'small'}
              onClick={() => navigate(`/fr/lz/democracy/${record.id}`)}
          />
          </Tooltip>,
          fixed: 'right',
          width: 120,
          align: 'center',
        })}
        value={data}
    />
  </PageContainer>;
}

export default DemocracyList;