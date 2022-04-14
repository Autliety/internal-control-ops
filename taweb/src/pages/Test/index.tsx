import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table'
import { Button, Descriptions, Divider, Input, Table } from 'antd';
import moment from 'moment';
import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';
import { ColumnsType } from 'antd/lib/table/interface';
import { DownloadOutlined } from '@ant-design/icons';

export default function Test() {

  const [editableKeys, setEditableRowKeys] = React.useState([]);
  const [dataSource, setDataSource] = React.useState([]);
  const [isEdit, setIsEdit] = React.useState(false);

  // 问题列表
  const matterList = [
    {
      code: 1,
      matter: '“四个意识”不强、落实“两个维护”不到位',
      detail: '在重大原则问题上不同党中央保持一致且有实际言论、行为且造成不良后果。',
      remark: '2022年3月补充',
    },
    {
      code: 2,
      matter: '有时精神懈怠，进取心不强',
      detail: '不作为，慢作为',
      remark: '',
    }
  ];
  const matterColumns: ProColumns[] = [
    {
      title: '序号',
      dataIndex: 'code',
      width: '5%',
    },
    {
      title: '突出问题/廉政风险',
      dataIndex: 'matter',
    },
    {
      title: '具体表现',
      dataIndex: 'detail',
      width: '35%',
    },
    {
      title: '说明',
      dataIndex: 'remark',
    },
    isEdit && {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
            key='editable'
            onClick={() => {
              action?.startEditable?.(record.id);
            }}
        >
          编辑
        </a>,
        <a
            key='delete'
            onClick={() => {
              setDataSource(dataSource.filter(item => item.id !== record.id));
            }}
        >
          删除
        </a>,
      ],
    },
  ];

  // 领导意见
  const opinion = {
    deptOpinion: '尽快整改！',
    chargeOpinion: '尽快整改！',
    partyOpinion: '尽快整改！'
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
      title: '分管领导意见',
      dataIndex: 'chargeOpinion',
      renderFormItem: () => <Input
          defaultValue={opinion.chargeOpinion}
          onChange={v => console.log(v.target.value)}
      />,
    },
    {
      title: '党组织意见',
      dataIndex: 'partyOpinion',
      renderFormItem: () => <Input
          defaultValue={opinion.partyOpinion}
          onChange={v => console.log(v.target.value)}
      />,
    },
  ];

  // 相关附件
  const attachmentData = [
    { name: '讨论会议纪要', code: 'JY0001-01', updatedTime: '2021-12-12', type: 'file' },
    { name: '党风廉政建设抄告单', code: 'CG0001-02', updatedTime: '2021-12-13', type: '' },
    { name: '各项巡查、检查文件', code: 'XC0001-05', updatedTime: '2021-12-15', type: 'file' },
  ];
  const attachmentColumns: ColumnsType = [
    { title: '名称（类别）', dataIndex: 'name' },
    { title: '编号', dataIndex: 'code' },
    { title: '更新时间', dataIndex: 'updatedTime' },
    {
      title: '操作',
      dataIndex: 'operate',
      render: (_, record: any) => record.type === 'file'
          ? <Button type={'primary'} icon={<DownloadOutlined/>}>下载</Button>
          : <Button type={'link'}>{record.name}</Button>
    }
  ];

  return <PageContainer>

    <Descriptions
        bordered
        className={'content'}
        labelStyle={{ width: '10%' }}
        contentStyle={{ width: '40%' }}
    >
      <Descriptions.Item label='班子成员'>王富贵</Descriptions.Item>
      <Descriptions.Item label='分管/联系办所中心'>党政综合办公室、纪检、工会</Descriptions.Item>
    </Descriptions>
    <br/>

    <Divider orientation={'left'}>问题列表</Divider>
    <EditableProTable
        rowKey='id'
        maxLength={5}
        scroll={{
          x: 960,
        }}

        columns={matterColumns}
        request={async () => ({
          data: matterList,
          success: true,
        })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onChange: setEditableRowKeys,
        }}
        recordCreatorProps={
            isEdit && { record: () => ({ id: `${moment().format('X')}` }) }
        }
    />

    <Divider orientation={'left'}>领导意见</Divider>
    <EditableDescriptions isEdit={false} column={3} columns={columns} data={opinion}/>

    <Divider orientation={'left'}>相关附件</Divider>
    <Table
        rowKey={'id'}
        columns={attachmentColumns}
        dataSource={attachmentData}
        pagination={false}
        scroll={{
          scrollToFirstRowOnChange: true,
          x: 1700,
        }}
    />
  </PageContainer>;
}