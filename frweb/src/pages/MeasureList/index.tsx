import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, message, Space } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import MeasureTable from './MeasureTable';

export default function MeasureList() {

  return <PageContainer
      title={'措施清单'}
      extra={
        <Space size={'middle'}>
          <Button><PrinterOutlined/>打印清单</Button>
          {/*<MeasureCreateModal/>*/}
        </Space>
      }
  >

    <MeasureTable isSearch/>

    <FooterToolbar>
      <Button
          type={'primary'}
          onClick={() => message.success('领导审批')}
      >
        领导审批
      </Button>
    </FooterToolbar>
  </PageContainer>;
}