import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import BaseDescriptions from '../../components/BaseDescriptions';
import { reportColumns } from '../ReportList';

export default function Report() {

  const data = {
    id: 1,
    user: '王哲',
    content: '加强党对教育工作的领导，落实教育优先发展。',
    createDate: '2022-03-12',
    reviewUser: '李勤根',
    review: '本部门贯彻实施宪法、法律法规，依法行政情况',
    reviewTime: '2022-03-13',
  };

  return <PageContainer>
    <BaseDescriptions columns={reportColumns} dataSource={data}/>
  </PageContainer>;
}

