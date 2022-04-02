import React from 'react';
import { Avatar, Button, Col, List, Modal, Row, Table } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { UserOutlined } from '@ant-design/icons';
import { useHttp } from "../../utils/request";

export default function Users() {

  // 获取部门
  const { state: departmentState, loading } = useHttp('/department', { initState: [] });
  // 存放部门id
  const [deptId, setDeptId] = React.useState('');
  const { state: userState } = useHttp(`/user?deptId=${deptId}`, { initState: [], isManual: deptId === '' });

  const departments = [{ id: 1, name: '百步镇政府' }];
  const columns = [{ title: '部门组织结构', dataIndex: 'name' }];

  const expandedRowRender = () => {
    return <List
        dataSource={departmentState}
        loading={loading}
        renderItem={(item: any) => (
            <List.Item>
              <Button
                  type='link'
                  style={{ color: '#000' }}
                  onClick={() => setDeptId(item.id)}
              >
                {item.name}
              </Button>
            </List.Item>
        )}
    />;
  }

  // modal
  const [isVisible, setIsVisible] = React.useState(false);

  return <PageContainer>
    <Row>
      <Col span={10}>
        <Table
            rowKey='id'
            columns={columns}
            defaultExpandAllRows
            expandable={{ expandedRowRender }}
            dataSource={departments}
            pagination={false}
        />
      </Col>
      <Col span={1}/>
      <Col span={13} className='content'>
        <List
            header={<p>部门人员信息</p>}
            locale={{ emptyText: '暂无数据，点击左侧部门名称查看人员信息' }}
            dataSource={userState}
            renderItem={(item: any) => (
                <List.Item>
                  <List.Item.Meta
                      avatar={<Avatar style={{ backgroundColor: '#1890ff' }} icon={<UserOutlined/>}/>}
                      title={item.name || '暂无'}
                      description={`电话：${18870970998}`}
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
