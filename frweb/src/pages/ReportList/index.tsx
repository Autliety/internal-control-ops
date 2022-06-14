import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Link } from 'react-router-dom';
import { ContainerOutlined } from '@ant-design/icons';
import BaseEditableTable from '../../components/BaseEditableTable';
import ReportCreateModal from './ReportCreateModal';
import SelectUser from '../../components/SelectUser';
import { Select } from 'antd';

export const reportColumns: ProColumns[] = [
  { title: '报告人', dataIndex: 'user' },
  {
    title: '报告类型',
    dataIndex: 'type',
    renderFormItem: () => <Select>
      <Select.Option value={1}>民主（组织）生活会前谈心谈话报告</Select.Option>
      <Select.Option value={2}>党委（党组织）专题会前集中报告</Select.Option>
      <Select.Option value={3}>特殊情况报告</Select.Option>
      <Select.Option value={4}>向区（镇）党委、纪委书面报告</Select.Option>
      <Select.Option value={5}>向县委、县纪委书面报告</Select.Option>
      <Select.Option value={6}>向区（镇）分管领导报告</Select.Option>
    </Select>
  },
  { title: '履责情况报告', dataIndex: 'content', valueType: 'textarea' },
  { title: '报告日期', dataIndex: 'createDate', valueType: 'date' },
  { title: '监督评议主体', dataIndex: 'reviewUser', renderFormItem: () => <SelectUser withUser/> },
  { title: '监督评议意见', dataIndex: 'review' },
  { title: '监督评议时间', dataIndex: 'reviewTime' },

];

export default function ReportList() {

  const data = [
    {
      id: 1,
      user: '王哲',
      type: '特殊情况报告',
      content: '加强党对教育工作的领导，落实教育优先发展。',
      createDate: '2022-03-12',
      reviewUser: '李勤根',
      review: '本部门贯彻实施宪法、法律法规，依法行政情况',
      reviewTime: '2022-03-13',
    },
    {
      id: 2,
      user: '王哲',
      type: '特殊情况报告',
      content: '加强党对教育工作的领导，落实教育优先发展。',
      createDate: '2022-03-18',
      reviewUser: '李勤根',
      review: '本部门贯彻实施宪法、法律法规，依法行政情况',
      reviewTime: '2022-03-23',
    }
  ];

  return <PageContainer
      extra={
        <ReportCreateModal/>
      }
  >
    <BaseEditableTable
        columns={reportColumns.concat({
              title: '详情',
              key: 'operation',
              width: '5%',
              align: 'center',
              fixed: 'right',
              render: (_, record: any) => <Link to={`/lz/report/${record.id}`}><ContainerOutlined/></Link>,
            },
        )}
        value={data}
    />

  </PageContainer>;
}

