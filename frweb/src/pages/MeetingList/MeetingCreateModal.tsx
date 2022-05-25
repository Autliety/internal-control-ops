import React from 'react';
import { Button, DatePicker, Form, Input, Modal, Radio, Space, Upload } from 'antd';
import { PlusSquareOutlined, UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { useHttp } from '../../utils/request';
import SelectUser from '../../components/SelectUser';
import AttendeeSelectCard from './AttendeeSelectCard';

export default function MeetingCreateModal() {

  const navigate = useNavigate();

  const { http } = useHttp('/meeting', { method: 'POST', isManual: true });

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [form] = Form.useForm();

  const typeOptions = [
    { value: 1, label: '1专题会议' },
    { value: 2, label: 'X专门会议' },
    { value: 3, label: '纪委动议' },
  ];

  const contentDefaultValue = {
    1: '1. 传达学习上级精神\n2. 明确各责任主体职责任务\n3. 排查各自领域问题风险及防范措施',
    2: '',
    3: '',
  };

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
        onOk={form.submit}
    >
      <Form
          form={form}
          layout="vertical"
          name="meetingCreate"
          onValuesChange={({ type }) => !type || form.setFieldsValue({ content: contentDefaultValue[type] })}
          onFinish={async values => {
            values.startTime = values.startTime.valueOf();
            values.meetingUserId = values.meetingUser.map(u => u.id);
            let data = await http(null, null, values);
            navigate(`/mz/meeting/${data.id}/notice`);
          }}
      >
        <Space size={'large'}>
          <Form.Item
              label={'会议时间'}
              name={'startTime'}
              rules={[{ required: true, message: '请输入' }]}
          >
            <DatePicker showTime/>
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
          <Radio.Group options={typeOptions}/>
        </Form.Item>

        <Form.Item name="content" label="会议议题">
          <Input.TextArea placeholder={'请填写会议议题'} rows={6}/>
        </Form.Item>

        <Form.Item name="upload" label="附件上传">
          <Upload><Button icon={<UploadOutlined/>}>点击上传</Button></Upload>
        </Form.Item>

        <Form.Item
            name={'meetingUser'}
            label="参会人员"
            rules={[{ required: true, message: '请选择' }]}
        >
          <AttendeeSelectCard/>
        </Form.Item>

        <Form.Item name={'userSupport'} label={'列席人员'}>
          <AttendeeSelectCard/>
        </Form.Item>

        <Form.Item
            label="选择审核人"
            name="approveUserId"
            rules={[{ required: true, message: '请选择' }]}
        >
          <SelectUser withUser/>
        </Form.Item>
      </Form>
    </Modal>
  </>;
}