import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Checkbox, Col, Divider, List, Modal, Row, Tabs } from 'antd';

import { useHttp } from '../../utils/request';
import DepartmentList from './DepartmentList';
import { permissionTypeFr } from '../../utils/nameMapFr';
import { permissionTypeTa } from '../../utils/nameMapTa';
import { getPermissionFr, permissionFr } from '../../Fr/Permission';
import { getPermissionTa, permissionTa } from '../../Ta/Permission';

const { TabPane } = Tabs;

export default function Department({ withUser = false, systemType }) {
  // 存放部门id和名称
  const [deptId, setDeptId] = React.useState('');
  const [deptName, setDeptName] = React.useState('');
  const { state: stationState } = useHttp(`/station?deptId=${deptId}`, { initState: [], isManual: deptId === '' });
  const { state: userState } = useHttp(`/user?deptId=${deptId}`, { initState: [], isManual: deptId === '' });

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [initData, setInitData] = React.useState<any>({});

  // 该岗位已被赋予的权限
  const existPermission = ['PLAN_CREATE', 'TASK_VIEW', 'WALL_VIEW', 'WALL_CREATE'];

  return <PageContainer>
    <Row>
      <Col span={10}>
        <DepartmentList isEdit onChange={setDeptId} onNameChange={setDeptName}/>
      </Col>

      <Col span={1}/>

      <Col span={13} className='content'>
        <List
            header={<p>{deptName || '部门岗位（人员）信息'}</p>}
            dataSource={withUser ? userState : stationState}
            locale={{ emptyText: '暂无数据，点击左侧部门名称查看详细信息' }}
            renderItem={(item: any) => (
                <List.Item
                    actions={withUser ? [] : [<Button type={'link'} onClick={() => {
                      setInitData(item);
                      setIsVisible(true);
                    }}>编辑</Button>]}
                >
                  <List.Item.Meta
                      avatar={<Avatar style={{ backgroundColor: '#1890ff' }}
                                      icon={withUser ? <UserOutlined/> : <LaptopOutlined/>}/>}
                      title={item.name}
                      description={withUser && item.station?.name}
                  />
                </List.Item>
            )}
        />
      </Col>
    </Row>

    {/* 权限编辑 */}
    <Modal
        visible={isVisible}
        closable
        width={1200}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
    >
      <Tabs defaultActiveKey='1'>
        <TabPane tab='权限编辑' key='1'>
          <p>部门：{initData.department?.name}</p>
          <p>岗位：{initData.name}</p>
          <Divider/>
          {
            systemType === 'Fr'
                ? <Row>
                  {
                    Object.keys(getPermissionFr(permissionFr)).map((item, index) => <Col key={item} span={12}>
                      <p>{index + 1 + '、' + permissionTypeFr[item]}</p>
                      <Checkbox.Group options={getPermissionFr(permissionFr)[item]} defaultValue={existPermission}/>
                      <Divider/>
                    </Col>)
                  }
                </Row>
                : <Row>
                  {
                    Object.keys(getPermissionTa(permissionTa)).map((item, index) => <Col key={item} span={12}>
                      <p>{index + 1 + '、' + permissionTypeTa[item]}</p>
                      <Checkbox.Group options={getPermissionTa(permissionTa)[item]} defaultValue={existPermission}/>
                      <Divider/>
                    </Col>)
                  }
                </Row>
          }
        </TabPane>
        <TabPane tab='分管站办和村社' key='2'>
          <p>部门：{initData.department?.name}</p>
          <p>岗位：{initData.name}</p>
          <Divider/>
          <Checkbox.Group>
            <Row gutter={[16, 16]}>
              {
                stationState.map((item, index) => < Col key={index} span={8}>
                  <Checkbox value={item.id}>{item.name}</Checkbox>
                </Col>)
              }
            </Row>
          </Checkbox.Group>
        </TabPane>
      </Tabs>
    </Modal>
  </PageContainer>;
}
