import React from 'react';
import { Button, Form, Input, Modal, Select, Upload } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import UserSelectCascader from '../../components/UserSelectCascader';

function LeaderCreateModal() {

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState(false);

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusOutlined/>添加</Button>
    <Modal
        title={'事项报告添加'}
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
        <Form.Item name='userType' label='受请托人类别'>
          <Select placeholder={'请选择'}>
            <Select.Option value={0}>镇（街道）“一把手”</Select.Option>
            <Select.Option value={1}>镇（街道）班子成员</Select.Option>
            <Select.Option value={2}>职能站所负责人</Select.Option>
            <Select.Option value={3}>村（社区）“一把手”</Select.Option>
            <Select.Option value={4}>村（社区）班子成员</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='user' label='受请托人姓名'>
          <UserSelectCascader/>
        </Form.Item>

        <Form.Item name='type' label='干预事项类别'>
          <Select placeholder={'请选择'}>
            <Select.Option value={0}>干部选拔任用</Select.Option>
            <Select.Option value={1}>土地使用权出让</Select.Option>
            <Select.Option value={2}>工程建设</Select.Option>
            <Select.Option value={3}>让地产开发与经营</Select.Option>
            <Select.Option value={4}>执纪执法活动</Select.Option>
            <Select.Option value={5}>其他事项</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='record' label='事项记录'>
          <Input.TextArea placeholder={'事项人单位职务及姓名、时间、地点、形式和内容等'}/>
        </Form.Item>

        <Form.Item name='report' label='事项报告'>
          <Input.TextArea placeholder={'简要介绍'}/>
        </Form.Item>

        <Form.Item name='upload' label='附件上传'>
          <Upload><Button icon={<UploadOutlined/>}>点击上传</Button></Upload>
        </Form.Item>
      </Form>

    </Modal>
  </>;
}

export default LeaderCreateModal;