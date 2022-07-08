import React from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import moment from 'moment';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { useNavigate } from 'react-router-dom';
import { disposalColumns } from './index';
import { useHttp } from '../../utils/request';

function DisposalCreateModal() {

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/disposal', { method: 'POST', isManual: true });

  return <>
    <BetaSchemaForm
        title={'第一种形态运用'}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新增</Button>}
        columns={disposalColumns}
        onFinish={async data => {
          if (data.time1) {
            data.time1 = moment(data.time1).valueOf();
          }
          if (data.time2) {
            data.time2 = moment(data.time2).valueOf();
          }
          let res = await http(null, null, data);
          navigate('/fr/lz/disposal/' + res.id);
        }}
    />
  </>;
}

export default DisposalCreateModal;