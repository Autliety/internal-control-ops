import React from 'react';
import { ColumnsType } from 'antd/lib/table/interface';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import BaseTable from './BaseTable';

export default function DemoFileDownload() {

  const attachmentColumns: ColumnsType = [
    { title: '名称（类别）', dataIndex: 'name' },
    { title: '文件名', dataIndex: 'code' },
    { title: '更新时间', dataIndex: 'updatedTime' },
    {
      dataIndex: 'operation',
      render: () => <Button type={'primary'} size={'small'} icon={<DownloadOutlined/>}>下载</Button>
    },
  ];

  const attachmentData = [
    { name: '党风廉政建设抄告单', code: 'CG0001-02.doc', updatedTime: '2021-12-13', type: 'file' },
    { name: '各项巡查、检查文件', code: 'XC0001-05.docx', updatedTime: '2021-12-15', type: 'file' },
  ];

  return <>
    <br/>
    <BaseTable
        columns={attachmentColumns}
        dataSource={attachmentData}
    />
  </>;
}