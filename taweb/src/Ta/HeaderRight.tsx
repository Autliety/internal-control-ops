import React from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';

export default function HeaderRight() {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { user } = useAuth();

  if (!user) {
    return <></>;
  }

  return <div style={{ color: 'white' }}>
    <Space>

      <Dropdown
          placement="bottomLeft"
          overlay={
            <Menu>
              <Menu.Item key="1" onClick={() => navigate('/ta/')} disabled={pathname.substring(1, 3) === 'ta'}>
                督考平台
              </Menu.Item>
              <Menu.Item key="2" onClick={() => navigate('/fr/')} disabled={pathname.substring(1, 3) === 'fr'}>
                区(镇)村(社)一体全面从严治党责任落实应用系统
              </Menu.Item>
            </Menu>
          }
      >
        <Space>
          <span style={{ marginLeft: 10 }}>系统切换</span>
        </Space>
      </Dropdown>

      <Dropdown
          placement="bottomCenter"
          overlay={
            <Menu>
              <Menu.Item key="1" icon={<LoginOutlined/>} onClick={() => navigate('/logout')}>
                退出登录
              </Menu.Item>
              <Menu.Divider/>
            </Menu>
          }
      >
        <Space>
          <span style={{ marginLeft: 10 }}>{user.name}</span>
          <UserOutlined style={{ fontSize: 18 }}/>
        </Space>
      </Dropdown>

    </Space>
  </div>;
}
