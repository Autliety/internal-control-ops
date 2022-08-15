import React from 'react';
import { Button, Divider, Tooltip } from 'antd';
import { CheckCard } from '@ant-design/pro-card';
import SelectUser from '../../components/SelectUser';

type Props = {
  onChange?: (v: object[]) => {},
  value?: object[],
}
export default (
    {
      onChange,
      value = [],
    }: Props,
) => {

  function uniqueFunc(arr, uniId) {
    const res = new Map();
    return arr.filter(item => !res.has(item[uniId]) && res.set(item[uniId], 1));
  }

  return <>
    <SelectUser
        withUser
        onChange={(_, option: any) =>
            onChange(uniqueFunc([...value, option.data], 'id'))}
    />
    <Divider/>
    <CheckCard.Group
        multiple
        size={'small'}
        disabled
    >
      {
        value?.map((u: any) => <CheckCard
            key={u.id}
            value={u.id}
            title={
              <div style={{ color: '#000' }}>
                <Tooltip title={u.name}>
                  {u.name.length > 9 ? u.name.slice(0, 8) + '...' : u.name}
                </Tooltip>
                <Divider type="vertical"/>
              </div>
            }
            extra={<Button
                type="link"
                danger
                onClick={() => onChange(value.filter((i: any) => i.id !== u.id))}
            >
              移除
            </Button>}
        />)
      }
    </CheckCard.Group>
  </>;
}