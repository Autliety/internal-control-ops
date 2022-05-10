import React from 'react';
import { Button, Input, Modal, Space } from 'antd';

export default ({ onOk }) => {
  return <>
    <Space>
      <Button
          danger
          onClick={() => Modal.confirm({
            title: '审核不通过',
            content: <>审核不通过，退回申请人重新修改。<br /><br /><Input placeholder={'修改意见'}/></>,
          })}
      >退回修改</Button>
      <Button
          type={'primary'}
          onClick={() => Modal.confirm({
            title: '确认审核通过',
            content: '审核完成后会自动发回申请人',
            onOk,
          })}
      >审核通过</Button>
    </Space>
  </>;
}