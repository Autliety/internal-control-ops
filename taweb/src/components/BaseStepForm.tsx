import React from 'react';
import {
  Button,
  Col,
  DatePicker,
  Descriptions,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Steps,
  Typography
} from 'antd';
import FileUpload from './FileUpload';

function BaseStepForm() {

  const { Step } = Steps;
  const [form] = Form.useForm();

  const [isVisible, setIsVisible] = React.useState(false);
  // 当前步骤
  const currentStep = 1;
  // 查看已填写信息的步骤
  const [step, setStep] = React.useState<number>(0);


  // 测试数据
  const baseColumns = [
    {
      title: '生活会类别',
      dataIndex: 'content1',
      render: <Select>
        <Select.Option value={'镇（街道）领导班子民主生活会'}>镇（街道）领导班子民主生活会</Select.Option>
        <Select.Option value={'村（社区）班子组织生活会'}>村（社区）班子组织生活会</Select.Option>
      </Select>,
    },
    {
      title: '召开情形',
      dataIndex: 'content2',
      render: <Select>
        <Select.Option value={'根据县委安排开展/接受巡察或所辖区域'}>根据县委安排开展/接受巡察或所辖区域</Select.Option>
        <Select.Option value={'单位遇到重要或普遍性问题'}>单位遇到重要或普遍性问题</Select.Option>
        <Select.Option value={'根据镇（街道）党（工）委安排开展/接受巡察或所辖区域'}>根据镇（街道）党（工）委安排开展/接受巡察或所辖区域</Select.Option>
        <Select.Option value={'单位遇到重要或普遍性问题'}>单位遇到重要或普遍性问题</Select.Option>
      </Select>,
    },
    { title: '生活会主题', dataIndex: 'content3' },
    { title: '召开时间', dataIndex: 'time1', render: <DatePicker/> },
    { title: '上级派员', dataIndex: 'content4' },
    { title: '指导情况', dataIndex: 'longContent1', render: <Input.TextArea placeholder='指导情况'/> },
    { title: '问题清单提交情况', dataIndex: 'submitCase' },
    { title: '督导组会前指导', dataIndex: 'content5' },
    { title: '督导组会中检查', dataIndex: 'content6' },
    { title: '督导组会后评估', dataIndex: 'content7' },
    { title: '整改情况', dataIndex: 'longContent2', render: <Input.TextArea placeholder='整改情况'/> },
    { title: '结果运用', dataIndex: 'longContent3', render: <Input.TextArea placeholder='结果运用'/> },
    { title: '上传附件', dataIndex: 'attach', render: <FileUpload isInEdit/> },
  ];

  const formConfig = {
    0: { title: '基本信息', columns: baseColumns.slice(0, 7) },
    1: { title: '督导信息', columns: baseColumns.slice(7, 10) },
    2: { title: '结果运用', columns: baseColumns.slice(10) },
    3: { title: '最后结果', columns: baseColumns.slice(10) },
  };


  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}>新建</Button>
    <Modal
        visible={isVisible}
        width={1000}
        title='民主生活会'
        onCancel={() => setIsVisible(false)}
        onOk={() => step === currentStep
            ? form
                .validateFields()
                .then(values => {
                  form.resetFields();
                  console.log(values);
                })
                .catch(info => {
                  console.log('Validate Failed:', info);
                })
            : setIsVisible(false)
        }
    >

      <Select onChange={v => setStep(v)} placeholder='选择步骤，查看已填写情况' style={{ width: 240 }}>
        {
          Object.values(formConfig).slice(0, currentStep + 1).map((item, index) => <Select.Option
              key={index}
              value={index}
          >
            {item.title}
          </Select.Option>)
        }
      </Select>
      <Divider dashed/>

      <Row>
        <Col span={6}>
          <Steps progressDot current={currentStep} direction='vertical'>
            {
              Object.values(formConfig)?.map((item, index) => <Step
                  key={index}
                  title={item.title}
              />)
            }
          </Steps>
        </Col>
        <Col span={18}>
          {
            step === currentStep
                ? <>
                  <Typography.Title level={5}>{formConfig[currentStep].title + '填写'}</Typography.Title>
                  <br/>
                  <Form
                      form={form}
                      layout='vertical'
                      name='form_in_modal'
                  >
                    {
                      formConfig[currentStep]?.columns.map((item, index) => <Form.Item
                          key={index}
                          name={item.dataIndex}
                          label={item.title}
                      >
                        {item.render || <Input placeholder={item.title}/>}
                      </Form.Item>)
                    }
                  </Form>
                </>
                : <Descriptions column={1} bordered title={`${formConfig[step].title}展示`}>
                  {
                    formConfig[step]?.columns.map((t, i) => <Descriptions.Item
                        key={i}
                        label={t.title}
                        labelStyle={{ width: '30%' }}
                    >
                      {t.title}
                    </Descriptions.Item>)
                  }
                </Descriptions>
          }
        </Col>
      </Row>
    </Modal>
  </>;
}

export default BaseStepForm;