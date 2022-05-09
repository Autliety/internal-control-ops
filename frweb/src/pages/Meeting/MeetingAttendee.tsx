import React from 'react';
import { CheckCard } from "@ant-design/pro-card";

type Props = {
  data: any,
  isOptional: boolean,
  onChange?: { (v: any): void },
}

function MeetingAttendee(props: Props) {

  return <>
    <CheckCard.Group
        multiple
        size={'small'}
        disabled={!props.isOptional}
        onChange={v => props.onChange(v)}
    >
      {
        props.data?.map((u: any, index) => <CheckCard
            value={u.id}
            key={index}
            title={u.name}
            description={u.department?.name}
        />)
      }
    </CheckCard.Group>
  </>;
}

export default MeetingAttendee;