import React from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { remindColumns } from './index';
import { useNavigate } from 'react-router-dom';

function RemindCreateModal() {

  const navigate = useNavigate();

  return <>
    <BetaSchemaForm
        title={'互相监督提醒'}
        width={1000}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新建</Button>}

        columns={remindColumns}
        onFinish={async () => navigate('/lz/remind/1')}
    />
  </>;
}

export default RemindCreateModal;