import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Checkbox, Col, Divider, List, Modal, Row, Tabs } from 'antd';

import { useHttp } from '../../utils/request';
import DepartmentList from './DepartmentList';
import { permissionTypeFr } from '../../utils/nameMapFr';
import { permissionTypeTa } from '../../utils/nameMapTa';
import { getPermissionFr, permissionFr } from '../../Fr/Permission';
import { getPermissionTa, permissionTa } from '../../Ta/Permission';
import InformAddModal from './InformAddModal';

const { TabPane } = Tabs;

export default function Department({ systemType }) {
  // 存放部门id和名称
  const [deptId, setDeptId] = React.useState('');
  const [deptName, setDeptName] = React.useState('');
  const { state: userState } = useHttp(`/user?deptId=${deptId}`, { initState: [], isManual: deptId === '' });

  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  // 该岗位已被赋予的权限
  const existPermission = ['PLAN_CREATE', 'TASK_VIEW', 'WALL_VIEW', 'WALL_CREATE'];

  return <PageContainer
      extra={[
        <InformAddModal
            isUserAdd
            onFinish={async data => console.log(data)}
        />,
      ]}
  >
    <Row>

      <Col span={10}>
        <DepartmentList isEdit onChange={setDeptId} onNameChange={setDeptName}/>
      </Col>

      <Col span={1}/>

      <Col span={13} className="content">
        <List
            header={<p>{deptName || '部门岗位（人员）信息'}</p>}
            dataSource={userState}
            locale={{ emptyText: '暂无数据，点击左侧部门名称查看详细信息' }}
            renderItem={(item: any) => (
                <List.Item>
                  <List.Item.Meta
                      avatar={<Avatar style={{ backgroundColor: '#1890ff' }}
                                      icon={<UserOutlined/>}
                      />}
                      title={item.name}
                      description={item?.station}
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
      <Tabs defaultActiveKey="1">
        <TabPane tab="权限编辑" key="1">
          <p>部门：{}</p>
          <p>岗位：{}</p>
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
        <TabPane tab="分管站办和村社" key="2">
          <p>部门：</p>
          <p>岗位：</p>
          <Divider/>
          <Checkbox.Group>
            <Row gutter={[16, 16]}>
              {/*todo*/}
            </Row>
          </Checkbox.Group>
        </TabPane>
      </Tabs>
    </Modal>
  </PageContainer>;
}
