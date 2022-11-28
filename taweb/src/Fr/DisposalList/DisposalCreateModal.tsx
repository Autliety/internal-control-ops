import React from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { useNavigate } from 'react-router-dom';
import { disposalColumns } from './index';
import { useHttp } from '../../utils/request';
import FileUpload from '../../components/FileUpload';
import { toDateTime } from '../../utils/map';

function DisposalCreateModal() {

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/disposal', { method: 'POST', isManual: true });
  const { state: temps } = useHttp('/attach?id=23', {initState: []});

  return <>
    <BetaSchemaForm
        title={'第一种形态运用'}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新增</Button>}
        columns={disposalColumns.slice(0, -1).concat({
          title: '模板下载',
          tooltip: '选择下载',
          renderFormItem: () => <FileUpload isInEdit={false} value={temps}
          />,
        }).concat(disposalColumns[disposalColumns.length - 1])}
        onFinish={async data => {
          data.time1 = toDateTime(data.time1);
          data.time2 = toDateTime(data.time2);
          let res = await http(null, null, data);
          navigate('/fr/lz/disposal/' + res.id);
        }}
    />
  </>;
}

export default DisposalCreateModal;