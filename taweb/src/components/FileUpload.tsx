import React from 'react';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { host } from '../utils/request';

function FileUpload({ isInEdit, onChange, value }: any) {

  return <Upload
      disabled={!isInEdit}

      action={host + '/attach'}
      withCredentials
      multiple={true}

      fileList={value?.map(a => ({
        uid: a.id,
        name: a.fileName,
        status: 'done',
        url: `${host}/attach/${a.id}`
      }))}
      onChange={({ file, fileList }) => {
        if (file.status !== 'uploading') {
          onChange(fileList.map(f => f.response ? f.response : f))
        }
      }}
  >
    <Button icon={<UploadOutlined/>}>上传文件</Button>
  </Upload>;
}

export default FileUpload;