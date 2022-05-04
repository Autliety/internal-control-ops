import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Space, Statistic } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '@ant-design/pro-layout';

export default function Measure() {

  const navigate = useNavigate();

  return <>
    <PageContainer
        title={<><ArrowLeftOutlined onClick={() => navigate(-1)} /> 措施清单</>}
        content={<Space size={'large'}>
          <Statistic title={'责任部门'} value={'领导班子'} />
          <Statistic title={'问题内容'} value={'深入基层调研不够'} />
        </Space>}
    >
    </PageContainer>
  </>;
}