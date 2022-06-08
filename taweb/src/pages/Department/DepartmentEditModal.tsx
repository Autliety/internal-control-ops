import React from 'react';
import { Button, Form, Input, Modal } from 'antd';

export default function DepartmentEditModal({ departmentData }) {

  const [form] = Form.useForm();
  const formColumns = [
    { label: '原部门名称', name: 'name', disable: true },
    { label: '新部门名称', name: 'newName', placeholder: '新名称' },
  ];

  const [isVisible, setIsVisible] = React.useState(false);

  return <>
    <Button type='link' onClick={() => setIsVisible(true)}>编辑</Button>
    <Modal
        title='更改部门名称'
        closable
        destroyOnClose
        visible={isVisible}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
    >
      <Form
          form={form}
          layout='vertical'
          name='edit_department'
          initialValues={departmentData}
      >
        {
          formColumns.map((config, index) => <Form.Item
              {...config}
              key={index}
              label={config.label}
              name={config.name}
          >
            <Input placeholder={config.placeholder} disabled={config.disable}/>
          </Form.Item>)
        }
      </Form>
    </Modal>
  </>;
}