import React from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';

export default function HeaderRight() {

  const navigate = useNavigate();

  const { user } = useAuth();

  if (!user) {
    return <></>;
  }

  return <div style={{ color: 'white' }}>
    <Space>
      <Dropdown
          placement="bottomCenter"
          overlay={
            <Menu>
              <Menu.Item key="1" icon={<LoginOutlined />} onClick={() => navigate('/logout')}>
                退出登录
              </Menu.Item>
              <Menu.Divider />
            </Menu>
          }
      >
        <Space>
          <span style={{ marginLeft: 10 }}>{user.name}</span>
          <UserOutlined style={{ fontSize: 18 }} />
        </Space>
      </Dropdown>

    </Space>
  </div>;
}
