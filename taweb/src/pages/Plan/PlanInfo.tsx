import React from 'react';
import BaseDescriptions from '../../components/BaseDescriptions';
import { planColumns } from '../PlanList';

export default function PlanInfo({ data }) {
  return <>
    <BaseDescriptions
        columns={planColumns}
        dataSource={data}
    />
  </>;
}