import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import { Button, Select, Space, Tooltip } from 'antd';
import BaseEditableTable from '../../components/BaseEditableTable';
import ReportCreateModal from './ReportCreateModal';
import { useHttp } from '../../utils/request';
import UserSelectCascader from '../../components/UserSelectCascader';
import FileUpload from '../../components/FileUpload';

export const reportColumns: ProColumns[] = [
  {
    title: '报告类型',
    dataIndex: 'content1',
    renderFormItem: () => <Select>
      <Select.Option value={'民主（组织）生活会前谈心谈话报告'}>民主（组织）生活会前谈心谈话报告</Select.Option>
      <Select.Option value={'党委（党组织）专题会前集中报告'}>党委（党组织）专题会前集中报告</Select.Option>
      <Select.Option value={'特殊情况报告'}>特殊情况报告</Select.Option>
      <Select.Option value={'向区（镇）党委、纪委书面报告'}>向区（镇）党委、纪委书面报告</Select.Option>
      <Select.Option value={'向县委、县纪委书面报告'}>向县委、县纪委书面报告</Select.Option>
      <Select.Option value={'向区（镇）分管领导报告'}>向区（镇）分管领导报告</Select.Option>
    </Select>,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '报告人',
    dataIndex: 'singleUser1',
    renderText: t => t?.name,
    renderFormItem: () => <UserSelectCascader/>,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },

  {
    title: '履责情况报告',
    dataIndex: 'longContent1',
    valueType: 'textarea',
    hideInTable: true,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '报告日期',
    dataIndex: 'time1',
    valueType: 'date',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  { title: '上传附件', dataIndex: 'attach', renderFormItem: () => <FileUpload isInEdit/>, hideInDescriptions: true },
  { title: '监督评议主体', dataIndex: 'singleUser2', renderText: t => t?.name, renderFormItem: () => <UserSelectCascader/> },
  { title: '监督评议意见', dataIndex: 'longContent2', valueType: 'textarea', hideInTable: true },
  { title: '监督评议时间', dataIndex: 'time2', valueType: 'date' },
];

export default function ReportList() {

  const navigate = useNavigate();
  const { state, loading } = useHttp('/ordinal/report', { initState: [] });

  return <PageContainer
      extra={
        <ReportCreateModal isFirstEdit/>
      }
      loading={loading}
  >
    <BaseEditableTable
        columns={reportColumns.concat({
              title: '详情',
              key: 'operation',
              width: '5%',
              align: 'center',
              fixed: 'right',
              render: (_, record: any) => <Space>
                <Tooltip title={'查看详情'}>
                  <Button
                      type={'primary'}
                      icon={<MailOutlined/>}
                      size={'small'}
                      onClick={() => navigate(`/fr/lz/report/${record.id}`)}
                  />
                </Tooltip>
                <ReportCreateModal isFirstEdit={false} id={record.id}/>
              </Space>,
            },
        )}
        value={state}
    />

  </PageContainer>;
}

