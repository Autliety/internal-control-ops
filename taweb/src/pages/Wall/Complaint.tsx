import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Col, DatePicker, Divider, Form, Input, Modal, Row, Select } from 'antd';
import moment from 'moment';

export default function Complaint() {

  const [type, setType] = React.useState<string>('complaint');

  const info = () => {
    Modal.info({
      title: '须知详情',
      icon: null,
      width: 800,
      okText: '确定',
      content: (
          <div>
            <Divider/>
            <p>1、请保证所投诉内容与事实一致，若您因故意捏造和歪曲事实而造成的一切后果，将承担相应的法律责任</p>
            <p>2、请详细填写投诉内容</p>
            <p>3、本平台将及时处理您的有效投诉内容，对投诉人和投诉内容予以严格保密</p>
          </div>
      ),
    });
  };

  return <PageContainer>

    <div className={'content'}>
      <Row>
        <Col span={6}/>
        <Col span={12} style={{ marginTop: 30 }}>
          <Form
              name='basic'
              labelCol={{ span: 2 }}
              wrapperCol={{ span: 20 }}
              initialValues={{ type: 'complaint', date: moment() }}
              onFinish={v => console.log(v)}
          >

            <Form.Item label='类别' name='type'>
              <Select value={type} onChange={v => setType(v)}>
                <Select.Option value={'complaint'}>投诉</Select.Option>
                <Select.Option value={'advice'}>建议</Select.Option>
              </Select>
            </Form.Item>

            {
                type === 'complaint' && <Form.Item
                    label={'投诉须知'}
                >
                  <Button type={'link'} onClick={info}>查看</Button>
                </Form.Item>
            }

            <Form.Item
                label='标题'
                name='title'
                rules={[{ required: true, message: '必填项' }]}
            >
              <Input placeholder={`简述${type === 'complaint' ? '投诉' : '意见'}内容`}/>
            </Form.Item>

            <Form.Item label={`${type === 'complaint' ? '投诉' : '意见'}人`} name='user'>
              <Input placeholder={'姓名'}/>
            </Form.Item>

            <Form.Item label='反馈时间' name='date'>
              <DatePicker disabled format='YYYY-MM-DD'/>
            </Form.Item>

            <Form.Item
                label='内容'
                name='content'
                rules={[{ required: true, message: '必填项' }]}
            >
              <Input.TextArea placeholder={`${type === 'complaint' ? '投诉' : '意见'}内容`} rows={3} showCount/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 2 }}>
              <Button type='primary' htmlType='submit'>
                提交
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={6}/>
      </Row>

    </div>
  </PageContainer>;
}

