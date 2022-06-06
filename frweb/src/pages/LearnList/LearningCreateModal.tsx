import React from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { learningColumns } from './index';

export default function LearningCreateModal() {

  const navigate = useNavigate();

  return <>
  <BetaSchemaForm
      title={'学习安排'}

      layoutType={'ModalForm'}
      trigger={<Button type={'primary'}><PlusSquareOutlined/>学习安排</Button>}

      columns={learningColumns}
      onFinish={async () => navigate('/mz/learning/1')}
  />
  </>;
}