import React from 'react';
import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function DemocracyCreateModal() {

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState(false);
  const formFields = [
    { title: '生活会主题', dataIndex: 'topic' },
    { title: '召开时间', dataIndex: 'time', render: <DatePicker showTime={{ format: 'YYYY-MM-DD HH-mm' }}/> },
    { title: '上级派员', dataIndex: 'superior', render: <Input placeholder='指导情况'/> },
    { title: '指导情况', dataIndex: 'guideCase' },
    { title: '问题清单提交情况', dataIndex: 'submitCase' },
    { title: '督导组会前指导', dataIndex: 'before' },
    { title: '督导组会中检查', dataIndex: 'center' },
    { title: '督导组会后评估', dataIndex: 'after' },
    { title: '整改情况', dataIndex: 'rectification' },
    { title: '结果运用', dataIndex: 'result' },
  ];

  const [type, setType] = React.useState(1);

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusOutlined/>新增</Button>
    <Modal
        title={'生活会新增'}
        visible={isVisible}
        width={1000}
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
          initialValues={{ 'type': 1 }}
      >

        <Form.Item name='type' label='生活会类别'>
          <Select value={type} onChange={v => setType(v)}>
            <Select.Option value={1}>镇（街道）领导班子民主生活会</Select.Option>
            <Select.Option value={2}>村（社区）班子组织生活会</Select.Option>
          </Select>
        </Form.Item>

        {
          type === 1
              ? <Form.Item name='condition' label='召开情形'>
                <Select placeholder='请选择'>
                  <Select.Option value={1}>根据县委安排开展/接受巡察或所辖区域</Select.Option>
                  <Select.Option value={2}>单位遇到重要或普遍性问题</Select.Option>

                </Select>
              </Form.Item>
              : <Form.Item name='condition' label='召开情形'>
                <Select placeholder='请选择'>
                  <Select.Option value={1}>根据镇（街道）党（工）委安排开展/接受巡察或所辖区域</Select.Option>
                  <Select.Option value={2}>单位遇到重要或普遍性问题</Select.Option>
                </Select>
              </Form.Item>
        }

        {
          formFields.map((item: any, index) => <Form.Item
              key={index}
              label={item.title}
              name={item.dataIndex}
          >
            {
                item.render || <Input.TextArea rows={1} placeholder={item.title}/>
            }
          </Form.Item>)
        }
      </Form>
    </Modal>
  </>;
}

export default DemocracyCreateModal;