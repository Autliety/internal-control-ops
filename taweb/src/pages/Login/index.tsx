import React from 'react';
import { LoginForm, ProFormText } from '@ant-design/pro-form';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Divider, Row } from 'antd';

import logo from '../../image/logo.png';

export default function Login() {

  return <div className={'bgStyle'}>
    <Row style={{ paddingTop: 150 }} align={'middle'}>

      <Col span={14}/>
      <Col
          span={6}
          className={'loginStyle'}
          style={{}}
      >
        <LoginForm
            logo={logo}
            title={'百步经济开发区(百步镇)'}
            subTitle={'督考平台'}
        >

          <ProFormText
              name='username'
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'}/>,
                bordered: false,
              }}
              placeholder={' 用户名'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
          />
          <Divider/>

          <ProFormText.Password
              name='password'
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'}/>,
                bordered: false,
              }}
              placeholder={' 密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
          />
          <Divider/>

          <ProFormText
              name='username'
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'}/>,
                bordered: false,
              }}
              placeholder={' 验证码'}
              rules={[
                {
                  required: true,
                  message: '请输入验证码!',
                },
              ]}
          />
          <Divider/>

          <div>
            <a style={{ float: 'right', }}>
              忘记密码
            </a>
          </div>
        </LoginForm>
      </Col>
      <Col span={4}/>
    </Row>

  </div>;
}
