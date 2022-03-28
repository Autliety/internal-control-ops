import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Table, Tag } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ColumnsType } from "antd/lib/table/interface";
import { ContainerOutlined } from "@ant-design/icons";

import { countingStatus } from "../../utils/nameMap";
// import AssetScanModal from "../../components/AssetScanModal";

export default function CountingList() {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const columns: ColumnsType = [
    { title: '盘点名称', dataIndex: 'name', width: 150 },
    { title: '创建时间', dataIndex: 'setupDate' },
    { title: '开始时间', dataIndex: 'startDate' },
    { title: '结束时间', dataIndex: 'endDate' },
    { title: '资产数量（件）', dataIndex: 'count' },
    { title: '负责人', dataIndex: 'principal' },
    {
      title: '状态',
      dataIndex: 'status',
      render: text => <Tag color={countingStatus[text]?.tag}>{countingStatus[text]?.label}</Tag>,
      width: 80
    },
    { title: '备注', dataIndex: 'remark', width: 300 },
    {
      title: '详情',
      key: 'operation',
      width: '5%',
      align: 'center',
      fixed: 'right',
      render: (_, record) => <Link to={`/asset/counting/1`}><ContainerOutlined/></Link>,
    }
  ];

  // 测试数据
  const data = [
    {
      id: 1,
      name: '2021年盘点',
      setupDate: '2021-08-15 12:25:25',
      count: 2000,
      startDate: '2021-08-16 12:25:25',
      endDate: '2021-12-16 12:25:25',
      principal: '舒李栋',
      status: 'WAITING',
      remark: '测试数据',
    },
    {
      id: 2,
      name: '2020年盘点',
      setupDate: '2020-08-15 12:25:25',
      count: 2000,
      startDate: '2020-08-16 12:25:25',
      endDate: '2020-12-16 12:25:25',
      principal: '舒李栋',
      status: 'DONE',
      remark: '测试数据',
    },
    {
      id: 3,
      name: '2019年盘点',
      setupDate: '2019-08-15 12:25:25',
      count: 2000,
      startDate: '2019-08-16 12:25:25',
      endDate: '2019-12-16 12:25:25',
      principal: '舒李栋',
      status: 'CANCEL',
      remark: '测试数据',
    }
  ];

  return <PageContainer
      extra={
        <>
          {/*<AssetScanModal onScan={result => navigate(`${pathname}/assets/${result}`)}/>*/}
          <Button type={'primary'} onClick={() => navigate('/asset/counting/0?create=true')}>创建盘点</Button>
        </>
      }
  >
    <Table
        bordered
        size={'small'}
        scroll={{
          scrollToFirstRowOnChange: true,
          x: 1700,
        }}

        columns={columns}
        rowKey={'id'}

        dataSource={data}
    />
  </PageContainer>
}
