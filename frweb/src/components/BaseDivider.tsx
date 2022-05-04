import React from 'react';
import { Button, Divider } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';

type Props = {
  title: string,
  onLink?: () => void,
}

export default function BaseDivider({ title, onLink }: Props) {
  return <>
    <Divider orientation={'left'}>
      {title}
      {onLink && <Button type="link" onClick={onLink}><ContainerOutlined /></Button>}
    </Divider>
  </>;
}