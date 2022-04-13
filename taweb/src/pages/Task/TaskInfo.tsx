import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProDescriptions from '@ant-design/pro-descriptions';
import { Button, Col, Divider, Row, Space, Statistic } from 'antd';
import { ArrowLeftOutlined, DownloadOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import numeral from 'numeral';

import PlanDetailInfo from '../../components/PlanDetailInfo';
import { useHttp } from '../../utils/request';
import AssessmentTable from '../../components/AssessmentTable';
import { assessmentValueType } from '../../utils/nameMap';

export default function TaskInfo() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useHttp(`/task/${id}`);

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> 计划进度卡片</>}
      content={<Space size={'large'}>
        <Statistic title={'计划名称'} value={state.plan?.name}/>
        <Statistic title={'计划进度'} value={'80%'}/>
      </Space>}
  >
    <Divider orientation={'left'}>{'计划信息'}</Divider>
    <PlanDetailInfo data={state.plan}/>

    <Divider orientation={'left'}>{'关联指标'}</Divider>
    <AssessmentTable dataSource={state.plan?.assessment}/>

    {/*  各个措施进度 */}
    <Divider orientation={'left'}>{'措施进度'}</Divider>
    {
      state.details?.map((item, index) => <div key={index}>
        <Row className={'content'}>
          <Col span={8}>
            <ProDescriptions title={item.planDetail.name} column={1}>
              <ProDescriptions.Item label='当前数值'>
                {
                  item.planDetail.valueType === 'MONEY'
                      ? assessmentValueType[item.planDetail.valueType] + numeral(item.value).format('0,000.00')
                      : item.value + assessmentValueType[item.planDetail.valueType]
                }
              </ProDescriptions.Item>

              <ProDescriptions.Item label='目标数值'>
                {
                  item.planDetail.valueType === 'MONEY'
                      ? assessmentValueType[item.planDetail.valueType] + numeral(item.planDetail.value).format('0,000.00')
                      : item.planDetail.value + assessmentValueType[item.planDetail.valueType]
                }
              </ProDescriptions.Item>

              <ProDescriptions.Item label='当前进度' valueType='progress'>
                {40}
              </ProDescriptions.Item>

              <ProDescriptions.Item label='进度描述'>
                {item.remark}
              </ProDescriptions.Item>

            </ProDescriptions>
          </Col>
          <Col span={16}>
            <ProDescriptions
                column={1}
                extra={<Button type={'primary'} icon={<DownloadOutlined/>}>下载</Button>}
            >
              <ProDescriptions.Item label='措施描述' valueType={'text'}>
                {item.planDetail.remark}
              </ProDescriptions.Item>
            </ProDescriptions>
          </Col>
        </Row>
        <br/>
      </div>)
    }
  </PageContainer>
}