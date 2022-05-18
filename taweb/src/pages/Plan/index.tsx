import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Divider, Space, Statistic } from 'antd';
import { ArrowLeftOutlined, FileWordOutlined } from '@ant-design/icons';
import { ProColumns } from '@ant-design/pro-table';

import { useHttp } from '../../utils/request';
import AssessmentTable from '../AssessmentList/AssessmentTable';
import PlanInfo from './PlanInfo';
import valueTypeMap from '../../utils/valueTypeMap';
import showInfo from '../../utils/showInfo';
import DemoUpperResponse from '../../components/DemoUpperResponse';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function Plan() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useHttp(`/plan/${id}`, { initState: {} });

  // 措施
  const detailColumns: ProColumns[] = [
    { title: '措施名称', dataIndex: 'name' },
    {
      title: '数值',
      dataIndex: 'value',
      render: (text, record: any) => valueTypeMap(text, record?.valueType),
    },
    {
      title: '措施描述',
      dataIndex: 'remark',
      renderText: text => <>
        {text.substring(0, 30)}
        {text.length > 30 && <Button type={'link'} onClick={() => showInfo(text)}>[更多]</Button>}
      </>,
    },
    {
      title: '文件说明',
      dataIndex: 'file',
      render: () => <Button type={'link'}><FileWordOutlined/> 下载</Button>,
    },
    { title: '开始时间', dataIndex: 'startTime' },
    { title: '结束时间', dataIndex: 'endTime' },
  ];

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> 工作计划详情</>}
      content={<Space size={'large'}>
        <Statistic title={'编号'} value={state.code}/>
        <Statistic title={'措施数量'} value={state.details?.length}/>
      </Space>}
  >
    <Divider orientation={'left'}>{'基本信息'}</Divider>
    <PlanInfo data={state}/>

    <Divider orientation={'left'}>{'相关指标详情'}</Divider>
    <AssessmentTable dataSource={state.assessment}/>

    <Divider orientation={'left'}>{'计划措施'}</Divider>
    <BaseEditableTable
        columns={detailColumns}
        value={state.details}
    />

    <Divider orientation='left'>审核意见</Divider>
    <DemoUpperResponse/>

  </PageContainer>;
}