import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import { leaderColumns } from './index';
import BaseStepForm from '../../components/BaseStepForm';

type Props = {
  isFirstEdit: boolean,
  id?: number,
  size?: 'small' | 'middle' | 'large',
}

function LeaderCreateModal({ isFirstEdit, id, size }: Props) {

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/leader', { method: 'POST', isManual: true });
  const { state } = useHttp(`/ordinal/leader/${id}`, { initState: {}, isManual: !id });
  const { http: updateHttp } = useHttp(`/ordinal/leader/${id}`, { method: 'POST', isManual: true });

  return <>
    <BaseStepForm
        title=''
        isFirstEdit={isFirstEdit}
        value={state}
        onFinish={async data => {
          if (data.time1)
            data.time1 = moment(data.time1).valueOf();
          let res = isFirstEdit
              ? await http(null, null, { ...data, integer1: 1 })
              : await updateHttp(null, null, {
                ...state, ...data,
                integer1: parseInt(state.integer1) + 1
              }).then(() => window.location.reload());

          navigate('/fr/lz/leader/' + res.id);
        }}
        formConfig={{
          0: { title: '基本信息', columns: leaderColumns.slice(0, 7) },
          1: { title: '核查处置', columns: leaderColumns.slice(7) },
        }}
        size={size}
    />

  </>;
}

export default LeaderCreateModal;