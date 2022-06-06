import React from 'react';
import { LoginForm, ProFormText } from '@ant-design/pro-form';
import { LockOutlined, SafetyOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Divider, Image, Layout, message, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import qs from 'query-string';
import logo from '../../image/logo.png';
import title from '../../image/title.jpg';

import { useHttp } from '../../utils/request';

export default function Login() {

  const navigate = useNavigate();
  const { http } = useHttp('/login', { method: 'POST', isManual: true });

  return <div
      style={{
        height: '100%',
        width: '100%',
        overflow: 'scroll',
        backgroundImage: `url(${title})`,
        backgroundSize: '100%',
      }}
  >
    <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'transparent'}}>
      <Typography.Title style={{marginTop: 10}}><Image src={logo} width={70} preview={false}/>  浙江百步经济开发区(百步镇)</Typography.Title>
    </Layout.Header>
    <Row>
      <Col span={16}/>
      <Col span={4} className={'bgStyle'} style={{ minWidth: 400, marginTop: 100 }}>
        <LoginForm
            onFinish={async (values: any) => {
              await http(null, null, qs.stringify(values));
              message.success('登录成功');
              navigate('/');
            }}
        >
          <Typography.Title style={{textAlign: 'center'}} level={3}>{'区(镇)村(社)一体全面从严治党\n责任落实应用系统'}</Typography.Title>
          <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'}/>,
                bordered: false,
                autoComplete: 'on',
              }}
              placeholder={'用户名'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
              validateTrigger={'onBlur'}
          />
          <Divider/>

          <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'}/>,
                bordered: false,
              }}
              placeholder={'密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
          />
          <Divider/>

          <ProFormText
              name="validation"
              fieldProps={{
                size: 'large',
                prefix: <SafetyOutlined className={'prefixIcon'}/>,
                bordered: false,
              }}
              placeholder={'验证码'}
          />
          <Divider/>
          <div>
            <a style={{ float: 'right' }} onClick={() => {
            }}
            >
              忘记密码
            </a>
          </div>
          <br/><br/>
        </LoginForm>
      </Col>
      <Col span={4}/>
    </Row>
  </div>;
}
