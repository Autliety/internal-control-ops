import React from 'react';
import { Button, DatePicker, Form, Input, Modal, Space, Upload } from 'antd';
import { MinusCircleOutlined, PlusOutlined, PlusSquareOutlined, UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import UserSelectCascader from '../../components/UserSelectCascader';
import AttendeeSelectCard from '../MeetingList/AttendeeSelectCard';
import { useAuth } from '../../utils/auth';

function MotionCreateModal() {

  const { user } = useAuth();
  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/motion', { method: 'POST', isManual: true });

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState(false);

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}>
      <PlusSquareOutlined/>
      动议召开通知
    </Button>

    <Modal
        width={1190}
        title='纪委动议新建'
        okText='提交'
        destroyOnClose
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onOk={form.submit}
    >
      <>
        <p>动议人</p>
        <UserSelectCascader value={user} disabled/>
      </>
      <br/><br/>
      <Form
          form={form}
          layout='vertical'
          name='meetingCreate'

          onFinish={async values => {
            values.time1 = moment(values.time1).valueOf();
            let data = await http(null, null, { ...values, destUser: user.id });
            navigate(`/fr/dz/motion/${data.id}`);
          }}
      >
        <Space size={'large'}>
          <Form.Item
              label='动议时间'
              name='time1'
              rules={[{ required: true, message: '请输入' }]}
          >
            <DatePicker showTime/>
          </Form.Item>

          <Form.Item
              name='content1'
              label='动议地点'
              rules={[{ required: true, message: '请输入' }]}
          >
            <Input placeholder='动议地点'/>
          </Form.Item>
        </Space>

        <Form.Item name='longContent1' label='动议情形'>
          <Input.TextArea placeholder={'请填写动议情形'} rows={6}/>
        </Form.Item>

        <Form.Item label='动议内容及研究确实事项概述'>
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
                            label={'概述内容'}
                            name={[name, 'content']}
                            style={{ width: 700 }}
                        >
                          <Input.TextArea rows={1} placeholder='概述内容'/>
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

        <Form.Item name='attach' label='附件上传'>
          <Upload><Button icon={<UploadOutlined/>}>点击上传</Button></Upload>
        </Form.Item>

        <Form.Item
            name='multiUser1'
            label='参会人员'
            rules={[{ required: true, message: '请选择' }]}
        >
          <AttendeeSelectCard/>
        </Form.Item>

      </Form>
    </Modal>
  </>
      ;
}

export default MotionCreateModal;