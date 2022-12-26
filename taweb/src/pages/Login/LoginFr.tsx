import React from 'react';
import { Col, Divider, Image, message, Modal, notification, Row, Typography } from 'antd';
import qs from 'query-string';
import { LoginForm, ProFormText } from '@ant-design/pro-form';
import { LockOutlined, SafetyOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import bg from '../../image/login.jpg';
import logo from '../../image/logo.png';

function LoginFr() {

  const navigate = useNavigate();
  const { http } = useHttp('/login', { method: 'POST', isManual: true });

  return <div
      style={{
        height: '100%',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
  >
    <Row>
      <Col span={4} />
      <Col span={16}>
        <Typography.Title level={2} style={{
          marginTop: 120,
          marginBottom: 30,
          textAlign: 'center',
          color: '#fff',
          letterSpacing: 5
        }}>
          <Image src={logo} width={50} preview={false} />
          <Divider type={'vertical'} />
          浙江百步经济开发区(百步镇)区（镇）村（社）<br />一体“四责协同”监督应用系统
        </Typography.Title>

        <div style={{
          minWidth: 360,
          backgroundColor: '#fff',
          width: 600,
          margin: 'auto',
          padding: 30,
          borderRadius: 10
        }}>
          <LoginForm
              onFinish={async (values: any) => {

                values.system = 'fr';
                if (values.username.includes('（')) {
                  message.warning('用户名无需携带责任名称');
                  return true;
                }
                await http(null, null, qs.stringify(values));
                if (values.password === '1') {
                  notification.warning({ message: '登录成功', description: '请尽快修改初始密码！' });
                }
                navigate(`/data`)
              }}
          >

            <Typography.Title level={4} style={{ textAlign: 'center', marginBottom: 30 }}>你好，欢迎登陆！</Typography.Title>

            <ProFormText
                name='username'
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'用户名'}
                rules={[{ required: true, message: '请输入用户名' }]}
                validateTrigger={'onBlur'}
            />

            <ProFormText.Password
                name='password'

                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'密码'}
                rules={[{ required: true, message: '请输入密码' }]}
            />

            <ProFormText
                disabled
                name='validation'
                fieldProps={{
                  size: 'large',
                  prefix: <SafetyOutlined className={'prefixIcon'} />,
                }}
                placeholder={'验证码'}
            />

            <div>
              <a
                  style={{ float: 'right' }}
                  onClick={() => Modal.warning({
                    title: '忘记密码',
                    content: <p style={{ marginTop: 20 }}>请联系系统管理员【邬先生】：0573-86116553</p>,
                    okText: '确定',
                  })}
              >
                忘记密码
              </a>
            </div>
            <br /><br />
          </LoginForm>
        </div>

      </Col>
      <Col span={4} />
    </Row>

  </div>;
}

export default LoginFr;