import React from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { learningColumns } from './index';

export default function LearningCreateModal() {

  return <>
    <BetaSchemaForm
        title={'学习安排添加'}
        modalProps={{ destroyOnClose: true }}

        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>学习安排</Button>}

        columns={learningColumns}
        onFinish={async v => console.log(JSON.stringify(v))}
    />
  </>;
}