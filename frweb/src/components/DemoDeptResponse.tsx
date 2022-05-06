import React from 'react';
import { Button, Modal, Table, Tag, Upload } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { UploadOutlined } from '@ant-design/icons';
import { host } from '../utils/request';

export default function DemoDeptResponse() {

  const columns: ColumnsType = [
    { title: '部门', dataIndex: 'name' },
    { title: '指标指派', dataIndex: 'distribute' },
    { title: '部门意见', dataIndex: 'response', render: value => <Tag color={'green'}>{value}</Tag> },
    { title: '更新时间', dataIndex: 'updateTime' },
  ];

  const data = [
    { name: '招商和项目推进科', distribute: 'CZ001-01', response: '同意' },
  ];


  const props = {
    name: 'file',
    action: 'http://localhost:8082/file/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
    },
  };

  const filename = 'testfile.png';
  return <>
    <Table
        bordered
        scroll={{ x: 'max-content' }}
        pagination={false}

        columns={columns}
        rowKey={'id'}

        dataSource={data}
    />

    <Modal visible={false}>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>

      <Button onClick={() => {
        window.location.href = host + `/file/download/${filename}`;
      }}
      >
        click to download
      </Button>
    </Modal>
  </>;
}