import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ArrowLeftOutlined, ContainerOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Descriptions, Divider, Space, Statistic, Tooltip } from 'antd';
import { ProColumns } from '@ant-design/pro-table';

import { useHttp } from '../../utils/request';
import { informType } from '../../utils/nameMap';
import DemoFileDownload from '../../components/DemoFileDownload';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function Inform() {

  const navigate = useNavigate();
  const { id } = useParams();
  const { state, loading } = useHttp(`/inform/${id}`, { initState: [] });

  // 整改措施
  const measureColumns1: ProColumns[] = [
    { title: '序号', dataIndex: 'id' },
    { title: informType[state.type]?.label, dataIndex: 'detail' },
    { title: '落实情况', dataIndex: 'measureCase' },
    { title: '报告主体', dataIndex: 'deptId' },
    { title: '报告时间', dataIndex: 'time' }
  ];
  const measureColumns2: ProColumns[] = [
    { title: '序号', dataIndex: 'id' },
    { title: '第一种形态处置方式', dataIndex: 'operationType' },
    { title: '运用处置的具体情况', dataIndex: 'detail' },
    { title: '处置时间', dataIndex: 'operationDate' },
    { title: '报告主体', dataIndex: 'deptId' },
    { title: '报告时间', dataIndex: 'time' }
  ];

  const measureData = [
    {
      id: 1,
      detail: '不断加强专业知识的学习，坚持终身学习，加强对工作的研究，提高综合素质。从实践中学习，增强做好工作的本领。',
      measureCase: '大体完成',
      deptId: 1,
      time: '2022-04-21',
    },
    {
      id: 2,
      detail: '加强政治理论学习,在认清职责的同时立足本职,本本分分做实实在在的事情。严格要求自己，用自己的一言一行，一举一动去自觉工作，做到' +
          '全心全意为人民服务。',
      measureCase: '完成良好',
      deptId: 2,
      time: '2022-04-28',
    },
  ];


  const matterColumns: ProColumns[] = [
    { title: '编号', dataIndex: 'code' },
    { title: '涉及人员', dataIndex: 'deptId' },
    { title: informType[state.type]?.title, dataIndex: 'content' },
    { title: '反馈报告时限', dataIndex: 'endDate' },
    {
      title: '详情',
      dataIndex: 'operation',
      render: (_, record: any) => <Space>
        <Tooltip title={'查看详情'}>
          <Button
              type={'primary'}
              icon={<ContainerOutlined/>}
              size={'small'}
              onClick={() => navigate(`/matter/${record.id}`)}
          />
        </Tooltip>
      </Space>,
      fixed: 'right',
      width: 50,
      align: 'center',
    }];

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> {informType[state.type]?.name}</>}
      content={
        <Space size={'large'}>
          <Statistic title={'编号'} value={state.code}/>
          <Statistic title={'类型'} value={informType[state.type]?.name}/>
        </Space>
      }
      loading={loading}
  >
    <Descriptions
        bordered
        className={'content'}
        column={2}
        labelStyle={{ width: '10%' }}
        contentStyle={{ width: '40%' }}
    >
      <Descriptions.Item label='下达部门'>{state.fromDeptId}</Descriptions.Item>
      <Descriptions.Item label='签发人'>{state.fromUserId}</Descriptions.Item>
      <Descriptions.Item label='下达时间'>{}</Descriptions.Item>
      <Descriptions.Item label='接收对象'>{state.destDeptId}</Descriptions.Item>
    </Descriptions><br/>

    <BaseEditableTable
        loading={loading}
        columns={matterColumns}
        value={state.matter}
    />

    <Divider orientation={'left'}>整改（运用）落实情况报告</Divider>
    <BaseEditableTable
        columns={state.type === 'ANNOUNCE' ? measureColumns2 : measureColumns1}
        value={measureData}
    />
    <DemoFileDownload/>

  </PageContainer>;
}