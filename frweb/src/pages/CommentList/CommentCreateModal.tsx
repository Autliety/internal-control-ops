import React from 'react';
import { Button, DatePicker, Form, Modal, Select, Upload } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import UserSelectCascader from '../../components/UserSelectCascader';

function CommentCreateModal() {

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState(false);

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusOutlined/>添加评议</Button>
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

        <Form.Item name='user' label='报告人'>
          <UserSelectCascader/>
        </Form.Item>

        <Form.Item name='userType' label='报告人类别'>
          <Select placeholder={'请选择'}>
            <Select.Option value={0}>镇（街道）“一把手”</Select.Option>
            <Select.Option value={1}>镇（街道）班子成员</Select.Option>
            <Select.Option value={3}>村（社区）“一把手”</Select.Option>
            <Select.Option value={4}>村（社区）班子成员</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='meetingType' label='会议类别'>
          <Select placeholder={'请选择'}>
            <Select.Option value={0}>县委常委会（扩大）会议</Select.Option>
            <Select.Option value={1}>镇（街道）党（工）委专题会议</Select.Option>
            <Select.Option value={2}>村（社区）党组织专题会议</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='time' label='会议时间'>
          <DatePicker/>
        </Form.Item>

        <Form.Item name='way' label='述职述廉方式'>
          <Select placeholder={'请选择'}>
            <Select.Option value={0}>口头方式</Select.Option>
            <Select.Option value={1}>书面方式</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='content' label='相关内容'>
          <Upload><Button type={'primary'} icon={<UploadOutlined/>}>上传内容文件</Button></Upload>
        </Form.Item>
      </Form>

    </Modal>
  </>;
}

export default CommentCreateModal;