import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { LaptopOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, List, Row, Table } from 'antd';
import DepartmentEditModal from "./DepartmentEditModal";
import { useHttp } from "../../utils/request";

export default function Department() {

  // 获取部门
  const { state: departmentState, loading } = useHttp('/department', { initState: [] });
  // 存放部门id
  const [deptId, setDeptId] = React.useState('');
  const { state: stationState } = useHttp(`/station?deptId=${deptId}`, { initState: [], isManual: deptId === '' });

  const departments = [{ id: 1, name: '百步镇政府' }];
  const columns = [{ title: '部门组织结构', dataIndex: 'name' }];

  // DepartmentEditModal
  const [isVisible, setIsVisible] = React.useState(false);
  const [departmentData, setDepartmentData] = React.useState({});

  const expandedRowRender = () => {
    return <List
        dataSource={departmentState}
        loading={loading}
        renderItem={(item: any) => (
            <List.Item>
              <Button
                  type='link'
                  onClick={() => setDeptId(item.deptId)}
                  style={{ color: '#000' }}
              >
                {item.name}
              </Button>
              <Button type='link' onClick={() => {
                setDepartmentData(item);
                setIsVisible(true);
              }}>
                编辑
              </Button>
            </List.Item>
        )}
    />;
  }

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
            header={<p>部门岗位信息</p>}
            dataSource={stationState}
            locale={{ emptyText: '暂无数据，点击左侧部门名称查看岗位信息' }}
            renderItem={(item: any) => (
                <List.Item>
                  <List.Item.Meta
                      avatar={<Avatar style={{ backgroundColor: '#1890ff' }} icon={<LaptopOutlined/>}/>}
                      title={item.name}
                      description='啦啦啦'
                  />
                </List.Item>
            )}
        />
      </Col>
    </Row>

    {/*  编辑部门信息*/}
    <DepartmentEditModal
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        departmentData={departmentData}
    />
  </PageContainer>;
}
