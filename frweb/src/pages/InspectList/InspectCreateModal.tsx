import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { inspectColumns } from './index';

export default function InspectCreateModal() {

  const navigate = useNavigate();
  return <>
    <BetaSchemaForm
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>检查记录</Button>}

        columns={inspectColumns}
        onFinish={async () => navigate('/lz/inspect/1')}
    />
  </>;
}