import React from 'react';
import { LoginForm, ProFormText } from '@ant-design/pro-form';
import { LockOutlined, SafetyOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Divider, Image, Layout, message, Modal, Row, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import qs from 'query-string';
import logo from '../../image/logo.png';
import bg from '../../image/login3.png';
import headerBg from '../../image/header.png';
import { useHttp } from '../../utils/request';

export default function LoginFr() {

  const navigate = useNavigate();
  const { http } = useHttp('/login', { method: 'POST', isManual: true });

  return <Layout style={{ height: '100%' }}>
    <Layout.Header style={{
      position: 'fixed',
      height: '10%',
      backgroundImage: `url(${headerBg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%'
    }}>
      <Space direction={'vertical'}>
        <Typography.Title style={{ marginTop: 10, fontFamily: 'serif', fontWeight: 'bolder', color: '#f3e8b4' }}>
          <Image src={logo} width={70} preview={false} />
          <Divider type={'vertical'} />
          浙江百步经济开发区(百步镇)
          <p
              style={{
                marginLeft: 90,
                marginTop: -10,
                fontSize: 18,
                color: '#f3e8b4'
              }}
          >
            全面从严治党责任落实应用系统
          </p>
        </Typography.Title>
      </Space>
    </Layout.Header>
    <Layout.Content style={{
      height: '80%',
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <Row>
        <Col span={16} />
        <Col span={4} className={'bgStyle'} style={{ minWidth: 360, marginTop: 200 }}>
          <LoginForm
              onFinish={async (values: any) => {

                values.system = 'fr';
                if (values.username.includes('（')) {
                  message.warning('用户名无需携带责任名称');
                  return true;
                }
                await http(null, null, qs.stringify(values));
                if (values.password === '1') {
                  message.success('登录成功，请尽快修改初始密码');
                  navigate(`/${values.system}/center`)
                } else {
                  message.success('登录成功');
                  navigate(`/${values.system}`);
                }
              }}
          >

            <Typography.Title level={4} style={{ textAlign: 'center' }}>全面从严治党责任落实应用系统</Typography.Title>
            <Divider />

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
        </Col>
        <Col span={4} />
      </Row>
    </Layout.Content>

    <Layout.Footer style={{ height: '10%', textAlign: 'center' }}>
      <p>
        Copyright@2021 嘉兴海创信息技术有限公司 ALL rights reserved
      </p>
      <p style={{ fontSize: 12 }}>建议您使用IE9及以上版本、Edge、Chrome、Firefox和360等主流浏览器浏览本网站</p>
    </Layout.Footer>
  </Layout>;
}
