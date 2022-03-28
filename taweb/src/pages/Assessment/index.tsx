import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, message, Space, Table, Input } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { FileWordOutlined, PlusSquareOutlined, ImportOutlined, FileSearchOutlined } from '@ant-design/icons';

export default function Assessment() {

  const dataSource = [
    {
      id: '1',
      name: '考核指标0001',
      weight: '30%',
      standard: '详细考核标准文件0001',
      remark: '测试数据',
      updateDate: '2022-03-01',
    },
    {
      id: '2',
      name: '考核指标0002',
      weight: '20%',
      standard: '详细考核标准文件1号',
      remark: '测试数据',
      updateDate: '2022-03-01',
    },
  ];

  const columns: ColumnsType = [
    { title: '编号', dataIndex: 'id' },
    { title: '指标名称', dataIndex: 'name' },
    { title: '备注', dataIndex: 'remark' },
    { title: '考核权重', dataIndex: 'weight' },
    {
      title: '考核标准',
      dataIndex: 'standard',
      render: value => <span>
        {value}
        <Button
            type={'link'}
            onClick={() => message.warning('抱歉，还没有相关文件！！')}
        >
        <FileWordOutlined />
        下载
      </Button>
        </span>,
    },
    { title: '更新时间', dataIndex: 'updateDate' },
  ];

  return <PageContainer
      extra={
        <Space size={'middle'}>
          <Button type={'primary'}><PlusSquareOutlined />新增</Button>
          <Button type={'primary'}><ImportOutlined />导入</Button>
        </Space>
      }
  >
    <Space size={'middle'}>
      <Input.Search placeholder={'搜索'} enterButton />
      <Button type={'primary'}><FileSearchOutlined />精确查找</Button>
    </Space>
    <Divider />
    <Table
        bordered
        size={'small'}
        scroll={{
          scrollToFirstRowOnChange: true,
          x: 1700,
        }}

        columns={columns}
        rowKey={'id'}

        dataSource={dataSource}
    />
  </PageContainer>;
}
