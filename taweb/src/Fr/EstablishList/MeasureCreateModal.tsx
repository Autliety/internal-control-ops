import React from 'react';
import { Button, Descriptions, Form, Input, Modal } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useHttp } from '../../utils/request';

type Props = {
  data: any,
  isAdd: boolean,
}

function MeasureCreateModal({ data, isAdd }: Props) {


  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [form] = Form.useForm();

  const { http } = useHttp(`/matterform/0/matter/${data.id}`, { method: 'POST', isManual: true });

  return <div>
    <Button type={'primary'} onClick={() => setIsVisible(true)} disabled={!isAdd}><PlusSquareOutlined />措施新增</Button>
    <Modal
        title={'添加措施'}
        visible={isVisible}
        destroyOnClose
        width={800}
        onCancel={() => setIsVisible(false)}
        onOk={() => {
          form
              .validateFields()
              .then(values => {
                form.resetFields();
                http(null, null, {
                  ...data,
                  measure: data.measure ? [...(data.measure), values] : [values]
                }).then(() => window.location.reload())
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
      >
        <Descriptions column={1} bordered={false} layout={'vertical'}>
          <Descriptions.Item label={'【问题内容】'}>{data.content}</Descriptions.Item>
        </Descriptions>

        <Form.Item name='content' label='措施内容'>
          <Input.TextArea rows={4} placeholder={'措施内容'} />
        </Form.Item>
      </Form>
    </Modal>

  </div>;
}

export default MeasureCreateModal;