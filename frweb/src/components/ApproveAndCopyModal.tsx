import React from 'react';
import { Button, Divider, Form, Modal } from 'antd';
import { useBoolean } from 'ahooks';
import UserSelectCascader from './UserSelectCascader';

type Props = {
  onSubmit: (approval: any) => void,
}

export default function ApproveAndCopyModal({ onSubmit }: Props) {

  const [isOpen, { setTrue: open, setFalse: close }] = useBoolean(false);
  const [form] = Form.useForm();

  return <>
    <Button type={'primary'} onClick={open}>提交审核</Button>

    <Modal
        title={'确认提交审核'}
        closable
        destroyOnClose
        visible={isOpen}
        onCancel={close}
        onOk={() => form.submit()}
    >
      <Form
          form={form}
          layout="vertical"
          initialValues={{
            approveUser: { id: 1 },
            copyUser: { id: 3 },
          }}
          onFinish={async values => onSubmit(values)}
      >
        <Form.Item label={'选择审核人'} name={'approveUser'}>
          <UserSelectCascader/>
        </Form.Item>
        <Divider/>
        <Form.Item label={'抄送'} name={'copyUser'}>
          <UserSelectCascader/>
        </Form.Item>
      </Form>
    </Modal>
  </>;
}