import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useHttp } from '../../utils/request';
import BaseStepForm from '../../components/BaseStepForm';
import { clubColumns } from './index';

type Props = {
  isFirstEdit: boolean,
  id?: number,
}

function ClubCreateModal({ isFirstEdit, id }: Props) {

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/club', { method: 'POST', isManual: true })
  const { state } = useHttp(`/ordinal/club/${id}`, { initState: {}, isManual: !id });
  const { http: updateHttp } = useHttp(`/ordinal/club/${id}`, { method: 'POST', isManual: true });

  return <>

    <BaseStepForm
        title='民主（组织）生活会'
        isFirstEdit={isFirstEdit}
        value={state}
        onFinish={async data => {
          if (data.time1)
            data.time1 = moment(data.time1).valueOf();
          let res = isFirstEdit
              ? await http(null, null, { ...data, integer1: 1 })
              : await updateHttp(null, null, { ...state, ...data, integer1: parseInt(state.integer1) + 1 });
          navigate('/fr/lz/club/' + res.id);
        }}
        formConfig={{
          0: { title: '基本信息', columns: clubColumns.slice(0, 7) },
          1: { title: '监督情况', columns: clubColumns.slice(7, 10) },
          2: { title: '整改情况', columns: clubColumns.slice(10) },
        }}
    />

  </>;
}

export default ClubCreateModal;