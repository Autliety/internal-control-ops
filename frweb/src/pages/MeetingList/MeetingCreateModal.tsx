import React from 'react';
import { Button, DatePicker, Form, Input, Modal, Radio, Space, Upload } from 'antd';
import { PlusSquareOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { useHttp } from '../../utils/request';
import SelectUser from '../../components/SelectUser';
import AttendeeSelectCard from './AttendeeSelectCard';

export default function MeetingCreateModal() {

  const navigate = useNavigate();

  const { http } = useHttp('/meeting', { method: 'POST', isManual: true });

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [meetingType, setMeetingType] = React.useState<number>(1);
  const [form] = Form.useForm();

  const contentDefaultValue = {
    1: '1. 传达学习上级精神\n2. 明确各责任主体职责任务\n3. 排查各自领域问题风险及防范措施',
    2: '',
    3: '',
  };

  form.setFieldsValue({ content: contentDefaultValue[meetingType] });

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}>
      <PlusSquareOutlined/> 会议召开通知
    </Button>

    <Modal
        width={1190}
        title="新建会议"
        okText="提交审核"
        destroyOnClose
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onOk={() => form.validateFields()
            .then(values => {
              values.startTime = values.startTime.valueOf();
              values.meetingUserId = values.meetingUser.map(u => u.id);
              http(null, null, values)
                  .then(data => navigate(`/mz/meeting/${data.id}/notice`));
            })}
    >
      <Form
          form={form}
          layout="vertical"
          name="meetingCreate"
      >

        <Space size={'large'}>
          < Form.Item
              label={'会议时间'}
              name={'startTime'}
              rules={[{ required: true, message: '请输入' }]}
          >
            <DatePicker showTime={{ format: 'HH:mm' }}/>
          </Form.Item>

          <Form.Item
              name="placement"
              label="会议地点"
              rules={[{ required: true, message: '请输入' }]}
          >
            <Input placeholder={'会议地点'}/>
          </Form.Item>
        </Space>

        <Form.Item name="type" label="会议类型" rules={[{ required: true, message: '请选择' }]}>
          <Radio.Group value={meetingType} onChange={v => setMeetingType(v.target.value)}>
            <Radio value={1}>’1‘专题会议</Radio>
            <Radio value={2}>’X‘专门会议</Radio>
            <Radio value={3}>纪委动议</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="content" label="会议议题">
          <Input.TextArea rows={6}/>
        </Form.Item>

        <Form.Item name="upload" label="附件上传">
          <Upload><Button icon={<UploadOutlined/>}>点击上传</Button></Upload>
        </Form.Item>

        <Form.Item
            name={'meetingUser'}
            label="参会人员"
            tooltip="通过部门选择人员"
            rules={[{ required: true, message: '请选择' }]}
        >
          <AttendeeSelectCard/>
        </Form.Item>

        <Form.Item name={'userSupport'} label={'列席人员'}>
          <AttendeeSelectCard/>
        </Form.Item>

        <Form.Item
            label="选择审核人"
            name="approve"
            rules={[{ required: true, message: '请选择' }]}
        >
          <SelectUser withUser/>
        </Form.Item>
      </Form>
    </Modal>
  </>;
}