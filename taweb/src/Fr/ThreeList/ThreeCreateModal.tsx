import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import BaseStepForm from '../../components/BaseStepForm';
import { threeColumns } from './index';


type Props = {
  isFirstEdit: boolean,
  id?: number,
  size?: 'small' | 'middle' | 'large',
}

export default function ThreeCreateModal({ isFirstEdit, id, size }: Props) {

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/three', { method: 'POST', isManual: true });
  const { state } = useHttp(`/ordinal/three/${id}`, { initState: {}, isManual: !id });
  const { http: updateHttp } = useHttp(`/ordinal/three/${id}`, { method: 'POST', isManual: true });

  return <>
    <BaseStepForm
        title='三重一大'
        isFirstEdit={isFirstEdit}
        value={state}
        onFinish={async data => {
          if (data.time1)
            data.time1 = moment(data.time1).valueOf();
          let res = isFirstEdit
              ? await http(null, null, { ...data, integer1: 1 })
              : await updateHttp(null, null, { ...state, ...data, integer1: parseInt(state.integer1) + 1 });
          navigate('/fr/lz/three/' + res.id);
        }}
        formConfig={{
          0: { title: '基本信息', columns: threeColumns.slice(0, 6) },
          1: { title: '决策信息', columns: threeColumns.slice(6) },
        }}
        size={size}
    />
  </>;
}