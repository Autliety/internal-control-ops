import React from 'react';
import { Descriptions, Empty, Progress, Typography } from 'antd';
import { toDate } from '../../utils/map';

type Props = {
  value: any[],
  user?: any,
}

export default function MatterCardList({ value, user }: Props) {
  return <>
    {value.length ?
        value.map(matter =>
            <div
                key={matter.id}
                style={{ backgroundColor: '#fff', padding: 10, marginBottom: 12 }}
            >
              <Descriptions title={null} column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}>
                <Descriptions.Item label={'【问题编号】'}>
                  <Typography.Link href={`/fr/mz/list/matter/${matter.id}`}>{matter.code}</Typography.Link>
                </Descriptions.Item>
                <Descriptions.Item label={'【责任主体】'}>{user?.name}</Descriptions.Item>
                <Descriptions.Item label={'【来源类型】'} span={2}>{matter.origin}</Descriptions.Item>
                <Descriptions.Item label={'【问题内容】'} span={2}>{matter.content}</Descriptions.Item>
                <Descriptions.Item label={'【完成时间】'}>{matter.endDate}</Descriptions.Item>
                <Descriptions.Item label={'【更新时间】'}>{toDate(matter.updateTime)}</Descriptions.Item>
                <Descriptions.Item label={'【措施数量】'}>{matter.measureCount}</Descriptions.Item>
                <Descriptions.Item label={'【落实进度】'}><Progress percent={matter.measurePercent} size="small"
                /></Descriptions.Item>
              </Descriptions>
            </div>)
        :
        <Empty />
    }
  </>;
}