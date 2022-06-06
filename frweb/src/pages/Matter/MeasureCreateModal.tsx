import React from 'react';
import ProForm, { ModalForm, ProFormDatePicker, ProFormSelect, ProFormTextArea } from '@ant-design/pro-form';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Typography } from 'antd';
import { useHttp } from '../../utils/request';
import { useAuth } from '../../utils/auth';

export default function MeasureCreateModal({ measures = [], matter }) {

  const { http } = useHttp(`/measure`, { method: 'POST', isManual: true });
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [radioValue, setRadioValue] = React.useState('1');

  const { user } = useAuth();
  const { state } = useHttp(`/user?deptId=${user?.department?.id}`, { initState: [] });

  return <>
    <Button
        type={'primary'}
        disabled={user.id !== matter.user?.id}
        onClick={() => setIsVisible(true)}
    ><UnorderedListOutlined/>添加措施</Button>

    <ModalForm
        title={<Typography.Title style={{ textAlign: 'center' }} level={4}>添加措施</Typography.Title>}
        visible={isVisible}
        onFinish={async (v) => {
          http(null, null, { ...v, matter }).then(() => window.location.reload());
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
            ? <ProFormTextArea width="xl" name="content" label="工作措施" placeholder="措施内容"/>
            : <ProFormSelect
                width="xl"
                options={measures.map(m => ({ label: m.content, value: m.content }))}
                name="content"
                label="请选择"
                tooltip={'引用已存在措施'}
            />
      }
      <ProForm.Group>
        <ProFormSelect
            width="sm"
            initialValue={1}
            options={[{ value: 1, label: user.department.name }]}
            name="deptId"
            disabled
            label="责任单位"
        />
        <ProFormSelect
            width="sm"
            options={state.map((item: any) => ({ value: item.id, label: item.name }))}
            name={['user', 'id']}
            label="负责人"
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormDatePicker width="sm" name="startDate" label="开始时间"/>
        <ProFormDatePicker width="sm" name="endDate" label="结束时间"/>
      </ProForm.Group>

    </ModalForm>
  </>;
}