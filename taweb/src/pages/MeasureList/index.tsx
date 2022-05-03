import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Input, message, Space } from 'antd';
import { FileSearchOutlined, PrinterOutlined } from '@ant-design/icons';
import MeasureTable from './MeasureTable';

export default function MeasureList() {



  return <PageContainer
      title={'措施清单'}
      extra={
        <Space size={'middle'}>
          <Button><PrinterOutlined />打印清单</Button>
        </Space>
      }
  >
    <Space>
      <Input.Search placeholder={'搜索'} enterButton />
      <Button><FileSearchOutlined />精确查找</Button>
    </Space>

    <Divider />
    <MeasureTable />

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