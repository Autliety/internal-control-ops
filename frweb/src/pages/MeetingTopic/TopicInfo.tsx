import React from 'react';
import { Select } from 'antd';

import { useHttp } from '../../utils/request';
import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';

type Props = {
  isEdit?: boolean,
  data?: any,
  onChange?: any,
};
export default function TopicInfo({ isEdit, data, onChange }: Props) {

  const [deptId, setDeptId] = React.useState('0');
  const { state: deptState } = useHttp('/department?view=LIST', { initState: [] });
  const { state: userState } = useHttp(`/user?deptId=${deptId}`, { initState: [], isManual: deptId === '0' });

  function mergeTmpData(key, value) {
    onChange(orig => {
      return { ...orig, [key]: value };
    });
  }

  const columns: ColumnDef[] = [
    {
      title: '责任主体',
      dataIndex: 'principal',
      renderFormItem: () => <Select
          placeholder={'请选择'}
          defaultValue={data.principal}
          onChange={v => {
            setDeptId(v);
            mergeTmpData('principal', v);
          }}
      >
        {deptState.map((item, index) =>
            <Select.Option key={index} value={item.id}>{item.name}</Select.Option>,
        )}
      </Select>,
    },
    {
      title: '议题编写人',
      dataIndex: 'meetingUser',
      renderFormItem: () => <Select
          placeholder={'请选择'}
          defaultValue={data.meetingUser}
          onChange={v => mergeTmpData('meetingUser', v)}
      >
        {userState.map((item, index) =>
            <Select.Option key={index} value={item.id}>{item.name}</Select.Option>,
        )}
      </Select>,

    },
  ];

  return <>
    <EditableDescriptions
        isEdit={isEdit}
        columns={columns}
        data={data}
    />
  </>;
}