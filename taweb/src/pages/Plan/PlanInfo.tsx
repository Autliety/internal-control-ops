import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useNavigate, useParams } from 'react-router-dom';
import numeral from 'numeral';
import { Button, Divider, message, Modal, Space, Statistic, Table } from 'antd';
import { ArrowLeftOutlined, FileWordOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table/interface';

import { useHttp } from '../../utils/request';
import { assessmentValueType } from '../../utils/nameMap';
import AssessmentTable from '../../components/AssessmentTable';
import PlanDetailInfo from "../../components/PlanDetailInfo";

export default function PlanInfo() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useHttp(`/plan/${id}`, { initState: {} });

  // 展示备注详情
  function showRemarkText(text) {
    Modal.info({
      title: '备注详情',
      content: (<p>{text}</p>),
      icon: undefined,
    });
  }

  // 措施
  const detailColumns: ColumnsType = [
    { title: '措施名称', dataIndex: 'name' },
    {
      title: '数值',
      dataIndex: 'value',
      render: (text, record: any) => record?.valueType === 'MONEY'
          ? assessmentValueType[record?.valueType] + numeral(text).format('0,000.00')
          : text + assessmentValueType[record?.valueType]
    },
    { title: '开始时间', dataIndex: 'startTime' },
    { title: '结束时间', dataIndex: 'endTime' },
    {
      title: '附件及说明',
      dataIndex: 'remark',
      render: text => <span>
        {text.substring(0, 30) + '...'}
        <Button type={'link'} onClick={() => showRemarkText(text)}>[更多]</Button>
        <Button
            type={'link'}
            onClick={() => message.warning('抱歉，还没有相关文件！！')}
        >
        <FileWordOutlined/>
        下载
      </Button>
        </span>
    },
  ];

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> 计划卡片</>}
      content={<Space size={'large'}>
        <Statistic title={'计划名称'} value={state?.name}/>
        <Statistic title={'措施数量'} value={2}/>
      </Space>}
  >
    <Divider orientation={'left'}>{'计划详细信息'}</Divider>
    <PlanDetailInfo data={state}/>

    <Divider orientation={'left'}>{'关联指标详细信息'}</Divider>
    <AssessmentTable dataSource={state.assessment}/>

    <Divider orientation={'left'}>{'计划措施信息'}</Divider>
    <Table
        rowKey={'id'}
        pagination={false}
        columns={detailColumns}
        dataSource={state.details}
        scroll={{
          scrollToFirstRowOnChange: true,
          x: 1700,
        }}
        size={'small'}
    />
  </PageContainer>;
}