import React from 'react';
import { Select, Space } from 'antd';
import { useHttp } from '../utils/request';

type Props = {
  onChange?: { (value: any): void },
  isSelectUser?: boolean,
}

function SelectUser(props: Props) {

  const { state: deptState } = useHttp('/department?view=LIST', { initState: [] });
  const [deptId, setDeptId] = React.useState('');
  const { state: userState } = useHttp(`/user?deptId=${deptId}`, { initState: [], isManual: deptId === '' });

  return <>
    <Space size={'small'}>
      <Select
          placeholder={'选择部门'}
          style={{ width: 120 }}
          onChange={v => props.isSelectUser ? setDeptId(v) : props.onChange(v)}
      >
        {
          deptState.map((item, index) => <Select.Option key={index} value={item.id}>{item.name}</Select.Option>)
        }
      </Select>
      {
          props.isSelectUser &&
          <Select placeholder={'选择人员'} style={{ width: 120 }} onChange={v => props.onChange(v)}>
            {
              userState.map((item, index) => <Select.Option key={index} value={item.id}>{item.name}</Select.Option>)
            }
          </Select>
      }
    </Space>
  </>;
}

export default SelectUser;