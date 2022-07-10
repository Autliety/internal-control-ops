import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Alert, Button, DatePicker, Divider, Form, Input, Modal, Select, Space, Typography } from 'antd';
import { useHttp } from '../../utils/request';
import { informType } from '../../utils/nameMapFr';
import UserSelectCascader from '../../components/UserSelectCascader';
import FileUpload from '../../components/FileUpload';

type Props = {
  isDisposal?: boolean,
}

export default function InformCreateModal({ isDisposal }: Props) {

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [type, setType] = React.useState<string>('');
  const { http } = useHttp('/inform', { method: 'POST', isManual: true });

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusOutlined/>添加</Button>
    <Modal
        visible={isVisible}
        destroyOnClose
        title={'添加'}
        width={1200}
        onCancel={() => setIsVisible(false)}
        onOk={() => form.submit()}
    >
      <Form
          form={form}
          layout="vertical"
          name="inform"
          onFinish={values => {
            http(null, null, { ...values, matter: [{ ...values.matter, endDate: values.endDate }] })
            .then(d => console.log(d))
            .then(() => window.location.reload());
          }}
      >
        <Form.Item name="type" label="类型" rules={[{ required: true, message: '此项必填' }]}>
          <Select placeholder={'请选择'} onChange={v => setType(v)}>
            {isDisposal ?
                <>
                  <Select.Option>通报批评</Select.Option>
                  <Select.Option>责令检查</Select.Option>
                  <Select.Option>批评教育</Select.Option>
                  <Select.Option>提醒谈话</Select.Option>
                </>
                :
                <>
                  <Select.Option value={'COPY'}>抄告单</Select.Option>
                  <Select.Option value={'OPINION'}>意见书</Select.Option>
                  <Select.Option value={'ADVICE'}>建议书</Select.Option>
                  <Select.Option value={'ANNOUNCE'}>第一种形态告知书</Select.Option>
                </>
            }
          </Select>
        </Form.Item>
        <Divider/>

        {!type ? <Alert type={'warning'} description={'请选择类型'}/> :

            <>
              <Typography.Title style={{ textAlign: 'center' }} level={4}>{informType[type].name}</Typography.Title>
              <br/>
              <Space size={'large'}>

                <Form.Item name="endDate" label="截止日期" rules={[{ required: true, message: '此项必填' }]}>
                  <DatePicker/>
                </Form.Item>

                <Form.Item name="fromUser" label="签发人" rules={[{ required: true, message: '此项必填' }]}>
                  <UserSelectCascader/>
                </Form.Item>

                <Form.Item name="destUser" label="接收对象" rules={[{ required: true, message: '此项必填' }]}>
                  <UserSelectCascader/>
                </Form.Item>
              </Space>

              <Form.Item name="content" label="问题概述">
                <Input.TextArea placeholder="问题内容" rows={4}/>
              </Form.Item>

              <Form.Item label={'相关措施'}>
                <Form.List name={['matter', 'measure']}>
                  {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }}>
                              <Form.Item
                                  {...restField}
                                  label={'措施内容'}
                                  name={[name, 'content']}
                                  style={{ width: 900 }}
                              >
                                <Input.TextArea rows={2} placeholder="措施内容"/>
                              </Form.Item>
                              <MinusCircleOutlined onClick={() => remove(name)}/>
                            </Space>
                        ))}
                        <Form.Item>
                          <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined/>}>
                            添加一项
                          </Button>
                        </Form.Item>
                      </>
                  )}
                </Form.List>
              </Form.Item>

              <Form.Item name="attach" label="附件上传">
                <FileUpload isInEdit/>
              </Form.Item>
            </>
        }
      </Form>
    </Modal>
  </>;
}