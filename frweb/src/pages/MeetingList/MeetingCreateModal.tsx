import React from 'react';
import { Button, DatePicker, Form, Input, Modal, Radio } from 'antd';
import { CheckCard } from '@ant-design/pro-card';
import { useHttp } from '../../utils/request';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function MeetingCreateModal() {

  const navigate = useNavigate();

  const { state: users } = useHttp('/user', { initState: [] });
  const { http } = useHttp('/meeting', { method: 'POST', isManual: true });

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [form] = Form.useForm();

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}>
      <PlusSquareOutlined /> 会议召开通知
    </Button>

    <Modal
        width={1190}
        title="新建会议"
        okText="创建"
        destroyOnClose
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onOk={() => form.validateFields()
        .then(values => {
          values.startTime = values.startTime.valueOf();
          http(null, null, values)
          .then(data => navigate(`/meeting/${data.id}`));
        })
        .catch(info => console.log(info))}
    >
      <Form
          form={form}
          layout="vertical"
          name="meetingCreate"
      >
        <Form.Item
            label={'会议时间'}
            name={'startTime'}
            rules={[{ required: true, message: '请输入' }]}
        >
          <DatePicker showTime />
        </Form.Item>

        <Form.Item
            name="placement"
            label="会议地点"
            rules={[{ required: true, message: '请输入' }]}
        >
          <Input placeholder={'会议地点'} />
        </Form.Item>

        <Form.Item name="type" label="会议类型" rules={[{ required: true, message: '请选择' }]}>
          <Radio.Group>
            <Radio value={'’1‘专题会议'}>’1‘专题会议</Radio>
            <Radio value={'’X‘专门会议'}>’X‘专门会议</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
            name="userId"
            label="与会人员"
            rules={[{ required: true, message: '请选择' }]}
        >
          <CheckCard.Group multiple size={'small'}>
            {
              users.map(u => <CheckCard
                  value={u.id}
                  key={u.id}
                  title={u.name}
                  description={u.department?.name}
              />)
            }
          </CheckCard.Group>

        </Form.Item>
      </Form>
    </Modal>
  </>;
}