import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import BaseStepForm from '../../components/BaseStepForm';
import { threeColumns } from './index';
import FileUpload from '../../components/FileUpload';


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
  const { state: temps } = useHttp('/attach?id=22', { initState: [] });

  return <>
    <BaseStepForm
        title="三重一大"
        isFirstEdit={isFirstEdit}
        value={state}
        onFinish={async data => {
          if (data.time1)
            data.time1 = moment(data.time1).valueOf();
          let res = isFirstEdit
              ? await http(null, null, { ...data, integer1: 1 })
              : await updateHttp(null, null, {
                ...state, ...data,
                integer1: parseInt(state.integer1) + 1,
              }).then(() => window.location.reload());
          navigate('/fr/lz/three/' + res.id);
        }}
        formConfig={{
          0: {
            title: '基本信息', columns: threeColumns.slice(0, 5).concat({
                  dataIndex: 'template',
                  title: '相关资料',
                  tooltip: '点击下载相关资料,查看具体制度要求',
                  renderFormItem: () => <FileUpload isInEdit={false} value={temps}/>,
                },
            ).concat(threeColumns[5]),
          },
          1: { title: '党委决策', columns: threeColumns.slice(6, -1) },
          2: { title: '纪委监督', columns: threeColumns.slice(-1) },
        }}
        size={size}
    />
  </>;
}