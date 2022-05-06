import React from 'react';
import ProForm, {
  ModalForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Button, Divider, Radio } from 'antd';
import { useHttp } from '../../utils/request';

export default function MeasureCreateModal({ measures, matterId }) {

  const { state } = useHttp(`/user?deptId=1`, { initState: [] });
  const { http } = useHttp(`/measure`, { method: 'POST', isManual: true });
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [radioValue, setRadioValue] = React.useState('1');

  function getExistMeasure(data, value, label) {
    const newData = [];
    data.forEach((item: any) => newData.push({ value: item[value], label: item[label] }));
    return newData;
  }

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><UnorderedListOutlined/>添加措施</Button>
    <ModalForm
        title='添加措施'
        visible={isVisible}
        onFinish={async (v) => {
          http(null, null, [{ ...v, matterId: matterId }]).then(() => window.location.reload());
          return true;
        }}
        modalProps={{
          destroyOnClose: true,
        }}
        onVisibleChange={setIsVisible}
        initialValues={{ deptId: 1 }}
    >

      <Radio.Group onChange={e => setRadioValue(e.target.value)} value={radioValue}>
        <Radio value={'1'}>新建措施</Radio>
        <Radio value={'2'}>引用已有措施</Radio>
      </Radio.Group>
      <Divider/>

      {
        radioValue === '1'
            ? <ProFormTextArea width='xl' name='content' label='工作措施' placeholder='措施内容:06'/>
            : <ProFormSelect
                width='xl'
                options={getExistMeasure(measures, 'content', 'content')}
                name='content'
                label='请选择'
                tooltip={'引用已存在措施'}
            />
      }
      <ProFormText width='xl' name='code' label='措施编号' placeholder='措施编号'/>
      <ProForm.Group>
        <ProFormSelect
            width='sm'
            initialValue={{ value: '1', label: '领导班子' }}
            options={[]}
            name='deptId'
            disabled
            label='责任单位'
        />
        <ProFormSelect
            width='sm'
            options={getExistMeasure(state, 'id', 'name')}
            name='userId'
            label='责任人'
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormDatePicker width='sm' name='startDate' label='开始时间'/>
        <ProFormDatePicker width='sm' name='endDate' label='结束时间'/>
      </ProForm.Group>
    </ModalForm>
  </>;
}