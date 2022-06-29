import React from 'react';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { Button } from 'antd';
import moment from 'moment';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { threeColumns } from './index';
import { useHttp } from '../../utils/request';

export default function ThreeCreateModal() {

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/three', { method: 'POST', isManual: true });

  return <>
    <BetaSchemaForm
        title={'三重一大'}
        width={1000}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新建</Button>}

        columns={threeColumns}
        onFinish={async data => {
          if (data.time1)
            data.time1 = moment(data.time1).valueOf();
          let res = await http(null, null, data);
          navigate('/fr/lz/three/' + res.id);
        }}
    />
  </>;
}