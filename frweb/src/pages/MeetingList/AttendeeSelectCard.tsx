import React from 'react';
import SelectUser from '../../components/SelectUser';
import { Divider, Tooltip, Typography } from 'antd';
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
    <SelectUser withUser onChange={(_, option: any) => onChange([...value, option.data])}/>
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
            title={<div style={{ color: '#000' }}>
              {u.name}
              <Divider type={'vertical'}/>
              <Tooltip title={u.station?.name}>
                {u.station?.name.length > 8 ? u.station?.name.substring(0, 8) + '...' : u.station?.name}
              </Tooltip>
            </div>}
            description={u.department?.name}
        />)
      }
    </CheckCard.Group>
  </>;
}