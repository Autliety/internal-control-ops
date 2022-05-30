import React from 'react';
import { useHttp } from '../utils/request';
import { Cascader } from 'antd';

type Props = {
  onChange?: (i: { id: number }) => void,
  value?: { id: number },
  filter?: (user: any) => boolean,
  disabled?: boolean
}

export default function UserSelectCascader({ onChange, value, filter = (_) => true, disabled }: Props) {

  const { state } = useHttp('/user', { initState: [] });
  const options = state
  .filter(filter)
  .reduce((r, i) => {
    let d = r.find(d => d.id === i.department.id);
    if (d) {
      d.children.push(i);
    } else {
      r.push({ ...i.department, children: [i] });
    }
    return r;
  }, []);

  return <>
    <Cascader
        style={{ width: 280 }}
        options={options}
        fieldNames={{ label: 'name', value: 'id' }}
        disabled={disabled}

        displayRender={labels => labels?.[0] + ' - ' + labels?.[1]}
        placeholder={'请选择'}

        value={state.map(i => [i.department.id, i.id]).find(l => l[1] === value?.id)}
        onChange={(_, o) => onChange(o?.[o?.length - 1])}
    />
  </>;
}