import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import BaseStepForm from '../../components/BaseStepForm';
import { baseColumns } from './index';

type Props = {
  isFirstEdit: boolean,
  id?: number,
  size?: 'small' | 'middle' | 'large',
}

function CommentCreateModal({ isFirstEdit, id, size }: Props) {

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/comment', { method: 'POST', isManual: true });
  const { state } = useHttp(`/ordinal/comment/${id}`, { initState: {}, isManual: !id });
  const { http: updateHttp } = useHttp(`/ordinal/comment/${id}`, { method: 'POST', isManual: true });

  return <>

    <BaseStepForm
        title='述职述廉评议'
        isFirstEdit={isFirstEdit}
        size={size}
        value={state}
        onFinish={async data => {
          data.time1 = moment(data.time1).valueOf();
          let res = isFirstEdit
              ? await http(null, null, { ...data, integer1: 1 })
              : await updateHttp(null, null, {
                ...state, ...data,
                integer1: parseInt(state.integer1) + 1
              }).then(() => window.location.reload());
          navigate('/fr/lz/comment/' + res.id);
        }}

        formConfig={{
          0: { title: '基本信息', columns: baseColumns.slice(1, 8) },
          1: { title: '评议结果', columns: baseColumns.slice(8, 9) },
          2: { title: '纳入廉政档案情况', columns: baseColumns.slice(9) },
        }}
    />
  </>;
}

export default CommentCreateModal;