import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';
import { DatePicker, Input, Select } from "antd";

export default function Temporary() {

  const [tmpData, setTmpData] = React.useState<any>({});

  function mergeTmpData(key, value) {
    setTmpData(orig => {
      return { ...orig, [key]: value };
    });
  }

  const columns: ColumnDef[] = [
    {
      title: '检查人', dataIndex: 'checker',
      renderFormItem: () => <Input defaultValue={'王哲'} disabled/>,
    },
    {
      title: '检查领域', dataIndex: 'field',
      renderFormItem: () => <Input onChange={v => mergeTmpData('field', v.target.value)}/>,
    },
    {
      title: '涉及部门', dataIndex: 'dept',
      renderFormItem: () => <Select onChange={v => mergeTmpData('dept', v)}>
        <Select.Option value={'部门A'}>部门A</Select.Option>
        <Select.Option value={'部门B'}>部门B</Select.Option>
        <Select.Option value={'部门C'}>部门C</Select.Option>
      </Select>,
    },
    { title: '检查时间', dataIndex: 'date', renderFormItem: () => <DatePicker onChange={v => mergeTmpData('date', v)}/> },
    {
      title: '检查项目名称', dataIndex: 'name',
      renderFormItem: () => <Input onChange={v => mergeTmpData('name', v.target.value)}/>,
    },
    {
      title: '检查开展情况', dataIndex: 'detail',
      renderFormItem: () => <Input onChange={v => mergeTmpData('detail', v.target.value)}/>,
    },
  ];

  return <PageContainer>
    <EditableDescriptions isEdit columns={columns}/>
  </PageContainer>;
}