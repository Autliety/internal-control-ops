import React from 'react';
import { Button, Modal } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

export default function PlanCreateModal({ assessment = {} }) {

  const [isVisible, setIsVisible] = React.useState(false);
  const title = '制定计划';

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusCircleOutlined/>{title}</Button>

    <Modal
        title={title}
        visible={isVisible}
        closable
        onCancel={() => setIsVisible(false)}
    >

    </Modal>
  </>;
}