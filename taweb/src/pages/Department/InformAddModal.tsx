import React from 'react';
import { Button } from 'antd';
import { BuildOutlined, UserAddOutlined } from '@ant-design/icons';
import { ProColumns } from '@ant-design/pro-table';
import { BetaSchemaForm } from '@ant-design/pro-form';
import SelectStation from '../../components/SelectStation';

type Props = {
  isUserAdd: boolean,
  onFinish: any,
}

export default function InformAddModal(props: Props) {

  const userColumns: ProColumns[] = [
    { title: '姓名', dataIndex: 'name', formItemProps: { rules: [{ required: true, message: '此项必填' }] } },
    {
      title: '性别',
      dataIndex: 'gender',
      valueType: 'radio',
      fieldProps: { options: ['男', '女'] },
      formItemProps: { rules: [{ required: true, message: '此项必填' }] },
    },
    { title: '电话', dataIndex: 'phone', formItemProps: { rules: [{ required: true, message: '此项必填' }] } },
    {
      title: '所属部门及岗位',
      dataIndex: 'station',
      renderFormItem: () => <SelectStation/>,
      formItemProps: { rules: [{ required: true, message: '此项必填' }] },
    }
  ];

  const stationColumns: ProColumns[] = [
    { title: '部门名称', dataIndex: 'organizationName' },
    {
      title: '岗位名称及介绍',
      dataIndex: 'stationName',
    },
  ];

  return <>
    <BetaSchemaForm
        title={props.isUserAdd ? '人员添加' : '部门岗位添加'}
        layoutType={'ModalForm'}
        trigger={
          <Button type={'primary'}>
            {props.isUserAdd ? <UserAddOutlined/> : <BuildOutlined/>}
            {props.isUserAdd ? '人员添加' : '部门岗位添加'}
          </Button>
        }
        columns={props.isUserAdd ? userColumns : stationColumns}
        onFinish={async data => props.onFinish(data)}
    />
  </>;
}