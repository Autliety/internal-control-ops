import React from 'react';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Select, Upload } from 'antd';
import SelectUser from '../../components/SelectUser';

function ImportantCreateModal() {

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusOutlined/>添加事项</Button>
    <Modal
        title={'重大事项添加'}
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
        <Form.Item name='name' label='事项名称'>
          <Input placeholder={'名称'}/>
        </Form.Item>

        <Form.Item name='type' label='事项类型'>
          <Select placeholder={'请选择'}>
            <Select.Option value={0}>即时报告</Select.Option>
            <Select.Option value={1}>年度报告</Select.Option>
            <Select.Option value={2}>个人有关事项集中报告</Select.Option>
            <Select.Option value={3}>个人其他重要事项报告</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='submitter' label='提交人'>
          <SelectUser withUser/>
        </Form.Item>
        <Form.Item name='content' label='事项概述'>
          <Input.TextArea placeholder={'简要介绍'}/>
        </Form.Item>
      </Form>
      <Form.Item name="upload" label="附件上传">
        <Upload><Button icon={<UploadOutlined/>}>点击上传</Button></Upload>
      </Form.Item>

    </Modal>
  </>;
}

export default ImportantCreateModal;