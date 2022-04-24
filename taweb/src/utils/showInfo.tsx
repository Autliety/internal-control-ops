import React from 'react';
import { Divider, Modal } from 'antd';

export default function showInfo(text) {
  Modal.info({
    content: <>
      <Divider />
      <p>{text}</p>
    </>,
    icon: undefined,
  });
}
