import React from 'react';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import { leaderColumns } from './index';

function LeaderCreateModal() {

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/leader', { method: 'POST', isManual: true });

  return <>
    <BetaSchemaForm
        title={'领导插手干预重大事项记录'}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新增</Button>}
        columns={leaderColumns}
        onFinish={async data => {
          if (data.time1)
            data.time1 = moment(data.time1).valueOf();
          let res = await http(null, null, data);
          navigate('/fr/lz/leader/' + res.id);
        }}
    />

  </>;
}

export default LeaderCreateModal;