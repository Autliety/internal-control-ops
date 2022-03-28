import React from 'react';
import { Button, Space, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '@ant-design/pro-layout';

import { useAuth } from '../../utils/auth';

export default function AssetList() {

  const { user } = useAuth();

  const navigate = useNavigate();
  const [selected, setSelected] = React.useState<any[]>();

  return <div className="ListView">
    <PageContainer
        extra={<Space>
          <Button onClick={() => setSelected([])}>批量打印</Button>
          <Button
              type="primary"
              onClick={() => navigate('/asset/assets/0?create=true')}
              // disabled={!user.privileges.includes('ASSET')}
          >
            新建
          </Button>
        </Space>}
    >
    </PageContainer>
  </div>;
}
