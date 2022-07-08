import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useHttp } from '../../utils/request';
import BaseStepForm from '../../components/BaseStepForm';
import { reportColumns } from './index';

type Props = {
  isFirstEdit: boolean,
  id?: number,
}

export default function ReportCreateModal({ isFirstEdit, id }: Props) {

  const navigate = useNavigate();
  const { state } = useHttp(`/ordinal/report/${id}`, { initState: {}, isManual: !id });
  const { http: updateHttp } = useHttp(`/ordinal/report/${id}`, { method: 'POST', isManual: true });
  const { http } = useHttp('/ordinal/report', { method: 'POST', isManual: true });

  return <>
    <BaseStepForm
        title='履责报告'
        isFirstEdit={isFirstEdit}
        formConfig={{
          0: { title: '基本信息', columns: reportColumns.slice(0, 5) },
          1: { title: '监督评议', columns: reportColumns.slice(5) },
        }}
        value={state}
        onFinish={async (data: any) => {
          if (data.time1) {
            data.time1 = moment(data.time1).valueOf();
          }
          if (data.time2) {
            data.time2 = moment(data.time2).valueOf();
          }
          let res = isFirstEdit
              ? await http(null, null, { ...data, integer1: 1 })
              : await updateHttp(null, null, { ...state, ...data, integer1: parseInt(state.integer1) + 1 });
          navigate('/fr/lz/report/' + res.id);
        }}
    />
  </>;
}