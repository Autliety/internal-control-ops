import React from 'react';
import ProForm, {
  ModalForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { Button, Divider, Radio } from 'antd';

export default function MeasureCreateModal() {

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [radioValue, setRadioValue] = React.useState('1');

  return <>
    <Button>添加措施</Button>
    <ModalForm
        title="添加措施"
        visible={isVisible}
        onFinish={async (v) => {
          console.log(v);
          return true;
        }}
        modalProps={{
          destroyOnClose: true,
        }}
        onVisibleChange={setIsVisible}
    >

      <Radio.Group onChange={e => setRadioValue(e.target.value)} value={radioValue}>
        <Radio value={'1'}>新建措施</Radio>
        <Radio value={'2'}>引用已有措施</Radio>
      </Radio.Group>
      <Divider />

      <ProForm.Group>
        <ProFormText width="md" name="principal" label="责任主体" initialValue={'领导班子'} disabled />
        <ProFormText width="md" name="matter" label="问题内容" initialValue={'请销假制度监管不严格'} disabled />
      </ProForm.Group>

      {
        radioValue === '1'
            ? <ProFormTextArea width="xl" name="measure" label="工作措施" placeholder="措施内容" />
            : <ProFormSelect
                width="xl"
                options={[
                  { value: '已有措施001', label: '已有措施001' },
                  { value: '已有措施002', label: '已有措施002' },
                ]}
                name="measure"
                label="请选择"
                tooltip={'引用已存在措施文字'}
            />
      }
      <ProForm.Group>
        <ProFormSelect
            width="sm"
            initialValue={{ value: '1', label: '领导班子' }}
            options={[]}
            name="principalOrg"
            disabled
            label="责任单位"
        />
        <ProFormSelect
            width="sm"
            options={[
              { value: '1', label: '王哲' },
              { value: '2', label: '张小龙' },
            ]}
            name="principalUser"
            label="责任人"
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormDatePicker width="sm" name="startTime" label="开始时间" />
        <ProFormDatePicker width="sm" name="endTime" label="结束时间" />
      </ProForm.Group>
    </ModalForm>
  </>;
}