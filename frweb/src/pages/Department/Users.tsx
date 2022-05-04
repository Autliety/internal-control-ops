import React from 'react';
import { Avatar, Button, Col, List, Modal, Row } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { UserOutlined } from '@ant-design/icons';

import { useHttp } from '../../utils/request';
import DepartmentList from './DepartmentList';

export default function Users() {

  // 存放部门id和名称
  const [deptId, setDeptId] = React.useState('');
  const [deptName, setDeptName] = React.useState('');
  const { state: userState } = useHttp(`/user?deptId=${deptId}`, { initState: [], isManual: deptId === '' });

  // modal
  const [isVisible, setIsVisible] = React.useState(false);

  return <PageContainer>
    <Row>
      <Col span={10}>
        <DepartmentList onChange={setDeptId} onNameChange={setDeptName}/>
      </Col>
      <Col span={1}/>
      <Col span={13} className='content'>
        <List
            header={<p>{deptName} 人员信息</p>}
            locale={{ emptyText: '暂无数据，点击左侧部门名称查看人员信息' }}
            dataSource={userState}
            renderItem={(item: any) => (
                <List.Item>
                  <List.Item.Meta
                      avatar={<Avatar style={{ backgroundColor: '#1890ff' }} icon={<UserOutlined/>}/>}
                      title={item.name || '暂无'}
                      description={`电话：188XXXX0998`}
                  />
                  <Button type='link'>编辑</Button>
                </List.Item>
            )}
        />
      </Col>
    </Row>

    {/* 编辑部门岗位信息 */}
    <Modal
        title='部门岗位信息编辑'
        closable
        visible={isVisible}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
    >

    </Modal>
  </PageContainer>;
}
