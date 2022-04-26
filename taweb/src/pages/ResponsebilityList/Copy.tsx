import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Button, Descriptions, Divider, Input, List, Table } from 'antd';
import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';
import { ColumnsType } from 'antd/lib/table/interface';

export default function Copy() {

  // 问题列表
  const data = [
    {
      title: '深入基层企业不够',
      description: '',
    },
    {
      title: '有时精神懈怠，进取心不强',
      description: '2022年3月补录',
    },
  ];

  // 领导意见
  const opinion = {
    deptOpinion: '尽快整改！',
    selfOpinion: '确实存在，会尽快改正！',
  }

  const columns: ColumnDef[] = [
    {
      title: '部门领导意见',
      dataIndex: 'deptOpinion',
      renderFormItem: () => <Input
          defaultValue={opinion.deptOpinion}
          onChange={v => console.log(v.target.value)}
      />,
    },
    {
      title: '当事人意见',
      dataIndex: 'selfOpinion',
      renderFormItem: () => <Input
          defaultValue={opinion.selfOpinion}
          onChange={v => console.log(v.target.value)}
      />,
    },
  ];

  // 整改措施
  const measureColumns: ColumnsType = [
    { title: '编号', dataIndex: 'id' },
    { title: '具体措施', dataIndex: 'detail' },
    {
      title: '措施情况',
      dataIndex: 'measureCase',
      render: text => <Button type={'link'}>{text}</Button>
    }
  ];

  const measureData = [
    {
      id: 1,
      detail: '不断加强专业知识的学习，坚持终身学习，加强对工作的研究，提高综合素质。从实践中学习，增强做好工作的本领。',
      measureCase: 'WT-003-02'
    },
    {
      id: 2,
      detail: '加强政治理论学习,在认清职责的同时立足本职,本本分分做实实在在的事情。严格要求自己，用自己的一言一行，一举一动去自觉工作，做到' +
          '全心全意为人民服务。',
      measureCase: 'WT-003-09'
    },
  ];

  return <PageContainer>
    <Descriptions
        bordered
        className={'content'}
        column={2}
        labelStyle={{ width: '10%' }}
        contentStyle={{ width: '40%' }}
    >
      <Descriptions.Item label='发送部门'>党政综合办公室</Descriptions.Item>
      <Descriptions.Item label='接收人'>王富贵</Descriptions.Item>
      <Descriptions.Item label='发送时间'>2022-3-21</Descriptions.Item>
      <Descriptions.Item label='抄送部门/人'>纪检</Descriptions.Item>
    </Descriptions>

    <Divider orientation={'left'}>问题列表</Divider>
    <div className={'content'}>
      <List
          size={'small'}
          dataSource={data}
          renderItem={(item, index) => (
              <List.Item extra={<Button type={'link'}>查看</Button>}>
                <List.Item.Meta
                    avatar={<Avatar style={{ backgroundColor: '#f56a00' }}>{index + 1}</Avatar>}
                    title={<p style={{ fontSize: 14 }}>{item.title}</p>}
                    description={'备注：' + item.description}
                />
              </List.Item>
          )}
      />
    </div>

    <Divider orientation={'left'}>相关意见</Divider>
    <EditableDescriptions isEdit={false} column={1} columns={columns} data={opinion}/>

    <Divider orientation={'left'}>整改措施</Divider>
    <Table
        rowKey={'id'}
        bordered
        columns={measureColumns}
        dataSource={measureData}
        scroll={{
          scrollToFirstRowOnChange: true,
          x: 1700,
        }}
        pagination={false}
    />


  </PageContainer>;
}