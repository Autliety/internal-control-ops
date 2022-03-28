import React from 'react';
import { Button, Form, Input, message, Modal } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined } from '@ant-design/icons';
import qs from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../image/logo.png';

import { useHttp } from '../../utils/request';

export default function Login() {

  const { http } = useHttp('/login', { method: 'POST', isManual: true });

  const navigate = useNavigate();
  const location = useLocation();
  // @ts-ignore
  let { from } = location.state || { from: { pathname: '/' } };

  return <Modal
      footer={null}
      mask={false}
      closable={false}
      visible
      style={{ marginTop: 50 }}
  >
    <Form
        {...formItemLayout}
        onFinish={(value) => {
          // 获取登录用户，传值到RN
          if (window.hasOwnProperty('ReactNativeWebView')) {
            //@ts-ignore
            window.ReactNativeWebView.postMessage(value['username']);
          }
          http(null, null, qs.stringify(value))
              .then(() => {
                if (value.password === '1') {
                  message.warning('当前您的密码为初始密码，请尽快修改！').then(() => navigate('/admin/settings'));
                } else {
                  navigate(from, { replace: true });
                }
              });
        }}
    >
      <h1 style={{ textAlign: 'center', paddingTop: 20 }}>
        <img
            style={{
              height: '40px',
              marginRight: 16,
            }}
            alt="logo"
            src={logo}
        />
        海盐县教育局
        <p style={{ fontSize: 16, textIndent: 30 }}>海创资产管理系统</p>
      </h1>

      <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名！' }]}
      >
        <Input
            prefix={<UserOutlined/>}
            size={'large'}
            placeholder="请输入用户名"
            autoComplete={'off'}
        />
      </Form.Item>

      <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码！' }]}
      >
        <Input.Password
            prefix={<LockOutlined/>}
            size={'large'}
            placeholder="请输入密码"
            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
        />
      </Form.Item>

      <Form.Item {...buttonLayout}>
        <Button
            block
            type="primary"
            htmlType="submit"
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  </Modal>;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const buttonLayout = {
  wrapperCol: {
    xs: { offset: 0, span: 24 },
    sm: { offset: 6, span: 14 },
  },
};
