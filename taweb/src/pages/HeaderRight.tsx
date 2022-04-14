import React from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function HeaderRight() {
  const user = { name: '管理员' };

  const navigate = useNavigate();

  if (!user) {
    return <></>;
  }

  const personalMenu = (
      <Menu>
        <Menu.Item key="1" icon={<UserOutlined/>} onClick={() => navigate('/admin/settings')}>
          个人中心
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="2" icon={<LoginOutlined/>} onClick={() => navigate('logout')}>
          退出系统
        </Menu.Item>
      </Menu>
  )

  return <div style={{ color: 'white' }}>
    <Space>
      {/* 个人中心 */}
      <Dropdown
          placement='bottomCenter'
          overlay={personalMenu}
      >
        <Space>
          <span style={{ marginLeft: 10 }}>{user.name}</span>
          <UserOutlined style={{ fontSize: 18 }}/>
        </Space>
      </Dropdown>

    </Space>
  </div>;
}
