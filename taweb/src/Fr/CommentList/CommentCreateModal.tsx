import React from 'react';
import { Button, DatePicker, Form, Input, Modal, Select, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import UserSelectCascader from '../../components/UserSelectCascader';
import { useHttp } from '../../utils/request';
import FileUpload from '../../components/FileUpload';

function CommentCreateModal() {

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState(false);

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/comment', { method: 'POST', isManual: true });

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
                values.time1 = moment(values.time1).valueOf();
                http(null, null, values).then(data => navigate('/fr/lz/comment/' + data.id))
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

        <Space>
          <Form.Item name='singleUser1' label='报告人' rules={[{ required: true, message: '此项必填' }]}>
            <UserSelectCascader/>
          </Form.Item>

          <Form.Item name='time1' label='会议时间' rules={[{ required: true, message: '此项必填' }]}>
            <DatePicker/>
          </Form.Item>
        </Space>

        <Form.Item name='content1' label='报告人类别' rules={[{ required: true, message: '此项必填' }]}>
          <Select placeholder={'请选择'}>
            <Select.Option value={'区（镇）“一把手”'}>区（镇）“一把手”</Select.Option>
            <Select.Option value={'区（镇）班子成员'}>区（镇）班子成员</Select.Option>
            <Select.Option value={'村（社区）“一把手”'}>村（社区）“一把手”</Select.Option>
            <Select.Option value={'村（社区）班子成员'}>村（社区）班子成员</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='content2' label='会议类别' rules={[{ required: true, message: '此项必填' }]}>
          <Select placeholder={'请选择'}>
            <Select.Option value={'县委常委会（扩大）会议'}>县委常委会（扩大）会议</Select.Option>
            <Select.Option value={'区（镇）党委专题会议'}>区（镇）党委专题会议</Select.Option>
            <Select.Option value={'村（社区）党组织专题会议'}>村（社区）党组织专题会议</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='content3' label='述职述廉方式' rules={[{ required: true, message: '此项必填' }]}>
          <Select placeholder={'请选择'}>
            <Select.Option value={'口头方式'}>口头方式</Select.Option>
            <Select.Option value={'书面方式'}>书面方式</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='longContent1' label='相关内容' rules={[{ required: true, message: '此项必填' }]}>
          <Input.TextArea placeholder='内容' rows={4}/>
        </Form.Item>

        <Form.Item name='content4' label='评议结果'>
          <Input placeholder='评议结果'/>
        </Form.Item>

        <Form.Item name='content5' label='纳入廉政档案情况'>
          <Input placeholder='纳入廉政档案情况'/>
        </Form.Item>

        <Form.Item name='attach' label='上传附件'>
          <FileUpload isInEdit/>
        </Form.Item>
      </Form>

    </Modal>
  </>;
}

export default CommentCreateModal;