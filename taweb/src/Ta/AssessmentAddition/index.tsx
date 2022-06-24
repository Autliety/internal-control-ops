import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space } from 'antd';
import showInfo from '../../utils/showInfo';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';
import AssessmentAdditionCreate from './AssessmentAdditionCreate';

export const externalColumns: ProColumns[] = [
  { title: '编号', dataIndex: 'code', width: 150 },
  { title: '一级指标', dataIndex: 'levelOne' },
  { title: '二级指标', dataIndex: 'levelTwo' },
  { title: '指标名称', dataIndex: 'name' },
  {
    title: '考核标准',
    dataIndex: 'standard',
    renderText: text => <>
      {text?.substring(0, 30)}
      {text?.length > 30 && <Button type={'link'} onClick={() => showInfo(text)}>...[详情]</Button>}
    </>,
    valueType: 'textarea',
  },
  { title: '分值', dataIndex: 'point', width: 100 },
];

export default function AssessmentAddition() {

  const { state, loading } = useHttp('/external', { initState: [] });

  return <PageContainer
      extra={<Space>
        <AssessmentAdditionCreate/>
      </Space>}
      loading={loading}
  >
    <BaseEditableTable columns={externalColumns} value={state}/>

  </PageContainer>;
}