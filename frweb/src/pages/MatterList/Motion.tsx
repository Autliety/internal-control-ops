import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Descriptions, Divider } from 'antd';
import BaseEditableTable from '../../components/BaseEditableTable';
import { ProColumns } from '@ant-design/pro-table';

export default function Motion() {

  const data = [
    { id: 1, content: '关于全面建设小康社会', description: '' },
    { id: 2, content: '关于全面落实三胎计划', description: '' },
  ];
  const columns: ProColumns[] = [
    { title: '序号', dataIndex: 'id' },
    { title: '内容/事项', dataIndex: 'content' },
    { title: '事项说明', dataIndex: 'description' },

  ];

  const peopleData = [
    { dept: '纪委', name: '宋元丰', station: '主任' },
    { dept: '发改委', name: '李大强', station: '实施者' },

  ];
  const peopleColumns: ProColumns[] = [
    { title: '部门', dataIndex: 'dept' },
    { title: '姓名', dataIndex: 'name' },
    { title: '岗位', dataIndex: 'station' },
  ];

  const situationData = [
    { id: '1', content: '措施1', plan: '措施清单WT001-089' },
  ];
  const situationColumns: ProColumns[] = [
    { title: '序号', dataIndex: 'id', width: 100 },
    { title: '内容/事项', dataIndex: 'content' },
    { title: '具体措施', dataIndex: 'plan', render: text => <Button type={'link'}>{text}</Button> },
  ];

  return <PageContainer>
    <div className={'content'}>
      <Descriptions
          title='政府动议'
          bordered
          column={2}
          labelStyle={{ width: '10%' }}
      >
        <Descriptions.Item label='动议提起人'>王富贵</Descriptions.Item>
        <Descriptions.Item label='动议日期'>2022-3-14</Descriptions.Item>
        <Descriptions.Item label='动议情形（议题）' span={2}>19届市政府第6次常务会议会议纪要（列席情况、议定事项及解读）</Descriptions.Item>
        <Descriptions.Item label='审批人' span={2}>赵建国、李源潮、孙伟、常海、</Descriptions.Item>
        <Descriptions.Item label='会议地点'>会议室101</Descriptions.Item>
        <Descriptions.Item label='会议时间'>2022-4-14</Descriptions.Item>
      </Descriptions>
    </div>

    <Divider orientation={'left'}>参会人员</Divider>
    <BaseEditableTable
        columns={peopleColumns}
        value={peopleData}
    />

    <Divider orientation={'left'}>会议内容及研究确定事项概述</Divider>
    <BaseEditableTable
        columns={columns}
        value={data}
    />
    <Divider orientation={'left'}>执行实施具体情况</Divider>
    <BaseEditableTable
        columns={situationColumns}
        value={situationData}
    />
  </PageContainer>;
}