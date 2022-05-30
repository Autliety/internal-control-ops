import React from 'react';
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Alert, Button, DatePicker, Divider, Form, Input, Modal, Select, Space, Typography, Upload } from 'antd';
import { useHttp } from '../../utils/request';
import { informType } from '../../utils/nameMap';
import UserSelectCascader from '../../components/UserSelectCascader';

type Props = {
  isDisposal?: boolean,
  httpPath: string,
}

export default function InformCreateModal({ isDisposal }: Props) {

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [type, setType] = React.useState<string>('');
  const { http } = useHttp(`/inform`, { method: 'POST', isManual: true });

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusOutlined/>添加</Button>
    <Modal
        visible={isVisible}
        destroyOnClose
        title="添加"
        width={1200}
        onCancel={() => setIsVisible(false)}
        onOk={() => form.submit()}
    >
      <Form
          form={form}
          layout="vertical"
          name="inform"
          onFinish={values => {
            http(null, null, values)
            .then(() => window.location.reload());
          }}
      >
        <Form.Item name="type" label="类型">
          <Select placeholder={'请选择'} onChange={v => setType(v)}>
            <Select.Option value={'COPY'} disabled={isDisposal}>抄告单</Select.Option>
            <Select.Option value={'OPINION'} disabled={isDisposal}>意见书</Select.Option>
            <Select.Option value={'ADVICE'} disabled={isDisposal}>建议书</Select.Option>
            <Select.Option value={'ANNOUNCE'}>第一种形态告知书</Select.Option>
          </Select>
        </Form.Item>
        <Divider/>

        {!type ? <Alert type={'warning'} description={'请选择类型'}/> :

            <>
              <Typography.Title style={{ textAlign: 'center' }} level={4}>{informType[type].name}</Typography.Title>
              <br/>
              <Space size={'large'}>

                <Form.Item name="createDate" label="下达日期">
                  <DatePicker/>
                </Form.Item>

                <Form.Item name="fromUser" label="签发人">
                  <UserSelectCascader/>
                </Form.Item>

                <Form.Item name="destUser" label="接收对象">
                  <UserSelectCascader/>
                </Form.Item>
              </Space>

              <Form.Item label={'相关问题'}>
                <Form.List name="matter">
                  {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }}>
                              <Form.Item
                                  {...restField}
                                  label={'涉及部门/党员干部'}
                                  name={[name, 'user']}
                              >
                                <UserSelectCascader />
                              </Form.Item>
                              <Form.Item
                                  {...restField}
                                  label={'问题内容'}
                                  name={[name, 'content']}
                                  style={{ width: 700 }}
                              >
                                <Input.TextArea rows={1} placeholder="问题内容"/>
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
                          <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined/>}>
                            添加一项
                          </Button>
                        </Form.Item>
                      </>
                  )}
                </Form.List>
              </Form.Item>

              <Form.Item name="upload" label="附件上传">
                <Upload><Button icon={<UploadOutlined/>}>点击上传</Button></Upload>
              </Form.Item>
            </>
        }
      </Form>
    </Modal>
  </>;
}