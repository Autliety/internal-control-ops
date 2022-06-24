import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Descriptions, Divider } from 'antd';
import { useAuth } from '../../utils/auth';
import Password from './Password';

export default function Settings() {
  // const { user } = useAuth();
  const user = { name: 'admin', organization: { fullName: '白宫233办公室' } }

  return <PageContainer>

    <div className="content-area" style={{ paddingLeft: 20 }}>
      <Divider orientation="left"><h1>个人信息</h1></Divider>
      <Descriptions column={1}>
        <Descriptions.Item>
          <Avatar
              src={'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg'}
              size={{ xs: 40, sm: 40, md: 40, lg: 64, xl: 80, xxl: 100 }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="用户">
          {user.name}
        </Descriptions.Item>
        <Descriptions.Item label="所在单位">
          {user.organization?.fullName ?? '无'}
        </Descriptions.Item>
      </Descriptions>
    </div>

    <Divider/>

    <div className="content-area">
      <Divider orientation="left"><h1>修改密码</h1></Divider>
      <Password/>
    </div>
  </PageContainer>;
}
