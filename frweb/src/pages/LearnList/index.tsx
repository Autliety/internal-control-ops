import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from '../../components/BaseEditableTable';
import { Button, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function LearnList() {

  const navigate = useNavigate();

  const columns: ProColumns[] = [
    { title: '年度', dataIndex: 'year' },
    { title: '月份', dataIndex: 'month' },
    { title: '学习内容', dataIndex: 'content' },
    { title: '参加对象', dataIndex: 'attendee' },
    {
      title: '填写学习记录',
      hideInSearch: true,
      dataIndex: 'operation',
      render: (_, record: any) => <Tooltip title={'学习记录'}>
        <Button
            type={'primary'}
            icon={<EditOutlined/>}
            size={'small'}
            onClick={() => navigate(`/mz/learning/edit`)}
        />
      </Tooltip>,
      fixed: 'right',
      width: 120,
      align: 'center',
    }
  ];

  const data = [
    {
      id: 1,
      year: '2022',
      month: '1',
      content: `会议传达学习了习近平总书记《在中央政协工作会议暨庆祝中国人民政治协商会议成立70周年大会上的讲话》`,
      attendee: '王哲、吴胜杰、赵小龙、李勤根',
    },
    {
      id: 2,
      year: '2022',
      month: '2',
      content: `会议传达学习了习近平总书记《在中央政协工作会议暨庆祝中国人民政治协商会议成立70周年大会上的讲话》`,
      attendee: '王哲、吴胜杰、赵小龙、李勤根',
    }
  ];

  return <PageContainer>
    <BaseEditableTable columns={columns} value={data}/>
  </PageContainer>;
}

