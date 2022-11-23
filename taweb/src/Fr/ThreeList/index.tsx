import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Select, Space, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import ThreeCreateModal from './ThreeCreateModal';
import { useHttp } from '../../utils/request';
import BaseEditableTable from '../../components/BaseEditableTable';
import FileUpload from '../../components/FileUpload';
import { useAuth } from '../../utils/auth';
import UserSelectCascader from '../../components/UserSelectCascader';

export const threeColumns: (ProColumns | any)[] = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 50,
    hideInDescriptions: true,
    hideInForm: true,
    onStep: 0,
  },
  {
    title: '提交人',
    dataIndex: 'requestUser',
    renderText: u => u?.name,
    renderFormItem: () => <UserSelectCascader isSelfOnly disabled/>,
    onStep: 0,
  },
  { title: '提交时间', dataIndex: 'requestTime', valueType: 'date', onStep: 0 },
  {
    title: '拟提交事项',
    dataIndex: 'requestTitle',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
    onStep: 0,
  },
  {
    title: '拟提交事项内容',
    dataIndex: 'requestContent',
    valueType: 'textarea',
    hideInTable: true,
    onStep: 0,
  },
  {
    title: '议题来源',
    dataIndex: 'requestSource',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
    renderFormItem: () => <Select placeholder={'请选择'}>
      <Select.Option value={'主管、分管条线自行研究（商议）提出'}>主管、分管条线自行研究（商议）提出</Select.Option>
      <Select.Option value={'相关工作领导小组专题会议研究商议提出'}>相关工作领导小组专题会议研究商议提出</Select.Option>
      <Select.Option value={'镇长办公会议商议提交'}>镇长办公会议商议提交</Select.Option>
      <Select.Option value={'书记专题会议酝酿提交'}>书记专题会议酝酿提交</Select.Option>
      <Select.Option value={'其他情形'}>其他情形</Select.Option>
    </Select>,
    onStep: 0,
  },
  {
    title: '相关附件',
    dataIndex: 'requestAttach',
    renderFormItem: () => <FileUpload isInEdit/>,
    hideInTable: true,
    hideInDescriptions: true,
    onStep: 0,
  },
  {
    title: '议题审批',
    dataIndex: 'approvalApproveUser',
    renderText: u => u?.name,
    renderFormItem: () => <UserSelectCascader value={{ id: 2 }} disabled/>,
    hideInDescriptions: true,
    hideInTable: true,
    onStep: 0,
  },
  {
    title: '决策时间',
    dataIndex: 'decisionTime',
    valueType: 'date',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
    onStep: 1,
  },
  {
    title: '决策方式',
    dataIndex: 'decisionTitle',
    renderFormItem: () => <Select placeholder={'请选择'}>
      <Select.Option value={'口头表决'}>口头表决</Select.Option>
      <Select.Option value={'举手表决'}>举手表决</Select.Option>
      <Select.Option value={'书面投票'}>书面投票</Select.Option>
      <Select.Option value={'其他'}>其他</Select.Option>
    </Select>,
    onStep: 1,
  },
  { title: '决策过程描述', dataIndex: 'decisionContent', valueType: 'textarea', hideInTable: true, onStep: 1 },
  {
    title: '决策结果',
    dataIndex: 'decisionResult',
    hideInTable: true,
    renderFormItem: () => <Select placeholder={'请选择'}>
      <Select.Option value={'同意按提交方案、意见等执行'}>同意按提交方案、意见等执行</Select.Option>
      <Select.Option value={'同意按讨论确定的修改方案、意见等执行'}>同意按讨论确定的修改方案、意见等执行</Select.Option>
      <Select.Option value={'退回重新拟定方案、意见等再行决策'}>退回重新拟定方案、意见等再行决策</Select.Option>
      <Select.Option value={'终止提交方案、意见等不再执行'}>终止提交方案、意见等不再执行</Select.Option>
      <Select.Option value={'其他情况'}>其他情况</Select.Option>
    </Select>,
    onStep: 1,
  },
  {
    title: '相关附件',
    dataIndex: 'decisionAttach',
    renderFormItem: () => <FileUpload isInEdit/>,
    hideInTable: true,
    hideInDescriptions: true,
    onStep: 1,
  },
  { title: '纪委监督决策', dataIndex: 'decisionControl', valueType: 'textarea', hideInTable: true, onStep: 2 },
  {
    title: '决策执行人',
    dataIndex: 'requestUser',
    renderText: u => u?.name,
    renderFormItem: () => <UserSelectCascader isSelfOnly disabled/>,
    onStep: 3,
  },
  {
    title: '执行时间',
    dataIndex: 'executeTime',
    valueType: 'date',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
    hideInTable: true,
    onStep: 3,
  },
  {
    title: '决策执行概述',
    dataIndex: 'decisionControl',
    valueType: 'textarea',
    hideInTable: true,
    onStep: 3,
  },
  {
    title: '相关附件',
    dataIndex: 'decisionAttach',
    renderFormItem: () => <FileUpload isInEdit/>,
    hideInTable: true,
    hideInDescriptions: true,
    onStep: 3,
  },
  { title: '纪委监督执行', dataIndex: 'executeControl', valueType: 'textarea', hideInTable: true, onStep: 4 },
];

export default function ThreeList() {

  const { user } = useAuth();
  const { state, loading } = useHttp('/three', { initState: [] });
  const navigate = useNavigate();

  return <PageContainer
      extra={<ThreeCreateModal isFirstEdit/>}
      loading={loading}
  >
    <BaseEditableTable
        columns={threeColumns.concat({
          title: '操作',
          dataIndex: 'operation',
          width: 100,
          align: 'center',
          render: (_, record: any) => <Space>
            <Tooltip title={'详情'}>
              <Button
                  type={'primary'}
                  icon={<FileTextOutlined/>}
                  size={'small'}
                  onClick={() => navigate(`/fr/lz/three/${record.id}`)}
              />
            </Tooltip>
            {((user?.id === 1 && record.integer1 === 1) || (user?.id === 28 && record.integer1 === 2)) &&
            <ThreeCreateModal isFirstEdit={false} id={record.id}/>}
          </Space>,
        })}
        value={state}
    />
  </PageContainer>;
}