import React from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { reportColumns } from './index';
import { useHttp } from '../../utils/request';

export default function ReportCreateModal() {

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/report', { method: 'POST', isManual: true });

  return <>
    <BetaSchemaForm
        title={'履责报告'}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新增报告</Button>}

        columns={reportColumns}
        onFinish={
          async data => {
            data.time1 = moment(data.time1).valueOf();
            data.time2 = moment(data.time2).valueOf();
            let res = await http(null, null, data);
            navigate('/fr/lz/report/' + res.id);
          }}
    />
  </>;
}