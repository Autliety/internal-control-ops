import React from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {ProColumns} from '@ant-design/pro-table';
import {Button, Divider, Space} from 'antd';

import showInfo from '../../utils/showInfo';
import BaseEditableTable from '../../components/BaseEditableTable';
import {useHttp} from '../../utils/request';
import AdviceCreate from "./AdviceCreate";

export default function AssessmentAddition() {

  const typeNum = {complaint: '投诉', advice: '建议'};

  const externalColumns: ProColumns[] = [
    {title: '序号', dataIndex: 'code', width: 150, renderText: (_, rc, index) => index + 1},
    {title: '标题', dataIndex: 'title'},
    {title: '类型', dataIndex: 'type', renderText: text => typeNum[text]},
    {title: '姓名', dataIndex: 'name', renderText: t => t?.name},
    {title: '时间', dataIndex: 'complaintTime'},
    {
      title: '内容', dataIndex: 'content', renderText: text => <>
        {text?.substring(0, 50)}
        {text?.length > 50 && <Button type={'link'} onClick={() => showInfo(text)}>...[详情]</Button>}
      </>,
    },
  ];

  const {state, loading} = useHttp('/advice', {initState: []});

  return <PageContainer
      extra={<Space>
        <AdviceCreate/>
      </Space>}
      loading={loading}
  >
    <Divider orientation="left">意见列表</Divider>
    <BaseEditableTable columns={externalColumns} value={state}/>

  </PageContainer>;
}