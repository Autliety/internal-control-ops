import React from 'react';
import {LoginForm, ProFormText} from '@ant-design/pro-form';
import {LockOutlined, SafetyOutlined, UserOutlined} from '@ant-design/icons';
import {Col, Divider, Image, Layout, message, Modal, notification, Row, Space, Typography} from 'antd';
import {useNavigate} from 'react-router-dom';
import qs from 'query-string';
import logo from '../../image/logo.png';
import bg from '../../image/login.png';
import headerBg from '../../image/header.png';

import {host, useHttp} from '../../utils/request';

export default function Login() {

  const navigate = useNavigate();
  const {http} = useHttp('/login', {method: 'POST', isManual: true});

  // captcha
  const {state: code, http: codeHttp} = useHttp('/getCode', {initState: {}});

  React.useEffect(() => {
    document.getElementById('img').setAttribute('src', host + '/getCode');
  }, [code])

  return <Layout style={{height: '100%'}}>
    <Layout.Header style={{
      position: 'fixed',
      height: '10%',
      backgroundImage: `url(${headerBg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      minHeight: 100
    }}>
      <Space direction={'vertical'}>
        <Typography.Title level={2} style={{marginTop: 15, fontFamily: 'serif', color: '#f3e8b4'}}>
          <Image src={logo} width={70} preview={false}/>
          <Divider type={'vertical'}/>
          浙江百步经济开发区(百步镇)区（镇）村（社）一体“四责协同”监督应用系统
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
        <Col span={16}/>
        <Col span={4} className={'bgStyle'} style={{minWidth: 360, marginTop: 200}}>
          <LoginForm
              onFinish={async (values: any) => {

                values.code = values.code.toString().trim().toLowerCase();

                values.system = 'fr';
                if (values.username.includes('（')) {
                  message.warning('用户名无需携带责任名称');
                  return true;
                }
                await http(null, null, qs.stringify(values));
                if (values.password === '1') {
                  notification.warning({message: '登录成功', description: '请尽快修改初始密码！'});
                }
                navigate(`/data`)
              }}
          >

            <Typography.Title level={4} style={{textAlign: 'center'}}>区（镇）村（社）一体“四责协同”监督应用系统</Typography.Title>
            <Divider/>

            <ProFormText
                name='username'
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'}/>,
                }}
                placeholder={'用户名'}
                rules={[{required: true, message: '请输入用户名'}]}
                validateTrigger={'onBlur'}
            />

            <ProFormText.Password
                name='password'

                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'}/>,
                }}
                placeholder={'密码'}
                rules={[{required: true, message: '请输入密码'}]}
            />

            <Space size={'small'} align={'start'}>
              <ProFormText
                  name='code'
                  fieldProps={{
                    size: 'large',
                    prefix: <SafetyOutlined className={'prefixIcon'}/>,
                  }}
                  rules={[{required: true, message: '验证码必填'}]}
                  placeholder={'验证码'}
              />
              <div style={{height: 40, width: 120, cursor: 'pointer'}} onClick={() => codeHttp()}>
                <img id={'img'} alt={'图片'}/>
              </div>
            </Space>

            <div>
              <a
                  style={{float: 'right'}}
                  onClick={() => Modal.warning({
                    title: '忘记密码',
                    content: <p style={{marginTop: 20}}>请联系系统管理员【邬先生】：0573-86116553</p>,
                    okText: '确定',
                  })}
              >
                忘记密码
              </a>
            </div>
            <br/><br/>
          </LoginForm>
        </Col>
        <Col span={4}/>
      </Row>
    </Layout.Content>

    <Layout.Footer style={{height: '10%', textAlign: 'center'}}>
      <p>
        Copyright@2021 嘉兴海创信息技术有限公司 ALL rights reserved
      </p>
      <p style={{fontSize: 12}}>建议您使用IE9及以上版本、Edge、Chrome、Firefox和360等主流浏览器浏览本网站</p>
    </Layout.Footer>
  </Layout>;
}
