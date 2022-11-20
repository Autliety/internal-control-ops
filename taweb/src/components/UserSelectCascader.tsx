import React from 'react';
import { useHttp } from '../utils/request';
import { Cascader } from 'antd';
import { useAuth } from '../utils/auth';

type Props = {
  onChange?: (i: { id: number }) => void,
  value?: { id: number },
  filter?: (user: any) => boolean,
  disabled?: boolean,
  placeholder?: string,
  isSelfOnly?: boolean,
}

export default function UserSelectCascader({
                                             onChange,
                                             value,
                                             filter = (_) => true,
                                             disabled,
                                             placeholder,
                                             isSelfOnly,
                                           }: Props) {

  const { state } = useHttp('/user', { initState: [] });
  const { user } = useAuth();
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
      }, [])
      .sort((a, b) => a.deptOrder - b.deptOrder)

  ;

  return <>
    <Cascader
        style={{ width: 280 }}
        options={options}
        fieldNames={{ label: 'name', value: 'id' }}
        disabled={disabled}

        displayRender={labels => labels?.[0] + ' - ' + labels?.[1]}
        placeholder={placeholder || '请选择'}

        value={state.map(i => [i.department.id, i.id]).find(l => l[1] === (isSelfOnly ? user : value)?.id)}
        onChange={(_, o) => onChange(o?.[o?.length - 1])}
    />
  </>;
}