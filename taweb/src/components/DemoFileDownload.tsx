import React from 'react';
import { Button } from 'antd';
import { ProColumns } from '@ant-design/pro-table';
import { DownloadOutlined } from '@ant-design/icons';
import BaseEditableTable from './BaseEditableTable';

export default function DemoFileDownload() {

  const attachmentColumns: ProColumns[] = [
    { title: '序号', dataIndex: 'code', renderText: (_, r, i) => i + 1, width: 50 },
    { title: '文件名', dataIndex: 'name' },
    { title: '更新时间', dataIndex: 'updatedTime' },
    { title: '上传人', dataIndex: 'uploadUser' },
    {
      title: '操作',
      dataIndex: 'operation',
      align: 'center',
      width: 100,
      render: () => <Button type={'link'} icon={<DownloadOutlined/>}>下载</Button>,
    },
  ];

  const attachmentData = [
    { name: '党风廉政建设抄告单', code: 'CG0001-02.doc', updatedTime: '2021-12-13', type: 'file', uploadUser: '赵小龙' },
    { name: '各项巡查、检查文件', code: 'XC0001-05.docx', updatedTime: '2021-12-15', type: 'file', uploadUser: '赵小龙' },
  ];

  return <>
    <BaseEditableTable
        columns={attachmentColumns}
        value={attachmentData}
    />
  </>;
}