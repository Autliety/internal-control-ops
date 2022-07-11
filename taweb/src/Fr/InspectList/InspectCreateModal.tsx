import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import moment from 'moment';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useHttp } from '../../utils/request';
import { inspectColumns } from './index';

export default function InspectCreateModal() {

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/inspect', { method: 'POST', isManual: true });

  return <>
    <BetaSchemaForm
        title={'监督检查'}
        layoutType={'ModalForm'}
        width={1000}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新增</Button>}
        columns={inspectColumns}
        onFinish={async data => {
          if (data.time1) {
            data.time1 = moment(data.time1).valueOf();
          }
          if (data.matter) {
            data.matter.map(i => i.endDate = moment(i.endDate).format('YYYY-MM-DD'));
          }
          let res = await http(null, null, { ...data, multiDepartment1: data.multiDepartment1?.map(i => ({ id: i })) });
          navigate('/fr/lz/inspect/' + res.id);
        }}
    />
  </>;
}