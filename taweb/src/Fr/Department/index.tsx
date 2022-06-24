import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { BuildOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Divider, List, Modal, Row, Checkbox, Tabs, Empty } from 'antd';

import { useHttp } from '../../utils/request';
import DepartmentList from './DepartmentList';
import { getPermission, permission } from '../Permission';
import { permissionType } from '../../utils/nameMapFr';

const { TabPane } = Tabs;

export default function Department({ withUser = false }) {
  // 存放部门id和名称
  const [dept, setDept] = React.useState<any>({});
  const { state, http } = useHttp((withUser ? '/user' : '/station') + `?deptId=${dept.id}`, {
    initState: [],
    isManual: true,
  });

  const { state: deptState } = useHttp('/department', { initState: [] });
  React.useEffect(() => {
    if (dept.id) http();
  }, [dept, http]);

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [initData, setInitData] = React.useState<any>({});

  // 该岗位已被赋予的权限
  const existPermission = ['MEETING_CREATE', 'MEETING_FINISH', 'MATTER_DISPATCH', 'MOTION_CREATE'];

  return <PageContainer>
    <Row>
      <Col span={8}>
        <DepartmentList onChange={setDept}/>
      </Col>

      <Col span={1}/>

      <Col span={15} className='content'>
        <List
            header={<p>{dept.name ?? '部门岗位（人员）信息'}</p>}
            dataSource={state}
            locale={{ emptyText: '暂无数据，点击左侧部门名称查看详细信息' }}
            renderItem={(item: any) => (
                <List.Item
                    actions={withUser ? [] : [<Button type={'link'} onClick={() => {
                      setInitData(item);
                      setIsVisible(true);
                    }}>编辑</Button>]}
                >
                  <List.Item.Meta
                      avatar={<Avatar
                          style={{ backgroundColor: '#1890ff' }}
                          icon={withUser ? <UserOutlined/> : <BuildOutlined/>}
                      />}
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
        destroyOnClose
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
    >
      <Tabs defaultActiveKey='1'>
        <TabPane tab='权限编辑' key='1'>
          <p>部门：{initData.department?.name}</p>
          <p>岗位：{initData.name}</p>
          <Divider/>
          <Row>
            {
              Object.keys(getPermission(permission)).map((item, index) => <Col key={item} span={12}>
                <p>{index + 1 + '、' + permissionType[item]}</p>
                <Checkbox.Group options={getPermission(permission)[item]} defaultValue={existPermission}/>
                <Divider/>
              </Col>)
            }
          </Row>
        </TabPane>
        <TabPane tab='分管站办和村社' key='2'>
          <p>部门：{initData.department?.name}</p>
          <p>岗位：{initData.name}</p>
          <Divider/>
          <Checkbox.Group>
            <Row gutter={[16, 16]}>
              {
                deptState.slice(5).map((item, index) => < Col key={index} span={6}>
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
