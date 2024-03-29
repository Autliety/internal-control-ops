import React from 'react';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { riskColumns } from './index';
import { useNavigate } from 'react-router-dom';

export default function RiskCreateModal() {

  const navigate = useNavigate();

  return <>
    <BetaSchemaForm
        title={'排查记录'}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>排查记录</Button>}

        columns={riskColumns}
        onFinish={async () => navigate('/fr/lz/risk/1')}
    />
  </>;
}