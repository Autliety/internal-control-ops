import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Col, Descriptions, Row, Tabs } from 'antd';
import Password from './Password';

export default function Settings() {
  // const { user } = useAuth();
  const user = { name: 'admin', organization: { fullName: '白宫233办公室', station: '系统管理员' } }

  return <PageContainer>

    <Row>
      <Col span={8}>
        <div className='content-area' style={{ paddingLeft: 20 }}>
          <Descriptions column={1}>
            <Descriptions.Item>
              <Avatar
                  src={'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg'}
                  size={{ xs: 40, sm: 40, md: 40, lg: 64, xl: 80, xxl: 100 }}
              />
            </Descriptions.Item>
            <Descriptions.Item label='用户名称'>
              {user.name}
            </Descriptions.Item>
            <Descriptions.Item label='所在单位'>
              {user.organization?.fullName ?? '无'}
            </Descriptions.Item>
            <Descriptions.Item label='岗位职责'>
              {user.organization?.station ?? '无'}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </Col>
      <Col span={1}/>
      <Col span={15}>
        <div className='content-area'>
          <Tabs defaultActiveKey='1'>
            <Tabs.TabPane tab='修改密码' key='1'>
              <Password/>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </Col>
    </Row>
  </PageContainer>;
}
