import React from 'react';
import { Select, Space } from 'antd';
import { useHttp } from '../utils/request';

type Props = {
  value?: number,
  onChange?: (value: number) => void,
  withUser?: boolean,
}

function SelectUser(props: Props) {

  const { state: deptState } = useHttp('/department?view=LIST', { initState: [] });
  const [deptId, setDeptId] = React.useState('');
  const { state: userState } = useHttp(`/user?deptId=${deptId}`, { initState: [] });

  return <>
    <Space size={'small'}>
      <Select
          placeholder={'选择部门'}
          style={{ width: 120 }}
          onChange={v => props.withUser ? setDeptId(v) : props.onChange(v)}
      >
        {
          deptState.map((item, index) => <Select.Option key={index} value={item.id}>{item.name}</Select.Option>)
        }
      </Select>
      {
          props.withUser &&
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