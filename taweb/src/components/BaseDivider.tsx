import React from 'react';
import { Button, Divider, Tooltip } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';

type Props = {
  title: string,
  onLink?: () => void,
}

export default function BaseDivider({ title, onLink }: Props) {
  return <>
    <Divider orientation={'left'}>
      {title}
      {onLink &&
          <Tooltip title={'点击跳转到该问题详情页'}><Button type="link" onClick={onLink}><ContainerOutlined/></Button></Tooltip>}
    </Divider>
  </>;
}