import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { BaseContribute } from '../Contribute';

export default function Dynamic() {

  const navigate = useNavigate();
  const [tmpData, setTmpData] = React.useState({});

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> 动态跟踪详情</>}
  >

    <BaseContribute onChange={setTmpData} data={tmpData}/>

  </PageContainer>;
}