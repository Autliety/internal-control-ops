import React from 'react';
import { EditableProTable, ProColumns } from '@ant-design/pro-table';
import { Button, Descriptions, Divider, Space, Statistic, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { ArrowLeftOutlined, DownloadOutlined, ImportOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

export default function Responsibility() {

  const navigate = useNavigate();
  const [editableKeys, setEditableRowKeys] = React.useState([]);
  const [dataSource, setDataSource] = React.useState([]);

  const matterColumns: ProColumns[] = [
    { title: '编号', dataIndex: 'code' },
    { title: '问题概述', dataIndex: 'matter' },
    { title: '具体表现', dataIndex: 'detail' },
    { title: '问题指派1', dataIndex: 'department' },
    { title: '问题指派2', dataIndex: 'department2' },
    {
      title: '操作',
      valueType: 'option',
      render: () => [
        <a key="editable">
          编辑
        </a>,
        <a key="delete">
          删除
        </a>,
      ],
    },
  ];
  const matterList = [
    {
      code: 'WT001-01',
      matter: '“四个意识”不强、落实“两个维护”不到位',
      detail: '在重大原则问题上不同党中央保持一致且有实际言论、行为且造成不良后果的。',
      department: '纪委',
    },
    {
      code: 'WT001-02',
      matter: 'xxxxxxx',
      detail: 'xxxxxxxxxxxxx',
      department: 'xx领导',
      department2: 'xx部门',
    },
    {
      code: 'WT001-03',
      matter: 'xxxxxxx',
      detail: 'xxxxxxxxxxxxx',
      department: 'xx领导',
      department2: 'xx站办',
    },
  ];

  // 相关附件
  const attachmentColumns: ColumnsType = [
    { title: '名称（类别）', dataIndex: 'name' },
    { title: '文件名', dataIndex: 'code' },
    { title: '更新时间', dataIndex: 'updatedTime' },
    {
      title: '操作',
      dataIndex: 'operate',
      render: (_, record: any) => record.type === 'file'
          ? <Button icon={<DownloadOutlined />}>下载</Button>
          : <Button type={'link'}>{record.name}</Button>,
    },
  ];
  const attachmentData = [
    { name: '党风廉政建设抄告单', code: 'CG0001-02.doc', updatedTime: '2021-12-13', type: 'file' },
    { name: '各项巡查、检查文件', code: 'XC0001-05.docx', updatedTime: '2021-12-15', type: 'file' },
  ];

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)} /> 问题清单</>}
      content={<Space size={'large'}>
        <Statistic title={'编号'} value={'WT001'} />
        <Statistic title={'问题类型'} value={'日常监督检查'} />
      </Space>}
      extra={
        <Button>
          <ImportOutlined />
          导入会议议题
        </Button>
      }
  >

    <Divider orientation={'left'}>基本信息</Divider>
    <Descriptions
        bordered
        column={2}
        className={'content'}
        labelStyle={{ width: '12%' }}
        contentStyle={{ width: '38%' }}
    >
      <Descriptions.Item label="责任主体">党委</Descriptions.Item>
      <Descriptions.Item label="清单编写人">admin</Descriptions.Item>
      <Descriptions.Item label="问题数量">3</Descriptions.Item>
      <Descriptions.Item label="问题指派状态">未指派</Descriptions.Item>
    </Descriptions>

    <Divider orientation={'left'}>问题列表</Divider>
    <EditableProTable
        rowKey="id"
        maxLength={5}
        scroll={{ x: 'max-content' }}

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
          { record: () => ({ id: `${moment().format('X')}` }) }
        }
    />

    <Divider orientation={'left'}>相关附件</Divider>
    <Table
        rowKey={'id'}
        columns={attachmentColumns}
        dataSource={attachmentData}
        pagination={false}
        scroll={{ x: 'max-content' }}
    />
  </PageContainer>;
}