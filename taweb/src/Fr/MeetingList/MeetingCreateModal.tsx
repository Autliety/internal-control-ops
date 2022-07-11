import React from 'react';
import { Button, DatePicker, Form, Input, Modal, Radio, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { useHttp } from '../../utils/request';
import AttendeeSelectCard from './AttendeeSelectCard';
import UserSelectCascader from '../../components/UserSelectCascader';
import FileUpload from '../../components/FileUpload';

export default function MeetingCreateModal({ typesLimit = null, isMotion = true }) {

  const navigate = useNavigate();

  const { http } = useHttp('/meeting', { method: 'POST', isManual: true });

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [form] = Form.useForm();

  const typeOptions = [
    { value: 1, label: '1专题会议' },
    { value: 2, label: 'X专题会议' },
  ];

  const contentDefaultValue = {
    1: '1. 传达学习上级精神\n2. 明确各责任主体职责任务\n3. 排查各自领域问题风险及防范措施',
    2: '',
    3: '',
  };

  const approveUserDefaultId = { 1: 1 };

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}>
      <PlusSquareOutlined/> 会议召开通知
    </Button>

    <Modal
        width={1190}
        title={'新建会议'}
        okText="发送会议通知"
        destroyOnClose
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onOk={form.submit}
    >
      <Form
          form={form}
          layout="vertical"
          name="meetingCreate"
          onValuesChange={({ type }) => {
            if (type) {
              form.setFieldsValue({
                content: contentDefaultValue[type],
                approval: { approveUser: { id: approveUserDefaultId[type] } },
              });
            }
          }}
          onFinish={async values => {
            values.type = typeOptions.find(o => o.value === values.type)?.label;
            values.startTime = values.startTime.valueOf();
            let data = await http(null, null, values);
            navigate(`/fr/mz/meeting/${data.id}/notice`);
          }}
      >
        <Space size={'large'}>
          <Form.Item
              label={'会议时间'}
              name={'startTime'}
              rules={[{ required: true, message: '请输入' }]}
          >
            <DatePicker/>
          </Form.Item>

          <Form.Item
              name="placement"
              label="会议地点"
              rules={[{ required: true, message: '请输入' }]}
          >
            <Input placeholder={'会议地点'}/>
          </Form.Item>
        </Space>

        {
            isMotion && <Form.Item name="type" label="会议类型" rules={[{ required: true, message: '请选择' }]}>
              <Radio.Group options={typeOptions.filter(o => !typesLimit || o.value === typesLimit)}/>
            </Form.Item>
        }

        <Form.Item name="content" label="会议议题">
          <Input.TextArea placeholder={'请填写会议议题'} rows={6}/>
        </Form.Item>

        {isMotion || <Form.Item label={'相关问题'}>
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
        </Form.Item>}

        <Form.Item name="attach" label="相关附件">
          <FileUpload isInEdit/>
        </Form.Item>

        <Form.Item
            name={'meetingUser'}
            label="参会人员"
            rules={[{ required: true, message: '请选择' }]}
        >
          <AttendeeSelectCard/>
        </Form.Item>

        {
            isMotion && <Form.Item name={'subUser'} label={'列席人员'}>
              <AttendeeSelectCard/>
            </Form.Item>
        }

      </Form>
    </Modal>
  </>;
}