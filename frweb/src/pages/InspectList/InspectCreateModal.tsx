import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, DatePicker, Form, Input, Modal, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined, PlusSquareOutlined } from '@ant-design/icons';

import UserSelectCascader from '../../components/UserSelectCascader';
import SelectUser from '../../components/SelectUser';

export default function InspectCreateModal() {

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [form] = Form.useForm();

  return <>

    <Button type={'primary'} onClick={() => setIsVisible(true)}>
      <PlusSquareOutlined/> 会议召开通知
    </Button>

    <Modal
        width={1190}
        title={'检查记录'}
        destroyOnClose
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onOk={form.submit}
    >
      <Form
          form={form}
          layout='vertical'
          name='meetingCreate'
          onFinish={async () => {
            navigate('/lz/inspect/1');
          }}
      >
        <Space size={'large'}>
          <Form.Item label={'检查人'} name={'user'}>
            <UserSelectCascader/>
          </Form.Item>

          <Form.Item name='field' label='检查领域'>
            <Input placeholder={'检查领域'}/>
          </Form.Item>

          <Form.Item name='department' label='涉及部门'>
            <SelectUser/>
          </Form.Item>

          <Form.Item name='createTime' label='检查时间'>
            <DatePicker/>
          </Form.Item>
        </Space>

        <Form.Item label='检查项目名称' name='name'>
          <Input.TextArea rows={3} placeholder={'项目名称'}/>
        </Form.Item>

        <Form.Item name='detail' label='检查开展情况'
        >
          <Input.TextArea rows={3} placeholder={'开展情况'}/>
        </Form.Item>

        <Form.Item label={'相关问题'}>
          <Form.List name='matter'>
            {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                      <Space key={key} style={{ display: 'flex', marginBottom: 8 }}>
                        <Form.Item
                            {...restField}
                            label={'涉及部门/党员干部'}
                            name={[name, 'user']}
                        >
                          <UserSelectCascader/>
                        </Form.Item>
                        <Form.Item
                            {...restField}
                            label={'问题内容'}
                            name={[name, 'content']}
                            style={{ width: 700 }}
                        >
                          <Input.TextArea rows={1} placeholder='问题内容'/>
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
        </Form.Item>

      </Form>
    </Modal>
  </>;
}