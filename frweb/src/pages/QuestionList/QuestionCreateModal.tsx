import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Modal, Select, Typography } from 'antd';
import SelectUser from '../../components/SelectUser';

function QuestionCreateModal() {

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusOutlined/>新建约谈</Button>
    <Modal
        title={'履责约谈新建'}
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
        <Form.Item name='type' label='约谈方式'>
          <Select placeholder={'请选择'}>
            <Select.Option value={0}>集体约谈</Select.Option>
            <Select.Option value={1}>个别约谈</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='leader' label='约谈人'>
          <SelectUser withUser/>
        </Form.Item>

        <Form.Item name='user' label='约谈对象'>
          <SelectUser withUser/>
        </Form.Item>

        <Form.Item name='date' label='约谈时间'>
          <DatePicker/>
        </Form.Item>

        <Form.Item name='station' label='约谈内容'>
          <Input.TextArea placeholder={'内容'}/>
        </Form.Item>
      </Form>
    </Modal>
  </>;
}

export default QuestionCreateModal;