import React from 'react';
import { Divider, Modal } from 'antd';

export default function showInfo(text) {
  Modal.info({
    title: '详细信息',
    content: <>
      <Divider/>
      <p>{text}</p>
    </>,
    icon: undefined,
    okText: '确定',
    width: 800,
  });
}
