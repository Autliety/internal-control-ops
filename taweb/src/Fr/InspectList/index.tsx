import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { useNavigate } from 'react-router-dom';
import { Button, Comment, Input, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';

import InspectCreateModal from './InspectCreateModal';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';
import UserSelectCascader from '../../components/UserSelectCascader';
import FileUpload from '../../components/FileUpload';
import SelectUser from '../../components/SelectUser';


export const matterColumns: ProColumns[] = [
  { title: '问题内容', dataIndex: 'content', renderFormItem: () => <Input.TextArea placeholder='问题内容'/> },
  { title: '结束时间', dataIndex: 'endDate', valueType: 'date', width: 200 },
];

export const inspectColumns: ProColumns[] = [
  {
    title: '监督检查人',
    dataIndex: 'singleUser1',
    renderText: u => u?.name, renderFormItem: () => <UserSelectCascader/>,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  { title: '监督检查领域', dataIndex: 'content1', formItemProps: { rules: [{ required: true, message: '此项必填' }] } },
  //  todo 部门id数组
  {
    title: '涉及站办/村社',
    dataIndex: 'content2',
    hideInTable: true,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
    renderFormItem: () => <SelectUser multiple='multiple' placeholder='请选择'/>,
  },
  {
    title: '监督检查日期',
    dataIndex: 'time1',
    valueType: 'date',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  { title: '项目名称', dataIndex: 'content3' },
  {
    title: '检查情况',
    dataIndex: 'longContent1',
    valueType: 'textarea',
    hideInTable: true,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '发现问题',
    dataIndex: 'matter',
    tooltip: '确定提交后自动纳入问题清单',
    renderFormItem: () => <BaseEditableTable columns={matterColumns} isInEdit/>,
    renderText: r => r?.map((item, index) => <Comment
        key={index}
        avatar={index + 1}
        content={item.content}
    />),
    hideInTable: true,
  },
  { title: '问题交办', dataIndex: 'destUser', renderText: u => u?.name, renderFormItem: () => <UserSelectCascader/> },
  { title: '处置及整改情况', dataIndex: 'longContent2', valueType: 'textarea', hideInTable: true },
  {
    title: '上传附件',
    dataIndex: 'attach',
    renderFormItem: () => <FileUpload isInEdit/>,
    hideInTable: true,
    hideInDescriptions: true
  },
];

export default function InspectList() {

  const { state } = useHttp('/ordinal/inspect', { initState: [] });
  const navigate = useNavigate();

  return <PageContainer
      extra={<InspectCreateModal/>}
  >
    <BaseEditableTable
        columns={inspectColumns.concat({
          title: '详情',
          dataIndex: 'operation',
          width: 100,
          align: 'center',
          render: (_, record: any) => <Tooltip title={'详情'}>
            <Button
                type={'primary'}
                icon={<FileTextOutlined/>}
                size={'small'}
                onClick={() => navigate(`/fr/lz/inspect/${record.id}`)}
            />
          </Tooltip>,
        })}
        value={state}
    />
  </PageContainer>;
}