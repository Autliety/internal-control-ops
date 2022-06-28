import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';
import TalkingCreateModal from './TalkingCreateModal';
import UserSelectCascader from '../../components/UserSelectCascader';
import FileUpload from '../../components/FileUpload';

export const talkingColumns: ProColumns[] = [
  {
    title: '谈话指向', dataIndex: 'content1', valueType: 'select', fieldProps: {
      options: [
        '区（镇）“一把手”同村（社）、基层站所（视情）“一把手”谈话',
        '区（镇）纪委负责人同村（社）、基层站所“一把手”谈话',
        '区（镇）组织部门负责人同村（社）、基层站所“一把手”谈话',
        '区（镇）班子成员同分管基层站所“一把手”谈话',
        '区（镇）、村（社）“一把手”同班子成员谈话',
        // '村（社）、基层站所“一把手”申请向上级党组织负责人（：一把手、纪委负责人、组织部门负责人及分管班子成员）汇报',
      ],
    },
    hideInTable: true,
  },
  {
    title: '谈话类型', dataIndex: 'content2', valueType: 'select', fieldProps: {
      options: [
        '日常谈话',
        '任职（廉政）谈话',
        '监督谈话',
        '集体谈话',
        '勉励谈话',
        // '双向互谈',
      ],
    },
  },
  { title: '谈话时间', dataIndex: 'time1', valueType: 'dateTime' },
  { title: '谈话地点', dataIndex: 'content3' },
  { title: '谈话记录人', dataIndex: ['requestUser', 'name'], hideInTable: true, hideInForm: true },
  { title: '谈话发起人', dataIndex: 'singleUser1', renderText: u => u?.name, renderFormItem: () => <UserSelectCascader/> },
  { title: '谈话对象', dataIndex: 'destUser', renderText: u => u?.name, renderFormItem: () => <UserSelectCascader/> },
  { title: '谈话事由', dataIndex: 'content4' },
  { title: '谈话内容', dataIndex: 'longContent1' , valueType: 'textarea', hideInTable: true},
  { title: '谈话对象表态', dataIndex: 'content5', hideInTable: true },
  { title: '上传附件', dataIndex: 'attach', renderFormItem: () => <FileUpload isInEdit/>, hideInTable: true, hideInDescriptions: true },
];

function TalkingList() {

  const { state } = useHttp('/ordinal/talking', { initState: [] });
  const navigate = useNavigate();

  return <PageContainer
      extra={
        <Space>
          <TalkingCreateModal/>
        </Space>
      }
  >
    <BaseEditableTable
        columns={talkingColumns.concat({
          title: '详情',
          dataIndex: 'operation',
          width: 100,
          align: 'center',
          render: (_, record: any) => <Tooltip title={'详情'}>
            <Button
                type={'primary'}
                icon={<FileTextOutlined/>}
                size={'small'}
                onClick={() => navigate(`/fr/lz/talking/${record.id}`)}
            />
          </Tooltip>,
        })}
        value={state}
    />
  </PageContainer>;
}

export default TalkingList;