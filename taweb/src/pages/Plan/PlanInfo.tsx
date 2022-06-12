import React from 'react';
import BaseDescriptions from '../../components/BaseDescriptions';
import { planColumns } from '../PlanList';
import valueTypeMap from '../../utils/valueTypeMap';

export default function PlanInfo({ data }) {
  return <>
    <BaseDescriptions
        columns={planColumns}
        dataSource={data}
    />
    <BaseDescriptions
        columns={[
          { title: '总目标值', dataIndex: 'value', render: (text, record: any) => valueTypeMap(text, record?.valueType) },
          { title: '备注', dataIndex: 'remark' },
        ]}
        dataSource={data}
    />
  </>;
}