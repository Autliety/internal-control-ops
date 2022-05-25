import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ReportInfoPage from '../ReportList/ReportInfoPage';

export default function Report() {

  const navigate = useNavigate();

  const [search] = useSearchParams();
  let isCreate = search.get('create') === 'true';

  return <PageContainer
      title={isCreate ? '履责报告新建' : <><ArrowLeftOutlined onClick={() => navigate(-1)}/> 履责报告</>}
  >
    <ReportInfoPage isCreate={isCreate}/>
  </PageContainer>;
}

