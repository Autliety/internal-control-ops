import React from 'react';
import { Form, Input, Modal } from "antd";

export default function DepartmentEditModal({ isVisible, departmentData, onClose }) {
  const [form] = Form.useForm();
  const formColumns = [
    { label: '部门名称', name: 'name' },
    // { label: '岗位信息', name: 'positions', render: text => <Input defaultValue={text.join('')}/> }
  ];

  return <Modal
      title='部门岗位信息编辑'
      closable
      destroyOnClose
      visible={isVisible}
      // onOk={() => setIsVisible(false)}
      onCancel={onClose}
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
          <Input/>
        </Form.Item>)
      }
    </Form>
  </Modal>;
}