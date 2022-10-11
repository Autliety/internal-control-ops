import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Divider, Radio, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';
import TalkingCreateModal from './TalkingCreateModal';

export const talkingColumns: ProColumns[] = [
  { title: '序号', dataIndex: 'id', width: 80, hideInDescriptions: true },
  { title: '谈话指向', dataIndex: 'content1', hideInTable: true },
  { title: '谈话类型', dataIndex: 'content2' },
  {
    title: '谈话时间',
    dataIndex: 'time1',
    valueType: 'date',
    renderText: t => moment(t).format('YYYY-MM-DD'),
  },
  { title: '谈话地点', dataIndex: 'content3' },
  { title: '谈话记录人', dataIndex: ['requestUser', 'name'], hideInTable: true, hideInForm: true },
  { title: '谈话发起人', dataIndex: 'singleUser1', renderText: u => u?.name },
  { title: '谈话对象', dataIndex: 'destUser', renderText: u => u?.name },
  { title: '谈话事由', dataIndex: 'content4' },
  { title: '谈话内容', dataIndex: 'longContent1', hideInTable: true },
  { title: '谈话对象表态', dataIndex: 'content5', hideInTable: true },
];

function TalkingList() {

  const { state } = useHttp('/ordinal/talking', { initState: [] });
  const navigate = useNavigate();

  const [type, setType] = React.useState<number>(1);

  return <PageContainer
      extra={
        <Space>
          <TalkingCreateModal />
        </Space>
      }
  >
    <Radio.Group onChange={e => setType(e.target.value)} value={type}>
      <Radio value={1}>“5”谈话</Radio>
      <Radio value={2}>“1”谈话</Radio>
    </Radio.Group>
    <Divider />
    <BaseEditableTable
        columns={talkingColumns.concat({
          title: '详情',
          dataIndex: 'operation',
          width: 100,
          align: 'center',
          render: (_, record: any) => <Tooltip title={'详情'}>
            <Button
                type={'primary'}
                icon={<FileTextOutlined />}
                size={'small'}
                onClick={() => navigate(`/fr/lz/talking/${record.id}`)}
            />
          </Tooltip>,
        })}
        value={type === 1 ? state.filter(item => !item.content6) : state.filter(item => item.content6)}
    />
  </PageContainer>;
}

export default TalkingList;