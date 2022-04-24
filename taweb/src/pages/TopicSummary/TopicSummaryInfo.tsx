import React from 'react';
import { Divider, List, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';

import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';

export default function TopicSummaryInfo() {

  const data = {
    info: {
      principal: '党委',
      startTime: '2022-04-21',
      placement: '行政楼会议室405',
    },
    user: [
      { dept: '领导班子', name: '吴胜杰', station: '经办人' },
      { dept: '领导班子', name: '赵小龙', station: '经办人' },
      { dept: '领导班子', name: '吴玉明', station: '经办人' },
      { dept: '领导班子', name: '李勤根', station: '经办人' },
      { dept: '领导班子', name: '任凯波', station: '经办人' },
      { dept: '领导班子', name: '王哲', station: '经办人' },
      { dept: '领导班子', name: '王玲敏', station: '镇长' },
      { dept: '领导班子', name: '沈伟华', station: '党委书记' },
      { dept: '党建工作办公室', name: '刘晓东', station: '部门负责人' },
    ],
    topic: [
      { id: 1, topic: '讨论研究百步镇‘十四五”农村生活污水治理工作实施方案', attribution: '党政综合办公室' },
      { id: 2, topic: '讨论研究百步镇城乡公益性岗位扩容提质行动实施方案', attribution: '招商和项目推进科' },
      { id: 3, topic: '讨论研究百步镇关于贯彻烟台市燃放烟花爆竹管理条例实施意见', attribution: '生态环境执法分队' },
      { id: 4, topic: '听取2021年百步镇残疾人工作情况汇报', attribution: '社会事务服务管理办公室' },
      { id: 5, topic: '讨论研究百步镇促进生物医药产业健康发展实施意见 ', attribution: '经济发展办公室（统计办公室）' },
    ],
    content: [
      {
        id: 1,
        title: '会议听取了市生态环境局关于《百步镇‘十四五”农村生活污水治理工作实施方案》《百步镇农村生活污水处理设施运行维护暂行管理办法》的' +
            '汇报',
        content: '会议指出，农村生活污水治理是实施乡村振兴战略、改善农村人居环境的重要举措。各级各相关部门要进一步统一思想、提高站位，切实做' +
            '好农村生活污水治理工作。项目建设单位要全面负责治理方案确定、施工进度把控以及施工质量保障等工作。各镇街作为治理工作的责任主体，要' +
            '会同建设单位做好现场施工、后续运维等相关工作。',
      },
      {
        id: 2,
        title: '会议听取了市应急局关于《百步镇‘十四五”安全生产规划》的汇报',
        content: '会议指出，安全生产是实现全市高质量发展的重要保障。各级各有关部门要明确任务，细化措施，完善我市安全生产工作制度机制，有效提' +
            '升城市和企业安全发展的本质水平。近期，要聚焦森林防火、渔业船舶安全、企业复工复产等重点工作，守好守牢安全底线。',
      },
      {
        id: 3,
        title: '会议听取了市人社局关于《百步镇城乡公益性岗位扩容提质行动实施方案》的汇报',
        content: '会议要求，各相关部门和单位要高度重视，严格按照《实施方案》要求做好各自承担的工作。人社局要发挥好牵头抓总作用，会同相关部门' +
            '抓紧做好我镇安置对象范围的认定和岗位设置工作。民政局对退出公益性岗位后生活困难人员，要按规定纳入社会救助范围，做到政策有效衔接、' +
            '帮扶不断。',
      },
    ]
  }

  const InfoColumns: ColumnDef[] = [
    { title: '责任主体', dataIndex: 'principal' },
    { title: '会议时间', dataIndex: 'startTime' },
    { title: '会议地点', dataIndex: 'placement' },
  ];

  const topicColumns: ColumnsType = [
    { title: '序号', dataIndex: 'id', width: 80 },
    { title: '议题内容', dataIndex: 'topic' },
    { title: '议题归属', dataIndex: 'attribution' }
  ];

  return <>
    <Divider orientation={'left'}>会议信息</Divider>
    <EditableDescriptions isEdit={false} columns={InfoColumns} data={data.info}/>

    <Divider orientation={'left'}>参会人员</Divider>
    <List
        grid={{ gutter: 16, column: 5 }}
        dataSource={data.user}
        renderItem={item => (
            <List.Item>
              <List.Item>
                <div className={'content'}>
                  {item.name}
                  <Divider type={'vertical'}/>
                  {item.dept}
                  <Divider type={'vertical'}/>
                  {item.station}
                </div>
              </List.Item>
            </List.Item>
        )}
    />

    <Divider orientation={'left'}>主要议题</Divider>
    <Table
        rowKey={'id'}
        columns={topicColumns}
        dataSource={data.topic}
        pagination={false}
    />

    <Divider orientation={'left'}>会议内容及研究确定事项概述</Divider>
    <List
        className={'content'}
        itemLayout='horizontal'
        dataSource={data.content}
        renderItem={item => (
            <List.Item>
              <List.Item.Meta
                  avatar={item.id}
                  title={item.title}
                  description={item.content}
              />
            </List.Item>
        )}
    />

  </>;
}