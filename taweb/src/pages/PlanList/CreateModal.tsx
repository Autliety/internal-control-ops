import React from 'react';
import { useHttp } from '../../utils/request';
import { Alert, Button, Modal, Select } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';

export default function CreateModal() {

  const { state: assessments } = useHttp('/assessment', { initState: [] });

  const [isVisible, setIsVisible] = React.useState(false);

  return <>

    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusSquareOutlined />新增</Button>

    <Modal
        title={'未作计划指标'}
        closable
        visible={isVisible}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
    >
      <Alert showIcon message={'请选择一项指标进行计划制定'} type={'warning'} /><br />
      <Select
          showSearch
          placeholder={'请选择'}
          style={{ width: 200 }}
      >
        {
          assessments.filter(v => v.children === null || v.children.length === 0)
          .map((item, index) => <Select.Option key={index} value={item.name}>
            {item.name}
          </Select.Option>)
        }
      </Select>
    </Modal>
  </>;
}