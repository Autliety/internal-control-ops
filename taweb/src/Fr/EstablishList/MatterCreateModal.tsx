import React from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { ProColumns } from '@ant-design/pro-table';
import { useHttp } from '../../utils/request';
import { matterColumns } from '../Matter/MatterInfo';
import { toDate } from '../../utils/map';

type Props = {
  data: any,
  isAdd: boolean,
}

function MatterCreateModal({ data, isAdd }: Props) {

  const columns: ProColumns[] = [
    { title: '问题内容', dataIndex: 'content', valueType: 'textarea' },
    { title: '完成日期', dataIndex: 'endDate', valueType: 'date' },
  ];

  const { http } = useHttp(`/matterform/${data?.id}/matter`, { method: 'POST', isManual: true });

  return <div>
    <BetaSchemaForm
        title={'问题添加'}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'} disabled={!isAdd}><PlusSquareOutlined />问题新增</Button>}
        columns={matterColumns.slice(0, 2).concat(columns)}
        onFinish={async value => {
          http(null, null, {
            ...value,
            endDate: toDate(value.endDate),
            origin: value.origin.join('/')
          }).then(() => window.location.reload());
        }}
    />

  </div>;
}

export default MatterCreateModal;