import React from 'react';
import SelectUser from '../../components/SelectUser';
import { Divider } from 'antd';
import { CheckCard } from '@ant-design/pro-card';

type Props = {
  onChange?: (v: object[]) => {},
  value?: object[],
}
export default (
    {
      onChange,
      value = [],
    }: Props
) => {

  return <>
    <SelectUser withUser onChange={(_, option: any) => onChange([...value, option.data])} />
    <Divider />
    <CheckCard.Group
        multiple
        size={'small'}
        disabled
    >
      {
        value?.map((u: any) => <CheckCard
            key={u.id}
            value={u.id}
            title={<div style={{ color: '#000' }}>
              {u.name}
              <Divider type={'vertical'} />
              {u.station?.name}
            </div>}
            description={u.department?.name}
        />)
      }
    </CheckCard.Group>
  </>;
}