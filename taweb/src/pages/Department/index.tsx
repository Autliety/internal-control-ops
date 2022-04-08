import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { LaptopOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Collapse, List, Row } from 'antd';

import { useHttp } from '../../utils/request';

export default function Department() {

  const { Panel } = Collapse;
  // 获取部门
  const { state: departmentState, loading } = useHttp('/department', { initState: [] });
  // 存放部门id和名称
  const [deptId, setDeptId] = React.useState('');
  const [deptName, setDeptName] = React.useState('');
  const { state: stationState } = useHttp(`/station?deptId=${deptId}`, { initState: [], isManual: deptId === '' });

  return <PageContainer>
    <Row>
      <Col span={10}>
        <Collapse bordered={false} accordion defaultActiveKey={0}>
          {
            departmentState.map((item, index) => <Panel
                    key={index}
                    header={<div onClick={() => {
                      setDeptId(item.id);
                      setDeptName(item.name);
                    }}>
                      {item.name}
                    </div>}
                >
                  <List
                      dataSource={item.children}
                      loading={loading}
                      renderItem={(item: any) => (
                          <List.Item>
                            <div
                                onClick={() => {
                                  setDeptId(item.id);
                                  setDeptName(item.name);
                                }}
                                style={{ cursor: 'pointer' }}
                            >
                              {item.name}
                            </div>
                            <Button type='link'>
                              编辑
                            </Button>
                          </List.Item>
                      )}
                  />
                </Panel>
            )
          }
        </Collapse>
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
