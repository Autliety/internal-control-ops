import React from 'react';
import { Divider, Modal, Typography } from 'antd';

export default function showInfo(text) {
  Modal.info({
    title: '详细内容',
    content: <>
      <Divider />
      <Typography.Paragraph>{text}</Typography.Paragraph>
    </>,
    icon: undefined,
    okText: '确定',
    width: 800,
  });
}
