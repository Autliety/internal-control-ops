import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ClubCreateModal from './ClubCreateModal';
import { useHttp } from '../../utils/request';
import BaseEditableTable from '../../components/BaseEditableTable';
import FileUpload from '../../components/FileUpload';

export const clubColumns: ProColumns[] = [
  {
    title: '生活会类别', dataIndex: 'content1', valueType: 'select', fieldProps: {
      options: [
        '区（镇）领导班子民主生活会',
        '村（社区）班子组织生活会',
      ],
    },
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '召开情形', dataIndex: 'content2', valueType: 'select', fieldProps: {
      options: [
        '根据县委安排开展/接受巡察或所辖区域',
        '单位遇到重要或普遍性问题',
        '根据区（镇）党委安排开展/接受巡察或所辖区域',
        '单位遇到重要或普遍性问题',
      ],
    },
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  { title: '生活会主题', dataIndex: 'content3', formItemProps: { rules: [{ required: true, message: '此项必填' }] } },
  {
    title: '召开时间',
    dataIndex: 'time1',
    valueType: 'date',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  { title: '上级派员', dataIndex: 'content4' },
  {
    title: '指导情况',
    dataIndex: 'longContent1',
    valueType: 'textarea',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  { title: '问题清单提交情况', dataIndex: 'submitCase' },
  { title: '督导组会前指导', dataIndex: 'content5' },
  { title: '督导组会中检查', dataIndex: 'content6' },
  { title: '督导组会后评估', dataIndex: 'content7' },
  { title: '整改情况', dataIndex: 'longContent2', valueType: 'textarea' },
  { title: '结果运用', dataIndex: 'longContent3', valueType: 'textarea' },
  { title: '上传附件', dataIndex: 'attach', renderFormItem: () => <FileUpload isInEdit/>, hideInDescriptions: true },
];


function ClubList() {

  const navigate = useNavigate();
  const { state } = useHttp('/ordinal/club', { initState: [] });

  return <PageContainer
      extra={
        <Space>
          <ClubCreateModal isFirstEdit/>
        </Space>
      }
  >
    <BaseEditableTable
        columns={clubColumns.slice(0, 4).concat({
          title: '详情',
          hideInSearch: true,
          dataIndex: 'operation',
          render: (_, record: any) => <Space>
            <Tooltip title={'查看详情'}>
              <Button
                  type={'primary'}
                  icon={<FileTextOutlined/>}
                  size={'small'}
                  onClick={() => navigate(`/fr/lz/club/${record.id}`)}
              />
            </Tooltip>
            <ClubCreateModal isFirstEdit={false} id={record.id}/>
          </Space>,
          fixed: 'right',
          width: 120,
          align: 'center',
        })}
        value={state}
    />
  </PageContainer>;
}

export default ClubList;