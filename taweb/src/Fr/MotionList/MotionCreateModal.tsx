import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useHttp } from '../../utils/request';
import BaseStepForm from '../../components/BaseStepForm';
import { motionColumns } from './index';
import { toDate } from '../../utils/map';

type Props = {
  isFirstEdit: boolean,
  id?: number,
  size?: 'small' | 'middle' | 'large',
}

function MotionCreateModal({ isFirstEdit, id, size }: Props) {

  const navigate = useNavigate();
  const { http: createHttp } = useHttp('/motion', { method: 'POST', isManual: true });

  const { state } = useHttp(`/motion/${id}`, { initState: {}, isManual: !id });
  const { http: updateHttp } = useHttp(`/motion/${id}`, { method: 'POST', isManual: true });


  return <>
    <BaseStepForm
        title="纪委动议"
        isFirstEdit={isFirstEdit}
        value={state}
        onFinish={async data => {
          data.requestDate = toDate(data.requestDate);
          data.decisionDate = toDate(data.decisionDate);
          data.executeDate = toDate(data.executeDate);
          let res = isFirstEdit
              ? await createHttp(null, null, data)
              : await updateHttp(null, null, {
                ...state,
                ...data,
              }).then(() => window.location.reload());
          navigate('/fr/dz/motion/' + res.id);
        }}
        formConfig={{
          0: {
            title: '动议准备',
            columns: motionColumns.filter(c => c.onStep === 0),
          },
          1: {
            title: '研究交办',
            columns: motionColumns.filter(c => c.onStep === 1),
          },
          2: {
            title: '执行落实',
            columns: motionColumns.filter(c => c.onStep === 2),
          },
        }}
        size={size}
    />
  </>;
}

export default MotionCreateModal;