import React from 'react';
import { Button, Descriptions, Form, InputNumber, Modal, Select } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useHttp } from '../../utils/request';

function EvaluateDetailCreate({ userId }) {
  const [form] = Form.useForm();

  const { http } = useHttp('/external/usage', { method: 'POST', isManual: true });
  const { state } = useHttp('/external', { initState: [] });

  const [isVisible, setIsVisible] = React.useState(false);
  const [assessment, setAssessment] = React.useState({});

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusSquareOutlined/>添加增减分</Button>
    <Modal
        title={'增减分指标考评添加'}
        visible={isVisible}
        width={1000}
        onCancel={() => setIsVisible(false)}
        onOk={() => {
          form
              .validateFields()
              .then(values => {
                form.resetFields();
                http(null, null, {
                  applyUser: { id: userId },
                  external: { id: values.assessment },
                  point: values.point,
                }).then(() => window.location.reload());
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
          onValuesChange={data => form.setFieldsValue({ point: state.find(i => i.id === data.assessment).point })}
      >

        <Form.Item name='assessment' label='选择指标'>
          <Select placeholder='请选择' onChange={(_, option: any) => setAssessment(option.data)}>
            {
              state.map((item, index) => <Select.Option
                  key={index}
                  value={item.id}
                  data={item}
              >
                {item.name}
              </Select.Option>)
            }
          </Select>
        </Form.Item>

        {
            Object.keys(assessment).length === 0 || <>
              <Descriptions title='指标详情' bordered column={1} labelStyle={{ width: '10%' }}>
                <Descriptions.Item label='名称'>{assessment['name']}</Descriptions.Item>
                <Descriptions.Item label='编号'>{assessment['code']}</Descriptions.Item>
                <Descriptions.Item label='分值'>{assessment['point']}</Descriptions.Item>
                <Descriptions.Item label='标准'>{assessment['standard']}</Descriptions.Item>
              </Descriptions><br/>

              <Form.Item name='point' label='评分值'>
                <InputNumber
                    placeholder='评分值'
                    step={0.1}
                    max={assessment['point'] > 0 ? assessment['point'] : 0}
                    min={assessment['point'] > 0 ? 0 : assessment['point']}
                />
              </Form.Item>
            </>
        }

      </Form>
    </Modal>
  </>;
}

export default EvaluateDetailCreate;