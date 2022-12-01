import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Input, Space, Tag, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';
import MotionCreateModal from './MotionCreateModal';
import UserSelectCascader from '../../components/UserSelectCascader';
import FileUpload from '../../components/FileUpload';
import AttendeeSelectCard from '../MeetingList/AttendeeSelectCard';
import { useAuth } from '../../utils/auth';

export const motionColumns: (ProColumns | any)[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 50,
    hideInDescriptions: true,
    hideInForm: true,
    onStep: 0,
  },
  {
    title: '动议人',
    dataIndex: 'requestUser',
    renderText: u => u?.name,
    renderFormItem: () => <UserSelectCascader isSelfOnly disabled />,
    onStep: 0,
  },
  { title: '动议时间', dataIndex: 'requestDate', valueType: 'date', onStep: 0 },
  { title: '动议情形', dataIndex: 'requestTitle', onStep: 0 },
  { title: '动议事项内容', dataIndex: 'requestContent', valueType: 'textarea', hideInTable: true, onStep: 0 },
  {
    dataIndex: 'requestAttach',
    title: '相关附件',
    render: () => <FileUpload />,
    renderFormItem: () => <FileUpload isInEdit />,
    hideInTable: true,
    onStep: 0,
  },
  {
    title: '动议审批',
    dataIndex: 'approvalApproveUser',
    renderText: u => u?.name,
    renderFormItem: () => <UserSelectCascader value={{ id: 2 }} disabled />,
    hideInDescriptions: true,
    hideInTable: true,
    onStep: 0,
  },
  {
    title: '参加人员',
    dataIndex: 'decisionUser',
    renderText: u => u?.map(t => <Tag color={'processing'} key={t?.id} style={{ marginBottom: 5 }}>{t?.name}</Tag>),
    renderFormItem: () => <AttendeeSelectCard />,
    onStep: 1,
    hideInTable: true,
  },
  { title: '决策时间', dataIndex: 'decisionDate', valueType: 'date', onStep: 1 },
  {
    title: '研究交办事项',
    dataIndex: 'decisionExecuteResult',
    renderFormItem: () => <BaseEditableTable
        columns={[
          {
            title: '序号',
            dataIndex: 'id',
            width: 80,
            editable: false,
          },
          {
            title: '内容/事项',
            dataIndex: 'content',
            renderFormItem: () => <Input.TextArea placeholder='内容/事项' />,
          },
        ]}
        isInEdit
    />,
    renderText: t => t?.map((i, index) => <p>{index + 1 + '、' + i.content}</p>),
    onStep: 1,
    hideInTable: true,
  },
  {
    dataIndex: 'decisionAttach',
    title: '相关附件',
    renderFormItem: () => <FileUpload isInEdit />,
    hideInTable: true,
    onStep: 1,
  },
  {
    title: '交办责任主体',
    dataIndex: 'executeUser',
    renderFormItem: () => <AttendeeSelectCard />,
    renderText: (u: any) => u?.map(i => <Tag color={'processing'} key={i?.id}>{i?.name}</Tag>),
    tooltip: '所选第一顺位为牵头主体',
    hideInTable: true,
    onStep: 1,
  },
  { title: '完成时限', dataIndex: 'executeDate', valueType: 'date', onStep: 1, hideInTable: true },

  {
    title: '执行实施具体情况',
    dataIndex: 'decisionExecuteResult',
    renderFormItem: () => <BaseEditableTable
        columns={[
          {
            title: '事项',
            dataIndex: 'id',
            width: 100,
            editable: false,
          },
          {
            title: '执行实施情况',
            dataIndex: 'result',
            renderFormItem: () => <Input.TextArea placeholder='执行实施情况' />,
          },
        ]}
        isInEdit
    />,
    hideInTable: true,
    onStep: 2,
    renderText: () => ''
  },
  {
    dataIndex: 'executeAttach',
    title: '相关附件',
    renderFormItem: () => <FileUpload isInEdit />,
    hideInTable: true,
    onStep: 2,
  },
];


function MotionList() {

  const { user } = useAuth();

  const navigate = useNavigate();
  const { state, loading } = useHttp('/motion', { initState: [] });

  return <PageContainer
      extra={[<MotionCreateModal isFirstEdit />]}
      loading={loading}
  >
    <BaseEditableTable
        columns={motionColumns.concat({
          title: '详情',
          dataIndex: 'operation',
          width: 100,
          align: 'center',
          render: (_, record: any) => <Space>
            <Tooltip title={'详情'}>
              <Button
                  type={'primary'}
                  icon={<FileTextOutlined />}
                  size={'small'}
                  onClick={() => navigate(`/fr/dz/motion/${record.id}`)}
              />
            </Tooltip>
            {(
                (user?.id === 1 && record.approval?.status === 'REVIEWED' && record.integer1 === 1)
                || (user?.id === record.executeUser?.[0]?.id && record.integer1 === 2)
            ) && <MotionCreateModal isFirstEdit={false} id={record.id} />}
          </Space>

        })}
        value={state}
        isSearch
    />

  </PageContainer>;
}

export default MotionList;