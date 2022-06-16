import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '@ant-design/pro-layout';
import BaseEditableTable from '../../components/BaseEditableTable';
import { Button, Select, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import UserSelectCascader from '../../components/UserSelectCascader';
import { statusEnum } from '../../utils/nameMap';
import ThreeCreateModal from './ThreeCreateModal';


export const threeColumns: ProColumns[] = [
  { title: '序号', dataIndex: 'code', hideInForm: true },
  { title: '拟提交事项', dataIndex: 'title' },
  { title: '拟提交事项内容', dataIndex: 'content', valueType: 'textarea', hideInTable: true },
  {
    title: '议题来源',
    dataIndex: 'source',
    renderFormItem: () => <Select placeholder={'请选择'}>
      <Select.Option value={0}>主管、分管条线自行研究（商议）提出</Select.Option>
      <Select.Option value={1}>相关工作领导小组专题会议研究商议提出</Select.Option>
      <Select.Option value={2}>镇长办公会议商议提交</Select.Option>
      <Select.Option value={3}>书记专题会议酝酿提交</Select.Option>
      <Select.Option value={4}>其他情形</Select.Option>
    </Select>,
  },
  { title: '提交人', dataIndex: 'user', renderFormItem: () => <UserSelectCascader/> },
  { title: '审核状态', dataIndex: 'status', valueEnum: statusEnum, hideInForm: true },
  { title: '决策时间', dataIndex: 'date', valueType: 'date' },
  {
    title: '决策方式',
    dataIndex: 'method',
    renderFormItem: () => <Select placeholder={'请选择'}>
      <Select.Option value={0}>口头表决</Select.Option>
      <Select.Option value={1}>举手表决</Select.Option>
      <Select.Option value={2}>书面投票</Select.Option>
      <Select.Option value={3}>其他</Select.Option>
    </Select>,
  },
  { title: '决策过程描述', dataIndex: 'process', valueType: 'textarea', hideInTable: true },
  {
    title: '决策结果',
    dataIndex: 'result',
    renderFormItem: () => <Select placeholder={'请选择'}>
      <Select.Option value={0}>同意按提交方案、意见等执行</Select.Option>
      <Select.Option value={1}>同意按讨论确定的修改方案、意见等执行</Select.Option>
      <Select.Option value={2}>退回重新拟定方案、意见等再行决策</Select.Option>
      <Select.Option value={3}>终止提交方案、意见等不再执行</Select.Option>
      <Select.Option value={4}>其他情况</Select.Option>
    </Select>,
  },
  { title: '纪委监督意见', dataIndex: 'result', hideInForm: true },
];

export default function ThreeList() {

  const navigate = useNavigate();

  return <PageContainer
      extra={<ThreeCreateModal/>}
  >
    <BaseEditableTable
        columns={threeColumns.concat({
          title: '详情',
          dataIndex: 'operation',
          width: 100,
          align: 'center',
          render: (_, record: any) => <Tooltip title={'详情'}>
            <Button
                type={'primary'}
                icon={<FileTextOutlined/>}
                size={'small'}
                onClick={() => navigate(`/lz/three/${record.id}`)}
            />
          </Tooltip>,
        })}
        value={[]}
    />
  </PageContainer>;
}