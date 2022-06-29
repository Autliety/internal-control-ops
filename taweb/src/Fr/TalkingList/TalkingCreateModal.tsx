import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { Button } from 'antd';
import moment from 'moment';
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
          data.time1 = moment(data.time1).valueOf();
          let res = await http(null, null, data);
          navigate('/fr/lz/talking/' + res.id);
        }}
    />
  </>;
}