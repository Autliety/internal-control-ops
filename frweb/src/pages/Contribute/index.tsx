import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';
import { Button, Divider, Input, Modal } from 'antd';
import SelectUser from '../../components/SelectUser';
import BaseEditableTable from '../../components/BaseEditableTable';
import { measureColumns } from '../Measure/MeasureInfo';


export function BaseContribute({ onChange, data }) {

  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  function mergeTmpData(key, value) {
    onChange(orig => {
      return { ...orig, [key]: value };
    });
  }

  const columns: ColumnDef[] = [
    { title: '措施', dataIndex: 'measure' },
    { title: '责任人', dataIndex: 'user' },
    { title: '计划开始日期', dataIndex: 'startDate' },
    { title: '计划结束日期', dataIndex: 'endDate' },
  ];

  const detailColumns: ColumnDef[] = [
    {
      title: '实施情况概述',
      dataIndex: 'content',
      span: 3,
      renderFormItem: () => <Input placeholder={'概述'} onChange={v => mergeTmpData('content', v.target.value)}/>
    },
    {
      title: '完成率',
      dataIndex: 'completion',
      renderFormItem: () => <Input
          placeholder={'完成率'}
          onChange={v => mergeTmpData('completion', v.target.value)}
          suffix={'%'}
      />
    },
    {
      title: '未完成原因',
      dataIndex: 'reason',
      renderFormItem: () => <Input placeholder={'原因'} onChange={v => mergeTmpData('reason', v.target.value)}/>
    },
    {
      title: '协调配合人员',
      dataIndex: 'coordinator',
      renderFormItem: () => <SelectUser withUser onChange={(_, option) => mergeTmpData('coordinator', option.value)}/>
    },
    {
      title: '协调人员工作',
      dataIndex: 'description',
      renderFormItem: () => <Input placeholder={'人员介绍'} onChange={v => mergeTmpData('description', v.target.value)}/>
    }
  ];

  return <>
    <EditableDescriptions isEdit={false} columns={columns} data={{}}/>

    <Divider orientation={'left'}>实施情况</Divider>
    <EditableDescriptions isEdit columns={detailColumns} column={3}/>

    <Divider orientation={'left'}>后续措施</Divider>
    <BaseEditableTable columns={measureColumns} value={[]}/>

    <Modal
        title={'审核人员选择'}
        visible={isVisible}
        closable
        onCancel={() => setIsVisible(false)}
        onOk={() => console.log(data)}
    >
      <p>审核人</p>
      <SelectUser withUser/>
      <Divider/>
      <p>抄送人</p>
      <SelectUser withUser/>
    </Modal>

    <FooterToolbar>
      <Button>更新履责进度</Button>
      <Button type={'primary'} onClick={() => setIsVisible(true)}>提交审批</Button>
    </FooterToolbar>
  </>
}

export default function Contribute() {

  const navigate = useNavigate();
  const [tmpData, setTmpData] = React.useState({});

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> 履责情况详情</>}
  >

    <BaseContribute onChange={setTmpData} data={tmpData}/>

  </PageContainer>;
}