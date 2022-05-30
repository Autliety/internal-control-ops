import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import BaseEditableTable from './BaseEditableTable';
import { ProColumns } from '@ant-design/pro-table';

export default function DemoFileDownload({ list = [] }) {

  const attachmentColumns: ProColumns[] = [
    { title: '名称（类别）', dataIndex: 'name' },
    { title: '文件名', dataIndex: 'code' },
    { title: '更新时间', dataIndex: 'updatedTime' },
    {
      dataIndex: 'operation',
      renderText: () => <Button type={'primary'} size={'small'} icon={<DownloadOutlined />}>下载</Button>,
    },
  ];

  return <>
    <BaseEditableTable
        columns={attachmentColumns}
        value={list}
    />
  </>;
}