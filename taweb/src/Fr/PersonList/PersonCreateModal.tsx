import React from 'react';
import { Button, Cascader, DatePicker, Form, Input, Modal, Select, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserSelectCascader from '../../components/UserSelectCascader';
import { useHttp } from '../../utils/request';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/auth';

function PersonCreateModal() {
  const [form] = Form.useForm();

  const [isVisible, setIsVisible] = React.useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();
  const { http } = useHttp('/ordinal/personal', { method: 'POST', isManual: true });

  const typeOptions = [
    {
      label: '涉及本人重大事项',
      value: '涉及本人重大事项',
      children: [
        { label: '婚姻状况、实际居住地址、联系方式等发生变化', value: '婚姻状况、实际居住地址、联系方式等发生变化' },
        { label: '因私出国（境）及在国（境）外活动情况', value: '因私出国（境）及在国（境）外活动情况' },
        { label: '出现严重病情、伤情及生病住院等情况', value: '出现严重病情、伤情及生病住院等情况' },
        { label: '本人或以直系亲属名义操办婚丧喜庆事宜情况', value: '本人或以直系亲属名义操办婚丧喜庆事宜情况' },
        { label: '涉及民事诉讼、行政诉讼、刑事诉讼等情况', value: '涉及民事诉讼、行政诉讼、刑事诉讼等情况' },
        {
          label: '正常经济收入以外的重大收入情况，包括继承遗产、接受赠予、出售房产等情况',
          value: '正常经济收入以外的重大收入情况，包括继承遗产、接受赠予、出售房产等情况',
        },
        {
          label: '家庭大额投资、消费支出等情况，包括购置房产、替他人担保以及在国（境）外存款投资等情况',
          value: '家庭大额投资、消费支出等情况，包括购置房产、替他人担保以及在国（境）外存款投资等情况',
        },
        {
          label: '参与民间借贷数额50万元以上，或者数额在10万元以上且持续时间超过1年等情况',
          value: '参与民间借贷数额50万元以上，或者数额在10万元以上且持续时间超过1年等情况',
        },
        { label: '出现与本人相关的任职回避和工作回避情况', value: '出现与本人相关的任职回避和工作回避情况' },
        { label: '认为需要报告的其他重大事项', value: '认为需要报告的其他重大事项' },
      ],
    },
    {
      label: '涉及家庭成员重大事项',
      value: 2,
      children: [
        {
          label: '配偶、子女移居国（境）外，或者前往国（境）外工作、生活、就学等情况',
          value: '配偶、子女移居国（境）外，或者前往国（境）外工作、生活、就学等情况',
        },
        {
          label: '子女与外国人、无国籍人、港澳以及台湾居民通婚等情况',
          value: '子女与外国人、无国籍人、港澳以及台湾居民通婚等情况 ',
        },
        {
          label: '配偶、子女及其配偶从业情况发生变化，包括工作单位或职务发生变动、新受聘担任企业或其他市场主体高级职务等情况',
          value: '配偶、子女及其配偶从业情况发生变化，包括工作单位或职务发生变动、新受聘担任企业或其他市场主体高级职务等情况',
        },
        {
          label: '配偶、子女及其配偶新注册或投资入股企业，近亲属在工作辖区或者分管领域经商办企业等情况',
          value: '配偶、子女及其配偶新注册或投资入股企业，近亲属在工作辖区或者分管领域经商办企业等情况',
        },
        {
          label: '配偶、子女及其配偶正常经济收入以外的重大收入情况，包括继承遗产、接受赠予、出售房产等情况',
          value: '配偶、子女及其配偶正常经济收入以外的重大收入情况，包括继承遗产、接受赠予、出售房产等情况',
        },
        {
          label: '配偶、子女及其配偶参与民间借贷数额50万元以上，或者数额在10万元以上且持续时间超过1年等情况',
          value: '配偶、子女及其配偶参与民间借贷数额50万元以上，或者数额在10万元以上且持续时间超过1年等情况',
        },
        {
          label: `配偶、子女及其配偶涉及民事诉讼、行政诉讼、刑事诉讼等情况，或被纪检监察机关、检察机关、公安机关、审判机关等...`,
          value: `配偶、子女及其配偶涉及民事诉讼、行政诉讼、刑事诉讼等情况，或被纪检监察机关、检察机关、公安机关、审判机关等立案审查、行政处罚、追究刑事责任等情况`,
        },
        {
          label: '配偶、子女及其配偶录用或调入党政机关、事业单位、国有或国有控股企业工作等情况',
          value: '配偶、子女及其配偶录用或调入党政机关事业单位、国有或国有控股企业工作等情况',
        },
        {
          label: '配偶、子女及其配偶提拔为党政机关、事业单位副科级（或同等职级）、国有或国有控股企业中层副职及以上领导职务',
          value: '配偶、子女及其配偶提拔为党政机关、事业单位副科级（或同等职级）、国有或国有控股企业中层副职及以上领导职务',
        },
        { label: '认为需要报告的其他重大事项', value: '认为需要报告的其他重大事项' },
      ],
    },
  ];

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
        <Form.Item name='content1' label='报告人类别'>
          <Select placeholder={'请选择'}>
            <Select.Option value='领导干部'>领导干部</Select.Option>
            <Select.Option value='中层干部'>中层干部</Select.Option>
            <Select.Option value='村社书记'>村社书记</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='content2' label='报告类别'>
          <Cascader
              options={typeOptions}
              placeholder='请选择'
              // dropdownMenuColumnStyle={{ textOverflow: 'ellipsis', width: 400 }}
          />
        </Form.Item>

        <Form.Item name='longContent1' label='报告内容简述'>
          <Input.TextArea placeholder='内容简述' rows={4}/>
        </Form.Item>

        <Form.Item name='time1' label='报告时间'>
          <DatePicker/>
        </Form.Item>

        <Form.Item name='content3' label='内部公开情况'>
          <Select placeholder={'请选择'}>
            <Select.Option value='不公开'>不公开</Select.Option>
            <Select.Option value='任职公开'>任职公开</Select.Option>
            <Select.Option value='年度民主（组织）生活会书面公开'>年度民主（组织）生活会书面公开</Select.Option>
          </Select>
        </Form.Item>
      </Form>

    </Modal>
  </>;
}

export default PersonCreateModal;