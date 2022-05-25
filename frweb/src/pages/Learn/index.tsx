import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, DatePicker, Divider, Input, Select } from 'antd';
import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';
import DemoFileDownload from '../../components/DemoFileDownload';

export default function Learn() {

  const [tmpData, setTmpData] = React.useState<any>({});

  function mergeTmpData(key, value) {
    setTmpData(orig => {
      return { ...orig, [key]: value };
    });
  }

  const columns: ColumnDef[] = [
    { title: '责任主体', dataIndex: 'dept', render: () => '党委' },
    { title: '责任人', dataIndex: 'user', render: () => '王哲' },
    {
      title: '学习时间',
      dataIndex: 'date',
      renderFormItem: () => <DatePicker onChange={v => mergeTmpData('date', v)}/>,
    },
    {
      title: '学习地点',
      dataIndex: 'placement',
      renderFormItem: () => <Input onChange={v => mergeTmpData('placement', v.target.value)}/>,
    },
    {
      title: '学习主题',
      dataIndex: 'topic',
      renderFormItem: () => <Input onChange={v => mergeTmpData('topic', v.target.value)}/>,
    },
    {
      title: '组织形式',
      dataIndex: 'type',
      renderFormItem: () => <Select>
        <Select.Option value={'领学'}>领学</Select.Option>
        <Select.Option value={'交流'}>交流</Select.Option>
        <Select.Option value={'党课'}>党课</Select.Option>
        <Select.Option value={'其他'}>其他</Select.Option>
      </Select>
    },
    {
      title: '参加对象',
      dataIndex: 'attendee',
      renderFormItem: () => <Input onChange={v => mergeTmpData('attendee', v.target.value)}/>,
    },
    {
      title: '学习内容',
      dataIndex: 'content',
      renderFormItem: () => <Input onChange={v => mergeTmpData('content', v.target.value)}/>
    },
  ];

  return <PageContainer
  >
    <EditableDescriptions
        isEdit
        columns={columns}
    />
    <Divider orientation={'left'}>附件记录</Divider>
    <DemoFileDownload/>

    <FooterToolbar>
      {/* todo 填写完毕并上传 */}
      <Button type={'primary'} onClick={() => console.log(tmpData)}>确定</Button>
    </FooterToolbar>
  </PageContainer>;
}