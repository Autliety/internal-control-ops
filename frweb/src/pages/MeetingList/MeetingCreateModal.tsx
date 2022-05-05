import React from 'react';
import { Button, DatePicker, Form, Input, Modal, Radio } from 'antd';
import { CheckCard } from '@ant-design/pro-card';
import { useHttp } from '../../utils/request';
import { PlusSquareOutlined } from '@ant-design/icons';

export default function MeetingCreateModal() {

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  // 筛选属于党委、纪委、领导班子、组织部门以及办所的人员
  const { state: userState } = useHttp('/user?deptId=1', { initState: [] });
  function filterUser(userState) {
    let users = [{ name: '党委书记', id: 100 }, { name: '纪委书记', id: 101 }, { name: '组织部领导', id: 102 }];
    userState.forEach(item => users.push(item));
    return Array.from(new Set(users));
  }

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}>
      <PlusSquareOutlined />
      会议通知
    </Button>
    <Modal
        visible={isVisible}
        width={1000}
        title="新建会议"
        okText="创建"
        destroyOnClose
        onCancel={() => setIsVisible(false)}
        onOk={() => {
          form
          .validateFields()
          .then(values => {
            form.resetFields();
            console.log(values);
          })
          .catch(info => {
            console.log('创建失败：', info);
          });
        }}
    >
      <Form
          form={form}
          layout="vertical"
          name="meetingCreate"
      >
        <Form.Item
            name="startTime"
            label="会议时间"
            rules={[{ required: true, message: '请输入' }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
            name="placement"
            label="会议地点"
            rules={[{ required: true, message: '请输入' }]}
        >
          <Input placeholder={'会议地点'} />
        </Form.Item>
        <Form.Item name="type" label="会议类型" rules={[{ required: true, message: '请选择' }]}>
          <Radio.Group>
            <Radio value="one">’1‘专题会议</Radio>
            <Radio value="x">’X‘专门会议</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
            name="attendee"
            label="与会人员"
            rules={[{ required: true, message: '请选择' }]}
        >

          <CheckCard.Group
              multiple
              size={'small'}
              onChange={value => {
                console.log('value', value);
              }}
          >
            {
              filterUser(userState).map(item => <CheckCard
                  bordered
                  title={item.name}
                  value={item.id}
              />)
            }
          </CheckCard.Group>

        </Form.Item>
      </Form>
    </Modal>
  </>;
}