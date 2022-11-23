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
  const { http } = useHttp('/three', { method: 'POST', isManual: true });
  const { state } = useHttp(`/three/${id}`, { initState: {}, isManual: !id });
  const { http: updateHttp } = useHttp(`/three/${id}`, { method: 'POST', isManual: true });
  // const { state: temps } = useHttp('/attach?id=22', { initState: [] });

  return <>
    <BaseStepForm
        title="三重一大"
        isFirstEdit={isFirstEdit}
        value={state}
        onFinish={async data => {
          data.requestTime = moment(data.requestTime).valueOf();
          data.decisionTime = moment(data.decisionTime).valueOf();
          data.executeTime = moment(data.executeTime).valueOf();
          let res = isFirstEdit
              ? await http(null, null, data )
              : await updateHttp(null, null, {
                ...state, ...data,
              }).then(() => window.location.reload());
          navigate('/fr/lz/three/' + res.id);
        }}
        formConfig={{
          0: { title: '议题拟提交', columns: threeColumns.filter(c => c.onStep === 0) },
          1: { title: '党委决策', columns: threeColumns.filter(c => c.onStep === 1) },
          2: { title: '纪委监督决策', columns: threeColumns.filter(c => c.onStep === 2) },
          3: { title: '决策执行', columns: threeColumns.filter(c => c.onStep === 3) },
          4: { title: '纪委监督执行', columns: threeColumns.filter(c => c.onStep === 4) },
        }}
        size={size}
    />
  </>;
}