import React from 'react';
import { ColumnsType } from 'antd/lib/table/interface';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import BaseTable from './BaseTable';

export default function DemoFileDownload({ list = [] }) {

  const attachmentColumns: ColumnsType = [
    { title: '名称（类别）', dataIndex: 'name' },
    { title: '文件名', dataIndex: 'code' },
    { title: '更新时间', dataIndex: 'updatedTime' },
    {
      dataIndex: 'operation',
      render: () => <Button type={'primary'} size={'small'} icon={<DownloadOutlined />}>下载</Button>,
    },
  ];

  return <>
    <BaseTable
        columns={attachmentColumns}
        dataSource={list}
    />
  </>;
}