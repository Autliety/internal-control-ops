import React from 'react';
import { ExportOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, message, Modal, Space, Upload, UploadProps } from 'antd';

function ExportData() {

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return <>
    <Button type={'primary'} icon={<ExportOutlined />} onClick={() => setIsVisible(true)}>外部数据导入</Button>
    <Modal
        title={'外部数据导入'}
        visible={isVisible}
        width={800}
        closable
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
    >
      <Space size={'large'}>
        <Upload {...props}>
          <Button type={'primary'} icon={<UploadOutlined />}>黄哨数据导入</Button>
        </Upload>

        <Upload {...props}>
          <Button type={'primary'} danger icon={<UploadOutlined />}>红哨数据导入</Button>
        </Upload>
      </Space>
    </Modal>
  </>;
}

export default ExportData;