import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import BaseEditableTable from '../../components/BaseEditableTable';
import RiskCreateModal from './RiskCreateModal';
import { Button, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import SelectUser from "../../components/SelectUser";

export const riskColumns: ProColumns[] = [
  { title: '排查人', dataIndex: 'user' },
  { title: '责任主体', dataIndex: 'field', renderFormItem: () => <SelectUser/> },
  { title: '廉政风险点', dataIndex: 'detail', valueType: 'textarea' },
  { title: '防控措施', dataIndex: 'detail', valueType: 'textarea' },
];

export const riskData = [
  { id: 1, user: '王哲', field: '其它班子成员', detail: '测试数据' },
];

export default function RiskList() {

  const navigate = useNavigate();

  return <PageContainer
      extra={<RiskCreateModal/>}
  >
    <BaseEditableTable
        columns={riskColumns.concat({
          title: '详情',
          dataIndex: 'operation',
          width: 100,
          align: 'center',
          render: (_, record: any) => <Tooltip title={'详情'}>
            <Button
                type={'primary'}
                icon={<FileTextOutlined/>}
                size={'small'}
                onClick={() => navigate(`/lz/risk/${record.id}`)}
            />
          </Tooltip>,
        })}
        value={riskData}
    />
  </PageContainer>;
}