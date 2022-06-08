import React from 'react';
import { Button, Divider, Modal } from 'antd';
import { DownloadOutlined, ImportOutlined } from '@ant-design/icons';

export default function AssessmentImportModal() {

  const [isVisible, setIsVisible] = React.useState(false);

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><ImportOutlined/>批量导入</Button>

    <Modal
        title={'指标导入'}
        visible={isVisible}
        closable
        onCancel={() => setIsVisible(false)}
        okText={'关闭'}
    >
      <Button type={'dashed'} icon={<DownloadOutlined/>}>下载模板</Button>
      <Divider/>
      <Button type={'dashed'} icon={<ImportOutlined/>}>导入文件</Button>
    </Modal>
  </>;
}