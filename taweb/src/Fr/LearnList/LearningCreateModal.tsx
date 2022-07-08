import React from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import { learningColumns } from './index';

export default function LearningCreateModal() {

  const navigate = useNavigate();
  const { http } = useHttp(`/ordinal/learning`, { method: 'POST', isManual: true });

  return <>
    <BetaSchemaForm
        title={'学习安排'}
        modalProps={{ destroyOnClose: true }}

        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>学习安排</Button>}

        columns={learningColumns}
        onFinish={async data => {
          let res = await http(null, null, data);
          navigate('/fr/mz/learning/' + res.id);
        }}
    />
  </>;
}