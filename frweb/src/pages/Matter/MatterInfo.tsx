import React from 'react';
import BaseDescriptions from '../../components/BaseDescriptions';
import { Space, Switch } from 'antd';
import { ProColumns } from '@ant-design/pro-table';

export const matterColumns: ProColumns[] = [
  { title: '编号', dataIndex: 'code'},
  { title: '问题内容', dataIndex: 'content' },
  {
    title: '问题来源及类型',
    dataIndex: 'origin',
    valueType: 'cascader',
    fieldProps: {
      options: [
        {
          value: '0', label: '上级反馈、移交、交办', children: [
            { value: '0-1', label: '纳入上级“七张问题清单”的移交、交办问题' },
            { value: '0-2', label: '上级督查、审计、巡察、安全、环保、信访、网络舆情等反馈、移交、交办问题' },
            { value: '0-3', label: '上级纪检部门监督检查、信访调查、审查调查、问题线索处置等发现、反馈、移交、交办问题' },
            { value: '0-4', label: '上级组织等职能部门监督发现、反馈、移交、交办问题' },
            { value: '0-5', label: '上级人大、政协监督发现、反馈、移交、交办问题' },
            { value: '0-0', label: '上级反馈、移交、交办的其他问题' },
          ],
        },
        {
          value: '1', label: '区(镇)反馈、交办', children: [
            { value: '1-1', label: '本级涉“七张问题清单”的“全量问题库”中的各类问题' },
            { value: '1-2', label: '本级督查、内审、巡查、安全生产、环保、信访、网络舆情等发现、暴露的各类问题' },
            { value: '1-3', label: '本级重点经济业务运行系统、督查考核系统、公权力数据监督系统发现、暴露的各类问题' },
            { value: '1-4', label: '本级纪检监察部门监督检查、信访调查、审查调查、问题线索处置等发现、暴露的各类问题' },
            { value: '1-5', label: '本级组织等职能部门监督、发现的各类问题' },
            { value: '1-6', label: '本级人大、政协监督发现、反馈、移交、交办的问题' },
            { value: '1-0', label: '党委认定应当列入的其他各类问题' },
          ],
        },
        {
          value: '2', label: '责任主体排查发现', children: [
            { value: '2-1', label: '执行上级重大决策部署方面问题或风险' },
            { value: '2-2', label: '履职方面的风险或问题' },
            { value: '2-3', label: '廉洁用权履职方面的问题或风险' },
            { value: '2-4', label: '执行落实中央八项规定精神等方面的问题风险' },
            { value: '2-5', label: '作风建设方面的问题或风险' },
            { value: '2-6', label: '严守国家法律法规和党的纪律方面的问题或风险' },
            { value: '2-0', label: '其他方面的问题或风险' },
          ],
        },
      ],
    },
  },
  { title: '完成日期', dataIndex: 'endDate', valueType: 'date' },
  { title: '责任主体', dataIndex: ['department', 'name'] },
  { title: '负责人', dataIndex: ['user', 'name'] },
];

export default function MatterInfo({ dataSource }) {
  return <>
    <BaseDescriptions
        columns={matterColumns.concat([
          { title: '更新时间', dataIndex: 'updateTime', valueType: 'dateTime' },
          { title: '动态跟踪', dataIndex: 'trace', render: () => <Space><Switch /> 开启动态跟踪</Space> },
        ])}
        dataSource={dataSource}
    />
  </>;
}