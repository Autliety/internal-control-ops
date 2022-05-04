import React from 'react';
import { Button, Descriptions, Divider, List, message } from 'antd';

export default function MeasureInfo() {

  const data = [
    {
      id: 1,
      isExist: false,
      measure: '利用政务公开栏，向社会公开全办的政务情况。',
      principalOrg: '领导班子',
      principalUser: '吴胜杰',
      startTime: '2022-04-21',
      endTime: '2022-06-21',
    },
    {
      id: 2,
      isExist: false,
      measure: '深入基层开展普法活动。',
      principalOrg: '领导班子',
      principalUser: '赵小龙',
      startTime: '2022-04-21',
      endTime: '2022-06-21',
    },
  ];

  return <
  >
    <List
        className={'content'}
        itemLayout={'vertical'}
        header={'措施列表'}
        dataSource={data}
        renderItem={item => (
            <List.Item extra={<Button type={'link'} onClick={() => message.warning('先不要编辑！')}>编辑</Button>}>
              <Descriptions layout='vertical' column={5} colon={false}>
                <Descriptions.Item span={3} label={<span style={{ color: '#918d8c' }}>措施内容</span>}>
                  {item.measure}
                </Descriptions.Item>
                <Descriptions.Item label={<span style={{ color: '#918d8c' }}>责任人 | 部门</span>}>
                  {item.principalUser}<Divider type={'vertical'}/>{item.principalOrg}
                </Descriptions.Item>
                <Descriptions.Item label={<span style={{ color: '#918d8c' }}>起止时间</span>}>
                  {item.startTime}<Divider type={'vertical'}/>{item.endTime}
                </Descriptions.Item>
              </Descriptions>
            </List.Item>
        )}
    />

  </>;
}