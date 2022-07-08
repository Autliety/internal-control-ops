import React from 'react';
import { LoginForm, ProFormSelect, ProFormText } from '@ant-design/pro-form';
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
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
  >
    <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'transparent' }}>
      <Typography.Title style={{ marginTop: 20, color: '#fff' }}><Image src={logo} width={70}
                                                                        preview={false}
      /> 浙江百步经济开发区(百步镇)</Typography.Title>
    </Layout.Header>
    <Row>
      <Col span={16}/>
      <Col span={4} className={'bgStyle'} style={{ minWidth: 360, marginTop: 100 }}>
        <LoginForm
            onFinish={async (values: any) => {
              await http(null, null, qs.stringify(values));
              message.success('登录成功');
              navigate(`/${values.system}`);
            }}
        >
          <Typography.Title style={{ textAlign: 'center' }} level={3}>{'欢迎登录'}</Typography.Title>
          <br/>

          <ProFormSelect
              name={'system'}
              valueEnum={{
                ta: '区(镇)督查考核系统',
                fr: '区(镇)村(社)一体全面从严治党责任落实应用系统'
              }}
              fieldProps={{
                size: 'large',
              }}
              placeholder={'登录系统'}
              rules={[{ required: true, message: '请选择登录系统' }]}
          />

          <Divider/>

          <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'}/>,
              }}
              placeholder={'用户名'}
              rules={[{ required: true, message: '请输入用户名' }]}
              validateTrigger={'onBlur'}
          />

          <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'}/>,
              }}
              placeholder={'密码'}
              rules={[{ required: true, message: '请输入密码' }]}
          />

          <ProFormText
              disabled
              name="validation"
              fieldProps={{
                size: 'large',
                prefix: <SafetyOutlined className={'prefixIcon'}/>,
              }}
              placeholder={'验证码'}
          />

          <div>
            <a style={{ float: 'right' }} onClick={() => {
            }}
            >
              忘记密码
            </a>
          </div>
        </LoginForm>
      </Col>
      <Col span={4}/>
    </Row>
  </div>;
}
