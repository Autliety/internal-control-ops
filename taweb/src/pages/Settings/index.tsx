import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Col, Descriptions, Divider, Row, Tabs } from 'antd';
import Password from './Password';
import { useAuth } from '../../utils/auth';

export default function Settings() {
  const { user } = useAuth();

  return <PageContainer>

    <Row>
      <Col span={5}>
        <div className='content-area'>
          <Descriptions column={1}>
            <Descriptions.Item>
              <Avatar
                  src={'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg'}
                  size={{ xs: 40, sm: 40, md: 40, lg: 64, xl: 80, xxl: 100 }}
              />
            </Descriptions.Item>
            <Divider dashed/>
            <Descriptions.Item label='用户姓名'>
              {user.name}
            </Descriptions.Item>
            <Descriptions.Item label='岗位名称'>
              {user.station?.name}
            </Descriptions.Item>
            <Descriptions.Item label='所在单位'>
              {user.department?.name}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </Col>
      <Col span={1}/>
      <Col span={18} className='content'>
        <Tabs defaultActiveKey='1'>
          <Tabs.TabPane tab='修改密码' key='1'>
            <Password/>
          </Tabs.TabPane>
        </Tabs>
      </Col>
    </Row>

  </PageContainer>;
}
