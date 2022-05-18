import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import BaseEditableTable from './BaseEditableTable';
import { ProColumns } from '@ant-design/pro-table';

export default function DemoFileDownload() {

  const attachmentColumns: ProColumns[] = [
    { title: '名称（类别）', dataIndex: 'name' },
    { title: '文件名', dataIndex: 'code' },
    { title: '更新时间', dataIndex: 'updatedTime' },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record: any) => record.type === 'file'
          ? <Button type={'primary'} icon={<DownloadOutlined/>}>下载</Button>
          : <Button type={'link'}>{record.name}</Button>,
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