import React from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import { BetaSchemaForm } from '@ant-design/pro-form';
import moment from 'moment';
import { clubColumns } from './index';

function ClubCreateModal() {
  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/club', {method: 'POST', isManual: true})

  return <>
    <BetaSchemaForm
        title={'民主（组织）生活会'}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新增</Button>}
        columns={clubColumns}
        onFinish={async data => {
          data.time1 = moment(data.time1).valueOf();
          let res = await http(null, null, data);
          navigate('/fr/lz/club/' + res.id);
        }}
    />

  </>;
}

export default ClubCreateModal;