import React from 'react';
import { LoginForm, ProFormText } from '@ant-design/pro-form';
import { LockOutlined, SafetyOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Divider, message, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import qs from 'query-string';
import logo from '../../image/logo.png';
import { useHttp } from '../../utils/request';

export default function Login() {

  const navigate = useNavigate();

  const { http } = useHttp('/login', { method: 'POST', isManual: true });

  return <div className={'bgStyle'}>
    <Row style={{ paddingTop: 150 }} align={'middle'}>

      <Col span={14} />
      <Col
          span={6}
          className={'loginStyle'}
      >
        <LoginForm
            logo={logo}
            title="百步开发区(百步镇)"
            subTitle="四责协同管理平台"
            onFinish={async (values: any) => {
              await http(null, null, qs.stringify(values));
              message.success('登录成功');
              navigate('/');
            }}
        >

          <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
                bordered: false,
              }}
              placeholder={'用户名'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
          />
          <Divider />

          <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
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
          <Divider />

          <ProFormText
              name="validation"
              fieldProps={{
                size: 'large',
                prefix: <SafetyOutlined className={'prefixIcon'} />,
                bordered: false,
              }}
              placeholder={'验证码'}
          />
          <Divider />
          <div>
            <a style={{ float: 'right' }} onClick={() => {}}>
              忘记密码
            </a>
          </div>
          <br /><br />
        </LoginForm>
      </Col>
      <Col span={4} />
    </Row>

  </div>;
}
