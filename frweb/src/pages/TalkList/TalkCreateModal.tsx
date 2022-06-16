import React from 'react';
import { Button, DatePicker, Form, Input, Modal, Select, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import UserSelectCascader from '../../components/UserSelectCascader';
import SelectUser from '../../components/SelectUser';

function TalkCreateModal() {

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState(false);

  const columns1 = [
        { title: '谈话实施人', dataIndex: 'request', render: <UserSelectCascader/> },
        { title: '谈话对象', dataIndex: 'point', render: <UserSelectCascader/> },
        { title: '谈话事由', dataIndex: 'title' },
        { title: '谈话内容', dataIndex: 'content' },
        { title: '谈话对象表态', dataIndex: 'response' },
      ],
      columns2 = [
        { title: '申请谈话人', dataIndex: 'request', render: <UserSelectCascader/> },
        { title: '互谈人', dataIndex: 'point', render: <UserSelectCascader/> },
        { title: '谈话事由', dataIndex: 'title' },
        { title: '谈话内容', dataIndex: 'content' },
      ],
      talkPoint = [
        { label: '区（镇）“一把手”同村（社）、基层站所（视情）“一把手”谈话', value: 1 },
        { label: '区（镇）纪委负责人同村（社）、基层站所“一把手”谈话', value: 2 },
        { label: '区（镇）组织部门负责人同村（社）、基层站所“一把手”谈话', value: 3 },
        { label: '区（镇）班子成员同分管基层站所“一把手”谈话', value: 4 },
        { label: '区（镇）、村（社）“一把手”同班子成员谈话', value: 5 },
        { label: '村（社）、基层站所“一把手”申请向上级党组织负责人（：一把手、纪委负责人、组织部门负责人及分管班子成员）汇报', value: 6 },
      ],
      talkType = [
        { label: '日常谈话', value: 1 },
        { label: '任职（廉政）谈话', value: 2 },
        { label: '监督谈话', value: 3 },
        { label: '集体谈话', value: 4 },
        { label: '勉励谈话', value: 5 },
        { label: '双向互谈', value: 6 },
      ];

  const [point, setPoint] = React.useState(1);

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusOutlined/>新建</Button>
    <Modal
        title={'5+1 谈话新建'}
        visible={isVisible}
        width={1000}
        onCancel={() => setIsVisible(false)}
        destroyOnClose
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

        <Form.Item name='point' label='谈话指向'>
          <Select value={point} onChange={v => setPoint(v)} placeholder='请选择'>
            {
              talkPoint.map(item => <Select.Option key={item.value} value={item.value}>
                {item.label}
              </Select.Option>)
            }
          </Select>
        </Form.Item>

        <Form.Item name='type' label='谈话类型'>
          <Select placeholder='请选择'>
            {
              point === 6
                  ? talkType.slice(5).map(item => <Select.Option key={item.value} value={item.value}>
                    {item.label}
                  </Select.Option>)
                  : talkType.slice(0, 5).map(item => <Select.Option key={item.value} value={item.value}>
                    {item.label}
                  </Select.Option>)
            }
          </Select>
        </Form.Item>


        <Space size={'large'}>
          <Form.Item name='time' label='谈话时间'>
            <DatePicker showTime={{ format: 'YYYY-MM-DD HH-mm' }}/>
          </Form.Item>

          <Form.Item name='placement' label='谈话地点'>
            <Input placeholder='谈话地点'/>
          </Form.Item>

          <Form.Item name='recorder' label='谈话记录人'>
            <SelectUser withUser/>
          </Form.Item>
        </Space>

        {
          point === 6
              ? columns2.map((item, index) => <Form.Item
                  key={index}
                  label={item.title}
                  name={item.dataIndex}
              >
                {item.render || <Input.TextArea rows={1} placeholder={item.title}/>}
              </Form.Item>)
              : columns1.map((item, index) => <Form.Item
                  key={index}
                  label={item.title}
                  name={item.dataIndex}
              >
                {item.render || <Input.TextArea rows={1} placeholder={item.title}/>}
              </Form.Item>)
        }
      </Form>
    </Modal>
  </>;
}

export default TalkCreateModal;