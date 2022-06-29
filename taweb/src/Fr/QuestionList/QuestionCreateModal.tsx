import React from 'react';
import { PlusSquareOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import { BetaSchemaForm } from '@ant-design/pro-form';
import moment from 'moment';
import { questionColumns } from './index';

function QuestionCreateModal() {

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/question', { method: 'POST', isManual: true });

  return <>
    <BetaSchemaForm
        title={'履责约谈'}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新增</Button>}
        columns={questionColumns}
        onFinish={async data => {
          if (data.time1)
            data.time1 = moment(data.time1).valueOf();
          let res = await http(null, null, data);
          navigate('/fr/lz/question/' + res.id);
        }}
    />

  </>;
}

export default QuestionCreateModal;