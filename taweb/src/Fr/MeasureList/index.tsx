import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Space } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import MeasureTable from './MeasureTable';
import { useHttp } from '../../utils/request';

export default function MeasureList() {

  const { state } = useHttp('/measure', { initState: [] });

  return <PageContainer
      title={'措施清单'}
      extra={
        <Space size={'middle'}>
          <Button><PrinterOutlined/>打印清单</Button>
        </Space>
      }
  >

    <MeasureTable isSearch dataSource={state}/>
  </PageContainer>;
}