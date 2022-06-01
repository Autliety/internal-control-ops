import React from 'react';
import { Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { reportColumns } from './index';

export default function ReportCreateModal() {

  const navigate = useNavigate();

  return <>
    <BetaSchemaForm
        title={'履责报告'}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新增报告</Button>}

        columns={reportColumns.slice(0, 4)}
        onFinish={async () => navigate('/lz/report/1')}
    />
  </>;
}