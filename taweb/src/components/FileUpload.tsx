import React from 'react';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { host } from '../utils/request';
import file from '../image/file.png';

type Props = {
  isInEdit?: boolean,
  onChange?: (file: any[]) => void,
  value?: any[],
}

function FileUpload({ isInEdit, onChange, value }: Props) {

  return <Upload

      action={host + '/attach'}
      withCredentials
      multiple={true}
      listType={'picture'}


      fileList={value?.map(a => ({
        uid: a.id,
        name: a.fileName,
        status: 'done',
        thumbUrl: file,
        url: `${host}/attach/${a.id}`,
      }))}
      onChange={({ file, fileList }) => {
        if (file.status !== 'uploading') {
          onChange(fileList.map(f => f.response ? f.response : f));
        }
      }}
  >
    {
        isInEdit && <Button icon={<UploadOutlined/>}>选择文件</Button>
    }
  </Upload>;
}

export default FileUpload;