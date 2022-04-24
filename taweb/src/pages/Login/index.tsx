import React from 'react';
import { LoginForm, ProFormText } from '@ant-design/pro-form';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Divider, Row } from 'antd';

import logo from '../../image/logo.png';

export default function Login() {

  return <div>
    <Row style={{ paddingTop: 130 }} align={'middle'}>

      <Col span={6}/>
      <Col span={6}>

      </Col>
      <Col span={6} className={'content'}>
        <LoginForm
            logo={logo}
            title='百步区政府'
            subTitle='督考 / 四责协同管理平台'
        >

          <ProFormText
              name='username'
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'}/>,
              }}
              placeholder={'用户名'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
          />
          <ProFormText.Password
              name='password'
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'}/>,
              }}
              placeholder={'密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
          />

          <ProFormText
              name='username'
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'}/>,
              }}
              placeholder={'验证码'}
              rules={[
                {
                  required: true,
                  message: '请输入验证码!',
                },
              ]}
          />

          <div>
            <a style={{ float: 'right', }}>
              忘记密码
            </a>
          </div>
          <Divider/>
        </LoginForm>
      </Col>
      <Col span={6}/>
    </Row>

  </div>;
}
