import React from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useHttp } from '../../utils/request';
import { remindColumns } from './index';

function RemindCreateModal() {

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/remind', { method: 'POST', isManual: true });

  return <>
    <BetaSchemaForm
        title={'互相监督提醒'}
        width={1000}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新建</Button>}

        columns={remindColumns}
        onFinish={async data => {
          if (data.time1)
            data.time1 = moment(data.time1).valueOf();
          let res = await http(null, null, data);
          navigate('/fr/lz/remind/' + res.id);
        }}
    />
  </>;
}

export default RemindCreateModal;