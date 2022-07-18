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

export const threeColumns: ProColumns[] = [
  {
    title: '序号',
    dataIndex: 'code',
    width: 50,
    hideInForm: true,
    renderText: (_, r, index) => index + 1,
    hideInDescriptions: true,
  },
  {
    title: '拟提交事项',
    dataIndex: 'content1',
    hideInTable: true,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] }
  },
  {
    title: '拟提交事项内容',
    dataIndex: 'longContent1',
    valueType: 'textarea',
    hideInTable: true,
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '议题来源',
    dataIndex: 'content2',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
    renderFormItem: () => <Select placeholder={'请选择'}>
      <Select.Option value={'主管、分管条线自行研究（商议）提出'}>主管、分管条线自行研究（商议）提出</Select.Option>
      <Select.Option value={'相关工作领导小组专题会议研究商议提出'}>相关工作领导小组专题会议研究商议提出</Select.Option>
      <Select.Option value={'镇长办公会议商议提交'}>镇长办公会议商议提交</Select.Option>
      <Select.Option value={'书记专题会议酝酿提交'}>书记专题会议酝酿提交</Select.Option>
      <Select.Option value={'其他情形'}>其他情形</Select.Option>
    </Select>,
  },
  {
    title: '提交人',
    dataIndex: 'destUser',
    renderText: t => t.name,
    hideInForm: true,
  },
  {
    title: '相关附件',
    dataIndex: 'attach',
    renderFormItem: () => <FileUpload isInEdit/>,
    hideInTable: true,
    hideInDescriptions: true,
  },
  { title: '决策状态', dataIndex: 'integer1', hideInForm: true, renderText: i => ['党委决策', '纪委监督', '已完成'][parseInt(i) - 1] },
  {
    title: '决策时间',
    dataIndex: 'time1',
    valueType: 'date',
    formItemProps: { rules: [{ required: true, message: '此项必填' }] },
  },
  {
    title: '决策方式',
    dataIndex: 'content4',
    renderFormItem: () => <Select placeholder={'请选择'}>
      <Select.Option value={'口头表决'}>口头表决</Select.Option>
      <Select.Option value={'举手表决'}>举手表决</Select.Option>
      <Select.Option value={'书面投票'}>书面投票</Select.Option>
      <Select.Option value={'其他'}>其他</Select.Option>
    </Select>,
  },
  { title: '决策过程描述', dataIndex: 'longContent2', valueType: 'textarea', hideInTable: true },
  {
    title: '决策结果',
    dataIndex: 'content5',
    renderFormItem: () => <Select placeholder={'请选择'}>
      <Select.Option value={'同意按提交方案、意见等执行'}>同意按提交方案、意见等执行</Select.Option>
      <Select.Option value={'同意按讨论确定的修改方案、意见等执行'}>同意按讨论确定的修改方案、意见等执行</Select.Option>
      <Select.Option value={'退回重新拟定方案、意见等再行决策'}>退回重新拟定方案、意见等再行决策</Select.Option>
      <Select.Option value={'终止提交方案、意见等不再执行'}>终止提交方案、意见等不再执行</Select.Option>
      <Select.Option value={'其他情况'}>其他情况</Select.Option>
    </Select>,
  },
  { title: '纪委监督意见', dataIndex: 'content6', hideInTable: true },
];

export default function ThreeList() {

  const { user } = useAuth();
  const { state, loading } = useHttp('/ordinal/three', { initState: [] });
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