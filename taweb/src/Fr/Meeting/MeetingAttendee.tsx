import React from 'react';
import { CheckCard } from '@ant-design/pro-card';
import { Empty } from 'antd';

type Props = {
  data: any,
  isOptional: boolean,
  onChange?: { (v: any): void },
}

function MeetingAttendee(props: Props) {

  return <div className='content'>
    {
      props.data?.length > 0
          ? <CheckCard.Group
              multiple
              size={'small'}
              disabled={!props.isOptional}
              onChange={v => props.onChange?.(v)}
          >
            {
              props.data?.map((u: any, index) => <CheckCard
                  value={u.id}
                  key={index}
                  title={
                    <div style={{ color: '#000' }}>
                      {u.name}
                    </div>
                  }
              />)
            }
          </CheckCard.Group>
          : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<p>暂无人员</p>}/>
    }
  </div>;
}

export default MeetingAttendee;