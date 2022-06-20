import React from 'react';
import { Button } from 'antd';
import { FooterToolbar } from '@ant-design/pro-layout';
import { useHttp } from '../../utils/request';
import { statusEnum } from '../../utils/nameMap';
import valueTypeMap from '../../utils/valueTypeMap';
import ApproveAndCopyModal from '../../components/ApproveAndCopyModal';
import { ProColumns } from '@ant-design/pro-table';
import BaseDescriptions from '../../components/BaseDescriptions';

export default function TaskInfo({ data, pathname }) {

  const [isEdit, setIsEdit] = React.useState(false);
  const { http } = useHttp(pathname, { method: 'PATCH', isManual: true });
  const [update, setUpdate] = React.useState({});

  const taskInfoColumns: ProColumns[] = [
    {
      title: '当前状态',
      dataIndex: 'status',
      valueEnum: statusEnum,
      editable: false,
    },
    { title: '执行人', dataIndex: ['user', 'name'], editable: false },
    {
      title: '总体进度', dataIndex: 'progress', valueType: 'progress',
    },
    {
      title: '目标完成值',
      dataIndex: 'value',
      renderText: (text, record: any) => valueTypeMap(text, record?.valueType),
    },
    {
      title: '备注',
      dataIndex: 'remark',
      valueType: 'textarea',
    },
  ];

  return <>
    <BaseDescriptions
        columns={taskInfoColumns}
        dataSource={isEdit ? { ...data, ...update } : data}
        editable={isEdit ? {
          onSave: async (_, newInfo) => setUpdate(newInfo),
        } : null}
    />
    <FooterToolbar>
      {isEdit ?
          <>
            <Button
                type={'primary'}
                onClick={() => http(null, null, update).then(() => window.location.reload())}
            >
              保存
            </Button>
            <Button type={'default'} onClick={() => setIsEdit(false)}>取消</Button>
          </>
          :
          <>
            <Button onClick={() => setIsEdit(true)}>更新进度</Button>
            <ApproveAndCopyModal onSubmit={() => {}}/>
          </>
      }
    </FooterToolbar>
  </>;
}