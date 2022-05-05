import React from 'react';
import { Button, Form, Modal, Upload } from 'antd';
import { UploadOutlined } from "@ant-design/icons";

type Props = {
  title?: string,
  isVisible?: boolean,
  onCancel?: any,
}

function BaseModal(props: Props) {

  const [form] = Form.useForm();
  return <>
    <Modal
        visible={props.isVisible}
        title={props.title}
        onCancel={props.onCancel}
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
        <Form.Item
            label='附件上传'
            name='demoFile'
            rules={[{ required: true, message: '选择文件' }]}
        >
          <Upload {...props}>
            <Button icon={<UploadOutlined/>}>选择附件</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  </>;
}

export default BaseModal;