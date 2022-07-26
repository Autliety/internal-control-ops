import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { BuildOutlined, UserOutlined } from '@ant-design/icons';
import {
  Avatar,
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  List,
  Modal,
  Popconfirm,
  Radio,
  Row, Select,
  Space,
  Tabs
} from 'antd';

import { useHttp } from '../../utils/request';
import DepartmentList from './DepartmentList';
import { permissionTypeFr } from '../../utils/nameMapFr';
import { permissionTypeTa } from '../../utils/nameMapTa';
import { getPermissionFr, permissionFr } from '../../Fr/Permission';
import { getPermissionTa, permissionTa } from '../../Ta/Permission';
import InformAddModal from './InformAddModal';
import SelectUser from '../../components/SelectUser';
import { useAuth } from '../../utils/auth';

const { TabPane } = Tabs;

export default function Department({ systemType, isUser = true }) {

  const { user } = useAuth();

  // 存放部门id和名称
  const [deptId, setDeptId] = React.useState('');
  const [deptName, setDeptName] = React.useState('');
  const { state: userState } = useHttp(`/user?deptId=${deptId}`, { initState: [], isManual: deptId === '' });

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [initData, setInitData] = React.useState<any>({});

  const { http: userHttp } = useHttp(`/user/${initData.id}`, { method: 'POST', isManual: true });

  // 部门新建
  const { http: deptCreateHttp } = useHttp('/department', { method: 'POST', isManual: true });
  //用户新建
  const { http: userCreateHttp } = useHttp('/user', { method: 'POST', isManual: true });
  // 用户删除
  const { http: userDeleteHttp } = useHttp(`/user/${initData.id}`, { method: 'DELETE', isManual: true });

  return <PageContainer
      extra={[
        <InformAddModal
            isUserAdd={isUser}
            onFinish={async data => isUser
                ? userCreateHttp(null, null, {
                  ...data,
                  department: { id: data.department }
                }).then(() => window.location.reload())
                : deptCreateHttp(null, null, data).then(() => window.location.reload())}
        />,
      ]}
  >

    <Row>

      <Col span={10}>
        <DepartmentList isEdit onChange={setDeptId} onNameChange={setDeptName}/>
      </Col>

      <Col span={1}/>

      <Col span={13} className='content'>
        <List
            header={<p>{deptName || '部门岗位（人员）信息'}</p>}
            dataSource={userState}
            locale={{ emptyText: '暂无数据，点击左侧部门名称查看详细信息' }}
            renderItem={(item: any) => (
                <List.Item
                    actions={isUser && user.id === 999 && [
                      <Button type={'link'} onClick={() => {
                        setInitData(item);
                        setIsVisible(true);
                      }}>
                        编辑
                      </Button>,
                      <Popconfirm
                          placement='topRight'
                          title='是否删除该用户？'
                          okText='确定'
                          cancelText='取消'
                          onConfirm={() => userDeleteHttp(null, null, {}).then(() => window.location.reload())}
                      >
                        <Button type='link' danger onClick={() => setInitData(item)}>删除</Button>
                      </Popconfirm>
                    ]}
                >
                  <List.Item.Meta
                      avatar={
                        isUser
                            ? <Avatar style={{ backgroundColor: '#1890ff' }} icon={<UserOutlined/>}/>
                            : <Avatar style={{ backgroundColor: '#1890ff' }} icon={<BuildOutlined/>}/>
                      }
                      title={isUser ? item.name : item.station}
                      description={isUser && item?.station}
                  />
                </List.Item>
            )}
        />
      </Col>
    </Row>

    {/* 用户编辑 */}
    <Modal
        visible={isVisible}
        closable
        width={1200}
        destroyOnClose
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
        footer={null}
    >
      <Tabs defaultActiveKey='1'>

        <TabPane tab='用户信息编辑' key='1'>
          <Form

              labelCol={{ span: 2 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ ...initData, department: initData.department?.id }}
              onFinish={v => userHttp(null, null, {
                ...v,
                name: v.taName,
                department: { id: v.department }
              }).then(() => window.location.reload())}
          >

            <Form.Item label='姓名' name='taName'>
              <Input/>
            </Form.Item>

            <Form.Item label='性别' name='gender'>
              <Radio.Group>
                <Radio value='男'>男</Radio>
                <Radio value='女'>女</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label='电话' name='phone'>
              <Input placeholder='电话'/>
            </Form.Item>

            <Form.Item label='所属部门' name='department'>
              <SelectUser withUser={false} value={3}/>
            </Form.Item>

            <Form.Item label='岗位介绍' name='station'>
              <Input.TextArea placeholder='岗位介绍'/>
            </Form.Item>

            <Form.Item label='职责' name='privilege'>
              <Select>
                <Select.Option value='DEPT'>主体责任</Select.Option>
                <Select.Option value='DEPT_J'>监督责任</Select.Option>
                <Select.Option value='DEPT_Z'>职能监督责任</Select.Option>
                <Select.Option value='FIRST'>第一责任人责任</Select.Option>
                <Select.Option value='DOUBLE'>一岗双责</Select.Option>
                <Select.Option value='NORMAL'>普通用户</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 2 }}>
              <Space size='large'>
                <Button type='primary' htmlType='submit'>确定</Button>
                <Button onClick={() => setIsVisible(false)}>取消</Button>
              </Space>
            </Form.Item>
          </Form>
        </TabPane>

        <TabPane tab='权限编辑' key='2' disabled>
          <p>部门：{initData.department?.name}</p>
          <p>岗位：{initData.name}</p>
          <Divider/>
          {
            systemType === 'Fr'
                ? <Row>
                  {
                    Object.keys(getPermissionFr(permissionFr)).map((item, index) => <Col key={item} span={12}>
                      <p>{index + 1 + '、' + permissionTypeFr[item]}</p>
                      <Checkbox.Group options={getPermissionFr(permissionFr)[item]}/>
                      <Divider/>
                    </Col>)
                  }
                </Row>
                : <Row>
                  {
                    Object.keys(getPermissionTa(permissionTa)).map((item, index) => <Col key={item} span={12}>
                      <p>{index + 1 + '、' + permissionTypeTa[item]}</p>
                      <Checkbox.Group options={getPermissionTa(permissionTa)[item]}/>
                      <Divider/>
                    </Col>)
                  }
                </Row>
          }
        </TabPane>

        <TabPane tab='分管站办和村社' key='3' disabled>
          <p>部门：{initData.department?.name}</p>
          <p>岗位：{initData.name}</p>
          <Divider/>
          <Checkbox.Group>
            <Row gutter={[16, 16]}>
              {/*todo*/}
              {/*{*/}
              {/*  deptState.slice(5).map((item, index) => < Col key={index} span={6}>*/}
              {/*    <Checkbox value={item.id}>{item.name}</Checkbox>*/}
              {/*  </Col>)*/}
              {/*}*/}
            </Row>
          </Checkbox.Group>
        </TabPane>
      </Tabs>
    </Modal>
  </PageContainer>;
}
