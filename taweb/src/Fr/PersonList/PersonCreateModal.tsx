import React from 'react';
import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserSelectCascader from '../../components/UserSelectCascader';
import { useHttp } from '../../utils/request';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/auth';
import FileUpload from '../../components/FileUpload';

function PersonCreateModal() {
  const [form] = Form.useForm();

  const [isVisible, setIsVisible] = React.useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/personal', { method: 'POST', isManual: true });
  const { state: temps } = useHttp('/attach?id=20&id=21', { initState: []});

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusOutlined/>添加</Button>
    <Modal
        title={'事项报告添加'}
        visible={isVisible}
        width={800}
        onCancel={() => setIsVisible(false)}
        onOk={() => {
          form
              .validateFields()
              .then(values => {
                form.resetFields();
                values.time1 = moment(values.time1).valueOf();
                values.content2 = values.content2.join('/');
                http(null, null, values).then(data => navigate(`/fr/lz/person/${data.id}`));
              })
              .catch(info => {
                console.log('Validate Failed:', info);
              });
        }}
    >
      <div style={{ marginBottom: 20 }}>
        <p>报告人</p>
        <UserSelectCascader value={{ id: user.id }} disabled/>
      </div>
      <Form
          form={form}
          layout='vertical'
          name='form_in_modal'
      >
        <Form.Item name='content1' label='报告人类别' rules={[{ required: true, message: '此项必填' }]}>
          <Select placeholder={'请选择'}>
            <Select.Option value='领导干部'>领导干部</Select.Option>
            <Select.Option value='中层干部'>中层干部</Select.Option>
            <Select.Option value='村社书记'>村社书记</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='content2' label='报告类别' rules={[{ required: true, message: '此项必填' }]}>
          <Select placeholder={'请选择'}>
            <Select.Option value='即时报告'>即时报告</Select.Option>
            <Select.Option value='年度报告'>年度报告</Select.Option>
            <Select.Option value='个人有关事项集中报告'>个人有关事项集中报告</Select.Option>
            <Select.Option value='个人其它重要事项报告'>个人其它重要事项报告</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='longContent1' label='报告内容简述' rules={[{ required: true, message: '此项必填' }]}>
          <Input.TextArea placeholder='内容简述' rows={4}/>
        </Form.Item>

        <Form.Item name='time1' label='报告时间' rules={[{ required: true, message: '此项必填' }]}>
          <DatePicker/>
        </Form.Item>

        <Form.Item name='content3' label='内部公开情况' rules={[{ required: true, message: '此项必填' }]}>
          <Select placeholder={'请选择'}>
            <Select.Option value='不公开'>不公开</Select.Option>
            <Select.Option value='任职公开'>任职公开</Select.Option>
            <Select.Option value='年度民主（组织）生活会书面公开'>年度民主（组织）生活会书面公开</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label='相关资料' tooltip='点击下载相关资料,查看具体制度要求'>
          <FileUpload isInEdit={false} value={temps}/>
        </Form.Item>

        <Form.Item name='attach' label={'上传附件'}>
          <FileUpload isInEdit/>
        </Form.Item>
      </Form>

    </Modal>
  </>;
}

export default PersonCreateModal;