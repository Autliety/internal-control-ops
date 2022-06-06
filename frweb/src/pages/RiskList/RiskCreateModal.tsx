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
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>排查记录</Button>}

        columns={riskColumns}
        onFinish={async () => navigate('/lz/risk/1')}
    />
  </>;
}