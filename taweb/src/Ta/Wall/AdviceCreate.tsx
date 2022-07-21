import React from 'react';
import { BetaSchemaForm } from '@ant-design/pro-form';
import { Button, DatePicker, Select } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { ProColumns } from '@ant-design/pro-table';
import moment from 'moment';
import UserSelectCascader from '../../components/UserSelectCascader';
import { useHttp } from '../../utils/request';

export default function AdviceCreate() {

  const { http } = useHttp('/advice', { method: 'POST', isManual: true });

  const [type, setType] = React.useState('complaint');

  const adviceColumns: ProColumns[] = [
        {
          title: type === 'complaint' ? '投诉时间' : '建议时间',
          dataIndex: 'complaintTime',
          renderFormItem: () => <DatePicker value={moment()} disabled format={'YYYY-MM-DD HH:mm'}/>,
          renderText: t => moment(t).format('YYYY-MM-DD HH:mm'),
        },
        { title: '标题', dataIndex: 'title', valueType: 'text' },
        { title: '建议内容', dataIndex: 'content', valueType: 'textarea' },
        {
          title: type === 'complaint' ? '投诉人' : '建议人',
          dataIndex: 'name',
          renderText: u => u?.name,
          renderFormItem: () => <UserSelectCascader/>
        },
      ],
      columns: ProColumns[] = [
        {
          title: '类型',
          dataIndex: 'type',
          renderFormItem: () => <Select value={type} onChange={v => setType(v)}>
            <Select.Option value={'complaint'}>投诉</Select.Option>
            <Select.Option value={'advice'}>建议</Select.Option>
          </Select>,
        },
        type === 'complaint' && {
          title: '',
          dataIndex: 'note',
          renderFormItem: () => <div>
            <p>1、请保证所投诉内容与事实一致，若您因故意捏造和歪曲事实而造成的一切后果，将承担相应的法律责任</p>
            <p>2、请详细填写投诉内容</p>
            <p>3、本平台将及时处理您的有效投诉内容，对投诉人和投诉内容予以严格保密</p>
          </div>
        }
      ]
  return <>
    <BetaSchemaForm
        title={'提出建议'}
        width={1000}
        layoutType={'ModalForm'}
        trigger={<Button type={'primary'}><PlusSquareOutlined/>新建建议</Button>}

        columns={type === 'complaint' ? columns.concat(adviceColumns) : [columns[0]].concat(adviceColumns)}
        onFinish={async v => http(null, null, {
          ...v,
          type: type,
          complaintTime: moment()
        }).then(() => window.location.reload())}
    />

  </>;
}