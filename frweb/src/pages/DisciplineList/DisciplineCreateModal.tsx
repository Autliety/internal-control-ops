import React from 'react';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { discipColumns } from './index';

export default function DisciplineCreateModal() {

  const navigate = useNavigate();

  return <>
    <BetaSchemaForm
        title={'违法违纪上报'}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新建</Button>}

        columns={discipColumns}
        onFinish={async () => navigate('/lz/discipline/1')}
    />
  </>;
}