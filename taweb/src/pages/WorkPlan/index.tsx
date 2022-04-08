import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Alert, Button, Modal, Select, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { Link } from 'react-router-dom';
import { ContainerOutlined } from '@ant-design/icons';

import { useHttp } from '../../utils/request';

const { Option } = Select;

export default function WorkPlan() {

  const { state, loading } = useHttp('/plan', { initState: [] });

  // 未建计划的指标
  const unUsedAssessments = [
    { id: '1', name: '指标A' },
    { id: '2', name: '指标B' },
    { id: '3', name: '指标C' },
  ]

  // modal:挑选未计划的指标
  const [isVisible, setIsVisible] = React.useState(false);

  const columns: ColumnsType = [
    { title: '编号', dataIndex: 'id', width: 150 },
    { title: '计划名称', dataIndex: 'name' },
    { title: '创建时间', dataIndex: 'createTime' },
    { title: '最后更新时间', dataIndex: 'updateTime' },
    {
      title: '详情',
      key: 'operation',
      width: '5%',
      align: 'center',
      fixed: 'right',
      render: (_, record: any) => <Link to={`/plan/${record.id}`}><ContainerOutlined/></Link>,
    }
  ];

  return <PageContainer
      extra={<Button type={'primary'} onClick={() => setIsVisible(true)}>新建计划</Button>}
  >
    <Table
        bordered
        loading={loading}
        size={'small'}
        scroll={{
          scrollToFirstRowOnChange: true,
          x: 1700,
        }}

        columns={columns}
        rowKey={'id'}

        dataSource={state}
    />
    {/* modal */}
    <Modal
        title={'未作计划指标'}
        closable
        visible={isVisible}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
    >
      <Alert showIcon message={'请选择一项进行计划制定'} type={'warning'}/><br/>
      <Select
          showSearch
          placeholder={'请选择'}
          style={{ width: 200 }}
          onChange={v => console.log(v)}
      >
        {
          unUsedAssessments.map((item, index) => <Option key={index} value={item.name}>
            {item.name}
          </Option>)
        }
      </Select>
    </Modal>

  </PageContainer>;

}
