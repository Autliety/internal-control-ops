import React from 'react';
import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import UserSelectCascader from '../../components/UserSelectCascader';

function PersonCreateModal() {
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

        <Form.Item name='user' label='报告人'>
          <UserSelectCascader/>
        </Form.Item>

        <Form.Item name='userType' label='报告人类别'>
          <Select placeholder={'请选择'}>
            <Select.Option value={0}>领导干部</Select.Option>
            <Select.Option value={1}>中层干部</Select.Option>
            <Select.Option value={2}>村社书记</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='type' label='报告类别'>
          <Select placeholder={'请选择'}>
            <Select.Option value={0}>即时报告</Select.Option>
            <Select.Option value={1}>年度报告</Select.Option>
            <Select.Option value={2}>个人有关事项集中报告</Select.Option>
            <Select.Option value={3}>个人其他重要事项报告</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='content' label='报告内容简述'>
          <Input.TextArea placeholder={'内容简述'}/>
        </Form.Item>

        <Form.Item name='time' label='报告时间'>
          <DatePicker/>
        </Form.Item>

        <Form.Item name='public' label='内部公开情况'>
          <Select placeholder={'请选择'}>
            <Select.Option value={0}>不公开</Select.Option>
            <Select.Option value={1}>任职公开</Select.Option>
            <Select.Option value={2}>年度民主（组织）生活会书面公开</Select.Option>
          </Select>
        </Form.Item>
      </Form>

    </Modal>
  </>;
}

export default PersonCreateModal;