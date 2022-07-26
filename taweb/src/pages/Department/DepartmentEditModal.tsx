import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useHttp } from '../../utils/request';

export default function DepartmentEditModal({ departmentData }) {

  const [form] = Form.useForm();
  const formColumns = [
    { label: '原部门名称', name: 'name', disable: true },
    { label: '原部门简称', name: 'shortName', disable: true },
    { label: '新部门名称', name: 'newName', placeholder: '名称', required: true },
    { label: '新部门简称', name: 'newShortName', placeholder: '简称' },
  ];

  const [isVisible, setIsVisible] = React.useState(false);

  const { http } = useHttp(`/department/${departmentData.id}`, { method: 'POST', isManual: true });

  return <>
    <Button type='link' onClick={() => setIsVisible(true)}>编辑</Button>
    <Modal
        title='部门编辑'
        closable
        destroyOnClose
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onOk={() => {
          form
              .validateFields()
              .then(values => {
                form.resetFields();
                http(null, null, {
                  name: values.newName,
                  shortName: values.newShortName
                }).then(() => window.location.reload());
              })
              .catch(info => {
                console.log('Validate Failed:', info);
              });
        }}
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
              rules={[{ required: config.required, message: '必填项' }]}
          >
            <Input placeholder={config.placeholder} disabled={config.disable}/>
          </Form.Item>)
        }
      </Form>
    </Modal>
  </>;
}