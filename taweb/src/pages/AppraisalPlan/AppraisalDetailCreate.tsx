import React from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { ProColumns } from '@ant-design/pro-table';
import { useHttp } from '../../utils/request';

function AppraisalDetailCreate({ value, userId }) {

  const { http } = useHttp('/external/usage', { method: 'POST', isManual: true });

  function getValueEnum(value) {
    let valueEnum = {};
    value.forEach((v: any) => {
      let u = { text: v.name };
      valueEnum[v.id] = u;
    });
    return valueEnum;
  }

  const columns: ProColumns[] = [
    {
      title: '选择指标',
      dataIndex: 'code',
      valueType: 'select',
      valueEnum: getValueEnum(value),
    }
  ];

  return <>
    <BetaSchemaForm
        title={'增减分指标考评添加'}
        width={1000}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>添加增减分</Button>}

        columns={columns}
        onFinish={async (v) => http(null, null, {
          applyUser: { id: userId.userId },
          external: { id: v.code }
        }).then(() => window.location.reload())}
    />
  </>;
}

export default AppraisalDetailCreate;