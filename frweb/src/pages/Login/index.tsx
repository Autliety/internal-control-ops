import React from 'react';
import { LoginFormPage, ProFormText } from '@ant-design/pro-form';
import { LockOutlined, SafetyOutlined, UserOutlined } from '@ant-design/icons';
import { Divider, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import qs from 'query-string';
import logo from '../../image/logo.png';
import { useHttp } from '../../utils/request';

export default function Login() {

  const navigate = useNavigate();
  const { http } = useHttp('/login', { method: 'POST', isManual: true });

  return <div style={{ paddingTop: 150, paddingLeft: '10%', paddingRight: '10%' }}>
    <LoginFormPage
        backgroundImageUrl='https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png'
        logo={logo}
        title='百步开发区(百步镇)'
        subTitle='四责协同管理平台'
        onFinish={async (values: any) => {
          await http(null, null, qs.stringify(values));
          message.success('登录成功');
          navigate('/');
        }}
    >

      <ProFormText
          name='username'
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
      />
      <Divider/>

      <ProFormText.Password
          name='password'
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
          name='validation'
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
        }}>
          忘记密码
        </a>
      </div>
      <br/><br/>
    </LoginFormPage>

  </div>;
}
