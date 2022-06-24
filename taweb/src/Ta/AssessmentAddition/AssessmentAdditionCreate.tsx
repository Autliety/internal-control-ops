import React from 'react';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { externalColumns } from './index';
import { useHttp } from '../../utils/request';

export default function AssessmentAdditionCreate() {

  const { http } = useHttp('/external', { method: 'POST', isManual: true });

  return <>
    <BetaSchemaForm
        title={'新建考评'}
        width={1000}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新建</Button>}

        columns={externalColumns.slice(1, 4)}
        onFinish={async (v) => http(null, null, v).then(() => window.location.reload())}
    />
  </>;
}