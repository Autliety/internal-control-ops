import React from 'react';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { threeColumns } from './index';

export default function ThreeCreateModal() {

  const navigate = useNavigate();

  return <>
    <BetaSchemaForm
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新建</Button>}

        columns={threeColumns}
        onFinish={async () => navigate('/lz/three/1')}
    />
  </>;
}