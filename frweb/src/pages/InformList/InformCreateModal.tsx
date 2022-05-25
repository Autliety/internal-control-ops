import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Alert, Button, DatePicker, Divider, Form, Input, Modal, Select, Space } from 'antd';
import SelectUser from '../../components/SelectUser';
import { useHttp } from '../../utils/request';
import { informType } from '../../utils/nameMap';

type Props = {
  isDisposal?: boolean,
  httpPath: string,
}

export default function InformCreateModal({ isDisposal, httpPath }: Props) {

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [type, setType] = React.useState<string>('');
  const { http } = useHttp(`/${httpPath}`, { method: 'POST', isManual: true })

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusOutlined/>添加</Button>
    <Modal
        visible={isVisible}
        destroyOnClose
        title='添加'
        width={1200}
        onCancel={() => setIsVisible(false)}
        onOk={() => {
          form
              .validateFields()
              .then(values => {
                http(null, null, values).then(() => setIsVisible(false));
                window.location.reload();
              })
              .catch(info => {
                console.log('Validate Failed:', info);
              });
        }}
    >
      <Form
          form={form}
          layout='vertical'
          name='inform'
      >
        <Form.Item name='type' label='类型'>
          <Select placeholder={'请选择'} onChange={v => setType(v)}>
            <Select.Option value={'COPY'} disabled={isDisposal}>抄告单</Select.Option>
            <Select.Option value={'OPINION'} disabled={isDisposal}>意见书</Select.Option>
            <Select.Option value={'ADVICE'} disabled={isDisposal}>建议书</Select.Option>
            <Select.Option value={'ANNOUNCE'}>第一种形态告知书</Select.Option>
          </Select>
        </Form.Item>
        <Divider/>
        <Alert type={'warning'} message={'所选类型'} description={type ? informType[type].name : '请先选择类型'}/><br/>

        <Space size={'large'}>
          <Form.Item name='fromDeptId' label='下达部门'>
            <SelectUser withUser={false}/>
          </Form.Item>

          <Form.Item name='endDate' label='下达时间'>
            <DatePicker/>
          </Form.Item>

          <Form.Item name='fromUserId' label='签发人'>
            <SelectUser withUser/>
          </Form.Item>

          <Form.Item name='destDeptId' label='接收对象'>
            <SelectUser withUser/>
          </Form.Item>
        </Space>

        <Form.List name='matter'>
          {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }}>
                      <Form.Item
                          {...restField}
                          label={'涉及部门'}
                          name={[name, 'deptId']}
                      >
                        <SelectUser withUser={false}/>
                      </Form.Item>
                      <Form.Item
                          {...restField}
                          label={'问题内容'}
                          name={[name, 'content']}
                          style={{ width: 700 }}
                      >
                        <Input placeholder='问题内容'/>
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

        <Form.Item
            label='选择审核人'
            name='approve'
            rules={[{ required: true, message: '请选择' }]}
        >
          <SelectUser withUser/>
        </Form.Item>
      </Form>
    </Modal>
  </>;
}