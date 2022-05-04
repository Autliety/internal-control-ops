import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { LaptopOutlined } from '@ant-design/icons';
import { Avatar, Col, List, Row } from 'antd';

import { useHttp } from '../../utils/request';
import DepartmentList from './DepartmentList';

export default function Department() {
  // 存放部门id和名称
  const [deptId, setDeptId] = React.useState('');
  const [deptName, setDeptName] = React.useState('');
  const { state: stationState } = useHttp(`/station?deptId=${deptId}`, { initState: [], isManual: deptId === '' });

  return <PageContainer>
    <Row>
      <Col span={10}>
        <DepartmentList isEdit onChange={setDeptId} onNameChange={setDeptName}/>
      </Col>

      <Col span={1}/>

      <Col span={13} className='content'>
        <List
            header={<p>{deptName} 岗位信息</p>}
            dataSource={stationState}
            locale={{ emptyText: '暂无数据，点击左侧部门名称查看岗位信息' }}
            renderItem={(item: any) => (
                <List.Item>
                  <List.Item.Meta
                      avatar={<Avatar style={{ backgroundColor: '#1890ff' }} icon={<LaptopOutlined/>}/>}
                      title={item.name}
                  />
                </List.Item>
            )}
        />
      </Col>
    </Row>
  </PageContainer>;
}
