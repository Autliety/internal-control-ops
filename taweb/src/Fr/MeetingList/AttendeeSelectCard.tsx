import React from 'react';
import { Divider, Tooltip } from 'antd';
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
            title={
              <div style={{ color: '#000' }}>
                {u.name}
                <Divider type='vertical'/>
                <Tooltip title={u.department?.name}>
                  {u.department?.name.length > 8 ? u.department?.name.substring(0, 8) + '...' : u.department?.name}
                </Tooltip>
              </div>
            }
            // description={u.department?.name}
        />)
      }
    </CheckCard.Group>
  </>;
}