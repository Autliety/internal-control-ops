import React from 'react';
import { Select, Space } from 'antd';
import { useHttp } from '../utils/request';

type Props = {
  value?: number,
  onChange?: (value: number, option: any) => void,
  filtered?: number,
  placeholder?: string,
}

function SelectStation(props: Props) {

  // todo filtered for demo only
  const { state: deptState } = useHttp('/department?filtered=' + (props.filtered || 0), { initState: [] });
  const [deptId, setDeptId] = React.useState('');
  const { state: stationState } = useHttp(`/station?deptId=${deptId}`, { initState: [] });

  return <>
    <Space size={'small'}>
      <Select
          placeholder={props.placeholder || '选择部门'}
          style={{ width: 140 }}
          dropdownMatchSelectWidth={200}
          onChange={v => setDeptId(v)}
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
        <Select
            placeholder={'选择岗位'}
            style={{ width: 140 }}
            dropdownMatchSelectWidth={400}
            onChange={(v1, v2) => props.onChange(v1, v2)}
        >
          {
            stationState.map((item, index) =>
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

export default SelectStation;