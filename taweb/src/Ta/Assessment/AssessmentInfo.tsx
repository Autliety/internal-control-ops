import React from 'react';
import { assessmentColumns } from '../AssessmentList/AssessmentTable';
import BaseDescriptions from '../../components/BaseDescriptions';

export default function AssessmentInfo({ data }) {

  return <>
    <BaseDescriptions
        columns={assessmentColumns}
        dataSource={data}
        column={1}
    />
  </>;
}