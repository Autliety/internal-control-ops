import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useHttp } from '../../utils/request';
import BaseStepForm from '../../components/BaseStepForm';
import { remindColumns } from './index';

type Props = {
  isFirstEdit: boolean,
  id?: number,
  size?: 'small' | 'middle' | 'large',
}

function RemindCreateModal({ isFirstEdit, id, size }: Props) {

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/remind', { method: 'POST', isManual: true });
  const { state } = useHttp(`/ordinal/remind/${id}`, { initState: {}, isManual: !id });
  const { http: updateHttp } = useHttp(`/ordinal/remind/${id}`, { method: 'POST', isManual: true });

  return <>

    <BaseStepForm
        title='互相监督提醒'
        isFirstEdit={isFirstEdit}
        size={size}
        value={state}
        onFinish={async data => {
          if (data.time1) {
            data.time1 = moment(data.time1).valueOf();
          }
          let res = isFirstEdit
              ? await http(null, null, { ...data, integer1: 1 })
              : await updateHttp(null, null, {
                ...state, ...data,
                integer1: parseInt(state.integer1) + 1
              }).then(() => window.location.reload());
          navigate('/fr/lz/remind/' + res.id);
        }}

        formConfig={{
          0: { title: '基本信息', columns: remindColumns.slice(0, 8) },
          1: { title: '评议结果', columns: remindColumns.slice(8) },
        }}
    />
  </>;
}

export default RemindCreateModal;