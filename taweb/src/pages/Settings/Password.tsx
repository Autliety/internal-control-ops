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
  const { http } = useHttp(`/organization/users/${user.id}`, { method: 'POST', isManual: true });

  const onFinish = values => {
    if (values.password !== values.p_password) {
      message.error({
        content: '密码输入不一致',
        style: { marginTop: '25vh' },
        duration: 2,
      });
      form.resetFields();
    } else {
      delete values.p_password;
      delete values.username;
      http(null, null, values)
          .then(() => navigate('/logout', { state: { params: true } }));
    }
  };
  return <>
    <Form
        form={form}
        wrapperCol={{ span: 10 }}
        layout='vertical'
        name="reset_password"
        onFinish={onFinish}
        style={{ backgroundColor: '#fff', padding: 20 }}
        initialValues={{ username: user.name }}
    >
      {[
        {
          label: '当前用户',
          key: 'username',
          required: false,
          render: <Input size="large" prefix={<UserOutlined/>} disabled/>,
        },
        {
          label: '旧密码',
          key: 'old_password',
          required: true,
        },
        {
          label: '新密码',
          key: 'password',
          required: true,
        },
        {
          label: '重复新密码',
          key: 'p_password',
          required: true,
        },
      ]
          .map((config, index) =>
              <Form.Item
                  key={index}
                  label={config.label}
                  name={config.key}
                  rules={[{ required: config.required, message: config.label }]}
              >
                {
                    config.render ||
                    <Input.Password size="large" prefix={<LockOutlined/>} placeholder={config.label}/>
                }
              </Form.Item>)}

      <Form.Item>
        <Space size="large">
          <Button type="default" onClick={() => form.resetFields()}>
            重置
          </Button>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Space>
      </Form.Item>
    </Form>

  </>;

}

