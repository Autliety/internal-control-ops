import React from 'react';
import { Button, Upload, UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import file from '../image/file.png';

function DemoFileUpload({ isEdit }) {

  const props: UploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    defaultFileList: [
      {
        uid: '1',
        name: 'CG0001-02.doc',
        status: 'done',
        response: 'Server Error 500',
        url: 'https://www.baidu.com/xxx.png',
        thumbUrl: file,
      },
      {
        uid: '2',
        name: 'XC0001-05.docx',
        status: 'done',
        url: 'https://www.baidu.com/yyy.png',
        thumbUrl: file,
      },
    ],
    listType: 'picture',
  };

  return <div className={'content'}>
    <Upload {...props}>
      <Button icon={<UploadOutlined/>} disabled={!isEdit}>上传文件</Button>
    </Upload>
  </div>;
}

export default DemoFileUpload;