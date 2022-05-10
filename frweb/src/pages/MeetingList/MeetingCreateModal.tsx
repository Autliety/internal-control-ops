import React from 'react';
import { Button, DatePicker, Divider, Form, Input, Modal, Radio, Upload } from 'antd';
import { PlusSquareOutlined, UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { useHttp } from '../../utils/request';
import SelectUser from '../../components/SelectUser';
import { CheckCard } from "@ant-design/pro-card";

export default function MeetingCreateModal() {

  const navigate = useNavigate();
  // 与会/列席人员
  const [meetingAttendee, setMeetingAttendee] = React.useState<any>([]);
  const [attendee, setAttendee] = React.useState([]);

  const { http } = useHttp('/meeting', { method: 'POST', isManual: true });

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [form] = Form.useForm();

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}>
      <PlusSquareOutlined/> 会议召开通知
    </Button>

    <Modal
        width={1190}
        title='新建会议'
        okText='创建'
        destroyOnClose
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onOk={() => form.validateFields()
            .then(values => {
              values.startTime = values.startTime.valueOf();
              values.userId = meetingAttendee.map(u => u.id);
              http(null, null, values)
                  .then(data => navigate(`/meeting/${data.id}/notice`));
            })
            .catch(info => console.log(info))}
    >
      <Form
          form={form}
          layout='vertical'
          name='meetingCreate'
      >
        <Form.Item
            label={'会议时间'}
            name={'startTime'}
            rules={[{ required: true, message: '请输入' }]}
        >
          <DatePicker showTime={{ format: 'HH:mm' }}/>
        </Form.Item>

        <Form.Item
            name='placement'
            label='会议地点'
            rules={[{ required: true, message: '请输入' }]}
        >
          <Input placeholder={'会议地点'}/>
        </Form.Item>

        <Form.Item name='type' label='会议类型' rules={[{ required: true, message: '请选择' }]}>
          <Radio.Group>
            <Radio value={'’1‘专题会议'}>’1‘专题会议</Radio>
            <Radio value={'’X‘专门会议'}>’X‘专门会议</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name='upload' label='附件上传'>
          <Upload>
            <Button icon={<UploadOutlined/>}>点击上传</Button>
          </Upload>
        </Form.Item>

        <Form.Item
            label='与会人员'
            tooltip='通过部门选择人员'
            rules={[{ required: true, message: '请选择' }]}
        >
          <SelectUser withUser onChange={(v, option: any) => setMeetingAttendee([...meetingAttendee, option.data])}/>
          <Divider/>
          <CheckCard.Group
              multiple
              size={'small'}
              disabled
          >
            {
              meetingAttendee?.map((u: any, index) => <CheckCard
                  key={index}
                  value={u.id}
                  title={<div style={{ color: '#000' }}>
                    {u.name}
                    <Divider type={'vertical'}/>
                    {u.station?.name}
                  </div>}
                  description={u.department?.name}
              />)
            }
          </CheckCard.Group>
        </Form.Item>

        <Form.Item label={'列席人员'}>
          <SelectUser withUser onChange={(v, option: any) => setAttendee([...attendee, option.data])}/>
          <Divider/>
          <CheckCard.Group
              multiple
              size={'small'}
              disabled
          >
            {
              attendee?.map((u: any, index) => <CheckCard
                  key={index}
                  value={u.id}
                  title={<div style={{ color: '#000' }}>
                    {u.name}
                    <Divider type={'vertical'}/>
                    {u.station?.name}
                  </div>}
                  description={u.department?.name}
              />)
            }
          </CheckCard.Group>
        </Form.Item>

        <Form.Item
            label='选择审批人员'
            name='approver'
            rules={[{ required: true, message: '请选择' }]}
        >
          <SelectUser withUser/>
        </Form.Item>
      </Form>
    </Modal>
  </>;
}