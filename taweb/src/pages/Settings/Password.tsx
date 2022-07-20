import React from 'react';
import { Button, Form, Input, message, Space } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/auth';
import { useHttp } from '../../utils/request';

export default function Password() {

  const { user } = useAuth();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { http } = useHttp(`/user/${user.id}`, { method: 'POST', isManual: true });

  const onFinish = values => {
    if (values.password !== values.p_password) {
      message.error({
        content: '密码输入不一致',
        style: { marginTop: '25vh' },
        duration: 2,
      });
      form.resetFields();
    } else {
      http(null, null, { password: values?.password })
          .then(() => navigate('/logout', { state: { params: true } }));
    }
  };
  return <>
    <Form
        form={form}
        wrapperCol={{ span: 10 }}
        layout='vertical'
        name='reset_password'
        onFinish={onFinish}
        style={{ backgroundColor: '#fff', padding: 20 }}
        initialValues={{ username: user.name }}
    >

      <Form.Item label='当前用户' name='username'>
        <Input disabled prefix={<UserOutlined/>}/>
      </Form.Item>

      <Form.Item label='旧密码' name='old_password' rules={[{ required: true, message: '必填' }]}>
        <Input.Password prefix={<LockOutlined/>} placeholder='旧密码'/>
      </Form.Item>

      <Form.Item
          label='新密码'
          name='password'
          rules={
            [
              { required: true, message: '密码不可为空' },
              { min: 6, message: '长度不得小于6位' },
              { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]*$/, message: '密码需包含数字和字母' }
            ]
          }
      >
        <Input.Password prefix={<LockOutlined/>} placeholder='密码需包含字母和数字且长度不小于6'/>
      </Form.Item>


      <Form.Item
          label='重复新密码'
          name='p_password'
          rules={
            [
              { required: true, message: '密码不可为空' },
              { min: 6, message: '长度不得小于6位' },
              { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]*$/, message: '密码需包含数字和字母' },
            ]
          }
      >
        <Input.Password prefix={<LockOutlined/>} placeholder='密码需包含字母和数字且长度不小于6'/>
      </Form.Item>

      <Form.Item>
        <Space size='large'>
          <Button type='default' onClick={() => form.resetFields()}>
            重置
          </Button>
          <Button type='primary' htmlType='submit'>
            提交
          </Button>
        </Space>
      </Form.Item>
    </Form>

  </>;

}

