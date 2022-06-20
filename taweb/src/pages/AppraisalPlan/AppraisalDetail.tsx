import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Space } from 'antd';
import { ProColumns } from '@ant-design/pro-table';
import { useLocation } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import AppraisalDetailCreate from './AppraisalDetailCreate';
import BaseEditableTable from '../../components/BaseEditableTable';

function AppraisalDetail() {

  const { state } = useHttp('/external', { initState: [] });

  const columns: ProColumns[] = [
    { title: '指标编号', dataIndex: 'code' },
    { title: '指标名称', dataIndex: 'name' },
    { title: '总分', dataIndex: 'score' },
    { title: '评分', dataIndex: 'point' },
  ];

  const data = [
    {
      id: 1,
      code: '0001',
      name: '测试数据',
      score: 6,
      point: 3,
    }
  ];

  const [isInEdit, setIsInEdit] = React.useState(false);
  // 获取应用人id
  const { state: userId } = useLocation();

  return <PageContainer
      extra={[
        <AppraisalDetailCreate value={state} userId={userId}/>
      ]}
  >
    <Divider orientation={'left'}>常规指标评分</Divider>
    <BaseEditableTable columns={columns} value={data}/>

    <Divider orientation={'left'}>增减分指标评分</Divider>
    <BaseEditableTable
        columns={columns}
        value={data}
        isInEdit={isInEdit}
        isOnlyDelete={true}
        disableAdd
    />

    <FooterToolbar>
      {isInEdit || <Button type={'primary'} onClick={() => setIsInEdit(true)}>编辑</Button>}
      {
          isInEdit && <Space>
            <Button type={'primary'} onClick={() => setIsInEdit(false)}>保存</Button>
            <Button onClick={() => setIsInEdit(false)}>取消</Button>
          </Space>
      }
    </FooterToolbar>
  </PageContainer>;
}

export default AppraisalDetail;