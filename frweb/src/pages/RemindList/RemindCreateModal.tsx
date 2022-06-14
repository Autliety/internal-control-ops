import React from 'react';
import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import UserSelectCascader from '../../components/UserSelectCascader';

function RemindCreateModal() {

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState(false);

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusOutlined/>添加</Button>
    <Modal
        title={'述职述廉评议添加'}
        visible={isVisible}
        width={800}
        onCancel={() => setIsVisible(false)}
        onOk={() => {
          form
              .validateFields()
              .then(values => {
                form.resetFields();
                console.log(values);
              })
              .catch(info => {
                console.log('Validate Failed:', info);
              });
        }}
    >
      <Form
          form={form}
          layout='vertical'
          name='form_in_modal'
      >

        <Form.Item name='time' label='提醒时间'>
          <DatePicker/>
        </Form.Item>

        <Form.Item name='user' label='提醒人'>
          <UserSelectCascader/>
        </Form.Item>

        <Form.Item name='userType' label='提醒人类别'>
          <Select placeholder={'请选择'}>
            <Select.Option value={0}>镇（街道）“一把手”</Select.Option>
            <Select.Option value={1}>镇（街道）班子成员</Select.Option>
            <Select.Option value={3}>村（社区）“一把手”</Select.Option>
            <Select.Option value={4}>村（社区）班子成员</Select.Option>
            <Select.Option value={5}>村（社区）纪检监察组织负责人</Select.Option>
            <Select.Option value={6}>镇（街道）纪（工）委书记</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='type' label='被提醒人类别'>
          <Select placeholder={'请选择'}>
            <Select.Option value={0}>镇（街道）“一把手”</Select.Option>
            <Select.Option value={1}>镇（街道）班子成员</Select.Option>
            <Select.Option value={3}>村（社区）“一把手”</Select.Option>
            <Select.Option value={4}>村（社区）班子成员</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='way' label='提醒方式'>
          <Select placeholder={'请选择'}>
            <Select.Option value={0}>当面沟通交流</Select.Option>
            <Select.Option value={1}>系统平台交流</Select.Option>
            <Select.Option value={2}>其他方式</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='content' label='提醒内容'>
          <Input.TextArea placeholder='监督提醒内容'/>
        </Form.Item>

      </Form>
    </Modal>
  </>;
}

export default RemindCreateModal;