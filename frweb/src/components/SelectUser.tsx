import React from 'react';
import { Select, Space } from 'antd';
import { useHttp } from '../utils/request';

type Props = {
  value?: number,
  onChange?: (value: number, option: any) => void,
  withUser?: boolean,
  filtered?: number,
}

function SelectUser(props: Props) {

  // todo filtered for demo only
  const { state: deptState } = useHttp('/department?filtered=' + (props.filtered || 0), { initState: [] });
  const [deptId, setDeptId] = React.useState('');
  const { state: userState } = useHttp(`/user?deptId=${deptId}`, { initState: [] });

  return <>
    <Space size={'small'}>
      <Select
          placeholder={'选择部门'}
          style={{ width: 140 }}
          dropdownMatchSelectWidth={200}
          onChange={(v1, v2) => props.withUser ? setDeptId(v1) : props.onChange(v1, v2)}
      >
        {
          deptState.map((item, index) =>
              <Select.Option
                  key={index}
                  value={item.id}
              >
                {item.name}
              </Select.Option>)
        }
      </Select>
      {
        props.withUser &&
        <Select
            placeholder={'选择人员'}
            style={{ width: 140 }}
            dropdownMatchSelectWidth={200}
            onChange={(v1, v2) => props.onChange(v1, v2)}
        >
          {
            userState.map((item, index) =>
                <Select.Option
                    key={index}
                    value={item.id}
                    data={item}
                >
                  {item.name}
                </Select.Option>)
          }
        </Select>
      }
    </Space>
  </>;
}

export default SelectUser;