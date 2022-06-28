import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { talkingColumns } from './index';
import { useHttp } from '../../utils/request';

export default function TalkingCreateModal() {

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/talking', { method: 'POST', isManual: true });

  return <>
    <BetaSchemaForm
        title={'5+1谈话记录'}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新增</Button>}
        columns={talkingColumns}
        onFinish={async data => {
          let res = await http(null, null, data);
          navigate('/fr/talking/' + res.id);
        }}
    />
  </>;
}