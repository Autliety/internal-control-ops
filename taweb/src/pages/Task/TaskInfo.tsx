import React from 'react';
import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';
import { Button, Input, Progress, Tag } from 'antd';
import { FooterToolbar } from '@ant-design/pro-layout';
import { useHttp } from '../../utils/request';
import { statusEnumOrigin } from '../../utils/nameMap';
import valueTypeMap from '../../utils/valueTypeMap';
import ApproveAndCopyModal from '../../components/ApproveAndCopyModal';

export default function TaskInfo({ data, pathname }) {

  const [isEdit, setIsEdit] = React.useState(false);
  const { http } = useHttp(pathname, { method: 'PATCH', isManual: true });

  const [tmpData, setTmpData] = React.useState<any>({});

  function mergeTmpData(key, value) {
    setTmpData(orig => {
      return { ...orig, [key]: value };
    });
  }

  const columns: ColumnDef[] = [
    {
      title: '当前状态',
      dataIndex: 'status',
      render: text => <Tag color={statusEnumOrigin[text]?.tag}>{statusEnumOrigin[text]?.label}</Tag>,
      renderFormItem: () => <Tag color={statusEnumOrigin[data.status]?.tag}
      >{statusEnumOrigin[data.status]?.label}</Tag>,
    },
    { title: '执行人', dataIndex: ['user', 'name'] },
    {
      title: '总体进度', dataIndex: 'progress',
      render: () => <Progress percent={40}/>,
      renderFormItem: () => <Progress percent={40}/>,
    },
    {
      title: '目标完成值',
      dataIndex: 'value',
      render: (text, record: any) => valueTypeMap(text, record?.valueType),
      renderFormItem: () => <Input
          defaultValue={data.value}
          placeholder={'当前目标完成值'}
          onChange={e => mergeTmpData('value', e.target.value)}
      />,
    },
    {
      title: '备注',
      dataIndex: 'remark',
      renderFormItem: () => <Input.TextArea
          placeholder={'备注'}
          rows={1}
          defaultValue={data.remark}
          onChange={e => mergeTmpData('remark', e.target.value)}
      />,
    },
  ];

  return <>
    <EditableDescriptions
        columns={columns}
        data={data}
        isEdit={isEdit}
    />
    <FooterToolbar>
      {isEdit ?
          <>
            <Button
                type={'primary'}
                onClick={() => http(null, null, {
                  'id': data.id,
                  'status': data.status,
                  'value': tmpData.value || data.value,
                  'remark': tmpData.remark || data.remark,
                }).then(() => window.location.reload())}
            >
              保存
            </Button>
            <Button type={'default'} onClick={() => setIsEdit(false)}>取消</Button>
          </>
          :
          <>
            <Button onClick={() => setIsEdit(true)}>更新进度</Button>
            <ApproveAndCopyModal onSubmit={() => {}} />
          </>
      }
    </FooterToolbar>
  </>;
}