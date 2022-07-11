import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Link } from 'react-router-dom';
import { ContainerOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';
import UserSelectCascader from '../../components/UserSelectCascader';
import FileUpload from '../../components/FileUpload';
import DisposalCreateModal from './DisposalCreateModal';

export const disposalColumns: ProColumns[] = [
  {
    title: '编号',
    dataIndex: 'code',
    hideInForm: true,
  },
  {
    title: '监督提醒时间',
    dataIndex: 'time1',
    valueType: 'date',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '实施单位（实施人）',
    dataIndex: 'singleUser1',
    renderText: t => t.name,
    renderFormItem: () => <UserSelectCascader/>,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '处置运用对象',
    dataIndex: 'singleUser2',
    renderText: t => t.name,
    renderFormItem: () => <UserSelectCascader/>,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '处置运用类型',
    dataIndex: 'content1',
    valueType: 'select',
    fieldProps: { options: ['提醒谈话', '批评教育', '诫勉谈话', '责令检查', '召开专题民主（组织）生活会批评帮助', '通报批评'] },
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '处置运用时间',
    dataIndex: 'time2',
    valueType: 'date',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '处置运用地点（范围）',
    dataIndex: 'content2',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '处置运用具体情况',
    dataIndex: 'longContent1',
    hideInTable: true,
    valueType: 'textarea',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '上传附件',
    dataIndex: 'attach',
    renderFormItem: () => <FileUpload isInEdit/>,
    hideInTable: true,
    hideInDescriptions: true,
  },
  {
    title: '详情',
    key: 'operation',
    width: '5%',
    align: 'center',
    fixed: 'right',
    render: (_, record: any) => <Link to={`/fr/lz/disposal/${record.id}`}><ContainerOutlined/></Link>,
    hideInDescriptions: true,
    hideInForm: true,
  }
];


export default function DisposalList() {

  const { state } = useHttp('/ordinal/disposal', { initState: [] });
  // const [searchParams] = useSearchParams();
  // todo inform info
  // console.log('searchParams', searchParams.get('informId'));

  return <PageContainer
      title={'第一种形态处置运用'}
      extra={
        <Space>
          <DisposalCreateModal/>
        </Space>
      }
  >
    <BaseEditableTable
        columns={disposalColumns}
        value={state}
    />
  </PageContainer>;
}