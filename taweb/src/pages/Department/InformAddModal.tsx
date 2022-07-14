import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { BuildOutlined, MinusCircleOutlined, PlusOutlined, UserAddOutlined } from '@ant-design/icons';
import { ProColumns } from '@ant-design/pro-table';
import { BetaSchemaForm } from '@ant-design/pro-form';
import SelectStation from '../../components/SelectStation';

type Props = {
  isUserAdd: boolean,
  onFinish: any,
}

export default function InformAddModal(props: Props) {

  const [form] = Form.useForm();

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
            <Button type='primary' icon={<BuildOutlined/>} onClick={() => setIsVisible(true)}>部门岗位添加</Button>
            <Modal
                visible={isVisible}
                title='部门岗位添加'
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
                    name='organizationName'
                    label='部门名称'
                    rules={[{ required: true, message: '必填' }]}
                >
                  <Input placeholder='部门名称'/>
                </Form.Item>

                <Form.List name='stationName'>
                  {(fields, { add, remove }, { errors }) => (
                      <>
                        {fields.map((field, index) => (
                            <Form.Item
                                label={index === 0 ? '岗位名称及介绍' : ''}
                                required={false}
                                key={field.key}
                            >
                              <Form.Item
                                  {...field}
                                  validateTrigger={['onChange', 'onBlur']}
                                  noStyle
                              >
                                <Input.TextArea placeholder='岗位名称及介绍'/>
                              </Form.Item>
                              {
                                fields.length > 0
                                    ? <MinusCircleOutlined onClick={() => remove(field.name)}/>
                                    : null
                              }
                            </Form.Item>
                        ))}
                        <Form.Item>
                          <Button
                              type='dashed'
                              onClick={() => add()}
                              icon={<PlusOutlined/>}
                          >
                            添加一项
                          </Button>
                          <Form.ErrorList errors={errors}/>
                        </Form.Item>
                      </>
                  )}
                </Form.List>

              </Form>
            </Modal>
          </>
    }

  </>;
}