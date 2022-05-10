import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { BuildOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Col, List, Row } from 'antd';

import { useHttp } from '../../utils/request';
import DepartmentList from './DepartmentList';

export default function Department({ withUser = false }) {
  // 存放部门id和名称
  const [dept, setDept] = React.useState<any>({});
  const { state, http } = useHttp((withUser ? '/user' : '/station') + `?deptId=${dept.id}`, {
    initState: [],
    isManual: true,
  });
  React.useEffect(() => {
    if (dept.id) http();
  }, [dept, http]);

  return <PageContainer>
    <Row>
      <Col span={8}>
        <DepartmentList onChange={setDept}
        />
      </Col>

      <Col span={1} />

      <Col span={15} className="content">
        <List
            header={<p>{dept.name}</p>}
            dataSource={state}
            locale={{ emptyText: '请选择部门' }}
            renderItem={(item: any) => (
                <List.Item>
                  <List.Item.Meta
                      avatar={<Avatar
                          style={{ backgroundColor: '#1890ff' }}
                          icon={withUser ? <UserOutlined /> : <BuildOutlined />}
                      />}
                      title={item.name}
                      description={withUser && item.station?.name}
                  />
                </List.Item>
            )}
        />
      </Col>
    </Row>
  </PageContainer>;
}
