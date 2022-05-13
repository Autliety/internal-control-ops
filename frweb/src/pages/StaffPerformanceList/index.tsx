import React from 'react';
import { PageContainer } from "@ant-design/pro-layout";
import { ProColumns } from "@ant-design/pro-table";

import BaseEditableTable from "../../components/BaseEditableTable";
import { Button, Tooltip } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function StaffPerformanceList() {

  const navigate = useNavigate();

  const columns: ProColumns[] = [
    { title: '年份', dataIndex: 'year' },
    { title: '总分值', dataIndex: 'count' },
    { title: '考核指标总数（项）', dataIndex: 'amount' },
    {
      title: '详情',
      dataIndex: 'operation',
      width: 100,
      align: 'center',
      render: (_, record: any) => <Tooltip title={'绩效详情'}>
        <Button
            type={'primary'}
            icon={<FileTextOutlined/>}
            size={'small'}
            onClick={() => navigate(`/performance/${record.id}`)}
        />
      </Tooltip>
    }
  ];

  const data = [
    {
      id: 1,
      year: '2022',
      count: 100,
      amount: 14,
    }
  ]

  return <PageContainer
      title={'班子成员绩效考评'}
  >
    <BaseEditableTable columns={columns} value={data}/>
  </PageContainer>;
}