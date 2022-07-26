import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { BuildOutlined, UserAddOutlined } from '@ant-design/icons';
import { ProColumns } from '@ant-design/pro-table';
import { BetaSchemaForm } from '@ant-design/pro-form';
import SelectUser from '../../components/SelectUser';

type Props = {
  isUserAdd: boolean,
  onFinish: any,
}

export const userColumns: ProColumns[] = [
  { title: '姓名', dataIndex: 'name', formItemProps: { rules: [{ required: true, message: '此项必填' }] } },
  {
    title: '性别',
    dataIndex: 'gender',
    valueType: 'radio',
    fieldProps: { options: ['男', '女'] },
  },
  { title: '电话', dataIndex: 'phone' },
  {
    title: '所属部门',
    dataIndex: 'department',
    renderFormItem: () => <SelectUser withUser={false}/>,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '岗位介绍',
    dataIndex: 'station',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
    renderFormItem: () => <Input.TextArea rows={3}/>,
  },
  {
    title: '职责',
    dataIndex: 'privilege',
    valueType: 'select',
    fieldProps: {
      options: [
        { label: '主体责任', value: 'DEPT' },
        { label: '监督责任', value: 'DEPT_J' },
        { label: '职能监督责任', value: 'DEPT_Z' },
        { label: '第一责任人责任', value: 'FIRST' },
        { label: '一岗双责', value: 'DOUBLE' },
        { label: '普通用户', value: 'NORMAL' },
      ]
    }
  }
];

export default function InformAddModal(props: Props) {

  const [form] = Form.useForm();

  const [isVisible, setIsVisible] = React.useState(false);

  return <>
    {
      props.isUserAdd
          ? <BetaSchemaForm
              title='人员添加'
              layoutType={'ModalForm'}
              trigger={<Button type={'primary'} icon={<UserAddOutlined/>}>人员添加</Button>}
              columns={userColumns}
              onFinish={async data => props.onFinish(data)}
          />
          : <>
            <Button type='primary' icon={<BuildOutlined/>} onClick={() => setIsVisible(true)}>部门添加</Button>
            <Modal
                visible={isVisible}
                title='部门添加'
                width={800}
                onCancel={() => setIsVisible(false)}
                onOk={() => {
                  form
                      .validateFields()
                      .then(values => {
                        form.resetFields();
                        props.onFinish(values);
                      })
                      .catch(info => {
                        console.log('Validate Failed:', info);
                      });
                }}
            >
              <Form
                  form={form}
                  layout='vertical'
                  name='form_in_modal'
              >
                <Form.Item
                    name='name'
                    label='部门名称'
                    rules={[{ required: true, message: '必填' }]}
                >
                  <Input placeholder='部门名称'/>
                </Form.Item>

                <Form.Item name='shortName' label='部门简称'>
                  <Input placeholder='部门简称'/>
                </Form.Item>

              </Form>
            </Modal>
          </>
    }

  </>;
}