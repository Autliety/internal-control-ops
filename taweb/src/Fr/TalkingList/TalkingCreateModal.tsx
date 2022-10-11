import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import moment from 'moment';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useHttp } from '../../utils/request';
import UserSelectCascader from '../../components/UserSelectCascader';
import FileUpload from '../../components/FileUpload';

export default function TalkingCreateModal() {

  const [form] = Form.useForm();
  const options = {
        1: '区（镇）“一把手”同村（社）、基层站所（视情）“一把手”谈话',
        2: '区（镇）纪委负责人同村（社）、基层站所“一把手”谈话',
        3: '区（镇）组织部门负责人同村（社）、基层站所“一把手”谈话',
        4: '区（镇）班子成员同分管基层站所“一把手”谈话',
        5: '区（镇）、村（社）“一把手”同班子成员谈话',
        6: '村（社）、基层站所“一把手”申请向上级党组织负责人汇报',
      },
      types = {
        1: ['日常谈话', '任职谈话', '监督谈话'],
        2: ['日常谈话', '任职（廉政）谈话', '集体谈话'],
        3: ['日常谈话', '勉励谈话', '监督谈话'],
        4: ['日常谈话', '任职谈话（受委托）', '监督谈话（受委托）'],
        5: ['日常谈话', '监督谈话'],
        6: ['双向互谈'],
      },
      label1 = { 6: '上级党组织安排互谈人' },
      label2 = { 6: '申请谈话人' },
      content5 = { 6: true }

  const [selectedOption, setSelectedOption] = React.useState<number>(null);
  const [selectedType, setSelectedType] = React.useState<number>(null);

  // modal
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/talking', { method: 'POST', isManual: true });

  const userFilter1 = {
    1: (v: any) => (v.id === 2),
    2: (v: any) => (v.id === 7),
    3: (v: any) => (v.id === 8),
    4: (v: any) => (v.department?.id === 3),
    5: (v: any) => (v.id === 2 || (v.department?.id > 21 && v.privilege === 'FIRST')),
    6: (v: any) => (v.privilege === 'FIRST' && v.id !== 2),
  }

  const userFilter2 = {
    1: (v: any) => (v.privilege === 'FIRST' && v.id !== 2),
    2: (v: any) => (v.privilege === 'FIRST' && v.id !== 2),
    3: (v: any) => (v.privilege === 'FIRST' && v.id !== 2),
    4: (v: any) => (v.department?.id < 21 && v.id !== 2),
    5: (v: any) => (v.department?.id === 3),
    6: (v: any) => (v.id === 2 || v.department?.id === 3),
  }

  return <>

    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusSquareOutlined />新增</Button>
    <Modal
        visible={isVisible}
        title={'“5+1”谈话新增'}
        destroyOnClose
        width={800}
        onCancel={() => setIsVisible(false)}
        onOk={() => {
          form
              .validateFields()
              .then(values => {
                form.resetFields();
                if (values.time1) {
                  values.time1 = moment(values.time1).valueOf();
                }
                if (values.content1) {
                  values.content6 = values.content1;
                  values.content1 = options[values.content1];
                }
                http(null, null, values).then(res => navigate('/fr/lz/talking/' + res.id));
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
        <Form.Item
            label={'谈话指向'}
            name={'content1'}
        >
          <Select
              placeholder={'请选择'}
              onChange={v => {
                setSelectedOption(v);
                setSelectedType(v);
              }}
          >
            {
              Object.keys(options)
                  ?.map((item, index) => <Select.Option
                      key={index}
                      value={item}
                  >
                    {options[item]}
                  </Select.Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item label='谈话类型' name='content2'>
          <Select placeholder={'请选择'}>
            {
              types[selectedType]?.map((item, index) => <Select.Option key={index} value={item}>{item}</Select.Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item label={'谈话时间'} name='time1'>
          <DatePicker />
        </Form.Item>
        <Form.Item label={'谈话地点'} name={'content3'}>
          <Input placeholder={'谈话地点'} />
        </Form.Item>
        <Form.Item label={label1[selectedOption] || '谈话实施人'} name={'singleUser1'}>
          <UserSelectCascader filter={userFilter1[selectedOption]} />
        </Form.Item>
        <Form.Item label={label2[selectedOption] || '谈话对象'} name={'destUser'}>
          <UserSelectCascader filter={userFilter2[selectedOption]} />
        </Form.Item>

        <Form.Item label={'谈话事由'} name={'content4'}>
          <Input placeholder={'谈话事由'} />
        </Form.Item>
        <Form.Item label={'谈话内容'} name={'longContent1'}>
          <Input.TextArea placeholder={'谈话内容'} rows={2} />
        </Form.Item>
        {
            content5[selectedOption] ||
            <Form.Item label={'谈话对象表态'} name={'content5'}>
              <Input placeholder={'谈话对象表态'} />
            </Form.Item>
        }
        <Form.Item label={'上传附件'} name={'attach'}>
          <FileUpload isInEdit />
        </Form.Item>
      </Form>
    </Modal>
  </>;
}