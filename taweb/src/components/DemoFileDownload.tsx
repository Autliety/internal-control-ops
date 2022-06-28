import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import BaseEditableTable from './BaseEditableTable';
import { ProColumns } from '@ant-design/pro-table';

export default function DemoFileDownload() {

  const attachmentColumns: ProColumns[] = [
    { title: '文件名', dataIndex: 'fileName' },
    { title: '更新时间', dataIndex: 'updatedTime' },
    { title: '上传人', dataIndex: ['uploadUser', 'name'] },
    {
      title: '操作',
      dataIndex: 'operation',
      render: () => <Button type={'primary'} icon={<DownloadOutlined/>}>下载</Button>,
    },
  ];

  const attachmentData = [
    { name: '党风廉政建设抄告单', code: 'CG0001-02.doc', updatedTime: '2021-12-13', type: 'file' },
    { name: '各项巡查、检查文件', code: 'XC0001-05.docx', updatedTime: '2021-12-15', type: 'file' },
  ];

  return <>
    <BaseEditableTable
        columns={attachmentColumns}
        value={attachmentData}
    />
  </>;
}