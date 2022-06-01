import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Link } from 'react-router-dom';
import { ContainerOutlined } from '@ant-design/icons';
import BaseEditableTable from '../../components/BaseEditableTable';
import ReportCreateModal from './ReportCreateModal';
import SelectUser from "../../components/SelectUser";

export const reportColumns: ProColumns[] = [
  { title: '履责主体', dataIndex: 'user' },
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
      content: '加强党对教育工作的领导，落实教育优先发展。',
      createDate: '2022-03-12',
      reviewUser: '李勤根',
      review: '本部门贯彻实施宪法、法律法规，依法行政情况',
      reviewTime: '2022-03-13',
    },
    {
      id: 2,
      user: '王哲',
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

