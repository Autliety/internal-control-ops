import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Modal, Select, Space } from 'antd';
import SelectUser from '../../components/SelectUser';
import { useHttp } from '../../utils/request';

export default function InformCreateModal() {

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const { http } = useHttp('/inform', { method: 'POST', isManual: true })

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusOutlined/>添加</Button>
    <Modal
        visible={isVisible}
        destroyOnClose
        title='添加'
        width={1200}
        onCancel={() => setIsVisible(false)}
        onOk={() => {
          form
              .validateFields()
              .then(values => {
                http(null, null, values).then(() => setIsVisible(false));
                window.location.reload();
              })
              .catch(info => {
                console.log('Validate Failed:', info);
              });
        }}
    >
      <Form
          form={form}
          layout='vertical'
          name='inform'
      >
        <Space size={'large'}>
          <Form.Item name='type' label='类型'>
            <Select placeholder={'请选择'}>
              <Select.Option value={'COPY'}>抄告单</Select.Option>
              <Select.Option value={'OPINION'}>意见书</Select.Option>
              <Select.Option value={'ADVICE'}>建议书</Select.Option>
              <Select.Option value={'ANNOUNCE'}>第一种形态告知书</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name='fromDeptId' label='下达部门'>
            <SelectUser isSelectUser={false}/>
          </Form.Item>

          <Form.Item name='endDate' label='下达时间'>
            <DatePicker/>
          </Form.Item>

          <Form.Item name='fromUserId' label='签发人'>
            <SelectUser isSelectUser/>
          </Form.Item>

          <Form.Item name='destDeptId' label='接收对象'>
            <SelectUser isSelectUser/>
          </Form.Item>
        </Space>

        <Form.List name='matter'>
          {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }}>
                      <Form.Item
                          {...restField}
                          label={'涉及部门'}
                          name={[name, 'deptId']}
                      >
                        <SelectUser isSelectUser={false}/>
                      </Form.Item>
                      <Form.Item
                          {...restField}
                          label={'问题内容'}
                          name={[name, 'content']}
                          style={{ width: 700 }}
                      >
                        <Input placeholder='问题内容'/>
                      </Form.Item>
                      <Form.Item
                          {...restField}
                          label={'反馈报告时限'}
                          name={[name, 'endDate']}
                      >
                        <DatePicker/>
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)}/>
                    </Space>
                ))}
                <Form.Item>
                  <Button type='dashed' onClick={() => add()} block icon={<PlusOutlined/>}>
                    添加一项
                  </Button>
                </Form.Item>
              </>
          )}
        </Form.List>
      </Form>
    </Modal>
  </>;
}