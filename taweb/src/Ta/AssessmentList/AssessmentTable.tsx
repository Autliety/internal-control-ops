import React from 'react';
import { Button, Space, Tooltip } from 'antd';
import { ProColumns } from '@ant-design/pro-table';
import { ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import valueTypeMap from '../../utils/valueTypeMap';
import showInfo from '../../utils/showInfo';
import BaseEditableTable from '../../components/BaseEditableTable';

export const assessmentColumns: ProColumns[] = [
  { title: '编号', dataIndex: 'code' },
  { title: '一级指标', dataIndex: 'levelOne', hideInTable: true },
  { title: '二级指标', dataIndex: 'levelTwo', hideInTable: true },
  { title: '指标名称', dataIndex: 'name' },
  {
    title: '指标要求',
    dataIndex: 'value',
    render: (text, record: any) => valueTypeMap(text, record?.valueType),
  },
  { title: '指标分值', dataIndex: 'point', render: text => text ?? valueTypeMap(text, 'POINT') },
  {
    title: '考核标准',
    dataIndex: 'standard',
    renderText: text => <>
          {text?.substring(0, 30)}
          {text?.length > 30 && <Button type={'link'} onClick={() => showInfo(text)}>...[更多]</Button>}
        </>},
  { title: '创建日期', dataIndex: 'createDate', valueType: 'date' },
];

export default function AssessmentTable({ value = [] }) {

  const navigate = useNavigate();

  return <>
    <BaseEditableTable
        columns={assessmentColumns.concat({
          title: '详情',
          dataIndex: 'operation',
          render: (_, record: any) => <Space>
            {!record.children &&
            <Tooltip title={'查看详情'}>
              <Button
                  type={'primary'}
                  icon={<ContainerOutlined/>}
                  size={'small'}
                  onClick={() => navigate(`/ta/assessment/basic/${record?.id}`)}
              />
            </Tooltip>
            }
          </Space>,
          fixed: 'right',
          width: 50,
          align: 'center',
        })}
        value={value}
        rowKey={'id'}
    />
  </>;
}