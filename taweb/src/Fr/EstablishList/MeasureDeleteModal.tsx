import React from 'react';
import { Alert, Button, Checkbox, Form, Modal, Space } from 'antd';
import { MinusSquareOutlined } from '@ant-design/icons';
import { useHttp } from '../../utils/request';

type Props = {
  data: any,
  isDelete: boolean,
}

function MeasureDeleteModal({ data, isDelete }: Props) {

  const [form] = Form.useForm();

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [checkedItem, setCheckedItem] = React.useState<any>([]);

  const { http } = useHttp(`/matterform/0/matter/${data.id}`, { method: 'POST', isManual: true });

  return <div>
    <Button
        type={'dashed'}
        danger
        onClick={() => setIsVisible(true)}
        disabled={!isDelete}
    >
      <MinusSquareOutlined />
      措施删减
    </Button>
    <Modal
        title={'添加删减'}
        visible={isVisible}
        destroyOnClose
        width={1000}
        onCancel={() => setIsVisible(false)}
        onOk={() => http(null, null, {
          ...data,
          measure: data.measure?.filter(item => !(checkedItem.includes(item.id)))
        }).then(() => window.location.reload())}
    >
      <Form
          form={form}
          layout='vertical'
          name='form_in_modal'
      >
        <Alert type={'warning'} showIcon message={'请选择所要删除的措施'} />
        <br />
        <Space direction={'vertical'} size={'large'}>
          {
            data.measure?.map(item => <Checkbox
                value={item.id}
                key={item.id}
                onChange={e => setCheckedItem([...checkedItem, e.target.value])}
            >
              {item.content}
            </Checkbox>)
          }
        </Space>
      </Form>

    </Modal>

  </div>;
}

export default MeasureDeleteModal;