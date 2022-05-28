import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { BuildOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Divider, List, Modal, Row, Checkbox } from 'antd';

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

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [initData, setInitData] = React.useState<any>({});

  // 测试数据
  const permission = ['meetingCreate', 'meetingFinish', 'matterDispatch'];
  const meetingPermission = [
    { label: '新建会议', value: 'meetingCreate' },
    { label: '更新会议', value: 'meetingUpdate' },
    { label: '结束会议', value: 'meetingFinish' },
  ];
  const matterPermission = [
    { label: '修改问题', value: 'matterUpdate' },
    { label: '问题分派', value: 'matterDispatch' },
  ];

  return <PageContainer>
    <Row>
      <Col span={8}>
        <DepartmentList onChange={setDept}/>
      </Col>

      <Col span={1}/>

      <Col span={15} className="content">
        <List
            header={<p>{dept.name}</p>}
            dataSource={state}
            locale={{ emptyText: '请选择部门' }}
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
        title={'权限编辑'}
        visible={isVisible}
        closable
        width={1200}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
    >
      <p>部门：{initData.department?.name}</p>
      <p>岗位：{initData.name}</p>
      <br/>

      <p>会议权限</p>
      <Checkbox.Group
          options={meetingPermission}
          defaultValue={permission}
      />
      <Divider/>

      <p>问题权限</p>
      <Checkbox.Group
          options={matterPermission}
          defaultValue={permission}
      />
    </Modal>
  </PageContainer>;
}
