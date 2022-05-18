import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Divider, Space, Statistic } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import ProCard from '@ant-design/pro-card';
import { useHttp } from '../../utils/request';
import AssessmentInfo from './AssessmentInfo';
import DemoDeptResponse from '../../components/DemoDeptResponse';
import DemoUpperResponse from '../../components/DemoUpperResponse';

export default function Assessment() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useHttp(`/assessment/${id}`);

  return <>
    <PageContainer
        title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> 考核指标详情</>}
        content={<Space size={'large'}>
          <Statistic title={'编号'} value={state.code || state.id}/>
          <Statistic title={'名称'} value={state.name}/>
        </Space>}
    >
      <Divider orientation='left'>基本信息</Divider>
      <AssessmentInfo data={state}/>

      <Divider orientation={'left'}>指标责任领导</Divider>
      <ProCard gutter={[16, 16]} wrap>
        {
          [
            { id: 1, name: '李逍遥', station: '部门A领导', dept: '部门A' },
            { id: 2, name: '张三丰', station: '部门B领导', dept: '部门B' },
            { id: 3, name: '王重阳', station: '部门C领导', dept: '部门C' },
          ].map((item, index) => <ProCard
              colSpan={{ xs: 24, sm: 12, md: 8, lg: 6, xl: 4 }}
              bordered
              key={index}
              size={'small'}
              layout={'center'}
          >
            <p>
              {item.name}
              <Divider type={'vertical'}/>
              {item.dept}
              <Divider type={'vertical'}/>
              {item.station}
            </p>
          </ProCard>)
        }

      </ProCard>

      <Divider orientation='left'>指标责任部门</Divider>
      <DemoDeptResponse/>

      <Divider orientation='left'>审核意见</Divider>
      <DemoUpperResponse/>

    </PageContainer>
  </>;
}