import React from 'react';
import BaseDescriptions from '../../components/BaseDescriptions';
import { Space, Switch } from 'antd';
import { ProColumns } from '@ant-design/pro-table';
import UserSelectCascader from '../../components/UserSelectCascader';
import moment from 'moment';

export const matterColumns: ProColumns[] = [
  { title: '编号', dataIndex: 'code' },
  {
    title: '来源及类型',
    dataIndex: 'origin',
    valueType: 'cascader',
    fieldProps: {
      options: [
        {
          value: '上级反馈、移交、交办', label: '上级反馈、移交、交办', children: [
            { value: '纳入上级“七张问题清单”的移交、交办问题', label: '纳入上级“七张问题清单”的移交、交办问题' },
            { value: '上级督查、审计、巡察、安全、环保、信访、网络舆情等反馈、移交、交办问题', label: '上级督查、审计、巡察、安全、环保、信访、网络舆情等反馈、移交、交办问题' },
            { value: '上级纪检部门监督检查、信访调查、审查调查、问题线索处置等发现、反馈、移交、交办问题', label: '上级纪检部门监督检查、信访调查、审查调查、问题线索处置等发现、反馈、移交、交办问题' },
            { value: '上级组织等职能部门监督发现、反馈、移交、交办问题', label: '上级组织等职能部门监督发现、反馈、移交、交办问题' },
            { value: '上级人大、政协监督发现、反馈、移交、交办问题', label: '上级人大、政协监督发现、反馈、移交、交办问题' },
            { value: '上级反馈、移交、交办的其他问题', label: '上级反馈、移交、交办的其他问题' },
          ],
        },
        {
          value: '区(镇)反馈、交办', label: '区(镇)反馈、交办', children: [
            { value: '本级涉“七张问题清单”的“全量问题库”中的各类问题', label: '本级涉“七张问题清单”的“全量问题库”中的各类问题' },
            { value: '本级督查、内审、巡查、安全生产、环保、信访、网络舆情等发现、暴露的各类问题', label: '本级督查、内审、巡查、安全生产、环保、信访、网络舆情等发现、暴露的各类问题' },
            { value: '本级重点经济业务运行系统、督查考核系统、公权力数据监督系统发现、暴露的各类问题', label: '本级重点经济业务运行系统、督查考核系统、公权力数据监督系统发现、暴露的各类问题' },
            { value: '本级纪检监察部门监督检查、信访调查、审查调查、问题线索处置等发现、暴露的各类问题', label: '本级纪检监察部门监督检查、信访调查、审查调查、问题线索处置等发现、暴露的各类问题' },
            { value: '本级组织等职能部门监督、发现的各类问题', label: '本级组织等职能部门监督、发现的各类问题' },
            { value: '本级人大、政协监督发现、反馈、移交、交办的问题', label: '本级人大、政协监督发现、反馈、移交、交办的问题' },
            { value: '一单三书', label: '一单三书' },
            { value: '纪委动议', label: '纪委动议' },
            { value: '党委认定应当列入的其他各类问题', label: '党委认定应当列入的其他各类问题' },
          ],
        },
        {
          value: '责任主体排查发现', label: '责任主体排查发现', children: [
            { value: '执行上级重大决策部署方面问题或风险', label: '执行上级重大决策部署方面问题或风险' },
            { value: '履职方面的风险或问题', label: '履职方面的风险或问题' },
            { value: '廉洁用权履职方面的问题或风险', label: '廉洁用权履职方面的问题或风险' },
            { value: '执行落实中央八项规定精神等方面的问题风险', label: '执行落实中央八项规定精神等方面的问题风险' },
            { value: '作风建设方面的问题或风险', label: '作风建设方面的问题或风险' },
            { value: '严守国家法律法规和党的纪律方面的问题或风险', label: '严守国家法律法规和党的纪律方面的问题或风险' },
            { value: '上级责任主体交办', label: '上级责任主体交办' },
            { value: '其他方面的问题或风险', label: '其他方面的问题或风险' },
          ],
        },
      ],
    },
  },
  { title: '问题内容', dataIndex: 'content', valueType: 'textarea' },
  { title: '完成日期', dataIndex: 'endDate', valueType: 'date' },
  { title: '责任主体', dataIndex: ['department', 'name'], editable: false },
  { title: '负责人', dataIndex: 'user', render: (u: any) => u.name, renderFormItem: () => <UserSelectCascader/> },
];

export default function MatterInfo({ dataSource }) {

  return <>
    <BaseDescriptions
        columns={matterColumns.concat([
          {
            title: '更新时间',
            dataIndex: 'updateTime',
            renderText: text => moment(text).format('YYYY-MM-DD HH:mm'),
          },
          { title: '动态跟踪', dataIndex: 'trace', render: () => <Space><Switch/> 开启动态跟踪</Space> },
        ])}
        dataSource={dataSource}
    />
  </>;
}